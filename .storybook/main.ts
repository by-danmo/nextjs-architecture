import type { StorybookConfig } from "@storybook/nextjs";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
// function getAbsolutePath(value: string): any {
//     return dirname(require.resolve(join(value, 'package.json')));
// }
const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    // "@storybook/addon-essentials",
    // "@storybook/addon-onboarding",
    // "@chromatic-com/storybook",
    // "@storybook/experimental-addon-test",
    // "@storybook/addon-mdx-gfm",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
};
export default config;
