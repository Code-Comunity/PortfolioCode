// next.config.js
const withImages = require('next-images')
module.exports = withImages({
    esModule: true,
    images: {
        domains: ['i.imgur.com'],
    },
})
