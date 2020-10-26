const base = require('@polkadot/dev/config/eslint');

module.exports = {
  ...base,
  ignorePatterns: [
    '.github/**',
    '.vscode/**',
    '.yarn/**',
    '**/build/*',
    '**/coverage/*',
    '**/node_modules/*'
  ],
  parserOptions: {
    ...base.parserOptions,
    project: [
      './tsconfig.json'
    ]
  }
};
