import React from 'react'
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
import { Decorator } from '@storybook/react'

const withTheme: Decorator = (Story, context) => {
  // Get the active theme value from the story parameter
  const { theme } = context.parameters
  return (
    <ThemeProvider
      attribute="class"
      forcedTheme={theme}
      storageKey="storybook-theme"
    >
      <Story />
    </ThemeProvider>
  )
}

export const decorators = [withTheme]
