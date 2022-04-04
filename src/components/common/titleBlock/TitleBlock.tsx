import { FC } from 'react';
import logo from '../../../resources/icon/beans_logo.svg';

import styles from './titleBlock.module.css';
interface IProps {
    title: string
}

const TitleBlock: FC<IProps> = ({ title }) => {
    return (
        <>
            <h2 className={styles.title}>{title}</h2>
            <img className={styles.logo} src={logo} alt="logo" />
        </>
    );
};

export default TitleBlock;