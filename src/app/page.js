'use client'

import { useRouter } from "next/navigation"

export default function Home() {

    const router = useRouter()
  return (
      <main className="h-[700px] flex flex-col gap-4 justify-center items-center">
          <h1 className="text-5xl font-bold">Gerenciador de <strong className="text-green-600">Produtos e Fornecedores</strong></h1>
          <span className="text-lg">Seja bem vindo a um gerenciador de produtos e Fornecedores</span>
          <button 
            className="bg-green-600 text-black py-3 px-4 rounded-3xl"
            onClick={() => router.push('/listProduct')}
          >
            Começar
          </button>
      </main>
  );
}
