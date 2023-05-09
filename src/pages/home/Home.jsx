import { Fragment } from "react";
import Table from "~/components/Table/Congno/Table";
import Customer from "~/components/Table/Congtrinh/CongTrinh";
import KhachHang from "~/components/Table/KhachHang/KhachHang";

function Home() {
    return (
        <Fragment>
            <main>
                <h1 className="text-6xl font-bold text-center mt-10">
                    Danh Sách Khách Hàng
                </h1>
                <KhachHang />
            </main>
        </Fragment>
    );
}
export default Home;
