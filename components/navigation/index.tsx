import React, { FunctionComponent, ReactNode } from 'react';
import Image from 'next/image';
import HelpIcon from '@mui/icons-material/Help';
import { BsSlack } from 'react-icons/bs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Typography from '../typography';
import { ECHO_BLUE } from '../../constants/colors';

import {
  Container,
  FooterContainer,
  MenuContainer,
  KubefirstTitle,
  KubefirstVersion,
  MenuItem,
  Title,
  FlappyCard,
  DocsCard,
} from './navigation.styled';

import Ray from '@/assets/ray.svg';
import TitleLogo from '@/assets/title.svg';
import Learn from '@/assets/learn.png';
import Controller from '@/assets/controller.png';

const FOOTER_ITEMS = [
  {
    icon: <HelpIcon />,
    path: 'https://docs.kubefirst.io',
    title: 'Documentation',
  },
  {
    icon: <BsSlack size={20} />,
    path: 'https://kubefirst.io/slack',
    title: 'Slack',
  },
];

export interface NavigationProps {
  domLoaded: boolean;
  handleIsActiveItem: (path: string) => boolean;
  handleOpenContent: () => void;
  handleOpenGame: () => void;
  isProvisionStep: boolean;
  kubefirstVersion?: string;
  routes: Array<{
    icon: ReactNode;
    path: string;
    title: string;
    isEnabled: boolean;
  }>;
}

const Navigation: FunctionComponent<NavigationProps> = ({
  domLoaded,
  handleIsActiveItem,
  handleOpenContent,
  handleOpenGame,
  isProvisionStep,
  kubefirstVersion,
  routes,
}) => {
  const { push } = useRouter();
  return (
    <Container>
      <div>
        <KubefirstTitle onClick={() => push('/')}>
          <Image alt="k1-image" src={Ray} height={40} width={48} id="ray" />
          {/* Only visible above md breakpoint 👇 */}
          <Image alt="k1-image" src={TitleLogo} height={40} width={160} id="title" />
          {kubefirstVersion && (
            <KubefirstVersion variant="labelSmall" color={ECHO_BLUE}>
              {`${kubefirstVersion}`}
            </KubefirstVersion>
          )}
        </KubefirstTitle>
        {domLoaded && (
          <MenuContainer>
            {routes &&
              routes.map(({ icon, path, title }) => (
                <Link href={path} key={path}>
                  <MenuItem isActive={handleIsActiveItem(path)}>
                    {icon}
                    <Title variant="body1">{title}</Title>
                  </MenuItem>
                </Link>
              ))}
          </MenuContainer>
        )}
      </div>
      <FooterContainer>
        {isProvisionStep && (
          <>
            <DocsCard onClick={handleOpenContent}>
              <Image alt="controller-img" src={Learn} height={80} width={80} />
              <Typography variant="subtitle2" color="secondary">
                Got time? Sit back & learn...
              </Typography>
            </DocsCard>
            <FlappyCard onClick={handleOpenGame}>
              <Typography variant="subtitle2" color="secondary">
                Bored? Play flappy K-ray and win stuff!
              </Typography>
              <Image alt="controller-img" src={Controller} height={80} width={80} />
            </FlappyCard>
          </>
        )}
        {FOOTER_ITEMS.map(({ icon, path, title }) => (
          <Link href={path} key={path} target="_blank">
            <MenuItem>
              {icon}
              <Title variant="body1">{title}</Title>
            </MenuItem>
          </Link>
        ))}
      </FooterContainer>
    </Container>
  );
};

export default Navigation;
