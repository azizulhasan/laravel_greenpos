import React, { Component } from 'react';
import {BrowserRouter as Router, Route,  Link, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom';
import axios from "axios";
import Nav from './Nav'
import Header from './Header';
import '../../../../public/assets/backend/assets/vendor/fonts/circular-std/style.css';
import '../../../../public/assets/backend/assets/libs/css/style.css';
import '../../../../public/assets/backend/assets/vendor/fonts/fontawesome/css/fontawesome-all.css';
import Home from './home/Home'
import Footer from './Footer';
import ProductAdd from './ProductAdd'
import SubCategory from './SubCategory';
import Category from './catergory/Category';




class App extends Component {

  render() {
    return (
      <>

    

{/* {backgroundColor:#110E2A;
                    color:#fff;
                    padding:7px;
                    border:0;
                    borderRadius:3px;
                    cursor:pointer;

                      } */}



      {/* <!-- ============================================================== -->
                    <!-- wrapper  -->
        <!-- ============================================================== --> */}
        <Router>
        <Nav/>
        <div className="dashboard-wrapper">
            <div className="dashboard-ecommerce">
                <div className="container-fluid dashboard-content ">
                    {/* <!-- ============================================================== -->
                    <!-- pageheader  -->
                    <!-- ============================================================== --> */}
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="page-header mt-3">
                                <h2 className="pageheader-title">E-commerce Dashboard Template </h2>
                                <p className="pageheader-text">Nulla euismod urna eros, sit amet scelerisque torton lectus vel mauris facilisis faucibus at enim quis massa lobortis rutrum.</p>
                                <div className="page-breadcrumb">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Dashboard</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">E-Commerce Dashboard Template</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- ============================================================== -->
                    <!-- end pageheader  -->
                    <!-- ============================================================== --> */}
                    
                        <div className="ecommerce-widget">
                          <Header/>
                            <Switch>
                              <Route exact path="/home" component={Home} />
                              
                              <Route  path="/product_add" component={ProductAdd} />
                              <Route path="/category_add" component={Category}/>
                              <Route path="/sub_category_add" component={SubCategory}/>
                            </Switch>
                        

                        

                        </div>
                </div>
            </div>
        

            <Footer/>
        </div>
        {/* <!-- ============================================================== -->
        <!-- end wrapper  -->
        <!-- ============================================================== --> */}
        </Router>
      </>
    );
  }
}

export default App;


if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
