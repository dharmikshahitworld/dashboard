import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
  {
    languageOptions: {
      parser: tsParser,
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  tseslint.configs.recommended,
  fixupConfigRules(pluginReactConfig),
];