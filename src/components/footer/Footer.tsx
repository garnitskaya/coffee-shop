import HeaderLink from '../headerLink/HeaderLink';
import beansLogo from '../../resources/icon/beans_logo.svg'

import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.block}>
            <HeaderLink black />
            <img className={styles.logo} src={beansLogo} alt="logo" />
        </div>
    );
};

export default Footer;