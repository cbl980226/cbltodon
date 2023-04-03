import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import path from 'node:path'

const config: StorybookConfig = {
  stories: [
    {
      directory: '../src/lib',
      titlePrefix: 'UI-MASTO',
      files: '**/*.stories.@(js|jsx|ts|tsx|mdx)'
    }
  ],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: ''
      }
    }
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      define: {
        'process.env': {}
      },
      plugins: [
        viteTsConfigPaths({
          root: path.join(__dirname, '../../../')
        })
      ]
    })
  }
}

export default config

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
