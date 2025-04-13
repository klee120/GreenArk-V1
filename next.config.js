/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';
const repo = 'GreenArk-V1';

const nextConfig = {
    reactStrictMode: true,
    srcDir: 'src',
    assetPrefix: isGithubPages ? `/${repo}/` : '',
    basePath: isGithubPages ? `/${repo}` : '',
}

module.exports = nextConfig;
