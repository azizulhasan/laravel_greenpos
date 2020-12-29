import { support } from 'jquery'
import React, { Component } from 'react'

export default class ProductCart extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="product-thumbnail">
                            <div className="product-img-head">
                                <div className="product-img">
                                    <img src={"http://localhost:8000/storage/products/featured_image/"+this.props.image}  alt={this.props.name} className="img-fluid"/></div>
                                <div className="ribbons"></div>
                                <div className="ribbons-text">New</div>
                                <div className=""><a href="#" className="product-wishlist-btn"><i className="fas fa-heart"></i></a></div>
                            </div>
                            <div className="product-content">
                                <div className="product-content-head">
                                    <h3 className="product-title">{this.props.name}</h3>
                                    <div className="product-rating d-inline-block">
                                        <i className="fa fa-fw fa-star"></i>
                                        <i className="fa fa-fw fa-star"></i>
                                        <i className="fa fa-fw fa-star"></i>
                                        <i className="fa fa-fw fa-star"></i>
                                        <i className="fa fa-fw fa-star"></i>
                                    </div>
                                    <div className="product-price">{this.props.price}</div>
                                </div>
                                <div className="product-btn">
                                    <a href="#" className="btn btn-primary">Add to Cart</a>
                                    <a href="#" className="btn btn-outline-light">Details</a>
                                    <a href="#" className="btn btn-outline-light"><i className="fas fa-exchange-alt"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                // <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                //         <div className="product-thumbnail">
                //             <div className="product-img-head">
                //                 <div className="product-img">
                //                     <img src='this.jpg' alt='test' className="img-fluid"/></div>
                //                 <div className="ribbons"></div>
                //                 <div className="ribbons-text">New</div>
                //                 <div className=""><a href="#" className="product-wishlist-btn"><i className="fas fa-heart"></i></a></div>
                //             </div>
                //             <div className="product-content">
                //                 <div className="product-content-head">
                //                     <h3 className="product-title">name</h3>
                //                     <div className="product-rating d-inline-block">
                //                         <i className="fa fa-fw fa-star"></i>
                //                         <i className="fa fa-fw fa-star"></i>
                //                         <i className="fa fa-fw fa-star"></i>
                //                         <i className="fa fa-fw fa-star"></i>
                //                         <i className="fa fa-fw fa-star"></i>
                //                     </div>
                //                     <div className="product-price">2342</div>
                //                 </div>
                //                 <div className="product-btn">
                //                     <a href="#" className="btn btn-primary">Add to Cart</a>
                //                     <a href="#" className="btn btn-outline-light">Details</a>
                //                     <a href="#" className="btn btn-outline-light"><i className="fas fa-exchange-alt"></i></a>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
            
        )
    }
}
