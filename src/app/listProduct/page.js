'use client'

import TableList from "@/components/listProduct/tableList"
import { useRouter } from "next/navigation"

export default function ListProduct(){
    const router = useRouter();

    return(
        <div className="flex flex-col items-center gap-10">
            <div className="mt-20 flex flex-col gap-3 text-center">
                <h1 className="text-6xl text-white font-bold">Listagem de Produtos</h1>
                <span>Veja todos os produtos cadastrados no sitema</span>
            </div>
            <div className="w-[1024px] border border-white/20 bg-[#1c1917] p-4">
                <TableList />
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