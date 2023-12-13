/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        ID_VIDEO_FOND_SITE: process.env.ID_VIDEO_FOND_SITE
    },

    eslint: {
        ignoreDuringBuilds: true
    }, 
    
};


module.exports = nextConfig
