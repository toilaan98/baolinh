import { Fragment } from "react";
import Table from "~/components/Table/Congno/Table";

function Profile() {
    return (
        <Fragment>
            <h1 className="text-6xl font-bold text-center mt-10">
                Bảng Tính Khối Lượng
            </h1>
            <Table />
        </Fragment>
    );
}
export default Profile;
