import * as React from "react"
import { Link } from "gatsby"
import { 
    container,
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'

import './layout.css'

const Layout = ({pageTitle, children}) => {
    return (
        <main className={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/">
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            {children}
        </main>
    )
}

export default Layout