'use client'

import styles from "./page.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "@/componentes/Header/Header";
import SecaoInformacoes from "@/componentes/SecaoInformacoes/SecaoInformacoes";
import SecaoCards from "@/componentes/SecaoCards/SecaoCards";

export default function Home() {
  const [dados, setDados] = useState([]);

  async function retornaListaCripto() {
    try {
      const resposta = await axios.get("http://localhost:3000/api/listar-criptos");
      return resposta.data.data;
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
        <SecaoInformacoes/>
        <SecaoCards dados={dados}/>
      </main>
    </>
  );
}