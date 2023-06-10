import React from "react";
import type { Meta,StoryObj } from '@storybook/react';

import  Typography from './index';

const meta: Meta<typeof Typography> = {
    component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Label: Story = {
    args:{
        children:"Test",
        variant:"label"
    },
};
export const Head1: Story = {
    args:{
        ...Label.args,
        variant:'head1'
    },
};
export const Head2: Story = {
    args:{
        ...Label.args,
        variant:'head2'
    },
};
export const Head3: Story = {
    args:{
        ...Label.args,
        variant:'head3'
    },
};
export const Head4: Story = {
    args:{
        ...Label.args,
        variant:'head4'
    },
};
export const Head5: Story = {
    args:{
        ...Label.args,
        variant:'head5'
    },
};
export const Head6: Story = {
    args:{
        ...Label.args,
        variant:'head6'
    },
};
export const Body1: Story = {
    args:{
        ...Label.args,
        variant:'body1'
    },
};
export const Body2: Story = {
    args:{
        ...Label.args,
        variant:'body2'
    },
};
export const Display: Story = {
    args:{
        ...Label.args,
        variant:'display'
    },
};