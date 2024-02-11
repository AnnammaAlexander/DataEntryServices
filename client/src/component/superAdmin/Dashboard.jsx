import { Card, CardBody, CardFooter,  Typography } from "@material-tailwind/react";
import {
    CurrencyPoundIcon,
  
  ArrowRightCircleIcon
} from "@heroicons/react/24/outline";
// import BarChart from "./BarChart";

function SuperAdminDashboard() {
  return (
    <div className=" bg-cyan-50 h-screen overflow-y-scroll fixed right-0 md:w-[calc(100vw-17rem)]  ">
      <h1 className="text-left pt-6 pl-4 font-bold text-2xl">Dahboard</h1>
      <div className="flex gap-4 flex-col lg:flex-row mb-6">
        <div className="flex  flex-wrap justify-center gap-4  ml-5 mt-5  ">
          <Card className="mt-6 w-60 h-52 shadow-xl overflow-hidden">
  <CardBody style={{ background: "#BBE3EA" }} className="rounded-t-xl h-2/3 ">
    <Typography variant="h3" color="blue-gray" className="text-center">
      150
    </Typography>
    <Typography variant="h5" color="blue-gray" className="text-center ">
      Current Sale
    </Typography>
  </CardBody>
  <CardFooter style={{ background: "#8FD1DC" }} className="rounded-b-xl h-1/3">
    <div className="flex gap-5 items-center justify-center">
      <p>More Info</p>
      <ArrowRightCircleIcon class="h-7 w-7 text-gray-700" />
    </div>
  </CardFooter>
</Card>




<Card className="mt-6 w-60 h-52 shadow-xl overflow-hidden">
  <CardBody style={{ background: "#BBE3EA" }} className="rounded-t-xl h-2/3 ">
    <div className="flex justify-center items-center gap-2">
    <Typography variant="h3" color="blue-gray" className="text-center">
      150
    </Typography>
    <CurrencyPoundIcon class="h-6 w-6 text-gray-500"  />

    </div>
    <Typography variant="h5" color="blue-gray" className="text-center ">
      Current Sale Value
    </Typography>
  </CardBody>
  <CardFooter style={{ background: "#8FD1DC" }} className="rounded-b-xl h-1/3">
    <div className="flex gap-5 items-center justify-center">
      <p>More Info</p>
      <ArrowRightCircleIcon class="h-7 w-7 text-gray-700" />
    </div>
  </CardFooter>
</Card>


<Card className="mt-6 w-60 h-52 shadow-xl overflow-hidden">
  <CardBody style={{ background: "#BBE3EA" }} className="rounded-t-xl h-2/3 ">
    
    <Typography variant="h3" color="blue-gray" className="text-center">
      150
    </Typography>

    
    
    <Typography variant="h5" color="blue-gray" className="text-center ">
      Total Sale
    </Typography>
  </CardBody>
  <CardFooter style={{ background: "#8FD1DC" }} className="rounded-b-xl h-1/3">
    <div className="flex gap-5 items-center justify-center">
      <p>More Info</p>
      <ArrowRightCircleIcon class="h-7 w-7 text-gray-700" />
    </div>
  </CardFooter>
</Card>

<Card className="mt-6 w-60 h-52 shadow-xl overflow-hidden">
  <CardBody style={{ background: "#BBE3EA" }} className="rounded-t-xl h-2/3 ">
    <Typography variant="h3" color="blue-gray" className="text-center">
      150
    </Typography>
    <Typography variant="h5" color="blue-gray" className="text-center ">
      Total Sale Value
    </Typography>
  </CardBody>
  <CardFooter style={{ background: "#8FD1DC" }} className="rounded-b-xl h-1/3">
    <div className="flex gap-5 items-center justify-center">
      <p>More Info</p>
      <ArrowRightCircleIcon class="h-7 w-7 text-gray-700" />
    </div>
  </CardFooter>
</Card>

<Card className="mt-6 w-60 h-52 shadow-xl overflow-hidden">
  <CardBody style={{ background: "#BBE3EA" }} className="rounded-t-xl h-2/3 ">
    <Typography variant="h3" color="blue-gray" className="text-center">
      150
    </Typography>
    <Typography variant="h5" color="blue-gray" className="text-center ">
      Bronze Customer
    </Typography>
  </CardBody>
  <CardFooter style={{ background: "#8FD1DC" }} className="rounded-b-xl h-1/3">
    <div className="flex gap-5 items-center justify-center">
      <p>More Info</p>
      <ArrowRightCircleIcon class="h-7 w-7 text-gray-700" />
    </div>
  </CardFooter>
</Card>

<Card className="mt-6 w-60 h-52 shadow-xl overflow-hidden">
  <CardBody style={{ background: "#BBE3EA" }} className="rounded-t-xl h-2/3 ">
    <Typography variant="h3" color="blue-gray" className="text-center">
      150
    </Typography>
    <Typography variant="h5" color="blue-gray" className="text-center ">
     Silver Customer
    </Typography>
  </CardBody>
  <CardFooter style={{ background: "#8FD1DC" }} className="rounded-b-xl h-1/3">
    <div className="flex gap-5 items-center justify-center">
      <p>More Info</p>
      <ArrowRightCircleIcon class="h-7 w-7 text-gray-700" />
    </div>
  </CardFooter>
</Card>

<Card className="mt-6 w-60 h-52 shadow-xl overflow-hidden">
  <CardBody style={{ background: "#BBE3EA" }} className="rounded-t-xl h-2/3 ">
    <Typography variant="h3" color="blue-gray" className="text-center">
      150
    </Typography>
    <Typography variant="h5" color="blue-gray" className="text-center ">
     Gold Customer
    </Typography>
  </CardBody>
  <CardFooter style={{ background: "#8FD1DC" }} className="rounded-b-xl h-1/3">
    <div className="flex gap-5 items-center justify-center">
      <p>More Info</p>
      <ArrowRightCircleIcon class="h-7 w-7 text-gray-700" />
    </div>
  </CardFooter>
</Card>

<Card className="mt-6 w-60 h-52 shadow-xl overflow-hidden">
  <CardBody style={{ background: "#BBE3EA" }} className="rounded-t-xl h-2/3 ">
    <Typography variant="h3" color="blue-gray" className="text-center">
      150
    </Typography>
    <Typography variant="h5" color="blue-gray" className="text-center ">
      Unpaid Members
    </Typography>
  </CardBody>
  <CardFooter style={{ background: "#8FD1DC" }} className="rounded-b-xl h-1/3">
    <div className="flex gap-5 items-center justify-center">
      <p>More Info</p>
      <ArrowRightCircleIcon class="h-7 w-7 text-gray-700" />
    </div>
  </CardFooter>
</Card>
<Card className="mt-6 w-60 h-52 shadow-xl overflow-hidden">
  <CardBody style={{ background: "#BBE3EA" }} className="rounded-t-xl h-2/3 ">
    <Typography variant="h3" color="blue-gray" className="text-center">
      150
    </Typography>
    <Typography variant="h5" color="blue-gray" className="text-center ">
      Inactive Members
    </Typography>
  </CardBody>
  <CardFooter style={{ background: "#8FD1DC" }} className="rounded-b-xl h-1/3">
    <div className="flex gap-5 items-center justify-center">
      <p>More Info</p>
      <ArrowRightCircleIcon class="h-7 w-7 text-gray-700" />
    </div>
  </CardFooter>
</Card>
          <Card className="mt-6 w-60 h-52 shadow-xl overflow-hidden">
  <CardBody style={{ background: "#BBE3EA" }} className="rounded-t-xl h-2/3 ">
    <Typography variant="h3" color="blue-gray" className="text-center">
      150
    </Typography>
    <Typography variant="h5" color="blue-gray" className="text-center ">
     Recent Transaction
    </Typography>
  </CardBody>
  <CardFooter style={{ background: "#8FD1DC" }} className="rounded-b-xl h-1/3">
    <div className="flex gap-5 items-center justify-center">
      <p>More Info</p>
      <ArrowRightCircleIcon class="h-7 w-7 text-gray-700" />
    </div>
  </CardFooter>
</Card>
<Card className="mt-6 w-60 h-52 shadow-xl overflow-hidden">
  <CardBody style={{ background: "#BBE3EA" }} className="rounded-t-xl h-2/3 ">
    <Typography variant="h3" color="blue-gray" className="text-center">
      150
    </Typography>
    <Typography variant="h5" color="blue-gray" className="text-center ">
      Active Users
    </Typography>
  </CardBody>
  <CardFooter style={{ background: "#8FD1DC" }} className="rounded-b-xl h-1/3">
    <div className="flex gap-5 items-center justify-center">
      <p>More Info</p>
      <ArrowRightCircleIcon class="h-7 w-7 text-gray-700" />
    </div>
  </CardFooter>
</Card>

<Card className="mt-6 w-60 h-52 shadow-xl overflow-hidden">
  <CardBody style={{ background: "#BBE3EA" }} className="rounded-t-xl h-2/3 ">
    <Typography variant="h3" color="blue-gray" className="text-center">
      150
    </Typography>
    <Typography variant="h5" color="blue-gray" className="text-center ">
     Active Agents
    </Typography>
  </CardBody>
  <CardFooter style={{ background: "#8FD1DC" }} className="rounded-b-xl h-1/3">
    <div className="flex gap-5 items-center justify-center">
      <p>More Info</p>
      <ArrowRightCircleIcon class="h-7 w-7 text-gray-700" />
    </div>
  </CardFooter>
</Card>
        </div>
        <div className="w-60 m-auto ">
          {/* <BarChart /> */}
        </div>
      </div>
    </div>
  );
}

export default SuperAdminDashboard;
