import Logo from './assets/Logo.svg';
import Feed from './assets/feed.svg';
import Perfil from './assets/account_circle.svg';
import Info from './assets/info.svg';
import Logout from './assets/logout.svg';
import './styles.css';
export default function Sidebar() {
  return (
    <aside>
        <img src={Logo} alt="Logo codeConnect" />
        <nav>
            <ul className='lista__sidebar'> 
                <li>
                    <a href="#" className='item__link-publicacao' >Publicar</a>
                </li>
                <li>
                    <a href="#" className='item__link item__link--ativo'>
                        <img src={Feed} alt="feed" />
                        <span>Feed</span>
                    </a>
                </li>
                <li>
                    <a href="#" className='item__link'>
                        <img src={Perfil} alt="feed" />
                        <span>Perfil</span>
                    </a>
                </li>
                <li>
                    <a href="#" className='item__link'>
                        <img src={Info} alt="feed" />
                        <span>Sobre nós</span>
                    </a>
                </li>
                <li>
                    <a href="#" className='item__link'>
                        <img src={Logout} alt="feed" />
                        <span>Sair</span>
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
  
  )   
}