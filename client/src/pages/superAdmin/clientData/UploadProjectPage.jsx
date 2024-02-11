import { SuperNavbar } from "../../../component/superAdmin/SuperNavbar"
import { SuperSidebar } from "../../../component/superAdmin/SuperSidebar"
import { UploadProject } from "../../../component/superAdmin/clientList/uploadProject/UploadProject"

function UploadProjectPage() {
  return (
    <div className="overflow-y-hidden">
        <SuperNavbar/>
      <SuperSidebar/>
      <UploadProject/>
    </div>
  )
}

export default UploadProjectPage
