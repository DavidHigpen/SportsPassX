
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
 * Model Games
 * 
 */
export type Games = $Result.DefaultSelection<Prisma.$GamesPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SportsPass
 * 
 */
export type SportsPass = $Result.DefaultSelection<Prisma.$SportsPassPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Class: {
  FRESHMAN: 'FRESHMAN',
  SOPHOMORE: 'SOPHOMORE',
  JUNIOR: 'JUNIOR',
  SENIOR: 'SENIOR'
};

export type Class = (typeof Class)[keyof typeof Class]

}

export type Class = $Enums.Class

export const Class: typeof $Enums.Class

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Games
 * const games = await prisma.games.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Games
   * const games = await prisma.games.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.games`: Exposes CRUD operations for the **Games** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.games.findMany()
    * ```
    */
  get games(): Prisma.GamesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sportsPass`: Exposes CRUD operations for the **SportsPass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SportsPasses
    * const sportsPasses = await prisma.sportsPass.findMany()
    * ```
    */
  get sportsPass(): Prisma.SportsPassDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Games: 'Games',
    User: 'User',
    SportsPass: 'SportsPass'
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
      modelProps: "games" | "user" | "sportsPass"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Games: {
        payload: Prisma.$GamesPayload<ExtArgs>
        fields: Prisma.GamesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GamesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GamesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>
          }
          findFirst: {
            args: Prisma.GamesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GamesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>
          }
          findMany: {
            args: Prisma.GamesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>[]
          }
          create: {
            args: Prisma.GamesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>
          }
          createMany: {
            args: Prisma.GamesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GamesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>[]
          }
          delete: {
            args: Prisma.GamesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>
          }
          update: {
            args: Prisma.GamesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>
          }
          deleteMany: {
            args: Prisma.GamesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GamesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GamesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>[]
          }
          upsert: {
            args: Prisma.GamesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamesPayload>
          }
          aggregate: {
            args: Prisma.GamesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGames>
          }
          groupBy: {
            args: Prisma.GamesGroupByArgs<ExtArgs>
            result: $Utils.Optional<GamesGroupByOutputType>[]
          }
          count: {
            args: Prisma.GamesCountArgs<ExtArgs>
            result: $Utils.Optional<GamesCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SportsPass: {
        payload: Prisma.$SportsPassPayload<ExtArgs>
        fields: Prisma.SportsPassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SportsPassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportsPassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SportsPassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportsPassPayload>
          }
          findFirst: {
            args: Prisma.SportsPassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportsPassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SportsPassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportsPassPayload>
          }
          findMany: {
            args: Prisma.SportsPassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportsPassPayload>[]
          }
          create: {
            args: Prisma.SportsPassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportsPassPayload>
          }
          createMany: {
            args: Prisma.SportsPassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SportsPassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportsPassPayload>[]
          }
          delete: {
            args: Prisma.SportsPassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportsPassPayload>
          }
          update: {
            args: Prisma.SportsPassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportsPassPayload>
          }
          deleteMany: {
            args: Prisma.SportsPassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SportsPassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SportsPassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportsPassPayload>[]
          }
          upsert: {
            args: Prisma.SportsPassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SportsPassPayload>
          }
          aggregate: {
            args: Prisma.SportsPassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSportsPass>
          }
          groupBy: {
            args: Prisma.SportsPassGroupByArgs<ExtArgs>
            result: $Utils.Optional<SportsPassGroupByOutputType>[]
          }
          count: {
            args: Prisma.SportsPassCountArgs<ExtArgs>
            result: $Utils.Optional<SportsPassCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    games?: GamesOmit
    user?: UserOmit
    sportsPass?: SportsPassOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type GamesCountOutputType
   */

  export type GamesCountOutputType = {
    SportsPass: number
  }

  export type GamesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SportsPass?: boolean | GamesCountOutputTypeCountSportsPassArgs
  }

  // Custom InputTypes
  /**
   * GamesCountOutputType without action
   */
  export type GamesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GamesCountOutputType
     */
    select?: GamesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GamesCountOutputType without action
   */
  export type GamesCountOutputTypeCountSportsPassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SportsPassWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    soldPasses: number
    boughtPasses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    soldPasses?: boolean | UserCountOutputTypeCountSoldPassesArgs
    boughtPasses?: boolean | UserCountOutputTypeCountBoughtPassesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSoldPassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SportsPassWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBoughtPassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SportsPassWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Games
   */

  export type AggregateGames = {
    _count: GamesCountAggregateOutputType | null
    _avg: GamesAvgAggregateOutputType | null
    _sum: GamesSumAggregateOutputType | null
    _min: GamesMinAggregateOutputType | null
    _max: GamesMaxAggregateOutputType | null
  }

  export type GamesAvgAggregateOutputType = {
    guestPrice: number | null
  }

  export type GamesSumAggregateOutputType = {
    guestPrice: number | null
  }

  export type GamesMinAggregateOutputType = {
    date: Date | null
    opponent: string | null
    guestPrice: number | null
  }

  export type GamesMaxAggregateOutputType = {
    date: Date | null
    opponent: string | null
    guestPrice: number | null
  }

  export type GamesCountAggregateOutputType = {
    date: number
    opponent: number
    guestPrice: number
    _all: number
  }


  export type GamesAvgAggregateInputType = {
    guestPrice?: true
  }

  export type GamesSumAggregateInputType = {
    guestPrice?: true
  }

  export type GamesMinAggregateInputType = {
    date?: true
    opponent?: true
    guestPrice?: true
  }

  export type GamesMaxAggregateInputType = {
    date?: true
    opponent?: true
    guestPrice?: true
  }

  export type GamesCountAggregateInputType = {
    date?: true
    opponent?: true
    guestPrice?: true
    _all?: true
  }

  export type GamesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to aggregate.
     */
    where?: GamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GamesOrderByWithRelationInput | GamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GamesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GamesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GamesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GamesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GamesMaxAggregateInputType
  }

  export type GetGamesAggregateType<T extends GamesAggregateArgs> = {
        [P in keyof T & keyof AggregateGames]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGames[P]>
      : GetScalarType<T[P], AggregateGames[P]>
  }




  export type GamesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GamesWhereInput
    orderBy?: GamesOrderByWithAggregationInput | GamesOrderByWithAggregationInput[]
    by: GamesScalarFieldEnum[] | GamesScalarFieldEnum
    having?: GamesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GamesCountAggregateInputType | true
    _avg?: GamesAvgAggregateInputType
    _sum?: GamesSumAggregateInputType
    _min?: GamesMinAggregateInputType
    _max?: GamesMaxAggregateInputType
  }

  export type GamesGroupByOutputType = {
    date: Date
    opponent: string
    guestPrice: number | null
    _count: GamesCountAggregateOutputType | null
    _avg: GamesAvgAggregateOutputType | null
    _sum: GamesSumAggregateOutputType | null
    _min: GamesMinAggregateOutputType | null
    _max: GamesMaxAggregateOutputType | null
  }

  type GetGamesGroupByPayload<T extends GamesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GamesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GamesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GamesGroupByOutputType[P]>
            : GetScalarType<T[P], GamesGroupByOutputType[P]>
        }
      >
    >


  export type GamesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date?: boolean
    opponent?: boolean
    guestPrice?: boolean
    SportsPass?: boolean | Games$SportsPassArgs<ExtArgs>
    _count?: boolean | GamesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["games"]>

  export type GamesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date?: boolean
    opponent?: boolean
    guestPrice?: boolean
  }, ExtArgs["result"]["games"]>

  export type GamesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date?: boolean
    opponent?: boolean
    guestPrice?: boolean
  }, ExtArgs["result"]["games"]>

  export type GamesSelectScalar = {
    date?: boolean
    opponent?: boolean
    guestPrice?: boolean
  }

  export type GamesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"date" | "opponent" | "guestPrice", ExtArgs["result"]["games"]>
  export type GamesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SportsPass?: boolean | Games$SportsPassArgs<ExtArgs>
    _count?: boolean | GamesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GamesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GamesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GamesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Games"
    objects: {
      SportsPass: Prisma.$SportsPassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      date: Date
      opponent: string
      guestPrice: number | null
    }, ExtArgs["result"]["games"]>
    composites: {}
  }

  type GamesGetPayload<S extends boolean | null | undefined | GamesDefaultArgs> = $Result.GetResult<Prisma.$GamesPayload, S>

  type GamesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GamesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GamesCountAggregateInputType | true
    }

  export interface GamesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Games'], meta: { name: 'Games' } }
    /**
     * Find zero or one Games that matches the filter.
     * @param {GamesFindUniqueArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GamesFindUniqueArgs>(args: SelectSubset<T, GamesFindUniqueArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Games that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GamesFindUniqueOrThrowArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GamesFindUniqueOrThrowArgs>(args: SelectSubset<T, GamesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesFindFirstArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GamesFindFirstArgs>(args?: SelectSubset<T, GamesFindFirstArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Games that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesFindFirstOrThrowArgs} args - Arguments to find a Games
     * @example
     * // Get one Games
     * const games = await prisma.games.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GamesFindFirstOrThrowArgs>(args?: SelectSubset<T, GamesFindFirstOrThrowArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.games.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.games.findMany({ take: 10 })
     * 
     * // Only select the `date`
     * const gamesWithDateOnly = await prisma.games.findMany({ select: { date: true } })
     * 
     */
    findMany<T extends GamesFindManyArgs>(args?: SelectSubset<T, GamesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Games.
     * @param {GamesCreateArgs} args - Arguments to create a Games.
     * @example
     * // Create one Games
     * const Games = await prisma.games.create({
     *   data: {
     *     // ... data to create a Games
     *   }
     * })
     * 
     */
    create<T extends GamesCreateArgs>(args: SelectSubset<T, GamesCreateArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GamesCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const games = await prisma.games.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GamesCreateManyArgs>(args?: SelectSubset<T, GamesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GamesCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const games = await prisma.games.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `date`
     * const gamesWithDateOnly = await prisma.games.createManyAndReturn({
     *   select: { date: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GamesCreateManyAndReturnArgs>(args?: SelectSubset<T, GamesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Games.
     * @param {GamesDeleteArgs} args - Arguments to delete one Games.
     * @example
     * // Delete one Games
     * const Games = await prisma.games.delete({
     *   where: {
     *     // ... filter to delete one Games
     *   }
     * })
     * 
     */
    delete<T extends GamesDeleteArgs>(args: SelectSubset<T, GamesDeleteArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Games.
     * @param {GamesUpdateArgs} args - Arguments to update one Games.
     * @example
     * // Update one Games
     * const games = await prisma.games.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GamesUpdateArgs>(args: SelectSubset<T, GamesUpdateArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GamesDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.games.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GamesDeleteManyArgs>(args?: SelectSubset<T, GamesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const games = await prisma.games.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GamesUpdateManyArgs>(args: SelectSubset<T, GamesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GamesUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const games = await prisma.games.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `date`
     * const gamesWithDateOnly = await prisma.games.updateManyAndReturn({
     *   select: { date: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GamesUpdateManyAndReturnArgs>(args: SelectSubset<T, GamesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Games.
     * @param {GamesUpsertArgs} args - Arguments to update or create a Games.
     * @example
     * // Update or create a Games
     * const games = await prisma.games.upsert({
     *   create: {
     *     // ... data to create a Games
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Games we want to update
     *   }
     * })
     */
    upsert<T extends GamesUpsertArgs>(args: SelectSubset<T, GamesUpsertArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.games.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GamesCountArgs>(
      args?: Subset<T, GamesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GamesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GamesAggregateArgs>(args: Subset<T, GamesAggregateArgs>): Prisma.PrismaPromise<GetGamesAggregateType<T>>

    /**
     * Group by Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GamesGroupByArgs} args - Group by arguments.
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
      T extends GamesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GamesGroupByArgs['orderBy'] }
        : { orderBy?: GamesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GamesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGamesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Games model
   */
  readonly fields: GamesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Games.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GamesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SportsPass<T extends Games$SportsPassArgs<ExtArgs> = {}>(args?: Subset<T, Games$SportsPassArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportsPassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Games model
   */
  interface GamesFieldRefs {
    readonly date: FieldRef<"Games", 'DateTime'>
    readonly opponent: FieldRef<"Games", 'String'>
    readonly guestPrice: FieldRef<"Games", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Games findUnique
   */
  export type GamesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where: GamesWhereUniqueInput
  }

  /**
   * Games findUniqueOrThrow
   */
  export type GamesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where: GamesWhereUniqueInput
  }

  /**
   * Games findFirst
   */
  export type GamesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GamesOrderByWithRelationInput | GamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GamesScalarFieldEnum | GamesScalarFieldEnum[]
  }

  /**
   * Games findFirstOrThrow
   */
  export type GamesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GamesOrderByWithRelationInput | GamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GamesScalarFieldEnum | GamesScalarFieldEnum[]
  }

  /**
   * Games findMany
   */
  export type GamesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GamesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GamesOrderByWithRelationInput | GamesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GamesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GamesScalarFieldEnum | GamesScalarFieldEnum[]
  }

  /**
   * Games create
   */
  export type GamesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * The data needed to create a Games.
     */
    data: XOR<GamesCreateInput, GamesUncheckedCreateInput>
  }

  /**
   * Games createMany
   */
  export type GamesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GamesCreateManyInput | GamesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Games createManyAndReturn
   */
  export type GamesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GamesCreateManyInput | GamesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Games update
   */
  export type GamesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * The data needed to update a Games.
     */
    data: XOR<GamesUpdateInput, GamesUncheckedUpdateInput>
    /**
     * Choose, which Games to update.
     */
    where: GamesWhereUniqueInput
  }

  /**
   * Games updateMany
   */
  export type GamesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GamesUpdateManyMutationInput, GamesUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GamesWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Games updateManyAndReturn
   */
  export type GamesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GamesUpdateManyMutationInput, GamesUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GamesWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Games upsert
   */
  export type GamesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * The filter to search for the Games to update in case it exists.
     */
    where: GamesWhereUniqueInput
    /**
     * In case the Games found by the `where` argument doesn't exist, create a new Games with this data.
     */
    create: XOR<GamesCreateInput, GamesUncheckedCreateInput>
    /**
     * In case the Games was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GamesUpdateInput, GamesUncheckedUpdateInput>
  }

  /**
   * Games delete
   */
  export type GamesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
    /**
     * Filter which Games to delete.
     */
    where: GamesWhereUniqueInput
  }

  /**
   * Games deleteMany
   */
  export type GamesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GamesWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Games.SportsPass
   */
  export type Games$SportsPassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportsPass
     */
    select?: SportsPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportsPass
     */
    omit?: SportsPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsPassInclude<ExtArgs> | null
    where?: SportsPassWhereInput
    orderBy?: SportsPassOrderByWithRelationInput | SportsPassOrderByWithRelationInput[]
    cursor?: SportsPassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SportsPassScalarFieldEnum | SportsPassScalarFieldEnum[]
  }

  /**
   * Games without action
   */
  export type GamesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Games
     */
    select?: GamesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Games
     */
    omit?: GamesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GamesInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    seller: boolean | null
    classification: $Enums.Class | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    seller: boolean | null
    classification: $Enums.Class | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    seller: number
    classification: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    seller?: true
    classification?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    seller?: true
    classification?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    seller?: true
    classification?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    phone: string | null
    seller: boolean | null
    classification: $Enums.Class | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    seller?: boolean
    classification?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    soldPasses?: boolean | User$soldPassesArgs<ExtArgs>
    boughtPasses?: boolean | User$boughtPassesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    seller?: boolean
    classification?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    seller?: boolean
    classification?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    seller?: boolean
    classification?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "seller" | "classification" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    soldPasses?: boolean | User$soldPassesArgs<ExtArgs>
    boughtPasses?: boolean | User$boughtPassesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      soldPasses: Prisma.$SportsPassPayload<ExtArgs>[]
      boughtPasses: Prisma.$SportsPassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      phone: string | null
      seller: boolean | null
      classification: $Enums.Class | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    soldPasses<T extends User$soldPassesArgs<ExtArgs> = {}>(args?: Subset<T, User$soldPassesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportsPassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    boughtPasses<T extends User$boughtPassesArgs<ExtArgs> = {}>(args?: Subset<T, User$boughtPassesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportsPassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly seller: FieldRef<"User", 'Boolean'>
    readonly classification: FieldRef<"User", 'Class'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.soldPasses
   */
  export type User$soldPassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportsPass
     */
    select?: SportsPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportsPass
     */
    omit?: SportsPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsPassInclude<ExtArgs> | null
    where?: SportsPassWhereInput
    orderBy?: SportsPassOrderByWithRelationInput | SportsPassOrderByWithRelationInput[]
    cursor?: SportsPassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SportsPassScalarFieldEnum | SportsPassScalarFieldEnum[]
  }

  /**
   * User.boughtPasses
   */
  export type User$boughtPassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportsPass
     */
    select?: SportsPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportsPass
     */
    omit?: SportsPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsPassInclude<ExtArgs> | null
    where?: SportsPassWhereInput
    orderBy?: SportsPassOrderByWithRelationInput | SportsPassOrderByWithRelationInput[]
    cursor?: SportsPassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SportsPassScalarFieldEnum | SportsPassScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model SportsPass
   */

  export type AggregateSportsPass = {
    _count: SportsPassCountAggregateOutputType | null
    _avg: SportsPassAvgAggregateOutputType | null
    _sum: SportsPassSumAggregateOutputType | null
    _min: SportsPassMinAggregateOutputType | null
    _max: SportsPassMaxAggregateOutputType | null
  }

  export type SportsPassAvgAggregateOutputType = {
    price: number | null
  }

  export type SportsPassSumAggregateOutputType = {
    price: number | null
  }

  export type SportsPassMinAggregateOutputType = {
    id: string | null
    price: number | null
    gameDate: Date | null
    sellerId: string | null
    buyerId: string | null
  }

  export type SportsPassMaxAggregateOutputType = {
    id: string | null
    price: number | null
    gameDate: Date | null
    sellerId: string | null
    buyerId: string | null
  }

  export type SportsPassCountAggregateOutputType = {
    id: number
    price: number
    gameDate: number
    sellerId: number
    buyerId: number
    _all: number
  }


  export type SportsPassAvgAggregateInputType = {
    price?: true
  }

  export type SportsPassSumAggregateInputType = {
    price?: true
  }

  export type SportsPassMinAggregateInputType = {
    id?: true
    price?: true
    gameDate?: true
    sellerId?: true
    buyerId?: true
  }

  export type SportsPassMaxAggregateInputType = {
    id?: true
    price?: true
    gameDate?: true
    sellerId?: true
    buyerId?: true
  }

  export type SportsPassCountAggregateInputType = {
    id?: true
    price?: true
    gameDate?: true
    sellerId?: true
    buyerId?: true
    _all?: true
  }

  export type SportsPassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SportsPass to aggregate.
     */
    where?: SportsPassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SportsPasses to fetch.
     */
    orderBy?: SportsPassOrderByWithRelationInput | SportsPassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SportsPassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SportsPasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SportsPasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SportsPasses
    **/
    _count?: true | SportsPassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SportsPassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SportsPassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SportsPassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SportsPassMaxAggregateInputType
  }

  export type GetSportsPassAggregateType<T extends SportsPassAggregateArgs> = {
        [P in keyof T & keyof AggregateSportsPass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSportsPass[P]>
      : GetScalarType<T[P], AggregateSportsPass[P]>
  }




  export type SportsPassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SportsPassWhereInput
    orderBy?: SportsPassOrderByWithAggregationInput | SportsPassOrderByWithAggregationInput[]
    by: SportsPassScalarFieldEnum[] | SportsPassScalarFieldEnum
    having?: SportsPassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SportsPassCountAggregateInputType | true
    _avg?: SportsPassAvgAggregateInputType
    _sum?: SportsPassSumAggregateInputType
    _min?: SportsPassMinAggregateInputType
    _max?: SportsPassMaxAggregateInputType
  }

  export type SportsPassGroupByOutputType = {
    id: string
    price: number
    gameDate: Date
    sellerId: string
    buyerId: string | null
    _count: SportsPassCountAggregateOutputType | null
    _avg: SportsPassAvgAggregateOutputType | null
    _sum: SportsPassSumAggregateOutputType | null
    _min: SportsPassMinAggregateOutputType | null
    _max: SportsPassMaxAggregateOutputType | null
  }

  type GetSportsPassGroupByPayload<T extends SportsPassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SportsPassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SportsPassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SportsPassGroupByOutputType[P]>
            : GetScalarType<T[P], SportsPassGroupByOutputType[P]>
        }
      >
    >


  export type SportsPassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    gameDate?: boolean
    sellerId?: boolean
    buyerId?: boolean
    game?: boolean | GamesDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    buyer?: boolean | SportsPass$buyerArgs<ExtArgs>
  }, ExtArgs["result"]["sportsPass"]>

  export type SportsPassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    gameDate?: boolean
    sellerId?: boolean
    buyerId?: boolean
    game?: boolean | GamesDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    buyer?: boolean | SportsPass$buyerArgs<ExtArgs>
  }, ExtArgs["result"]["sportsPass"]>

  export type SportsPassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    gameDate?: boolean
    sellerId?: boolean
    buyerId?: boolean
    game?: boolean | GamesDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    buyer?: boolean | SportsPass$buyerArgs<ExtArgs>
  }, ExtArgs["result"]["sportsPass"]>

  export type SportsPassSelectScalar = {
    id?: boolean
    price?: boolean
    gameDate?: boolean
    sellerId?: boolean
    buyerId?: boolean
  }

  export type SportsPassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "price" | "gameDate" | "sellerId" | "buyerId", ExtArgs["result"]["sportsPass"]>
  export type SportsPassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GamesDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    buyer?: boolean | SportsPass$buyerArgs<ExtArgs>
  }
  export type SportsPassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GamesDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    buyer?: boolean | SportsPass$buyerArgs<ExtArgs>
  }
  export type SportsPassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game?: boolean | GamesDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    buyer?: boolean | SportsPass$buyerArgs<ExtArgs>
  }

  export type $SportsPassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SportsPass"
    objects: {
      game: Prisma.$GamesPayload<ExtArgs>
      seller: Prisma.$UserPayload<ExtArgs>
      buyer: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      price: number
      gameDate: Date
      sellerId: string
      buyerId: string | null
    }, ExtArgs["result"]["sportsPass"]>
    composites: {}
  }

  type SportsPassGetPayload<S extends boolean | null | undefined | SportsPassDefaultArgs> = $Result.GetResult<Prisma.$SportsPassPayload, S>

  type SportsPassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SportsPassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SportsPassCountAggregateInputType | true
    }

  export interface SportsPassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SportsPass'], meta: { name: 'SportsPass' } }
    /**
     * Find zero or one SportsPass that matches the filter.
     * @param {SportsPassFindUniqueArgs} args - Arguments to find a SportsPass
     * @example
     * // Get one SportsPass
     * const sportsPass = await prisma.sportsPass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SportsPassFindUniqueArgs>(args: SelectSubset<T, SportsPassFindUniqueArgs<ExtArgs>>): Prisma__SportsPassClient<$Result.GetResult<Prisma.$SportsPassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SportsPass that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SportsPassFindUniqueOrThrowArgs} args - Arguments to find a SportsPass
     * @example
     * // Get one SportsPass
     * const sportsPass = await prisma.sportsPass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SportsPassFindUniqueOrThrowArgs>(args: SelectSubset<T, SportsPassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SportsPassClient<$Result.GetResult<Prisma.$SportsPassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SportsPass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportsPassFindFirstArgs} args - Arguments to find a SportsPass
     * @example
     * // Get one SportsPass
     * const sportsPass = await prisma.sportsPass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SportsPassFindFirstArgs>(args?: SelectSubset<T, SportsPassFindFirstArgs<ExtArgs>>): Prisma__SportsPassClient<$Result.GetResult<Prisma.$SportsPassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SportsPass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportsPassFindFirstOrThrowArgs} args - Arguments to find a SportsPass
     * @example
     * // Get one SportsPass
     * const sportsPass = await prisma.sportsPass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SportsPassFindFirstOrThrowArgs>(args?: SelectSubset<T, SportsPassFindFirstOrThrowArgs<ExtArgs>>): Prisma__SportsPassClient<$Result.GetResult<Prisma.$SportsPassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SportsPasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportsPassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SportsPasses
     * const sportsPasses = await prisma.sportsPass.findMany()
     * 
     * // Get first 10 SportsPasses
     * const sportsPasses = await prisma.sportsPass.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sportsPassWithIdOnly = await prisma.sportsPass.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SportsPassFindManyArgs>(args?: SelectSubset<T, SportsPassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportsPassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SportsPass.
     * @param {SportsPassCreateArgs} args - Arguments to create a SportsPass.
     * @example
     * // Create one SportsPass
     * const SportsPass = await prisma.sportsPass.create({
     *   data: {
     *     // ... data to create a SportsPass
     *   }
     * })
     * 
     */
    create<T extends SportsPassCreateArgs>(args: SelectSubset<T, SportsPassCreateArgs<ExtArgs>>): Prisma__SportsPassClient<$Result.GetResult<Prisma.$SportsPassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SportsPasses.
     * @param {SportsPassCreateManyArgs} args - Arguments to create many SportsPasses.
     * @example
     * // Create many SportsPasses
     * const sportsPass = await prisma.sportsPass.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SportsPassCreateManyArgs>(args?: SelectSubset<T, SportsPassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SportsPasses and returns the data saved in the database.
     * @param {SportsPassCreateManyAndReturnArgs} args - Arguments to create many SportsPasses.
     * @example
     * // Create many SportsPasses
     * const sportsPass = await prisma.sportsPass.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SportsPasses and only return the `id`
     * const sportsPassWithIdOnly = await prisma.sportsPass.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SportsPassCreateManyAndReturnArgs>(args?: SelectSubset<T, SportsPassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportsPassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SportsPass.
     * @param {SportsPassDeleteArgs} args - Arguments to delete one SportsPass.
     * @example
     * // Delete one SportsPass
     * const SportsPass = await prisma.sportsPass.delete({
     *   where: {
     *     // ... filter to delete one SportsPass
     *   }
     * })
     * 
     */
    delete<T extends SportsPassDeleteArgs>(args: SelectSubset<T, SportsPassDeleteArgs<ExtArgs>>): Prisma__SportsPassClient<$Result.GetResult<Prisma.$SportsPassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SportsPass.
     * @param {SportsPassUpdateArgs} args - Arguments to update one SportsPass.
     * @example
     * // Update one SportsPass
     * const sportsPass = await prisma.sportsPass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SportsPassUpdateArgs>(args: SelectSubset<T, SportsPassUpdateArgs<ExtArgs>>): Prisma__SportsPassClient<$Result.GetResult<Prisma.$SportsPassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SportsPasses.
     * @param {SportsPassDeleteManyArgs} args - Arguments to filter SportsPasses to delete.
     * @example
     * // Delete a few SportsPasses
     * const { count } = await prisma.sportsPass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SportsPassDeleteManyArgs>(args?: SelectSubset<T, SportsPassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SportsPasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportsPassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SportsPasses
     * const sportsPass = await prisma.sportsPass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SportsPassUpdateManyArgs>(args: SelectSubset<T, SportsPassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SportsPasses and returns the data updated in the database.
     * @param {SportsPassUpdateManyAndReturnArgs} args - Arguments to update many SportsPasses.
     * @example
     * // Update many SportsPasses
     * const sportsPass = await prisma.sportsPass.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SportsPasses and only return the `id`
     * const sportsPassWithIdOnly = await prisma.sportsPass.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SportsPassUpdateManyAndReturnArgs>(args: SelectSubset<T, SportsPassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SportsPassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SportsPass.
     * @param {SportsPassUpsertArgs} args - Arguments to update or create a SportsPass.
     * @example
     * // Update or create a SportsPass
     * const sportsPass = await prisma.sportsPass.upsert({
     *   create: {
     *     // ... data to create a SportsPass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SportsPass we want to update
     *   }
     * })
     */
    upsert<T extends SportsPassUpsertArgs>(args: SelectSubset<T, SportsPassUpsertArgs<ExtArgs>>): Prisma__SportsPassClient<$Result.GetResult<Prisma.$SportsPassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SportsPasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportsPassCountArgs} args - Arguments to filter SportsPasses to count.
     * @example
     * // Count the number of SportsPasses
     * const count = await prisma.sportsPass.count({
     *   where: {
     *     // ... the filter for the SportsPasses we want to count
     *   }
     * })
    **/
    count<T extends SportsPassCountArgs>(
      args?: Subset<T, SportsPassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SportsPassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SportsPass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportsPassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SportsPassAggregateArgs>(args: Subset<T, SportsPassAggregateArgs>): Prisma.PrismaPromise<GetSportsPassAggregateType<T>>

    /**
     * Group by SportsPass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SportsPassGroupByArgs} args - Group by arguments.
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
      T extends SportsPassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SportsPassGroupByArgs['orderBy'] }
        : { orderBy?: SportsPassGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SportsPassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSportsPassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SportsPass model
   */
  readonly fields: SportsPassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SportsPass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SportsPassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game<T extends GamesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GamesDefaultArgs<ExtArgs>>): Prisma__GamesClient<$Result.GetResult<Prisma.$GamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seller<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buyer<T extends SportsPass$buyerArgs<ExtArgs> = {}>(args?: Subset<T, SportsPass$buyerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SportsPass model
   */
  interface SportsPassFieldRefs {
    readonly id: FieldRef<"SportsPass", 'String'>
    readonly price: FieldRef<"SportsPass", 'Int'>
    readonly gameDate: FieldRef<"SportsPass", 'DateTime'>
    readonly sellerId: FieldRef<"SportsPass", 'String'>
    readonly buyerId: FieldRef<"SportsPass", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SportsPass findUnique
   */
  export type SportsPassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportsPass
     */
    select?: SportsPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportsPass
     */
    omit?: SportsPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsPassInclude<ExtArgs> | null
    /**
     * Filter, which SportsPass to fetch.
     */
    where: SportsPassWhereUniqueInput
  }

  /**
   * SportsPass findUniqueOrThrow
   */
  export type SportsPassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportsPass
     */
    select?: SportsPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportsPass
     */
    omit?: SportsPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsPassInclude<ExtArgs> | null
    /**
     * Filter, which SportsPass to fetch.
     */
    where: SportsPassWhereUniqueInput
  }

  /**
   * SportsPass findFirst
   */
  export type SportsPassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportsPass
     */
    select?: SportsPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportsPass
     */
    omit?: SportsPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsPassInclude<ExtArgs> | null
    /**
     * Filter, which SportsPass to fetch.
     */
    where?: SportsPassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SportsPasses to fetch.
     */
    orderBy?: SportsPassOrderByWithRelationInput | SportsPassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SportsPasses.
     */
    cursor?: SportsPassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SportsPasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SportsPasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SportsPasses.
     */
    distinct?: SportsPassScalarFieldEnum | SportsPassScalarFieldEnum[]
  }

  /**
   * SportsPass findFirstOrThrow
   */
  export type SportsPassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportsPass
     */
    select?: SportsPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportsPass
     */
    omit?: SportsPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsPassInclude<ExtArgs> | null
    /**
     * Filter, which SportsPass to fetch.
     */
    where?: SportsPassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SportsPasses to fetch.
     */
    orderBy?: SportsPassOrderByWithRelationInput | SportsPassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SportsPasses.
     */
    cursor?: SportsPassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SportsPasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SportsPasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SportsPasses.
     */
    distinct?: SportsPassScalarFieldEnum | SportsPassScalarFieldEnum[]
  }

  /**
   * SportsPass findMany
   */
  export type SportsPassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportsPass
     */
    select?: SportsPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportsPass
     */
    omit?: SportsPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsPassInclude<ExtArgs> | null
    /**
     * Filter, which SportsPasses to fetch.
     */
    where?: SportsPassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SportsPasses to fetch.
     */
    orderBy?: SportsPassOrderByWithRelationInput | SportsPassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SportsPasses.
     */
    cursor?: SportsPassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SportsPasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SportsPasses.
     */
    skip?: number
    distinct?: SportsPassScalarFieldEnum | SportsPassScalarFieldEnum[]
  }

  /**
   * SportsPass create
   */
  export type SportsPassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportsPass
     */
    select?: SportsPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportsPass
     */
    omit?: SportsPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsPassInclude<ExtArgs> | null
    /**
     * The data needed to create a SportsPass.
     */
    data: XOR<SportsPassCreateInput, SportsPassUncheckedCreateInput>
  }

  /**
   * SportsPass createMany
   */
  export type SportsPassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SportsPasses.
     */
    data: SportsPassCreateManyInput | SportsPassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SportsPass createManyAndReturn
   */
  export type SportsPassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportsPass
     */
    select?: SportsPassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SportsPass
     */
    omit?: SportsPassOmit<ExtArgs> | null
    /**
     * The data used to create many SportsPasses.
     */
    data: SportsPassCreateManyInput | SportsPassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsPassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SportsPass update
   */
  export type SportsPassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportsPass
     */
    select?: SportsPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportsPass
     */
    omit?: SportsPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsPassInclude<ExtArgs> | null
    /**
     * The data needed to update a SportsPass.
     */
    data: XOR<SportsPassUpdateInput, SportsPassUncheckedUpdateInput>
    /**
     * Choose, which SportsPass to update.
     */
    where: SportsPassWhereUniqueInput
  }

  /**
   * SportsPass updateMany
   */
  export type SportsPassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SportsPasses.
     */
    data: XOR<SportsPassUpdateManyMutationInput, SportsPassUncheckedUpdateManyInput>
    /**
     * Filter which SportsPasses to update
     */
    where?: SportsPassWhereInput
    /**
     * Limit how many SportsPasses to update.
     */
    limit?: number
  }

  /**
   * SportsPass updateManyAndReturn
   */
  export type SportsPassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportsPass
     */
    select?: SportsPassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SportsPass
     */
    omit?: SportsPassOmit<ExtArgs> | null
    /**
     * The data used to update SportsPasses.
     */
    data: XOR<SportsPassUpdateManyMutationInput, SportsPassUncheckedUpdateManyInput>
    /**
     * Filter which SportsPasses to update
     */
    where?: SportsPassWhereInput
    /**
     * Limit how many SportsPasses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsPassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SportsPass upsert
   */
  export type SportsPassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportsPass
     */
    select?: SportsPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportsPass
     */
    omit?: SportsPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsPassInclude<ExtArgs> | null
    /**
     * The filter to search for the SportsPass to update in case it exists.
     */
    where: SportsPassWhereUniqueInput
    /**
     * In case the SportsPass found by the `where` argument doesn't exist, create a new SportsPass with this data.
     */
    create: XOR<SportsPassCreateInput, SportsPassUncheckedCreateInput>
    /**
     * In case the SportsPass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SportsPassUpdateInput, SportsPassUncheckedUpdateInput>
  }

  /**
   * SportsPass delete
   */
  export type SportsPassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportsPass
     */
    select?: SportsPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportsPass
     */
    omit?: SportsPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsPassInclude<ExtArgs> | null
    /**
     * Filter which SportsPass to delete.
     */
    where: SportsPassWhereUniqueInput
  }

  /**
   * SportsPass deleteMany
   */
  export type SportsPassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SportsPasses to delete
     */
    where?: SportsPassWhereInput
    /**
     * Limit how many SportsPasses to delete.
     */
    limit?: number
  }

  /**
   * SportsPass.buyer
   */
  export type SportsPass$buyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * SportsPass without action
   */
  export type SportsPassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SportsPass
     */
    select?: SportsPassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SportsPass
     */
    omit?: SportsPassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SportsPassInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GamesScalarFieldEnum: {
    date: 'date',
    opponent: 'opponent',
    guestPrice: 'guestPrice'
  };

  export type GamesScalarFieldEnum = (typeof GamesScalarFieldEnum)[keyof typeof GamesScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    seller: 'seller',
    classification: 'classification',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SportsPassScalarFieldEnum: {
    id: 'id',
    price: 'price',
    gameDate: 'gameDate',
    sellerId: 'sellerId',
    buyerId: 'buyerId'
  };

  export type SportsPassScalarFieldEnum = (typeof SportsPassScalarFieldEnum)[keyof typeof SportsPassScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Class'
   */
  export type EnumClassFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Class'>
    


  /**
   * Reference to a field of type 'Class[]'
   */
  export type ListEnumClassFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Class[]'>
    


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


  export type GamesWhereInput = {
    AND?: GamesWhereInput | GamesWhereInput[]
    OR?: GamesWhereInput[]
    NOT?: GamesWhereInput | GamesWhereInput[]
    date?: DateTimeFilter<"Games"> | Date | string
    opponent?: StringFilter<"Games"> | string
    guestPrice?: IntNullableFilter<"Games"> | number | null
    SportsPass?: SportsPassListRelationFilter
  }

  export type GamesOrderByWithRelationInput = {
    date?: SortOrder
    opponent?: SortOrder
    guestPrice?: SortOrderInput | SortOrder
    SportsPass?: SportsPassOrderByRelationAggregateInput
  }

  export type GamesWhereUniqueInput = Prisma.AtLeast<{
    date?: Date | string
    AND?: GamesWhereInput | GamesWhereInput[]
    OR?: GamesWhereInput[]
    NOT?: GamesWhereInput | GamesWhereInput[]
    opponent?: StringFilter<"Games"> | string
    guestPrice?: IntNullableFilter<"Games"> | number | null
    SportsPass?: SportsPassListRelationFilter
  }, "date">

  export type GamesOrderByWithAggregationInput = {
    date?: SortOrder
    opponent?: SortOrder
    guestPrice?: SortOrderInput | SortOrder
    _count?: GamesCountOrderByAggregateInput
    _avg?: GamesAvgOrderByAggregateInput
    _max?: GamesMaxOrderByAggregateInput
    _min?: GamesMinOrderByAggregateInput
    _sum?: GamesSumOrderByAggregateInput
  }

  export type GamesScalarWhereWithAggregatesInput = {
    AND?: GamesScalarWhereWithAggregatesInput | GamesScalarWhereWithAggregatesInput[]
    OR?: GamesScalarWhereWithAggregatesInput[]
    NOT?: GamesScalarWhereWithAggregatesInput | GamesScalarWhereWithAggregatesInput[]
    date?: DateTimeWithAggregatesFilter<"Games"> | Date | string
    opponent?: StringWithAggregatesFilter<"Games"> | string
    guestPrice?: IntNullableWithAggregatesFilter<"Games"> | number | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    seller?: BoolNullableFilter<"User"> | boolean | null
    classification?: EnumClassNullableFilter<"User"> | $Enums.Class | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    soldPasses?: SportsPassListRelationFilter
    boughtPasses?: SportsPassListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    seller?: SortOrderInput | SortOrder
    classification?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    soldPasses?: SportsPassOrderByRelationAggregateInput
    boughtPasses?: SportsPassOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    seller?: BoolNullableFilter<"User"> | boolean | null
    classification?: EnumClassNullableFilter<"User"> | $Enums.Class | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    soldPasses?: SportsPassListRelationFilter
    boughtPasses?: SportsPassListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    seller?: SortOrderInput | SortOrder
    classification?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    seller?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    classification?: EnumClassNullableWithAggregatesFilter<"User"> | $Enums.Class | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SportsPassWhereInput = {
    AND?: SportsPassWhereInput | SportsPassWhereInput[]
    OR?: SportsPassWhereInput[]
    NOT?: SportsPassWhereInput | SportsPassWhereInput[]
    id?: StringFilter<"SportsPass"> | string
    price?: IntFilter<"SportsPass"> | number
    gameDate?: DateTimeFilter<"SportsPass"> | Date | string
    sellerId?: StringFilter<"SportsPass"> | string
    buyerId?: StringNullableFilter<"SportsPass"> | string | null
    game?: XOR<GamesScalarRelationFilter, GamesWhereInput>
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
    buyer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type SportsPassOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    gameDate?: SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrderInput | SortOrder
    game?: GamesOrderByWithRelationInput
    seller?: UserOrderByWithRelationInput
    buyer?: UserOrderByWithRelationInput
  }

  export type SportsPassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SportsPassWhereInput | SportsPassWhereInput[]
    OR?: SportsPassWhereInput[]
    NOT?: SportsPassWhereInput | SportsPassWhereInput[]
    price?: IntFilter<"SportsPass"> | number
    gameDate?: DateTimeFilter<"SportsPass"> | Date | string
    sellerId?: StringFilter<"SportsPass"> | string
    buyerId?: StringNullableFilter<"SportsPass"> | string | null
    game?: XOR<GamesScalarRelationFilter, GamesWhereInput>
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
    buyer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type SportsPassOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    gameDate?: SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrderInput | SortOrder
    _count?: SportsPassCountOrderByAggregateInput
    _avg?: SportsPassAvgOrderByAggregateInput
    _max?: SportsPassMaxOrderByAggregateInput
    _min?: SportsPassMinOrderByAggregateInput
    _sum?: SportsPassSumOrderByAggregateInput
  }

  export type SportsPassScalarWhereWithAggregatesInput = {
    AND?: SportsPassScalarWhereWithAggregatesInput | SportsPassScalarWhereWithAggregatesInput[]
    OR?: SportsPassScalarWhereWithAggregatesInput[]
    NOT?: SportsPassScalarWhereWithAggregatesInput | SportsPassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SportsPass"> | string
    price?: IntWithAggregatesFilter<"SportsPass"> | number
    gameDate?: DateTimeWithAggregatesFilter<"SportsPass"> | Date | string
    sellerId?: StringWithAggregatesFilter<"SportsPass"> | string
    buyerId?: StringNullableWithAggregatesFilter<"SportsPass"> | string | null
  }

  export type GamesCreateInput = {
    date: Date | string
    opponent: string
    guestPrice?: number | null
    SportsPass?: SportsPassCreateNestedManyWithoutGameInput
  }

  export type GamesUncheckedCreateInput = {
    date: Date | string
    opponent: string
    guestPrice?: number | null
    SportsPass?: SportsPassUncheckedCreateNestedManyWithoutGameInput
  }

  export type GamesUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    opponent?: StringFieldUpdateOperationsInput | string
    guestPrice?: NullableIntFieldUpdateOperationsInput | number | null
    SportsPass?: SportsPassUpdateManyWithoutGameNestedInput
  }

  export type GamesUncheckedUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    opponent?: StringFieldUpdateOperationsInput | string
    guestPrice?: NullableIntFieldUpdateOperationsInput | number | null
    SportsPass?: SportsPassUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GamesCreateManyInput = {
    date: Date | string
    opponent: string
    guestPrice?: number | null
  }

  export type GamesUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    opponent?: StringFieldUpdateOperationsInput | string
    guestPrice?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GamesUncheckedUpdateManyInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    opponent?: StringFieldUpdateOperationsInput | string
    guestPrice?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    seller?: boolean | null
    classification?: $Enums.Class | null
    createdAt?: Date | string
    updatedAt?: Date | string
    soldPasses?: SportsPassCreateNestedManyWithoutSellerInput
    boughtPasses?: SportsPassCreateNestedManyWithoutBuyerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    seller?: boolean | null
    classification?: $Enums.Class | null
    createdAt?: Date | string
    updatedAt?: Date | string
    soldPasses?: SportsPassUncheckedCreateNestedManyWithoutSellerInput
    boughtPasses?: SportsPassUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    seller?: NullableBoolFieldUpdateOperationsInput | boolean | null
    classification?: NullableEnumClassFieldUpdateOperationsInput | $Enums.Class | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    soldPasses?: SportsPassUpdateManyWithoutSellerNestedInput
    boughtPasses?: SportsPassUpdateManyWithoutBuyerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    seller?: NullableBoolFieldUpdateOperationsInput | boolean | null
    classification?: NullableEnumClassFieldUpdateOperationsInput | $Enums.Class | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    soldPasses?: SportsPassUncheckedUpdateManyWithoutSellerNestedInput
    boughtPasses?: SportsPassUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    seller?: boolean | null
    classification?: $Enums.Class | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    seller?: NullableBoolFieldUpdateOperationsInput | boolean | null
    classification?: NullableEnumClassFieldUpdateOperationsInput | $Enums.Class | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    seller?: NullableBoolFieldUpdateOperationsInput | boolean | null
    classification?: NullableEnumClassFieldUpdateOperationsInput | $Enums.Class | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SportsPassCreateInput = {
    id?: string
    price: number
    game: GamesCreateNestedOneWithoutSportsPassInput
    seller: UserCreateNestedOneWithoutSoldPassesInput
    buyer?: UserCreateNestedOneWithoutBoughtPassesInput
  }

  export type SportsPassUncheckedCreateInput = {
    id?: string
    price: number
    gameDate: Date | string
    sellerId: string
    buyerId?: string | null
  }

  export type SportsPassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    game?: GamesUpdateOneRequiredWithoutSportsPassNestedInput
    seller?: UserUpdateOneRequiredWithoutSoldPassesNestedInput
    buyer?: UserUpdateOneWithoutBoughtPassesNestedInput
  }

  export type SportsPassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerId?: StringFieldUpdateOperationsInput | string
    buyerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SportsPassCreateManyInput = {
    id?: string
    price: number
    gameDate: Date | string
    sellerId: string
    buyerId?: string | null
  }

  export type SportsPassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type SportsPassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerId?: StringFieldUpdateOperationsInput | string
    buyerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SportsPassListRelationFilter = {
    every?: SportsPassWhereInput
    some?: SportsPassWhereInput
    none?: SportsPassWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SportsPassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GamesCountOrderByAggregateInput = {
    date?: SortOrder
    opponent?: SortOrder
    guestPrice?: SortOrder
  }

  export type GamesAvgOrderByAggregateInput = {
    guestPrice?: SortOrder
  }

  export type GamesMaxOrderByAggregateInput = {
    date?: SortOrder
    opponent?: SortOrder
    guestPrice?: SortOrder
  }

  export type GamesMinOrderByAggregateInput = {
    date?: SortOrder
    opponent?: SortOrder
    guestPrice?: SortOrder
  }

  export type GamesSumOrderByAggregateInput = {
    guestPrice?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EnumClassNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Class | EnumClassFieldRefInput<$PrismaModel> | null
    in?: $Enums.Class[] | ListEnumClassFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Class[] | ListEnumClassFieldRefInput<$PrismaModel> | null
    not?: NestedEnumClassNullableFilter<$PrismaModel> | $Enums.Class | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    seller?: SortOrder
    classification?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    seller?: SortOrder
    classification?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    seller?: SortOrder
    classification?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumClassNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Class | EnumClassFieldRefInput<$PrismaModel> | null
    in?: $Enums.Class[] | ListEnumClassFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Class[] | ListEnumClassFieldRefInput<$PrismaModel> | null
    not?: NestedEnumClassNullableWithAggregatesFilter<$PrismaModel> | $Enums.Class | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumClassNullableFilter<$PrismaModel>
    _max?: NestedEnumClassNullableFilter<$PrismaModel>
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

  export type GamesScalarRelationFilter = {
    is?: GamesWhereInput
    isNot?: GamesWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SportsPassCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    gameDate?: SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrder
  }

  export type SportsPassAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type SportsPassMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    gameDate?: SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrder
  }

  export type SportsPassMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    gameDate?: SortOrder
    sellerId?: SortOrder
    buyerId?: SortOrder
  }

  export type SportsPassSumOrderByAggregateInput = {
    price?: SortOrder
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

  export type SportsPassCreateNestedManyWithoutGameInput = {
    create?: XOR<SportsPassCreateWithoutGameInput, SportsPassUncheckedCreateWithoutGameInput> | SportsPassCreateWithoutGameInput[] | SportsPassUncheckedCreateWithoutGameInput[]
    connectOrCreate?: SportsPassCreateOrConnectWithoutGameInput | SportsPassCreateOrConnectWithoutGameInput[]
    createMany?: SportsPassCreateManyGameInputEnvelope
    connect?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
  }

  export type SportsPassUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<SportsPassCreateWithoutGameInput, SportsPassUncheckedCreateWithoutGameInput> | SportsPassCreateWithoutGameInput[] | SportsPassUncheckedCreateWithoutGameInput[]
    connectOrCreate?: SportsPassCreateOrConnectWithoutGameInput | SportsPassCreateOrConnectWithoutGameInput[]
    createMany?: SportsPassCreateManyGameInputEnvelope
    connect?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SportsPassUpdateManyWithoutGameNestedInput = {
    create?: XOR<SportsPassCreateWithoutGameInput, SportsPassUncheckedCreateWithoutGameInput> | SportsPassCreateWithoutGameInput[] | SportsPassUncheckedCreateWithoutGameInput[]
    connectOrCreate?: SportsPassCreateOrConnectWithoutGameInput | SportsPassCreateOrConnectWithoutGameInput[]
    upsert?: SportsPassUpsertWithWhereUniqueWithoutGameInput | SportsPassUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: SportsPassCreateManyGameInputEnvelope
    set?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
    disconnect?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
    delete?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
    connect?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
    update?: SportsPassUpdateWithWhereUniqueWithoutGameInput | SportsPassUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: SportsPassUpdateManyWithWhereWithoutGameInput | SportsPassUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: SportsPassScalarWhereInput | SportsPassScalarWhereInput[]
  }

  export type SportsPassUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<SportsPassCreateWithoutGameInput, SportsPassUncheckedCreateWithoutGameInput> | SportsPassCreateWithoutGameInput[] | SportsPassUncheckedCreateWithoutGameInput[]
    connectOrCreate?: SportsPassCreateOrConnectWithoutGameInput | SportsPassCreateOrConnectWithoutGameInput[]
    upsert?: SportsPassUpsertWithWhereUniqueWithoutGameInput | SportsPassUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: SportsPassCreateManyGameInputEnvelope
    set?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
    disconnect?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
    delete?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
    connect?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
    update?: SportsPassUpdateWithWhereUniqueWithoutGameInput | SportsPassUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: SportsPassUpdateManyWithWhereWithoutGameInput | SportsPassUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: SportsPassScalarWhereInput | SportsPassScalarWhereInput[]
  }

  export type SportsPassCreateNestedManyWithoutSellerInput = {
    create?: XOR<SportsPassCreateWithoutSellerInput, SportsPassUncheckedCreateWithoutSellerInput> | SportsPassCreateWithoutSellerInput[] | SportsPassUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SportsPassCreateOrConnectWithoutSellerInput | SportsPassCreateOrConnectWithoutSellerInput[]
    createMany?: SportsPassCreateManySellerInputEnvelope
    connect?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
  }

  export type SportsPassCreateNestedManyWithoutBuyerInput = {
    create?: XOR<SportsPassCreateWithoutBuyerInput, SportsPassUncheckedCreateWithoutBuyerInput> | SportsPassCreateWithoutBuyerInput[] | SportsPassUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: SportsPassCreateOrConnectWithoutBuyerInput | SportsPassCreateOrConnectWithoutBuyerInput[]
    createMany?: SportsPassCreateManyBuyerInputEnvelope
    connect?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
  }

  export type SportsPassUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<SportsPassCreateWithoutSellerInput, SportsPassUncheckedCreateWithoutSellerInput> | SportsPassCreateWithoutSellerInput[] | SportsPassUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SportsPassCreateOrConnectWithoutSellerInput | SportsPassCreateOrConnectWithoutSellerInput[]
    createMany?: SportsPassCreateManySellerInputEnvelope
    connect?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
  }

  export type SportsPassUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<SportsPassCreateWithoutBuyerInput, SportsPassUncheckedCreateWithoutBuyerInput> | SportsPassCreateWithoutBuyerInput[] | SportsPassUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: SportsPassCreateOrConnectWithoutBuyerInput | SportsPassCreateOrConnectWithoutBuyerInput[]
    createMany?: SportsPassCreateManyBuyerInputEnvelope
    connect?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableEnumClassFieldUpdateOperationsInput = {
    set?: $Enums.Class | null
  }

  export type SportsPassUpdateManyWithoutSellerNestedInput = {
    create?: XOR<SportsPassCreateWithoutSellerInput, SportsPassUncheckedCreateWithoutSellerInput> | SportsPassCreateWithoutSellerInput[] | SportsPassUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SportsPassCreateOrConnectWithoutSellerInput | SportsPassCreateOrConnectWithoutSellerInput[]
    upsert?: SportsPassUpsertWithWhereUniqueWithoutSellerInput | SportsPassUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: SportsPassCreateManySellerInputEnvelope
    set?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
    disconnect?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
    delete?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
    connect?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
    update?: SportsPassUpdateWithWhereUniqueWithoutSellerInput | SportsPassUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: SportsPassUpdateManyWithWhereWithoutSellerInput | SportsPassUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: SportsPassScalarWhereInput | SportsPassScalarWhereInput[]
  }

  export type SportsPassUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<SportsPassCreateWithoutBuyerInput, SportsPassUncheckedCreateWithoutBuyerInput> | SportsPassCreateWithoutBuyerInput[] | SportsPassUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: SportsPassCreateOrConnectWithoutBuyerInput | SportsPassCreateOrConnectWithoutBuyerInput[]
    upsert?: SportsPassUpsertWithWhereUniqueWithoutBuyerInput | SportsPassUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: SportsPassCreateManyBuyerInputEnvelope
    set?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
    disconnect?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
    delete?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
    connect?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
    update?: SportsPassUpdateWithWhereUniqueWithoutBuyerInput | SportsPassUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: SportsPassUpdateManyWithWhereWithoutBuyerInput | SportsPassUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: SportsPassScalarWhereInput | SportsPassScalarWhereInput[]
  }

  export type SportsPassUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<SportsPassCreateWithoutSellerInput, SportsPassUncheckedCreateWithoutSellerInput> | SportsPassCreateWithoutSellerInput[] | SportsPassUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SportsPassCreateOrConnectWithoutSellerInput | SportsPassCreateOrConnectWithoutSellerInput[]
    upsert?: SportsPassUpsertWithWhereUniqueWithoutSellerInput | SportsPassUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: SportsPassCreateManySellerInputEnvelope
    set?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
    disconnect?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
    delete?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
    connect?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
    update?: SportsPassUpdateWithWhereUniqueWithoutSellerInput | SportsPassUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: SportsPassUpdateManyWithWhereWithoutSellerInput | SportsPassUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: SportsPassScalarWhereInput | SportsPassScalarWhereInput[]
  }

  export type SportsPassUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<SportsPassCreateWithoutBuyerInput, SportsPassUncheckedCreateWithoutBuyerInput> | SportsPassCreateWithoutBuyerInput[] | SportsPassUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: SportsPassCreateOrConnectWithoutBuyerInput | SportsPassCreateOrConnectWithoutBuyerInput[]
    upsert?: SportsPassUpsertWithWhereUniqueWithoutBuyerInput | SportsPassUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: SportsPassCreateManyBuyerInputEnvelope
    set?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
    disconnect?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
    delete?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
    connect?: SportsPassWhereUniqueInput | SportsPassWhereUniqueInput[]
    update?: SportsPassUpdateWithWhereUniqueWithoutBuyerInput | SportsPassUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: SportsPassUpdateManyWithWhereWithoutBuyerInput | SportsPassUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: SportsPassScalarWhereInput | SportsPassScalarWhereInput[]
  }

  export type GamesCreateNestedOneWithoutSportsPassInput = {
    create?: XOR<GamesCreateWithoutSportsPassInput, GamesUncheckedCreateWithoutSportsPassInput>
    connectOrCreate?: GamesCreateOrConnectWithoutSportsPassInput
    connect?: GamesWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSoldPassesInput = {
    create?: XOR<UserCreateWithoutSoldPassesInput, UserUncheckedCreateWithoutSoldPassesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSoldPassesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBoughtPassesInput = {
    create?: XOR<UserCreateWithoutBoughtPassesInput, UserUncheckedCreateWithoutBoughtPassesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoughtPassesInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GamesUpdateOneRequiredWithoutSportsPassNestedInput = {
    create?: XOR<GamesCreateWithoutSportsPassInput, GamesUncheckedCreateWithoutSportsPassInput>
    connectOrCreate?: GamesCreateOrConnectWithoutSportsPassInput
    upsert?: GamesUpsertWithoutSportsPassInput
    connect?: GamesWhereUniqueInput
    update?: XOR<XOR<GamesUpdateToOneWithWhereWithoutSportsPassInput, GamesUpdateWithoutSportsPassInput>, GamesUncheckedUpdateWithoutSportsPassInput>
  }

  export type UserUpdateOneRequiredWithoutSoldPassesNestedInput = {
    create?: XOR<UserCreateWithoutSoldPassesInput, UserUncheckedCreateWithoutSoldPassesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSoldPassesInput
    upsert?: UserUpsertWithoutSoldPassesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSoldPassesInput, UserUpdateWithoutSoldPassesInput>, UserUncheckedUpdateWithoutSoldPassesInput>
  }

  export type UserUpdateOneWithoutBoughtPassesNestedInput = {
    create?: XOR<UserCreateWithoutBoughtPassesInput, UserUncheckedCreateWithoutBoughtPassesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoughtPassesInput
    upsert?: UserUpsertWithoutBoughtPassesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBoughtPassesInput, UserUpdateWithoutBoughtPassesInput>, UserUncheckedUpdateWithoutBoughtPassesInput>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumClassNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Class | EnumClassFieldRefInput<$PrismaModel> | null
    in?: $Enums.Class[] | ListEnumClassFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Class[] | ListEnumClassFieldRefInput<$PrismaModel> | null
    not?: NestedEnumClassNullableFilter<$PrismaModel> | $Enums.Class | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumClassNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Class | EnumClassFieldRefInput<$PrismaModel> | null
    in?: $Enums.Class[] | ListEnumClassFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Class[] | ListEnumClassFieldRefInput<$PrismaModel> | null
    not?: NestedEnumClassNullableWithAggregatesFilter<$PrismaModel> | $Enums.Class | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumClassNullableFilter<$PrismaModel>
    _max?: NestedEnumClassNullableFilter<$PrismaModel>
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

  export type SportsPassCreateWithoutGameInput = {
    id?: string
    price: number
    seller: UserCreateNestedOneWithoutSoldPassesInput
    buyer?: UserCreateNestedOneWithoutBoughtPassesInput
  }

  export type SportsPassUncheckedCreateWithoutGameInput = {
    id?: string
    price: number
    sellerId: string
    buyerId?: string | null
  }

  export type SportsPassCreateOrConnectWithoutGameInput = {
    where: SportsPassWhereUniqueInput
    create: XOR<SportsPassCreateWithoutGameInput, SportsPassUncheckedCreateWithoutGameInput>
  }

  export type SportsPassCreateManyGameInputEnvelope = {
    data: SportsPassCreateManyGameInput | SportsPassCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type SportsPassUpsertWithWhereUniqueWithoutGameInput = {
    where: SportsPassWhereUniqueInput
    update: XOR<SportsPassUpdateWithoutGameInput, SportsPassUncheckedUpdateWithoutGameInput>
    create: XOR<SportsPassCreateWithoutGameInput, SportsPassUncheckedCreateWithoutGameInput>
  }

  export type SportsPassUpdateWithWhereUniqueWithoutGameInput = {
    where: SportsPassWhereUniqueInput
    data: XOR<SportsPassUpdateWithoutGameInput, SportsPassUncheckedUpdateWithoutGameInput>
  }

  export type SportsPassUpdateManyWithWhereWithoutGameInput = {
    where: SportsPassScalarWhereInput
    data: XOR<SportsPassUpdateManyMutationInput, SportsPassUncheckedUpdateManyWithoutGameInput>
  }

  export type SportsPassScalarWhereInput = {
    AND?: SportsPassScalarWhereInput | SportsPassScalarWhereInput[]
    OR?: SportsPassScalarWhereInput[]
    NOT?: SportsPassScalarWhereInput | SportsPassScalarWhereInput[]
    id?: StringFilter<"SportsPass"> | string
    price?: IntFilter<"SportsPass"> | number
    gameDate?: DateTimeFilter<"SportsPass"> | Date | string
    sellerId?: StringFilter<"SportsPass"> | string
    buyerId?: StringNullableFilter<"SportsPass"> | string | null
  }

  export type SportsPassCreateWithoutSellerInput = {
    id?: string
    price: number
    game: GamesCreateNestedOneWithoutSportsPassInput
    buyer?: UserCreateNestedOneWithoutBoughtPassesInput
  }

  export type SportsPassUncheckedCreateWithoutSellerInput = {
    id?: string
    price: number
    gameDate: Date | string
    buyerId?: string | null
  }

  export type SportsPassCreateOrConnectWithoutSellerInput = {
    where: SportsPassWhereUniqueInput
    create: XOR<SportsPassCreateWithoutSellerInput, SportsPassUncheckedCreateWithoutSellerInput>
  }

  export type SportsPassCreateManySellerInputEnvelope = {
    data: SportsPassCreateManySellerInput | SportsPassCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type SportsPassCreateWithoutBuyerInput = {
    id?: string
    price: number
    game: GamesCreateNestedOneWithoutSportsPassInput
    seller: UserCreateNestedOneWithoutSoldPassesInput
  }

  export type SportsPassUncheckedCreateWithoutBuyerInput = {
    id?: string
    price: number
    gameDate: Date | string
    sellerId: string
  }

  export type SportsPassCreateOrConnectWithoutBuyerInput = {
    where: SportsPassWhereUniqueInput
    create: XOR<SportsPassCreateWithoutBuyerInput, SportsPassUncheckedCreateWithoutBuyerInput>
  }

  export type SportsPassCreateManyBuyerInputEnvelope = {
    data: SportsPassCreateManyBuyerInput | SportsPassCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type SportsPassUpsertWithWhereUniqueWithoutSellerInput = {
    where: SportsPassWhereUniqueInput
    update: XOR<SportsPassUpdateWithoutSellerInput, SportsPassUncheckedUpdateWithoutSellerInput>
    create: XOR<SportsPassCreateWithoutSellerInput, SportsPassUncheckedCreateWithoutSellerInput>
  }

  export type SportsPassUpdateWithWhereUniqueWithoutSellerInput = {
    where: SportsPassWhereUniqueInput
    data: XOR<SportsPassUpdateWithoutSellerInput, SportsPassUncheckedUpdateWithoutSellerInput>
  }

  export type SportsPassUpdateManyWithWhereWithoutSellerInput = {
    where: SportsPassScalarWhereInput
    data: XOR<SportsPassUpdateManyMutationInput, SportsPassUncheckedUpdateManyWithoutSellerInput>
  }

  export type SportsPassUpsertWithWhereUniqueWithoutBuyerInput = {
    where: SportsPassWhereUniqueInput
    update: XOR<SportsPassUpdateWithoutBuyerInput, SportsPassUncheckedUpdateWithoutBuyerInput>
    create: XOR<SportsPassCreateWithoutBuyerInput, SportsPassUncheckedCreateWithoutBuyerInput>
  }

  export type SportsPassUpdateWithWhereUniqueWithoutBuyerInput = {
    where: SportsPassWhereUniqueInput
    data: XOR<SportsPassUpdateWithoutBuyerInput, SportsPassUncheckedUpdateWithoutBuyerInput>
  }

  export type SportsPassUpdateManyWithWhereWithoutBuyerInput = {
    where: SportsPassScalarWhereInput
    data: XOR<SportsPassUpdateManyMutationInput, SportsPassUncheckedUpdateManyWithoutBuyerInput>
  }

  export type GamesCreateWithoutSportsPassInput = {
    date: Date | string
    opponent: string
    guestPrice?: number | null
  }

  export type GamesUncheckedCreateWithoutSportsPassInput = {
    date: Date | string
    opponent: string
    guestPrice?: number | null
  }

  export type GamesCreateOrConnectWithoutSportsPassInput = {
    where: GamesWhereUniqueInput
    create: XOR<GamesCreateWithoutSportsPassInput, GamesUncheckedCreateWithoutSportsPassInput>
  }

  export type UserCreateWithoutSoldPassesInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    seller?: boolean | null
    classification?: $Enums.Class | null
    createdAt?: Date | string
    updatedAt?: Date | string
    boughtPasses?: SportsPassCreateNestedManyWithoutBuyerInput
  }

  export type UserUncheckedCreateWithoutSoldPassesInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    seller?: boolean | null
    classification?: $Enums.Class | null
    createdAt?: Date | string
    updatedAt?: Date | string
    boughtPasses?: SportsPassUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type UserCreateOrConnectWithoutSoldPassesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSoldPassesInput, UserUncheckedCreateWithoutSoldPassesInput>
  }

  export type UserCreateWithoutBoughtPassesInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    seller?: boolean | null
    classification?: $Enums.Class | null
    createdAt?: Date | string
    updatedAt?: Date | string
    soldPasses?: SportsPassCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutBoughtPassesInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    seller?: boolean | null
    classification?: $Enums.Class | null
    createdAt?: Date | string
    updatedAt?: Date | string
    soldPasses?: SportsPassUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutBoughtPassesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBoughtPassesInput, UserUncheckedCreateWithoutBoughtPassesInput>
  }

  export type GamesUpsertWithoutSportsPassInput = {
    update: XOR<GamesUpdateWithoutSportsPassInput, GamesUncheckedUpdateWithoutSportsPassInput>
    create: XOR<GamesCreateWithoutSportsPassInput, GamesUncheckedCreateWithoutSportsPassInput>
    where?: GamesWhereInput
  }

  export type GamesUpdateToOneWithWhereWithoutSportsPassInput = {
    where?: GamesWhereInput
    data: XOR<GamesUpdateWithoutSportsPassInput, GamesUncheckedUpdateWithoutSportsPassInput>
  }

  export type GamesUpdateWithoutSportsPassInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    opponent?: StringFieldUpdateOperationsInput | string
    guestPrice?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GamesUncheckedUpdateWithoutSportsPassInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    opponent?: StringFieldUpdateOperationsInput | string
    guestPrice?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpsertWithoutSoldPassesInput = {
    update: XOR<UserUpdateWithoutSoldPassesInput, UserUncheckedUpdateWithoutSoldPassesInput>
    create: XOR<UserCreateWithoutSoldPassesInput, UserUncheckedCreateWithoutSoldPassesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSoldPassesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSoldPassesInput, UserUncheckedUpdateWithoutSoldPassesInput>
  }

  export type UserUpdateWithoutSoldPassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    seller?: NullableBoolFieldUpdateOperationsInput | boolean | null
    classification?: NullableEnumClassFieldUpdateOperationsInput | $Enums.Class | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boughtPasses?: SportsPassUpdateManyWithoutBuyerNestedInput
  }

  export type UserUncheckedUpdateWithoutSoldPassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    seller?: NullableBoolFieldUpdateOperationsInput | boolean | null
    classification?: NullableEnumClassFieldUpdateOperationsInput | $Enums.Class | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boughtPasses?: SportsPassUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type UserUpsertWithoutBoughtPassesInput = {
    update: XOR<UserUpdateWithoutBoughtPassesInput, UserUncheckedUpdateWithoutBoughtPassesInput>
    create: XOR<UserCreateWithoutBoughtPassesInput, UserUncheckedCreateWithoutBoughtPassesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBoughtPassesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBoughtPassesInput, UserUncheckedUpdateWithoutBoughtPassesInput>
  }

  export type UserUpdateWithoutBoughtPassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    seller?: NullableBoolFieldUpdateOperationsInput | boolean | null
    classification?: NullableEnumClassFieldUpdateOperationsInput | $Enums.Class | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    soldPasses?: SportsPassUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutBoughtPassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    seller?: NullableBoolFieldUpdateOperationsInput | boolean | null
    classification?: NullableEnumClassFieldUpdateOperationsInput | $Enums.Class | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    soldPasses?: SportsPassUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type SportsPassCreateManyGameInput = {
    id?: string
    price: number
    sellerId: string
    buyerId?: string | null
  }

  export type SportsPassUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    seller?: UserUpdateOneRequiredWithoutSoldPassesNestedInput
    buyer?: UserUpdateOneWithoutBoughtPassesNestedInput
  }

  export type SportsPassUncheckedUpdateWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    buyerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SportsPassUncheckedUpdateManyWithoutGameInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    sellerId?: StringFieldUpdateOperationsInput | string
    buyerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SportsPassCreateManySellerInput = {
    id?: string
    price: number
    gameDate: Date | string
    buyerId?: string | null
  }

  export type SportsPassCreateManyBuyerInput = {
    id?: string
    price: number
    gameDate: Date | string
    sellerId: string
  }

  export type SportsPassUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    game?: GamesUpdateOneRequiredWithoutSportsPassNestedInput
    buyer?: UserUpdateOneWithoutBoughtPassesNestedInput
  }

  export type SportsPassUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SportsPassUncheckedUpdateManyWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    buyerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SportsPassUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    game?: GamesUpdateOneRequiredWithoutSportsPassNestedInput
    seller?: UserUpdateOneRequiredWithoutSoldPassesNestedInput
  }

  export type SportsPassUncheckedUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerId?: StringFieldUpdateOperationsInput | string
  }

  export type SportsPassUncheckedUpdateManyWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    gameDate?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerId?: StringFieldUpdateOperationsInput | string
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