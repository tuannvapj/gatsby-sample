import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Button } from './Button';
import { Input } from './Input';

const CommentForm = styled.form`
    display: flex;
    margin-top: 32px;

    ${Input}{
        margin-right: 8px;
        margin-top: auto;
        margin-bottom: auto;
    }

    ${Button}{
        margin: auto 0;
    }
`

const CommentListItem = styled.div`
    > strong {
        font-size: 80%;
        color: #666;
    }
    border-bottom: 1px solid #ddd;
    padding: 4px 0;
`

export const BookComments = ({firebase, bookId}) => {

    const [comments, setComments] = useState([]);
    const [commentText, setCommentTex] = useState('');

    useEffect(() => {
        const unsubscribe = firebase.subscribeToBookComments({
            bookId,
            onSnapshot: snapshot => {
                const snapshotComments = [];
                snapshot.forEach(doc => {
                    var username = '';
                    if (typeof doc.data().username === 'object'){
                        username = doc.data().username.id;
                    }
                    else {
                        username = doc.data().username;
                    }
                    snapshotComments.push({
                        id: doc.id,
                        text: doc.data().text,
                        username: username,
                        dateCreated: doc.data().dateCreated
                    })
                })

                setComments(snapshotComments);
            },
        });

        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        }
    }, [])

    function handlePostCommentsSubmit(e){
        e.preventDefault();
        firebase.postComment({
            text: commentText,
            bookId
        })
    }

    return (
        <div>
            <CommentForm onSubmit={handlePostCommentsSubmit}>
                <Input value={commentText} onChange={e => {
                    e.persist();
                    setCommentTex(e.target.value);
                }}/>
                <Button type="submit">
                    Post comment
                </Button>
            </CommentForm>
            {comments.map(comment => (
                <CommentListItem key={comment.id}>
                    <strong>
                        {comment.username} - {moment(comment.dateCreated.toDate()).format('HH:mm Do MMM YYYY')}
                    </strong>
                    
                    <div>
                        {comment.text}
                    </div>
                </CommentListItem>
            ))}
        </div>
    )
};