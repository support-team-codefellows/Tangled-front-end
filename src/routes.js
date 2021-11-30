/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================
https://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import SocketApp from 'components/Socket.io/compenents/customer';
import Telephone from 'components/Socket.io/compenents/Telephone';
import TableList from "views/TableList/TableList.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
import RTLPage from "views/RTLPage/RTLPage.js";
import ChatForm from "./components/Socket.io/compenents/chat/ChatForm";
import SocketEmployee from 'components/Socket.io/sockt.io';

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: SocketApp,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/chatApp",
    name: "Chat with us",
    rtlName: "إخطارات",
    icon: MarkChatUnreadIcon,
    component: ChatForm,
    layout: "/admin",
  },
  {
    path: "/Employee",
    name: "Employee",
    rtlName: "إخطارات",
    icon: PersonSearchIcon,
    component: SocketEmployee,
    layout: "/admin",
  },
  // {
  //   path: "/Location",
  //   name: "Employee",
  //   rtlName: "إخطارات",
  //   icon: PersonSearchIcon,
  //   component: SocketEmployee,
  //   layout: "/admin",
  // },

  
];

export default dashboardRoutes;
