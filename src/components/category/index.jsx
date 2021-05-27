import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { category } from '../../redux/actions/filter';

const Categories = () => {
  const dispatch = useDispatch();
  const categoriesItems = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [active, setActive] = React.useState(null);

  const selectItemOnClick = (i) => {
    dispatch(category(i));
    setActive(i);
  };

  const activeFromRedux = useSelector((state) => state.filters.category);

  const selectAllCategory = () => {
    setActive(null);
    dispatch(category(null));
  };

  React.useEffect(() => {
    setActive(activeFromRedux);
  }, []);
  return (
    <div className='categories'>
      <ul>
        <li onClick={selectAllCategory} className={active === null ? 'active' : ''}>
          Все
        </li>
        {categoriesItems.map((item, index) => {
          return (
            <li
              key={item}
              onClick={() => selectItemOnClick(index)}
              className={active === index ? 'active' : ''}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
