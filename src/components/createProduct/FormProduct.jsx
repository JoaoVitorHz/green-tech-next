'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { useRouter } from "next/navigation"
import { useState } from "react";

export default function FormProduct(){
    const router = useRouter();

    const [codeProduct, setCodeProduct] = useState()
    const [nameProduct, setNameProduct] = useState()
    const [descProduct, setDescProduct] = useState()
    const [priceProduct, setPriceProduct] = useState()
    const [categoryProduct, setCategoryProduct] = useState()
    const [qtdProduct, setQtdProduct] = useState()
    const [supplierProduct, setSupplierProduct] = useState()

    function CreateProduct(){
        // router.push('/createProduct')
    }

    return(
        <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
                <span className="text-sm">Codigo </span>
                <input type="text"  className="bg-[#0c0a09] py-1 px-3 border border-white/10" value={codeProduct}/>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-sm">Nome </span>
                <input type="text"  className="bg-[#0c0a09] py-1 px-3 border border-white/10" value={nameProduct}/>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-sm">Descrição </span>
                <input type="text"  className="bg-[#0c0a09] py-1 px-3 border border-white/10" value={descProduct}/>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-sm">Preço </span>
                <input type="text"  className="bg-[#0c0a09] py-1 px-3 border border-white/10" value={priceProduct}/>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-sm">Categoria </span>
                <input type="text"  className="bg-[#0c0a09] py-1 px-3 border border-white/10" value={categoryProduct}/>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-sm">Quantidade </span>
                <input type="text"  className="bg-[#0c0a09] py-1 px-3 border border-white/10" value={qtdProduct}/>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-sm">Fornecedor </span>
                <Select value={supplierProduct}>
                    <SelectTrigger className="bg-[#0c0a09] border-0">
                        <SelectValue placeholder="Theme " value="light" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0c0a09] border-white/10 text-white">
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <button 
                className="w-full bg-[#22c55e] hover:bg-[#22c55e]/90 text-black py-2 px-3 text-sm"
            >
                Adicionar produto
            </button>
        </div>
    )
}