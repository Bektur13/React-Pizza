import { useState, } from 'react';
import { Link } from 'react-router-dom';
import { boxes } from './const';
import './style.scss';

const Admin = () => {
  const links = ['/admin/add-pizza', '/admin/add-desserts'];
  const [active, setActive] = useState(0);
  return (
    <div className='admin'>
      <h3 className='admin__title'>Добавить новый продукт</h3>
      <h5 className='admin__subtitle'>Выберите тип продукта</h5>
      <div className='admin__content'>
        {boxes.map((item, index) => {
          return (
            <div
              onClick={() => setActive(index)}
              className={`admin__box ${active === index ? 'is-active' : ''}`}>
              {item.svg()}
              <h5 className='box__title'>{item.title}</h5>
            </div>
          );
        })}
      </div>
      <div className='admin_bottom'>
        <p className='admin__description'>
          В данном блоке вы определяете тип добавляемого продукта, в следующем блоке вы будете
          выбирать его параметры*
        </p>
        <Link to={links[active]} className='admin__button'>
          Далее
        </Link>
      </div>
    </div>
  );
};

export default Admin;
