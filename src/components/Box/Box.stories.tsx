import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Box, BoxProps } from "./Box";

export default {
  title: "A few Box examples",
  component: Box,
} as ComponentMeta<typeof Box>;

function Dummy(props: any) {
  return (
    <div
      style={{
        borderRadius: 5,
        padding: "10px 50px",
        backgroundColor: "#d8e5fd",
        border: "1px solid #455e8c",
        color: "#455e8c",
      }}
    >
      {props.children}
    </div>
  );
}

const baseBoxProps: Omit<BoxProps, "children"> = {
  radius: "5px",
  padding: "30px",
  border: "1px dashed #7b8099",
  background: "#e7e9f4",
  gap: "30px",
};

const Template: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>
    <Dummy>{1}</Dummy>
    <Dummy>{2}</Dummy>
    <Dummy>{3}</Dummy>
    <Dummy>{4}</Dummy>
  </Box>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  ...baseBoxProps,
  vertical: false,
};

export const Vertical = Template.bind({});
Vertical.args = {
  ...baseBoxProps,
  vertical: true,
};

const TemplateMix: ComponentStory<typeof Box> = (args) => (
  <Box {...args} vertical>
    <Box>
      <Dummy>{1}</Dummy>
      <Dummy>{2}</Dummy>
      <Dummy>{3}</Dummy>
    </Box>
    <Box>
      <Box vertical>
        <Dummy>{4}</Dummy>
        <Dummy>{5}</Dummy>
      </Box>
      <Box vertical>
        <Dummy>{6}</Dummy>
        <Dummy>{7}</Dummy>
      </Box>
    </Box>
    <Box>
      <Dummy>{8}</Dummy>
      <Dummy>{9}</Dummy>
      <Dummy>{10}</Dummy>
    </Box>
  </Box>
);
export const Mix = TemplateMix.bind({});
Mix.args = {
  ...baseBoxProps,
};
