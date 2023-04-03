import 'tailwindcss/tailwind.css'
import React from 'react'
import * as NextImage from 'next/image'

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <img alt="" {...props} />
})
