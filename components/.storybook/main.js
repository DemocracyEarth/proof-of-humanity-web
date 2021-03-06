const path = require("path");

module.exports = {
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "storybook-addon-theme-playground/dist",
    "storybook-mobile",
  ],
  stories: ["./guides/*.stories.@(js|mdx)", "../*.stories.@(js|mdx)"],
  webpackFinal(config) {
    config.module.rules.push({
      include: (name) =>
        !name.includes("relay") || name.includes("relay-provider"),
      resolve: {
        alias: {
          "core-js/modules": "@storybook/core/node_modules/core-js/modules",
          "@kleros/components": path.resolve(__dirname, ".."),
          "@kleros/icons": path.resolve(__dirname, "../../icons"),
          subgraph: path.resolve(__dirname, "../../subgraph"),
        },
      },
    });
    return config;
  },
};
