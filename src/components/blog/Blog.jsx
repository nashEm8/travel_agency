import '../blog/blog.css';
import imgBlog1 from '../../images/blog/img-blog1.jpg';
import { FaClock, FaLock } from 'react-icons/fa';

const Blog = () => {
    return(
        <div className='section-blog'>
        <div className='dice-blog'>
            <div className="text-title-section">
                <p>Publicações</p>
                <h2>Um pouco sobre o nosso blog, novidades, curiosidades e dicas</h2>
            </div>
        </div>
        <div className='posts-blog'>
        <div className='dice-post1'>
                <img></img>
                <div className='text-post'>
                    <p>A vida é uma jornada, não um destino</p>
                    <span>Lorem Ipsum is simply dummy text of the printing.</span>
                    <div className='infor-send'>
                        <a href='#'><FaClock/> 30 de janeiro, 2022</a>
                        <a href='#'><FaLock/> Administrador</a>
                    </div>
                </div>
            </div>
            <div className='dice-post2'>
                <img></img>
                <div className='text-post'>
                    <p>A vida é uma jornada, não um destino</p>
                    <span>Lorem Ipsum is simply dummy text of the printing.</span>
                    <div className='infor-send'>
                        <a href='#'><FaClock/> 30 de janeiro, 2022</a>
                        <a href='#'><FaLock/> Administrador</a>
                    </div>
                </div>
            </div>
            <div className='dice-post3'>
                <img></img>
                <div className='text-post'>
                    <p>A vida é uma jornada, não um destino</p>
                    <span>Lorem Ipsum is simply dummy text of the printing.</span>
                    <div className='infor-send'>
                        <a href='#'><FaClock/> 30 de janeiro, 2022</a>
                        <a href='#'><FaLock/> Administrador</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Blog;