import type { Meta, StoryObj } from '@storybook/react'

import { ThemeProvider } from 'next-themes'
import ThemeSwitch from './ThemeSwitch'

const meta: Meta<typeof ThemeSwitch> = {
  title: 'ThemeSwitch',
  component: ThemeSwitch,
  decorators: [
    Story => (
      <ThemeProvider attribute="class">
        <Story />
      </ThemeProvider>
    )
  ]
}

export default meta

type Story = StoryObj<typeof ThemeSwitch>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  name: 'Default',
  render: () => <ThemeSwitch />
}
