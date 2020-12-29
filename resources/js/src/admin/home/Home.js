import React, { Component } from 'react'
import FilterBar from './FilterBar';
import Pagination from './Pagination';
import ProductCart from './ProductCart'



export default class Home extends Component {


    constructor(props){
        super(props);
        
        this.state = {
            product_name: '',
            product_price:'',
            featured_image:'',
            products:[],
            totalProduct:'',


            product_id : '',
            product_description:'',
            category_id: '',
            sub_category_id: '',
            gallery:[],
            categories : [],
            
            sub_categories : [],
            dataLoaded: false,
        };
    }

    componentWillMount() {
        axios.get('/products').then((response) => {

            if(response.data.status === "success"){
                this.setState({ 
                    products: response.data.products,
                    totalProduct: response.data.products.length,
                    dataLoaded:true
                });
            }else{
                this.setState({ 
                    dataLoaded:false
                });
            }
        }).catch(function(error) {
            console.log(error);
        });
    };
    render() {
        if(this.state.dataLoaded==true){
            return (
                <div className="row">
                    <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="row">

                            {
                                this.state.products.map(product=>{

                                   return <ProductCart
                                name={product.product_name}
                                price={product.product_price}
                                image={product.featured_image}
                            /> 
                                })
                            }
                            
                            
                            <Pagination totalProduct={this.state.totalProduct} ></Pagination>
                        </div>
                    </div>
                    <FilterBar></FilterBar>
                </div>
                )
        }else{
            return (
                <div className="row">
                    <div className="col-xl-9 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="row">
                            <h1>There is no product.</h1>
                        </div>
                    </div>
                    <FilterBar></FilterBar>
                </div>
                )
        }
        
    }
}
