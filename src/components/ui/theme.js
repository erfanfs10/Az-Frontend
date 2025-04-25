import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { _light: "{colors.gray.50}", _dark: "{colors.gray.900}" }, // Custom dark background
          },
          subtle: {
            value: { _light: "{colors.gray.50}", _dark: "{colors.gray.900}" }, // Custom dark subtle background
          },
          muted: {
            value: { _light: "{colors.gray.100}", _dark: "{colors.gray.600}" }, // Custom dark muted background
          },
        },
        fg: {
          DEFAULT: {
            value: { _light: "{colors.gray.900}", _dark: "{colors.gray.50}" }, // Custom dark text color
          },
          muted: {
            value: { _light: "{colors.gray.600}", _dark: "{colors.gray.100}" }, // Custom dark muted text
          },
        },
        border: {
          DEFAULT: {
            value: { _light: "{colors.gray.200}", _dark: "#404040" }, // Custom dark border
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
