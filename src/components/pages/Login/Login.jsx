
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../../../assets/images/login/login.svg";
import "./Login.css";
import { useContext } from "react";
import { AuthContext1 } from "../../../AuthContext/AuthContext";

export default function Login() {

  const navigate = useNavigate();

  const {Login} = useContext(AuthContext1);

  function handleLoginSubmit(e){
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    Login(email,password)
    .then((userCredential)=>{
      console.log(userCredential);
      form.reset();
      navigate("/");
    })
    .catch((error)=>{
      console.log(error);
    })


  }
  return (
    <div className="">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-2/4 mt-5">
         <img src={LoginImage} alt="Login"/>
        </div>
        <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-2/4" style={{height:"70vh"}}>
            <div>
                <p className="LoginHeading">Login</p>
            </div>
          <form className="card-body" style={{width: "85%",margin: "0 auto"}} onSubmit={handleLoginSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-error" >Sign In</button>
            </div>
            <div style={{ marginTop: "50px","textAlign": "center"}}>
            <p className="haveAnAccount">Do not have an account? <Link to="/register"><span className="signUpLink">Sign Up</span></Link></p>
          </div>
          </form>
         
        </div>
      </div>
    </div>
  );
}
