/** @jsx jsx */
import { Box, Link, Flex, jsx, useColorMode } from "theme-ui"
import ColorModeToggle from "./colormode-toggle"


const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: React.SyntheticEvent) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box
      as="footer"
      variant="layout.footer"
      sx={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, ${isDark ? `0.35` : `0.15`}) 100%)`,
      }}
    >
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          a: { color: `text` },
        }}
      >
        Copyright &copy; {new Date().getFullYear()}
        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </Flex>
    </Box>
  )
}

export default Footer
