/** @jsx jsx */
import { Box, Link, Flex, jsx, useColorMode } from "theme-ui"

const Footer = () => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === `dark`

  return (
    <Box as="footer" variant="layout.footer">
      Copyright &copy; {new Date().getFullYear()} • Theme by LekoArts
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
      </Flex>
    </Box>
  )
}

export default Footer
