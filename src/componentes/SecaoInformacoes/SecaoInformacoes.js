'use client'

import { useState, useEffect} from "react";
import estilo from "./SecaoInformacoes.module.css"
import Image from "next/image";

export default function SecaoInformacoes(props){
    console.log('renderizando seção informações')
    const [cripto, setCripto] = useState(null)
    
    useEffect(()=>{
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
        return( <section className={estilo.secao_informacoes}>
            <div className={estilo.caixa_titulo}>

                <img className={estilo.imagem_logo}/>
                <div className={estilo.caixa_nome}>
                    <h2>{cripto.name}</h2>
                    <img src={cripto.logo}/>
                </div>
            </div>

            <div className={estilo.caixa_infos}>
                <div className={estilo.caixa_info_valores}>
                    <h4>Variação</h4>
                    <h3 className={estilo.texto_preco}>{cripto?.name}</h3>

                </div>

                <div className={estilo.caixa_info_descricao}>
                    <div className={estilo.caixa_info2_conversor}>
                        <h4>conversor</h4>
                        <p>{cripto.name}</p>
                        <input type="number" maxLength={32}></input>
                        <p>Dolar</p>
                        <input></input>
                    <p>Conversor</p>
                    </div>
                    <div className={estilo.caixa_info2_descrição}>
                        <p>{cripto.category}</p>
                        <p>{cripto.description}</p>
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
    
    

