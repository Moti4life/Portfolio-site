/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'via.placeholder.com',
      'res.cloudinary.com',
      'images.ctfassets.net'
    ]
  }
}

module.exports = nextConfig
