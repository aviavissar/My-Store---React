import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth'

export const Login = ({startLogin}) => (
    <div>
        <h1>Login Page</h1>
      
                <div><button onClick={startLogin} >login</button></div>
    </div>
);

const mapDispatchToProps=(dispatch)=>({
    startLogin:()=>dispatch(startLogin())
})

export default connect(undefined,mapDispatchToProps)(Login) ;
