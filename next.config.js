/** @type {import('next').NextConfig} */

module.exports = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 's4.anilist.co',
          },
        ],
    }
}
