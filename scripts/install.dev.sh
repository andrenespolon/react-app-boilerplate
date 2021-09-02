#!/usr/bin/env bash
# Install dev dependencies
# Author: André Nespolon

# json-server
yarn add -D json-server

# prettier and custom cmd to generate prettier rc
yarn add -D --exact prettier && prettier -c

# eslint (and config-prettier to work fine together)
yarn add -D eslint eslint-config-prettier eslint-plugin-prettier && yarn run eslint --init
# eslint style guide arbnb maybe request these dependencies
# yarn add -D eslint-plugin-react eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react-hooks

# jest to test
yarn add --dev jest