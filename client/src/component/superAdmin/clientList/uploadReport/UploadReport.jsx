import {
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { DocumentTextIcon ,ArrowUpOnSquareIcon} from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import {
  uploadReport,
  getProjectReport,
} from "../../../../API/apiSuperAdminConnection.js";
import SingleReport from "./SingleReport.jsx";

function UploadReport() {
  const [imgUrl, setImgUrl] = useState();
  const [file, setFile] = useState({});
  const [open, setOpen] = useState(false);

  const [allReports, setAllReports] = useState([]);
  const navigate = useNavigate()

  const { id } = useParams();

  function uploadfile(event) {
    const file = event.target.files?.[0];
    if (file) {
      // console.log("typeof file : ",typeof file);

      setFile(file);
      const url = URL.createObjectURL(file);
      setImgUrl(url);
    }
  }
  const handleOpen = () => {
    setOpen(!open);
  };
  console.log("imgUrl", imgUrl);
  const handleClear = () => {
    setOpen(!open);
    setFile("");
    setImgUrl("");
  };

  const uploadReportHandle = async () => {
    const response = await uploadReport(id, file);
    if (response) {
      setOpen(!open);
      toast.success(" Report Uploaded successfully");
      setAllReports((prev)=>[...prev,response]);

    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await getProjectReport(id);

    if (response) {
      setAllReports(response);
    }
  };
  const TABLE_HEAD = ["ReportName", "Delete Status", "Uploaded Date","",""];

 
  // const UserId= id
  //    const handleDeleteReport = async(id) =>{
  //     const response = await deleteReport(id,UserId)
  //     if(response.status){
  //         toast.success("repo")
  //     }
  //    }
  const handleUser = () =>{
    navigate(`/clienData/${id}`)
  }
  return (
    <div className="bg-cyan-50 h-full lg:w-[calc(100vw-17rem)] fixed right-0 w-screen overflow-hidden">
      <div className="  mt-20">
        <button onClick={handleUser}>
      <ArrowUpOnSquareIcon class="h-8 w-8 "   style={{ color: "#17a2b8" }}/>
      </button>
        <h1 className=" text-center   pl-6 font-bold text-3xl ">
          Reports
        </h1>
        <p className="text-blue-gray-200 pl-6 font-thin  text-center">
          Home / ClientList / User data / Reports
        </p>
      </div>
      <div className="p-6 flex justify-center ">
        <Button className="buttonstyle text-lg " onClick={handleOpen}>
          Upload Report
        </Button>
      </div>
      <div className="p-6">
        <Typography variant="h4" color="blue-gray" className="text-center  ">
          Uploaded Reports
        </Typography>
        {allReports?.length ? (
          
            <Card className=" w-full overflow-scroll h-96 mt-2 ">
              <table className=" text-left table-auto w-full min-w-max overflow-scroll ">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center"
                      >
                        
                          {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className=" overflow-scroll h-fit">
                  {allReports && allReports.map(
                    (singleReport) => {
                      // const isLast = index === allReports.length - 1;
                      // const classes = isLast
                      //   ? "p-4"
                      //   : "p-4 border-b border-blue-gray-50";

                      return (
                        <SingleReport key={singleReport._id} singleReport={singleReport}/>
//                         <tr key={_id}>
//                           <td className={classes}>
//                             <Typography
//                               variant="small"
//                               color="blue-gray"
//                               className="font-normal"
//                             >
//                               {report}
//                             </Typography>
//                           </td>
//                           <td className={classes}>
//                             <div className="w-24 text-center">
//                               {deleteStatus ? (
//                                 <Typography
//                                   variant="small"
//                                   className=" bg-red-200 p-1 rounded-lg text-red-900 font-bold text-md"
//                                 >
//                                   Deleted
//                                 </Typography>
//                               ) : (
//                                 <Typography
//                                   variant="small"
//                                   className=" bg-green-200 p-1 rounded-lg text-green-900 font-bold text-md"
//                                 >
//                                   Sent
//                                 </Typography>
//                               )}
//                             </div>
//                           </td>
//                           <td className={classes}>
//                             <Typography
//                               variant="small"
//                               color="blue-gray"
//                               className="font-normal"
//                             >
//                               {" "}
//                               {moment(createdAt).format("DD/MM/YYYY HH:mm")}
//                             </Typography>
//                           </td>
//                           <td className={classes}>
//                             <button onClick={() => handleViewREport(report)}   style={{ color: "#17a2b8" }}
// >
//                               view
//                             </button>
//                           </td>
//                         </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </Card>
          
        ) : (
          <p className="text-red-800 text-center mt-5 text-xl">
            No uploaded repoarts
          </p>
        )}
      </div>

      <Dialog
        open={open}
        dismiss={{ outsidePress: false }}
        size="xs"
        className="flex flex-col justify-center items-center"
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Upload Report</DialogHeader>
        <DialogBody divider>
          {imgUrl ? (
            <div className=" w-40 h-42 mt-3  m-auto gap-2 flex flex-col items-center">
              <div className="">
                {file.name?.toLowerCase().endsWith(".pdf") ? (
                  <iframe src={imgUrl} className="w-fit h-full m-auto"></iframe>
                ) : file.name?.toLowerCase().endsWith(".xls") ||
                  file.name?.toLowerCase().endsWith(".xlsx") ? (
                  <iframe
                    src={`https://docs.google.com/gview?url=${encodeURIComponent(
                      imgUrl
                    )}&embedded=true`}
                    className="w-fit h-full m-auto"
                  ></iframe>
                ) : file.name?.toLowerCase().endsWith("jpg") ||
                  file.name?.toLowerCase().endsWith("jpeg") ||
                  file.name?.toLowerCase().endsWith("png") ? (
                  <img src={imgUrl} className="object-cover"></img>
                ) : (
                  <p className="text-red-900 text-lg">Choose another file</p>
                )}
              </div>
            </div>
          ) : (
            <DocumentTextIcon class="h-24 w-24 text-gray-500" />
          )}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleClear}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>

          {file?.name?.toLowerCase().endsWith(".xls") ||
          file?.name?.toLowerCase().endsWith(".xlsx") ||
          file?.name?.toLowerCase().endsWith("jpg") ||
          file?.name?.toLowerCase().endsWith("jpeg") ||
          file?.name?.toLowerCase().endsWith("png") ||
          file?.name?.toLowerCase().endsWith(".pdf") ? (
            <div>
              <Button
                variant="gradient"
                color="green"
                onClick={uploadReportHandle}
              >
                <span>Upload Report</span>
              </Button>
            </div>
          ) : (
            <label htmlFor="dropzone-file">
              <div className="p-2 text-lg text-center buttonstyle w-24">
                Select
              </div>
              <input
                type="file"
                name="uploadPost"
                id="dropzone-file"
                className="hidden"
                onChange={uploadfile}
              ></input>
            </label>
          )}
        </DialogFooter>
      </Dialog>

     
    </div>
  );
}

export default UploadReport;
