import type { Meta, StoryObj } from '@storybook/react'
import * as DropdownMenu from './DropdownMenu'

const meta: Meta = {
  title: 'DropdownMenu'
}

export default meta

type Story = StoryObj<typeof DropdownMenu.Root>

export const Default: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={5}>
          <DropdownMenu.Item onSelect={() => console.log('undo')}>
            Undo
          </DropdownMenu.Item>
          <DropdownMenu.Item onSelect={() => console.log('redo')}>
            Redo
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item disabled onSelect={() => console.log('cut')}>
            Cut
          </DropdownMenu.Item>
          <DropdownMenu.Item onSelect={() => console.log('copy')}>
            Copy
          </DropdownMenu.Item>
          <DropdownMenu.Item onSelect={() => console.log('paste')}>
            Paste
          </DropdownMenu.Item>
          <DropdownMenu.Arrow />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export const DefaultLight: Story = {
  ...Default,
  parameters: {
    theme: 'light'
  }
}

export const DefaultDark: Story = {
  ...Default,
  parameters: {
    theme: 'dark'
  }
}
