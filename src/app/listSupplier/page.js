'use client'

import TableList from "@/components/listSupplier/tableList"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function ListProduct(){
    const router = useRouter();
    const [suppliers, setSuppliers] = useState()

    async function GetData(){
        const response = await fetch('http://127.0.0.1:8000/api/getAllSupplier')
        const json = await response.json()
        setSuppliers(json)
    }
    
    useEffect(() => {
        GetData()
    }, [])

    async function DeleteSupplier(idSupplier){
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }
        await fetch('http://127.0.0.1:8000/api/deleteSupplier', {
            method: 'Delete',
            body: JSON.stringify({id: idSupplier}), 
            headers: headersList
        });
        GetData()
    }

    return(
        <div className="flex flex-col items-center gap-10">
            <div className="mt-20 flex flex-col gap-3 text-center">
                <h1 className="text-6xl text-white font-bold">Listagem de Fornecedores</h1>
                <span>Veja todos os Fornecedores cadastrados no sitema</span>
            </div>
            <div className="min-w-[1024px] border border-white/20 bg-[#1c1917] p-4">
                <TableList suppliers={suppliers} deleteSupplier={(idSupplier) => DeleteSupplier(idSupplier)}/>
                <button 
                    className="w-full bg-[#22c55e] text-black py-2 px-3 text-sm"
                    onClick={() => router.push('/createSupplier')}
                >
                    Adicionar Fornecedor
                </button>
            </div>
        </div>
    )
}