import * as React from "react";
import {Link, graphql} from 'gatsby';
import BookItem from '../components/BookItem';
import styled from 'styled-components';

const LinkButton = styled.div`
  text-align: right;
  margin: 10px;
  a {
    padding: 8px;
    background: rebeccapurple;
    color: white;
    border-radius: 5px;
    text-decoration: none;

    &:hover {
      background: indigo;
    }
  }
`
// markup
const IndexPage = (props) => {
  console.log(props);
  return (
    <section>
      {props.data.allBook.nodes.map(node => (
        <BookItem
          bookCover={node.localImage.childImageSharp.fixed}
          authorName={node.author.name}
          bookTitle={node.title}
          bookSummary={node.summary}
          key={node.id}>
            <LinkButton>
              <Link to={`/book/${node.id}`}>
                Xem thêm
              </Link>
            </LinkButton>
        </BookItem>
      ))}
    </section>
  )
}

export const query = graphql`
{
  allBook {
    nodes {
      title
      summary
      localImage {
				childImageSharp {
					fixed(width: 200){
						...GatsbyImageSharpFixed
          }
        }
      }
      author {
        name
      }
      id
    }
  }
}
`

export default IndexPage
