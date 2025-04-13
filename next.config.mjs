/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{hostname: "images.pexels.com"}, {hostname: "img.freepik.com"}]
    }
};

export default nextConfig;
