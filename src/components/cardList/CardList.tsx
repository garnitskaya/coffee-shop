import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { useTypedSelector } from './../../hooks/useTypedSelector';
import { fetchData } from '../../redux/reducers';

import styles from './cardList.module.css';
import i from '../../resources/img/aromistico.jpg';
//import i from '../../resources/img/presto.jpg';


interface LocationState {
    pathname: string
}

const CardList: FC = () => {
    const { coffeeItems, error, loading } = useTypedSelector(state => state);
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

    const coffeeItem = coffeeItems.map(({ id, name, country, price }) =>
        <div className={styles.card} key={id}>
            <img className={styles.img} src={i} alt={name} />
            <Link to={`${pathname}/${id}`} className={styles.name}>{name}</Link>
            <div className={styles.country}>{country}</div>
            <div className={styles.price}>{price}</div>
        </div>
    )

    return (
        <div className={styles.cards}>
            {coffeeItem}
        </div>
    );
};

export default CardList;