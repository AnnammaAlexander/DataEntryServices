import SuperAdminDashboard from "../../component/superAdmin/Dashboard"
import { SuperNavbar } from "../../component/superAdmin/SuperNavbar"
import { SuperSidebar } from "../../component/superAdmin/SuperSidebar"

function DasboardPage() {
  return (
    <div >
      <SuperNavbar/>
      <SuperAdminDashboard/>
      <SuperSidebar/>
    </div>
  )
}

export default DasboardPage
