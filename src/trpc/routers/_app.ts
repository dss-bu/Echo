import { workspaceRoutes } from "@/modules/workspaces/server/routers";
import { createTRPCRouter } from "../init";
import { authRoutes } from "@/modules/auth/server/routers";
export const appRouter = createTRPCRouter({
  auth: authRoutes,
  workspaces: workspaceRoutes,
});
// export type definition of API
export type AppRouter = typeof appRouter;
