module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  env: {
    browser: true,
  },
 extends: "standard",
  // required to lint *.vue files
  plugins: ["html"],
  // check if imports actually resolve
  settings: {
    "import/resolver": {
      webpack: {
        config: "build/webpack.base.conf.js",
      },
    },
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        vue: "never",
      },
    ],
    // allow optionalDependencies
    "import/no-extraneous-dependencies": [
      "error",
      {
        optionalDependencies: ["test/unit/index.js"],
      },
    ],
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    semi: "off",
    "spaced-comment": "off",
    "comma-dangle": "off",
    "eol-last": "off",
    "import/no-unresolved": "off",
    "import/no-duplicates": "off",
    "import/no-extraneous-dependencies": "off",
    "import/first": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "import/no-dynamic-require": "off",
    "no-dynamic-require": 'off',
    "global-require": 'off',
    "no-plusplus": "off",
    quotes: "off",
    camelcase: "off",
    "import/extensions": ["off", "never"],
    'arrow-parens': 'off',
    "max-len": "warn",
    camelcase: "warn",
    "no-unneeded-ternary": "warn",
  },
}
