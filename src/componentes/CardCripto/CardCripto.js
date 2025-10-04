import estilo from "./CardCripto.module.css"

export default function CardCripto(props){
    return (
        <div className={estilo.caixa_card} onClick={()=> {}} >
            <div className={estilo.caixa_titulo}>
            <h2 className={estilo.card_simbolo}>{props.simbolo}</h2>
            <h3 className={estilo.nome_cripto}>{props.nome.slice(0,11)}</h3>
            </div>
            <div className={estilo.caixa_info}>
                <div className={estilo.card_info}>
                    <p>Preço</p>
                    <p>{props.preco.toFixed(2)}</p>
                </div>
                <div className={estilo.card_info}>
                    <p>Max Supply</p>
                    <p>{props.max_supply}</p>
                </div>
                <div className={estilo.card_info}>
                    <p>Total Supply</p>
                    <p>{props.total_supply.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
        
    
}