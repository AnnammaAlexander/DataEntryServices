import { useEffect } from "react"



function TermsAndCondition() {
    const getTermsAndConditions = async() =>{
        const response = await fetch("http://localhost:3000/public/uploads/terms&conditions/AlphonsaAlexander.pdf")
        console.log("response",response);
    }
   
    useEffect( ()=>{
        getTermsAndConditions();
    },[])


  return (
    <div className="bg-cyan-50 h-full lg:w-[calc(100vw-17rem)] fixed right-0 w-screen ">
     
      <div className="  mt-20">
        <h1 className="lg:text-left text-center  pt-6 pl-6 font-bold text-2xl mt-20">
          Terms & conditions
        </h1>
        <p className="text-blue-gray-200 pl-6 font-thin lg:text-left text-center">
          Home / Terms & conditions
        </p>
      </div>



      <div>
        <embed src="http://localhost:3000/uploads/terms&conditions/AlphonsaAlexander.pdf" type="application/pdf" width="100%" height="600px" />
      </div>



      {/* <div className="flex lg:justify-start lg:ml-4 mt-6 items-center justify-center">
        <Button 
         style={{
            backgroundImage:
              "linear-gradient(173.1deg, rgba(226,66,249,0.94) 10.2%, rgba(79,147,249,1) 77.3%)",
          }}
        >termas & conditions</Button>
      </div> */}
</div>
    
  )
}

export default TermsAndCondition
