module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: "./test/.*.test.ts$",
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  },
  setupFiles: ["dotenv/config"]
};