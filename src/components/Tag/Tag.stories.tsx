import React from "react";
import type { Meta,StoryObj } from '@storybook/react';

import  Input from './index';

const meta: Meta<typeof Input> = {
    component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args:{
     value:'Test'
    },
};
export const WithError: Story = {
    args:{
        value:'Test',
        errorMessage:"Too long..."
    },
};