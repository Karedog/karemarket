'use client'

import { useState, useEffect} from "react";
import estilo from "./SecaoInformacoes.module.css"
import Image from "next/image";

export default function SecaoInformacoes(props){
    console.log('renderizando seção informações')
    const [cripto, setCripto] = useState(null)
    const [valorConversor, setValorConversor] = useState()


    function converterValor(e){
        const valor = e.target.value * cripto.quote.USD.price
        setValorConversor(valor)
    }
    
    useEffect(()=>{
        setValorConversor(0)
        if (!props.criptos.Quote || !props.criptos.Meta) return;

        const criptoQuote = props.criptos.Quote?.find( cripto => {
            return cripto.id === props.criptoSelecionada
        })
        const criptoMeta = Object.values(props.criptos.Meta)?.find( cripto => {
            return cripto.id === props.criptoSelecionada
        })
        
        setCripto({
      ...criptoQuote,
      ...criptoMeta,
    })
    },[props.criptoSelecionada,props.criptos]);

     
    if(cripto)
    {   
        console.log(cripto)
        return( <section className={estilo.secao_informacoes}>
            <div className={estilo.caixa_titulo}>
                    <img src={cripto.logo}/>
                <div className={estilo.caixa_nome}>
                    <h2 className={estilo.titulo_nome}>{cripto.name}</h2>
                    <h3 className={estilo.titulo_symbol}>{cripto.symbol}</h3>
                </div>
            </div>

            <div className={estilo.caixa_infos}>
                <div className={estilo.caixa_info_valores}>
                    <h4>Variação</h4>
                    <h3 className={estilo.texto_preco}>{cripto?.name}</h3>

                </div>

                <div className={estilo.caixa_info_descricao}>
                    <div className={estilo.caixa_info_descricao_conversor}>
                        <h3>Conversor</h3>
                        <p>{cripto.name}</p>
                        <input type="number" maxLength={32} onChange={converterValor}></input>
                        <p>Dolar</p>
                        <p className={estilo.valor_convertido}>{valorConversor.toFixed(2)}</p>
                    </div>
                    <div className={estilo.caixa_info_descricao_sobre}>
                        <h3>Descrição</h3>
                        <p className={estilo.caixa_info_descricao_sobre_texto}>{cripto.description}</p>
                    </div>
                </div>
            </div>
        </section>
        )
    }
    else
    {
        return(
        <section className={estilo.secao_informacoes}>
            <p>Carregando</p>
        </section>
        )
    }
            
}
    
    

