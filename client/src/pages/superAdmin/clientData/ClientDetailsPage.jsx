import { SuperNavbar } from "../../../component/superAdmin/SuperNavbar"
import { SuperSidebar } from "../../../component/superAdmin/SuperSidebar"
import ClientData from "../../../component/superAdmin/clientList/ClientDetails"

function ClientDataPage() {
  return (
    <div>
        <SuperNavbar/>
        <SuperSidebar/>

     <ClientData/>
    </div>
  )
}

export default ClientDataPage
