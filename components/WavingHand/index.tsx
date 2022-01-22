import { ReactNode, FunctionComponent, SVGProps } from 'react';

import styles from './styles.module.scss';

import Emoji from '../../assets/waving-hand.svg';

const WavingHand: FunctionComponent<SVGProps<SVGSVGElement>> = props => {
    return (
        <Emoji {...props} className={`${props.className} ${styles.emoji}`} />
    );
}

export default WavingHand;