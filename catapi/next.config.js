
const nextConfig = {
    reactStrictMode: true,
    images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [{
      protocol: "https",
      hostname: "cdn2.thecatapi.com",
      port: "",
      pathname: "/**"
    }]
  },
 experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig
