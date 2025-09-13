import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "~/lib/react-query";

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * 应用程序的全局 Provider 组件
 * 集中管理所有需要的 context providers
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
