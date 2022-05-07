import styles from "./../components/Seguir.module.css";

function Seguir(props){
    return(
        <div className={styles.seguir}>
        <div className={styles.seupfp}>
          <div className={styles.bolinhapfp}>
              <img src={props.seupfp}/>
            
          </div>
          <div className={styles.textonome}>
          <h6 > {props.nome1} </h6>
          <p > {props.nome2} </p>
          </div>
          <a href="#">Mudar</a>
        </div>
        <div className={styles.vertodas}>
          <p>Sugestões para você</p>
          <a href="#">Ver todas</a>
        </div>

        <div className={styles.recomendados}>
          <div className={styles.perfilseguir}>
          <div className={styles.bolinhapfp2}>
            <img src={props.recomendadosfoto1}/>
          </div>
           <div className={styles.textonome2}>
             <h6>{props.recomendados1}</h6>
             <h3>Te segue</h3>

           </div>
            <div className={styles.seguirperfil}>
              <a href="#">Seguir</a>

            </div>
          </div>

          <div className={styles.perfilseguir}>
          <div className={styles.bolinhapfp2}>
            <img src={props.recomendadosfoto2}/>
          </div>
           <div className={styles.textonome2}>
           <h6>{props.recomendados2}</h6>
             <h3>Te segue</h3>

           </div>
           <div className={styles.seguirperfil}>
           <a href="#">Seguir</a>
            </div>
          </div>

          <div className={styles.perfilseguir}>
          <div className={styles.bolinhapfp2}>
          <img src={props.recomendadosfoto3}/>
            
          </div>
           <div className={styles.textonome2}>
           <h6>{props.recomendados3}</h6>
             <h3>Te segue</h3>

           </div>
           <div className={styles.seguirperfil}>
           <a href="#">Seguir</a>
            </div>
          </div>

          <div className={styles.perfilseguir}>
          <div className={styles.bolinhapfp2}>
          <img src={props.recomendadosfoto4}/>
            
          </div>
           <div className={styles.textonome2}>
           <h6>{props.recomendados4}</h6>
             <h3>populares</h3>

           </div>
           <div className={styles.seguirperfil}>
           <a href="#">Seguir</a>
            </div>
          </div>

          <div className={styles.perfilseguir}>
          <div className={styles.bolinhapfp2}>
          <img src={props.recomendadosfoto5}/>
            
          </div>
           <div className={styles.textonome2}>
           <h6>{props.recomendados5}</h6>
             <h3>populares</h3>

           </div>
           <div className={styles.seguirperfil}>
           <a href="#">Seguir</a>
            </div>
          </div>

          


        </div>
          <div className={styles.rodapeseguir}>
            <a href="#">Sobre </a> 
            <a href="#">Ajuda </a>
            <a href="#">Imprensa </a>
            <a href="#">API </a>
            <a href="#">Empregos </a> <br/>
            <a href="#">Privacidade </a>
            <a href="#">Termos </a>
            <a href="#">Localizações </a>
            <a href="#">Contas principais </a> <br/>
            <a href="#">Hashtags </a>
            <a href="#">Idioma </a><br/><br/>

            <p>© 2022 INSTAGRAM CLONE FROM ADEMIR ALVES</p>

          </div>

      </div>
    )
}

export default Seguir