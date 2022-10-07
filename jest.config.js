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
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [ "**/*.test.ts" ],
  testPathIgnorePatterns: [
    'node_modules',
    '.aws-sam',
  ]
};