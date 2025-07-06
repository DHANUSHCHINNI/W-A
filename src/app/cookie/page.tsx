import styles from './cookie.module.css';
import CookieText from './text';

export default function CookiePage() {
    return (
        <div className={styles.policyContainer}>
            <CookieText />
        </div>
    );
} 