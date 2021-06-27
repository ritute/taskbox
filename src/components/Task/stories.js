import Task from 'components/Task'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: Task,
  title: 'Task',
}

const Template = args => <Task {...args} />

// Each story here is a permutation of the component
// Returns rendered element
export const Default = Template.bind({})
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
}

export const Pinned = Template.bind({})
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
}

export const Archived = Template.bind({})
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
}