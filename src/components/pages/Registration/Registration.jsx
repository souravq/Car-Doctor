
import { Link } from "react-router-dom";
import LoginImage from "../../../assets/images/login/login.svg";
import "./Registration.css";
import { useContext } from "react";
import { AuthContext1 } from "../../../AuthContext/AuthContext";

export default function Registration() {

  const {Registration,name} = useContext(AuthContext1);
  console.log(name);

  // Submit Function

  function handleRegisterSubmit(e){
    console.log("hello");
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,email,password);

    Registration(email,password)
    .then((userCredential)=>{
      console.log(userCredential);
      form.reset();
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
        <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-2/4" style={{height:"80vh"}}>
            <div>
                <p className="LoginHeading">Sign Up</p>
            </div>
          <form className="card-body" style={{width: "85%",margin: "0 auto"}} onSubmit={handleRegisterSubmit}>
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
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
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-error" type="submit">Sign Up</button>
            </div>
            <div style={{ marginTop: "50px","textAlign": "center"}}>
            <p className="haveAnAccount">Already have an account?<Link to="/login"><span className="signUpLink"> Sign In</span></Link> </p>
          </div>
          </form>
         
        </div>
      </div>
    </div>
  );
}
