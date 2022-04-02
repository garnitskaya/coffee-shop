import HeaderLink from '../headerLink/HeaderLink';
import styles from './footer.module.css';
import beansLogo from '../../resources/icon/beans_logo.svg'

const Footer = () => {
    return (
        <div className={styles.block}>
            <HeaderLink black />
            <img className={styles.logo} src={beansLogo} alt="logo" />
        </div>
    );
};

export default Footer;