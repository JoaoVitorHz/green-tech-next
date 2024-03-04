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

export default function TableList(props){
    const router = useRouter();
    
    return(
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-center">Id</TableHead>
                    <TableHead className="text-center">Nome</TableHead>
                    <TableHead className="text-center">Email</TableHead>
                    <TableHead className="text-center">Telefone</TableHead>
                    <TableHead className="text-center">CEP</TableHead>
                    <TableHead className="text-center">Estado</TableHead>
                    <TableHead className="text-center">Cidade</TableHead>
                    <TableHead className="text-center">Bairro</TableHead>
                    <TableHead className="text-center">Endereço</TableHead>
                    <TableHead className="text-center">Numero</TableHead>
                    <TableHead className="text-center">Ações</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
            {
                props.suppliers?.map((supplier) => {
                    return(
                        <TableRow key={supplier.id}>
                            <TableCell className="text-center">{ supplier.id }</TableCell>
                            <TableCell className="text-center">{ supplier.name }</TableCell>
                            <TableCell className="text-center">{ supplier.email }</TableCell>
                            <TableCell className="text-center">{ supplier.phone }</TableCell>
                            <TableCell className="text-center">{ supplier.cep }</TableCell>
                            <TableCell className="text-center">{ supplier.state }</TableCell>
                            <TableCell className="text-center">{ supplier.city }</TableCell>
                            <TableCell className="text-center">{ supplier.neighborhood }</TableCell>
                            <TableCell className="text-center">{ supplier.address }</TableCell>
                            <TableCell className="text-center">{ supplier.number }</TableCell>
                            <TableCell className="flex gap-5">
                                <HiOutlinePencilAlt  
                                    className="text-xl cursor-pointer hover:text-[#22c55e] transition-[300ms]" 
                                    onClick={() => router.push('/updateProduct/')}
                                />
                                <FaRegTrashCan 
                                    className="text-xl cursor-pointer hover:text-[#22c55e] transition-[300ms]" 
                                    onClick={() => props.deleteSupplier(supplier.id)}
                                />
                            </TableCell>
                        </TableRow>
                    )
                })
            }
            </TableBody>
        </Table>
    )
}