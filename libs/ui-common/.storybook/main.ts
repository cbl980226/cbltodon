import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import viteTsConfigPaths from 'vite-tsconfig-paths'

const config: StorybookConfig = {
  stories: [
    {
      // 👇 The directory field sets the directory your stories
      directory: '../src/lib',
      // 👇 The titlePrefix field will generate automatic titles for your stories
      titlePrefix: 'UI-COMMON',
      // 👇 Storybook will load all files that contain the stories extension
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
  async viteFinal(config, { configType }) {
    if (configType === 'DEVELOPMENT') {
      // Your development configuration goes here
    }
    if (configType === 'PRODUCTION') {
      // Your production configuration goes here.
    }
    return mergeConfig(config, {
      plugins: [
        viteTsConfigPaths({
          root: '../../../'
        })
      ]
    })
  }
}

export default config

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
