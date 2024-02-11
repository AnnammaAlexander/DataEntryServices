import { UserNavbar } from "../../component/user/UserNavbar"
import Account from "../../component/user/account/Account"
import UserSidebar from "../../component/user/userDashboard/Sidebar"

function AccountPage() {
  return (
    <div>
        <UserSidebar/>
      <UserNavbar/>
      <Account/>
    </div>
  )
}

export default AccountPage
