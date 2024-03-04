import Link from "next/link";

export default function Header(){
    return(
        <header className="w-screen h-[70px] flex justify-center border-b-[1px] border-white/20 ">
            <div className="w-[1024px] h-full flex justify-between items-center">
                <div>
                    <span>GreenTech</span>
                </div>
                <nav className="flex gap-5 text-sm text-gray-300">
                    <Link href={"/listProduct"}>Ver Produto</Link>
                    <Link href={"/createProduct"}>Criar Produtos</Link>
                    <Link href={"/listSupplier"}>Ver Fornecedores</Link>
                    <Link href={"/createSupplier"}>Criar Fornecedor</Link>
                </nav>
            </div>
        </header>
    )
}