import React, { PropsWithChildren } from 'react';
import { getServerSession } from 'next-auth/next';
import { Session } from 'next-auth';

import { Providers } from '@/app/lib/providers';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import StyledComponentsRegistry from '@/app/lib/registry';

import '../styles/globals.css';

export const metadata = {
  title: 'Kubefirst Console',
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
  },
  icons: {
    shortcut: 'https://assets.kubefirst.com/console/ray.svg',
  },
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const session = await getServerSession<typeof authOptions, Session>(authOptions);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers session={session}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
