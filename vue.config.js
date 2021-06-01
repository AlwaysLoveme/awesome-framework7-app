/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const DotEnv = require("dotenv-webpack");
const node_env = process.env.NODE_ENV;

module.exports = {
  publicPath: "./",
  lintOnSave: true,
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new DotEnv({
        path: path.resolve(
          __dirname,
          `./.env.${node_env === "development" ? "dev" : "prod"}`
        ),
      }),
    ],
  },
};
