import React from "react";
import './projects.css';
import Title from "../../components/Title";
import Projeto from "../../components/Projeto"

const Projetos = ()=>{
    return(
        <section className="project-back">
            <div style={{textAlign:'center', paddingTop:30}}>
                <Title title='Conheça nossos Projetos'/>
            </div>
            <div>
                <Projeto title="RTAeasy" url="images/rtaeasy.png" site="https://rta-easy.vercel.app/" content="O RTAeasy é um software desenvolvido para diversas plataformas. Com RTA você poderá calcular a expressão gênica com vários tratamentos de vários genes de uma vez! Relate seu experimento para o RTAeasy e ele monta a planilha para você e escolha entre os principais métodos utilizados, o delta delta CT (Livak) e Pfaffl."/>
                <Projeto title="RGeasy" url="images/rgeasy-png.png" site="http://rgeasy.com.br/" content="O RGeasy tem por objetivo auxiliar na seleção de genes de referência, para estudos de expressão gênica po RT-qPCR de forma facilitada, ele utiliza o algoritmo RefFinder (XIE et al, 2012), para a classificação dos genes, resultando em um ranking com os genes de referência mais estáveis e, ainda, disponibiliza conjuntos de primers dos genes selecionados."/>
            </div>
        </section>
    )
}

export default Projetos;