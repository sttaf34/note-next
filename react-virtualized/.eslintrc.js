module.exports = {
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "extends": [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json",
    "createDefaultProgram": true
  },
  "plugins": ["@typescript-eslint", "prettier"],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    },
    "react": {
      "version": "16.11"
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

    // export default は基本使わないとする
    // https://engineering.linecorp.com/ja/blog/you-dont-need-default-export/
    // pages ディレクトリ下では限定的に許可して対応してる
    "import/no-default-export": "error",
    "import/prefer-default-export": "off",
  }
}
