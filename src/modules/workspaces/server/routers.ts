import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { z } from "zod";
import { PAGINATION } from "@/config/constants";

import prisma from "@/lib/prisma";

export const workspaceRoutes = createTRPCRouter({
  getMany: protectedProcedure
    .input(
      z.object({
        page: z.number().default(PAGINATION.DEFAULT_PAGE),
        pageSize: z
          .number()
          .min(PAGINATION.MIN_PAGE_SIZE)
          .max(PAGINATION.MAX_PAGE_SIZE)
          .default(PAGINATION.DEFAULT_PAGE_SIZE),
        search: z.string().default(""),
      })
    )
    .query(async ({ ctx, input }) => {
      const { page, pageSize, search } = input;

      const [workspaces, totalCount] = await Promise.all([
        prisma.workspace.findMany({
          skip: (page - 1) * pageSize,
          take: pageSize,
          where: {
            ownerId: ctx.auth.user?.id,
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
          orderBy: {
            updatedAt: "desc",
          },
        }),
        prisma.workspace.count({
          where: {
            ownerId: ctx.auth.user?.id,
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
        }),
      ]);

      const totalPages = Math.ceil(totalCount / pageSize);
      const hasNextPage = page < totalPages;
      const hasPreviousPage = page > 1;

      return {
        workspaces,
        page,
        pageSize,
        totalCount,
        totalPages,
        hasNextPage,
        hasPreviousPage,
      };
    }),
});
