/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        typescript: true
                    }
                }
            ]
        });

        return config;
    }
}

module.exports = nextConfig;
