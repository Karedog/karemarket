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
        
    },[props.dados])

    return (
        <section className={estilo.secao_cards}>
            <div>
                <input type="text" maxLength={15} placeholder="Pesquise aqui!!"/>
            </div>
            <div>
                {dados?.map( (item)=>{
                    console.log(item)
                    return <CardCripto 
                                key ={item.id}
                                simbolo={item.symbol}
                                nome={item.name}
                                quote={item.quote.USD.price}
                                max_supply={item.max_supply}
                                total_supply={item.total_supply}
                            />
                })}
            </div>
        </section>
    );
}