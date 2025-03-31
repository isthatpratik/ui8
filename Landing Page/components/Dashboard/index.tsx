import React, { useState } from 'react';
import cn from 'classnames';
import styles from './Dashboard.module.sass';
import CreateContract from '../CreateContract';
import AnalyzeContract from '../AnalyzeContract';
import Image from 'next/image';
import StarField from '@/components/StarField';
import { motion, AnimatePresence } from 'framer-motion';

type TabType = 'create' | 'analyze';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState<TabType>('create');

    const starfieldVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    const ellipseVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className={styles.dashboard}>
            <motion.div 
                className={styles.starfieldWrapper}
                variants={starfieldVariants}
                initial="hidden"
                animate="visible"
            >
                <StarField />
            </motion.div>
            <motion.div 
                className={styles.ellipse}
                variants={ellipseVariants}
                initial="hidden"
                animate="visible"
            >
                <Image 
                    src="/images/white-radial.svg"
                    alt="Radial gradient"
                    width={1000}
                    height={1000}
                    priority
                />
            </motion.div>
            <div className={styles.container}>
                <motion.div 
                    className={styles.logoWrapper}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image 
                        src="/icons/lawbit-logo.svg" 
                        alt="LawBit" 
                        width={120} 
                        height={40}
                        className={styles.logo}
                    />
                </motion.div>

                <motion.div 
                    className={styles.tabsWrapper}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className={styles.tabs} data-state={activeTab}>
                        <button 
                            className={cn(styles.tab, { [styles.active]: activeTab === 'create' })}
                            onClick={() => setActiveTab('create')}
                        >
                            <Image 
                                src="/icons/generated.svg" 
                                alt="Create" 
                                width={20} 
                                height={20}
                                className={styles.tabIcon}
                            />
                            Create Contract
                        </button>
                        <button 
                            className={cn(styles.tab, { [styles.active]: activeTab === 'analyze' })}
                            onClick={() => setActiveTab('analyze')}
                        >
                            <Image 
                                src="/icons/analyzed.svg" 
                                alt="Analyze" 
                                width={20} 
                                height={20}
                                className={styles.tabIcon}
                            />
                            Analyze Contract
                        </button>
                    </div>
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeTab}
                        className={styles.contentWrapper}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className={styles.mainContent}>
                            {activeTab === 'create' ? <CreateContract /> : <AnalyzeContract />}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Dashboard; 