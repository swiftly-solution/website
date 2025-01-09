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

function FallbackRender({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: any }) {
    return (
        <>
            <ErrorCard text={error.message} />
            <Button onClick={resetErrorBoundary}>Re-render</Button>
        </>
    )
}

export default function DocumentationRender({ content }: { content: string }) {
    console.log(content)
    return (
        <ErrorBoundary FallbackComponent={FallbackRender}>
            <Markdown 
                className="markdown-body"
                remarkPlugins={[remarkParse, remarkCodeTitle, remarkGfm, [remarkGithub, { repository: "https://github.com/swiftly-solution/swiftly" }], remarkAlert]} 
                rehypePlugins={[rehypeAccessibleEmojis, rehypeHighlight, rehypeSlug, [
                    rehypeReact,
                    {
                        createElement: createElement,
                        components: { Tabs, TabsContent, TabsList, TabsTrigger }
                    }
                ], rehypeRaw]}
                components={{
                    a(props) {
                        const { href, children } = props;
                        return <Link href={String(href)}>{children}</Link>
                    },
                    // @ts-expect-error
                    tabs: ({node, children, defaultvalue, ...props}) => {
                        return <Tabs defaultValue={defaultvalue} {...props}>{children}</Tabs>
                    },
                    // @ts-expect-error
                    tabscontent: ({node, children, ...props}) => {
                        // @ts-expect-error
                        return <TabsContent {...props}>
                            {typeof children == "string" ? <DocumentationRender content={children} /> : (
                                children.map((childs: any) => {
                                    if(typeof childs == "string") return <DocumentationRender content={childs} />
                                    else return <>{childs}</>
                                })
                            )}
                        </TabsContent>
                    },
                    // @ts-expect-error
                    tabslist: ({node, children, ...props}) => <TabsList {...props}>{children}</TabsList>,
                    // @ts-expect-error
                    tabstrigger: ({node, children, ...props}) => <TabsTrigger {...props}>{children}</TabsTrigger>,
                }}
            >{content}</Markdown>
        </ErrorBoundary>
    )
}