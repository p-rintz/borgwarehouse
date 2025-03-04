//Lib
import React from 'react';
import classes from '../WizardStep1/WizardStep1.module.css';
import { IconDeviceDesktopAnalytics, IconTerminal2 } from '@tabler/icons';

function WizardStep1() {
    return (
        <div className={classes.container}>
            <h1>
                <IconTerminal2 className={classes.icon} />
                Command Line Interface
            </h1>
            <div className={classes.description}>
                We recommend using the official <b>BorgBackup</b> client which
                is supported by most Linux distributions.
                <br />
                More information about installation can be{' '}
                <a
                    href='https://borgbackup.readthedocs.io/en/stable/installation.html'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    found here
                </a>
                .<br />
                To <b>automate your backup</b>, you can also use{' '}
                <a
                    href='https://torsion.org/borgmatic/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Borgmatic
                </a>{' '}
                which is a{' '}
                <a
                    href='https://packages.debian.org/buster/borgmatic'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Debian package
                </a>
                . On the step 4, you will find a pattern of default config.
            </div>
            <div className={classes.separator}></div>
            <h1>
                <IconDeviceDesktopAnalytics className={classes.icon} />
                Graphical User Interface
            </h1>
            <div className={classes.description}>
                <b>Vorta</b> is an opensource (GPLv3) backup client for Borg
                Backup.
                <br />
                It runs on Linux, MacOS and Windows (via Windows’ Linux
                Subsystem (WSL)). Find the right way to install it{' '}
                <a
                    href='https://vorta.borgbase.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    just here
                </a>
                .
            </div>
            <img src='/vorta-demo.gif' alt='Vorta GIF' />
        </div>
    );
}

export default WizardStep1;
