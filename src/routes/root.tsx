import UserRoot from "./../pages/user/UserRoot";
import Home from "./../pages/user/Home";
import Admin from "../pages/admin/Admin";
import AdminRoot from "../pages/admin/AdminRoot";

export const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
      }
    ],
  },
//   {
//     path: "*",
//     element: <NoPage />,
//   },
];