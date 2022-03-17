module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
         {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets/`,
            },
        },
        // {
        //     resolve: `gatsby-source-strapi`,
        //     options: {
        //       apiURL: `http://localhost:1337`,
        //       queryLimit: 1000, // Defaults to 100
        //       collectionTypes: [``, ``],
        //       singleTypes: [``, ``],
        //     }}
        
    ]
}