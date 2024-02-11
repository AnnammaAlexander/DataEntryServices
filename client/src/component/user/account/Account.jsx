import { useFormik } from "formik";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import * as Yup from "yup";
import { useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

// import { Link } from "react-router-dom";

function Account() {
  const options = useMemo(() => countryList().getData(), []);
  const changeHandler = (value) => {
    formik.setFieldValue("country", value.label);
  };
  const handleName = (e) => {
    const updatedName = e.target.value
      .toUpperCase()
      .replace(/[^a-zA-Z ]|\s{2,}/g, "");
    formik.setFieldValue("nameOfAccountHolder", updatedName);
  };

const handleBankName =(e) =>{
const bankname = e.target.value.toUpperCase().replace(/[^a-zA-Z ]|\s{2,}/g, "");
formik.setFieldValue("bankName",bankname)
}


  const handleAccountNo = (e) => {
    const accNo = e.target.value.replace(/[^0-9]/g, "").replace(/^0+/, "");
    formik.setFieldValue("accountNo", accNo);
  };

  const formik = useFormik({
    initialValues: {
      nameOfAccountHolder: "",
      bankName: "",
      branchName: "",
      ifsc: "",
      accountNo: "",
      swiftCode: "",
      country: "",
      agreeToTerms: false,
    },
    validationSchema: Yup.object({
      nameOfAccountHolder: Yup.string()
        .matches(/^[A-Za-z]+$/, "Only characters are allowed")
        .required("Required"),
      bankName: Yup.string().required("Required"),
      branchName: Yup.string().required("Required"),

      ifsc: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),

        accountNo: Yup.string().required("Required"),
        swiftCode: Yup.string()
        .required("Required"),
        country:Yup.string().required("Required"),
        agreeToTerms: Yup.boolean()
        .oneOf([true], "You must agree to the terms and conditions")
        .required("You must agree to the terms and conditions"),
    }),
    onSubmit: async (values) => {
      console.log("nnnnnnnnnnnn", values);
      // values._id = id;
      //   const response = await changePassword(values);
      //   if (response.status) {
      //     toast.success("Password changed successfully");
      //     dispatch(setLogOut());
      //     navigate("/");
      //   } else {
      //     toast.error("Invalid password");
      //   }
    },
  });

  return (
    <div className="bg-cyan-50 h-full lg:w-[calc(100vw-17rem)] fixed right-0 w-screen overflow-y-scroll">
      <div className="  mt-20 ">
        <h1 className=" text-center  pt-6 pl-6 font-bold text-2xl mt-20">
          Account
        </h1>
        <p className="text-blue-gray-200 pl-6 font-thin  text-center">
          Home / Account
        </p>
      </div>
      <div className="flex justify-center">
        <Card color="" className="p-3 lg:w-[45rem] rounded-none">
          <form onSubmit={formik.handleSubmit}>
            <div className="grid  lg:grid-cols-2 lg:gap-1 gap-2  grid-cols-1 p-2">
              <div>
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Name Of Account Holder *
                </Typography>
              </div>
              <div>
                <Input
                  size="lg"
                  placeholder="name"
                  value={formik.values.nameOfAccountHolder}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 "
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={handleName}
                />
                <p className="h-4 ml-2 text-xs text-red-800">
                  {formik.touched.nameOfAccountHolder &&
                    formik.errors.nameOfAccountHolder &&
                    formik.errors.nameOfAccountHolder}
                </p>
              </div>

              <div>
                <Typography variant="h6" color="blue-gray" className="-mb-3 ">
                  Bank Name *
                </Typography>
              </div>

              <div>
                <Input
                  size="lg"
                  placeholder="Bank name"
                  value={formik.values.bankName}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={handleBankName}
                />
                <p className="h-4 ml-2 text-xs text-red-800">
                  {formik.touched.bankName &&
                    formik.errors.bankName &&
                    formik.errors.bankName}
                </p>
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="-mb-3 ">
                  Branch Name *
                </Typography>
              </div>

              <div>
                <Input
                  size="lg"
                  placeholder="Branch Name"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 capitalize"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  {...formik.getFieldProps("branchName")}
                />
                <p className="h-4 ml-2 text-xs text-red-800">
                  {formik.touched.branchName &&
                    formik.errors.branchName &&
                    formik.errors.branchName}
                </p>
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  IBAN/IFSC Code *
                </Typography>
              </div>

              <div>
                <Input
                  size="lg"
                  placeholder="IBAN/IFSC Code"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  {...formik.getFieldProps("ifsc")}
                />
                <p className="h-4 ml-2 text-xs text-red-800">
                  {formik.touched.ifsc &&
                    formik.errors.ifsc &&
                    formik.errors.ifsc}
                </p>
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Account No *
                </Typography>
              </div>

              <div>
                <Input
                  size="lg"
                  placeholder="0000000000000000"
                  value={formik.values.accountNo}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={handleAccountNo}
                />
                <p className="h-4 ml-2 text-xs text-red-800">
                  {formik.touched.accountNo &&
                    formik.errors.accountNo &&
                    formik.errors.accountNo}
                </p>
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Swift Code
                </Typography>
              </div>

              <div>
                <Input
                  size="lg"
                  placeholder="Swift Code"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  {...formik.getFieldProps("swiftCode")}
                />
                <p className="h-4 ml-2 text-xs text-red-800">
                  {formik.touched.swiftCode &&
                    formik.errors.swiftCode &&
                    formik.errors.swiftCode}
                </p>
              </div>

              <div>
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Country *
                </Typography>
              </div>

              <div>
                <Select
                  options={options}
                  defaultValue={formik.values.country.label}
                  onChange={changeHandler}
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      background: "#eefbfd", // Background color for the control
                    }),
                  }}
                  
                />
                 <p className="h-4 ml-2 text-xs text-red-800">
                  {formik.touched.country &&
                    formik.errors.country &&
                    formik.errors.country}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col justify-center items-center -mt-4">
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                 Authorized to Credit My Project Amount in given Account
                    Details
                  
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
              {...formik.getFieldProps("agreeToTerms")}
            />
                           <p className="h-4 ml-2 text-xs text-red-800">
                  {formik.touched.agreeToTerms &&
                    formik.errors.agreeToTerms &&
                    formik.errors.agreeToTerms}
                </p>

              <Button className="mt-1" size="md" type="submit">
                Account Update
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default Account;
