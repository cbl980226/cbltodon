import { Meta, StoryObj } from '@storybook/react'
import { PlusIcon } from 'lucide-react'
import * as Tooltip from './Tooltip'

const meta: Meta = {
  title: 'Tooltip'
}

export default meta

type Story = StoryObj<typeof Tooltip.Root>

export const Default: Story = {
  parameters: {
    theme: 'light'
  },
  render: () => (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button>
            <PlusIcon />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content>
            Add to library
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export const DefaultDark: Story = {
  ...Default,
  parameters: {
    theme: 'dark'
  }
}

export const Common: Story = {
  parameters: {
    theme: 'light'
  },
  render: () => (
    <Tooltip.Common content="转发">
      <button>
        <PlusIcon />
      </button>
    </Tooltip.Common>
  )
}

export const CommonDark: Story = {
  ...Common,
  parameters: {
    theme: 'dark'
  }
}
