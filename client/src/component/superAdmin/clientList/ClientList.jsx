import { Card, Typography, CardHeader, Input,CardFooter, IconButton,Button} from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getClientlist } from "../../../API/apiSuperAdminConnection";

const TABLE_HEAD = ["Name", "Email Id", "Contact", "DMID","Package Details","Franchisee Name","Sale Agent Name","Registered Date","Expiry Date","Type of Registration","Action"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    EmailId:"annamma@gmail.com",
    Contact:"00000",
    DMID:"1110",
    PackageDetails:"Gold",
    FranchiseeName:"website",
    SaleAgentName:"Self",
    job: "Manager",
    RegisteredDate: "23/04/18",
    ExpiryDate:"23/04/18",
    TypeofRegistration:"offline",

  },
  {
    name: "Alexa Liras",
    EmailId:"nimmi@gmail.com",
    Contact:"00000",
    DMID:"1110",
    PackageDetails:"Gold",
    FranchiseeName:"website",
    SaleAgentName:"Self",

    job: "Developer",
    RegisteredDate: "23/04/18",
    ExpiryDate:"23/04/18",
    TypeofRegistration:"online",
  },
  {
    name: "Laurent Perrier",
    EmailId:"neethu@gmail.com",
    Contact:"00000",
    DMID:"1110",
    PackageDetails:"Gold",
    FranchiseeName:"website",
    SaleAgentName:"Self",

    job: "Executive",
    RegisteredDate: "19/09/17",
    ExpiryDate:"23/04/18",
    TypeofRegistration:"offline",


  },
  {
    name: "Michael Levi",
    EmailId:"anna@gmail.com",
    Contact:"00000",
    DMID:"1110",
    PackageDetails:"Gold",
    FranchiseeName:"website",
    SaleAgentName:"Self",

    job: "Developer",
    RegisteredDate: "24/12/08",
    ExpiryDate:"23/04/18",
    TypeofRegistration:"offline",

  },
  {
    name: "Richard Gran",
    EmailId:"anna@gmail.com",
    Contact:"00000",
    DMID:"1110",
    PackageDetails:"Gold",
    FranchiseeName:"website",
    SaleAgentName:"Self",

    RegisteredDate: "04/10/21",
    ExpiryDate:"23/04/18",
    TypeofRegistration:"offline",

  },
];

export function AllClientList() {
  const[cilentlistData,setClientlistData] = useState([])
const navigate = useNavigate()



  const handleUser = (userId) =>{
    navigate(`/clienData/${userId}`)
  }
  const fetchData = async() =>{
    const response = await getClientlist()

    if(response){
      setClientlistData(response?.response)
    }
  }
  useEffect(()=>{
    fetchData();
  },[])
  console.log("llllllllllllll",cilentlistData);
  return (
    <Card className=" md:w-[calc(100vw-18rem)] overflow-scroll ml-auto top-14">
      <CardHeader floated={false} shadow={false} className="rounded-none ">
        <div className="mb-4 grid lg:grid-cols-2 grid-col-1 items-center mt-3">
          <div className="lg:text-left">
            <Typography variant="h5" color="blue-gray">
              All Client List
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are details about the Online Client List
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max lg:justify-self-end">
            <div className="w-full md:w-72 ">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </div>
      </CardHeader>
      <table className=" table-auto text-left ">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cilentlistData.map(({ name, email, phonenumber,DMID,PackageDetails,FranchiseeName,SaleAgentName,RegisteredDate,ExpiryDate ,TypeofRegistration,_id}, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {email}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {phonenumber}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {_id.slice(0,5)}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {PackageDetails}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {FranchiseeName}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {SaleAgentName}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {RegisteredDate}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {ExpiryDate}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {TypeofRegistration}
                  </Typography>
                </td>
                
                {/* <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </Typography>
                </td> */}
                <td className={classes}>
                {/* <Link to={`/clienData/${EmailId}`}> */}
                <button onClick={()=>handleUser(_id)}>
                  <Typography
                    as="a"
                    
                    variant="small"
                    color="blue-gray"
                    className="font-medium "
                    style={{ color: "#17a2b8" }}
                  >
                    Click
                  </Typography>
                  </button>
                  {/* </Link> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
          <IconButton variant="text" size="sm">
            2
          </IconButton>
          <IconButton variant="text" size="sm">
            3
          </IconButton>
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" size="sm">
            8
          </IconButton>
          <IconButton variant="text" size="sm">
            9
          </IconButton>
          <IconButton variant="text" size="sm">
            10
          </IconButton>
        </div>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}



