import { FunctionComponent, HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
    value: number;
    color?: string;
    background?: string;
    borderRadius?: string;
}

const ProgressBar: FunctionComponent<ProgressBarProps> = props => {
    const { value, background, color, borderRadius, className, style } = props;

    return (
        <div
            {...props}
            className={classNames(styles.container, className)}
            style={{ background, borderRadius, ...style }}
        >
            <div className={styles.progress} style={{ width: `${value}%`, background: color, borderRadius }} />
        </div>
    );
}

export default ProgressBar;