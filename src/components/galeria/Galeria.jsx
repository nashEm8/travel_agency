import '../galeria/galeria.css';
import galeria1 from '../../images/galeria/galeria1.jpg';
import galeria2 from '../../images/galeria/galeria2.jpg';
import galeria3 from '../../images/galeria/galeria3.jpg';
import galeria4 from '../../images/galeria/galeria4.jpg';
import galeria5 from '../../images/galeria/galeria5.jpg';
import galeria6 from '../../images/galeria/galeria6.jpg';
import galeria7 from '../../images/galeria/galeria7.jpg';
import galeria8 from '../../images/galeria/galeria8.jpg';
import galeria9 from '../../images/galeria/galeria9.jpg';


const Galeria = () => {
    return(
        <>
        <div className='conteudo-galeria'>
            <div className='text'>
                <p>Galeria</p>
                <h2>Vai ficar para a memória</h2>
            </div>

            <div className='galeria'>
                <div>
                    <img src={galeria1}/>  
                    <span>Sua marca</span>
                    <p>Canadá</p>

                    <img src={galeria2}/>  
                    <span>Sua marca</span>
                    <p>Paris</p>
                </div>   
                <div>
                    <img src={galeria3}/>  
                    <span>Sua marca</span>
                    <p>Canadá</p>

                    <img src={galeria4}/>  
                    <span>Sua marca</span>
                    <p>Rússia</p>
                </div> 
                <div>
                    <img src={galeria5}/>  
                    <span>Sua marca</span>
                    <p>Costa Rica</p>

                    <img src={galeria6}/>  
                    <span>Sua marca</span>
                    <p>Egito</p>
                </div>  
                <div>
                    <img src={galeria7}/>  
                    <span>Sua marca</span>
                    <p>China</p>
                </div>

                <div>    
                    <img src={galeria8}/>  
                    <span>Sua marca</span>
                    <p>Japão</p>
                </div>

                <div>    
                    <img src={galeria9}/>  
                    <span>Sua marca</span>
                    <p>Japão</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Galeria;