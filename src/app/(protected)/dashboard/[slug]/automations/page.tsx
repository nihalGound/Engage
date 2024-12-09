import AutomationList from "@/components/global/automation-list";
import CreateAutomation from "@/components/global/create-automation";
import { PrefetchUserAutomations } from "@/react-query/prefetch";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Check } from "lucide-react";
import React from "react";

const Page =async () => {
  const client = new QueryClient();
  await PrefetchUserAutomations(client)
  return (
    <HydrationBoundary state={dehydrate(client)}>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
        <div className="lg:col-span-4">
          <AutomationList />
        </div>
        <div className="lg:col-span-2">
          <div className="flex flex-col rounded-xl bg-gradient-to-b from-indigo-900/30 to-purple-900/30 backdrop-filter backdrop-blur-lg gap-y-6 p-5 border border-indigo-500/30 overflow-hidden">
            <div>
              <h2 className="text-xl text-white font-semibold mb-2">
                Automations
              </h2>
              <p className="text-indigo-200 text-sm">
                Your live automations will show here.
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-start justify-between bg-white/5 rounded-lg p-3 transition-colors hover:bg-white/10"
                >
                  <div className="flex flex-col">
                    <h3 className="font-medium text-white">
                      Direct traffic towards website
                    </h3>
                    <p className="text-indigo-200 text-xs">October 5th 2024</p>
                  </div>
                  <Check className="text-indigo-400" />
                </div>
              ))}
            </div>
            <CreateAutomation />
          </div>
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default Page;
