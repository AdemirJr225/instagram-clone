import './App.css';
import Seguir from "./components/Seguir"
import Posts from "./components/Posts"
import logo from "./images/logo.png"
import home from "./images/casa.png"
import direct from "./images/instagram-direto.png"
import compass from "./images/compass.png"
import mais from "./images/plus.png"
import heart from "./images/heart.png"
import jolyne from "./images/jolyne.jpg"
import joseph from "./images/joseph.jpg"
import dio from "./images/dio.jpg"
import jotaro from "./images/jotaro.jpg"
import speedwagon from "./images/speedwagon.jpg"
import kakyoin from "./images/kakyoin.jpg"
import jonathan from "./images/jonathan.jpg"
import diorindo from "./images/diorindo.jpg"
import jotarostand from "./images/jotarostand.jpeg"
import rya from "./images/rya.jpg"
import solo from "./images/solo.jpg"
import proa from "./images/proa.png"
import stories1 from "./images/jolynestories.png"
import stories2 from "./images/jonathanstories.png"
import stories3 from "./images/diostories.png"
import stories4 from "./images/jotarostories.png"
import stories5 from "./images/kakyoinstories.png"
import proaperfil from "./images/proaperfil.png"
import letmeperfil from "./images/letmeperfil.jpg"
import ryaperfil from "./images/ryaperfil.jpg"


function App() {
  return (
    <div className="App">
      <div className="header">
      <div className="navbar">
        <img src={logo} className="logo"/>
        <img src={home} className="casa"/>
        <img src={direct} className="direct" />
        <img src={mais} className="mais" />
        <img src={compass} className="compass" />
        <img src={heart} className="heart" />

        <div className="bolinhapfpnav">
          <img src={joseph}/>
            
          </div>

      

      </div>
      </div>
      <Seguir seupfp={joseph} nome1="josefuu" nome2="JosephJoestar" recomendados1="jonathan.j" recomendados2="kakyoin.n" recomendados3="speed.waifu" recomendados4="dio.brando" recomendados5="jotaro.kujo" recomendadosfoto1={jonathan} recomendadosfoto2={kakyoin} recomendadosfoto3={speedwagon} recomendadosfoto4={dio} recomendadosfoto5={jotaro}/>

      <div className="feed">
        <div className="stories">
          <div className="nomestories">
            <div className="bolinhastories">
            <img src={stories1}/>

            </div>
            <p> jolyne_kujo</p>
            
          </div>
          <div className="nomestories">
            <div className="bolinhastories">
              <img src={stories2}/>
            </div>
            <p>jonathan_j</p>

          </div>
          <div className="nomestories">
            <div className="bolinhastories">
            <img src={stories3}/>
            </div>
             <p>dio.brando</p>

          </div>

          <div className="nomestories">
            <div className="bolinhastories">
            <img src={stories4}/>
            </div>
             <p>jotaro.kujo</p>

          </div>
          <div className="nomestories2">
            <div className="bolinhastories">
            <img src={stories5}/>
            </div>
            <p>kakyoin.n</p>

          </div>
          
          

        </div>

        <Posts fotoperfil={proaperfil} perfil={"instituto.proa"} foto={proa} gostos="matheus" perfildescricao="instituto.proa" descricao=" É com muito orgulho que anunciamos que o PROA ganhou o selo Great Place to Work " quantidadecomentarios="22"
        perfilcomentario1="julia.f" comentario1="muito bom!" perfilcomentario2="felipe_ss" comentario2="Orgulho de participar dessa instituição!" hora="2"/>

        <Posts fotoperfil={stories1} perfil="jolyne_kujo" foto={jolyne} gostos="jonathan.j" perfildescricao="jolyne_kujo" descricao=" yare yare dawa" quantidadecomentarios="20"
        perfilcomentario1="giorno.giogio" comentario1="Quer vir pra máfia?" perfilcomentario2="pe.pucci" comentario2="hummm" hora="2"/>

        <Posts fotoperfil={letmeperfil} perfil="letme.soloher" foto={solo} gostos="tarnished" perfildescricao="letme.soloher" descricao=" solei ela dnv, gostaram?" quantidadecomentarios="900"
        perfilcomentario1="tarnished" comentario1="Vc é uma lenda, muito brabo" perfilcomentario2="empyrean_miquella" comentario2="Pera, é a minha irmã ai????????" hora="3" />


        <Posts fotoperfil={stories4} perfil="jotaro.kujo" foto={jotarostand} gostos="yoshikage_k" perfildescricao="jotaro.kujo" descricao=" Eu e meu mano estrela de platina" quantidadecomentarios="52"
        perfilcomentario1="dio.brando" comentario1="Ho, mukatte kuru no ka?" perfilcomentario2="kakyoin.n" comentario2="kkkj brabo" hora="5" />

        <Posts fotoperfil={ryaperfil } perfil="rya_the_scout" foto={rya} gostos="recusant_bernahl" perfildescricao="rya_the_scout" descricao="Vai um cafézinho?" quantidadecomentarios="106"
        perfilcomentario1="tanith.volcano_queen" comentario1="Minha lindinha <3" perfilcomentario2="tarnished" comentario2="arruma essa postura ai bixokkk" hora="7" />


        <Posts fotoperfil={stories3} perfil="dio.brando" foto={diorindo} gostos="enya_baba" perfildescricao="dio.brando" descricao="kkkk matei o amigo do jotaro kkkk, virou rosquinha" quantidadecomentarios="52"
        perfilcomentario1="jotaro.kujo" comentario1="Eu vou lhe caçar pokimon, eu vou lhe mata" perfilcomentario2="polnareffu" comentario2="praq tanta violência" hora="3" />
        





      </div>

     

      
      

      

    



      
    </div>
  );
}

export default App;
