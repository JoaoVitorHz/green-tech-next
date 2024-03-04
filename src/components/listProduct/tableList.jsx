import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaRegTrashCan } from "react-icons/fa6";

import { useRouter } from "next/navigation"

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
    const router = useRouter();
    return(
        <Table>
            <TableHeader>
                <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Codigo</TableHead>
                <TableHead>Nome do produto</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Preço</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Quantidade</TableHead>
                <TableHead>Fornecedor</TableHead>
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
                        onClick={() => router.push('/updateProduct/')}
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