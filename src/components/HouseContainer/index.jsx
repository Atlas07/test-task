import React from 'react'
import PropTypes from 'prop-types'

import ImageContainer from '../ImageContainer'
import Address from '../Address'
import Price from '../Price'
import Area from '../Area'
import './style.css'

const getComponent = (block, data) => {
    switch (block.component) {
        case "IMAGE":
            return <ImageContainer
                key={Math.random()}
                childrens={block.children}
                src={data.images[0]}
                data={data}
                getNode={getComponent}
            />
        case "ADDRESS":
            return <Address key={Math.random()} text={data.full_address} />
        case "PRICE":
            return <Price key={Math.random()} text={data.price} />
        case "AREA":
            return <Area key={Math.random()} text={data.area} />
        default:
            return ""
    }
}

const HouseContainer = ({ template, data }) => (
    <div className="house-container">
        {template.map(block =>
            getComponent(block, data)
        )}
    </div>
)

HouseContainer.propTypes = {
    template: PropTypes.arrayOf(
        PropTypes.shape({})
    ).isRequired,
    data: PropTypes.shape({}).isRequired
}

export default HouseContainer