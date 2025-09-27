'use client'

import styles from "./page.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [dados, setDados] = useState([]);

  async function retornaListaCripto() {
    try {
      const resposta = await axios.get("http://localhost:3000/api"); // agora chama sua API Next
      console.log(resposta)
      return resposta.data;
    } catch (erro) {
      console.log(erro);
      return [];
    }
  }

  useEffect(() => {
    retornaListaCripto().then(setDados);
  }, []);

  return (
    <main className={styles.main}>
      <h1>Lista de Criptos</h1>
      <ul>
        {dados?.data?.map((item) => (
          <li key={item.id}>
            {item.name} ({item.symbol}) - ${item.quote.USD.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </main>
  );
}