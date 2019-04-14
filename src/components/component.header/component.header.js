import React from 'react';
import { connect } from 'react-redux';



const Header = (props) => (
    <div className="page-header">
        <div className="content-container logo" >
            <h3 className="page-header__title">
                The best store on the web
                         
            </h3>
            <div className="logo">
                <h1>My Store</h1>
            </div>
        </div>
    </div>
);
const mapStateToProps = (state) => {
    return {
        products: state.products
    };
};
export default connect(mapStateToProps)(Header);