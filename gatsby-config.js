module.exports = {
  siteMetadata: {
    title: "sample",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
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
					author___NODE: doc.author.id
				})
			},
			{
				type: 'Author',
				collection: 'authors',
				map: doc => ({
					name: doc.name,
					
				})
			}
		]
      },
    },
  ],
};
