import * as Yup from "yup";
import { useFormik } from "formik";
// import { saveProject } from "../../API/apiConnection";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

import { Input, Button, Typography } from "@material-tailwind/react";
import { Card, CardBody } from "@material-tailwind/react";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { clearProject } from "../../redux/projectslice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Project() {
  const src = "http://super.itdatamaster.com/uploads/data/170470372647.png";
  const initialBackgroundState = {
    backgroundPosition: "0% 0%",
    backgroundImage: ` url(${src})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  const [state, setState] = useState(initialBackgroundState);
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    console.log(e.target.getBoundingClientRect());
    const x = Math.round(((e.pageX - left) / width) * 100);
    const y = Math.round(((e.pageY - top) / height) * 100);
    setState({
      backgroundPosition: ` ${x}% ${y}%`,
      backgroundImage: ` url(${src})`,
    });
  };

  const [isDownloading, setIsDownloading] = useState(false);
  const navigate = useNavigate();
  const handleViewData = () => {
    navigate("/viewdata");
  };
  const handleDownload = async () => {
    // try {
    //   const response = await fetch("http://super.itdatamaster.com/uploads/data/170470372647.png");

    //   if (!response.ok) {
    //     // Check if the response status is not okay
    //     throw new Error(`Failed to fetch. Status: ${response.status}`);
    //   }

    //   const blob = await response.blob();
    //   const url = window.URL.createObjectURL(new Blob([blob]));

    //   const a = document.createElement('a');
    //   a.href = url;
    //   a.download = "170470372647.png";
    //   document.body.appendChild(a);
    //   a.click();
    //   document.body.removeChild(a);
    // } catch (error) {
    //   // Log the error for debugging
    //   console.error('Error downloading file:', error);

    //   // Rethrow the error to propagate it further if needed
    //   throw error;
    // }

    setIsDownloading(true);

    const link = document.createElement("a");
    link.href = "http://super.itdatamaster.com/uploads/data/170470372647.png";
    link.download = "downloaded_image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsDownloading(false);
  };
  //   const singleData = useSelector((store) => store.project.projectfile);
  //   const dispatch = useDispatch();
  // const isSmallScreen = window.innerth <= 600;
  //   const [currentImageSrc, setCurrentImageSrc] = useState(images[0]);
  const clearData = () => {
    navigate("/projects");
  };
  const handleInput = (e) => {
    e.preventDefault();
  };
  const formik = useFormik({
    initialValues: {
      fileNo: "",
      referenceNo: "",
      productCode: "",
      productLine: "",
      productDescription: "",
      pricePerPiece: "",
      priceQuantity: "",
      ProductQuality: "",
      stockAvailable: "",
      modelNo: "",
      size: "",
      weight: "",
      colour: "",
      productOfOrgin: "",
      shippingMethod: "",
      shippingArea: "",
      brand: "",
      material: "",
      entryDate: "",
      time: "",
      productType: "",
      warrantee: "",
      shippingTimeframe: "",
      globalRating: "",
      productRating: "",
      dateSubmittedForReview: "",
    },
    validationSchema: Yup.object({}),
    onSubmit: async (values) => {
      //   values._id = singleData._id;
      console.log("responsesssssss,,,,", values);
      //   const response = await saveProject(values);
      //   if (response.status) {
      //     toast.success("Updated successfully");
      //     // dispatch(clearProject());
      //     navigate("/projects");
      //   }
    },
  });
  // const props = {width: 400, height: 300, zoomWidth: 500, img: "http://super.itdatamaster.com/uploads/data/170470372647.png" ,zomPosition:"original"};
  // const props = {width:500, height: 400,zoomWidth: 500, img: "http://super.itdatamaster.com/uploads/data/170470372647.png" };
  // const src = "http://super.itdatamaster.com/uploads/data/170470372647.png"

  // useEffect(() => {
  //   fetchData();
  // }, []);
// const fetchData = async()=>{
//   const response = await getAllProjects()
// }
  return (
    <div className="pl-2 w-screen h-screen bg-cyan-50 fixed flex flex-col right-0  mt-14 lg:w-[calc(100vw-17rem)]">
      {/* <div className="pl-2 w-screen h-screen bg-cyan-50 fixed flex flex-col right-0 lg:w-[calc(100vw-17rem)] mt-14"> */}
      <div className="h-4/5  p-2 mt-5 overflow-scroll group  ">
        {/* <div className="relative">  */}
        <button
          className="w-12 h-12 p-2 absolute right-7 z-50 rounded-full bg-blue-100 items-center justify-center active:bg-purple-100 group-hover:flex hidden"
          style={{ boxShadow: "inset 0 0 7px blue" }}
          type="button"
          onClick={handleDownload}
          disabled={isDownloading}
        >
          <DocumentArrowDownIcon class="h-6 w-6 text-light-blue-900" />
        </button>

       

        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setState(initialBackgroundState)}
          className="shadow-2xl h-screen max-w-screen-xl min-w-full"
          style={state}
        ></div>

        {/* </div> */}
      </div>

      <div className="h-full p-2 bg-cyan-50 overflow-y-scroll">
        <form className="" onSubmit={formik.handleSubmit}>
         

          <div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2 grid-cols-1">
            <div className="">
              <Typography variant="h6" color="blue-gray" className="">
                File No
              </Typography>

              <Input
                size="lg"
                placeholder="Name"
                className=" !border-t-blue-gray-200 focus:!border-light-blue-400  "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...formik.getFieldProps("fileNo")}
                onCut={handleInput}
                onCopy={handleInput}
                onPaste={handleInput}
                onDrag={handleInput}
                onDrop={handleInput}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.fileNo && formik.errors.fileNo
                  ? formik.errors.fileNo
                  : null}
              </p>
            </div>

            <div className="">
              <Typography variant="h6" color="blue-gray" className="">
                Reference No
              </Typography>
              <Input
                size="lg"
                placeholder="Brand"
                className=" !border-t-blue-gray-200 focus:!border-light-blue-400 "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...formik.getFieldProps("referenceNo")}
                onCut={handleInput}
                onCopy={handleInput}
                onPaste={handleInput}
                onDrag={handleInput}
                onDrop={handleInput}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.referenceNo && formik.errors.referenceNo
                  ? formik.errors.referenceNo
                  : null}
              </p>
            </div>

            <div className="">
              <Typography variant="h6" color="blue-gray" className="">
                Product Code
              </Typography>
              <Input
                size="lg"
                placeholder="Brand"
                className=" !border-t-blue-gray-200 focus:!border-light-blue-400 "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...formik.getFieldProps("productCode")}
                onCut={handleInput}
                onCopy={handleInput}
                onPaste={handleInput}
                onDrag={handleInput}
                onDrop={handleInput}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.productCode && formik.errors.productCode
                  ? formik.errors.productCode
                  : null}
              </p>
            </div>
            <div className="">
              <Typography variant="h6" color="blue-gray" className="">
                Product Line{" "}
              </Typography>

              <Input
                size="lg"
                placeholder="Product Line"
                className=" !border-t-blue-gray-200 focus:!border-light-blue-400  "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...formik.getFieldProps("productLine")}
                onCut={handleInput}
                onCopy={handleInput}
                onPaste={handleInput}
                onDrag={handleInput}
                onDrop={handleInput}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.productLine && formik.errors.productLine
                  ? formik.errors.productLine
                  : null}
              </p>
            </div>

            <div className="">
              <Typography variant="h6" color="blue-gray" className="">
                Product Description
              </Typography>
              <Input
                size="lg"
                placeholder="Product Description"
                className=" !border-t-blue-gray-200 focus:!border-light-blue-400 "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...formik.getFieldProps("productDescription")}
                onCut={handleInput}
                onCopy={handleInput}
                onPaste={handleInput}
                onDrag={handleInput}
                onDrop={handleInput}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.productDescription &&
                formik.errors.productDescription
                  ? formik.errors.productDescription
                  : null}
              </p>
            </div>

            <div className="">
              <Typography variant="h6" color="blue-gray" className="">
                Price per Piece
              </Typography>
              <Input
                size="lg"
                placeholder="Price per Piece"
                className=" !border-t-blue-gray-200 focus:!border-light-blue-400 "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...formik.getFieldProps("pricePerPiece")}
                onCut={handleInput}
                onCopy={handleInput}
                onPaste={handleInput}
                onDrag={handleInput}
                onDrop={handleInput}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.pricePerPiece && formik.errors.pricePerPiece
                  ? formik.errors.pricePerPiece
                  : null}
              </p>
            </div>
            <div className="">
              <Typography variant="h6" color="blue-gray" className="">
                Price Quantity
              </Typography>

              <Input
                size="lg"
                placeholder="Price Quantity"
                className=" !border-t-blue-gray-200 focus:!border-light-blue-400  "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...formik.getFieldProps("priceQuantity")}
                onCut={handleInput}
                onCopy={handleInput}
                onPaste={handleInput}
                onDrag={handleInput}
                onDrop={handleInput}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.priceQuantity && formik.errors.priceQuantity
                  ? formik.errors.priceQuantity
                  : null}
              </p>
            </div>

            <div className="">
              <Typography variant="h6" color="blue-gray" className="">
                Product Quantity
              </Typography>
              <Input
                size="lg"
                placeholder="Product Quantity"
                className=" !border-t-blue-gray-200 focus:!border-light-blue-400 "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...formik.getFieldProps("ProductQuality")}
                onCut={handleInput}
                onCopy={handleInput}
                onPaste={handleInput}
                onDrag={handleInput}
                onDrop={handleInput}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.ProductQuality && formik.errors.ProductQuality
                  ? formik.errors.ProductQuality
                  : null}
              </p>
            </div>

            <div className="">
              <Typography variant="h6" color="blue-gray" className="">
                Stock Available
              </Typography>
              <Input
                size="lg"
                placeholder="Stock Available"
                className=" !border-t-blue-gray-200 focus:!border-light-blue-400 "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...formik.getFieldProps("size")}
                onCut={handleInput}
                onCopy={handleInput}
                onPaste={handleInput}
                onDrag={handleInput}
                onDrop={handleInput}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.size && formik.errors.size
                  ? formik.errors.size
                  : null}
              </p>
            </div>
            <div className="">
              <Typography variant="h6" color="blue-gray" className="">
                Weight
              </Typography>

              <Input
                size="lg"
                placeholder="Weight"
                className=" !border-t-blue-gray-200 focus:!border-light-blue-400  "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...formik.getFieldProps("weight")}
                onCut={handleInput}
                onCopy={handleInput}
                onPaste={handleInput}
                onDrag={handleInput}
                onDrop={handleInput}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.weight && formik.errors.weight
                  ? formik.errors.weight
                  : null}
              </p>
            </div>

            <div className="">
              <Typography variant="h6" color="blue-gray" className="">
                Colour
              </Typography>
              <Input
                size="Size"
                placeholder="Colour"
                className=" !border-t-blue-gray-200 focus:!border-light-blue-400 "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...formik.getFieldProps("colour")}
                onCut={handleInput}
                onCopy={handleInput}
                onPaste={handleInput}
                onDrag={handleInput}
                onDrop={handleInput}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.colour && formik.errors.colour
                  ? formik.errors.colour
                  : null}
              </p>
            </div>

            <div className="">
              <Typography variant="h6" color="blue-gray" className="">
                Product of Origin
              </Typography>
              <Input
                size="lg"
                placeholder="Product of Origin"
                className=" !border-t-blue-gray-200 focus:!border-light-blue-400 "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...formik.getFieldProps("productOfOrgin")}
                onCut={handleInput}
                onCopy={handleInput}
                onPaste={handleInput}
                onDrag={handleInput}
                onDrop={handleInput}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.productOfOrgin && formik.errors.productOfOrgin
                  ? formik.errors.productOfOrgin
                  : null}
              </p>
            </div>
            <div className="">
              <Typography variant="h6" color="blue-gray" className="">
                Shipping Method
              </Typography>

              <Input
                size="lg"
                placeholder="Shipping Method"
                className=" !border-t-blue-gray-200 focus:!border-light-blue-400 "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...formik.getFieldProps("shippingMethod")}
                onCut={handleInput}
                onCopy={handleInput}
                onPaste={handleInput}
                onDrag={handleInput}
                onDrop={handleInput}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.shippingMethod && formik.errors.shippingMethod
                  ? formik.errors.shippingMethod
                  : null}
              </p>
            </div>

            <div className="">
              <Typography variant="h6" color="blue-gray" className="">
                Shipping Area
              </Typography>
              <Input
                size="lg"
                placeholder="Shipping Area"
                className=" !border-t-blue-gray-200 focus:!border-light-blue-400 "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...formik.getFieldProps("shippingArea")}
                onCut={handleInput}
                onCopy={handleInput}
                onPaste={handleInput}
                onDrag={handleInput}
                onDrop={handleInput}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.shippingArea && formik.errors.shippingArea
                  ? formik.errors.shippingArea
                  : null}
              </p>
            </div>

            <div className="">
              <Typography variant="h6" color="blue-gray" className="">
                Brand
              </Typography>
              <Input
                size="lg"
                placeholder="Brand"
                className=" !border-t-blue-gray-200 focus:!border-light-blue-400 "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...formik.getFieldProps("brand")}
                onCut={handleInput}
                onCopy={handleInput}
                onPaste={handleInput}
                onDrag={handleInput}
                onDrop={handleInput}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.brand && formik.errors.brand
                  ? formik.errors.brand
                  : null}
              </p>
            </div>
            <div className="">
              <Typography variant="h6" color="blue-gray" className="">
                Material
              </Typography>

              <Input
                size="lg"
                placeholder="Material "
                className=" !border-t-blue-gray-200 focus:!border-light-blue-400 "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...formik.getFieldProps("material")}
                onCut={handleInput}
                onCopy={handleInput}
                onPaste={handleInput}
                onDrag={handleInput}
                onDrop={handleInput}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.material && formik.errors.material
                  ? formik.errors.material
                  : null}
              </p>
            </div>

            <div className="">
              <Typography variant="h6" color="blue-gray" className="">
                Entry Date
              </Typography>
              <Input
                size="lg"
                placeholder="Entry Date"
                className=" !border-t-blue-gray-200 focus:!border-light-blue-400 "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...formik.getFieldProps("entryDate")}
                onCut={handleInput}
                onCopy={handleInput}
                onPaste={handleInput}
                onDrag={handleInput}
                onDrop={handleInput}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.entryDate && formik.errors.entryDate
                  ? formik.errors.entryDate
                  : null}
              </p>
            </div>

            <div className="">
              <Typography variant="h6" color="blue-gray" className="">
                Time
              </Typography>
              <Input
                size="lg"
                placeholder="Time"
                className=" !border-t-blue-gray-200 focus:!border-light-blue-400 "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...formik.getFieldProps("time")}
                onCut={handleInput}
                onCopy={handleInput}
                onPaste={handleInput}
                onDrag={handleInput}
                onDrop={handleInput}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.time && formik.errors.time
                  ? formik.errors.time
                  : null}
              </p>
            </div>
            <div className="">
              <Typography variant="h6" color="blue-gray" className="">
                Product Type
              </Typography>

              <Input
                size="lg"
                placeholder="Product Type "
                className=" !border-t-blue-gray-200 focus:!border-light-blue-400  "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...formik.getFieldProps("productType")}
                onCut={handleInput}
                onCopy={handleInput}
                onPaste={handleInput}
                onDrag={handleInput}
                onDrop={handleInput}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.productType && formik.errors.productType
                  ? formik.errors.productType
                  : null}
              </p>
            </div>

            <div className="">
              <Typography variant="h6" color="blue-gray" className="">
                Warrantee
              </Typography>
              <Input
                size="lg"
                placeholder="Warrantee"
                className=" !border-t-blue-gray-200 focus:!border-light-blue-400"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...formik.getFieldProps("warrantee")}
                onCut={handleInput}
                onCopy={handleInput}
                onPaste={handleInput}
                onDrag={handleInput}
                onDrop={handleInput}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.warrantee && formik.errors.warrantee
                  ? formik.errors.warrantee
                  : null}
              </p>
            </div>

            <div className="">
              <Typography variant="h6" color="blue-gray" className="">
                Shipping Timeframe
              </Typography>
              <Input
                size="lg"
                placeholder="Shipping Timeframe"
                className=" !border-t-blue-gray-200 focus:!border-light-blue-400 "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...formik.getFieldProps("shippingTimeframe")}
                onCut={handleInput}
                onCopy={handleInput}
                onPaste={handleInput}
                onDrag={handleInput}
                onDrop={handleInput}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.shippingTimeframe &&
                formik.errors.shippingTimeframe
                  ? formik.errors.shippingTimeframe
                  : null}
              </p>
            </div>
            <div className="">
              <Typography variant="h6" color="blue-gray" className="">
                Global Rating
              </Typography>

              <Input
                size="lg"
                placeholder="Global Rating "
                className=" !border-t-blue-gray-200 focus:!border-light-blue-400 "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...formik.getFieldProps("globalRating")}
                onCut={handleInput}
                onCopy={handleInput}
                onPaste={handleInput}
                onDrag={handleInput}
                onDrop={handleInput}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.globalRating && formik.errors.globalRating
                  ? formik.errors.globalRating
                  : null}
              </p>
            </div>

            <div className="">
              <Typography variant="h6" color="blue-gray" className="">
                Product Rating
              </Typography>
              <Input
                size="lg"
                placeholder="Product Rating"
                className=" !border-t-blue-gray-200 focus:!border-light-blue-400 "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...formik.getFieldProps("productRating")}
                onCut={handleInput}
                onCopy={handleInput}
                onPaste={handleInput}
                onDrag={handleInput}
                onDrop={handleInput}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.productRating && formik.errors.productRating
                  ? formik.errors.productRating
                  : null}
              </p>
            </div>

            <div className="">
              <Typography variant="h6" color="blue-gray" className="">
                Date Submitted For Review
              </Typography>
              <Input
                size="lg"
                placeholder="Date Submitted For Review"
                className=" !border-t-blue-gray-200 focus:!border-light-blue-400 "
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...formik.getFieldProps("dateSubmittedForReview")}
                onCut={handleInput}
                onCopy={handleInput}
                onPaste={handleInput}
                onDrag={handleInput}
                onDrop={handleInput}
              />
              <p className="ml-2 text-sm text-red-800">
                {formik.touched.dateSubmittedForReview &&
                formik.errors.dateSubmittedForReview
                  ? formik.errors.dateSubmittedForReview
                  : null}
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-2 mb-4">
            <Button className="mt-6 bg-green-400 w-32 " type="submit">
              Save
            </Button>
            <Button
              className="mt-6 bg-green-400 w-32 "
              type="button"
              style={{
                backgroundImage:
                  "linear-gradient(173.1deg, rgba(226,66,249,0.94) 10.2%, rgba(79,147,249,1) 77.3%)",
              }}
              onClick={handleViewData}
            >
              view data
            </Button>
            <Button onClick={clearData} className="mt-6">
              clear
            </Button>
          </div>
        </form>
        <div className="mt-6 w-100 p-5 flex justify-center mb-28">
          <Card className="shadow-2xl w-96 ">
            <CardBody className="grid grid-cols-2">
              <div>
                <Typography>Your ID </Typography>
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  DMIHyjb
                </Typography>
              </div>

              <div>
                <Typography>Email </Typography>
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  annammaka@gmail.com
                </Typography>
              </div>

              <div>
                <Typography>Duration </Typography>
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  (25) Daya
                </Typography>
              </div>
              <div>
                <Typography>Data Plan </Typography>
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Bronze of 1 Month
                </Typography>
              </div>

              <div>
                <Typography>File Done </Typography>
              </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  5
                </Typography>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Project;
