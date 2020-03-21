module.exports = {
    entry: "./src/main.js",
    mode: 'development',
    output:{
        path:__dirname+"/public",
        filename:"bundlueMain.js"
    },
    // module: {
    //     rules: [{
    //         test: /\.scss$/,
    //         use: [{
    //             loader: "sass-loader",
    //             options: {
    //                 minimize: true
    //             }
    //         }]
    //     }]
    // }

    module:{
        rules:[
            {
                loader:"babel-loader",
                test:/\.js/,
            },
            {
                test: /\.s[ac]ss$/i,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use:[
                    "file-loader",
                    {
                        loader: 'image-webpack-loader',
                        options:{
                            gifsicle:{
                                interlaced: false,
                            },
                            optipng:{
                                enabled: false,
                            },
                            pngquant:{
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            mozjpeg:{
                                progressive: true,
                                quality: 65
                            }
                        }
                    }
                ]
            }
        ]
    }
};