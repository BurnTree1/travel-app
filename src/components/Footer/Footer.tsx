import React, {FC} from "react";
import school from 'Assets/image/school.svg'
import git from 'Assets/image/git.svg'
import styles from './Footer.module.css'

export const Footer: FC = () => {
    return (
        <div className={styles.footer}>
            <a href="https://rs.school/js/" className="school">
                <img src={school} alt="rs-school" className="school__img"/>
            </a>
            <div className={styles.year}>2021</div>
            <a href="https://github.com/BurnTree1/travel-app.git" className="school">
                <img src={git} alt="rs-school" className="school__img"/>
            </a>
        </div>
    )
}