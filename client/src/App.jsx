import { BrowserRouter , Route ,Routes } from "react-router-dom"
// import HomePage from "./pages/HomePage"
import DasboardPage from "./pages/superAdmin/DasboardPage"
import PaymentTransaction from "./pages/superAdmin/PaymentTransaction"
import DeletedClientList from "./pages/superAdmin/DeletedClientList"
import MasterLoginPage from "./pages/superAdmin/MasterLoginPage"
import UserSignupPage from "./pages/User/userAuth/UserSignupPage"
import PaymentSuccess from "./pages/User/userAuth/PaymentSuccess"
// import PaymentFailed from "./pages/User/userAuth/PaymentFailed"
import UserLoginPage from "./pages/User/userAuth/UserLoginPage"
import UserDashboardPage from "./pages/User/userDashboard/userDashboardPage"
import UserProjectPage from "./pages/User/UserProjectPage"
import UaerProfilePage from "./pages/User/UaerProfilePage"
import AccountPage from "./pages/User/AccountPage"
// import StripePaymentPage from "./pages/User/StripePaymentPage"
import TermsConditionsPage from "./pages/User/TermsConditionsPage"
import ViewDataPage from "./pages/User/ViewDataPage"
import OnlineClientListPage from "./pages/superAdmin/clientData/OnlineClientListPage"
import ClientDataPage from "./pages/superAdmin/clientData/ClientDetailsPage"
import UploadProjectPage from "./pages/superAdmin/clientData/UploadProjectPage"
import UploadReportPage from "./pages/superAdmin/clientData/UploadReport"
import DounloadSubmittedDataPage from "./pages/superAdmin/clientData/DounloadSubmittedDataPage"
// import userDashboardPage from "./pages/User/userDashboard/userDashboardPage"
import { useSelector } from "react-redux"
function App() {
const reduxToken = useSelector((store)=>store.user.token)
//  const uuid= localStorage.getItem("UUId")

  return(
    
<BrowserRouter>
<Routes>
{/* super admin */}
<Route path ='/admin' element={<DasboardPage/>}></Route> 
 <Route path ='/masterlogin' element={<MasterLoginPage/>}></Route>
<Route path ='/paymenttransaction' element={<PaymentTransaction/>}></Route>
<Route path ='/deletedclient' element={<DeletedClientList/>}></Route>
<Route path ='/clientlist' element={<OnlineClientListPage/>}></Route>
<Route path ='/clienData/:userId' element={<ClientDataPage/>}></Route>
<Route path="/imgupload/:id" element={<UploadProjectPage />}></Route>
<Route path="/reportupload/:id" element={<UploadReportPage/>}></Route>
<Route path="/submitteddata/:id" element={<DounloadSubmittedDataPage/>}></Route>









{/* user */}
{/* <Route path ='/' element={<UserSignupPage/>}></Route> */}

 <Route path='/' element={ reduxToken?<UserDashboardPage/>: <UserLoginPage/>}></Route>
<Route path ='/usersignup' element={<UserSignupPage/>}></Route>
{/* <Route path ='/payment' element={<StripePaymentPage/>}></Route>  */}

<Route path ='/paymentsuccess' element={<PaymentSuccess/>}></Route>
{/* <Route path ={`/paymentfailed/${uuid}`} element={<PaymentFailed/>}></Route> */}
<Route path='/projects' element={<UserProjectPage/>}></Route>
<Route path='/profile' element={<UaerProfilePage/>}></Route>
<Route path='/account' element={<AccountPage/>}></Route>
<Route path='/conditions' element={<TermsConditionsPage/>}></Route>
<Route path='/viewdata' element={<ViewDataPage/>}></Route>
<Route path='/reports' element={<ViewDataPage/>}></Route> 










{/* <Route path ='/' element={<HomePage/>}></Route> */}
</Routes>
</BrowserRouter>
  
  )
}

export default App
