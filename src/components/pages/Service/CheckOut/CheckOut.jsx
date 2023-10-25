import { useContext } from "react";
import "./CheckOut.css";
import { AuthContext1 } from "../../../../AuthContext/AuthContext";
import { useParams } from "react-router-dom";

export default function CheckOut() {

    const {id} = useParams();

    const {username} = useContext(AuthContext1);

    //handleCheckoutSubmit
    function handleCheckoutSubmit(e){
        e.preventDefault();
        const form = e.target;

        const service_Id = id;
        const userId = form.userId.value;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const yourPhone = form.yourPhone.value;
        const yourEmail = form.yourEmail.value;
        const yourMessage = form.yourMessage.value;

        const bodyData = {service_Id,userId,firstName,lastName,yourPhone,yourEmail,yourMessage};

        //console.log(service_Id,userId,firstName,lastName,yourPhone,yourEmail,yourMessage);

        fetch("http://localhost:5000/checkout",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body :JSON.stringify(bodyData)
        })
        .then(res=>res.json())
        .then(data => {
            if(data.insertedId){
                form.reset();
            }
        })
    }

  return (
    <div>
        <div className="text-center">
            <p className="checkoutHeading">CheckOut</p>
        </div>

        <div>
        <div className="checkoutCard">
        <form className="card-body" style={{width: "85%",margin: "0 auto"}} onSubmit={handleCheckoutSubmit}>
            <input type="hidden" name="userId" value={username}/>
            <div className="flex gap-1">
                <div className="form-control grow">
                <label className="label">
                    <span className="label-text">First Name</span>
                </label>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="input input-bordered"
                    required
                />
                </div>
                <div className="form-control grow">
                <label className="label">
                    <span className="label-text">Last Name</span>
                </label>
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="input input-bordered"
                    required
                />
                
                </div>
            </div>
            <div className="flex gap-1">
                <div className="form-control grow">
                <label className="label">
                    <span className="label-text">Your Phone</span>
                </label>
                <input
                    type="tel"
                    name="yourPhone"
                    placeholder="Your Phone"
                    className="input input-bordered"
                    required
                />
                </div>
                <div className="form-control grow">
                <label className="label">
                    <span className="label-text">Your Email</span>
                </label>
                <input
                    type="text"
                    name="yourEmail"
                    placeholder="Your Email"
                    className="input input-bordered"
                    required
                />
                
                </div>
            </div>
            <div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Message</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-40" name="yourMessage" placeholder="Your Message"></textarea>
                </div>
            </div>
            
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-error" >Order Confirm</button>
            </div>
            
        </form>
        </div>
        
        </div>
    
    </div>
  )
}
