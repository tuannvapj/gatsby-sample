module.exports = {
  siteMetadata: {
    title: "Gatsby books",
	description: "Kick of your next, greate Gatsby project with this default stater.",
	author: "tuannva92@gmail.com"
  },
  plugins: [
	'gatsby-plugin-styled-components',
    "gatsby-plugin-gatsby-cloud",
	'gatsby-plugin-sharp',
	`gatsby-transformer-sharp`,
    {
      resolve: "gatsby-firesource",
      options: {
        credential: require("./fb-tk.json"),
		types: [
			{
				type: 'Book',
				collection: 'books',
				map: doc => ({
					title: doc.title,
					summary: doc.summary,
					image: doc.imageURL,
					author___NODE: doc.author.id
				})
			},
			{
				type: 'Author',
				collection: 'authors',
				map: doc => ({
					name: doc.name
				})
			}
		]
      },
    },
	{
		resolve: 'gatsby-plugin-remote-images',
		options: {
			nodeType: 'Book',
			imagePath: 'image'
		}
	}
  ],
};
