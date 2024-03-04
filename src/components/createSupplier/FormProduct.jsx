'use client'

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import Input from "./Input"

export default function FormSupplier(){
    const { control, handleSubmit } = useForm()

    const router = useRouter();

    async function CreateSupplier(data){
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }

        await fetch('http://127.0.0.1:8000/api/createSupplier', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: headersList
        })
        router.push('/listSupplier')
    }

    return(
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(CreateSupplier)}>
             <Input 
                control={control}
                name="name_supplier"
                inputTitle="Codigo"
                errorMessage="Insira apenas letras, e letras com acento "
                rules={ {required: true, pattern: /^[a-zA-ZÀ-ÿ\s'-]+$/g} }
            />
            <Input 
                control={control}
                name="email_supplier"
                inputTitle="Email"
                errorMessage="Email invalido"
                rules={ {required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/g} }
            />
            <Input 
                control={control}
                name="phone_supplier"
                inputTitle="Telefone"
                errorMessage="Insira apenas numeros no telefone"
                rules={ {required: true, pattern: /^\d+$/g} }
            />
            <Input 
                control={control}
                name="cep_supplier"
                inputTitle="CEP"
                maxLenght={8}
                errorMessage="Insira apenas numeros, pontos ou virgulas no preço do produto"
                rules={ {required: true, pattern: /^\d{5}-?\d{3}$/g} }
            />
            <Input 
                control={control}
                name="state_supplier"
                inputTitle="Estado"
                errorMessage=""
                rules={ {required: true} }
            />
            <Input 
                control={control}
                name="city_supplier"
                inputTitle="Cidade"
                errorMessage=""
                rules={ {required: true} }
            />
            <Input 
                control={control}
                name="neighborhood_supplier"
                inputTitle="Bairro"
                errorMessage=""
                rules={ {required: true} }
            />
            <Input 
                control={control}
                name="address_supplier"
                inputTitle="Endereço"
                errorMessage=""
                rules={ {required: true} }
            />
            <Input 
                control={control}
                name="number_house_supplier"
                inputTitle="Numero da casa"
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