import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false
}

const styles = {
    global: props => ({
        body: {
            bg: mode('#F3F3F1', '#141414')(props),
            color: mode('rgb(32, 37, 39)', 'rgb(223, 218, 216)')(props)
        }
    })
}

const colors = {
    "jade": {
      "50": "#F3F3F1",
      "100": "#DFDED8",
      "200": "#CAC8BF",
      "300": "#B5B3A5",
      "400": "#A19D8C",
      "500": "#8C8873",
      "600": "#706D5C",
      "700": "#545145",
      "800": "#38362E",
      "900": "#1C1B17"
    }
  }

const components = {
  Drawer: {
    // setup light/dark mode component defaults
    baseStyle: props => ({
      dialog: {
        bg: mode('jade.100', '#202020')(props),
      }
    })
  }
};




const theme = extendTheme({ config, styles, colors, components })

export default theme