import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "John Smith",
      img: "http://addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg",
      customer: "johnsmith@gmail.com",
      date: "1 March 1999",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Michael Doe",
      img: "http://addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg",
      customer: "michaeldoe@gmail.com",
      date: "1 March 1999",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "John Smith",
      img: "http://addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg",
      customer: "johnsmith@gmail.com",
      date: "1 March 1999",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Jane Smith",
      img: "http://addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg",
      customer: "janesmith@gmail.com",
      date: "1 March 1999",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "Harold Carol",
      img: "http://addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg",
      customer: "haroldcarol@gmail.com",
      date: "1 March 1999",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Date of Birth</TableCell>

            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
