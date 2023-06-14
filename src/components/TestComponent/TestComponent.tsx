import React from 'react';
import cnBind from 'classnames/bind';

import { TestComponentProps } from './TestComponent.types';

import styles from './TestComponent.module.scss';

const cx = cnBind.bind(styles);

export const TestComponent: React.FC<TestComponentProps> = ({ testProp }) => {
    return (
        <div className={cx('test-component')}>
            <div className={cx('content')}>{testProp ? 'true' : 'false'}</div>
        </div>
    );
};
