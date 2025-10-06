'use client'

import styles from "./page.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "@/componentes/Header/Header";
import SecaoInformacoes from "@/componentes/SecaoInformacoes/SecaoInformacoes";
import SecaoCards from "@/componentes/SecaoCards/SecaoCards";

export default function Home() {
  console.log('---------------------------------------')
  console.log('renderizando pagina principal')
  const [dados, setDados] = useState([]);
  const [criptoSelecionada, setCriptoSelecionada] = useState(1)
  
  async function retornaListaCripto() {
    console.log('carregando lista')
    try {
      const resposta = await axios.get("http://localhost:3000/api/listar-criptos");
      console.log(resposta.data)
      return resposta.data;
    } catch (erro) {
      console.log(erro);
      return [];
    }
  }
  

  useEffect( () => {
    retornaListaCripto().then(res => {
      setDados(res);
    });
  }, []);

  return (
    <>
      <Header/>
      <main className={styles.main}>
        <SecaoInformacoes criptos={dados}  criptoSelecionada={criptoSelecionada}/>
        
        <SecaoCards dados={dados} setCriptoSelecionado={setCriptoSelecionada}/>
      </main>
    </>
  );
}