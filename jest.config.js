module.exports = {
    verbose: true,
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        "^@/(.*)$": "<rootDir>/src/$1",
        "^components/(.*)$": "<rootDir>/src/components/$1",
        "^redux/(.*)$": "<rootDir>/src/redux/$1",
        "^api/(.*)$": "<rootDir>/src/api/$1",
        "^app/(.*)$": "<rootDir>/src/app/$1",
        "\\.svg$": "<rootDir>/__mocks__/svgrMock.js",
    },
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { configFile: "./.babelrc" }],
    },
    transformIgnorePatterns: [
        "/node_modules/(?!(@reduxjs|redux|react-redux)/)",
    ],
    moduleFileExtensions: ["js", "jsx", "json"],
    moduleDirectories: ["node_modules", "src"],
};
