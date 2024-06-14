import React, { Component } from 'react'
import { Pagination } from '@mui/material'
import Layout from '../../components/Layout'
import BodyProductDetail from './Body'
import { useParams } from 'react-router-dom'
import { withRouter } from '../../components/withRouter'

class ProductCusDetail extends Component {

    componentDidMount() {
        const param = this.props.params;
    }

    render() {
        return (
            <Layout>
                {/* {console.log(this.props.match.params.id)} */}
                <BodyProductDetail params={this.props.params}></BodyProductDetail>
            </Layout>
        )
    }
}
export default withRouter(ProductCusDetail);