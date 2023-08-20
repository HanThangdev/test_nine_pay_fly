import { lazy } from 'react';

const Conversations = lazy(() => import('../pages/Conversations'));
const Profile = lazy(() => import('../pages/profile'));
const Settings = lazy(() => import('../pages/setting'));
const ManageChatbots = lazy(() => import('../pages/ManageChatbots'));
const Notfound = lazy(() => import('../pages/Notfound'));

const coreRoutes = [
  {
    path: '/manage-chatbots',
    title: 'Manage-chatbots',
    component: ManageChatbots,
  },
  {
    path: '/conversations',
    title: 'Conversations',
    component: Conversations,
  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '*',
    title: 'Notfound',
    component: Notfound,
  },
];

const routes = [...coreRoutes];
export default routes;
