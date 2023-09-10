'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Image from './Image'
import { ImageProps } from 'next/image'

type ThemedImageProps = {
  alt: string
  lightSrc: string
  darkSrc: string
} & Omit<ImageProps, 'src' | 'alt'>

const ThemedImage = ({ alt, lightSrc, darkSrc, ...rest }: ThemedImageProps) => {
  const { theme } = useTheme()
  const [activeTheme, setActiveTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const setSystemTheme = () => {
      const prefersDark =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      setActiveTheme(prefersDark ? 'dark' : 'light')
    }

    if (theme === 'system') {
      setSystemTheme()
      const matcher = window.matchMedia('(prefers-color-scheme: dark)')
      matcher.addEventListener('change', setSystemTheme)
      return () => matcher.removeEventListener('change', setSystemTheme)
    } else {
      setActiveTheme(theme as 'light' | 'dark')
    }
  }, [theme])

  return <Image alt={alt} src={activeTheme === 'light' ? lightSrc : darkSrc} {...rest} />
}

export default ThemedImage
