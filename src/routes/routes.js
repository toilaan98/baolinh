import config from "~/config";

import HeaderOnly from "~/layouts/HeaderOnly/HeaderOnly";

import Search from "~/pages/Search/Search";
import Home from "~/pages/home/Home";
import CongTrinh from "~/pages/CongTrinh/CongTrinh";
import Bulong from "~/pages/Bulong/Bulong";
import BulongExport from "~/pages/Bulong/BulongExport";
import Debt from "~/pages/Congno/Debt";
import BulongXNT from "~/pages/Bulong/BulongXNT";
import BulongNeed from "~/pages/Bulong/BulongNeed";

const publicRoutes = [
    { path: "/", component: Home },
    { path: config.routes.home, component: Home },
    { path: config.routes.debt, component: Debt },
    { path: config.routes.search, component: Search, layout: HeaderOnly },
    {
        path: config.routes.congtrinh + "*",
        component: CongTrinh,
    },
    {
        path: config.routes.bulong,
        component: Bulong,
    },
    {
        path: config.routes.bulongExport,
        component: BulongExport,
    },
    {
        path: config.routes.bulongNeed,
        component: BulongNeed,
    },
    {
        path: config.routes.bulongXNT,
        component: BulongXNT,
    },
];
const PrivateRoutes = [];
export { publicRoutes, PrivateRoutes };
