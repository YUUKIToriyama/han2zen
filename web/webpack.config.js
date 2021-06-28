const path = require("path");
const webpack = require("webpack");

const config = {
	entry: "./main.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js",
	},
	mode: "development",
	module: {
		rules: [{
			test: /\.wasm$/,
			type: "webassembly/async"
		}]
	},
	experiments: {
		asyncWebAssembly: true
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			test: /\.wasm$/,
			options: {
				experiment: {
					asyncWebAssembly: true
				}
			}
		})
	]
};
module.exports = config;