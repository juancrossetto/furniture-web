import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost',
      'furniture-server-rj6j.onrender.com', // Tu backend en Render
      'furniture-server-rj6j.onrender.comhttps',
      'icspknzugbnnanbidolg.supabase.co',
      'https://icspknzugbnnanbidolg.supabase.co'
    ],
  },
};

export default nextConfig;
