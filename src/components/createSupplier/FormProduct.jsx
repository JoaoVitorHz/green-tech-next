'use client'

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import Input from "./Input"

export default function FormSupplier(){
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
                name="Nome"
                errorMessage="Insira apenas letras, e letras com acento "
                rules={ {required: true, pattern: /^[a-zA-ZÀ-ÿ\s'-]+$/g} }
            />
            <Input 
                control={control}
                name="Email"
                errorMessage="Email invalido"
                rules={ {required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/g} }
            />
            <Input 
                control={control}
                name="Telefone"
                errorMessage="Insira apenas numeros no telefone"
                rules={ {required: true, pattern: /^\d+$/g} }
            />
            <Input 
                control={control}
                name="CEP"
                maxLenght={8}
                errorMessage="Insira apenas numeros, pontos ou virgulas no preço do produto"
                rules={ {required: true, pattern: /^\d{5}-?\d{3}$/g} }
            />
            <Input 
                control={control}
                name="Estado"
                errorMessage=""
                rules={ {required: true} }
            />
            <Input 
                control={control}
                name="Cidade"
                errorMessage=""
                rules={ {required: true} }
            />
            <Input 
                control={control}
                name="Bairro"
                errorMessage=""
                rules={ {required: true} }
            />
            <Input 
                control={control}
                name="Endereço"
                errorMessage=""
                rules={ {required: true} }
            />
            <Input 
                control={control}
                name="Numero"
                errorMessage="Insira apenas numeros"
                rules={ {required: true, pattern: /\d+/g} }
            />
            <button 
                className="w-full bg-[#22c55e] hover:bg-[#22c55e]/90 text-black py-2 px-3 text-sm"
            >
                Adicionar Forncedor
            </button>
        </form>
    )
}