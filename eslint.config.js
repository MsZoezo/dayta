import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import stylistic from "@stylistic/eslint-plugin"


export default [
  {
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    plugins: {
      "@stylistic":stylistic
    }
  },
  stylistic.configs.customize({
    semi: true,
    quotes: "double",
    indent: 4
  }),
  {
    rules: {
      "react/react-in-jsx-scope": "off",
    }
  }
];