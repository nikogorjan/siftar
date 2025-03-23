import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'https://tog8wwk88s8gkgkkw0okk8kg.nikogorjan.com/admin',
        permanent: false,
        locale: false, // This ensures the external URL is used as is, without any locale prefix
      },
    ];
  },
};

export default withNextIntl(nextConfig);