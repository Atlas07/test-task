import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'semantic-ui-react'

import './commonStyles.css'

const Area = ({ text }) => (
    <div className="data-container">
        <Icon name="resize vertical" size="large" color="orange" />
        <p className="area-text">{text} sq. fr.</p>
    </div>
)

Area.propTypes = {
    text: PropTypes.number.isRequired,
}

export default Area