import markdownIt from 'markdown-it'

export default async function markdownToHtml(markdownRaw: string) {
  const markdown = markdownIt()
  return markdown.render(markdownRaw)
}
