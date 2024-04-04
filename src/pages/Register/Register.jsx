import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        const form = new FormData(e.currentTarget)

        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')

        console.log(name, photo, email, password);
// create user 
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })
        
    }
    return (
        <div>
            <Navbar></Navbar>

            <div className="bg-base-200 py-5">
                <h2 className="text-3xl text-center my-10">Register here!</h2>

                {/* form */}
                <form onSubmit={handleRegister} className="card-body  md:w-3/4 lg:1/2 mx-auto">

                    {/* Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        
                        <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                    </div>

                    {/* Photo Url */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        
                        <input name="photo" type="text" placeholder="Photo Url" className="input input-bordered" required />
                    </div>

                    {/* email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    {/* password */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        {/* forget password */}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover font-bold">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>

                <p className="text-center">Already have an Account? <Link to="/login" className="text-blue-600 underline font-bold">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;