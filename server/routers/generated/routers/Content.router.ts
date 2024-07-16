/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input($Schema.ContentInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).content.aggregate(input as any))),

        deleteMany: procedure.input($Schema.ContentInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).content.deleteMany(input as any))),

        delete: procedure.input($Schema.ContentInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).content.delete(input as any))),

        findFirst: procedure.input($Schema.ContentInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).content.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.ContentInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).content.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.ContentInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).content.findMany(input as any))),

        findUnique: procedure.input($Schema.ContentInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).content.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.ContentInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).content.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.ContentInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).content.groupBy(input as any))),

        updateMany: procedure.input($Schema.ContentInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).content.updateMany(input as any))),

        update: procedure.input($Schema.ContentInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).content.update(input as any))),

        count: procedure.input($Schema.ContentInputSchema.count).query(({ ctx, input }) => checkRead(db(ctx).content.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {

        useQuery: <T extends Prisma.ContentAggregateArgs, TData = Prisma.GetContentAggregateType<T>>(
            input: Prisma.Subset<T, Prisma.ContentAggregateArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.GetContentAggregateType<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContentAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.ContentAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetContentAggregateType<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.GetContentAggregateType<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    deleteMany: {

        useMutation: <T extends Prisma.ContentDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContentDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContentDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContentDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ContentDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContentDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContentDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContentDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContentGetPayload<T>, Context>) => Promise<Prisma.ContentGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ContentFindFirstArgs, TData = Prisma.ContentGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ContentFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ContentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContentFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ContentFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ContentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ContentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findFirstOrThrow: {

        useQuery: <T extends Prisma.ContentFindFirstOrThrowArgs, TData = Prisma.ContentGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ContentFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ContentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContentFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ContentFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ContentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ContentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ContentFindManyArgs, TData = Array<Prisma.ContentGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ContentFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ContentGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContentFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ContentFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ContentGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ContentGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ContentFindUniqueArgs, TData = Prisma.ContentGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ContentFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ContentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContentFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ContentFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ContentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ContentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUniqueOrThrow: {

        useQuery: <T extends Prisma.ContentFindUniqueOrThrowArgs, TData = Prisma.ContentGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ContentFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ContentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContentFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ContentFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ContentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ContentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    groupBy: {

        useQuery: <T extends Prisma.ContentGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.ContentGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.ContentGroupByArgs['orderBy'] },
            OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
            ByValid extends Prisma.Has<ByFields, OrderFields>,
            HavingFields extends Prisma.GetHavingFields<T['having']>,
            HavingValid extends Prisma.Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
            InputErrors extends ByEmpty extends Prisma.True
            ? `Error: "by" must not be empty.`
            : HavingValid extends Prisma.False
            ? {
                [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                : [
                    Error,
                    'Field ',
                    P,
                    ` in "having" needs to be provided in "by"`,
                ]
            }[HavingFields]
            : 'take' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
            : ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            , TData = {} extends InputErrors ? Prisma.GetContentGroupByPayload<T> : InputErrors>(
                input: Prisma.SubsetIntersection<T, Prisma.ContentGroupByArgs, OrderByArg> & InputErrors,
                opts?: UseTRPCQueryOptions<string, T, {} extends InputErrors ? Prisma.GetContentGroupByPayload<T> : InputErrors, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ContentGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.ContentGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.ContentGroupByArgs['orderBy'] },
            OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
            ByValid extends Prisma.Has<ByFields, OrderFields>,
            HavingFields extends Prisma.GetHavingFields<T['having']>,
            HavingValid extends Prisma.Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
            InputErrors extends ByEmpty extends Prisma.True
            ? `Error: "by" must not be empty.`
            : HavingValid extends Prisma.False
            ? {
                [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                : [
                    Error,
                    'Field ',
                    P,
                    ` in "having" needs to be provided in "by"`,
                ]
            }[HavingFields]
            : 'take' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
            : ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        >(
            input: Omit<Prisma.SubsetIntersection<T, Prisma.ContentGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, {} extends InputErrors ? Prisma.GetContentGroupByPayload<T> : InputErrors, Error>
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetContentGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ContentUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContentUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContentUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContentUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ContentUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContentUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContentUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContentUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContentGetPayload<T>, Context>) => Promise<Prisma.ContentGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.ContentCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ContentCountAggregateOutputType>
            : number>(
                input: Prisma.Subset<T, Prisma.ContentCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ContentCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ContentCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.ContentCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ContentCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ContentCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
