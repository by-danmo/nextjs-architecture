import chalk from 'chalk';
import * as z from 'zod';

/**
 * Format Error function
 */

const envErrors: Record<string, any[]> = {
    server: [],
    client: []
};

export const formatEnvError = (error: any) => {
    const { issues } = error;
    issues.forEach((issue: Record<string, string>) => {
        envErrors[issue.path[0]].push(
            `${chalk.bold.blue(issue.path[1])} : ${chalk.bold.red(
                `${issue.message} ${chalk.bold.yellow(
                    `( excepted :  ${issue.expected} )`
                )} `
            )} `
        );
    });
    throw new Error(
        `${chalk.bold.red(
            'Error: Invalid env provided\n'
        )}\nThe following variables are missing or invalid ❌:
(ℹ️ Consult the '.env.example' file to see the required variables)\n
 ${Object.entries(envErrors)
     .map(([key, value]) =>
         value.length
             ? `${key} : \n${value.map((item) => `  - ${item}`).join('\n')}`
             : ''
     )
     .join('\n')}`
    );
};

/**
 * Create Environment function
 */
export const $env = {
    server: {
        NODE_ENV: process.env.NODE_ENV,
        TRPC_URL: process.env.TRPC_URL
    },
    client: {
        NEXT_PUBLIC_TRPC_URL: process.env.NEXT_PUBLIC_TRPC_URL
    }
};
const EnvSchema = z.object({
    server: z.object({
        NODE_ENV: z.enum(['development', 'test', 'production']),
        TRPC_URL: z.string().min(1)
    }),
    client: z.object({
        NEXT_PUBLIC_TRPC_URL: z.string().min(1)
    })
});

type InferredEnv = z.infer<typeof EnvSchema>;
type ServerEnv = InferredEnv['server'];
type ClientEnv = InferredEnv['client'];

export interface EnvType extends ServerEnv, ClientEnv {}

export const createEnv = () => {
    const parsedEnv = EnvSchema.safeParse($env);

    try {
        if (!parsedEnv.success) {
            formatEnvError(parsedEnv.error);
        }
    } catch (err: any) {
        console.error(err.message);
        process.exit(1);
    }
};
