import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { saveUserData } from "../../../API/apiUserConnection";
function PaymentSuccesscard() {
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    // const saveResponse = await saveUserData(data, file);
  };

  return (
    <div className="w-3/4 h-screen flex justify-center items-center m-auto  -mt-20 lg:-mt-20 ">
      <Card
        size="md"
        className=" w-96 ring-2 shadow-lg shadow-blue-800 lg:w-3/4 "
        style={{ background: "#eefbfd" }}
      >
        <CardBody>
          <div className="flex  lg:gap-5 justify-center items-center">
            <Typography variant="h3" color="blue" className="mb-2 text-center">
              Payment Successful
            </Typography>
            <CheckIcon className="h-20 w-20 text-blue-500 bg-white rounded-full p-2 shadow-xl" />
          </div>
          <Typography className="text-center mt-4">The username and Password will send via your Email</Typography>
        </CardBody>
        <CardFooter className="pt-0 m-auto">
          <Link to="/userLogin"> <Button className="text-sm shadow-xl ring-2 ring-inset ring-blue-800" size="sm" 
         style={{ background: "#17a2b8", }}>Login</Button></Link></CardFooter>
      </Card>
    </div>
  );
}

export default PaymentSuccesscard;
