import { ReactNode, FunctionComponent, SVGProps } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

import Emoji from '../../assets/emojis/waving-hand.svg';

const WavingHand: FunctionComponent<SVGProps<SVGSVGElement>> = props => {
    return (
        <Emoji {...props} className={classNames(props.className, styles.emoji)} />
    );
}

export default WavingHand;