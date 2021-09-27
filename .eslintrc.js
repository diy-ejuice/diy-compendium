module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      presets: [['@babel/preset-react', { runtime: 'automatic' }]]
    },
    requireConfigFile: false,
    ecmaVersion: 12
  },
  rules: {
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: ['./src']
      }
    }
  }
};
