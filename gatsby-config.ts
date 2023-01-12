import type { GatsbyConfig } from "gatsby";
const path = require('path');

const config: GatsbyConfig = {
  siteMetadata: {
    title: `esthevely`,
    siteUrl: `https://www.yourdomain.tld`,
    menuLinks: [
      {
        "name": "ABOUT ME",
        "link": "/"
      },
      {
        "name": "PROJECTS",
        "link": "projects",
      },
      {
        "name": "POSTS",
        "link": "/posts"
      },
    ]
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@": path.resolve(__dirname, "src")
        },
        extensions: ["tsx", "scss", "ts", "js"]
      }
    }
  ],
};

export default config;
