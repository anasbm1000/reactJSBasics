import React from 'react';
import '../../App.css';


const Login = () => {
    return (
        
            <div className='App'>
                <form action="" method="post" className='App-header' >
                {/* <h1>Login</h1> */}
                    <table>
                        
                        <tr>
                            <th>Username</th>
                            <td><input type="text" name='username' placeholder='Username'  /></td>
                        </tr>
                        <tr>
                            <th>Password</th>
                            <td><input type="password" placeholder='Password'/></td>
                        </tr>
                        <tr>
                            
                            <th><button type='button'>Login</button></th>
                        </tr>
                    </table>
                </form>
            </div>
        
    );
};

export default Login;
