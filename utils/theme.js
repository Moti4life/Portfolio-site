import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f2efeb", "#141414")(props),
      color: mode("rgb(32, 37, 39)", "rgb(223, 218, 216)")(props),
    },
    'html::-webkit-scrollbar': {
      maxWidth: '20px'
    },
    'html::-webkit-scrollbar-thumb': {
      backgroundColor: '#777777',
    },
    
    'html::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#404040'
    },
    'html::-webkit-scrollbar-track': {
      backgroundColor: 'rgba(0,0,0,0)'
    },
  }),
};

// bg: mode('#F3F3F1', '#141414')(props),
// #f5efeb

const colors = {
  jade: {
    50: "#F3F3F1",
    100: "#DFDED8",
    200: "#CAC8BF",
    300: "#B5B3A5",
    400: "#A19D8C",
    500: "#8C8873",
    600: "#706D5C",
    700: "#545145",
    800: "#38362E",
    900: "#1C1B17",
  },
  lime: {
    50: "#F8FFE5",
    100: "#ECFFB8",
    200: "#E0FF8A",
    300: "#D3FF5C",
    400: "#C7FF2E",
    500: "#BBFF00",
    600: "#96CC00",
    700: "#709900",
    800: "#4B6600",
    900: "#253300",
  },
};

const components = {
  Drawer: {
    // setup light/dark mode component defaults
    baseStyle: (props) => ({
      dialog: {
        bg: mode("jade.100", "#202020")(props),
      },
    }),
  },
};

const theme = extendTheme({ config, styles, colors, components });

export default theme;
