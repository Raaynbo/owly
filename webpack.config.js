const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode:"development",
	entry:"./src/index.js",
	output:{
		filename:"main.js",
		path: path.resolve(__dirname,"dist"),
		clean:true,
	},
	devtool:"eval-source-map",
	devServer: {
		watchFiles: ["./src/template.html"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template.html",
			title:"my restaurant page",
			filename:'index.html',
		}),	
	],
	module:{ 
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.css$/i,
				use: ["style-loader","css-loader"]
			},
			{
				test: /\.(png|svg|jpeg|jpg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
};