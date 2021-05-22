import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const BookItemWrapper = styled.section`
    border: 1px solid #ddd;
    padding: 8px;
    background: white;
    margin-bottom: 8px;
    display: flex;
    h2 {
        small {
            font-size: 14px;
            font-weight: normal;
            padding-left: 8px;
        }
    }
`;

const BookImageWrapper = styled.div`
    max-width: 200px;
    img {
        max-width: 200px;
    }
`;

const BookItemContentWrapper = styled.div`
    flex-row: 1;
    padding-left: 8px;
`;

const BookItem = ({bookCover, authorName, bookTitle, bookSummary, children}) => {
    return (
        <BookItemWrapper>
            <BookImageWrapper>
                <Img fixed={bookCover} alt="Book cover"/>
            </BookImageWrapper>
            <BookItemContentWrapper>
                <h2>
                    {bookTitle}<small>{authorName}</small>
                </h2>
                <p>
                    {bookSummary}
                </p>
                <div>
                    {children}
                </div>
            </BookItemContentWrapper>
            
        </BookItemWrapper>
    )
}

export default BookItem;