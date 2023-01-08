import { useEffect } from "react";

import Skeleton from "./Skeleton";
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchData } from "../../redux/action-creators";

import styles from "./ourBest.module.css";

const OurBest: React.FC = () => {
  const { coffeeItems, loading, error } = useTypedSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData("", ""));
  }, []);

  const coffeeItem = coffeeItems.map(({ id, name, img, best, price }) =>
    best ? (
      <div className={styles.card} key={id}>
        <img
          className={styles.img}
          src={process.env.PUBLIC_URL + img}
          alt={name}
        />
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{price}</div>
      </div>
    ) : null
  );

  if (error) {
    return <h1 className="title">{error}</h1>;
  }

  const skeletons = [...new Array(3)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className={styles.block}>
      <div className="container">
        <h2 className={styles.title}>Our best</h2>
        <div className={styles.cards}>{loading ? skeletons : coffeeItem}</div>
      </div>
    </div>
  );
};

export default OurBest;
