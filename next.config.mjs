/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';
const repoName = 'ultah-meyy';
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
export default nextConfig;