import estilo from "./SecaoInformacoes.module.css"
import Image from "next/image";
export default function SecaoInformacoes(){

    return (
        <section className={estilo.secao_informacoes}>
            <div className={estilo.caixa_titulo}>

                <Image className={estilo.imagem_logo}/>
                <div className={estilo.caixa_nome}>
                    <h2>Nome</h2>
                    <p>Symbol</p>
                </div>
            </div>

            <div className={estilo.caixa_infos}>
                <div className={estilo.caixa_info_valores}>
                    <h4>Variação</h4>
                    <h3 className={estilo.texto_preco}>32022,52</h3>
                    <p className={estilo.texto_preco}>variação em 24h</p>
                    <p className={estilo.texto_preco}>variação em 2h</p>
                    <h4>Variação</h4>
                    <p className={estilo.texto_preco}>variação em 1h</p>
                    <p className={estilo.texto_preco}>variação em 30m</p>
                    <p className={estilo.texto_preco}>variação em 15h</p>
                </div>

                <div className={estilo.caixa_info_descricao}>
                    <div className={estilo.caixa_info2_conversor}>
                        <h4>comversor</h4>
                        <p>Nome Moeda</p>
                        <input type="number" maxLength={32}></input>
                        <p>Dolar</p>
                        <input></input>
                    <p>Conversor</p>
                    </div>
                    <div className={estilo.caixa_info2_descrição}>
                        <p>nome</p>
                        <p>categoria</p>
                        <p>aoskdaoskdoak aoskda sodkasodaodkawda kaodkwo kdaokdoak owdakoka owkdaowkdao kdoawd</p>
                    </div>
                </div>
            </div>
        </section>
    );
}