import { ReactNode, FunctionComponent } from 'react';
import { IconType } from 'react-icons';

import styles from './styles.module.scss';

export interface SocialMediaProps {
    url: string;
    icon: ReactNode;
}

const SocialMedia: FunctionComponent<SocialMediaProps> = ({ url, icon }) => {
    return (
        <a className={styles.socialMedia} href={url}>
            {icon}
        </a>
    );
}

export default SocialMedia;