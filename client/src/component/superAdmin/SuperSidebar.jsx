import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  Squares2X2Icon,
  UserPlusIcon,
  TrashIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {  ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
 
export function SuperSidebar() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Card
    className="h-full fixed max-w-[18rem] p-4 shadow-xl shadow-blue-gray-900/5 md:block rounded-none top-7 hidden bg-gray-900 left-0"
    //  style={{ backgroundColor: "rgb(23, 162, 184)" }}
    // disabled={true}
  >
      <div className="mb-2 p-4">
        {/* <Typography variant="h5" color="blue-gray" className="" >
         DATA MASTER
        </Typography> */}
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          {/* <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3 ">
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="white" className="mr-auto font-normal">
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem> */}
          {/* <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Analytics
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Reporting
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Projects
              </ListItem>
            </List>
          </AccordionBody> */}
          <Link to="/">
          <ListItem className="text-white p-4">
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
            {/* <ListItemSuffix>
              <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
            </ListItemSuffix> */}
          </ListItem>
        </Link>
        </Accordion>
        <Accordion
          // open={open === 2}
          // icon={
          //   <ChevronDownIcon
          //     strokeWidth={2.5}
          //     className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
          //   />
          // }
        >
          <Link to ="/clientlist">
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-4">
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5 text-white" />
              </ListItemPrefix>
              <Typography color="white" className="mr-auto font-normal ">
                All Client List
              </Typography>
            </AccordionHeader>
          </ListItem>
          </Link>
          {/* <AccordionBody className="py-1" color="white">
            <List className="p-0" color="white">
              <Link to ="/onlineclient">
              <ListItem className="text-white">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Online Client
              </ListItem>
              </Link>
              <ListItem className="text-white">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Ofline Client
              </ListItem>
            </List>
          </AccordionBody> */}
        </Accordion>
        <Link to="/paymenttransaction">
          <ListItem className="text-white p-4">
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Payment Transaction
            <ListItemSuffix>
              <Chip value="14" size="sm" variant="ghost" color="white" className="rounded-full bg-white" />
            </ListItemSuffix>
          </ListItem>
        </Link>

        <ListItem className="text-white p-4">
          <ListItemPrefix>
            <Squares2X2Icon className="h-5 w-5" />
          </ListItemPrefix>
          Projects
        </ListItem>
        <ListItem className="text-white p-4">
          <ListItemPrefix>
            <UserPlusIcon className="h-5 w-5" />
          </ListItemPrefix>
          Alot User
        </ListItem>
        {/* <ListItem className="text-white p-4">
          <ListItemPrefix>
            <UserPlusIcon className="h-5 w-5" />
          </ListItemPrefix>
          Not
        </ListItem> */}
<Link to="/deletedclient">
        <ListItem className="text-white p-4">
          <ListItemPrefix>
            <TrashIcon className="h-5 w-5" />
          </ListItemPrefix>
          Deleted Client List
        </ListItem>
        </Link>
        <ListItem className="text-white p-4">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}