import React, {useState} from "react";
import type { Meta,StoryObj } from '@storybook/react';

import  CustomSelect from './index';

const meta: Meta<typeof CustomSelect> = {
    component: CustomSelect,
};

export default meta;
type Story = StoryObj<typeof CustomSelect>;


const CustomSelectWithHooks = () => {
    // Sets the hooks for both the label and primary props
    const [value, setValue] = useState('one');

    // Sets a click handler to change the label's value
    const handleOnChange = (value:string) => {
        setValue(value)
    };
    return <CustomSelect selected={value} options={["one",'two','three']} onChangeSelected={handleOnChange} />;
};

export const Primary: Story = {
    render:()=><CustomSelectWithHooks/>
};