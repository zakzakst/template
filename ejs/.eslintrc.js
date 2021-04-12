module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
  globals: {
    window: true,
    module: true,
    gsap: true,
  },
  parserOptions: {
    sourceType: 'module'
  },
};
