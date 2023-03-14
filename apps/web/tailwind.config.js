const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind')
const { join } = require('path')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,app,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / 1)'
        }
      },
      borderColor: {
        primary: {
          DEFAULT: 'rgb(var(--color-border) / 0.13)'
        }
      }
    }
  },
  plugins: []
}
