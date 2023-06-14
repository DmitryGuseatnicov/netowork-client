import React from 'react';
import cnBind from 'classnames/bind';

import styles from './Toolbar.module.scss';

const cx = cnBind.bind(styles);

export const Toolbar = () => {
    return (
        <div className={cx('toolbar')}>
            <button className={cx('button')} type="button">
                кисть
            </button>
        </div>
    );
};
