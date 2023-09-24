import { lazy } from 'react';

const Conversations = lazy(() => import('../pages/Conversations'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Setting'));
const BuildChatbot = lazy(() => import('../pages/BuildChatbot'));
const PricingPlan = lazy(() => import('../pages/PricingPlan'));
const Notfound = lazy(() => import('../pages/Notfound'));
const RegisterPricingPlan = lazy(() => import('../pages/RegisterPricingPlan'));
const DefaultLayout = lazy(() => import('../layout/DefaultLayout'));
const ManageChatbot = lazy(() => import('../pages/ManageChatbot/index'));
const Chat = lazy(() => import('../pages/Chat'));
const SignUp = lazy(() => import('../pages/Authentication/register/SignUp'));
const Verify = lazy(() => import('../pages/Authentication/verify/Verify'));
const SignIn = lazy(() => import('../pages/Authentication/login/SignIn'));
const ForgotPassword = lazy(() => import('../pages/Authentication/forgot-password/ForgotPassword'));
const ForgotPasswordVerify = lazy(() => import('../pages/Authentication/forgot-passwordVerify/ForgotPasswordVerify'));

const coreRoutes = [
  {
    path: '/auth/forgot-password/:code',
    title: 'ForgotPassword',
    component: ForgotPasswordVerify,
  },
  {
    path: '/auth/forgot-password',
    title: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    path: '/auth/signin/:code',
    title: 'SignIn',
    component: SignIn,
  },
  {
    path: '/auth/signin',
    title: 'SignIn',
    component: SignIn,
  },
  {
    path: '/auth/verify',
    title: 'Verify',
    component: Verify,
  },
  {
    path: '/auth/signup',
    title: 'SignUp',
    component: SignUp,
  },
  {
    path: '/chat/:id',
    title: 'Chat',
    component: Chat,
  },
  {
    path: '/',
    title: 'Manage-chatbot',
    component: ManageChatbot,
    isProtected: true,
    layout: DefaultLayout,
  },
  {
    path: '/build-chatbots',
    title: 'Build-chatbots',
    component: BuildChatbot,
    isProtected: true,
    layout: DefaultLayout,
  },
  {
    path: '/build-chatbots/:id',
    title: 'Build-chatbots',
    component: BuildChatbot,
    isProtected: true,
    layout: DefaultLayout,

  },
  {
    path: '/conversations',
    title: 'Conversations',
    component: Conversations,
    isProtected: true,
    layout: DefaultLayout,

  },
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
    layout: DefaultLayout,
    isProtected: true,
  },
  {
    path: '/settings',
    title: 'Settings',
    component: Settings,
    isProtected: true,
    layout: DefaultLayout,
  },
  {
    path: '/price',
    title: 'PricingPlan',
    component: PricingPlan,
    isProtected: true,
    layout: DefaultLayout,
  },
  {
    path: '/price',
    title: 'PricingPlan',
    component: PricingPlan,
    isProtected: true,
    layout: DefaultLayout,
  },
  {
    path: '/register-pricing-plan',
    title: 'Register-pricing-plan',
    component: RegisterPricingPlan,
  },
  {
    path: '*',
    title: 'Notfound',
    component: Notfound,
  },
];

const routes = [...coreRoutes];
export default routes;