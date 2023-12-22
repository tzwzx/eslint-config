module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es2022": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "ecmaFeatures": {
      "jsx": true
    },
    "project": "./tsconfig.json"
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "prettier"
  ],
  "ignorePatterns": ["next.config.js"],
  "plugins": [
    "@typescript-eslint",
    "unused-imports",
    "no-relative-import-paths",
    "perfectionist"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        "prefer": "type-imports"
      }
    ],
    "no-relative-import-paths/no-relative-import-paths": [
      "error",
      {
        "allowSameFolder": true,
        "rootDir": "src",
        "prefix": "@"
      }
    ],
    "perfectionist/sort-imports": "off",
    "react/jsx-curly-brace-presence": "error",
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": false
      }
    ]
  }
}
