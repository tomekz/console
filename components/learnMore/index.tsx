import React, { FunctionComponent } from 'react';
import { Divider } from '@mui/material';

import NextLink from '../../components/nextLink';
import { InstallationType } from '../../types/redux';

import { Text } from './learnMore.styled';

export interface LearnMoreProps {
  description: string;
  href: string;
  linkTitle: string;
  installType?: InstallationType;
  withoutDivider?: boolean;
}

const LearnMore: FunctionComponent<LearnMoreProps> = ({
  description,
  href,
  installType,
  linkTitle,
  withoutDivider,
}) => {
  const docsDomainLink = `https://docs.kubefirst.io/${
    installType && [InstallationType.DIGITAL_OCEAN, InstallationType.VULTR].includes(installType)
      ? 'k3d'
      : installType
  }`;

  return (
    <>
      {!withoutDivider && <Divider sx={{ m: '-20px', p: '8px 0' }} />}
      <Text variant="labelLarge">
        {description}{' '}
        <NextLink
          href={
            href ||
            `${docsDomainLink}/explore/gitops#using-your-own-gitops-template-repository-fork`
          }
          target="_blank"
        >
          {linkTitle}
        </NextLink>
      </Text>
    </>
  );
};

export default LearnMore;
