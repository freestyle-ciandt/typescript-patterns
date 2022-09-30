/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.ts',
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__test__/',
    '.d.ts',
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
  testMatch: [
    '**/__test__/**/*.test.ts',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '.aws-sam/',
  ],
  verbose: true,

};
