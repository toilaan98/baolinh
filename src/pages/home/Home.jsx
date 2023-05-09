import { Fragment } from "react";

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
