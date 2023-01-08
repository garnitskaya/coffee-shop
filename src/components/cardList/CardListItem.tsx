import { Link } from "react-router-dom";

import { IData } from './../../types';
import styles from "./cardList.module.css";

interface PropsTypes extends IData {
  pathname: string
}

const CardListItem: React.FC<PropsTypes> = ({
  id,
  pathname,
  name,
  img,
  country,
  price,
}) => {
  return (
    <Link to={`${pathname}/${id}`} className={styles.card}>
      <img
        className={styles.img}
        src={process.env.PUBLIC_URL + img}
        alt={name}
      />
      <div className={styles.name}>{name}</div>
      <div className={styles.country}>{country}</div>
      <div className={styles.price}>{price}</div>
    </Link>
  );
};

export default CardListItem;
