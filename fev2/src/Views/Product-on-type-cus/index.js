import React, { Component } from 'react'
import { GetListProduct } from '../../services/Product';

export default class ProductOnType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            products: [],
        };
      }

    componentDidMount(){
        GetListProduct()
        .then(res => {
            const brand = []
            res.data.forEach(item => {
              //console.log('item:',item)
              const { product } = item
              brand.push({item})
            })
            //console.log('hot:', brand)
            this.setState({ products: brand })
          })
          .catch(err => console.log(err))    
          //console.log('brands', this.state.products)
        }
  render() {
    return (
      <>hello</>
    )
  }
}
