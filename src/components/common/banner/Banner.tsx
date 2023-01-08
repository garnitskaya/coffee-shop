import { HeaderLink } from "../../";

import styles from "./banner.module.css";
interface IProps {
  title: string;
  background: string;
}

const Banner: React.FC<IProps> = ({ title, background }) => {
  return (
    <div
      style={{ background: `url(${background}) center center/cover no-repeat` }}
      className={styles.block}
    >
      <div className="container">
        <HeaderLink />
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
