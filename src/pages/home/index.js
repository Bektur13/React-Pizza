import React from 'react';
import Categories from '../../components/category';
import Sort from '../../components/sort';
import PizzaBlock from '../../components/pizzaBlock';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzasAction } from '../../redux/actions/pizzas';

const Home = () => {
  const dispatch = useDispatch();

  const { items, pizzaItems } = useSelector((state) => state.pizzas);

  const { category, sort } = useSelector((state) => state.filters);

  React.useEffect(() => {
    dispatch(fetchPizzasAction(sort, category));
  }, [sort, category]);
  return (
    <div className='content'>
      <div className='container'>
        <div className='content__top'>
          <Categories />
          <Sort />
        </div>
        <h2 className='content__title'>Все пиццы</h2>
        <div className='content__items'>
          {pizzaItems
            .map((pizza) => {
              return (
                <PizzaBlock
                  countPizza={items[pizza.id] !== undefined ? items[pizza.id].count : 0}
                  pizza={pizza}
                  key={pizza.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
