
import HYDiscover from "@/pages/discover";
import HYMine from "@/pages/mine";
import HYFriends from "@/pages/friends";


 const routes = [
    {
        path:"/",
        exact:true,
        component:HYDiscover
    },
    {
        path:"/mine",
        component:HYMine
    },
    {
        path:"/friends",
        component:HYFriends
    },


];
export default routes;