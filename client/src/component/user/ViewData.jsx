import { Card, Typography,Button } from "@material-tailwind/react";
import ExcelJS from 'exceljs';

function ViewData() {
    const TABLE_HEAD = ["FileNo.", "RefNo.", "product code", "product line","product desc." ,"price per piece","price qty","stock available","model no.","size","weight","colour","product origin","shipping method","shipping area","brand","material","entry date ","time","product type","warrantee","shipping time frame ","global rating","product rating","date submitted review",""];
    const TABLE_ROWS = [
        {
            FileNo: "1",
            RefNo: "111",
            productcode:"23AC",
          date: "23/04/18",
        },
        {
            FileNo: "2",
            RefNo: "112",
            productcode:"23AC",
          date: "23/04/18",
        },
        {
            FileNo: "3",
            RefNo: "113",
            productcode:"23AC",
          date: "19/09/17",
        },
        {
            FileNo: "4",
            RefNo: "114",
            productcode:"23AC",
          date: "24/12/08",
        },
        {
            FileNo: "5",
            RefNo: "115",
            productcode:"23AC",
          date: "04/10/21",
        },
      ];
      const downloadExcel = async () => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Sheet 1');
      
        // Add headers to the worksheet
        worksheet.addRow(TABLE_HEAD);
      
        // Add data rows to the worksheet
        TABLE_ROWS.forEach(({ FileNo, RefNo, productcode }) => {
          worksheet.addRow([FileNo, RefNo, productcode]);
        });
      
        // Save the workbook to a file
        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'table_data.xlsx';
        link.click();
      };
    
  return (
    <div className="bg-cyan-50 h-full lg:w-[calc(100vw-17rem)] fixed right-0 w-screen overflow-y-scroll">
    {/* <div className="h-screen"> */}
     <div className="  mt-20">
       <h1 className="lg:text-left text-center  pt-6 pl-6 font-bold text-2xl mt-20">
         view Data
       </h1>
       <p className="text-blue-gray-200 pl-6 font-thin lg:text-left text-center">
         Home / Project / view data
       </p>
     </div>
     <div className=" flex justify-end">
        <Button
         onClick={downloadExcel}
          className="buttonstyle">
          Download
        </Button>
      </div>
    <div>
      <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ FileNo, RefNo, productcode }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={FileNo}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {FileNo}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {RefNo}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {productcode}
                  </Typography>
                </td>
                {/* <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Edit
                  </Typography>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    </div>
    </div>
    // </div>
  )
}

export default ViewData
