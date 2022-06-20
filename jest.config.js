module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules'],
  testRegex: '__tests__/.*\\.test\\.jsx',
  setupFilesAfterEnv: ['./setupTests.js'],
  collectCoverage: true,
  modulePaths: ['<rootDir>', 'src'],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
}
