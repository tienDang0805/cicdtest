import React, { Component } from 'react'
import Layout from '../../components/Layout'
import Body from './Body'
import { getAccessTokenFromLocalStorage, getUser } from '../../helper/accessToken';
import { addUserProfileToLS } from '../../helper/accessToken';
import { GetCustomerById } from '../../services/Customer';
import jwt from 'jwt-decode' 


export default class Account extends Component {
    //call setuserprofile

    async componentDidMount(){
        const token = jwt(getAccessTokenFromLocalStorage())
        console.log(token)
        // const usrId = JSON.parse(getUser());
      await GetCustomerById(token.userId).then((res) => {
        addUserProfileToLS(res.data);
      });
    }
    render() {
        return (
            <>
            <Layout>
                <Body/>
            </Layout>
            </>

            
        )
    }
}
