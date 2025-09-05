/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",              // Статический экспорт
  basePath: "/cabarebar",        // имя вашего репозитория
  assetPrefix: "/cabarebar/",    // чтобы грузились стили/картинки
  images: {
    unoptimized: true,           // иначе не будут работать <Image />
  },
};

export default nextConfig;