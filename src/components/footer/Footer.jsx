import '../footer/footer.css';
import logoFooter from '../../images/logo.png';
import { FaFacebook, FaGlobe, FaInstagram, 
         FaLinkedin, FaAngleRight, FaMap,
         FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
    return(
        <footer className='footer'>
            <div className='infor-contato'>
                <div className='infor-empresa'>
                    <img src={logoFooter}/> <br/>
                    <span>Lorem Ipsum is simply</span>
                    <div className='redes-sociais'>
                        <FaFacebook/>
                        <FaGlobe/>
                        <FaInstagram/>
                        <FaLinkedin/>
                    </div>
                </div>
                <div className='links'>
                    <h4>Quick Links</h4>
                    <a href='#'><FaAngleRight/>Início</a>
                    <a href='#'><FaAngleRight/>Sobre</a>
                    <a href='#'><FaAngleRight/>Destino</a>
                    <a href='#'><FaAngleRight/>Serviços</a>
                    <a href='#'><FaAngleRight/>Galeria</a>
                    <a href='#'><FaAngleRight/>Blog</a>
                </div>
                <div className='contato'>
                    <h4>Contato</h4>
                    <a href='#'><FaMap/>Piauí, Brasil</a>
                    <a href='#'><FaPhone/>(86) 98161-5539</a>
                    <a href='#'><FaEnvelope/>emanuel82022@outlook.com</a>
                    <a href='#'><FaClock/>7:00am - 10:00pm</a>
                </div>
                <div className='newsletter'>
                    <h4>Newsletter</h4>
                    <span>Lorem Ipsum is simply dummy.</span> 
                    <input type="text" placeholder="Insira seu e-mail"/>
                    <button>Inscreva-se</button>
                </div>
            </div>
            <div className='infor-create'>
                <div className='create-text'>Criado por: <span>Emanuel Azevedo</span> - Todos os direitos reservados</div>
            </div>
        </footer>
    );
}

export default Footer;