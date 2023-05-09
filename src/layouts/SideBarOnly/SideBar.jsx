import SideBar from "~/layouts/components/Sidebar";
function SideBarOnly({ children }) {
    return (
        <div className="container">
            <SideBar />
            <div className="content"> {children}</div>
        </div>
    );
}

export default SideBarOnly;