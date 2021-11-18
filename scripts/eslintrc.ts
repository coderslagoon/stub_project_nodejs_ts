import * as eslint from "eslint";

const config: eslint.Linter.BaseConfig = {

    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],

    parser: "@typescript-eslint/parser",

    parserOptions: {
        project: "./tsconfig.json"
    },

    rules: {
    },

    settings: {
    }
};

export = config;
