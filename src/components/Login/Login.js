import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import "./Login.css";
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { user, setUser, setError, loggedInUser, email, password, error, signInUsingGoogle, handleEmailChange, handlePasswordChange, handleLogin, hanleResetPassword, setIsLoading, isLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    // Redirect current page after login
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .finally(() => setIsLoading(false));
    }

    const handleEmailPassLogin = (e) => {
        e.preventDefault();
        handleLogin()
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
                history.push(redirect_uri);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <div className="container text-center ">
            <div className="row">
                <div className="login-area col-md-6 mt-5 mb-5">
                    <div>
                        {/* <h2>{loggedInUser.email}</h2> */}
                        <div className="login-box d-flex align-items-center justify-content-center">
                            <div className="login">
                                <div className="login-box">
                                    <h2 className="text-danger">Pease Login</h2>
                                    <p className="text-danger">{error}</p>
                                    <form onSubmit={handleEmailPassLogin}>
                                        <input
                                            onChange={handleEmailChange}
                                            className="input-felid"
                                            type="email"
                                            name="email"
                                            placeholder="Enter your Email"
                                        />
                                        <br />
                                        <input
                                            onChange={handlePasswordChange}
                                            className="input-felid"
                                            type="password"
                                            name="password"
                                            placeholder="Enter your Password"
                                        />
                                        <br />
                                        <input
                                            className="mt-3 w-100 btn btn-danger rounded-3 m-auto"
                                            type="submit"
                                            value="Login"
                                        />
                                    </form>
                                </div>
                                <button className="me-2 btn btn-primary text-white" onClick={handleGoogleLogin}>
                                    Login with Google
                                </button>

                                <button className="btn btn-danger text-white " onClick={hanleResetPassword}>
                                    Reset Password
                                </button>
                                <br /><br />
                                <Link to="/register" className="text-danger">Are you new User?</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="img">
                        <img
                            className="image-fluid w-100"
                            src="https://i.ibb.co/72Q7vyy/undraw-Access-account-re-8spm.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;