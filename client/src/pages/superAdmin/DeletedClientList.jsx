import { DeletedClientTable } from "../../component/superAdmin/DeletedList/DeletedList"
import { SuperNavbar } from "../../component/superAdmin/SuperNavbar"
import { SuperSidebar } from "../../component/superAdmin/SuperSidebar"

function DeletedClientList() {
  return (
    <div>
      <SuperNavbar/>
      <SuperSidebar/>
      <DeletedClientTable/>
    </div>
  )
}

export default DeletedClientList
