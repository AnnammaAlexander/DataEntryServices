import { DocumentTextIcon,TrashIcon } from "@heroicons/react/24/outline";
import {
    Typography,
    Dialog,
    Button,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
function SingleProject() {
  return (
    <>
      <tr className="border-b-2 border-gray-200 h-14 ">
        <td className="text-center">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {singleReport?.report}
          </Typography>
        </td>
        <td className=" text-center">
          {/* <div className="w-24 text-center"> */}
          {reportStatus ? (
            <Typography
              variant="small"
              className=" bg-red-200 p-1 rounded-lg text-red-900 font-bold text-md w-24 m-auto"
            >
              Deleted
            </Typography>
          ) : (
            <Typography
              variant="small"
              className=" bg-green-200 p-1 rounded-lg text-green-900 font-bold text-md w-24 m-auto"
            >
              Sent
            </Typography>
          )}
          {/* </div> */}
        </td>
        <td className=" text-center">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {moment(singleReport?.createdAt).format("DD/MM/YYYY HH:mm")}
          </Typography>
        </td>
        <td className="text-center ">
          <button
            style={{ color: "#17a2b8" }}
            onClick={() => handleViewREport(singleReport.report)}
          >
            view
          </button>
        </td>
        <td className="text-center">
          <TrashIcon
            class="h-6 w-6 text-gray-500 hover:text-light-blue-400"
            onClick={() => handleDeleteReport(singleReport._id)}
          />
        </td>
      </tr>
      </>
  )
}

export default SingleProject
