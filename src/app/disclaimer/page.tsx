import styles from './disclaimer.module.css';
import DisclaimerText from './text';

export default function DisclaimerPage() {
    return (
        <div className={styles.policyContainer}>
            <DisclaimerText />
        </div>
    );
} 