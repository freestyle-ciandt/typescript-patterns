module.exports = {
    extends: ['eslint-config-airbnb'],
    parser: '@typescript-eslint/parser',
    plugins: ['import'],
    root: true,
    "env": {
        "es2021": true
    },
    "parserOptions": {
        "ecmaVersion": "2020",
        "sourceType": "module"
    },
    "rules": {
    }
}
