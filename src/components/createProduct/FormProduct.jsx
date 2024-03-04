'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import Input from "./Input"

export default function FormProduct(){
    const { control, handleSubmit } = useForm()

    const router = useRouter();
    const [nameSupplier, setNameSupplier] = useState()

    async function CreateProduct(data){

        data.productQtd = parseInt(data.productQtd)
        data.productCode = parseInt(data.productCode)
        data.name_supplier = "teste"

        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }

        await fetch('http://127.0.0.1:8000/api/createProduct', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headersList
        })
        router.push('/listProduct')
    }

    return(
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(CreateProduct)}>
            <Input 
                control={control}
                name="productCode"
                inputTitle="Codigo"
                errorMessage="Insira apenas numeros no codigo"
                rules={ {required: true, pattern: /\d+/g} }
            />
            <Input 
                control={control}
                name="productName"
                inputTitle="Nome"
                errorMessage=""
                rules={ {required: true} }
            />
            <Input 
                control={control}
                name="productDesc"
                inputTitle="Descrição"
                errorMessage=""
                rules={ {required: true} }
            />
            <Input 
                control={control}
                name="productPrice"
                inputTitle="Preço"
                errorMessage="Insira apenas numeros, pontos ou virgulas no preço do produto"
                rules={ {required: true, pattern: /^\d+(?:[\.,]\d{1,2})?$/g} }
            />
            <Input 
                control={control}
                name="productCategory"
                inputTitle="Categoria"
                errorMessage=""
                rules={ {required: true} }
            />
            <Input 
                control={control}
                name="productQtd"
                inputTitle="Quantidade"
                errorMessage="Insira apenas numeros na quantidade do produto"
                rules={ {required: true, pattern: /\d+/g} }
            />
            <div className="flex flex-col gap-1">
                <span className="text-sm">Fornecedor </span>
                <Select onValueChange={() => setNameSupplier}>
                    <SelectTrigger className="bg-[#0c0a09] border-0">
                        <SelectValue placeholder="Theme " value="light" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0c0a09] border-white/10 text-white">
                        <SelectItem value="system">System</SelectItem>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <button 
                className="w-full bg-[#22c55e] hover:bg-[#22c55e]/90 text-black py-2 px-3 text-sm"
            >
                Adicionar produto
            </button>
        </form>
    )
}