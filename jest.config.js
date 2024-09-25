module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testPathIgnorePatterns: ['/node_modules/', '/dist/'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
	transform: {
	  '^.+\\.(ts|tsx)$': 'ts-jest',
	},
	testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  };
  