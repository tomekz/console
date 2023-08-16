import React from 'react';
import { Story } from '@storybook/react';

import { ClusterStatus, ClusterType } from '../../types/provision';
import { InstallationType } from '../../types/redux';
import { noop } from '../../utils/noop';
import { sortClustersByType } from '../../utils/sortClusterByType';

import { ClusterTable, ClusterInfo } from './clusterTable';

export default {
  title: 'Components/ClusterTable',
  component: ClusterTable,
};

const clusters: ClusterInfo[] = [
  {
    clusterName: 'kuberfirst-mgmt',
    type: ClusterType.MANAGEMENT,
    cloudProvider: InstallationType.AWS,
    cloudRegion: 'ap-southeast-1',
    creationDate: '05 Apr 2023, 12:24:56',
    gitUser: 'Eleanor Carroll',
    status: ClusterStatus.PROVISIONED,
    adminEmail: 'admin@mycompany.com',
    gitProvider: 'Github',
    domainName: 'yourdomain.com',
    nodes: 2,
  },
  {
    clusterName: 'kuberfirst-worker-1',
    type: ClusterType.WORKLOAD,
    cloudProvider: InstallationType.CIVO,
    cloudRegion: 'ap-southeast-1',
    nodes: 2,
    creationDate: '05 Apr 2023, 12:24:56',
    gitUser: 'Eleanor Carroll',
    status: ClusterStatus.ERROR,
    adminEmail: 'admin@mycompany.com',
    gitProvider: 'Github',
    domainName: 'yourdomain.com',
  },
  {
    clusterName: 'kuberfirst-worker-2',
    type: ClusterType.WORKLOAD,
    cloudProvider: InstallationType.DIGITAL_OCEAN,
    cloudRegion: 'ap-southeast-1',
    nodes: 2,
    creationDate: '05 Apr 2023, 12:24:56',
    gitUser: 'Eleanor Carroll',
    status: ClusterStatus.DELETING,
    adminEmail: 'admin@mycompany.com',
    gitProvider: 'Github',
    domainName: 'yourdomain.com',
  },
  {
    clusterName: 'kuberfirst-worker-3',
    type: ClusterType.WORKLOAD,
    cloudProvider: InstallationType.DIGITAL_OCEAN,
    cloudRegion: 'ap-southeast-1',
    nodes: 2,
    creationDate: '05 Apr 2023, 12:24:56',
    gitUser: 'Eleanor Carroll',
    status: ClusterStatus.PROVISIONED,
    adminEmail: 'admin@mycompany.com',
    gitProvider: 'Github',
    domainName: 'yourdomain.com',
  },
  {
    clusterName: 'kuberfirst-worker-4',
    type: ClusterType.WORKLOAD,
    cloudProvider: InstallationType.VULTR,
    cloudRegion: 'ap-southeast-1',
    nodes: 2,
    creationDate: '05 Apr 2023, 12:24:56',
    gitUser: 'Eleanor Carroll',
    status: ClusterStatus.PROVISIONED,
    adminEmail: 'admin@mycompany.com',
    gitProvider: 'Github',
    domainName: 'yourdomain.com',
  },
];

const { managementCluster, workloadClusters } = sortClustersByType(clusters);

const DefaultTemplate: Story = (args) =>
  managementCluster ? (
    <ClusterTable
      {...args}
      onMenuOpenClose={noop}
      onDeleteCluster={noop}
      managementCluster={managementCluster}
      workloadClusters={workloadClusters}
    />
  ) : (
    <></>
  );

export const Default = DefaultTemplate.bind({});
