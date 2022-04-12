import React from "react";
import Task from "./Task";

// 1. 컴포넌트
export default {
  component: Task,
  title: "Task",
};

const Template = (args) => <Task {...args} />;

// 2. 스토리 (원하는 만큼)
// Template.bind({})는 함수의 복사본을 만드는 표준 JavaScript의 한 기법입니다. 우리는 이 기법을 사용하여 각각의 스토리가 고유한 속성(properties)을 갖지만 동시에 동일한 구현을 사용하도록 할 수 있습니다.
// 인수(arguments) 또는 간단히 줄여서 args를 사용하여 Storybook을 다시 시작하지 않고도 Controls addon으로 컴포넌트를 실시간으로 수정할 수 있습니다. args의 값이 변하면 컴포넌트도 함께 변합니다.

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(),
  },
};

export const Pinned = Template.bind({});
Default.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
