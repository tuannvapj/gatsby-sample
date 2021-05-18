import * as React from "react"
import {Link, graphql} from 'gatsby'
import Layout from "../components/layout"


// markup
const IndexPage = (props) => {
  console.log(props)
  return (
    <Layout pageTitle="Home Page">
      {props.data.allBook.nodes.map(node => (
        <div key={node.id}>
          <h2>{node.title}</h2> - <small>{node.author.name}</small>
          <div>
            {node.summary}
          </div>
          <Link to={`/book/${node.id}`}>
            Join conversation
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
{
  allBook {
    nodes {
      title
      summary
      author {
        name
      }
      id
    }
  }
}
`

export default IndexPage
