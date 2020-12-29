import React, { Component } from "react";
import ReactDOM from "react-dom";
import Pagin from "react-js-pagination";

export default class Pagination extends Component {
    constructor(props) {
        super(props);

        console.log(props.totalProduct)
        this.state = {
          activePage: 1
        };
      }
     
      handlePageChange(pageNumber) {

        this.setState({activePage: pageNumber});
      }
    render() {
        return (
            
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <nav aria-label="Page navigation example">
                <Pagin
                        activePage={this.state.activePage}
                        itemsCountPerPage={5}
                        totalItemsCount={this.props.totalProduct}
                        pageRangeDisplayed={3}
                        onChange={this.handlePageChange.bind(this)}
                        itemClass="page-item"
                        linkClass="page-link"
                    />
                </nav>
            </div>
            
        )
    }
}
