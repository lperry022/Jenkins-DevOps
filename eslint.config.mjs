import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
        __dirname: "readonly",
        require: "readonly",
        module: "readonly",
      },
    },
  },
  pluginJs.configs.recommended,
];
