
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./layout/Navbar";
import { routes } from "./routes/root";
import { UserAuth } from "./context/UserAuth";
import { store } from "./redux/store/store";
import Home from "./pages/user/Home";
import Footer from "./layout/Footer";
import Admin from "./pages/admin/Admin";

const router = createBrowserRouter(routes);

function App() {

  return (
    <>
   <Navbar/>
   <Home/>
   <Footer/>
   {/* <Admin/> */}
    {/* <UserAuth.Provider value={authState}>
        <RouterProvider router={router} />
      </UserAuth.Provider> */}
    </>
  )
}

export default App
