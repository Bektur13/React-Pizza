import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Categories from "../../components/category";
import PizzaBlock from "../../components/pizzaBlock";
import Sort from "../../components/sort";
import { fetchPizzasAction } from "../../redux/actions/pizzas";
import { AppDispatch } from "../../redux/store";

const Home = () => {
    const useAppDispatch: () => AppDispatch = useDispatch;
    const dispatch = useAppDispatch();

    const { items, pizzaItems } = useSelector((state: any) => state.pizza);
    const { category, sort } = useSelector((state: any) => state.filters);

    useEffect(() => {
        dispatch
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
            .map((pizza: any) => {
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
}