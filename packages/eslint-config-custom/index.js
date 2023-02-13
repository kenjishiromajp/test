module.exports = {
  extends: [
    "next",
    "turbo",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["**/*.test.js", "**/*.test.ts"],
      env: {
        jest: true, // now **/*.test.js files' env has both es6 *and* jest
      },
      // Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
      // "extends": ["plugin:jest/recommended"]
      plugins: ["jest"],
    },
  ],
  parserOptions: {
    ecmaVersion: 2020,
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
