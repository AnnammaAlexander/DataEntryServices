import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowDownOnSquareIcon,
  Squares2X2Icon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
//   import { Avatar } from "@material-tailwind/react";
//   import {setLogOut} from '../../../redux/slice'
  import { useDispatch } from "react-redux";

import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useState,  } from "react";
import { setLogOut } from "../../redux/slice/userSlice";

function UserSidebar() {
  const [open, setOpen] = useState(false);
  const  {pathname}  = useLocation();
  const handleOpen = () => setOpen(!open); //sign out function
  const navigate = useNavigate();
   const dispatch =useDispatch()
  const handleLogout = () => {
     dispatch(setLogOut())
    navigate("/");
  };
 

  const listItems = [
    {
      navigate: "/",
      name: "Dashboard",
      icon: Squares2X2Icon,
    },
    {
      navigate: "/projects",
      name: "Projects",
      icon: PresentationChartBarIcon,
    },
    {
      navigate: "/profile",
      name: "Profiles",
      icon: UserCircleIcon,
    },
    {
      navigate: "/account",
      name: " Account",
      icon: Cog6ToothIcon,
    },
    {
      navigate: "/conditions",
      name: "Terms & Conditions",
      icon: ArrowDownOnSquareIcon,
    },
    {
      navigate: "/reports",
      name: "Report",
      icon: ArrowDownOnSquareIcon,
    },
  ];
  
  return (
    <Card className="  m-0 shadow-xl  fixed z-50 h-screen pr-8 p-5 lg:block hidden">
      <div className="flex  gap-5 p-4 mt-6 ">
        {/* <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="lg" /> */}
        {/* <Typography variant="h5" color="blue-gray" className="text-2xl font-bold mt-3">
    User
  </Typography> */}
      </div>

      <List className="mt-4 ">
        {listItems.map((option) => {

          return (

            <>
              {/* <Link className="flex p-2 hover:bg-gray-300 rounded-lg " to={option.navigate} key={option.navigate} onClick={(event)=>handleOptions(option.navigate,event.currentTarget)}> */}
              <Link
                className={`flex p-2 hover:bg-blue-100 rounded-lg ${pathname ===option.navigate && "bg-blue-100"} `}
                to={option.navigate}
                key={option.navigate}
              >
                <ListItemPrefix>
                  {/* <PresentationChartBarIcon className="h-5 w-5" /> */}
                  {React.createElement(option.icon, {
                    className: `h-5 w-5 `,
                    strokeWidth: 2,
                  })}
                </ListItemPrefix>

                {option.name}
              </Link>
            </>
          );
        })}

      

        <ListItem onClick={handleOpen}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>

      <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex flex-col justify-center items-center mt-3">
          <DialogHeader>Do you want to logout ?</DialogHeader>
        </div>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleLogout}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Card>
  );
}

export default UserSidebar;
