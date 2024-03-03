import { IoPersonSharp } from "react-icons/io5";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function TableList(){
    return(
        <Table>
            <TableHeader>
                <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Ações</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                <TableCell>INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="flex gap-5">
                    <HiOutlinePencilAlt  
                        className="text-xl cursor-pointer hover:text-[#22c55e] transition-[300ms]" 
                        onClick={() => props.ShowModalUpdatePatient(patient)}
                    />
                    <FaRegTrashCan 
                        className="text-xl cursor-pointer hover:text-[#22c55e] transition-[300ms]" 
                        // onClick={() => setShowUpdateProfession(true)}
                    />
                </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}