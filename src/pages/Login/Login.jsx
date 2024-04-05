import { Link , useLocation, useNavigate} from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext} from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

    const {signIn} = useContext(AuthContext)

    const location1 = useLocation();
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        const form = new FormData(e.currentTarget)

        const email = form.get('email')
        const password = form.get('password')

        console.log(email, password);
        // sign in
        signIn(email, password)
        .then(result => {
            console.log(result.user);

            
            // navigate after login
            navigate(location1?.state ? location1.state : '/')
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div>
            <Navbar></Navbar>

            <div className="bg-base-200 py-5">
                <h2 className="text-3xl text-center my-10">Please Login!</h2>

                {/* form */}
                <form onSubmit={handleLogin} className="card-body  md:w-3/4 lg:1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        {/* email */}
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        {/* password */}
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        {/* forget password */}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover font-bold">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>

                <p className="text-center">Don`t have an Account? <Link to="/register" className="text-blue-600 underline font-bold">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;