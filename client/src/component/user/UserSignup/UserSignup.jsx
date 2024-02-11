import {
  Card,
  Input,
  Button,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { CardBody } from "@material-tailwind/react";
import { VerifyEmail, makePayment } from "../../../API/apiUserConnection";
// import * as Yup from "yup";
import { useFormik } from "formik";
import { useRef } from "react";
import { useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";


import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./stripePayment/StripeCss.css";
import CheckoutForm from "./stripePayment/CheckoutForm";
const stripePromise = loadStripe("pk_test_51OWOKZSIp7NUuMWJkvslfz2aGfcmYe435KkUwT1ZcPYDieXVaWb5D9hup42fQJJqvLbRB5OrXCtzL1dZn7RCTwFU00QZ7I2r3Z");


export function UserSignupForm() {
  // const navigate = useNavigate()
  const [clientSecret, setClientSecret] = useState("");

  const [emailCheckError,setEmailCheckError] =useState(false)
  const [errorVerify, setErrorVerify] = useState(false);
  const [verified, setVerified] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [uId, setUId] = useState("");
  const [userUId, setUserUId] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const options = useMemo(() => countryList().getData(), []);
  // const [currentlocation,setCurrentLocation] = useState("")
  const changeHandler = (value) => {
    formik.setFieldValue("nationality", value.label);
  };
  const handleCurrentLocation = (value) => {
    formik.setFieldValue("currentlocation", value.label);
  };
  const uploadIdInput = useRef();

  const [continues, setContinue] = useState(true);
  const [formValues, setFormValues] = useState({});

  const handleContinue = () => setContinue(!continues);
  async function handlePayment(amount,plan) {
    // navigate('/payment')
console.log("formValues",formValues);
     const response = await makePayment(formValues, amount,plan);
     console.log("response////////", response);
     
if(response?.clientSecret){
  setClientSecret(response?.clientSecret)

}
  //   if (response?.status) {
  //     localStorage.setItem("tId", response.transactionId);
  //     localStorage.setItem("uId", response.userId);
  //     localStorage.setItem("UUId", response.UUId);
  //     window.location.href = response.paymentUrl;
  //   } else {
  //     toast.error(response.message);
  //   }
   }
console.log("clientSecretvvvvvvvvvvvvv",clientSecret);
const appearance = {
  theme: 'stripe',
};
const option = {
  clientSecret,
  appearance,
};













  const handleVerifyEmail = async () => {
    handleOpen();
      const response = await VerifyEmail(userEmail)
    if (response?.status) {
      setUId(response?.uId);
    }
  };
  const handleSubmit = () => {
    if(userUId?.length){

      if (uId === userUId) {
        setVerified(true);
        setEmailCheckError(false)
  
        handleOpen();
      } else {
        setErrorVerify(true);
      }
    }
    
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phonenumber: "",
      email: "",
      nationality: "",
      currentlocation: "",
      UploadId: null,
      emailVerification: "",
    },
    // validationSchema: Yup.object({
    //   name: Yup.string()
    //     .max(20, "Must be less than 20 characters")
    //     .required("Required"),

    //   phonenumber: Yup.string()
    //     .matches(
    //       /^[0-9]{10}$/,
    //       "Mobile number must be a 10-digit numeric value"
    //     )

    //     .required("Required"),

    //   email: Yup.string().email("Invalid email address").required("Required"),

    //   nationality: Yup.string().required("Required"),

    //   currentlocation: Yup.string()
    //     .max(50, "Must be less than 50 characters")
    //     .required("Required"),

    //   UploadId: Yup.mixed()
    //     .required("Upload your Id")
    //     .test(
    //       "fileSize",
    //       "File size is too large (max 5 MB)",
    //       (value) => value && value.size <= 5 * 1024 * 1024
    //     )
    //     .test(
    //       "fileType",
    //       "Invalid file type. Only image files (JPEG, PNG, GIF) or PDF are allowed.",
    //       (value) =>
    //         !value ||
    //         (value &&
    //           [
    //             "image/jpeg",
    //             "image/png",
    //             "image/gif",
    //             "application/pdf",
    //           ].includes(value.type))
    //     ),
    // }),
    onSubmit: async (values) => {
              setFormValues(values);
                      handleContinue();


      // if(verified){
      //   setFormValues(values);

      //   handleContinue();
      // }else{
      //   setEmailCheckError(true)
      // }
    },
  });
  // console.log("values..........", values);
  return (
    <div
      className="flex justify-center items-center  h-screen w-screen"
      //   style={{ background: "#eefbfd" }}
    >
      {continues ? (
        <Card
          color="white"
          className="ring-#17a2b8  p-4  ring-1 lg:p-8 shadow-lg shadow-blue-800 "
          style={{ background: "#eefbfd" }}
        >
          <Typography variant="h3" color="blue" className="text-center p-3">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal text-center">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form
            onSubmit={formik.handleSubmit}
            // encType="multipart/form-data"
            //  className="mt-5 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 lg:flex gap-5 mt-4">
              <div>
                <Typography variant="h6" color="blue-gray" className="">
                  Your Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="Name"
                  className=" !border-t-blue-gray-200 focus:!border-light-blue-400 lg:w-80 "
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  {...formik.getFieldProps("name")}
                />
                <p className="h-4 ml-2 text-sm text-red-800">
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : null}
                </p>
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="">
                  Phone Number
                </Typography>
                <Input
                  size="lg"
                  placeholder="Phone number"
                  className=" !border-t-blue-gray-200 focus:!border-light-blue-400 lg:w-80"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  {...formik.getFieldProps("phonenumber")}
                />
                <p className="h-4 ml-2 text-sm text-red-800">
                  {formik.touched.phonenumber && formik.errors.phonenumber
                    ? formik.errors.phonenumber
                    : null}
                </p>
              </div>
            </div>

            <div className="lg:flex gap-5">
              <div>
                <Typography variant="h6" color="blue-gray" className="">
                  Current Location
                </Typography>

                <Select
                  options={options}
                  defaultValue={formik.values.currentlocation.label}
                  onChange={handleCurrentLocation}
                  className="lg:w-80 "
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      background: "#eefbfd", // Background color for the control
                    }),
                  }}
                />
                <p className="h-4 ml-2 text-sm text-red-800">
                  {formik.touched.currentlocation &&
                  formik.errors.currentlocation
                    ? formik.errors.currentlocation
                    : null}
                </p>
              </div>

              <div>
                <Typography variant="h6" color="blue-gray" className="">
                  Nationality
                </Typography>
                {/* <Input
              size="lg"
              placeholder="Nationality"
              className=" !border-t-blue-gray-200 focus:!border-light-blue-400 lg:w-80"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              {...formik.getFieldProps("nationality")}
            /> */}
                <Select
                  options={options}
                  defaultValue={formik.values.nationality}
                  onChange={changeHandler}
                  className="lg:w-80 "
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      background: "#eefbfd", // Background color for the control
                    }),
                  }}

                  // {...formik.getFieldProps("nationality")}
                />
                <p className="h-4 ml-2 text-sm text-red-800 ">
                  {formik.touched.nationality && formik.errors.nationality
                    ? formik.errors.nationality
                    : null}
                </p>
              </div>
            </div>

            <div className="lg:flex gap-5 justify-center items-center">
              {/* <Typography variant="h6" color="blue-gray" className="">
                Upload Id
              </Typography> */}
              <div>
                <button
                  type="button"
                  className="text-black ring-1 ring-gray-400 rounded h-[2.69rem] overflow-scroll no-scrollbar mt-6 lg:w-80 sm:w-96 w-96 "
                  style={{ background: "#eefbfd" }}
                  onClick={() => uploadIdInput.current.click()}
                >
                  {formik.values.UploadId
                    ? `File name:${formik.values.UploadId.name}`
                    : " Upload your ID Proof"}
                  {/* Upload your ID */}
                  <input
                    ref={uploadIdInput}
                    name="UploadId"
                    type="file"
                    className="hidden overflow-x-auto "
                    onChange={(event) => {
                      formik.setFieldValue(
                        "UploadId",
                        event.currentTarget.files[0]
                      );
                      //  setUploadedId(event.currentTarget.files[0]);
                    }}
                  />
                </button>

                <p className="h-4 ml-2 text-sm text-red-800">
                  {formik.touched.UploadId && formik.errors.UploadId
                    ? formik.errors.UploadId
                    : null}
                </p>
              </div>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Your Email
                </Typography>

                <div className="relative">
                <Input
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-light-blue-400 lg:w-80 "
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(event) =>{
                    setUserEmail(event.target.value)
                    formik.setFieldValue("email",event.target.value)
                  } }
                  value={userEmail}
                   readOnly={verified}
                />
                {verified ? <div className="text-lg absolute right-2 top-2 h-9 text-light-blue-800 font-bold " >verified</div>:
                <div className=" absolute right-1 top-1 h-9 sm:m-auto ring-red-900 ring-1 rounded p-1 text-white "
                style={{
                  backgroundImage:
                    "linear-gradient(173.1deg, rgba(226,66,249,0.94) 10.2%, rgba(79,147,249,1) 77.3%)",
                }}                  onClick={handleVerifyEmail}
                >
                  verify
                </div>}
                </div>
                <p className="h-4 ml-2 text-sm text-red-800">
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : null}
                </p>
              
              </div>
                
            
            </div>
                    {emailCheckError && (<p className="text-center text-red-800 font-thin">Verify Email</p>)}
            <Button
              type="submit"
              className="mt-6 text-black text-md  "
              size="sm"
              fullWidth
              // style={{ background: "#17a2b8" }}
              style={{
                backgroundImage:
                  "linear-gradient(173.1deg, rgba(226,66,249,0.94) 10.2%, rgba(79,147,249,1) 77.3%)",
              }}
              //  onClick={handleContinue}
            >
              continue
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a href="#" className="font-medium text-blue-800">
                Sign In
              </a>
            </Typography>
          </form>
        </Card>
      ) : (
        <>

        {clientSecret?.length ?(
          <div className="StripeCss">
          <Elements options={option} stripe={stripePromise}>
            <CheckoutForm/>
          </Elements>
          </div>
        ) :
(
        
        <div
          className="  p-4 h-screen lg:h-fit overflow-auto ring-17a2b8 ring-2 lg:p-5 shadow-lg shadow-blue-800"
          style={{ background: "#eefbfd" }}
        >
          <div className="">
            <ArrowLeftEndOnRectangleIcon
              className="h-8 w-8 text-gray-500"
              onClick={handleContinue}
            />

            <Typography
              variant="h2"
              color="blue"
              className="mb-6  leading-[1.5] font-semibold text-center"
            >
              Premium plan
            </Typography>
            <Typography color="gray" className="mb-8 font-normal text-center">
              Like so many organizations these days, Autodesk is a company in
              transition.
            </Typography>
          </div>
          <div className="flex gap-4 flex-col lg:flex-row  items-center ">
            <Card className="w-64 h-64 ">
              <CardBody>
                <Typography
                  variant="h3"
                  color="black"
                  className=" font-medium leading-[1.5] text-center"
                >
                  Silver
                </Typography>
                <Typography
                  variant="h4"
                  color="black"
                  className="  leading-[1.5] font-semibold text-center"
                >
                  500
                </Typography>
                <Typography
                  color="blue-gray"
                  className="mt-4 text-center font-normal"
                >
                  50 user
                </Typography>
                <Typography
                  color="blue-gray"
                  className=" text-center font-normal"
                >
                  50 Projects
                </Typography>
                <Button
                  className="mt-6 text-black text-md  "
                  size="sm"
                  fullWidth
                  style={{ background: "#17a2b8" }}
                  onClick={() => handlePayment(500,"Silver")}
                >
                  Pay
                </Button>
              </CardBody>
            </Card>

            <Card className="w-64 h-72 shadow-2xl bg-yellow-300">
              <CardBody>
                <Typography
                  variant="h3"
                  color="black"
                  className=" font-medium leading-[1.5] text-center"
                >
                  Gold
                </Typography>
                <Typography
                  variant="h4"
                  color="black"
                  className="  leading-[1.5] font-semibold text-center"
                >
                  500
                </Typography>
                <Typography
                  color="blue-gray"
                  className="mt-4 text-center font-normal"
                >
                  50 user
                </Typography>
                <Typography
                  color="blue-gray"
                  className=" text-center font-normal"
                >
                  50 Projects
                </Typography>
                <Button
                  className="mt-6 text-black text-md  "
                  size="sm"
                  fullWidth
                  style={{ background: "#17a2b8" }}
                  onClick={() => handlePayment(500,"Gold")}
                >
                  Pay
                </Button>
              </CardBody>
            </Card>

            <Card className="w-64 h-64">
              <CardBody>
                <Typography
                  variant="h3"
                  color="black"
                  className=" font-medium leading-[1.5] text-center"
                >
                  Bronze
                </Typography>
                <Typography
                  variant="h4"
                  color="black"
                  className="  leading-[1.5] font-semibold text-center"
                >
                  500
                </Typography>
                <Typography
                  color="blue-gray"
                  className="mt-4 text-center font-normal"
                >
                  50 user
                </Typography>
                <Typography
                  color="blue-gray"
                  className=" text-center font-normal"
                >
                  50 Projects
                </Typography>
                <Button
                  className="mt-6 text-black text-md  "
                  size="sm"
                  fullWidth
                  style={{ background: "#17a2b8" }}
                  onClick={() => handlePayment(500,"Bronze")}
                >
                  Pay
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
)
}
</>
      )}

      <Dialog
        open={open}
        handler={handleOpen}
        className="shadow-2xl ring-2"
        dismiss={{ outsidePress: false }}
      >
        <DialogHeader className="text-center mt-4 text-light-blue-600">
          You will get a verification code via {userEmail}
        </DialogHeader>
        <DialogBody>
          <div className="w-96 h-16  m-auto">
            <Input
              className="h-16 w-96 text-xl"
              label="Ener  verification code.."
              onChange={(event) => setUserUId(event.target.value)}
            />
          </div>
          {errorVerify && (
            <p className="text-red-900 text-md text-center ">InValid Code </p>
          )}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel </span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleSubmit}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
