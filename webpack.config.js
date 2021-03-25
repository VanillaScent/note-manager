const path = require('path')

module.exports = {
    entry: './frontend/src/index.js',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
      path: './frontend/static/frontend/dist/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                  }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {url:true}
                }]
            },

            {
                test: /\.(mp4|webm|mkv)$/,
                use: [{
                    loader: 'file-loader',
                    options: {url:true}
                }]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }    
        ]
    }
}
