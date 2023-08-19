import { lazy } from 'react';

const Calendar = lazy(() => import('../pages/Calendar'));
const Chart = lazy(() => import('../pages/Chart'));
const Profile = lazy(() => import('../pages/profile'));
const Settings = lazy(() => import('../pages/setting'));
const Tables = lazy(() => import('../pages/Tables'));
const Notfound = lazy(() => import('../pages/Notfound'));

const coreRoutes = [
  {
    path: '/calendar',
    title: 'Calender',
    component: Calendar,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '*',
    title: 'Chart',
    component: Notfound,
  },
  {
    path: '/chart',
    title: 'NotFound',
    component: Chart,
  },
];

const routes = [...coreRoutes];
export default routes;
