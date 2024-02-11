import { SuperNavbar } from "../../component/superAdmin/SuperNavbar"
import { SuperSidebar } from "../../component/superAdmin/SuperSidebar"
import { TransactionsTable } from "../../component/superAdmin/Transaction/PaymentTransaction"

function PaymentTransaction() {
  return (
    <div className=" overflow-x-hidden">
      <SuperNavbar/>
    <SuperSidebar/>
      <TransactionsTable/>
    </div>
  )
}

export default PaymentTransaction
