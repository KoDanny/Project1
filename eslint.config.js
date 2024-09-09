import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    ignores: ['node_modules'],
  },
  {
    rules: {
      semi: "error",
      "prefer-const": "error",
    }
  }
];