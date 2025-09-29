'use Client'
import estilo from "./SecaoCards.module.css"
import CardCripto from "@/componentes/CardCripto/CardCripto";
import { useState, useEffect} from "react";

export default function SecaoCards(props){
    const [dados, setDados] = useState([])

    function carregarDados(dados){
        setDados(dados.slice(0,20))
    }
  
    useEffect(()=>{
        carregarDados(props.dados)
        console.log(props.dados)
    },[props.dados])

    return (
        <section className={estilo.secao_cards}>
                {dados?.map( (item, index)=>{
                    return <CardCripto 
                                key ={index}
                                nome={item.name}
                                simbolo={item.symbol}
                            />
                })}
        </section>
    );
}