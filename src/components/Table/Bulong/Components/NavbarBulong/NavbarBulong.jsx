import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const NavbarBL = () => {
    return (
        <Fragment>
            <div className="flex gap-5">
                <NavLink
                    to="/bulong"
                    className={({ isActive }) => {
                        return isActive
                            ? "bg-orange-400 hover:bg-orange-300 text-center text-white py-2 pt-2 px-4 rounded"
                            : "bg-transparent hover:bg-orange-300  text-blue-700  hover:text-white py-2 pt-2 px-4 border border-blue-500 hover:border-transparent rounded";
                    }}
                >
                    {" "}
                    Nhập Bulong
                </NavLink>
                <NavLink
                    to="/bulongexport"
                    className={({ isActive }) => {
                        return isActive
                            ? "bg-orange-400 hover:bg-orange-300 text-white py-2 pt-2 px-4 rounded"
                            : "bg-transparent hover:bg-orange-300 text-blue-700  pt-2  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded";
                    }}
                >
                    {" "}
                    Xuất Bulong
                </NavLink>
                <NavLink
                    to="/bulongneed"
                    className={({ isActive }) => {
                        return isActive
                            ? "bg-orange-400 hover:bg-orange-300 text-white py-2 pt-2 px-4 rounded"
                            : "bg-transparent hover:bg-orange-300 text-blue-700  pt-2  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded";
                    }}
                >
                    {" "}
                    Cần Bulong
                </NavLink>
                <NavLink
                    to="/bulongxnt"
                    className={({ isActive }) => {
                        return isActive
                            ? "bg-orange-400 hover:bg-orange-300 text-white py-2 pt-2 px-4 rounded"
                            : "bg-transparent hover:bg-orange-300 text-blue-700  pt-2  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded";
                    }}
                >
                    {" "}
                    Xuất Nhập Tồn
                </NavLink>
            </div>
        </Fragment>
    );
};
export default NavbarBL;
