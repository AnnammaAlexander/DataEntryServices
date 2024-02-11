import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import image from "../../../assets/istockphoto-1368151370-612x612.jpg";

function UserLogin() {
  return (
    <div className="w-full h-screen  flex justify-center items-center ">
      <Card
        className="w-3/5 flex-row flex-wrap rounded-none justify-center  shadow-2xl p-4"
        style={{ background: "#eefbfd" }}
      >
        <CardHeader
          // shadow={false}
          floated={false}
          className="  w-3/5 shrink-0 rounded-none m-auto"
        >
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover sm:rounded-t-md lg:rounded-l-md lg:rounded-tr-none "
          />
        </CardHeader>
        <CardBody className=" lg:mt-4 mt-1 flex flex-col justify-center items-center lg:mr-4 ">
          <Typography variant="h4" style={{ color: "#17a2b8" }}>
            Log In
          </Typography>
          <Typography
            style={{ color: "#b3b3b3" }}
            className="mt-1 font-normal text-center lg:text-left"
          >
            Enter your details
          </Typography>
          <form
            className="mt-4 mb-2  max-w-screen-lg  self-center"
            // onSubmit={formik.handleSubmit}
          >
            <div className="mb-4 flex flex-col gap-3">
              <Input
                variant="standard"
                id="email"
                type="text"
                label="Email"
                crossOrigin={undefined}
                style={{ color: "#b3b3b3" }}
                //   {...formik.getFieldProps('email')}
              />
              {/* // <p className="ml-2 text-sm text-red-800">{formik.touched.email && formik.errors.email ? */}
              {/* //   formik.errors.email : null}</p> */}
              <Input
                variant="standard"
                size="lg"
                type="password"
                id="password"
                label="Password"
                style={{ color: "#b3b3b3" }}
                crossOrigin={undefined}
                //   {...formik.getFieldProps('password')}
              />
              {/* <p className="ml-2 text-sm text-red-800">{formik.touched.password && formik.errors.email ? */}
              {/* formik.errors.email : null}</p> */}
            </div>
          <Link to ='/userDashboard'>
            <Button
              className="mt-12  rounded-md"
              type="submit"
              style={{ background: "#17a2b8" }}
              fullWidth
            >
              Log In
            </Button>
            </Link>
            <Typography
              style={{ color: "#b3b3b3" }}
              className="mt-4 text-center font-normal"
            >
              Do not have an account?{" "}
              <Link
                to={"/signup"}
                className="font-medium "
                style={{ color: "#17a2b8" }}
              >
                Sign Up
              </Link>
            </Typography>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default UserLogin;
