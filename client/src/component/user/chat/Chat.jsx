import {
  
    Button,
    
    IconButton,
    
    
  } from "@material-tailwind/react";
  import { useState } from "react";
  import { EnvelopeIcon } from "@heroicons/react/24/solid";
  import { XMarkIcon } from "@heroicons/react/24/solid";
  import { Avatar } from "@material-tailwind/react";
  function Chat() {
    const [value, setValue] = useState("");
    const [currentMessages, setCurrentMessages] = useState([]);
    const [open, setOpen] = useState(false);
    // const [user,setUser] =useState("guestUser")
  
    const openDrawer = () => setOpen(!open);
  
    const handleMessage = (e) => {
      setValue(e.target.value);
    };
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      setCurrentMessages(value)
      
    //   const response = await sendMessage(currentMessages,user)
    //   console.log(response);
      // setCurrentMessages((prev) =>[...prev,currentMessages]);
      setValue("");
    };
  console.log(";;;;;;;;;;;;;",currentMessages);
    return (
      <div className=" z-50">
        <Button
          className=" rounded-full h-12 w-14 bg-blue-500 justify-center items-center shadow-2xl focus:outline-none active:outline-none transform-none"
          onClick={openDrawer}
          size="sm"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6 text-white block " />
          ) : (
            <EnvelopeIcon className="h-6 w-6 text-white block  text-2xl shadow-2xl" />
          )}
        </Button>
        {open && (
          <div className="absolute h-[32rem]  w-72 right-1 rounded-xl bg-blue-100 overflow-hidden shadow-2xl">
            <div className="h-1/4 bg-gradient-to-t from-purple-500 via-purple-200 to-purple-200">
              <h1 className="text-center text-white text-2xl p-3 font-semibold">
                Chat
              </h1>
              <p className="text-white text-center">
                Questions? Chat with us!
              </p>
            </div>
  
            <div className="h-[20rem] overflow-auto p-2 flex-col ">
              <div className="flex">
                <Avatar
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  alt="avatar"
                  size="md"
                  className="p-2"
                />
                <div className="">
                  <p className="font-extralight text-sm text-blue-gray-800">
                    Admin
                  </p>
                  <p className="bg-gradient-to-t from-purple-500 via-purple-400 to-purple-400 text-white rounded-xl p-2">
                    Is there anything we can help you with?
                  </p>
                </div>
              </div>
   
            
              <div className="flex justify-end max-w-full">
              <p className="text-right bg-white rounded-lg mt-3 p-2 w-100">{currentMessages}</p>
              </div>
            </div>
  
              
            {/* {messages.map((msg, index) => (
                <div key={index} className="bg-white flex-grow">
                  {msg.type === "user" ? (
                    <p className="bg-white rounded-xl  m-1">{msg.content}</p>
                  ) : (
                    <p className="bg-gradient-to-t from-purple-500 via-purple-400 to-purple-400 text-white rounded-xl p-2 m-1">
                      {msg.content}
                    </p>
                  )}
                </div>
              ))} */}
              
  
            <form className="flex bg-white" onSubmit={handleSubmit}>
              <textarea
                className="resize-none w-60 p-2 focus:outline-none"
                placeholder="Compose your message..."
                value={value}
                onChange={handleMessage}
                color=""
              />
              {value?.length > 0 && (
                <IconButton
                  variant="text"
                  className="rounded-full flex items-center justify-center mt-1"
                  type="submit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 22 22"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </IconButton>
              )}
            </form>
          </div>
        )}
      </div>
    );
  }
  
  export default Chat;
  