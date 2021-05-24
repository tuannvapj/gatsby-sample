const path = require('path');

exports.onCreateWebpackConfig = ({actions, stage}) => {
    if (stage === "develop-html" || stage === "build-html"){
        actions.setWebpackConfig({
            resolve: {
                mainFields: ["main"]
            }
        })
    } else {
        actions.setWebpackConfig({
            resolve: {
                mainFields: ["browser", "module", "main"]
            }
        })
    }
}


exports.createPages = ({graphql, actions}) => {

    const {createPage} = actions;
    const bookTemplate = path.resolve('./src/templates/bookTemplate.js');

    return graphql(`
    {
        allBook {
          nodes {
            id
          }
        }
    }
    `).then((result) => {
        if(result.errors){
            throw result.errors;
        }
        result.data.allBook.nodes.forEach(book => {
            createPage({
                path: `/book/${book.id}`,
                component: bookTemplate,
                context: {bookId: book.id}
            })
        })
    })
}