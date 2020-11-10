import React, { Fragment } from 'react'
import Layout2 from "../layout/Layout2.js"

function Home() {
    return (
        <Fragment>
            <Layout2>
                <div className="jumbotron">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                </div>
            </Layout2>
        </Fragment>
    )
}

export default Home
