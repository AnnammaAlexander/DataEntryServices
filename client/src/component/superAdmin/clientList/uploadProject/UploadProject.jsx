// import { XMarkIcon } from "@heroicons/react/24/outline";
//   import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  
  Typography,
  Button,
  CardBody,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import { ArrowUpOnSquareIcon} from "@heroicons/react/24/outline";

//   import { XMarkIcon } from "@heroicons/24/outline";

import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProjects, uploadImageFiles,getProjectCount } from "../../../../API/apiSuperAdminConnection";
import SingleProject from "./SingleProject";
import { useNavigate } from "react-router-dom";

// import { uploadImageFiles } from "../../API/apiAdminConnection";

export function UploadProject() {
  const { id } = useParams();
     const navigate = useNavigate();
  const [images, setImages] = useState([]);
  // const [userId,setUserId] = useState("")
  const [imgfiles, setImgfiles] = useState([]);
  const [open, setOpen] = useState(false);
  const [allProjects,setAllProject]= useState([])
  const [projectCount,setProjectCount] = useState("")
const handleUploadProject =()=>{
  handleProjectCount();
  handleOpen();
}
const handleProjectCount = async() =>{
  console.log("handleProjectCount",id);
  const response = await getProjectCount(id)
  console.log("response",response);
  if(response.status){
    setProjectCount(response?.projectNoCount)
  }else{
    console.log("server error");
  }
}
const nextProjectCount = projectCount+1;
  const uploadImages = (e) => {
    const val = e.target.files;
    setImages(Object.values(val));
    setImgfiles(Array.from(e.target.files));
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  //uploaad image files
  const handleUpload = async () => {
    const response = await uploadImageFiles(id, images,nextProjectCount);

    if (response.status) {
      setOpen(!open);

      toast.success("Upload successfully");
      setImgfiles([]);
    }else{
      handleOpen();
      toast.error("internal server error")
    }
  };
  const clerInputField = useRef(null);
  const clearImages = () => {
    setImgfiles([]);
    setImages([]);
    if (clerInputField.current) {
      clerInputField.current.value = "";
    }
    setOpen(!open);
  };
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData = async() =>{
const response = await getAllProjects(id)
console.log("ppppppppppppppp",response);
if(response?.status){
  if(response?.length){
     setAllProject(response)
  }
}else{
  console.log("server error");
}
  }
  const TABLE_HEAD = ["Project No", "No. of Projects","project Status","project Validity", "Uploaded Date","",""];
console.log("allProjects",allProjects);
const handleUser = () =>{
  navigate(`/clienData/${id}`)
}
  return (
    <>
      <Card className="h-screen md:w-[calc(100vw-18rem)]  ml-auto top-14 rounded-none ">
        {/* <Card className="h-screen w-[calc(100vw-17rem)] fixed right-0 "> */}
        <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="  mt-20">
        <button onClick={handleUser}>
      <ArrowUpOnSquareIcon class="h-8 w-8 "   style={{ color: "#17a2b8" }}/>
      </button>
        <h1 className=" text-center   pl-6 font-bold text-3xl ">
          Projects
        </h1>
        <p className="text-blue-gray-200 pl-6 font-thin  text-center">
          Home / ClientList / User data / Projects
        </p>
      </div>
          {/* <div className="flex justify-center flex-col gap-2">
        <Typography variant="h4" color="blue-gray">
            Assigned Projects
        </Typography> 

        <Typography variant="h5" color="blue-gray" textGradient>
           No Assigned Projects
        </Typography> 
        </div> */}
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row mt-3">
            {/* <div className="relative flex  w-full max-w-[30rem]">
            <Input
              type="file"
              label="Upload Images"
              multiple
              accept=".jpg,.png,.gif,.jpeg"
              name="img"
              ref={clerInputField}
              onChange={uploadImages}
              className="pr-20"
              containerProps={{
                className: "min-w-0",
              }}
            />
            <div className=" top-1 flex gap-2 absolute right-1">
              <Button
                size="sm"
                color={imgfiles.length ? "gray" : "blue-gray"}
                disabled={!imgfiles.length}
                className=" right-1  rounded text-red-900 p-1 "
                onClick={clearImages}
              >
                <XMarkIcon class="h-6 w-6 text-gray-500" />
              </Button>
              <Button
                size="sm"
                color={imgfiles.length ? "gray" : "blue-gray"}
                disabled={!imgfiles.length}
                className=" right-1 top-1 rounded"
                onClick={handleUpload}
              >
                Upload
              </Button>
            </div>
          </div> */}
            <Button className="buttonstyle text-sm " onClick={handleUploadProject}>
              Upload Projects
            </Button>
          </div>
        </CardHeader>
        <CardBody>
        {allProjects?.length ? (
          
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
                {allProjects && allProjects.map(
                  (singleProject) => {
                    // const isLast = index === allReports.length - 1;
                    // const classes = isLast
                    //   ? "p-4"
                    //   : "p-4 border-b border-blue-gray-50";

                    return (
                      <SingleProject key={singleProject._id} singleProject={singleProject}/>
//                        
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
        </CardBody>
      </Card>
      <Dialog
        open={open}
        handler={handleOpen}
        dismiss={{ outsidePress: false }}
      >
        <DialogHeader className="flex justify-center gap-2">
        <p className="text-blue-gray-200 font-thin text-sm text-center">

          ProjectNo:</p><p className="text-blue-gray-300">{nextProjectCount}</p>
          <label htmlFor="dropzone-file">
            <div className="p-2 text-lg text-center buttonstyle ">
              Choose Projects
            </div>
            <input
              type="file"
              label="Upload Images"
              multiple
              accept=".jpg,.png,.gif,.jpeg"
              name="img"
              className="hidden"
              id="dropzone-file"
              ref={clerInputField}
              onChange={uploadImages}
              // onChange={uploadfile}
            ></input>
          </label>
          {imgfiles?.length ? (
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal leading-none opacity-70 p-2"
            >
              {imgfiles.length} project selected
            </Typography>
          ) : (
            ""
          )}
        </DialogHeader>
        <DialogBody>
          <div className={`grid grid-cols-6 gap-2 sm:grid-cols-6 md:grid-cols-12 ${imgfiles.length > 4 ? ' overflow-scroll h-96' : "h-100"}`}>
            {images ? (
              imgfiles?.map((img, index) => (
                <div key={index}>
                  <img
                    src={URL.createObjectURL(img)}
                    alt={`Image ${index}`}
                    className="object-cover object-center h-full w-full max-w-full"
                  />
                </div>
              ))
            ) : (
              <p>No Project selected.</p>
            )}
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={clearImages}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          {imgfiles?.length ? (
            <Button variant="gradient"
            color="green" 
            disabled={!imgfiles.length}
            onClick={handleUpload}>
             <span>Confirm</span>
           </Button>
          ):""}
          
        </DialogFooter>
      </Dialog>
    </>
  );
}
