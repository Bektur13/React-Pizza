import { ReactComponent as logo } from '../../assets/pizza-logo.svg';
import Nav from './nav';
import './style.scss';

const SideBar = () => {
    return (
        <aside className='aside'>
            <div className='container'>
                <div className='aside__content'>
                    <div className='aside_left'>
                        <div className='aside_top'>
                            <img className='aside__logo' src={logo} alt='logo' />
                            <h3 className='aside__title'>REACT PIZZA</h3>
                        </div>
                        <Nav />
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default SideBar;