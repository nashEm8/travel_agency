import '../feedback/feedback.css';
import feedback1 from '../../images/feedback/feedback1.jpg';
import feedback2 from '../../images/feedback/feedback2.jpg';
import feedback3 from '../../images/feedback/feedback3.jpg';
import feedback4 from '../../images/feedback/feedback4.jpg';

const Feedback = () => {
    return(
        <div className='section-feedback'>
            <div className="feedback">
                <div className="text-feedback">
                    <p>Avaliações</p>
                    <h2>Feedback de nossos clientes</h2>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
                </div>
                <div className="person-coments">
                    <div className='coments'>
                    <div className='coment'>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                        <div className='infor-person-coment'>
                            <img src={feedback1}/>
                            <div className='dice-person'>
                                <p>João Carlos</p>
                                <span>Empresário</span>
                            </div>
                        </div>
                    </div>
                    <div className='coment'>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                        <div className='infor-person-coment'>
                            <img src={feedback2}/>
                            <div className='dice-person'>
                                <p>Fernanda L.</p>
                                <span>Advogada</span>
                            </div>
                        </div>
                    </div>
                    <div className='coment'>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                        <div className='infor-person-coment'>
                            <img src={feedback3}/>
                            <div className='dice-person'>
                                <p>Rodrigo</p>
                                <span>Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='coment'>
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                        <div className='infor-person-coment'>
                            <img src={feedback3}/>
                            <div className='dice-person'>
                                <p>Carla Reis</p>
                                <span>Vendedora</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feedback;