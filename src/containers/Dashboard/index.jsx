import React from 'react'
import axios from 'axios'
import { Header, Loader } from 'semantic-ui-react'

import HouseContainer from '../../components/HouseContainer'
import './style.css'

class Dashboard extends React.Component {
    state = {
        struct: [],
        data: [],
        loading: true
    }

    componentDidMount() {
        Promise.all([
            this.getData('http://demo4452328.mockable.io/properties'),
            this.getData('http://demo4452328.mockable.io/templates')
        ]).then(res =>
            this.setState({
                data: res[0].data,
                struct: res[1],
                loading: false
            })
        )
    }

    getData = (url) =>
        axios
            .get(url)
            .then(res => res.data)

    render() {
        const { struct, data, loading } = this.state

        return (
            <div>
                <Header as="h1" textAlign="center" className="dashboard-h1">Dashboard</Header>
                <div className="dashboard-container">
                    {struct.map((house, i) =>
                        <HouseContainer
                            key={house.id}
                            template={house.template}
                            data={data[i]}
                        />
                    )}
                </div>

                <Loader active={loading}>Loading</Loader>
            </div>
        )
    }
}

export default Dashboard