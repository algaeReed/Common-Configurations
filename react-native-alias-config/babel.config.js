module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@src': './src',
        },
      },
    ],
  ],
  overrides: [
    {
      test: [
        "./src/index.ts"
      ],
      plugins: ["babel-plugin-transform-remove-console"]
    }
  ]
};
