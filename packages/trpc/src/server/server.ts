import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  helloMyApp: t.router({
    getHelloApp: publicProcedure.input(z.object({
      name: z.string().min(2).max(100),
    })).output(z.string()).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    createHelloApp: publicProcedure.input(z.object({
      name: z.string().min(2).max(100),
    })).output(z.object({
      name: z.string().min(2).max(100),
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

