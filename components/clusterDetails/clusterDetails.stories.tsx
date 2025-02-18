import { Meta, StoryObj } from '@storybook/react';

import { mockClusterConfig } from '../../tests/mocks/mockClusterConfig';
import { ClusterType } from '../../types/provision';

import ClusterDetails from '.';

const meta: Meta<typeof ClusterDetails> = {
  component: ClusterDetails,
};

export default meta;

export const Default: StoryObj<typeof ClusterDetails> = {
  args: {
    cluster: {
      ...mockClusterConfig,
      clusterId: '1',
      adminEmail: 'derrick@kubeshop.io',
      domainName: 'kubefirst.io',
      dnsProvider: 'civo',
      gitProvider: 'Github',
      gitAuth: {
        gitOwner: 'D-B-Hawk',
        gitToken: 'kray',
        gitUser: 'D-B-Hawk',
      },
      type: mockClusterConfig.type as ClusterType,
      environment: undefined,
    },
  },
};
