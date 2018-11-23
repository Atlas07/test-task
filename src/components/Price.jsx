import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'semantic-ui-react'

import './commonStyles.css'

const Price = ({ text }) => (
    <div className="data-container">
        <Icon name="dollar sign" size="large" color="green" />
        <p className="price-text">{text}</p>
    </div>
)

Price.propTypes = {
    text: PropTypes.number.isRequired,
}

export default Price