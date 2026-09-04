'use client';

import React from 'react';
import { CredentialsProvider } from '@/context/CredentialsContext';
import { CredentialsModal } from '@/components/ui/CredentialsModal';

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <CredentialsProvider>
      {children}
      <CredentialsModal />
    </CredentialsProvider>
  );
};
