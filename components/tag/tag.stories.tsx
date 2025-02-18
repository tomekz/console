import React, { useCallback, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { sample } from 'lodash';

import Row from '../row';

import Tag, { TAG_COLOR_OPTIONS, TAG_ICON_OPTONS } from '.';

const meta: Meta<typeof Tag> = {
  component: Tag,
  argTypes: {
    bgColor: {
      control: 'select',
      options: TAG_COLOR_OPTIONS,
    },
    icon: {
      control: 'radio',
      options: Object.keys(TAG_ICON_OPTONS),
    },
  },
};

export default meta;

const TagWithHooks = () => {
  const [tags, setTags] = useState(['Demo', 'Staging', 'Prod']);

  const handleTagRemoval = useCallback((tagText: string) => {
    setTags((curState) => curState.filter((tag) => tag !== tagText));
  }, []);

  return (
    <Row style={{ gap: 8 }}>
      {tags.map((tag) => (
        <Tag
          key={tag}
          removable
          onRemoval={handleTagRemoval}
          text={tag}
          bgColor={sample(TAG_COLOR_OPTIONS)}
        />
      ))}
    </Row>
  );
};

export const Default: StoryObj<typeof Tag> = {
  args: {
    text: 'Tag',
  },
};

export const Removable: StoryObj<typeof Tag> = {
  render: () => <TagWithHooks />,
};
