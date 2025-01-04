import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./src";

type Props = {
  data: any;
};

export const Usage = ({ data }: Props) => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">{data["name"]}</TableHead>
          <TableHead>Sprites/Pics</TableHead>
          {/* <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead> */}
        </TableRow>
      </TableHeader>
      {Object.keys(data["sprites"]).map((item: any, index: number) => (
        <TableBody key={index}>
          <TableRow>
            <TableCell className="font-medium">{data["name"]}</TableCell>
            <TableCell>{data["sprites"][item]}</TableCell>
            {/* <TableCell>{item.method}</TableCell>
            <TableCell className="text-right">{item.amount}</TableCell> */}
          </TableRow>
        </TableBody>
      ))}
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
