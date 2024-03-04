'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import Input from "./Input"
import { useEffect, useState } from "react"

export default function FormProduct(props){
    const { control, handleSubmit, setValue } = useForm()
    const router = useRouter();

    useEffect(() => {
        GetProduct(props.idProduct)
    }, [])


    async function GetProduct(idProduct){
        console.log(idProduct)
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }
        const response = await fetch('http://127.0.0.1:8000/api/getProduct', {
            method: 'POST',
            body: JSON.stringify({id: idProduct}),
            headers: headersList
        });
        const json = await response.json();
        SetInputData(json)
    }

    function SetInputData(ProductData){
        setValue('productCode', ProductData.code)
        setValue('productName', ProductData.name)
        setValue('productDesc', ProductData.describe)
        setValue('productPrice', ProductData.price)
        setValue('productCategory', ProductData.category)
        setValue('productQtd', ProductData.qtd)
    }

    async function UpdateProduct(data){

        data.productId = props.idProduct
        data.name_supplier = 'teste'

        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }
        await fetch('http://127.0.0.1:8000/api/updateProduct', {
            method: 'PUT',
            body: JSON.stringify(data), 
            headers: headersList
        });
        router.push('/listProduct')
        
    }

    return(
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(UpdateProduct)}>
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
                <Select >
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
                Editar produto
            </button>
        </form>
    )
}