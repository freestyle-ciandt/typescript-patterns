/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.ts'
  ],
  coveragePathIgnorePatterns: [
    'node_modules',
    '.aws-sam',
    'appsync.d.ts',
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [ "**/*.test.ts" ],
  testPathIgnorePatterns: [
    'node_modules',
    '.aws-sam',
  ]
};