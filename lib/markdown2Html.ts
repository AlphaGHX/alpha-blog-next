import markdownIt from 'markdown-it'
import markdownItHightlightjs from 'markdown-it-highlightjs'

export default async function markdownToHtml(markdownRaw: string) {
  const markdown = markdownIt().use(markdownItHightlightjs, { inline: true })
  return markdown.render(markdownRaw)
}
