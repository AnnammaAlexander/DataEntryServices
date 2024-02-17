import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../../assets/istockphoto-1368151370-612x612.jpg";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { handleUserLogin } from "../../../API/apiUserConnection";
import { setToken } from "../../../redux/slice/userSlice";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useState } from "react";
import { toast } from "react-toastify";

function UserLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const [PasswordValue, setPasswordValue] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
const handlePassword = (e)=>{
  setPasswordValue(e.target.value)
  formik.setFieldValue("password",PasswordValue)

}
  //formik validation
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .email("Invalid Email address")
        .required("Required"),
      password: Yup.string()
        .max(10, "Password must be less than 10 character")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      const response = await handleUserLogin(values);
      if (response?.status == "success") {
        if (response?.token) {
          dispatch(setToken(response?.token));
          navigate("/");
        }
      } else {
         toast.error(response.message)
      }
    },
  });

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
          <Typography
            variant="h3"
            color="blue"
            // style={{ color: "#17a2b8" }}
          >
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
            onSubmit={formik.handleSubmit}
          >
            <div className="mb-4 flex flex-col gap-3">
              <Input
                variant="standard"
                id="username"
                label="Email"
                crossOrigin={undefined}
                style={{ color: "#b3b3b3" }}
                {...formik.getFieldProps("username")}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.username && formik.errors.username
                  ? formik.errors.username
                  : null}
              </p>
              <Input
                variant="standard"
                size="lg"
                type={type}
                id="password"
                label="Password"
                style={{ color: "#b3b3b3" }}
                onChange={(e) => handlePassword(e)}
                className="absolute"
                crossOrigin={undefined}
              />
              <button
              type="button"
                className="flex relative justify-around items-center -top-7 -right-32"
                onClick={handleToggle}
                // disabled={formik.touched.password && formik.errors.password}
                 disabled ={PasswordValue ===""}
              >
                <Icon class="absolute mr-10" icon={icon} size={25} />
              </button>
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : null}
              </p>
            </div>
            <Button
              className="mt-12  rounded-md text-md"
              type="submit"
              style={{
                backgroundImage:
                  "linear-gradient(173.1deg, rgba(226,66,249,0.94) 10.2%, rgba(79,147,249,1) 77.3%)",
              }}
              fullWidth
            >
              Log In
            </Button>
            <Typography
              style={{ color: "#b3b3b3" }}
              className="mt-4 text-center font-normal"
            >
              Do not have an account?{" "}
              <Link to="/usersignup" className="font-medium text-blue-700 ">
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
