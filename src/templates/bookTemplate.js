import React from 'react'
import Layout from '../components/layout'
import BookItem from '../components/BookItem'
import {graphql} from 'gatsby';


const BookTemplate = (probs) => {
    const book = probs.data.book;
    return (
        <Layout>
            <BookItem 
                bookCover={book.localImage.childImageSharp.fixed}
                authorName={book.author.name}
                bookTitle={book.title}
                bookSummary={book.summary}
            />
        </Layout>
    )
}

export const query = graphql`
    query BookQuery($bookId: String) {
        book(id: {eq: $bookId}) {
            title
            summary
            id
            author {
                name
            }
            localImage {
				childImageSharp {
					fixed(width: 200){
						...GatsbyImageSharpFixed
                    }
                }
            }
        }
    }
`;

export default BookTemplate;