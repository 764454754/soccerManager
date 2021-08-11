import React, { lazy } from 'react';

export const myRoutes = [
    {
        path: '/',
        exact: true,
        component: lazy(() => import('../pages/home'))
    },
    {
        path: '/scrollball',
        exact: false,
        component: lazy(() => import('../pages/components/scrollball/index'))
    },
    {
        path: '/test',
        exact: false,
        component: lazy(() => import('../pages/components/some/index'))
    }
    // {
    //     path: '/',
    //     exact: true,
    //     component: Loadable({
    //         loader: () => import('../pages/home')
    //     })
    // }
];
