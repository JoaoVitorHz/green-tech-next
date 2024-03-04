'use client'

import TableList from "@/components/listProduct/tableList"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function ListProduct(){
    const router = useRouter();
    const [proudcts, setProduct] = useState()

    useEffect(() => {
        GetProduct()
    }, [])

    async function GetProduct(){
        const response = await fetch('http://127.0.0.1:8000/api/getAllProduct')
        const json = await response.json()
        setProduct(json)
    }

    async function DeleteProduct(idProduct){
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }
        await fetch('http://127.0.0.1:8000/api/deleteProduct', {
            method: 'Delete',
            body: JSON.stringify({id: idProduct}), 
            headers: headersList
        });
        GetProduct()
    }

    return(
        <div className="flex flex-col items-center gap-10">
            <div className="mt-20 flex flex-col gap-3 text-center">
                <h1 className="text-6xl text-white font-bold">Listagem de Produtos</h1>
                <span>Veja todos os produtos cadastrados no sitema</span>
            </div>
            <div className="w-[1024px] border border-white/20 bg-[#1c1917] p-4">
                <TableList products={proudcts} HandleDeleteProduct={(idProduct) => DeleteProduct(idProduct)}/>
                <button 
                    className="w-full bg-[#22c55e] text-black py-2 px-3 text-sm"
                    onClick={() => router.push('/createProduct')}
                >
                    Adicionar produto
                </button>
            </div>
        </div>
    )
}