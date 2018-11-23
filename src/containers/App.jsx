import React from 'react'
import PropTypes from 'prop-types'
import { hot } from "react-hot-loader"
import { Route } from "react-router-dom"

import Dashboard from './Dashboard'

const App = ({ location }) => (
    <div className="ui-container">
        <Route path="/" exact location={location} component={Dashboard} />
    </div>
)

App.propTypes = {
    location: PropTypes.shape({
        href: PropTypes.string
    }).isRequired
}

export default hot(module)(App)