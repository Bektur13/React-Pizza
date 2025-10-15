import { useState } from 'react';
import FormikExample from './formik';
import './style.scss';

const AddNewPizza = () => {
    const [values, setValues] = useState({
        id: 0,
        name: '',
        imageUrl: '',
        sizes: [],
        types: [],
        price: [],
    });

    return (
        <div className='add-pizza'>
            <h3 className='add-pizza__title'>Добавление новой пиццы</h3>
            <h5 className='add-pizza__subtitle'>Выберите параметры</h5>
            <form className='form'>
                <div className='form__row'>
                    <label className='form-item' htmlFor=''>
                        <span className='form-item__legend'>Название</span>
                        <input className='form-item__input' type='text' />
                    </label>
                    <label className='form-item' htmlFor=''>
                        <span className='form-item__legend'>Путь к картинке</span>
                        <input className='form-item__input' type='text' />
                    </label>
                </div>
                <div className='form__row'>
                    <div className='form-item sizes'>
                        <h6 className='form-item__legend'>Размеры</h6>
                        <FormikExample />
                    </div>
                    <div className='form-item types'>
                        <h6>Типы</h6>
                        <label htmlFor=''>
                            <input type='checkbox' />
                            <span>Традиционное</span>
                        </label>
                        <label htmlFor=''>
                            <input type='checkbox' />
                            <span>Тонкое</span>
                        </label>
                    </div>
                </div>
                <div>
                    <div className='prices'>
                        <label htmlFor=''>
                            <span>26 см</span>
                            <input type='text' placeholder='345' />
                            <span>сом</span>
                        </label>
                        <label htmlFor=''>
                            <span>30 см</span>
                            <input type='text' placeholder='455' />
                            <span>сом</span>
                        </label>
                        <label htmlFor=''>
                            <span>40 см</span>
                            <input type='text' placeholder='620' />
                            <span>сом</span>
                        </label>
                    </div>
                </div>
                <div className='add-pizza__bottom'>
                    <p className='add-pizza__info'>Не забудьте указать цену для разных резмеров пиццы*</p>
                    <button>Далее</button>
                </div>
            </form>
        </div>
    );
}

export default AddNewPizza;