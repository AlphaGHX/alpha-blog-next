import markdownIt from 'markdown-it'
import markdownItHighlightjs from 'markdown-it-highlightjs'

export default async function markdownToHtml(markdownRaw: string) {
  const markdown = markdownIt().use(markdownItHighlightjs, { inline: true })
  return markdown.render(markdownRaw)
}
