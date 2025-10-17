import estilo from "./CardCripto.module.css"

export default function CardCripto(props){
    let precoColor
    function selecionarCripto(){
        props.setCriptoSelecionado(props.id) 
    }
    if(props.volume24h >=0){
        precoColor = 'texto_azul'
    }else{
        precoColor = 'texto_vermelho'
    }

    return (
        <div className={estilo.caixa_card} onClick={selecionarCripto} key={props.id} >
            <div className={estilo.caixa_titulo}>
                <div className={estilo.caixa_titulo_texto}>
                    <h2 className={estilo.titulo_nome}>{props.nome.slice(0,11)}</h2>
                </div>
                <div className={estilo.caixa_titulo_imagem}>
                <img className={estilo.titulo_imagem} src={props.image}/>
                </div>
            </div>
            <div className={estilo.caixa_info}>
                <div className={estilo.card_info_preco}>
                    <p>Preço</p>
                    <p>{props.preco.toFixed(2)}</p>
                </div>
                <div className={estilo.card_info_24h} >
                    <p className={estilo[precoColor]}>{props.volume24h}</p>
                </div>
            </div>
        </div>
    );
        
    
}