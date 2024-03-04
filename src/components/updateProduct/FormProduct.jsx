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

export default function FormProduct(){
    const { control, handleSubmit } = useForm()

    const router = useRouter();

    function CreateProduct(data){
        console.log(data)
        // router.push('/createProduct')
    }

    return(
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(CreateProduct)}>
            <Input 
                control={control}
                name="Codigo"
                errorMessage="Insira apenas numeros no codigo"
                rules={ {required: true, pattern: /\d+/g} }
            />
            <Input 
                control={control}
                name="Nome"
                errorMessage=""
                rules={ {required: true} }
            />
            <Input 
                control={control}
                name="Descrição"
                errorMessage=""
                rules={ {required: true} }
            />
            <Input 
                control={control}
                name="Preço"
                errorMessage="Insira apenas numeros, pontos ou virgulas no preço do produto"
                rules={ {required: true, pattern: /^\d+(?:[\.,]\d{1,2})?$/g} }
            />
            <Input 
                control={control}
                name="Categoria"
                errorMessage=""
                rules={ {required: true} }
            />
            <Input 
                control={control}
                name="Quantidade"
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