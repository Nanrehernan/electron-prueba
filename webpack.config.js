const path = require("path")
const HTML = require("html-webpack-plugin")

const output = {
    path: path.join(__dirname, "public"),
    filename: "react.main.js"
}

const ruleCSS = {
    test: /\.css$/,
    use: ["style-loader", "css-loader"]
}

const ruleReact = {
    test: /\.jsx|.js$/,
    exclude: /node_modules/,
    use: ["babel-loader"]
}

const configPlugin = {
    template: path.join(__dirname, "public", "index.html")
}

const plugins = [
    new HTML(configPlugin)
]

const resolve = {
    extensions: [".js", ".jsx", ".json"],
    modules: [path.resolve(__dirname, "react"), "node_modules"]
}

const devServer = {
    port: 3000
}

module.exports = {
    entry: "./react/index.jsx",
    output: output,
    module: {
        rules: [ruleCSS, ruleReact]
    },
    resolve: resolve,
    devServer: devServer,
    //plugins: plugins,
    
}