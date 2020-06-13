module.exports = {
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "extends": [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json",
  },
  "plugins": ["@typescript-eslint", "prettier"],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      },

      // https://github.com/benmosher/eslint-plugin-import/issues/1485
      "typescript": {}
    },
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "no-console": "off",
    "prettier/prettier": ["error", { "semi": false } ],
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] } ],

    // https://stackoverflow.com/questions/59265981/typescript-eslint-missing-file-extension-ts-import-extensions
    "import/extensions": [
      "error", "ignorePackages", { "ts": "never", "tsx": "never" }
    ],

    // Next.js の <Link> で警告出ないように対応する
    "jsx-a11y/anchor-is-valid": "off",
  }
}
