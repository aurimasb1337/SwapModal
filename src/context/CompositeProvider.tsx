import React from 'react';

type CompositeProviderProps = {
  providers: React.ComponentType<any>[];
  children: React.ReactNode;
};

const CompositeProvider: React.FC<CompositeProviderProps> = ({ providers, children }) => {
  const ProviderChain = providers.reduceRight((acc, Provider) => {
    return <Provider>{acc}</Provider>;
  }, <>{children}</>);

  return <>{ProviderChain}</>;
};

export default CompositeProvider;