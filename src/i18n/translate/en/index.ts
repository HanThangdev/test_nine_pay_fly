/* eslint-disable import/no-anonymous-default-export */
import configBot from './config_bot.json';
import manageBot from './manage_bot.json';
import conversation from './conversation.json';
import pricingPlan from './pricing_plan.json';
import common from './common.json';
import privacyPolicy from './privacy_policy.json';
import termOfService from './term_of_service.json';

export default {
  config_bot: configBot,
  manage_bot: manageBot,
  conversation,
  pricing_plan: pricingPlan,
  common,
  privacy_policy: privacyPolicy,
  term_of_service: termOfService,
};
