import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import remarkGithub from 'remark-github'
import { remarkAlert } from 'remark-github-blockquote-alert'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import remarkCodeTitle from "remark-code-title";
import rehypeSlug from 'rehype-slug'
import Link from 'next/link'
import rehypeRaw from 'rehype-raw'
import remarkParse from 'remark-parse';
import rehypeReact from 'rehype-react'
import { createElement } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ErrorCard } from '../ui/alert-cards'
import { ErrorBoundary } from "react-error-boundary";
import { Button } from '../ui/button'
import { useTheme } from '../ui/theme-provider'
import { Documentation } from '@prisma/client'
import Catalog from './render/catalog/Catalog'

function FallbackRender({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: any }) {
    return (
        <>
            <ErrorCard text={error.message} />
            <Button onClick={resetErrorBoundary}>Re-render</Button>
        </>
    )
}

export default function DocumentationRender({ content, navbarData }: { content: string, navbarData: Documentation[] }) {
    return (
        <ErrorBoundary FallbackComponent={FallbackRender}>
            <Markdown 
                className={`markdown-${useTheme().theme}`}
                remarkPlugins={[remarkParse, remarkCodeTitle, remarkGfm, [remarkGithub, { repository: "https://github.com/swiftly-solution/swiftly" }], remarkAlert]} 
                rehypePlugins={[rehypeAccessibleEmojis, rehypeHighlight, rehypeSlug, [
                    rehypeReact,
                    {
                        createElement: createElement,
                        components: { Tabs, TabsContent, TabsList, TabsTrigger, Catalog }
                    }
                ], rehypeRaw]}
                components={{
                    a(props) {
                        const { href, children } = props;
                        return <Link href={String(href)}>{children}</Link>
                    },
                    // @ts-expect-error
                    tabs: ({children, defaultvalue, ...props}) => {
                        return <Tabs defaultValue={defaultvalue} {...props}>{children}</Tabs>
                    },
                    // @ts-expect-error
                    tabscontent: ({children, ...props}) => {
                        // @ts-expect-error
                        return <TabsContent {...props}>
                            {typeof children == "string" ? <DocumentationRender content={children} navbarData={navbarData} /> : (
                                children.map((childs: any, idx: number) => {
                                    if(typeof childs == "string") return <DocumentationRender key={idx} content={childs} navbarData={navbarData} />
                                    else return <>{childs}</>
                                })
                            )}
                        </TabsContent>
                    },
                    // @ts-expect-error
                    tabslist: ({children, ...props}) => <TabsList {...props}>{children}</TabsList>,
                    // @ts-expect-error
                    tabstrigger: ({children, ...props}) => <TabsTrigger {...props}>{children}</TabsTrigger>,
                    // @ts-expect-error
                    catalog: (props) => <Catalog {...props} navbarData={navbarData} />
                }}
            >{content}</Markdown>
        </ErrorBoundary>
    )
}