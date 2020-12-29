import React, { Component } from 'react'

export default class NocategoryTable extends Component {
    render() {
        return (
            <>
                     <div className="row">
                        {/* <!-- ============================================================== -->
                        <!-- data table  -->
                        <!-- ============================================================== --> */}
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="card">
                                <div className="card-header">
                                    <button id="product_add" className="" 
                                    data-toggle="modal" data-target="#category_modal"
                                    >
                                    Add Category</button>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table id="example" className="table table-striped table-bordered second">
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h1>There is no Category</h1>
                                                    </td>
                                                    
                                                </tr>
                                                
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
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
            </>
        )
    }
}
