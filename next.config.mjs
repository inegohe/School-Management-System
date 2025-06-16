import("next").nextConfig;
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
});

export default withPWA({
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" },
      { hostname: "img.freepik.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com" },
    ],
  },
});
