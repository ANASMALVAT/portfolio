/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"alpha-images.s3.amazonaws.com"
            }
        ]
    },
    experimental: {
        serverActions: true,
      },
}

module.exports = nextConfig
