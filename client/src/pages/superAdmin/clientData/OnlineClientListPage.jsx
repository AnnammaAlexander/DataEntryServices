import { SuperNavbar } from "../../../component/superAdmin/SuperNavbar"
import { SuperSidebar } from "../../../component/superAdmin/SuperSidebar"
import { AllClientList } from "../../../component/superAdmin/clientList/ClientList"

function OnlineClientListPage() {
  return (
    <div>
         <SuperNavbar/>
      <SuperSidebar/>
      <AllClientList/>
    </div>
  )
}

export default OnlineClientListPage
