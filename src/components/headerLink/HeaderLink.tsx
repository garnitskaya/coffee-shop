import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../resources/icon/coffee-beans.svg';
import logoBlack from '../../resources/icon/coffee-beans_black.svg';
import styles from './headerLink.module.css';

interface IProps {
    black?: boolean
}

const HeaderLink: FC<IProps> = ({ black }) => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <img className={styles.logo} src={black ? logoBlack : logo} alt="logo" />
                <ul className={styles.list}>
                    <li><Link className={styles.item} to='/coffee-shop'>Coffee house</Link></li>
                    <li><Link className={styles.item} to='/ourCoffee'>Our coffee</Link></li>
                    <li><Link className={styles.item} to='/forYour'>For your pleasure</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderLink;