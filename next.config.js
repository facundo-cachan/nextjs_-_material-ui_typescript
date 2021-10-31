const withTM = require("next-transpile-modules")([
  "@mui/material",
  "@mui/system",
]); // pass the modules you would like to see transpiled
let domain = "http://localhost:3000";
let env = {
  NEXTAUTH_URL: domain,
  NEXT_PUBLIC_URL: domain,
  NEXT_PUBLIC_GRAPHQL: `${domain}:8000/graphql/`,
};
switch (process.env.NODE_ENV) {
  case "development":
    domain = "http://localhost:3000";
    process.env.NEXTAUTH_URL = domain;
    env = {
      NEXTAUTH_URL: domain,
      NEXT_PUBLIC_URL: domain,
      NEXT_PUBLIC_GRAPHQL: `${domain}:8000/graphql/`,
    };
    break;
  case "production":
    domain = "http://localhost:3000";
    process.env.NEXTAUTH_URL = domain;
    env = {
      NEXTAUTH_URL: domain,
      NEXT_PUBLIC_URL: domain,
      NEXT_PUBLIC_GRAPHQL: `${domain}:8000/graphql/`,
    };
    break;
}
console.log(env);
module.exports = withTM({
  reactStrictMode: true,
  compress: true,
  env: {
    ...env,
    GOOGLE_KEY:
      "868192905160-j0qhnlvungobmcpanj15r3312qniatt3.apps.googleusercontent.com",
    GOOGLE_SECRET: "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",
    FACEBOOK_KEY: "881112199145119",
    FACEBOOK_SECRET: "d721037bb196adbb2d75546f2d35bb8b",
  },
  eslint: {
    dirs: ["pages", "component", "utils"],
  },
  images: {
    domains: [env.NEXT_PUBLIC_URL],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@mui/styled-engine": "@mui/styled-engine-sc",
    };
    return config;
  },
});
