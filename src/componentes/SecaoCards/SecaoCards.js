'use client'
import estilo from "./SecaoCards.module.css"
import CardCripto from "@/componentes/CardCripto/CardCripto";
import { useState, useEffect} from "react";

export default function SecaoCards(props){
    console.log('renderizando seção cards')
    const [dados, setDados] = useState([])
    const [filtro, setFiltro] = useState("")
    
    function atualizarFiltro (e){
        setFiltro(e.target.value)  
    }
    
    function carregarDados(dados){
        console.log('antes de carregar os dados')
        const novosDados = dados?.Quote?.filter((cripto)=>{
            return cripto.name.toLowerCase().includes(filtro.toLowerCase())})
            setDados(novosDados?.slice(0,20))
    }
    
    useEffect(()=>{
        carregarDados(props.dados)
        
        },[filtro,props.dados,]
    )


    return (
        <section className={estilo.secao_cards}>
            <div className={estilo.caixa_pesquisa}>
                <input className={estilo.campo_de_busca} type="text" maxLength={15} placeholder="Pesquise aqui!!" onChange={atualizarFiltro}/>
            </div>
            <div className={estilo.caixa_cards}>
                {dados?.map( (item)=>{
                    return <CardCripto 
                                key ={item.id}
                                id ={item.id}
                                image = {props.dados.Meta[item.id].logo}
                                setCriptoSelecionado={props.setCriptoSelecionado}
                                simbolo={item.symbol}
                                nome={item.name}
                                preco={item.quote.USD.price}
                                volume24h={item.quote.USD.volume_change_24h}
                            />
                })}
            </div>
        </section>
    );
}