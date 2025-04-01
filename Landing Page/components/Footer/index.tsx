import React from 'react'
import Link from 'next/link'
import styles from './Footer.module.sass'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.links}>
                        <Link href="/terms">Terms of use</Link>
                        <span>•</span>
                        <Link href="/privacy">Privacy Policy</Link>
                    </div>
                    <div className={styles.copyright}>
                        <p>Copyright 2025. All rights reserved. &nbsp;&nbsp; Lawbit AI, a product by Neural Paths</p>
                        <Image src="/icons/footer-outline.svg" alt="Lawbit" width={24} height={24} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
