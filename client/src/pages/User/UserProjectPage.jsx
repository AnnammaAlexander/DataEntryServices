import { UserNavbar } from "../../component/user/UserNavbar"
import UserSidebar from "../../component/user/userDashboard/Sidebar"
import Project from "../../component/user/userProject/Project"

function UserProjectPage() {
  return (
    <div >
        <UserSidebar/>
      <UserNavbar/>
      <Project/>
    </div>
  )
}

export default UserProjectPage
