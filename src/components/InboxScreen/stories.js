import { Provider } from 'react-redux'
import { action } from '@storybook/addon-actions'

import { PureInboxScreen } from 'components/InboxScreen'
import * as TaskListStories from 'components/TaskList/stories'

// Simple mock of redux store
const store = {
  getState: () => {
    return {
      tasks: TaskListStories.Default.args.tasks,
    }
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: PureInboxScreen,
  title: 'InboxScreen',
  decorators: [story => <Provider store={store}>{story()}</Provider>],
}

const Template = args => <PureInboxScreen {...args} />

export const Default = Template.bind({})

export const Error = Template.bind({})
Error.args = {
  error: 'Something',
}