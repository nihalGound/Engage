"use client";

import { usePath } from "@/hooks/user-nav";
import { LogoSmall } from "@/svgs/logo-small";
import Items from "./items";
import { Separator } from "@/components/ui/separator";
import ClerkAuthState from "../clerk-auth-state";
import { HelpDuoToneWhite } from "@/icons";
import SubscriptionPlan from "../subscription-plan";
import UpgradeCard from "./upgrade";
import { ModeToggle } from "@/app/(website)/_components/dark-mode-toggle";

type Props = {
  slug: string;
};

const Sidebar = ({ slug }: Props) => {
  const { page } = usePath();

  return (
    <div
      className="w-64 
    border-[1px]
    fixed 
    left-0 
    lg:inline-block
    border-gray-700 
    bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 
    hidden 
    bottom-0 
    overflow-hidden
    top-0 
    m-4 
    rounded-2xl 
    shadow-lg
    transition-all duration-300 ease-in-out
    hover:shadow-2xl hover:scale-[1.02]
    backdrop-filter backdrop-blur-md"
    >
      <div
        className="flex flex-col 
      gap-y-4
       w-full 
       h-full 
       p-4 
       bg-black/30
       backdrop-filter 
       backdrop-blur-sm"
      >
        <div className="flex items-center justify-center p-4">
          <LogoSmall />
        </div>
        <nav className="flex-1">
          <Items page={page} slug={slug} />
        </nav>
        <Separator
          orientation="horizontal"
          className="bg-gray-600 opacity-50"
        />
        <div className="space-y-2">
          <div className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
            <ClerkAuthState />
            <p className="text-gray-200">Profile</p>
          </div>
          <div className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
            <HelpDuoToneWhite />
            <p className="text-gray-200">Help</p>
          </div>
          <div className="flex items-center space-x-3 px-4 py-2 rounded-lg  transition-colors">
            <ModeToggle />
            <p className="text-gray-200">Theme</p>
          </div>
        </div>
        <SubscriptionPlan type="FREE">
          <div className="mt-auto">
            <UpgradeCard />
          </div>
        </SubscriptionPlan>
      </div>
    </div>
  );
};

export default Sidebar;
