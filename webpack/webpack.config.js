// Nome padrão do arquivo
const modeDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimezeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: modeDev ? 'development' : 'production', // seta ambiente
    entry: './src/principal.js', // ponto de entrada
    output: {
        filename: 'principal.js',
        path: __dirname + '/public' 
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimezeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
       rules: [{
        test: /\.s?[ac]ss$/,
        use: [
            MiniCssExtractPlugin.loader,
            //'style-loader', // Adiciona CSS a Dom injetando a tag <style>
            'css-loader' // Interpreta @import, url()... 
        ]
    }]
}
}