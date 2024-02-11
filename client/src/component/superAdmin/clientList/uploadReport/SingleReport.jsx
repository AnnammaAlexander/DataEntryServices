import PropTypes from "prop-types";
import {
  Typography,
  Dialog,
  Button,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import moment from "moment";
import { TrashIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { reportUrl } from "../../../../assets/constants/constant.js";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { deleteReport } from "../../../../API/apiSuperAdminConnection.js";

function SingleReport({ singleReport }) {
  const [reportName, setReportName] = useState("");
  const [viewReport, setViewReport] = useState(false);
  const [reportStatus, setReportStatus] = useState(singleReport.deleteStatus);

  const handleViewREport = (report) => {
    setReportName(report);
    setViewReport(!viewReport);
  };
  const reportCloudinaryUrl = reportUrl + reportName;
  const handleDeleteReport = async (id) => {
    const response = await deleteReport(id);
    if (response.status) {
      setReportStatus(true);
    }
  };

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
      <Dialog open={viewReport} handler={handleViewREport}>
        <DialogBody>
          {reportName ? (
            <div className=" w-40 h-42 mt-3  m-auto gap-2 flex flex-col items-center">
              <div className="">
                {reportName?.toLowerCase().endsWith(".pdf") ? (
                  <embed
                    src={reportCloudinaryUrl}
                    type="application/pdf"
                    className="w-96 h-full m-auto"
                  />
                ) : reportName?.toLowerCase().endsWith(".xls") ||
                  reportName?.toLowerCase().endsWith(".xlsx") ? (
                  <iframe
                    src={`https://docs.google.com/gview?url=${encodeURIComponent(
                      reportUrl + reportName
                    )}&embedded=true`}
                    className="w-96 h-full m-auto"
                  ></iframe>
                ) : (
                  <img
                    src={reportUrl + reportName}
                    className="object-cover"
                  ></img>
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
            onClick={() => setViewReport(!viewReport)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

SingleReport.propTypes = {
  singleReport: PropTypes.shape({
    report: PropTypes.string.isRequired,
    deleteStatus: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,

    // Add any other expected props and their types here
  }).isRequired,
};

export default SingleReport;
