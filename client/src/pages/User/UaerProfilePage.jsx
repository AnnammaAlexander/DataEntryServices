import { UserNavbar } from '../../component/user/UserNavbar'
import UserSidebar from '../../component/user/userDashboard/Sidebar'
import { UserProfileCard } from '../../component/user/userProfile/UserProfile'

function UaerProfilePage() {
  return (
    <div>
         <UserSidebar/>
      <UserNavbar/>
      <UserProfileCard/>
    </div>
  )
}

export default UaerProfilePage
