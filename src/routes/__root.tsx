import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanstackDevtools } from '@tanstack/react-devtools';

import Header from '../components/Header';

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools';

import type { QueryClient } from '@tanstack/react-query';
import Container from '@/components/Container';

interface MyRouterContext {
    queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
    component: () => (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <TanstackDevtools
                config={{
                    position: 'bottom-left',
                }}
                plugins={[
                    {
                        name: 'Tanstack Router',
                        render: <TanStackRouterDevtoolsPanel />,
                    },
                    TanStackQueryDevtools,
                ]}
            />
        </>
    ),
});
