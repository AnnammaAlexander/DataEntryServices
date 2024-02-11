import { ArrowUpOnSquareIcon} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function DownloadSubmittedData() {
  const { id } = useParams();

  const navigate = useNavigate();
  const handleUser = () =>{
    navigate(`/clienData/${id}`)
  }
  return (
    <div className="bg-cyan-50 h-full lg:w-[calc(100vw-17rem)] fixed right-0 w-screen overflow-y-scroll">
    <div>
    <button onClick={handleUser}>
      <ArrowUpOnSquareIcon class="h-8 w-8 mt-20 "   style={{ color: "#17a2b8" }}/>
      </button>
      <h1 className="lg:text-left text-center  font-bold text-2xl mt-20 pl-6">
        Submitted Data
      </h1>
      <p className="text-blue-gray-200 pl-6 font-thin lg:text-left text-center">
        Home / ClientList / Submitted data
      </p>
    </div>
    <div className="text-center">
 <button className="buttonstyle p-2 ">Download submitted Data</button>
        </div>
        </div>
  )
}

export default DownloadSubmittedData
