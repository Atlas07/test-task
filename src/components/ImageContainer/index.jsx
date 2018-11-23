import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'semantic-ui-react'

import './style.css'

const ImageContainer = ({ childrens, data, src, getNode }) => (
    <div className="image-container">
        <Image src={src} className="house-image" bordered />
        {!!childrens && childrens.map(child =>
            (
                <div className="image-inner-data" key={Math.random()}>
                    {getNode(child, data)}
                </div>
            )
        )}
    </div>
)

ImageContainer.propTypes = {
    src: PropTypes.string.isRequired,
    getNode: PropTypes.func.isRequired,
    data: PropTypes.shape({}).isRequired,

    childrens: PropTypes.arrayOf(
        PropTypes.shape({
            component: PropTypes.string,
            field: PropTypes.string
        })
    )
}

export default ImageContainer