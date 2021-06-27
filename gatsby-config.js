require('dotenv').config({
	path: '.env'
})

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
        credential: {
			"type": process.env.FIREBASE_TYPE,
			"project_id": process.env.FIREBASE_PROJECT_ID,
			"private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
			"private_key": process.env.FIREBASE_PRIVATE_KEY,
			"client_email": process.env.FIREBASE_CLIENT_EMAIL,
			"client_id": process.env.FIREBASE_CLIENT_ID,
			"auth_uri": process.env.FIREBASE_AUTH_URI,
			"token_uri": process.env.FIREBASE_TOKEN_URI,
			"auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
			"client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL
		},
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
