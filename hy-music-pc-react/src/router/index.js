import React from "react";
import HYDiscover from "@/pages/discover";
import HYMine from "@/pages/mine";
import HYFriends from "@/pages/friends";

import { Redirect } from "react-router-dom"

const routes = [
    {
        path: "/",
        exact: true,
        render: () => <Redirect to="/discover" />
    },
    {
        path: "/discover",
        component: HYDiscover
    },
    {
        path: "/mine",
        component: HYMine
    },
    {
        path: "/friends",
        component: HYFriends
    },


];
export default routes;