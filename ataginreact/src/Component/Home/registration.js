import React from "react";
import '../../App.css';


const Registration = () => {
    return (
        <div>
            <h1>Registration Page</h1>
            <form action="" method="post">
                <table>
                    <tr>
                        <th>Name</th>
                        <td>
                            <input type="text" name="name" placeholder="Name" />
                        </td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>
                            <input type="email" name="email" placeholder="Email" />
                        </td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>
                            <input type="number" name="phone" placeholder="Phone" />
                        </td>
                    </tr>
                    <tr>
                        <th>Username</th>
                        <td>
                            <input type="text" name="username" placeholder="Username" />
                        </td>
                    </tr>
                    <tr>
                        <th>Password</th>
                        <td>
                            <input type="password" name="password" placeholder="Password" />
                        </td>
                    </tr>
                    <tr>
                        <th></th>
                        <td>
                            <button type="button">Register</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
};
export default Registration;