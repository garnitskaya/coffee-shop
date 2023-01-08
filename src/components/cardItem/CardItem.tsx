import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchDataItem } from "./../../redux/action-creators";
import { TitleBlock } from "./../common";

import img from "../../resources/img/aromistico_big.jpg";
import styles from "./cardItem.module.css";

const CardItem = () => {
  const { coffeeItem, error, loading } = useTypedSelector((state) => state);
  const dispatch = useAppDispatch();
  const { id } = useParams<string>();

  useEffect(() => {
    dispatch(fetchDataItem(id));
  }, [id]);

  if (loading) {
    return <h1 className="title">Loading...</h1>;
  }

  if (error) {
    return <h1 className="title">{error}</h1>;
  }

  return (
    <div className="container">
      <div className={styles.card}>
        <img className={styles.img} src={img} alt="" />
        <div className={styles.block}>
          <TitleBlock title="About it" />
          <div className={styles.descr}>
            <div className={styles.country}>
              <span>Country: </span>
              {coffeeItem?.country}
            </div>
            <div className={styles.description}>
              <span>Description: </span>
              {coffeeItem?.description}
            </div>
            <div className={styles.price}>
              <span>Price: </span>
              <span>{coffeeItem?.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
