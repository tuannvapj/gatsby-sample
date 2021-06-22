import React, {useContext} from 'react'
import Layout from '../components/layout'
import BookItem from '../components/BookItem'
import {BookComments} from '../components/common';
import {graphql} from 'gatsby';
import { FirebaseContext } from '../components/Firebase';


const BookTemplate = (probs) => {
    const book = probs.data.book;
    const {firebase} = useContext(FirebaseContext);

    return (
        <section>
            <BookItem 
                bookCover={book.localImage.childImageSharp.fixed}
                authorName={book.author.name}
                bookTitle={book.title}
                bookSummary={book.summary}
            />
            {!!firebase &&
                <BookComments firebase={firebase} bookId={book.id}></BookComments>
            }
            
        </section>
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