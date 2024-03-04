import FormSupplier from "@/components/createSupplier/FormSupplier";

export default function CreateProduct(){
    return(
        <div className="flex flex-col items-center gap-10">
        <div className="mt-20 flex flex-col gap-3 text-center">
            <h1 className="text-6xl text-white font-bold">Adicionar Forncedores</h1>
            <span>Adicione Forncedores ao sistema</span>
        </div>
        <div className="w-[500px] border border-white/20 bg-[#1c1917] p-4">
           <FormSupplier />
        </div>
    </div>
    )
}