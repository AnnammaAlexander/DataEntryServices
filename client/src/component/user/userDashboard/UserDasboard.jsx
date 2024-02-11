import { Card, CardBody, Typography , 
  CardHeader,
  
  Button,
  
  Chip,
  CardFooter,
  IconButton,
  Tooltip,
  } from "@material-tailwind/react";
import {
  CurrencyPoundIcon,
  ShoppingCartIcon,
  CalendarDaysIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import image1 from "../../../assets/circle.svg";

function Dashboard() {
   
const TABLE_HEAD = ["Project", "No.of Projects", "Start Date", "Status", "Project End Date", ""];
 
const TABLE_ROWS = [
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
    name: "Project 1",
    amount: "2,500",
    date: "Wed 3:00pm",
    status: "pending",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
    name: "Project 2",
    amount: "5,000",
    date: "Wed 1:00pm",
    status: "submitted",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
    name: "Project 3",
    amount: "3,400",
    date: "Mon 7:40pm",
    status: "submitted",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
    name: "Project 4",
    amount: "1,000",
    date: "Wed 5:00pm",
    status: "submitted",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    name: "Project 5",
    amount: "14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];
 
  return (
    <div
      className="  overflow-y-scroll lg:w-[calc(100vw-17rem)] fixed right-0 h-screen overflow-x-hidden "
      style={
        {
          // backgroundImage: 'linear-gradient(173.1deg, rgba(226,66,249,0.94) 10.2%, rgba(79,147,249,1) 77.3%)',
          // backgroundImage: 'radial-gradient(circle farthest-corner at 12.3% 19.3%, rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2%)',
        }
      }
    >
      
      <div className="lg:pt-6  pt-6 ">

      <h1 className="lg:text-left text-center font-bold text-2xl mt-20 lg:pl-6">
          Dashboard
        </h1>
      <p className="text-blue-gray-200 pl-6 font-thin lg:text-left text-center">
        Home / Dashboard
      </p>
      {/* <div className="flex flex-wrap gap-8 ml-6 mt-4 justify-center lg:justify-start"> */}
      <div className="ml-5 lg:ml-6 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mr-3">
        <Card className="mt-3  h-52 relative bg-gradient-to-tr from-yellow-300  to-cyan-300 ">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image1})` }}
          ></div>
          <CardBody className="relative z-10">
            <Typography
              variant="h5"
              color="white"
              className="mb-2 text-left"
            >
              Earning
            </Typography>
            <Typography className="flex items-center gap-8">
              <div className="rounded-full w-20 h-20 bg-light-green-100 mt-5">
                {/* Assuming CurrencyPoundIcon is an SVG component */}
                <CurrencyPoundIcon />
              </div>
              <p className="text-2xl font-semibold text-white">0.00</p>
            </Typography>
          </CardBody>
        </Card>

        <Card className="mt-3   h-52 bg-gradient-to-r from-red-300 to-yellow-300 ">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image1})` }}
          ></div>
          <CardBody>
            <Typography
              variant="h5"
              color="white"
              className="mb-2 text-left"
            >
              Project details
            </Typography>
            <Typography className="flex items-center gap-8">
              <div className=" rounded-full w-20 h-20 bg-light-green-100 mt-5">
                <ShoppingCartIcon className="p-3" />
              </div>

              <p className="text-2xl font-semibold text-white">Silver</p>
            </Typography>
          </CardBody>
        </Card>

        <Card className="mt-3   h-52 bg-gradient-to-r from-green-300  to-yellow-300">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image1})` }}
          ></div>
          <CardBody>
            <Typography
              variant="h5"
              color="white"
              className="mb-2 text-left"
            >
             Registration Vality left
            </Typography>
            <Typography className="flex items-center gap-8">
              <div className=" rounded-full w-20 h-20 bg-light-green-100 mt-5">
                <CalendarDaysIcon className="p-3" />
              </div>

              <div className="flex flex-col">
                <p className="text-2xl font-semibold text-white">151</p>
                <p className="text-white">Days</p>
              </div>
            </Typography>
          </CardBody>
        </Card>


        <Card className="mt-3   h-52 bg-gradient-to-r  from-purple-200 to-pink-300">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image1})` }}
          ></div>
          <CardBody>
            <Typography
              variant="h5"
              color="white"
              className="mb-2 text-left"
            >
             Current Project Vality left
            </Typography>
            <Typography className="flex items-center gap-8">
              <div className=" rounded-full w-20 h-20 bg-light-green-100 mt-5">
                <CalendarDaysIcon className="p-3" />
              </div>

              <div className="flex flex-col">
                <p className="text-2xl font-semibold text-white">151</p>
                <p className="text-white">Days</p>
              </div>
            </Typography>
          </CardBody>
        </Card>






        <Card className="mt-3  h-52 bg-gradient-to-l from-yellow-300  to-orange-300 mb-5">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image1})` }}
          ></div>
          <CardBody>
            <Typography
              variant="h5"
              color="white"
              className="mb-2 text-left"
            >
              Results
            </Typography>
            <Typography className="flex items-center gap-8">
              <div className=" rounded-full w-20 h-20 bg-light-green-100 mt-5">
                <UsersIcon className="p-3" />
              </div>

              <p className="text-2xl font-semibold text-white">0</p>
            </Typography>
          </CardBody>
        </Card>


      </div>
      <div className="w-screen lg:w-full mt-3 mb-2 p-2">

      <Card className="h-full w-full shadow-md bg-blue-50">
      <CardHeader floated={false}  className=" bg-blue-50 rounded">
        <div className=" flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="pl-6">
            <Typography variant="h5" color="blue-gray">
              Project Report
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are details about the Projects
            </Typography>
          </div>
         
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0 pl-2">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
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
            {TABLE_ROWS.map(
              (
                {
                  
                  name,
                  amount,
                  date,
                  status,
                  expiry,
                },
                index,
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {amount}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={status}
                          color={
                            status === "submitted"
                              ? "green"
                              : status === "pending"
                              ? "amber"
                              : "red"
                          }
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3 justify-start">
                        
                         
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {expiry}
                          </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          {/* <PencilIcon className="h-4 w-4" /> */}
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
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
      </div> 
      </div>
    </div>
  );
}

export default Dashboard;
