import { Link, navigate } from "gatsby";
import PropTypes from "prop-types";
import React, {useContext} from "react";
import { FirebaseContext } from "./Firebase";

import styled from "styled-components";

const LogoutLink = styled.span`
    
    color: white;
    cursor: pointer;
    float: right;

    &:hover {
        text-decoration: underline;
    }
`
const HeaderWrapper = styled.header`
    background: rebeccapurple;
    margin-bottom: 1.45rem;
`

const HeaderContent = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
    display: flex;

    >h1 {
        margin: 0;
        flex-grow: 1;

        >a {
            color: white;
            text-decoration: none;
        }
    }
    >div {
        margin: 0;
    }
`

const UserInfo = styled.div`
    text-align: right;
    color: white;
`

const LoginLink = styled.div`
    margin: auto 0;
    a {
        color: white;
        text-decoration: none;
    }
`

const Header = ({ siteTitle }) => {
    const {firebase, user} = useContext(FirebaseContext);
    
    function handleLogoutClick() {
        firebase.logout().then(() => navigate('/'))
    }

    return (
        <HeaderWrapper>
            <HeaderContent>
                <h1>
                    <Link to="/">
                        {siteTitle}
                    </Link>
                </h1>
                <div>
                    {!!user && !!user.email &&
                        <UserInfo>
                            Hello, {user.email}
                            <div>
                            <LogoutLink onClick={handleLogoutClick}>
                                Logout
                            </LogoutLink>
                            </div>
                        </UserInfo>
                    }
                    {(!user || !user.email) &&
                        <LoginLink>
                            <Link to="/login">
                                Login
                            </Link>
                        </LoginLink>
                    }
                </div>
                
            </HeaderContent>
        </HeaderWrapper>
    )
}

export default Header;