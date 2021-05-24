import * as React from "react"
import {useStaticQuery, graphql} from "gatsby";
import Header from "./header"
import { FirebaseContext, useAuth } from "./Firebase";
import './layout.css'

const Layout = ({pageTitle, children}) => {
    const {user, firebase, loading} = useAuth();
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                  title
                  description
                  author
                }
            }
        }
    `);
    return (
        <FirebaseContext.Provider value={{user, firebase, loading}}>
            <Header siteTitle={data.site.siteMetadata.title}></Header>
            <div style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`
            }}>
                <main>{children}</main>
            </div>
        </FirebaseContext.Provider>
    )
}

export default Layout