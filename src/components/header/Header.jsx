import logo from '../../images/logo.png';
import '../header/header.css';
import '../header/header-queries.css';

const Header = () => {
    return(
        <>
            <header className="header">
                <div className='topo'>
                    <div className="logo">
                        <img src={logo}/>
                    </div>
                    <div className="menu">
                        <nav>
                            <li><a href="">Início</a></li>
                            <li><a href="">Sobre</a></li>
                            <li><a href="">Destino</a></li>
                            <li><a href="">Serviços</a></li>
                            <li><a href="">Galeria</a></li>
                            <li><a href="">Blog</a></li>
                        </nav>
                    </div>
                    <div className='button-nav'>
                        <a href='#'>Agencie agora</a>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;