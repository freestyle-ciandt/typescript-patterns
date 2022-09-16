module.exports = {
    extends: ['airbnb-base', 'airbnb-typescript/base', 'plugin:import/recommended', 'plugin:import/typescript'],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json"
    },
    "ignorePatterns": ['.eslintrc.js'],
    "plugins": [
        "@typescript-eslint"
    ],
    "settings": {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
                // Multiple tsconfigs (Useful for monorepos)

                // use a glob pattern
                "project": "tsconfig.json",
            }
        }
    },
    "rules": {
        'no-param-reassign': ['error', {
            "props": true,
            "ignorePropertyModificationsFor": ["acc"]
        }],
        "object-curly-newline": ["error", {
            "ObjectExpression": "always",
            "ObjectPattern": { "multiline": true, "minProperties": 3 },
            "ImportDeclaration": { "multiline": true, "minProperties": 3 },
            "ExportDeclaration": { "multiline": true, "minProperties": 3 }
        }],
        'no-cond-assign': ["error", "always"]
    }
}