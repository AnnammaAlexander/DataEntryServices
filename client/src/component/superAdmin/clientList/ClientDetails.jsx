import { useParams } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { Drawer, IconButton } from "@material-tailwind/react";
import {
  getUserData,
  activateUserDashboard,
  sendMessage,
  getAllMessage,
  postUploadHandler,
  getLastUploadedProject,
  deleteSingleProject,
  deleteAllProject,
  resetDashboard
} from "../../../API/apiSuperAdminConnection";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserUrl, fileAttachment,projecImgUrl } from "../../../assets/constants/constant";
import { toast } from "react-toastify";
import {
  PhotoIcon,
  DocumentTextIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

function ClientData() {
  const [openResetDashboard, setOpenResetDashboard] = useState(false);

  const [openChat, setOpenChat] = useState(false);
  const [messages, setMessage] = useState([]);
  const [lastMessage, setLastMessage] = useState("");
  const [userdata, setUserData] = useState({});
  const [open, setOpen] = useState(false);
  const [activConformOpen, setActiveConformOpen] = useState(false);
  const [userActivated, setUserActivated] = useState(true);
  const [openProject, setOpenProject] = useState(false);
  const [attachmentFile, setAttachmentFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");
  const [attachmentFileOpen, setAttachmentFileOpen] = useState(false);
const [lastProject,setLastProject]=useState([])
  const navigate = useNavigate();
  const { userId } = useParams();
  const handleOpenResetdashboard = () => setOpenResetDashboard(!openResetDashboard);

  const fetchData = async () => {
    const response = await getUserData(userId);
    if (response) {
      setUserData(response);
      setUserActivated(response?.userActivated);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
const handleDeleteProject =async()=>{
  handleOpenProject();
  const response = await getLastUploadedProject(userId,userdata?.projectNoCount)
if(response.status){
  if(response?.response.length){
    setLastProject(response?.response)  
}
}
}
  const handleOpenProject = () => setOpenProject(!openProject);
  const handleOpenMessageAttachment = () =>
    setAttachmentFileOpen(!attachmentFileOpen);
  const handleClear = () => {
    setFileUrl("");
    setAttachmentFile("");
    setAttachmentFileOpen(!attachmentFileOpen);
  };

  const openDrawer = async () => {
    setOpenChat(true);
    const response = await getAllMessage(userId);
    if (response.status) {
      if (response?.response.length) {
        setMessage(response?.response);
      }
    } else {
      toast.error("error to loading message");
    }
  };
  const closeDrawer = () => setOpenChat(false);

  const handleMessage = async () => {
    const response = await sendMessage(lastMessage, userId);
    console.log("response", response);
    if (response) {
      if (response.status) {
        setMessage((prev) => [...prev, { message: lastMessage }]);
        setLastMessage("");
      }
    } else {
      toast.error("Network error");
    }
  };




  const handleOpen = () => setOpen(!open);
  const handleactivConformOpen = () => setActiveConformOpen(!activConformOpen);
  const downloadFile = async () => {
    try {
      const response = await fetch(UserUrl + userdata.UploadId, {
        method: "GET",
        mode: "cors",
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));

        const link = document.createElement("a");

        // Get the file extension dynamically
        const fileExtension = getUserFileExtension(userdata.UploadId);
        link.href = url;
        link.download = `downloaded-file.${fileExtension}`; // Specify the desired filename with dynamic extension
        link.click();
        window.URL.revokeObjectURL(url);
      } else {
        console.error("Failed to fetch the resource");
      }
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };
  // Function to get file extension from filename
  const getUserFileExtension = (filename) => {
    return filename.split(".").pop();
  };
  const handleactivateUser = async () => {
    const response = await activateUserDashboard(
      userdata?.email,
      userdata?._id
    );
    if (response.status) {
      if (response) {
        setActiveConformOpen(!activConformOpen);
        toast.success("user Activated successfully");
        setUserActivated(true);
      } else {
        toast.error("Error.....Try again....");
      }
    } else {
      toast.error("Error.....Try again....");
      setUserActivated(false);
    }
  };

  const handleFileContent = (event) => {
    const file = event.target.files[0];

    if (file) {
      setAttachmentFile(file);

      const url = URL.createObjectURL(file);
      setFileUrl(url);
    }
  };
  const uploadtHandler = async () => {
    const response = await postUploadHandler(userId, attachmentFile);
    if (response) {
      if (response.status) {
        setMessage((prev) => [...prev, response.response]);
        handleClear();
      }
    }
  };
  const deleteProject = async(ptojectId)=>{
    const response = await deleteSingleProject(ptojectId,userId)
    if(response?.status){
      
 const delResult = lastProject?.filter((project)=>{
  return project._id !==ptojectId

})
setLastProject(delResult)
    }
  }
// const deleteSingleProject = async (projectId) => {
//   try {
//     const response = await deleteSingleProject(projectId, userId);

//     if (response?.status) {
//       console.log("Deleted project:", response?.response);

//       // Filter out the deleted project from the state
//       const updatedProjects = lastProject?.filter((project) => project._id !== projectId);

//       setLastProject(updatedProjects);
//     } else {
//       toast.error("Error deleting project");
//     }
//   } catch (error) {
//     console.error("Error:", error.message);
//     toast.error("An error occurred while deleting the project");
//   }
// };

const handleDeleteAll = async (projectNoCount) => {
  try {
    const response = await deleteAllProject(projectNoCount, userId);
    if (response) {
      const delResult = lastProject?.filter((project) => {
        return project.projectNoCount !== projectNoCount;
      });
      setLastProject(delResult);
    }
  } catch (error) {
    toast.error("An error occurred while deleting the project");
    console.error("Error:", error.message);
  }
};

const handleResetDashboard = async()=>{
  const response = await resetDashboard(userId)
  console.log("response",response);
}
  return (
    <div className="bg-cyan-50 h-full lg:w-[calc(100vw-17rem)] fixed right-0 w-screen overflow-y-scroll">
      <div>
        <h1 className="lg:text-left text-center  font-bold text-2xl mt-20 pl-6">
          User Data
        </h1>
        <p className="text-blue-gray-200 pl-6 font-thin lg:text-left text-center">
          Home / ClientList / userData
        </p>
      </div>
      <div className="grid grid-cols-2 w-96  pt-6 pl-6">
        <Typography className="flex  justify-items-start text-xl text-blue-gray-400 ">
          Name
        </Typography>

        <Typography className="flex justify-items-start text-blue-gray-400 text-lg">
          : {userdata.name}
        </Typography>

        <Typography className="flex justify-items-start text-lg text-blue-gray-400">
          Plan
        </Typography>

        <Typography
          color="blue-gray"
          className="flex justify-items-start text-blue-gray-400 text-xl"
        >
          : Gold
        </Typography>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 items-center text-center  p-3 mt-3">
        <div>
          <Button
            className="lg:w-52 w-80 h-14 p-2 shadow-lg buttonstyle text-sm"
            onClick={handleOpen}
          >
            Download User Document
          </Button>
        </div>
        <div>
          <Button
            className=" lg:w-52 w-80 h-14 p-2 buttonstyle text-sm"
            onClick={handleactivConformOpen}
            disabled={userActivated}
          >
            Activate User Dashboard
          </Button>
        </div>
        <div>
          <Button
            className="lg:w-52 w-80 h-14 buttonstyle text-sm"
            onClick={() => {
              navigate(`/imgupload/${userdata._id}`);
            }}
          >
            Upload Data
          </Button>
        </div>
        <div>
          <Button
            className="lg:w-52 w-80 h-14 buttonstyle text-sm"
            onClick={handleDeleteProject}
          >
            Delete Data
          </Button>
        </div>
        <div>
          <Button
            className="lg:w-52 w-80 h-14 buttonstyle text-sm"
            onClick={() => {
              navigate(`/reportupload/${userdata._id}`);
            }}

          >
            Upload Report
          </Button>
        </div>
        {/* <div>
          <Button className="lg:w-52 w-80 h-14 buttonstyle text-sm">
            Delete Report
          </Button>
        </div> */}
        <div>
          <Button
            className="lg:w-52 w-80 h-14 buttonstyle p-2 text-sm"
            onClick={() => {
              navigate(`/submitteddata/${userdata._id}`);
            }}
          >
            Download Submitted Data
          </Button>
        </div>
        <div>
          <Button
            className="lg:w-52 w-80 h-14 buttonstyle text-sm"
            onClick={openDrawer}
          >
            Send Message
          </Button>
        </div>
        <div>
          <Button className="lg:w-52 w-80 h-14 buttonstyle text-sm" onClick={handleOpenResetdashboard}>
            Reset Dashboard
          </Button>
        </div>
      </div>

      {/* Dialog for downloading user id proof */}
      <Dialog
        open={open}
        handler={handleOpen}
        dismiss={{ outsidePress: false }}
      >
        <DialogHeader>User Id</DialogHeader>
        <DialogBody>
          {userdata?.UploadId ? (
            <>
              {userdata.UploadId.endsWith(".pdf") ? (
                <iframe
                  src={UserUrl + userdata.UploadId}
                  className="w-96 h-96 m-auto"
                ></iframe>
              ) : (
                <img
                  src={UserUrl + userdata.UploadId}
                  alt="User ID"
                  className="w-96 h-96 overflow-scroll m-auto"
                />
              )}
            </>
          ) : (
            <p>user id proof missing</p>
          )}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          {userdata?.UploadId && (
            <Button variant="gradient" color="green" onClick={downloadFile}>
              <span>Download</span>
            </Button>
          )}
        </DialogFooter>
      </Dialog>

      {/* Dialog for activate user Dashboard */}
      <Dialog
        open={activConformOpen}
        handler={handleactivConformOpen}
        dismiss={{ outsidePress: false }}
      >
        <DialogHeader>Do you want to Activate this user ?</DialogHeader>

        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleactivConformOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleactivateUser}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Drawer for send message */}
      <Drawer
        dismiss={{ outsidePress: false }}
        open={openChat}
        onClose={closeDrawer}
        className="p-4 pt-16 h-96"
        placement="right"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Send Message
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="flex flex-col h-full justify-between">
          <div className="overflow-y-scroll h-3/4 no-scrollbar flex flex-col gap-3 items-end ">
            {messages?.map((singleMessage, index) => {
              if (singleMessage.isImage) {
                const messageUrl = fileAttachment + singleMessage?.message;
                console.log("messageUrl",messageUrl);

                return singleMessage.message?.toLowerCase().endsWith(".pdf") ? (
                  <iframe
                    key={index}
                    src={messageUrl}
                    className="w-fit h-full m-auto"
                  ></iframe>
                ) : singleMessage.message?.toLowerCase().endsWith(".xls") ||
                  singleMessage.message?.toLowerCase().endsWith(".xlsx") ? (
                  <iframe
                    key={index}
                    src={`https://docs.google.com/gview?url=${encodeURIComponent(
                      messageUrl
                    )}&embedded=true`}
                    className="w-fit h-full m-auto"
                  ></iframe>
                ) : singleMessage.message?.toLowerCase().endsWith("jpg") ||
                  singleMessage.message?.toLowerCase().endsWith("jpeg") ||
                  singleMessage.message?.toLowerCase().endsWith("png") ? (
                  <img
                    key={index}
                    src={messageUrl}
                    className="object-cover"
                    alt="Image"
                  />
                ) : (
                  <p key={index} className="text-red-900 text-lg">
                    Choose another file
                  </p>
                );
              } else {
                return (
                  <Typography
                    key={index}
                    color="gray"
                    className="pr-4 font-normal bg-blue-gray-50 rounded-lg break-words w-fit p-2"
                  >
                    {singleMessage.message}
                  </Typography>
                );
              }
            })}
          </div>

          <div className="flex gap-2 mb-16 items-center  ">
            <PhotoIcon
              className="h-8 w-10 text-gray-600 hover:bg-blue-gray-100 rounded-full p-1"
              onClick={handleOpenMessageAttachment}
            />

            <textarea
              className="resize-none no-scrollbar rounded border-none  w-full placeholder:text-black placeholder:p-2  text-black focus:outline-none bg-blue-gray-100 pl-1 "
              value={lastMessage}
              onChange={(event) => setLastMessage(event.target.value)}
            ></textarea>

            <IconButton
              variant="text"
              className="rounded-full "
              onClick={handleMessage}
              disabled={!lastMessage?.length}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-6 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </IconButton>
          </div>
        </div>
      </Drawer>

      {/* dialog for uploading attachmentFile */}
      <Dialog
        open={attachmentFileOpen}
        dismiss={{ outsidePress: false }}
        size="xs"
        className="flex flex-col justify-center items-center"
        handler={handleOpenMessageAttachment}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Upload Attachment</DialogHeader>
        <DialogBody divider>
          {fileUrl ? (
            <div className=" w-40 h-42 mt-3  m-auto gap-2 flex flex-col items-center">
              <div className="">
                {attachmentFile.name?.toLowerCase().endsWith(".pdf") ? (
                  <iframe
                    src={fileUrl}
                    className="w-fit h-full m-auto"
                  ></iframe>
                ) : attachmentFile.name?.toLowerCase().endsWith(".xls") ||
                  attachmentFile.name?.toLowerCase().endsWith(".xlsx") ? (
                  <iframe
                    src={`https://docs.google.com/gview?url=${encodeURIComponent(
                      fileUrl
                    )}&embedded=true`}
                    className="w-fit h-full m-auto"
                  ></iframe>
                ) : attachmentFile.name?.toLowerCase().endsWith("jpg") ||
                  attachmentFile.name?.toLowerCase().endsWith("jpeg") ||
                  attachmentFile.name?.toLowerCase().endsWith("png") ? (
                  <img src={fileUrl} className="object-cover"></img>
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

          {attachmentFile?.name?.toLowerCase().endsWith(".xls") ||
          attachmentFile?.name?.toLowerCase().endsWith(".xlsx") ||
          attachmentFile?.name?.toLowerCase().endsWith("jpg") ||
          attachmentFile?.name?.toLowerCase().endsWith("jpeg") ||
          attachmentFile?.name?.toLowerCase().endsWith("png") ||
          attachmentFile?.name?.toLowerCase().endsWith(".pdf") ? (
            <div>
              <Button variant="gradient" color="green" onClick={uploadtHandler}>
                <span>Upload </span>
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
                onChange={handleFileContent}
              ></input>
            </label>
          )}
        </DialogFooter>
      </Dialog>

      {/* dialog for delete project */}
      <Dialog open={openProject} handler={handleOpenProject} size="xl">
        <DialogHeader className="flex justify-end">

        <Button  color="green" onClick={()=>handleDeleteAll(lastProject?.[0]?.projectNoCount)} className="buttonstyle p-2 text-lg " disabled={!lastProject?.length}>
            <span>Delete All</span>
          </Button>
        </DialogHeader>
        <DialogBody>
  {lastProject?.length ? (
    <div className="grid grid-cols-4 gap-6 sm:grid-cols-6 md:grid-cols-8 overflow-y-scroll">
      {lastProject.map(( singleProject , index) => {
        const projectUrl = projecImgUrl + singleProject?.imgUrl ; // Make sure imgUrl is not undefined
        return (
          <div key={index} className="flex gap-1 relative">
            <img
              className="h-40 w-full max-w-full rounded-lg object-cover object-center transition-transform transform hover:scale-125"
              src={projectUrl}
              alt="project-image"
            />
            {singleProject?.isDeleted ?
            (

              <button className="absolute right-0 bg-red-200 rounded p-1 text-red-900 font-bold" disabled>Deleted</button>
            )
              :
              (

                <TrashIcon className="h-8 w-10 text-red-900 absolute top-0 -right-3 hover:bg-blue-gray-100 hover:rounded-full p-1" title="Delete" onClick={()=>deleteProject(singleProject?._id)} />
              )

            }
           
          </div>
          
        );
      })}
    </div>
  ) : (
    <p className="text-center text-red-600 text-xl">No Projects Uploaded</p>
  )}
</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpenProject}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
         
        </DialogFooter>
      </Dialog>

{/* dialog for reset dashboard conformation */}
      <Dialog open={openResetDashboard} handler={handleOpenResetdashboard} dismiss={{outsidePress:false}}>
        <DialogHeader className="text-blue-gray-500">Do you want to Reset this Dashboard ..?</DialogHeader>
       
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpenResetdashboard}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleResetDashboard}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default ClientData;
