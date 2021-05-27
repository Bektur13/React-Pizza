import React from 'react';
import classNames from 'classnames';
import { addCartAction } from '../../redux/actions/cart';
import { pizzaCount, pizzaSizesAction, pizzaTypesAction } from '../../redux/actions/pizzas';
import { useDispatch, useSelector } from 'react-redux';

const PizzaBlock = ({ pizza, countPizza }) => {
  const dispatch = useDispatch();
  const { types, sizes } = pizza;

  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(0);
  const [pizzaItem, setPizzaItem] = React.useState({
    id: pizza.id,
    name: pizza.name,
    imageUrl: pizza.imageUrl,
    price: pizza.price[activeSize],
    types,
    sizes,
    category: pizza.category,
    rating: pizza.rating,
  });

  const pizzaTypes = ['тонкое', 'традиционное'];
  const pizzaSizes = [26, 30, 40];

  const onSelectActiveType = (index) => {
    setActiveType(index);
    dispatch(pizzaTypesAction({ type: index, id: pizza.id, count: countPizza }));
  };

  const onSelectActiveSize = (index) => {
    setPizzaItem((prev) => ({ ...prev, price: pizza.price[index] }));
    dispatch(
      pizzaSizesAction({
        id: pizza.id,
        size: index,
        count: countPizza,
      }),
    );
    if (selectedSize[pizza.id] !== undefined) {
      setActiveSize(selectedSize[pizza.id].size);
    }
    setActiveSize(index);
  };

  const selectedSize = useSelector((state) => state.pizzas.items);
  const selectedType = useSelector((state) => state.pizzas.items);

  React.useEffect(() => {
    if (selectedSize[pizza.id] !== undefined) {
      setPizzaItem((prev) => ({ ...prev, price: pizza.price[selectedSize[pizza.id].size] }));
      setActiveSize(selectedSize[pizza.id].size);
      setActiveType(types[selectedType[pizza.id].type ? selectedType[pizza.id].type : 0])
    }
  }, []);

  const addToCart = () => {
    dispatch(pizzaCount(pizzaItem.id));
    dispatch(addCartAction(pizzaItem));
  };
  return (
    <div className='pizza-block'>
      <img className='pizza-block__image' src={pizzaItem.imageUrl} alt='Pizza' />
      <h4 className='pizza-block__title'>{pizzaItem.name}</h4>
      <div className='pizza-block__selector'>
        <ul>
          {pizzaTypes.map((item, index) => {
            return (
              <li
                key={item}
                onClick={() => onSelectActiveType(index)}
                className={classNames({
                  active: activeType === index,
                  disable: !types.includes(index),
                })}>
                {item}
              </li>
            );
          })}
        </ul>
        <ul>
          {pizzaSizes.map((item, index) => {
            return (
              <li
                key={item}
                onClick={() => onSelectActiveSize(index)}
                className={classNames({
                  active: activeSize === index && sizes.includes(item),
                  disable: !sizes.includes(item),
                })}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className='pizza-block__bottom'>
        <div className='pizza-block__price'>от {pizzaItem.price} ₽</div>
        <div onClick={addToCart} className='button button--outline button--add'>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
              fill='white'
            />
          </svg>
          <span>Добавить</span>
          <i>{countPizza}</i>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
