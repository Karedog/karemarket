import Image from "next/image";
import estilo from "./Header.module.css"

export default function Header(){
    return (
        <header className={estilo.header}>
            <Image src="/logo.png" alt="Logo, nome da marca com uma imagem que representa o aumento de valor de algo" className={estilo.imagem} width={35} height={35}/>
            <menubar>
                <ol className={estilo.menu}>
                    <li className={estilo.menu_opcao}>
                        <a href="#" className={estilo.menu_link}>opção 1</a>
                    </li>
                    <li className={estilo.menu_opcao}>
                        <a href="#" className={estilo.menu_link}>opção 2</a>
                    </li>
                    <li className={estilo.menu_opcao}>
                        <a href="#" className={estilo.menu_link}>opção 3</a>
                    </li>
                </ol>
            </menubar>
        </header>
    );
}