import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from './../../hooks/useTypedSelector';
import { fetchData } from './../../redux/reducers/index';

import styles from './ourBest.module.css';
import i from '../../resources/img/aromistico.jpg'

const OurBest: FC = () => {
    const { coffeeItems, loading, error } = useTypedSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    const coffeeItem = coffeeItems.map(({ id, name, img, best, price }) =>
        best ?
            (<div className={styles.card} key={id}>
                <img className={styles.img} src={i} alt={name} />
                <div className={styles.name}>{name}</div>
                <div className={styles.price}>{price}</div>
            </div>
            )
            : null
    )

    const errorMessage = error ? <h3 className='title'>{error}</h3> : null;
    const loadingMessage = loading ? <h3 className='title'>Loading...</h3> : null
    const content = !(loading || error) ? coffeeItem : null;

    return (
        <div className={styles.block}>
            <h2>Our best</h2>
            <div className={styles.cards}>
                {errorMessage}
                {loadingMessage}
                {content}
            </div>
        </div>
    );
};

export default OurBest;