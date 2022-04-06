/*!
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { QueryClient, QueryClientProvider } from 'react-query';

import Tree from './Tree';
import { SelectionProvider } from './context/selection';
import { ContainerRefProvider } from './context/containerRef';
import { TimezoneProvider } from './context/timezone';
import { AutoRefreshProvider } from './context/autorefresh';

// create shadowRoot
const root = document.querySelector('#root');
const shadowRoot = root.attachShadow({ mode: 'open' });
const myCache = createCache({
  container: shadowRoot,
  key: 'c',
});
const mainElement = document.getElementById('react-container');
shadowRoot.appendChild(mainElement);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

const theme = extendTheme(
  {
    fontSizes: {
      xs: '0.825rem',
      sm: '1rem',
      md: '1.25rem',
      lg: '1.5rem',
      xl: '1.875rem',
      '2xl': '2rem',
      '3xl': '2.25rem',
      '4xl': '3rem',
      '5xl': '3.75rem',
      '6xl': '4.5rem',
      '7xl': '6rem',
      '8xl': '8rem',
    },
  },
);

function App() {
  return (
    <React.StrictMode>
      <CacheProvider value={myCache}>
        <ChakraProvider thenme={theme}>
          <ContainerRefProvider>
            <QueryClientProvider client={queryClient}>
              <TimezoneProvider>
                <AutoRefreshProvider>
                  <SelectionProvider>
                    <Tree />
                  </SelectionProvider>
                </AutoRefreshProvider>
              </TimezoneProvider>
            </QueryClientProvider>
          </ContainerRefProvider>
        </ChakraProvider>
      </CacheProvider>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, mainElement);
