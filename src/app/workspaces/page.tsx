// import { useQueryStates } from "nuqs";
// import { useTRPC } from "@/trpc/client";
// import { useSuspenseQuery } from "@tanstack/react-query";
import { workspaceParams } from "@/modules/workspaces/lib/params";
import { createLoader, SearchParams } from "nuqs/server";
import { HydrateClient, prefetch, trpc } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) => {
  const params = createLoader(workspaceParams)(await searchParams);
  prefetch(trpc.workspaces.getMany.queryOptions(params));
  // const trpc = useTRPC();
  // const [params] = useQueryStates(workspaceParams);

  // const { data } = useSuspenseQuery(
  //   trpc.workspaces.getMany.queryOptions(params)
  // );

  return (
    <HydrateClient>
      <ErrorBoundary fallback={<p>Error!</p>}>
        <Suspense fallback={<p>Loading...</p>}>
          <pre>{params.page}</pre>
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  );
};

export default Page;
