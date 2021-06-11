import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { AppProvider, EmptyState, Page } from '@shopify/polaris';
import { authenticatedFetch } from '@shopify/app-bridge-utils';

import enTranslations from '@shopify/polaris/locales/en.json';
import React from 'react';
import TestData from './TestData'
import AddProduct from './AddProduct'

export default function App() {
  const client = new ApolloClient({
    link: new HttpLink({
      credentials: 'same-origin',
      fetch: authenticatedFetch(window.app), // created in shopify_app.js
      uri: '/graphql'
    }),
    cache: new InMemoryCache()
  });

  return (
      <AppProvider i18n={enTranslations}>
        <ApolloProvider client={client}>
          <Page>
            <EmptyState>
              <div>This is App.js</div>
              <AddProduct/>
              <TestData/>
            </EmptyState>
          </Page>
        </ApolloProvider>
      </AppProvider>
  );
}
