import hljs from 'highlight.js'
import markdownIt from 'markdown-it'

export default async function markdownToHtml(markdownRaw: string) {
  const markdown = markdownIt({
    highlight: function (str, lang) {
      if (lang) {
        if (lang === 'vue') lang = 'html'
        try {
          return hljs.highlight(lang, str).value
        } catch (__) {}
      }

      return ''
    },
  })
  return markdown.render(markdownRaw)
}
