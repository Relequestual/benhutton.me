module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    "plugin:vue/essential",
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier"
  ],
  plugins: [
    "vue"
  ],
  // add your custom rules here
  rules: {
    "vue/max-attributes-per-line": [
      "error",
      {
        "singleline": 5,
        "multiline": {
          "max": 1,
          "allowFirstLine": true
        }
      }
    ]
  },
}
