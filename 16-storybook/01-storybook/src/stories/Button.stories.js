import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Button {...args} />;

// export const Red = () => <Button label="Press Me" backgroundColor="red" />;
export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md",
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: "green",
  label: "Press Me",
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: "green",
  label: "Press Me",
  size: "sm",
};
