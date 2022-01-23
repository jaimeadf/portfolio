import { FunctionComponent, HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
    value: number;
    color?: string;
    background?: string;
}

const ProgressBar: FunctionComponent<ProgressBarProps> = props => {
    const { value, background, color, className, style } = props;

    return (
        <div
            {...props}
            className={classNames(styles.container, className)}
            style={{ background, ...style }}
        >
            <div className={styles.progress} style={{ width: `${value}%`, background: color }} />
        </div>
    );
}

export default ProgressBar;