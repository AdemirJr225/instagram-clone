import styles from "./../components/Posts.module.css";
import home from "./../images/casa.png";
import direct from "./../images/instagram-direto.png";
import compass from "./../images/compass.png";
import mais from "./../images/plus.png";
import heart from "./../images/heart.png";
import chat from "./../images/chat.png";
import save from "./../images/save.png";
import smile from "./../images/smile.png";
import more from "./../images/more.png"

function Posts(props){
    return(
        <div className={styles.pub}>
            <div className={styles.perfilpost}>
                <div className={styles.bolinhapost}>
                <img src={props.fotoperfil}/>
                </div>
                <p>{props.perfil}</p>

                <img className={styles.mais} src={more}/>

            </div>

            <div className={styles.foto}>
                <img src={props.foto}/>

            </div>
            <div className={styles.reagir}>
                <img className={styles.heart} src={heart}/>
                <img className={styles.chat} src={chat}/>
                <img className={styles.direct} src={direct}/>
                <img className={styles.save} src={save}/>

            </div>

            <div className={styles.gostos}>
                <p>Gostos: {props.gostos} e outras pessoas</p>

            </div>

            <div className={styles.descricao}>
                <p className={styles.negrito}>{props.perfildescricao} </p> <p >{props.descricao }</p> <a href="#">...mais</a>

            </div>
            <div className={styles.vercomentarios}>
                <a href="#"> Ver todos os {props.quantidadecomentarios} comentários</a>

            </div>

            <div className={styles.comentarios1}>
            <p className={styles.negrito}>{props.perfilcomentario1}</p> <p>{props.comentario1}</p>
                
            </div>
            
            <div className={styles.comentarios2}>
            <p className={styles.negrito}>{props.perfilcomentario2}</p> <p>{props.comentario2}</p>
            </div>

            <div className={styles.horas}>
                <p> HÁ {props.hora} HORAS</p>

            </div>

            <div className={styles.addcomentario}>
                <img src={smile}/>

                <input type="text" placeholder="Adiciona um comentário..."/>

                <a href="#">Publicar</a>


            </div>

        









        </div>
    )
}

export default Posts