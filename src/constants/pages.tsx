import { AutomationDuoToneBlue, ContactsDuoToneBlue, HomeDuoToneBlue, RocketDuoToneBlue, SettingsDuoToneWhite } from "@/icons";

export const PAGE_BREAD_CRUMBS: string[] = [
  "contacts",
  "automations",
  "integrations",
  "settings",
];

type Props = {
  [page in string]: React.ReactNode
}

export const PAGE_ICON: Props = {
  AUTOMATIONS: <AutomationDuoToneBlue />,
  CONTACTS: <ContactsDuoToneBlue />,
  INTEGRATIONS: <RocketDuoToneBlue />,
  SETTINGS: <SettingsDuoToneWhite />,
  HOME: <HomeDuoToneBlue />,
}

export const PLANS = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started',
    features: [
      'Boost engagement with target responses',
      'Automate comment replies to enhance audience interaction',
      'Turn followers into customers with targeted messaging'
  ],
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'Best for growing businesses',
    features: [
      'All features from Free Plan',
      'AI-powered response generation',
      'Advanced analytics and insights',
      'Priority customer support',
      'Custom branding options'
  ],
  },
]
