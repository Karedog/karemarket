import estilo from "./CardCripto.module.css"

export default function CardCripto(props){
    return (
        <div onClick={()=> {}} >
            <h3>{props.simbolo +' - '+ props.nome}</h3>
            <div>
                <div className={estilo.card_info}>
                    <p>Preço</p>
                    <p>{props.quote}</p>
                </div>
                <div className={estilo.card_info}>
                    <p>Max Supply</p>
                    <p>{props.max_supply}</p>
                </div>
                <div className={estilo.card_info}>
                    <p>Total Supply</p>
                    <p>{props.total_supply}</p>
                </div>
            </div>
        </div>
    );
        
    
}