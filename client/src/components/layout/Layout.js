import React, { Fragment } from 'react'
import Navigation from "./Navigation.js"

function Layout(props) {
    return (
        <Fragment>
            <Navigation></Navigation>
            {props.children}
        </Fragment>
    )
}

export default Layout
