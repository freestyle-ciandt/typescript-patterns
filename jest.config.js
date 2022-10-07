/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [ "**/*.test.ts" ],
  testPathIgnorePatterns: [
    'node_modules',
    '.aws-sam',
  ]
};