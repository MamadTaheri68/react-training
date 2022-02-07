import React, { Component } from 'react';

class Login extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor='email'>Email:</label>
                    <input id='email' className='form-control' type="text" />
                </div>
                <div className="mb-3">
                    <label htmlFor='password'>Password:</label>
                    <input id='password' className='form-control' type="text" />
                </div>
                <button className='btn btn-primary'>Login</button>
            </form>
        );
    }
}

export default Login;