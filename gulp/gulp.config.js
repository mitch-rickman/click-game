
module.exports = {
    css: {
        src: ["./src/scss/**/*.scss"],
        build: "./build/css/"
    },
    templates: {
        src: ['./src/templates/**/*.jade'],
        build: './build/',
        data: './src/data/data.json'
    },
    js: {
        entry: './src/js/main.js',
        src: './src/js/**/*.js',
        build: "./build/js"
    }
}
