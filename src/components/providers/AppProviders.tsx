'use client';

import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { CredentialsProvider } from '@/context/CredentialsContext';
import { CredentialsModal } from '@/components/ui/CredentialsModal';

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <CredentialsProvider>
        {children}
        <CredentialsModal />
      </CredentialsProvider>
    </ThemeProvider>
  );
};
