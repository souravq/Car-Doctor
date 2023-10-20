import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

export default function Main() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
