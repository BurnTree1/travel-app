import React, { FC } from 'react';
import school from 'Assets/image/rsschool.svg';
import git from 'Assets/image/git.svg';
import styles from './Footer.module.css';

export const Footer: FC = () => (
        <div className={styles.footer}>
            <div className={styles.feedback}>
            Made by
            <div className={styles.githubs}>
                    <a href="https://github.com/Akrosom21" rel="noreferrer" target="_blank">
                        <img src={git} alt="Akrosom21" className={styles.git__img} />
                    </a>
                    <a href="https://github.com/BurnTree1" rel="noreferrer" target="_blank">
                        <img src={git} alt="BurnTree1" className={styles.git__img} />
                    </a>
                    <a href="https://github.com/GertValiakhmetov" rel="noreferrer" target="_blank">
                        <img src={git} alt="GertValiakhmetov" className={styles.git__img} />
                    </a>
                    <a href="https://github.com/kornienko199004" rel="noreferrer" target="_blank">
                        <img src={git} alt="kornienko199004" className={styles.git__img} />
                    </a>
            </div>
            for
            </div>
            <a href="https://rs.school/js/" className="school">
                <img src={school} alt="rs-school" className={styles.school__img} />
            </a>
            in 2021
        </div>
);
