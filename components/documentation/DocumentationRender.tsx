import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import remarkGithub from 'remark-github'
import { remarkAlert } from 'remark-github-blockquote-alert'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import remarkCodeTitle from "remark-code-title";
import rehypeSlug from 'rehype-slug'
// @ts-expect-error
import remarkCodeBlock from 'remark-code-blocks'
import Link from 'next/link'
import rehypeRaw from 'rehype-raw'

export default function DocumentationRender({ content }: { content: string }) {

    return (
        <div className='font-docs'>
            <Markdown 
                className="markdown-body"
                remarkPlugins={[remarkCodeBlock, remarkCodeTitle, remarkGfm, [remarkGithub, { repository: "https://github.com/swiftly-solution/swiftly" }], remarkAlert]} 
                rehypePlugins={[rehypeAccessibleEmojis, rehypeHighlight, rehypeSlug, rehypeRaw]}
                components={{
                    a(props) {
                        const { href, children } = props;
                        return <Link href={String(href)}>{children}</Link>
                    },
                }}
            >{content}</Markdown>
        </div>
    )
}