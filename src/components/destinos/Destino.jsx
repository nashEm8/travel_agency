import '../destinos/destino.css';
import { FaAngleRight } from 'react-icons/fa';
import destino1 from '../../images/destinos/destino1.jpg';
import destino2 from '../../images/destinos/destino2.jpg';
import destino3 from '../../images/destinos/destino3.jpg';
import destino4 from '../../images/destinos/destino4.jpg';
import destino5 from '../../images/destinos/destino5.jpg';
import destino6 from '../../images/destinos/destino6.jpg';
import destino7 from '../../images/destinos/destino7.jpg';
import destino8 from '../../images/destinos/destino8.jpg';

const Destino = () => {
    return(
        <div className='conteudo-destino'>
            <div className='text'>
                <p>Destinos</p>
                <h2>Escolha seu destino</h2>
            </div>

            <div className='options'>
                <div className='option'>
                    <img src={destino1}/>
                    <div className='text-destino'>
                        <p>Passeios & viagens</p>
                        <span>Lorem Ipsum is simply dummy text of the printing.</span>
                        <a href='#'>Descrição <FaAngleRight/></a>
                    </div>
                </div>
                <div className='option'>
                    <img src={destino2}/>
                    <div className='text-destino'>
                        <p>Passeios & viagens</p>
                        <span>Lorem Ipsum is simply dummy text of the printing.</span>
                        <a href='#'>Descrição <FaAngleRight/></a>
                    </div>
                </div>
                <div className='option'>
                    <img src={destino3}/>
                    <div className='text-destino'>
                        <p>Passeios & viagens</p>
                        <span>Lorem Ipsum is simply dummy text of the printing.</span>
                        <a href='#'>Descrição <FaAngleRight/></a>
                    </div>
                </div>
                <div className='option'>
                    <img src={destino4}/>
                    <div className='text-destino'>
                        <p>Passeios & viagens</p>
                        <span>Lorem Ipsum is simply dummy text of the printing.</span>
                        <a href='#'>Descrição <FaAngleRight/></a>
                    </div>
                </div>
                <div className='option'>
                    <img src={destino5}/>
                    <div className='text-destino'>
                        <p>Passeios & viagens</p>
                        <span>Lorem Ipsum is simply dummy text of the printing.</span>
                        <a href='#'>Descrição <FaAngleRight/></a>
                    </div>
                </div>
                <div className='option'>
                    <img src={destino6}/>
                    <div className='text-destino'>
                        <p>Passeios & viagens</p>
                        <span>Lorem Ipsum is simply dummy text of the printing.</span>
                        <a href='#'>Descrição <FaAngleRight/></a>
                    </div>
                </div>
                <div className='option'>
                    <img src={destino7}/>
                    <div className='text-destino'>
                        <p>Passeios & viagens</p>
                        <span>Lorem Ipsum is simply dummy text of the printing.</span>
                        <a href='#'>Descrição <FaAngleRight/></a>
                    </div>
                </div>
                <div className='option'>
                    <img src={destino8}/>
                    <div className='text-destino'>
                        <p>Passeios & viagens</p>
                        <span>Lorem Ipsum is simply dummy text of the printing.</span>
                        <a href='#'>Descrição <FaAngleRight/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destino; 