import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    html: {
      colorPalette: "blue",
    },
  },
  theme: {
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { _light: "{colors.gray.200}", _dark: "{colors.gray.900}" }, // Custom dark background
          },
          subtle: {
            value: { _light: "{colors.gray.50}", _dark: "{colors.gray.800}" }, // Custom dark subtle background
          },
          muted: {
            value: { _light: "{colors.gray.100}", _dark: "{colors.gray.600}" }, // Custom dark muted background
          },
          panel: {
            value: { _light: "{colors.gray.100}", _dark: "{colors.gray.800}" },
          },
        },
        fg: {
          DEFAULT: {
            value: { _light: "{colors.gray.900}", _dark: "{colors.gray.50}" },
          },
          subtle: {
            value: { _light: "{colors.gray.600}", _dark: "{colors.gray.100}" },
          },
          muted: {
            value: { _light: "{colors.gray.600}", _dark: "{colors.gray.100}" },
          },
        },
        border: {
          DEFAULT: {
            value: { _light: "{colors.gray.200}", _dark: "#404040" },
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
