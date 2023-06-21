import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Página inicial do App Next</title>
      </Head>
      <h1>Usando Next.js</h1>
      <h1>{process.env.NEXT_PUBLIC_API_URL}</h1>
      <Link href="/contato">
        Contato
      </Link><br/>
      <Link href="/CSR">
        CSR
      </Link> <br/>  
      <Link href="/SSR">
        SSR
      </Link> <br/>    
      <Link href="/SSG">
        SSG
      </Link> <br/>   
      <Link href="/ISR">
        ISR
      </Link> <br/>                  
    </div>
  )
}
