import React from "react";
import './home.css';
import Title from "../../components/Title";
import Conteudo from "../../components/Conteudo";

const Home = ()=>{
    return(
        <div>
            <div className="capa" style={{marginBottom:20}}></div>
            <Title title="Sobre Nós"/>
            <Conteudo content="O Laboratório de Análises Moleculares (LAM) fica localizado na Incubadora de empresas da UFT-Palmas, coordenado pelo professor Horllys Gomes Barreto, o laboratório é voltado para o estudo do DNA e agrupa dois laboratórios: um no Câmpus de Gurupi e outro no Câmpus de Palmas."/>
            <Conteudo content="Em Palmas o LAM faz parte do complexo de laboratórios da saúde e é voltado para a área humana. O mesmo diagnostica doenças como zica, dengue, H1N1, leishmaniose, entre outras. Barreto explica ainda, que estão sendo desenvolvidas tecnologias novas para diagnósticos com maior precisão, agilidade e melhor relação custo/benefício."/>

            <Title title="DNA Technologies"/>
            <Conteudo content="A DNA Technologies é uma empresa que tem como missão assegurar confiança, precisão e agilidade na realização de diagnósticos moleculares, prezando pelo bom atendimento e comprometimento com os clientes, colaboradores e parceiros. Ela oferece produtos como os kits para extração de ácidos nucleicos e diagnósticos moleculares; serviços de desenho de primers, extração de ácidos nucleicos, PCR em tempo real, diagnósticos moleculares e sequenciamento, além de cursos de capacitação voltados ao estudo de DNA, para atender tanto a academia quanto aos laboratórios especializados e desenvolvimento de produtos ''tecnologias in house'', voltadas para diagnósticos moleculares."/>
            <Conteudo content="O professor Horllys Barreto afirma que a empresa pode contribuir para a realização de diagnósticos no Estado. “Hoje, toda a parte de estudo e análise de DNA realizada no Tocantins é terceirizada para fora do Estado. A proposta é prestar esse serviço aqui dentro, com precisão, agilidade e custo mais baixo”."/>
            
            {/* <div className="equipe" style={{color:'white'}}>
                <Title title="Equipe"/>
                <div style={{display:'flex', justifyContent:'center', marginTop:50}}>
                    {data.map((item, index)=> <Equipe nome={item.nome} url={item.url} key={index}/>)}
                </div>
            </div> */}
            
            
        </div>
    )
}

export default Home;