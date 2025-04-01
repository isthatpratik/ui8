'use client';

import Dashboard from '@/components/Dashboard';
import Footer from '@/components/Footer';
import styles from './page.module.sass';

export default function ContractsPage() {
    return (
        <div className={styles.container}>
            <Dashboard />
            <Footer />
        </div>
    );
} 