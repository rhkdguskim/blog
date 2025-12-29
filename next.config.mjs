/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // GitHub Pages 배포를 위한 기본 경로 설정 (프로덕션 환경에서만 적용)
    basePath: process.env.NODE_ENV === 'production' ? '/github-io-page' : '',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
