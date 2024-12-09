import { getAllAutomations, getAutomationInfo, getProfilePosts } from "@/actions/automations";
import { onUserInfo } from "@/actions/user";
import { queryInstagramMediaKey, queryUserAutomationKey, queryUserAutomationsKey, queryUserProfileKey } from "@/constants/react-query-variables";
import { useQuery } from "@tanstack/react-query";

export const useQueryAutomations = () => {
  return useQuery({
    queryKey: [queryUserAutomationsKey],
    queryFn: getAllAutomations,
    staleTime: 5000, // How long data remains fresh
  });
};

export const useQueryAutomation = (id: string) => {
  return useQuery({
    queryKey: [queryUserAutomationKey],
    queryFn: () => getAutomationInfo(id),
  });
};

export const useQueryUser = () => {
  return useQuery({
    queryKey: [queryUserProfileKey],
    queryFn: onUserInfo,
  });
};

export const useQueryAutomationPosts = () => {
  const fetchPosts = async () => await getProfilePosts()
  return useQuery({
    queryKey: [queryInstagramMediaKey],
    queryFn: fetchPosts,
  })
}
