import React from "react";
import './home.css';
import Navigator from "../../components/Navbar";
import Title from "../../components/Title";
import Conteudo from "../../components/Conteudo";
import Footer from "../../components/Footer";
import Equipe from "../../components/Equipe";
import Projeto from "../../components/Projeto";

const data = [
    {nome: 'Horllys Gomes Barreto', url:'images/user.png'},
    {nome: 'Matheus Martins Daude', url:'images/user.png'},
    {nome: 'Wagner Melo', url:'images/user.png'},
    {nome: 'Melissa Moraes', url:'images/user.png'}
]

const Home = ()=>{
    return(
        <div>
            <Navigator/>
            <div className="capa"></div>
            <Title title="Sobre"/>
            <Conteudo content="O Laboratório de Análises Moleculares (LAM) fica localizado na Incubadora de empresas da UFT-Palmas, coordenado pelo professor Horllys Gomes Barreto, o laboratório é voltado para o estudo do DNA e agrupa dois laboratórios: um no Câmpus de Gurupi e outro no Câmpus de Palmas."/>
            <Conteudo content="Em Palmas o LAM faz parte do complexo de laboratórios da saúde e é voltado para a área humana. O mesmo diagnostica doenças como zica, dengue, H1N1, leishmaniose, entre outras. Barreto explica ainda, que estão sendo desenvolvidas tecnologias novas para diagnósticos com maior precisão, agilidade e melhor relação custo/benefício."/>

            <Title title="DNA Technologies"/>
            <Conteudo content="A DNA Technologies é uma empresa que tem como missão assegurar confiança, precisão e agilidade na realização de diagnósticos moleculares, prezando pelo bom atendimento e comprometimento com os clientes, colaboradores e parceiros. Ela oferece produtos como os kits para extração de ácidos nucleicos e diagnósticos moleculares; serviços de desenho de primers, extração de ácidos nucleicos, PCR em tempo real, diagnósticos moleculares e sequenciamento, além de cursos de capacitação voltados ao estudo de DNA, para atender tanto a academia quanto aos laboratórios especializados e desenvolvimento de produtos ''tecnologias in house'', voltadas para diagnósticos moleculares."/>
            <Conteudo content="O professor Horllys Barreto afirma que a empresa pode contribuir para a realização de diagnósticos no Estado. “Hoje, toda a parte de estudo e análise de DNA realizada no Tocantins é terceirizada para fora do Estado. A proposta é prestar esse serviço aqui dentro, com precisão, agilidade e custo mais baixo”."/>
            
            <div className="equipe" style={{color:'white'}}>
                <Title title="Equipe"/>
                <div style={{display:'flex', justifyContent:'center', marginTop:50}}>
                    {data.map((item, index)=> <Equipe nome={item.nome} url={item.url} key={index}/>)}
                </div>
            </div>
            
            <div>
                <Title title="Softwares"/>
                <Projeto title="RTAeasy" url="images/RTAEASY.png" content="O RTAeasy é um software desenvolvido com a colaboração da Universidade Federal do Tocantins (UFT) e a Universidade Federal de Lavras (UFLA). Com RTA você poderá calcular a expressão gênica com vários tratamentos de vários genes de uma vez! Relate seu experimento para o RTAeasy e ele monta a planilha para você e escolha entre os principais métodos utilizados, o delta delta CT (Livak) e Pfaffl. Dois métodos em uma ferramenta só e tudo isso GRÁTIS!"/>
                <Projeto title="RGeasy" url="images/rgeasy.png" content="O RGeasy é fruto de uma parceria entre os pesquisadores do Laboratório de Análises Moleculares (LAM) e do Curso de Ciência da Computação da Universidade Federal do Tocantins (UFT) juntamente com os pesquisadores do Laboratório de Fisiologia Molecular de Plantas da Universidade Federal de Lavras (UFLA). O RGeasy tem por objetivo auxiliar na seleção de genes de referência, para estudos de expressão gênica po RT-qPCR de forma facilitada, ele utiliza o algoritmo RefFinder (XIE et al, 2012), para a classificação dos genes, resultando em um ranking com os genes de referência mais estáveis e, ainda, disponibiliza conjuntos de primers dos genes selecionados."/>

            </div>

            <Footer/>
        </div>
    )
}

export default Home;