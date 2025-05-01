/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{hostname: "images.pexels.com"}, {hostname: "img.freepik.com"}, {hostname: "images.unsplash.com"}]
    }
};

export default nextConfig;
