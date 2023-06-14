import React from 'react';
import cnBind from 'classnames/bind';

import styles from './Canvas.module.scss';

const cx = cnBind.bind(styles);

export const Canvas = () => {
    return (
        <div className={cx('canvas-block')}>
            <canvas width={600} height={400} />
        </div>
    );
};
