import { Link } from 'react-router-dom';
import HeaderLink from './../headerLink/HeaderLink';
import logo from '../../resources/icon/beans_logo_white.svg';
import styles from './mainBanner.module.css';

const MainBanner = () => {
    return (
        <div className={styles.blocks}>
            <div className={styles.container}>
                <HeaderLink />
                <div className={styles.block}>
                    <h1 className={styles.title}>Everything You Love About Coffee</h1>
                    <img className={styles.logo} src={logo} alt="logo" />
                    <h2 className={styles.subtitle}>We makes every day full of energy and taste</h2>
                    <h3 className={styles.subtitle}>Want to try our beans?</h3>
                    <Link className={styles.button} to='/ourCoffee'>More</Link>
                </div>
            </div>
        </div>
    );
};

export default MainBanner;