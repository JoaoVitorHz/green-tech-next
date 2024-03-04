import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaRegTrashCan } from "react-icons/fa6";

import { useRouter } from "next/navigation"

import {
    Table,
    TableBody,
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
                    <TableHead>Id</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Telefone</TableHead>
                    <TableHead>CEP</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Cidade</TableHead>
                    <TableHead>Bairro</TableHead>
                    <TableHead>Endereço</TableHead>
                    <TableHead>Numero</TableHead>
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
                            onClick={() => router.push('/updateSupplier/')}
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