import React, { FC } from 'react';
import styles from './aboutBlock.module.css';

interface IProps {
    img: string
    children: React.ReactNode
}

const AboutBlock: FC<IProps> = ({ img, children }) => {
    return (
        <div className={styles.block}>
            <img className={styles.img} src={img} alt='image' />
            <div >
                {children}
                <div className={styles.descr}>
                    <p>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br />
                        <br />
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions.
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutBlock;