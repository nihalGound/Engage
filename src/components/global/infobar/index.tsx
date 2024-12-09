"use client";

import { PAGE_BREAD_CRUMBS } from "@/constants/pages";
import { usePath } from "@/hooks/user-nav";
import React from "react";
import Sheet from "../sheet";
import { Menu } from 'lucide-react';
import { LogoSmall } from "@/svgs/logo-small";
import Items from "../sidebar/items";
import { Separator } from "@/components/ui/separator";
import ClerkAuthState from "../clerk-auth-state";
import { HelpDuoToneWhite } from "@/icons";
import SubscriptionPlan from "../subscription-plan";
import UpgradeCard from "../sidebar/upgrade";
import Search from "./search";
import CreateAutomation from "../create-automation";
import { Notifications } from "./notifications";
import MainBreadCrumb from "../bread-crumbs/main-bread-crumb";
import { ModeToggle } from "@/app/(website)/_components/dark-mode-toggle";

type Props = {
  slug: string;
};

const InfoBar = ({ slug }: Props) => {
  const { page } = usePath();
  const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page === slug;

  if (!currentPage) return null;

  return (
    <div className="flex flex-col space-y-6 p-4  rounded-2xl shadow-lg">
      <div className="flex gap-x-3 lg:gap-x-5 justify-between items-center  ">
        <MobileSidebar page={page} slug={slug} />
        <Search />
        <div className="flex items-center space-x-4">
          <CreateAutomation />
          <Notifications />
        </div>
      </div>
      <MainBreadCrumb page={page === slug ? "Home" : page} slug={slug} />
    </div>
  );
};

export const MobileSidebar = ({ page, slug }: { page: string; slug: string }) => (
  <span className="lg:hidden flex items-center flex-1 gap-x-2">
    <Sheet trigger={<Menu className="text-black dark:text-white hover:text-indigo-300 transition-colors duration-200" />} className="lg:hidden" side="left">
      <div className="flex flex-col gap-y-5 w-full h-full p-3 border-gray-700 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 bg-clip-padding backdrop-filter backdrop-blur-3xl">
        <div className="flex items-center justify-center p-4">
          <LogoSmall />
        </div>
        <nav className="flex-1">
          <Items page={page} slug={slug} />
        </nav>
        <Separator orientation="horizontal" className="bg-gray-600 opacity-50" />
        <div className="space-y-4">
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
    </Sheet>
  </span>
);

export default InfoBar;

