// customTheme.js
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    primary: {
      50: "purple.50",
      100: "purple.100",
      200: "#adc8ff",
      300: "#84a9ff",
      // Define your custom shades of the primary color here
      500: "#3366FF",
      600: "#254EDB",
      700: "#1A3DB3",
      800: "#102C8A",
      900: "#061C61",
    },
    secondary: {
      // Define your secondary color here
    },
    // Define more custom colors as needed
  },
});

export default customTheme;
