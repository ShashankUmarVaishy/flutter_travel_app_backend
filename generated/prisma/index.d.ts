
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Banquet_Bid
 * 
 */
export type Banquet_Bid = $Result.DefaultSelection<Prisma.$Banquet_BidPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Banquet_Bids
 * const banquet_Bids = await prisma.banquet_Bid.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Banquet_Bids
   * const banquet_Bids = await prisma.banquet_Bid.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.banquet_Bid`: Exposes CRUD operations for the **Banquet_Bid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banquet_Bids
    * const banquet_Bids = await prisma.banquet_Bid.findMany()
    * ```
    */
  get banquet_Bid(): Prisma.Banquet_BidDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Banquet_Bid: 'Banquet_Bid'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "banquet_Bid"
      txIsolationLevel: never
    }
    model: {
      Banquet_Bid: {
        payload: Prisma.$Banquet_BidPayload<ExtArgs>
        fields: Prisma.Banquet_BidFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Banquet_BidFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Banquet_BidPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Banquet_BidFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Banquet_BidPayload>
          }
          findFirst: {
            args: Prisma.Banquet_BidFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Banquet_BidPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Banquet_BidFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Banquet_BidPayload>
          }
          findMany: {
            args: Prisma.Banquet_BidFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Banquet_BidPayload>[]
          }
          create: {
            args: Prisma.Banquet_BidCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Banquet_BidPayload>
          }
          createMany: {
            args: Prisma.Banquet_BidCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Banquet_BidDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Banquet_BidPayload>
          }
          update: {
            args: Prisma.Banquet_BidUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Banquet_BidPayload>
          }
          deleteMany: {
            args: Prisma.Banquet_BidDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Banquet_BidUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Banquet_BidUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Banquet_BidPayload>
          }
          aggregate: {
            args: Prisma.Banquet_BidAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanquet_Bid>
          }
          groupBy: {
            args: Prisma.Banquet_BidGroupByArgs<ExtArgs>
            result: $Utils.Optional<Banquet_BidGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.Banquet_BidFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.Banquet_BidAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.Banquet_BidCountArgs<ExtArgs>
            result: $Utils.Optional<Banquet_BidCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    banquet_Bid?: Banquet_BidOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Banquet_Bid
   */

  export type AggregateBanquet_Bid = {
    _count: Banquet_BidCountAggregateOutputType | null
    _avg: Banquet_BidAvgAggregateOutputType | null
    _sum: Banquet_BidSumAggregateOutputType | null
    _min: Banquet_BidMinAggregateOutputType | null
    _max: Banquet_BidMaxAggregateOutputType | null
  }

  export type Banquet_BidAvgAggregateOutputType = {
    AdultCount: number | null
    BudgetAmount: number | null
  }

  export type Banquet_BidSumAggregateOutputType = {
    AdultCount: number | null
    BudgetAmount: number | null
  }

  export type Banquet_BidMinAggregateOutputType = {
    id: string | null
    EventType: string | null
    Country: string | null
    State: string | null
    City: string | null
    AdultCount: number | null
    CateringPreference: string | null
    Cuisine: string | null
    BudgetAmount: number | null
    AmountCurrency: string | null
    OffersWithin: string | null
  }

  export type Banquet_BidMaxAggregateOutputType = {
    id: string | null
    EventType: string | null
    Country: string | null
    State: string | null
    City: string | null
    AdultCount: number | null
    CateringPreference: string | null
    Cuisine: string | null
    BudgetAmount: number | null
    AmountCurrency: string | null
    OffersWithin: string | null
  }

  export type Banquet_BidCountAggregateOutputType = {
    id: number
    EventType: number
    Country: number
    State: number
    City: number
    Dates: number
    AdultCount: number
    CateringPreference: number
    Cuisine: number
    BudgetAmount: number
    AmountCurrency: number
    OffersWithin: number
    _all: number
  }


  export type Banquet_BidAvgAggregateInputType = {
    AdultCount?: true
    BudgetAmount?: true
  }

  export type Banquet_BidSumAggregateInputType = {
    AdultCount?: true
    BudgetAmount?: true
  }

  export type Banquet_BidMinAggregateInputType = {
    id?: true
    EventType?: true
    Country?: true
    State?: true
    City?: true
    AdultCount?: true
    CateringPreference?: true
    Cuisine?: true
    BudgetAmount?: true
    AmountCurrency?: true
    OffersWithin?: true
  }

  export type Banquet_BidMaxAggregateInputType = {
    id?: true
    EventType?: true
    Country?: true
    State?: true
    City?: true
    AdultCount?: true
    CateringPreference?: true
    Cuisine?: true
    BudgetAmount?: true
    AmountCurrency?: true
    OffersWithin?: true
  }

  export type Banquet_BidCountAggregateInputType = {
    id?: true
    EventType?: true
    Country?: true
    State?: true
    City?: true
    Dates?: true
    AdultCount?: true
    CateringPreference?: true
    Cuisine?: true
    BudgetAmount?: true
    AmountCurrency?: true
    OffersWithin?: true
    _all?: true
  }

  export type Banquet_BidAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banquet_Bid to aggregate.
     */
    where?: Banquet_BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banquet_Bids to fetch.
     */
    orderBy?: Banquet_BidOrderByWithRelationInput | Banquet_BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Banquet_BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banquet_Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banquet_Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banquet_Bids
    **/
    _count?: true | Banquet_BidCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Banquet_BidAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Banquet_BidSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Banquet_BidMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Banquet_BidMaxAggregateInputType
  }

  export type GetBanquet_BidAggregateType<T extends Banquet_BidAggregateArgs> = {
        [P in keyof T & keyof AggregateBanquet_Bid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanquet_Bid[P]>
      : GetScalarType<T[P], AggregateBanquet_Bid[P]>
  }




  export type Banquet_BidGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Banquet_BidWhereInput
    orderBy?: Banquet_BidOrderByWithAggregationInput | Banquet_BidOrderByWithAggregationInput[]
    by: Banquet_BidScalarFieldEnum[] | Banquet_BidScalarFieldEnum
    having?: Banquet_BidScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Banquet_BidCountAggregateInputType | true
    _avg?: Banquet_BidAvgAggregateInputType
    _sum?: Banquet_BidSumAggregateInputType
    _min?: Banquet_BidMinAggregateInputType
    _max?: Banquet_BidMaxAggregateInputType
  }

  export type Banquet_BidGroupByOutputType = {
    id: string
    EventType: string
    Country: string
    State: string
    City: string
    Dates: Date[]
    AdultCount: number
    CateringPreference: string
    Cuisine: string
    BudgetAmount: number
    AmountCurrency: string
    OffersWithin: string
    _count: Banquet_BidCountAggregateOutputType | null
    _avg: Banquet_BidAvgAggregateOutputType | null
    _sum: Banquet_BidSumAggregateOutputType | null
    _min: Banquet_BidMinAggregateOutputType | null
    _max: Banquet_BidMaxAggregateOutputType | null
  }

  type GetBanquet_BidGroupByPayload<T extends Banquet_BidGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Banquet_BidGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Banquet_BidGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Banquet_BidGroupByOutputType[P]>
            : GetScalarType<T[P], Banquet_BidGroupByOutputType[P]>
        }
      >
    >


  export type Banquet_BidSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    EventType?: boolean
    Country?: boolean
    State?: boolean
    City?: boolean
    Dates?: boolean
    AdultCount?: boolean
    CateringPreference?: boolean
    Cuisine?: boolean
    BudgetAmount?: boolean
    AmountCurrency?: boolean
    OffersWithin?: boolean
  }, ExtArgs["result"]["banquet_Bid"]>



  export type Banquet_BidSelectScalar = {
    id?: boolean
    EventType?: boolean
    Country?: boolean
    State?: boolean
    City?: boolean
    Dates?: boolean
    AdultCount?: boolean
    CateringPreference?: boolean
    Cuisine?: boolean
    BudgetAmount?: boolean
    AmountCurrency?: boolean
    OffersWithin?: boolean
  }

  export type Banquet_BidOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "EventType" | "Country" | "State" | "City" | "Dates" | "AdultCount" | "CateringPreference" | "Cuisine" | "BudgetAmount" | "AmountCurrency" | "OffersWithin", ExtArgs["result"]["banquet_Bid"]>

  export type $Banquet_BidPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Banquet_Bid"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      EventType: string
      Country: string
      State: string
      City: string
      Dates: Date[]
      AdultCount: number
      CateringPreference: string
      Cuisine: string
      BudgetAmount: number
      AmountCurrency: string
      OffersWithin: string
    }, ExtArgs["result"]["banquet_Bid"]>
    composites: {}
  }

  type Banquet_BidGetPayload<S extends boolean | null | undefined | Banquet_BidDefaultArgs> = $Result.GetResult<Prisma.$Banquet_BidPayload, S>

  type Banquet_BidCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Banquet_BidFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Banquet_BidCountAggregateInputType | true
    }

  export interface Banquet_BidDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Banquet_Bid'], meta: { name: 'Banquet_Bid' } }
    /**
     * Find zero or one Banquet_Bid that matches the filter.
     * @param {Banquet_BidFindUniqueArgs} args - Arguments to find a Banquet_Bid
     * @example
     * // Get one Banquet_Bid
     * const banquet_Bid = await prisma.banquet_Bid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Banquet_BidFindUniqueArgs>(args: SelectSubset<T, Banquet_BidFindUniqueArgs<ExtArgs>>): Prisma__Banquet_BidClient<$Result.GetResult<Prisma.$Banquet_BidPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Banquet_Bid that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Banquet_BidFindUniqueOrThrowArgs} args - Arguments to find a Banquet_Bid
     * @example
     * // Get one Banquet_Bid
     * const banquet_Bid = await prisma.banquet_Bid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Banquet_BidFindUniqueOrThrowArgs>(args: SelectSubset<T, Banquet_BidFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Banquet_BidClient<$Result.GetResult<Prisma.$Banquet_BidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banquet_Bid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Banquet_BidFindFirstArgs} args - Arguments to find a Banquet_Bid
     * @example
     * // Get one Banquet_Bid
     * const banquet_Bid = await prisma.banquet_Bid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Banquet_BidFindFirstArgs>(args?: SelectSubset<T, Banquet_BidFindFirstArgs<ExtArgs>>): Prisma__Banquet_BidClient<$Result.GetResult<Prisma.$Banquet_BidPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banquet_Bid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Banquet_BidFindFirstOrThrowArgs} args - Arguments to find a Banquet_Bid
     * @example
     * // Get one Banquet_Bid
     * const banquet_Bid = await prisma.banquet_Bid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Banquet_BidFindFirstOrThrowArgs>(args?: SelectSubset<T, Banquet_BidFindFirstOrThrowArgs<ExtArgs>>): Prisma__Banquet_BidClient<$Result.GetResult<Prisma.$Banquet_BidPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banquet_Bids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Banquet_BidFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banquet_Bids
     * const banquet_Bids = await prisma.banquet_Bid.findMany()
     * 
     * // Get first 10 Banquet_Bids
     * const banquet_Bids = await prisma.banquet_Bid.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const banquet_BidWithIdOnly = await prisma.banquet_Bid.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Banquet_BidFindManyArgs>(args?: SelectSubset<T, Banquet_BidFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Banquet_BidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Banquet_Bid.
     * @param {Banquet_BidCreateArgs} args - Arguments to create a Banquet_Bid.
     * @example
     * // Create one Banquet_Bid
     * const Banquet_Bid = await prisma.banquet_Bid.create({
     *   data: {
     *     // ... data to create a Banquet_Bid
     *   }
     * })
     * 
     */
    create<T extends Banquet_BidCreateArgs>(args: SelectSubset<T, Banquet_BidCreateArgs<ExtArgs>>): Prisma__Banquet_BidClient<$Result.GetResult<Prisma.$Banquet_BidPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banquet_Bids.
     * @param {Banquet_BidCreateManyArgs} args - Arguments to create many Banquet_Bids.
     * @example
     * // Create many Banquet_Bids
     * const banquet_Bid = await prisma.banquet_Bid.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Banquet_BidCreateManyArgs>(args?: SelectSubset<T, Banquet_BidCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Banquet_Bid.
     * @param {Banquet_BidDeleteArgs} args - Arguments to delete one Banquet_Bid.
     * @example
     * // Delete one Banquet_Bid
     * const Banquet_Bid = await prisma.banquet_Bid.delete({
     *   where: {
     *     // ... filter to delete one Banquet_Bid
     *   }
     * })
     * 
     */
    delete<T extends Banquet_BidDeleteArgs>(args: SelectSubset<T, Banquet_BidDeleteArgs<ExtArgs>>): Prisma__Banquet_BidClient<$Result.GetResult<Prisma.$Banquet_BidPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Banquet_Bid.
     * @param {Banquet_BidUpdateArgs} args - Arguments to update one Banquet_Bid.
     * @example
     * // Update one Banquet_Bid
     * const banquet_Bid = await prisma.banquet_Bid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Banquet_BidUpdateArgs>(args: SelectSubset<T, Banquet_BidUpdateArgs<ExtArgs>>): Prisma__Banquet_BidClient<$Result.GetResult<Prisma.$Banquet_BidPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banquet_Bids.
     * @param {Banquet_BidDeleteManyArgs} args - Arguments to filter Banquet_Bids to delete.
     * @example
     * // Delete a few Banquet_Bids
     * const { count } = await prisma.banquet_Bid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Banquet_BidDeleteManyArgs>(args?: SelectSubset<T, Banquet_BidDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banquet_Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Banquet_BidUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banquet_Bids
     * const banquet_Bid = await prisma.banquet_Bid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Banquet_BidUpdateManyArgs>(args: SelectSubset<T, Banquet_BidUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Banquet_Bid.
     * @param {Banquet_BidUpsertArgs} args - Arguments to update or create a Banquet_Bid.
     * @example
     * // Update or create a Banquet_Bid
     * const banquet_Bid = await prisma.banquet_Bid.upsert({
     *   create: {
     *     // ... data to create a Banquet_Bid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banquet_Bid we want to update
     *   }
     * })
     */
    upsert<T extends Banquet_BidUpsertArgs>(args: SelectSubset<T, Banquet_BidUpsertArgs<ExtArgs>>): Prisma__Banquet_BidClient<$Result.GetResult<Prisma.$Banquet_BidPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banquet_Bids that matches the filter.
     * @param {Banquet_BidFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const banquet_Bid = await prisma.banquet_Bid.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: Banquet_BidFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Banquet_Bid.
     * @param {Banquet_BidAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const banquet_Bid = await prisma.banquet_Bid.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: Banquet_BidAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Banquet_Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Banquet_BidCountArgs} args - Arguments to filter Banquet_Bids to count.
     * @example
     * // Count the number of Banquet_Bids
     * const count = await prisma.banquet_Bid.count({
     *   where: {
     *     // ... the filter for the Banquet_Bids we want to count
     *   }
     * })
    **/
    count<T extends Banquet_BidCountArgs>(
      args?: Subset<T, Banquet_BidCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Banquet_BidCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banquet_Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Banquet_BidAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Banquet_BidAggregateArgs>(args: Subset<T, Banquet_BidAggregateArgs>): Prisma.PrismaPromise<GetBanquet_BidAggregateType<T>>

    /**
     * Group by Banquet_Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Banquet_BidGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Banquet_BidGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Banquet_BidGroupByArgs['orderBy'] }
        : { orderBy?: Banquet_BidGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
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
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Banquet_BidGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBanquet_BidGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Banquet_Bid model
   */
  readonly fields: Banquet_BidFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banquet_Bid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Banquet_BidClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Banquet_Bid model
   */
  interface Banquet_BidFieldRefs {
    readonly id: FieldRef<"Banquet_Bid", 'String'>
    readonly EventType: FieldRef<"Banquet_Bid", 'String'>
    readonly Country: FieldRef<"Banquet_Bid", 'String'>
    readonly State: FieldRef<"Banquet_Bid", 'String'>
    readonly City: FieldRef<"Banquet_Bid", 'String'>
    readonly Dates: FieldRef<"Banquet_Bid", 'DateTime[]'>
    readonly AdultCount: FieldRef<"Banquet_Bid", 'Int'>
    readonly CateringPreference: FieldRef<"Banquet_Bid", 'String'>
    readonly Cuisine: FieldRef<"Banquet_Bid", 'String'>
    readonly BudgetAmount: FieldRef<"Banquet_Bid", 'Int'>
    readonly AmountCurrency: FieldRef<"Banquet_Bid", 'String'>
    readonly OffersWithin: FieldRef<"Banquet_Bid", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Banquet_Bid findUnique
   */
  export type Banquet_BidFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banquet_Bid
     */
    select?: Banquet_BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet_Bid
     */
    omit?: Banquet_BidOmit<ExtArgs> | null
    /**
     * Filter, which Banquet_Bid to fetch.
     */
    where: Banquet_BidWhereUniqueInput
  }

  /**
   * Banquet_Bid findUniqueOrThrow
   */
  export type Banquet_BidFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banquet_Bid
     */
    select?: Banquet_BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet_Bid
     */
    omit?: Banquet_BidOmit<ExtArgs> | null
    /**
     * Filter, which Banquet_Bid to fetch.
     */
    where: Banquet_BidWhereUniqueInput
  }

  /**
   * Banquet_Bid findFirst
   */
  export type Banquet_BidFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banquet_Bid
     */
    select?: Banquet_BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet_Bid
     */
    omit?: Banquet_BidOmit<ExtArgs> | null
    /**
     * Filter, which Banquet_Bid to fetch.
     */
    where?: Banquet_BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banquet_Bids to fetch.
     */
    orderBy?: Banquet_BidOrderByWithRelationInput | Banquet_BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banquet_Bids.
     */
    cursor?: Banquet_BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banquet_Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banquet_Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banquet_Bids.
     */
    distinct?: Banquet_BidScalarFieldEnum | Banquet_BidScalarFieldEnum[]
  }

  /**
   * Banquet_Bid findFirstOrThrow
   */
  export type Banquet_BidFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banquet_Bid
     */
    select?: Banquet_BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet_Bid
     */
    omit?: Banquet_BidOmit<ExtArgs> | null
    /**
     * Filter, which Banquet_Bid to fetch.
     */
    where?: Banquet_BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banquet_Bids to fetch.
     */
    orderBy?: Banquet_BidOrderByWithRelationInput | Banquet_BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banquet_Bids.
     */
    cursor?: Banquet_BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banquet_Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banquet_Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banquet_Bids.
     */
    distinct?: Banquet_BidScalarFieldEnum | Banquet_BidScalarFieldEnum[]
  }

  /**
   * Banquet_Bid findMany
   */
  export type Banquet_BidFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banquet_Bid
     */
    select?: Banquet_BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet_Bid
     */
    omit?: Banquet_BidOmit<ExtArgs> | null
    /**
     * Filter, which Banquet_Bids to fetch.
     */
    where?: Banquet_BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banquet_Bids to fetch.
     */
    orderBy?: Banquet_BidOrderByWithRelationInput | Banquet_BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banquet_Bids.
     */
    cursor?: Banquet_BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banquet_Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banquet_Bids.
     */
    skip?: number
    distinct?: Banquet_BidScalarFieldEnum | Banquet_BidScalarFieldEnum[]
  }

  /**
   * Banquet_Bid create
   */
  export type Banquet_BidCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banquet_Bid
     */
    select?: Banquet_BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet_Bid
     */
    omit?: Banquet_BidOmit<ExtArgs> | null
    /**
     * The data needed to create a Banquet_Bid.
     */
    data: XOR<Banquet_BidCreateInput, Banquet_BidUncheckedCreateInput>
  }

  /**
   * Banquet_Bid createMany
   */
  export type Banquet_BidCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banquet_Bids.
     */
    data: Banquet_BidCreateManyInput | Banquet_BidCreateManyInput[]
  }

  /**
   * Banquet_Bid update
   */
  export type Banquet_BidUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banquet_Bid
     */
    select?: Banquet_BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet_Bid
     */
    omit?: Banquet_BidOmit<ExtArgs> | null
    /**
     * The data needed to update a Banquet_Bid.
     */
    data: XOR<Banquet_BidUpdateInput, Banquet_BidUncheckedUpdateInput>
    /**
     * Choose, which Banquet_Bid to update.
     */
    where: Banquet_BidWhereUniqueInput
  }

  /**
   * Banquet_Bid updateMany
   */
  export type Banquet_BidUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banquet_Bids.
     */
    data: XOR<Banquet_BidUpdateManyMutationInput, Banquet_BidUncheckedUpdateManyInput>
    /**
     * Filter which Banquet_Bids to update
     */
    where?: Banquet_BidWhereInput
    /**
     * Limit how many Banquet_Bids to update.
     */
    limit?: number
  }

  /**
   * Banquet_Bid upsert
   */
  export type Banquet_BidUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banquet_Bid
     */
    select?: Banquet_BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet_Bid
     */
    omit?: Banquet_BidOmit<ExtArgs> | null
    /**
     * The filter to search for the Banquet_Bid to update in case it exists.
     */
    where: Banquet_BidWhereUniqueInput
    /**
     * In case the Banquet_Bid found by the `where` argument doesn't exist, create a new Banquet_Bid with this data.
     */
    create: XOR<Banquet_BidCreateInput, Banquet_BidUncheckedCreateInput>
    /**
     * In case the Banquet_Bid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Banquet_BidUpdateInput, Banquet_BidUncheckedUpdateInput>
  }

  /**
   * Banquet_Bid delete
   */
  export type Banquet_BidDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banquet_Bid
     */
    select?: Banquet_BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet_Bid
     */
    omit?: Banquet_BidOmit<ExtArgs> | null
    /**
     * Filter which Banquet_Bid to delete.
     */
    where: Banquet_BidWhereUniqueInput
  }

  /**
   * Banquet_Bid deleteMany
   */
  export type Banquet_BidDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banquet_Bids to delete
     */
    where?: Banquet_BidWhereInput
    /**
     * Limit how many Banquet_Bids to delete.
     */
    limit?: number
  }

  /**
   * Banquet_Bid findRaw
   */
  export type Banquet_BidFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Banquet_Bid aggregateRaw
   */
  export type Banquet_BidAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Banquet_Bid without action
   */
  export type Banquet_BidDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banquet_Bid
     */
    select?: Banquet_BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banquet_Bid
     */
    omit?: Banquet_BidOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const Banquet_BidScalarFieldEnum: {
    id: 'id',
    EventType: 'EventType',
    Country: 'Country',
    State: 'State',
    City: 'City',
    Dates: 'Dates',
    AdultCount: 'AdultCount',
    CateringPreference: 'CateringPreference',
    Cuisine: 'Cuisine',
    BudgetAmount: 'BudgetAmount',
    AmountCurrency: 'AmountCurrency',
    OffersWithin: 'OffersWithin'
  };

  export type Banquet_BidScalarFieldEnum = (typeof Banquet_BidScalarFieldEnum)[keyof typeof Banquet_BidScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type Banquet_BidWhereInput = {
    AND?: Banquet_BidWhereInput | Banquet_BidWhereInput[]
    OR?: Banquet_BidWhereInput[]
    NOT?: Banquet_BidWhereInput | Banquet_BidWhereInput[]
    id?: StringFilter<"Banquet_Bid"> | string
    EventType?: StringFilter<"Banquet_Bid"> | string
    Country?: StringFilter<"Banquet_Bid"> | string
    State?: StringFilter<"Banquet_Bid"> | string
    City?: StringFilter<"Banquet_Bid"> | string
    Dates?: DateTimeNullableListFilter<"Banquet_Bid">
    AdultCount?: IntFilter<"Banquet_Bid"> | number
    CateringPreference?: StringFilter<"Banquet_Bid"> | string
    Cuisine?: StringFilter<"Banquet_Bid"> | string
    BudgetAmount?: IntFilter<"Banquet_Bid"> | number
    AmountCurrency?: StringFilter<"Banquet_Bid"> | string
    OffersWithin?: StringFilter<"Banquet_Bid"> | string
  }

  export type Banquet_BidOrderByWithRelationInput = {
    id?: SortOrder
    EventType?: SortOrder
    Country?: SortOrder
    State?: SortOrder
    City?: SortOrder
    Dates?: SortOrder
    AdultCount?: SortOrder
    CateringPreference?: SortOrder
    Cuisine?: SortOrder
    BudgetAmount?: SortOrder
    AmountCurrency?: SortOrder
    OffersWithin?: SortOrder
  }

  export type Banquet_BidWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Banquet_BidWhereInput | Banquet_BidWhereInput[]
    OR?: Banquet_BidWhereInput[]
    NOT?: Banquet_BidWhereInput | Banquet_BidWhereInput[]
    EventType?: StringFilter<"Banquet_Bid"> | string
    Country?: StringFilter<"Banquet_Bid"> | string
    State?: StringFilter<"Banquet_Bid"> | string
    City?: StringFilter<"Banquet_Bid"> | string
    Dates?: DateTimeNullableListFilter<"Banquet_Bid">
    AdultCount?: IntFilter<"Banquet_Bid"> | number
    CateringPreference?: StringFilter<"Banquet_Bid"> | string
    Cuisine?: StringFilter<"Banquet_Bid"> | string
    BudgetAmount?: IntFilter<"Banquet_Bid"> | number
    AmountCurrency?: StringFilter<"Banquet_Bid"> | string
    OffersWithin?: StringFilter<"Banquet_Bid"> | string
  }, "id">

  export type Banquet_BidOrderByWithAggregationInput = {
    id?: SortOrder
    EventType?: SortOrder
    Country?: SortOrder
    State?: SortOrder
    City?: SortOrder
    Dates?: SortOrder
    AdultCount?: SortOrder
    CateringPreference?: SortOrder
    Cuisine?: SortOrder
    BudgetAmount?: SortOrder
    AmountCurrency?: SortOrder
    OffersWithin?: SortOrder
    _count?: Banquet_BidCountOrderByAggregateInput
    _avg?: Banquet_BidAvgOrderByAggregateInput
    _max?: Banquet_BidMaxOrderByAggregateInput
    _min?: Banquet_BidMinOrderByAggregateInput
    _sum?: Banquet_BidSumOrderByAggregateInput
  }

  export type Banquet_BidScalarWhereWithAggregatesInput = {
    AND?: Banquet_BidScalarWhereWithAggregatesInput | Banquet_BidScalarWhereWithAggregatesInput[]
    OR?: Banquet_BidScalarWhereWithAggregatesInput[]
    NOT?: Banquet_BidScalarWhereWithAggregatesInput | Banquet_BidScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Banquet_Bid"> | string
    EventType?: StringWithAggregatesFilter<"Banquet_Bid"> | string
    Country?: StringWithAggregatesFilter<"Banquet_Bid"> | string
    State?: StringWithAggregatesFilter<"Banquet_Bid"> | string
    City?: StringWithAggregatesFilter<"Banquet_Bid"> | string
    Dates?: DateTimeNullableListFilter<"Banquet_Bid">
    AdultCount?: IntWithAggregatesFilter<"Banquet_Bid"> | number
    CateringPreference?: StringWithAggregatesFilter<"Banquet_Bid"> | string
    Cuisine?: StringWithAggregatesFilter<"Banquet_Bid"> | string
    BudgetAmount?: IntWithAggregatesFilter<"Banquet_Bid"> | number
    AmountCurrency?: StringWithAggregatesFilter<"Banquet_Bid"> | string
    OffersWithin?: StringWithAggregatesFilter<"Banquet_Bid"> | string
  }

  export type Banquet_BidCreateInput = {
    id?: string
    EventType: string
    Country: string
    State: string
    City: string
    Dates?: Banquet_BidCreateDatesInput | Date[] | string[]
    AdultCount: number
    CateringPreference: string
    Cuisine: string
    BudgetAmount: number
    AmountCurrency: string
    OffersWithin: string
  }

  export type Banquet_BidUncheckedCreateInput = {
    id?: string
    EventType: string
    Country: string
    State: string
    City: string
    Dates?: Banquet_BidCreateDatesInput | Date[] | string[]
    AdultCount: number
    CateringPreference: string
    Cuisine: string
    BudgetAmount: number
    AmountCurrency: string
    OffersWithin: string
  }

  export type Banquet_BidUpdateInput = {
    EventType?: StringFieldUpdateOperationsInput | string
    Country?: StringFieldUpdateOperationsInput | string
    State?: StringFieldUpdateOperationsInput | string
    City?: StringFieldUpdateOperationsInput | string
    Dates?: Banquet_BidUpdateDatesInput | Date[] | string[]
    AdultCount?: IntFieldUpdateOperationsInput | number
    CateringPreference?: StringFieldUpdateOperationsInput | string
    Cuisine?: StringFieldUpdateOperationsInput | string
    BudgetAmount?: IntFieldUpdateOperationsInput | number
    AmountCurrency?: StringFieldUpdateOperationsInput | string
    OffersWithin?: StringFieldUpdateOperationsInput | string
  }

  export type Banquet_BidUncheckedUpdateInput = {
    EventType?: StringFieldUpdateOperationsInput | string
    Country?: StringFieldUpdateOperationsInput | string
    State?: StringFieldUpdateOperationsInput | string
    City?: StringFieldUpdateOperationsInput | string
    Dates?: Banquet_BidUpdateDatesInput | Date[] | string[]
    AdultCount?: IntFieldUpdateOperationsInput | number
    CateringPreference?: StringFieldUpdateOperationsInput | string
    Cuisine?: StringFieldUpdateOperationsInput | string
    BudgetAmount?: IntFieldUpdateOperationsInput | number
    AmountCurrency?: StringFieldUpdateOperationsInput | string
    OffersWithin?: StringFieldUpdateOperationsInput | string
  }

  export type Banquet_BidCreateManyInput = {
    id?: string
    EventType: string
    Country: string
    State: string
    City: string
    Dates?: Banquet_BidCreateDatesInput | Date[] | string[]
    AdultCount: number
    CateringPreference: string
    Cuisine: string
    BudgetAmount: number
    AmountCurrency: string
    OffersWithin: string
  }

  export type Banquet_BidUpdateManyMutationInput = {
    EventType?: StringFieldUpdateOperationsInput | string
    Country?: StringFieldUpdateOperationsInput | string
    State?: StringFieldUpdateOperationsInput | string
    City?: StringFieldUpdateOperationsInput | string
    Dates?: Banquet_BidUpdateDatesInput | Date[] | string[]
    AdultCount?: IntFieldUpdateOperationsInput | number
    CateringPreference?: StringFieldUpdateOperationsInput | string
    Cuisine?: StringFieldUpdateOperationsInput | string
    BudgetAmount?: IntFieldUpdateOperationsInput | number
    AmountCurrency?: StringFieldUpdateOperationsInput | string
    OffersWithin?: StringFieldUpdateOperationsInput | string
  }

  export type Banquet_BidUncheckedUpdateManyInput = {
    EventType?: StringFieldUpdateOperationsInput | string
    Country?: StringFieldUpdateOperationsInput | string
    State?: StringFieldUpdateOperationsInput | string
    City?: StringFieldUpdateOperationsInput | string
    Dates?: Banquet_BidUpdateDatesInput | Date[] | string[]
    AdultCount?: IntFieldUpdateOperationsInput | number
    CateringPreference?: StringFieldUpdateOperationsInput | string
    Cuisine?: StringFieldUpdateOperationsInput | string
    BudgetAmount?: IntFieldUpdateOperationsInput | number
    AmountCurrency?: StringFieldUpdateOperationsInput | string
    OffersWithin?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableListFilter<$PrismaModel = never> = {
    equals?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    has?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    hasEvery?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    hasSome?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type Banquet_BidCountOrderByAggregateInput = {
    id?: SortOrder
    EventType?: SortOrder
    Country?: SortOrder
    State?: SortOrder
    City?: SortOrder
    Dates?: SortOrder
    AdultCount?: SortOrder
    CateringPreference?: SortOrder
    Cuisine?: SortOrder
    BudgetAmount?: SortOrder
    AmountCurrency?: SortOrder
    OffersWithin?: SortOrder
  }

  export type Banquet_BidAvgOrderByAggregateInput = {
    AdultCount?: SortOrder
    BudgetAmount?: SortOrder
  }

  export type Banquet_BidMaxOrderByAggregateInput = {
    id?: SortOrder
    EventType?: SortOrder
    Country?: SortOrder
    State?: SortOrder
    City?: SortOrder
    AdultCount?: SortOrder
    CateringPreference?: SortOrder
    Cuisine?: SortOrder
    BudgetAmount?: SortOrder
    AmountCurrency?: SortOrder
    OffersWithin?: SortOrder
  }

  export type Banquet_BidMinOrderByAggregateInput = {
    id?: SortOrder
    EventType?: SortOrder
    Country?: SortOrder
    State?: SortOrder
    City?: SortOrder
    AdultCount?: SortOrder
    CateringPreference?: SortOrder
    Cuisine?: SortOrder
    BudgetAmount?: SortOrder
    AmountCurrency?: SortOrder
    OffersWithin?: SortOrder
  }

  export type Banquet_BidSumOrderByAggregateInput = {
    AdultCount?: SortOrder
    BudgetAmount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type Banquet_BidCreateDatesInput = {
    set: Date[] | string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Banquet_BidUpdateDatesInput = {
    set?: Date[] | string[]
    push?: Date | string | Date[] | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}