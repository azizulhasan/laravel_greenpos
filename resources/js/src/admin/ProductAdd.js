import React, { Component } from 'react'
import ProductModal from './ProductModal';

export default class ProductAdd extends Component {
    render() {
        return (
            <div>
                    <div className="row">
        {/* <!-- ============================================================== -->
        <!-- data table  -->
        <!-- ============================================================== --> */}
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card">
                <div className="card-header">
                    <button id="product_add" className="" 
                    data-toggle="modal" data-target="#product_modal"
                    
                    >
                    New Product</button>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table id="example" className="table table-striped table-bordered second">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Picture</th>
                                    <th>Name</th>
                                    <th>Category Name</th>
                                    <th>Sub Category Name</th>
                                    <th>Unit Name</th>
                                    <th>Brand Name</th>
                                    <th>Price</th>
                                    <th>Old Price</th>
                                    <th>Discount %</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                 
                           
                                <tr>
                                    <td></td>
                                    <td>
                                        <img width="70" src="picture.png" alt="test"/>
                                    </td>
                                    <td>name</td>
                                    <td>name</td>
                                    <td>name</td>
                                    <td>name</td>
                                    <td>name</td>
                                    <td>name</td>
                                    <td>name</td>
                                    <td>name</td>
                                    <td>name</td>
                                    {/* <td>
                                        <button href="#" data-toggle="modal" data-target="#product_edit_modal" data-id="2"  className="btn btn-warning btn-sm edit_product"><i className="fas fa fa-edit"></i></button>
                                        <button href="#" data-id="1"   className="btn btn-danger btn-sm delete_product"><i className="fas fa-trash"></i></button>
                                    </td> */}
                                </tr>
                                
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>Picture</th>
                                    <th>Name</th>
                                    <th>Category Name</th>
                                    <th>Sub Category Name</th>
                                    <th>Unit Name</th>
                                    <th>Brand Name</th>
                                    <th>Price</th>
                                    <th>Old Price</th>
                                    <th>Discount %</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- ============================================================== -->
        <!-- end data table  -->
        <!-- ============================================================== --> */}
    </div>
    <ProductModal/>
            </div>
        )
    }
}
