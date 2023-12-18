import { Outlet } from "react-router-dom";

function AdminRoot() {
  return (
    <div>
      AdminRoot
      <Outlet />
    </div>
  );
}

export default AdminRoot;