import { ThemeProvider } from "@/modules/layout/components/theme-provider";
import { TRPCReactProvider } from "@/trpc/client";
import { HydrateClient, prefetch, trpc } from "@/trpc/server";
import { ReactNode, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export function Providers({ children }: { children: ReactNode }) {
  prefetch(trpc.auth.getMe.queryOptions());

  return (
    <TRPCReactProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <HydrateClient>
          <ErrorBoundary fallback={<p>Error!</p>}>
            <Suspense fallback={<p>Loading...</p>}>
              <NuqsAdapter>{children}</NuqsAdapter>
            </Suspense>
          </ErrorBoundary>
        </HydrateClient>
      </ThemeProvider>
    </TRPCReactProvider>
  );
}
