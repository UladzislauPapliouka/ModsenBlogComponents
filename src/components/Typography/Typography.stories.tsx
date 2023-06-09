import React from "react";
import type { Meta,StoryObj } from '@storybook/react';

import  TextArea from './index';

const meta: Meta<typeof TextArea> = {
    component: TextArea,
};

export default meta;
type Story = StoryObj<typeof TextArea>;

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