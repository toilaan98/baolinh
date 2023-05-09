import Header from "~/layouts/components/Header";
function SideBarOnly({ children }) {
    return (
        <div className="container">
            <Header />
            <div className="content"> {children}</div>
        </div>
    );
}

export default SideBarOnly;
