import { em } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

const breakpoints = {
  sm: 639,
  md: 767,
  lg: 1022,
  xl: 1279,
  '2xl': 1535,
}

const useMantineMediaQuery = (breakpoint: keyof typeof breakpoints = 'lg') => {
  const maxWidth = `(max-width: ${em(breakpoints[breakpoint])})`

  const isMobile = useMediaQuery(maxWidth)

  return isMobile
}

export default useMantineMediaQuery
