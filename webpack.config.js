const path = require("path");

/**
 * Plugins
 */
const WebpackMonitor = require('webpack-monitor');

module.exports = {

    /**
     * Entry
     * =====
     * Default: './src/index.js'
     */
    entry: "./src/assets/index.js",

    /**
     * Output
     * ======
     * Default: './dist/[name].js'
     */
    output: {
        filename: "./assets/bundle.js",
        path: path.resolve(__dirname, "dist"),
    },

    /**
     * Webpack Dev Server
     */
    devServer: {
        contentBase: "./src",
        overlay: {
            warnings: false,
            errors: true
        },
    },

    /**
     * Modules
     */
    module: {
        rules: [

            /**
             * JavaScript Compilation / Transpilation
             */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },

            /**
             * HTML Asset Paths
             */
            {
                test: /\.(html)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]"
                        }
                    },
                    {
                        loader: "extract-loader",
                    },
                    {
                        loader: "html-loader"
                    }
                ]
            },

            /**
             * CSS Compilation
             */
            {
                test: /\.css$/,
                use: [
                  "style-loader",
                  "css-loader"
                ]
            },

            /**
             * Images & Image Optimization
             */
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                include: [
                    path.resolve(__dirname, "src/assets/images/")
                ],
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[hash:8].[ext]",
                            outputPath: "assets/images/"
                        }
                    },
                    {
                        loader: "image-webpack-loader",
                    }
                ]
            },

            /**
             * Fonts
             */
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
                include: [
                    path.resolve(__dirname, "src/assets/fonts/")
                ],
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[hash:8].[ext]",
                            outputPath: "assets/fonts/"
                        }
                    }
                ]
            }
        ]
    },

    /**
     * Plugins
     */
    plugins: [
        new WebpackMonitor({
            capture: true,
            launch: false,
        }),
    ],
};
