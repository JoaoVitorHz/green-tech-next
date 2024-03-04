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

export default function TableList(props){
    console.log(props)
    const router = useRouter();
    return(
        <Table>
            <TableHeader>
                <TableRow>
                <TableHead className="text-center">ID</TableHead>
                <TableHead className="text-center">Codigo</TableHead>
                <TableHead className="text-center">Nome do produto</TableHead>
                <TableHead className="text-center">Descrição</TableHead>
                <TableHead className="text-center">Preço</TableHead>
                <TableHead className="text-center">Categoria</TableHead>
                <TableHead className="text-center">Quantidade</TableHead>
                <TableHead className="text-center">Fornecedor</TableHead>
                <TableHead className="text-center">Ações</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
            {
                props.products?.map((product) => {
                    return(
                        <TableRow key={product.id}>
                            <TableCell className="text-center">{ product.id }</TableCell>
                            <TableCell className="text-center">{ product.code }</TableCell>
                            <TableCell className="text-center">{ product.name }</TableCell>
                            <TableCell className="text-center">{ product.describe }</TableCell>
                            <TableCell className="text-center">{ product.price }</TableCell>
                            <TableCell className="text-center">{ product.category }</TableCell>
                            <TableCell className="text-center">{ product.qtd }</TableCell>
                            <TableCell className="text-center">{ product.supplier }</TableCell>
                            <TableCell className="flex gap-5">
                                <HiOutlinePencilAlt  
                                    className="text-xl cursor-pointer hover:text-[#22c55e] transition-[300ms]" 
                                    onClick={() => router.push('/updateProduct/' + product.id)}
                                />
                                <FaRegTrashCan 
                                    className="text-xl cursor-pointer hover:text-[#22c55e] transition-[300ms]" 
                                    onClick={() => props.HandleDeleteProduct(product.id)}
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