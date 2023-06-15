import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { TestComponent } from './TestComponent';
import { TestComponentProps } from './TestComponent.types';

const Template = (args: TestComponentProps) => <TestComponent {...args} />;

const meta = {
    title: 'components/TestComponent',
    component: Template,
    tags: ['autodocs'],
} satisfies Meta<typeof TestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        testProp: true,
        color: '#b52424',
    },
};
