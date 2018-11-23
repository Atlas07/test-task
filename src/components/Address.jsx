import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'semantic-ui-react'

import './commonStyles.css'

const Address = ({ text }) => (
    <div className="data-container">
        <Icon name="info" size="large" color="blue" />
        <p className="address-text">{text}</p>
    </div>
)

Address.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Address