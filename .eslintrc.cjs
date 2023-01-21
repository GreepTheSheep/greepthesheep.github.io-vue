/* eslint-env node */
module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-essential',
        'plugin:tailwindcss/recommended',
        'eslint:recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        "tailwindcss/no-custom-classname": "off",
        "no-unused-vars": "warn"
    }
}
