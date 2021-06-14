const purgecss = require('@fullhuman/postcss-purgecss')
const autoprefixer = require('autoprefixer')

module.exports = () =>{
  return {
  plugins: [
    autoprefixer,
    purgecss({
        content: ['**/*.html'], // content
        css: ['**/*.css'], // css
        output: ['dist/purge/'],
        extractors: [
            {
              extractor: content => content.match(/[A-z0-9-:\/.]+/g) || [],
              extensions: ['html']
            }
          ]
    })
  ]
}
}