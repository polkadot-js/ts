const base = require('@polkadot/dev/config/eslint.cjs');

module.exports = {
  ...base,
  ignorePatterns: [
    ...base.ignorePatterns
  ],
  parserOptions: {
    ...base.parserOptions,
    project: [
      './tsconfig.json'
    ]
  }
};
