import FormProduct from "@/components/updateSupplier/FormProduct";

export default function CreateProduct( { params } ){
    return(
        <div className="flex flex-col items-center gap-10">
            <div className="mt-20 flex flex-col gap-3 text-center">
                <h1 className="text-6xl text-white font-bold">Editar Fornecedores</h1>
                <span>Edite fornecedores cadastrados no sitema</span>
            </div>
            <div className="w-[500px] border border-white/20 bg-[#1c1917] p-4">
                <FormProduct idSupplier={params.id}/>
            </div>
        </div>  
    )
}