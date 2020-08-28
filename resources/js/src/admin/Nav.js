import React, { Component } from 'react'

import { Link } from 'react-router-dom';
export default class Nav extends Component {
    render() {
        return (
            <>
   {/* <!-- ============================================================== -->
        <!-- left sidebar -->
        <!-- ============================================================== --> */}
        <div className="nav-left-sidebar sidebar-dark">
            <div className="menu-list">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="d-xl-none d-lg-none" href="#">Dashboard</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav flex-column">
                            <li className="nav-divider">
                                Menu
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link active" to="/home"  ><i className="fas fa-home"></i>Dashboard</Link>
                                
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-12" aria-controls="submenu-12"> <i className="fas fa-truck"></i> E-Commerce</a>
                                <div id="submenu-12" className="collapse submenu" >
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/product_add"  >Producct Add</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/category_add"  >Category Add</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/sub_category_add"  >Sub Category Add</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-stock" aria-controls="submenu-stock"> <i className="fab fa-first-order"></i> Manage Stock</a>
                                <div id="submenu-stock" className="collapse submenu" >
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link" href="{{url('dashboard/productStore')}}">Store Add</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="{{url('dashboard/stock_view')}}">Stock View</a>
                                        </li>
                                    </ul>
                                </div>
                            </li> */}
                            
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        {/* <!-- ============================================================== -->
        <!-- end left sidebar -->
        <!-- ============================================================== -->
        <!-- ============================================================== --> */}

            </>
        )
    }
}
