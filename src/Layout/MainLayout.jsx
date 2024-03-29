import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLaiout = () => {
    return (
        <div className="px-2 lg:px-16">
           <Nav></Nav>
           <Outlet></Outlet>
        </div>
    );
};

export default MainLaiout;