import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { useTypedSelector } from './../../hooks/useTypedSelector';
import { fetchData } from '../../redux/action-creators';
import { IData } from '../../types/types';

import styles from './cardList.module.css';
interface LocationState {
    pathname: string
}

const CardList: FC = () => {
    const { coffeeItems, error, loading, activeFilter, term } = useTypedSelector(state => state);
    const dispatch = useDispatch();

    const url = useLocation();
    const pathname = url.pathname as unknown as LocationState;

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    if (loading) {
        return <h1 className='title'>Loading...</h1>
    }

    if (error) {
        return <h1 className='title'>{error}</h1>
    }

    const filteredItems = (items: IData[], filter: string) => {
        if (filter === '') {
            return items;
        } else {
            return items.filter(item => item.country === activeFilter);
        }
    }

    const searchItem = (items: IData[], term: string) => {
        if (term.length === 0) return items;

        return items.filter(item => item.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }

    const renderItem = (arr: IData[]) => {
        return arr.map(({ id, name, country, price, img }) =>
            <Link to={`${pathname}/${id}`} className={styles.card} key={id}>
                <img className={styles.img} src={process.env.PUBLIC_URL + img} alt={name} />
                <div className={styles.name}>{name}</div>
                <div className={styles.country}>{country}</div>
                <div className={styles.price}>{price}</div>
            </Link>
        )
    }

    const element = renderItem(filteredItems(searchItem(coffeeItems, term), activeFilter));
    return (
        <div className={styles.cards}>
            {element}
        </div>
    );
};

export default CardList;