import { Fragment } from "react";
import Table from "~/components/Table/Congno/Table";
import Contstruction from "~/components/Table/Congtrinh/CongTrinh";

function CongTrinh() {
    return (
        <Fragment>
            <main>
                <h1 className="text-6xl font-bold text-center mt-10">
                    Danh Sách Công Trình
                </h1>
                <Contstruction />
            </main>
        </Fragment>
    );
}
export default CongTrinh;
