import { useContext, useEffect } from "react";
import "./CartDetails.css";
import { AuthContext1 } from "../../../../AuthContext/AuthContext";

export default function CartDetails() {

    const {username} = useContext(AuthContext1);

    useEffect(()=>{
        function getCartDetails(){
            fetch("http://localhost:5000/checkoutdata",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({username:username})
            })
            .then(res=>res.json())
            .then(data=>console.log(data));
        }
        getCartDetails();
    },[username])
  return (
    <div>
      <div className="text-center">
        <p className="CartDeatailsHeading">Cart Details</p>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              
            </tbody>
           
          </table>
        </div>
      </div>
    </div>
  );
}
