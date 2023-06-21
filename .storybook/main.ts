import type { StorybookConfig } from '@storybook/react-webpack5';
const path = require('path');

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', 'storybook-css-modules'],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: async (config) => {
        config.module.rules.push(
          {
            test: /\.s(a|c)ss$/,
            include: path.resolve(__dirname, '../'),
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    auto: true,
                    localIdentName: '[name]__[local]--[hash:base64:5]',
                  },
                },
              },
              'sass-loader',
              {
                loader: 'style-resources-loader',
                options: {
                    patterns: [
                        // ? if you want to global add style files - do it here
                       'src/assets/styles/mixins.scss',
                       'src/assets/styles/variables.scss'
                    ],
                },
            
              }
            ],
          },
        );
        return config;
      },
};
export default config;
