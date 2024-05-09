import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": "off",
      "indent": ["error", 2, { "VariableDeclarator": "first" }],
      "camelcase": "error",
      "no-undef": "error",
      "no-constant-condition": "off",
      semi: ["error", "always"],
    },
  },
];
