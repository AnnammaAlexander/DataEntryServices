import { UserNavbar } from "../../../component/user/UserNavbar"
import UserSidebar from "../../../component/user/Sidebar"
import Dashboard from "../../../component/user/userDashboard/UserDasboard"

function UserDashboardPage() {
  return (
    <div>
      <UserSidebar/>
      <UserNavbar/>
      <Dashboard/>
    </div>
  )
}

export default UserDashboardPage
