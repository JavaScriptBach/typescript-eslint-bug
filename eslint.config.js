const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");

function pluginsConfig() {
  return {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
  };
}

function ignoresConfig() {
  return {
    ignores: [
      "node_modules/**",
      // generated code
      "**/dist/**",
    ],
  };
}

function typescriptConfig() {
  return {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    files: ["**/*.{ts,tsx}"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
  }
}

module.exports = tseslint.config(
  pluginsConfig(),
  ignoresConfig(),
  typescriptConfig()
);
