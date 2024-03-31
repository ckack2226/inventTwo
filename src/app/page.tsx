import LoginPage from "./components/login";
import Head from "next/head";

export default function Home(){
  return(
    <>
      <Head>
        <title>INVENT2 - Inicio</title>
      </Head> 
      <main>
        <LoginPage />
      </main>
    
    </>
  )
}