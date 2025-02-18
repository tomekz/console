'use client';
import React, { FunctionComponent, useCallback, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';

import KubefirstContent from '../kubefirstContent';
import NavigationComponent from '../../components/navigation';
import FlappyKray from '../../components/flappyKray';
// import useFeatureFlag from '../../hooks/useFeatureFlag';
import useModal from '../../hooks/useModal';
import { useAppSelector } from '../../redux/store';
import { InstallationType } from '../../types/redux';
import { GitProvider } from '../../types';

import { useInstallation } from '@/hooks/useInstallation';
import { selectConfig } from '@/redux/selectors/config.selector';
import { selectInstallation } from '@/redux/selectors/installation.selector';
import useFeatureFlag from '@/hooks/useFeatureFlag';

const Navigation: FunctionComponent = () => {
  const [domLoaded, setDomLoaded] = useState<boolean>(false);
  const { isOpen, openModal, closeModal } = useModal();
  const {
    isOpen: isModalContentOpen,
    openModal: openModalContent,
    closeModal: closeModalContent,
  } = useModal();

  const asPath = usePathname();
  const { kubefirstVersion, isClusterZero } = useAppSelector(selectConfig());
  const { gitProvider, installationStep, installType } = useAppSelector(selectInstallation());

  const { isEnabled: isMultiClusterEnabled } = useFeatureFlag('multicluster-management');

  const { isProvisionStep } = useInstallation(
    installType as InstallationType,
    gitProvider as GitProvider,
    installationStep,
  );

  const routes = useMemo(
    () =>
      [
        {
          icon: <ScatterPlotIcon />,
          path: '/dashboard/cluster-management',
          title: 'Cluster Management',
          isEnabled: isMultiClusterEnabled && !isClusterZero,
        },
        {
          icon: <GridViewOutlinedIcon />,
          path: '/dashboard/services',
          title: 'Services',
          isEnabled: !isClusterZero,
        },
        {
          icon: <CollectionsOutlinedIcon />,
          path: '/dashboard/environments',
          title: 'Environments',
          isEnabled: !isClusterZero,
        },
      ].filter(({ isEnabled }) => isEnabled),
    [isMultiClusterEnabled, isClusterZero],
  );

  const handleIsActiveItem = useCallback(
    (route: string) => {
      if (typeof window !== 'undefined') {
        const linkPathname = new URL(route, window?.location?.href).pathname;

        // Using URL().pathname to get rid of query and hash
        const activePathname = new URL(asPath as string, window?.location?.href).pathname;

        return linkPathname === activePathname;
      }

      return false;
    },
    [asPath],
  );

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      <NavigationComponent
        domLoaded={domLoaded}
        kubefirstVersion={kubefirstVersion}
        routes={routes}
        handleIsActiveItem={handleIsActiveItem}
        handleOpenGame={openModal}
        handleOpenContent={openModalContent}
        isProvisionStep={isProvisionStep}
      />
      {isOpen && <FlappyKray isOpen closeModal={closeModal} />}
      {isModalContentOpen && (
        <KubefirstContent isOpen={isModalContentOpen} closeModal={closeModalContent} />
      )}
    </>
  );
};

export default Navigation;
