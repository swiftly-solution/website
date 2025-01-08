import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import remarkGithub from 'remark-github'
import { remarkAlert } from 'remark-github-blockquote-alert'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import remarkCodeTitle from "remark-code-title";
import rehypeSlug from 'rehype-slug'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '../ui/table'
import remarkMdx from 'remark-mdx'
// @ts-expect-error
import remarkCodeBlock from 'remark-code-blocks'
import { ErrorCard } from '../ui/alert-cards'
import { ErrorBoundary } from "react-error-boundary";
import { Button } from '../ui/button'
import Link from 'next/link'

function FallbackRender({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: any }) {
    return (
        <>
            <ErrorCard text={error.message} />
            <Button onClick={resetErrorBoundary}>Re-render</Button>
        </>
    )
}

export default function DocumentationRender({ content }: { content: string }) {

    return (
        <div className='font-docs'>
            <ErrorBoundary FallbackComponent={FallbackRender}>
                <Markdown 
                    remarkPlugins={[remarkCodeBlock, remarkMdx, remarkCodeTitle, remarkGfm, [remarkGithub, { repository: "https://github.com/swiftly-solution/swiftly" }], remarkAlert]} 
                    rehypePlugins={[rehypeAccessibleEmojis, rehypeHighlight, rehypeSlug]}
                    components={{
                        a(props) {
                            const { href, ...all } = props;
                            return <Link href={String(href)} {...all} />
                        },
                        table(props) {
                            return <Table {...props} />
                        },
                        thead(props) {
                            return <TableHeader {...props} />
                        },
                        tbody(props) {
                            return <TableBody {...props} />
                        },
                        tfoot(props) {
                            return <TableFooter {...props} />
                        },
                        th(props) {
                            return <TableHead {...props} />
                        },
                        tr(props) {
                            return <TableRow {...props} />
                        },
                        td(props) {
                            return <TableCell {...props} />
                        },
                    }}
                >{content}</Markdown>
            </ErrorBoundary>
        </div>
    )
}