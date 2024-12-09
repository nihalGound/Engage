import { activateAutomation } from "@/actions/automations";
import { Button } from "@/components/ui/button";
import { useMutationData } from "@/hooks/use-mutation-data";
import { useQueryAutomation } from "@/hooks/user-queries";
import { ActiveAutomation } from "@/icons/active-automation";
import { Loader2 } from 'lucide-react';
import React from "react";

type Props = {
  id: string;
};

const ActivateAutomationButton = ({ id }: Props) => {
  const { data } = useQueryAutomation(id);
  const { mutate, isPending } = useMutationData(
    ["activate"],
    (data: { state: boolean }) => activateAutomation(id, data.state),
    "automation-info"
  );

  return (
    <Button
      disabled={isPending}
      onClick={() => mutate({state: !data?.data?.active})}
      className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full text-xs sm:text-sm font-medium transition-colors duration-300"
    >
      {isPending ? (
        <Loader2 className="animate-spin w-4 h-4 sm:w-5 sm:h-5" />
      ) : (
        <ActiveAutomation />
      )}
      <span className="hidden sm:inline ml-2">
        {data?.data?.active ? "Disable" : "Activate"}
      </span>
    </Button>
  );
};

export default ActivateAutomationButton;

