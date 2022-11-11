node -r dotenv/config node_modules/.bin/webpack --config webpack.bootstrap.js --watch &
node -r dotenv/config node_modules/.bin/webpack-dev-server --config webpack.mount.js
