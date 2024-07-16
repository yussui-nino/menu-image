import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  js.configs.recommended,
  prettierConfig,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        browser: true,
        node: true,
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "single"],
      semi: ["error", "always"],
      "no-unused-vars": ["error"],
      "no-undef": ["error"],
      eqeqeq: ["error", "always"],
      "no-eval": ["error"],
      "no-console": ["warn"],
      curly: ["error", "all"],
      "no-implicit-globals": ["error"],
      "no-var": ["error"],
      "prefer-const": ["error"],
      "prefer-arrow-callback": ["error"],
      "max-len": ["error", { code: 80 }],
      "comma-dangle": ["error", "always-multiline"],
      "keyword-spacing": ["error", { before: true, after: true }],
      "space-before-blocks": ["error", "always"],
      "space-before-function-paren": ["error", "never"],
    },
  },
];
