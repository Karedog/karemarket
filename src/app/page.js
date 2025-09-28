'use client'

import styles from "./page.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import CardCripto from "@/componentes/CardCripto/CardCripto";
import Header from "@/componentes/Header/Header";

export default function Home() {
  const [dados, setDados] = useState([]);

  async function retornaListaCripto() {
    try {
      const resposta = await axios.get("http://localhost:3000/api/listar-criptos"); // agora chama sua API Next
      return resposta.data;
    } catch (erro) {
      console.log(erro);
      return [];
    }
  }

  useEffect(() => {
    retornaListaCripto().then(res =>{
      setDados(res.data)
    });
  }, []);

  return (
    <main className={styles.main}>
      <Header/>
      <ul>
        {dados?.map((item) => (       
          <li key={item.id}>
            <CardCripto nome={item.name}simbolo={item.symbol}/>
          </li>
        ))}
      </ul>
    </main>
  );
}