module.exports = {
  extends: ['plugin:vue/recommended'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2016,
    // sourceType: 'module'
  },
  globals: {
    Vue: true,
    chrome: true,
  },
};
