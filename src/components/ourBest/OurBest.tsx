import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from './../../hooks/useTypedSelector';
import { fetchData } from './../../redux/action-creators';

import styles from './ourBest.module.css';

const OurBest: FC = () => {
    const { coffeeItems, loading, error } = useTypedSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
        // eslint-disable-next-line
    }, []);

    const coffeeItem = coffeeItems.map(({ id, name, img, best, price }) =>
        best ?
            (<div className={styles.card} key={id}>
                <img className={styles.img} src={process.env.PUBLIC_URL + img} alt={name} />
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
            <div className='container'>
                <h2 className={styles.title}>Our best</h2>
                <div className={styles.cards}>
                    {errorMessage}
                    {loadingMessage}
                    {content}
                </div>
            </div>
        </div>
    );
};

export default OurBest;