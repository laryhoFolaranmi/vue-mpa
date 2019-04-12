module.exports = {
    pages: {
        index: {
            entry: 'src/pages/home/main.js',
            template: 'public/home.html',
            filename: 'index.html',
            // title: 'Home Page', // you can set the page title from in here, but I am not going to do that
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        about: {
            entry: 'src/pages/about/main.js',
            template: 'public/about.html',
            filename: 'about.html',
            // title: 'About Page',
            chunks: ['chunk-vendors', 'chunk-common', 'about']
        },

    }
};
