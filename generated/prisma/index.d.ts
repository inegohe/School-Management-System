
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model Timetable
 * 
 */
export type Timetable = $Result.DefaultSelection<Prisma.$TimetablePayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  TEACHER: 'TEACHER',
  STUDENT: 'STUDENT',
  PARENT: 'PARENT'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.timetable`: Exposes CRUD operations for the **Timetable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timetables
    * const timetables = await prisma.timetable.findMany()
    * ```
    */
  get timetable(): Prisma.TimetableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    User: 'User',
    School: 'School',
    Class: 'Class',
    Timetable: 'Timetable',
    Attendance: 'Attendance'
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
      modelProps: "user" | "school" | "class" | "timetable" | "attendance"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      Timetable: {
        payload: Prisma.$TimetablePayload<ExtArgs>
        fields: Prisma.TimetableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimetableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimetableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>
          }
          findFirst: {
            args: Prisma.TimetableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimetableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>
          }
          findMany: {
            args: Prisma.TimetableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>[]
          }
          create: {
            args: Prisma.TimetableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>
          }
          createMany: {
            args: Prisma.TimetableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimetableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>[]
          }
          delete: {
            args: Prisma.TimetableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>
          }
          update: {
            args: Prisma.TimetableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>
          }
          deleteMany: {
            args: Prisma.TimetableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimetableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimetableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>[]
          }
          upsert: {
            args: Prisma.TimetableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>
          }
          aggregate: {
            args: Prisma.TimetableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimetable>
          }
          groupBy: {
            args: Prisma.TimetableGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimetableGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimetableCountArgs<ExtArgs>
            result: $Utils.Optional<TimetableCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
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
    user?: UserOmit
    school?: SchoolOmit
    class?: ClassOmit
    timetable?: TimetableOmit
    attendance?: AttendanceOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    children: number
    Class: number
    Attendance: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | UserCountOutputTypeCountChildrenArgs
    Class?: boolean | UserCountOutputTypeCountClassArgs
    Attendance?: boolean | UserCountOutputTypeCountAttendanceArgs
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
  export type UserCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    User: number
    Class: number
    Timetable: number
    Attendance: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | SchoolCountOutputTypeCountUserArgs
    Class?: boolean | SchoolCountOutputTypeCountClassArgs
    Timetable?: boolean | SchoolCountOutputTypeCountTimetableArgs
    Attendance?: boolean | SchoolCountOutputTypeCountAttendanceArgs
  }

  // Custom InputTypes
  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountClassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountTimetableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimetableWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    Attendance: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Attendance?: boolean | ClassCountOutputTypeCountAttendanceArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * Models
   */

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
    password: string | null
    role: $Enums.Role | null
    schoolId: string | null
    class: string | null
    parentId: string | null
    oracleNo: string | null
    registrationNo: string | null
    designation: string | null
    post: string | null
    payrollNo: string | null
    level: string | null
    yearOfExit: string | null
    address: string | null
    phoneNo: string | null
    yearOfService: string | null
    teaching: boolean | null
    parentNo: string | null
    parentName: string | null
    DOA: Date | null
    birthdate: Date | null
    admissionNo: string | null
    gender: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    schoolId: string | null
    class: string | null
    parentId: string | null
    oracleNo: string | null
    registrationNo: string | null
    designation: string | null
    post: string | null
    payrollNo: string | null
    level: string | null
    yearOfExit: string | null
    address: string | null
    phoneNo: string | null
    yearOfService: string | null
    teaching: boolean | null
    parentNo: string | null
    parentName: string | null
    DOA: Date | null
    birthdate: Date | null
    admissionNo: string | null
    gender: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    schoolId: number
    class: number
    parentId: number
    oracleNo: number
    registrationNo: number
    designation: number
    post: number
    payrollNo: number
    level: number
    yearOfExit: number
    address: number
    phoneNo: number
    yearOfService: number
    teaching: number
    parentNo: number
    parentName: number
    DOA: number
    birthdate: number
    admissionNo: number
    gender: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    schoolId?: true
    class?: true
    parentId?: true
    oracleNo?: true
    registrationNo?: true
    designation?: true
    post?: true
    payrollNo?: true
    level?: true
    yearOfExit?: true
    address?: true
    phoneNo?: true
    yearOfService?: true
    teaching?: true
    parentNo?: true
    parentName?: true
    DOA?: true
    birthdate?: true
    admissionNo?: true
    gender?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    schoolId?: true
    class?: true
    parentId?: true
    oracleNo?: true
    registrationNo?: true
    designation?: true
    post?: true
    payrollNo?: true
    level?: true
    yearOfExit?: true
    address?: true
    phoneNo?: true
    yearOfService?: true
    teaching?: true
    parentNo?: true
    parentName?: true
    DOA?: true
    birthdate?: true
    admissionNo?: true
    gender?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    schoolId?: true
    class?: true
    parentId?: true
    oracleNo?: true
    registrationNo?: true
    designation?: true
    post?: true
    payrollNo?: true
    level?: true
    yearOfExit?: true
    address?: true
    phoneNo?: true
    yearOfService?: true
    teaching?: true
    parentNo?: true
    parentName?: true
    DOA?: true
    birthdate?: true
    admissionNo?: true
    gender?: true
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
    name: string
    email: string
    password: string
    role: $Enums.Role
    schoolId: string | null
    class: string | null
    parentId: string | null
    oracleNo: string | null
    registrationNo: string | null
    designation: string | null
    post: string | null
    payrollNo: string | null
    level: string | null
    yearOfExit: string | null
    address: string | null
    phoneNo: string | null
    yearOfService: string | null
    teaching: boolean | null
    parentNo: string | null
    parentName: string | null
    DOA: Date | null
    birthdate: Date | null
    admissionNo: string | null
    gender: string | null
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
    password?: boolean
    role?: boolean
    schoolId?: boolean
    class?: boolean
    parentId?: boolean
    oracleNo?: boolean
    registrationNo?: boolean
    designation?: boolean
    post?: boolean
    payrollNo?: boolean
    level?: boolean
    yearOfExit?: boolean
    address?: boolean
    phoneNo?: boolean
    yearOfService?: boolean
    teaching?: boolean
    parentNo?: boolean
    parentName?: boolean
    DOA?: boolean
    birthdate?: boolean
    admissionNo?: boolean
    gender?: boolean
    school?: boolean | User$schoolArgs<ExtArgs>
    parent?: boolean | User$parentArgs<ExtArgs>
    children?: boolean | User$childrenArgs<ExtArgs>
    Class?: boolean | User$ClassArgs<ExtArgs>
    Attendance?: boolean | User$AttendanceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    schoolId?: boolean
    class?: boolean
    parentId?: boolean
    oracleNo?: boolean
    registrationNo?: boolean
    designation?: boolean
    post?: boolean
    payrollNo?: boolean
    level?: boolean
    yearOfExit?: boolean
    address?: boolean
    phoneNo?: boolean
    yearOfService?: boolean
    teaching?: boolean
    parentNo?: boolean
    parentName?: boolean
    DOA?: boolean
    birthdate?: boolean
    admissionNo?: boolean
    gender?: boolean
    school?: boolean | User$schoolArgs<ExtArgs>
    parent?: boolean | User$parentArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    schoolId?: boolean
    class?: boolean
    parentId?: boolean
    oracleNo?: boolean
    registrationNo?: boolean
    designation?: boolean
    post?: boolean
    payrollNo?: boolean
    level?: boolean
    yearOfExit?: boolean
    address?: boolean
    phoneNo?: boolean
    yearOfService?: boolean
    teaching?: boolean
    parentNo?: boolean
    parentName?: boolean
    DOA?: boolean
    birthdate?: boolean
    admissionNo?: boolean
    gender?: boolean
    school?: boolean | User$schoolArgs<ExtArgs>
    parent?: boolean | User$parentArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    schoolId?: boolean
    class?: boolean
    parentId?: boolean
    oracleNo?: boolean
    registrationNo?: boolean
    designation?: boolean
    post?: boolean
    payrollNo?: boolean
    level?: boolean
    yearOfExit?: boolean
    address?: boolean
    phoneNo?: boolean
    yearOfService?: boolean
    teaching?: boolean
    parentNo?: boolean
    parentName?: boolean
    DOA?: boolean
    birthdate?: boolean
    admissionNo?: boolean
    gender?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "schoolId" | "class" | "parentId" | "oracleNo" | "registrationNo" | "designation" | "post" | "payrollNo" | "level" | "yearOfExit" | "address" | "phoneNo" | "yearOfService" | "teaching" | "parentNo" | "parentName" | "DOA" | "birthdate" | "admissionNo" | "gender", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | User$schoolArgs<ExtArgs>
    parent?: boolean | User$parentArgs<ExtArgs>
    children?: boolean | User$childrenArgs<ExtArgs>
    Class?: boolean | User$ClassArgs<ExtArgs>
    Attendance?: boolean | User$AttendanceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | User$schoolArgs<ExtArgs>
    parent?: boolean | User$parentArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | User$schoolArgs<ExtArgs>
    parent?: boolean | User$parentArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs> | null
      parent: Prisma.$UserPayload<ExtArgs> | null
      children: Prisma.$UserPayload<ExtArgs>[]
      Class: Prisma.$ClassPayload<ExtArgs>[]
      Attendance: Prisma.$AttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      schoolId: string | null
      class: string | null
      parentId: string | null
      oracleNo: string | null
      registrationNo: string | null
      designation: string | null
      post: string | null
      payrollNo: string | null
      level: string | null
      yearOfExit: string | null
      address: string | null
      phoneNo: string | null
      yearOfService: string | null
      teaching: boolean | null
      parentNo: string | null
      parentName: string | null
      DOA: Date | null
      birthdate: Date | null
      admissionNo: string | null
      gender: string | null
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
    school<T extends User$schoolArgs<ExtArgs> = {}>(args?: Subset<T, User$schoolArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parent<T extends User$parentArgs<ExtArgs> = {}>(args?: Subset<T, User$parentArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends User$childrenArgs<ExtArgs> = {}>(args?: Subset<T, User$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Class<T extends User$ClassArgs<ExtArgs> = {}>(args?: Subset<T, User$ClassArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Attendance<T extends User$AttendanceArgs<ExtArgs> = {}>(args?: Subset<T, User$AttendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly schoolId: FieldRef<"User", 'String'>
    readonly class: FieldRef<"User", 'String'>
    readonly parentId: FieldRef<"User", 'String'>
    readonly oracleNo: FieldRef<"User", 'String'>
    readonly registrationNo: FieldRef<"User", 'String'>
    readonly designation: FieldRef<"User", 'String'>
    readonly post: FieldRef<"User", 'String'>
    readonly payrollNo: FieldRef<"User", 'String'>
    readonly level: FieldRef<"User", 'String'>
    readonly yearOfExit: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly phoneNo: FieldRef<"User", 'String'>
    readonly yearOfService: FieldRef<"User", 'String'>
    readonly teaching: FieldRef<"User", 'Boolean'>
    readonly parentNo: FieldRef<"User", 'String'>
    readonly parentName: FieldRef<"User", 'String'>
    readonly DOA: FieldRef<"User", 'DateTime'>
    readonly birthdate: FieldRef<"User", 'DateTime'>
    readonly admissionNo: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.school
   */
  export type User$schoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    where?: SchoolWhereInput
  }

  /**
   * User.parent
   */
  export type User$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.children
   */
  export type User$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.Class
   */
  export type User$ClassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * User.Attendance
   */
  export type User$AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
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
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    primaryColor: string | null
    secondaryColor: string | null
    mutedColor: string | null
    accentColor: string | null
    logo: string | null
    missionStatement: string | null
    visionStatement: string | null
    principal: string | null
    vicePrincipal: string | null
    slogan: string | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    primaryColor: string | null
    secondaryColor: string | null
    mutedColor: string | null
    accentColor: string | null
    logo: string | null
    missionStatement: string | null
    visionStatement: string | null
    principal: string | null
    vicePrincipal: string | null
    slogan: string | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    name: number
    address: number
    primaryColor: number
    secondaryColor: number
    mutedColor: number
    accentColor: number
    logo: number
    missionStatement: number
    visionStatement: number
    principal: number
    vicePrincipal: number
    slogan: number
    subjects: number
    _all: number
  }


  export type SchoolMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    primaryColor?: true
    secondaryColor?: true
    mutedColor?: true
    accentColor?: true
    logo?: true
    missionStatement?: true
    visionStatement?: true
    principal?: true
    vicePrincipal?: true
    slogan?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    primaryColor?: true
    secondaryColor?: true
    mutedColor?: true
    accentColor?: true
    logo?: true
    missionStatement?: true
    visionStatement?: true
    principal?: true
    vicePrincipal?: true
    slogan?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    primaryColor?: true
    secondaryColor?: true
    mutedColor?: true
    accentColor?: true
    logo?: true
    missionStatement?: true
    visionStatement?: true
    principal?: true
    vicePrincipal?: true
    slogan?: true
    subjects?: true
    _all?: true
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[]
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    id: string
    name: string
    address: string
    primaryColor: string
    secondaryColor: string
    mutedColor: string
    accentColor: string
    logo: string
    missionStatement: string
    visionStatement: string
    principal: string
    vicePrincipal: string
    slogan: string
    subjects: string[]
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    mutedColor?: boolean
    accentColor?: boolean
    logo?: boolean
    missionStatement?: boolean
    visionStatement?: boolean
    principal?: boolean
    vicePrincipal?: boolean
    slogan?: boolean
    subjects?: boolean
    User?: boolean | School$UserArgs<ExtArgs>
    Class?: boolean | School$ClassArgs<ExtArgs>
    Timetable?: boolean | School$TimetableArgs<ExtArgs>
    Attendance?: boolean | School$AttendanceArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    mutedColor?: boolean
    accentColor?: boolean
    logo?: boolean
    missionStatement?: boolean
    visionStatement?: boolean
    principal?: boolean
    vicePrincipal?: boolean
    slogan?: boolean
    subjects?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    mutedColor?: boolean
    accentColor?: boolean
    logo?: boolean
    missionStatement?: boolean
    visionStatement?: boolean
    principal?: boolean
    vicePrincipal?: boolean
    slogan?: boolean
    subjects?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    mutedColor?: boolean
    accentColor?: boolean
    logo?: boolean
    missionStatement?: boolean
    visionStatement?: boolean
    principal?: boolean
    vicePrincipal?: boolean
    slogan?: boolean
    subjects?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "primaryColor" | "secondaryColor" | "mutedColor" | "accentColor" | "logo" | "missionStatement" | "visionStatement" | "principal" | "vicePrincipal" | "slogan" | "subjects", ExtArgs["result"]["school"]>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | School$UserArgs<ExtArgs>
    Class?: boolean | School$ClassArgs<ExtArgs>
    Timetable?: boolean | School$TimetableArgs<ExtArgs>
    Attendance?: boolean | School$AttendanceArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>[]
      Class: Prisma.$ClassPayload<ExtArgs>[]
      Timetable: Prisma.$TimetablePayload<ExtArgs>[]
      Attendance: Prisma.$AttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      primaryColor: string
      secondaryColor: string
      mutedColor: string
      accentColor: string
      logo: string
      missionStatement: string
      visionStatement: string
      principal: string
      vicePrincipal: string
      slogan: string
      subjects: string[]
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schools and returns the data saved in the database.
     * @param {SchoolCreateManyAndReturnArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools and returns the data updated in the database.
     * @param {SchoolUpdateManyAndReturnArgs} args - Arguments to update many Schools.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.updateManyAndReturn({
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
    updateManyAndReturn<T extends SchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
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
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends School$UserArgs<ExtArgs> = {}>(args?: Subset<T, School$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Class<T extends School$ClassArgs<ExtArgs> = {}>(args?: Subset<T, School$ClassArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Timetable<T extends School$TimetableArgs<ExtArgs> = {}>(args?: Subset<T, School$TimetableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Attendance<T extends School$AttendanceArgs<ExtArgs> = {}>(args?: Subset<T, School$AttendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the School model
   */
  interface SchoolFieldRefs {
    readonly id: FieldRef<"School", 'String'>
    readonly name: FieldRef<"School", 'String'>
    readonly address: FieldRef<"School", 'String'>
    readonly primaryColor: FieldRef<"School", 'String'>
    readonly secondaryColor: FieldRef<"School", 'String'>
    readonly mutedColor: FieldRef<"School", 'String'>
    readonly accentColor: FieldRef<"School", 'String'>
    readonly logo: FieldRef<"School", 'String'>
    readonly missionStatement: FieldRef<"School", 'String'>
    readonly visionStatement: FieldRef<"School", 'String'>
    readonly principal: FieldRef<"School", 'String'>
    readonly vicePrincipal: FieldRef<"School", 'String'>
    readonly slogan: FieldRef<"School", 'String'>
    readonly subjects: FieldRef<"School", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School createManyAndReturn
   */
  export type SchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School updateManyAndReturn
   */
  export type SchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to delete.
     */
    limit?: number
  }

  /**
   * School.User
   */
  export type School$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * School.Class
   */
  export type School$ClassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * School.Timetable
   */
  export type School$TimetableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    where?: TimetableWhereInput
    orderBy?: TimetableOrderByWithRelationInput | TimetableOrderByWithRelationInput[]
    cursor?: TimetableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimetableScalarFieldEnum | TimetableScalarFieldEnum[]
  }

  /**
   * School.Attendance
   */
  export type School$AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
  }


  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassMinAggregateOutputType = {
    id: string | null
    name: string | null
    schoolId: string | null
    teacherId: string | null
  }

  export type ClassMaxAggregateOutputType = {
    id: string | null
    name: string | null
    schoolId: string | null
    teacherId: string | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    name: number
    schoolId: number
    teacherId: number
    _all: number
  }


  export type ClassMinAggregateInputType = {
    id?: true
    name?: true
    schoolId?: true
    teacherId?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    name?: true
    schoolId?: true
    teacherId?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    name?: true
    schoolId?: true
    teacherId?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: string
    name: string
    schoolId: string
    teacherId: string
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    schoolId?: boolean
    teacherId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    Attendance?: boolean | Class$AttendanceArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    schoolId?: boolean
    teacherId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    schoolId?: boolean
    teacherId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    name?: boolean
    schoolId?: boolean
    teacherId?: boolean
  }

  export type ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "schoolId" | "teacherId", ExtArgs["result"]["class"]>
  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    Attendance?: boolean | Class$AttendanceArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
      teacher: Prisma.$UserPayload<ExtArgs>
      Attendance: Prisma.$AttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      schoolId: string
      teacherId: string
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClassUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClassUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
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
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Attendance<T extends Class$AttendanceArgs<ExtArgs> = {}>(args?: Subset<T, Class$AttendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Class model
   */
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'String'>
    readonly name: FieldRef<"Class", 'String'>
    readonly schoolId: FieldRef<"Class", 'String'>
    readonly teacherId: FieldRef<"Class", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class createManyAndReturn
   */
  export type ClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class updateManyAndReturn
   */
  export type ClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Class.Attendance
   */
  export type Class$AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model Timetable
   */

  export type AggregateTimetable = {
    _count: TimetableCountAggregateOutputType | null
    _avg: TimetableAvgAggregateOutputType | null
    _sum: TimetableSumAggregateOutputType | null
    _min: TimetableMinAggregateOutputType | null
    _max: TimetableMaxAggregateOutputType | null
  }

  export type TimetableAvgAggregateOutputType = {
    period: number | null
    periodSpan: number | null
  }

  export type TimetableSumAggregateOutputType = {
    period: number | null
    periodSpan: number | null
  }

  export type TimetableMinAggregateOutputType = {
    id: string | null
    day: string | null
    startTime: Date | null
    endTime: Date | null
    class: string | null
    subject: string | null
    period: number | null
    periodSpan: number | null
    schoolId: string | null
  }

  export type TimetableMaxAggregateOutputType = {
    id: string | null
    day: string | null
    startTime: Date | null
    endTime: Date | null
    class: string | null
    subject: string | null
    period: number | null
    periodSpan: number | null
    schoolId: string | null
  }

  export type TimetableCountAggregateOutputType = {
    id: number
    day: number
    startTime: number
    endTime: number
    class: number
    subject: number
    period: number
    periodSpan: number
    schoolId: number
    _all: number
  }


  export type TimetableAvgAggregateInputType = {
    period?: true
    periodSpan?: true
  }

  export type TimetableSumAggregateInputType = {
    period?: true
    periodSpan?: true
  }

  export type TimetableMinAggregateInputType = {
    id?: true
    day?: true
    startTime?: true
    endTime?: true
    class?: true
    subject?: true
    period?: true
    periodSpan?: true
    schoolId?: true
  }

  export type TimetableMaxAggregateInputType = {
    id?: true
    day?: true
    startTime?: true
    endTime?: true
    class?: true
    subject?: true
    period?: true
    periodSpan?: true
    schoolId?: true
  }

  export type TimetableCountAggregateInputType = {
    id?: true
    day?: true
    startTime?: true
    endTime?: true
    class?: true
    subject?: true
    period?: true
    periodSpan?: true
    schoolId?: true
    _all?: true
  }

  export type TimetableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timetable to aggregate.
     */
    where?: TimetableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timetables to fetch.
     */
    orderBy?: TimetableOrderByWithRelationInput | TimetableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimetableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timetables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Timetables
    **/
    _count?: true | TimetableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimetableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimetableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimetableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimetableMaxAggregateInputType
  }

  export type GetTimetableAggregateType<T extends TimetableAggregateArgs> = {
        [P in keyof T & keyof AggregateTimetable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimetable[P]>
      : GetScalarType<T[P], AggregateTimetable[P]>
  }




  export type TimetableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimetableWhereInput
    orderBy?: TimetableOrderByWithAggregationInput | TimetableOrderByWithAggregationInput[]
    by: TimetableScalarFieldEnum[] | TimetableScalarFieldEnum
    having?: TimetableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimetableCountAggregateInputType | true
    _avg?: TimetableAvgAggregateInputType
    _sum?: TimetableSumAggregateInputType
    _min?: TimetableMinAggregateInputType
    _max?: TimetableMaxAggregateInputType
  }

  export type TimetableGroupByOutputType = {
    id: string
    day: string
    startTime: Date
    endTime: Date
    class: string
    subject: string
    period: number
    periodSpan: number
    schoolId: string
    _count: TimetableCountAggregateOutputType | null
    _avg: TimetableAvgAggregateOutputType | null
    _sum: TimetableSumAggregateOutputType | null
    _min: TimetableMinAggregateOutputType | null
    _max: TimetableMaxAggregateOutputType | null
  }

  type GetTimetableGroupByPayload<T extends TimetableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimetableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimetableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimetableGroupByOutputType[P]>
            : GetScalarType<T[P], TimetableGroupByOutputType[P]>
        }
      >
    >


  export type TimetableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    startTime?: boolean
    endTime?: boolean
    class?: boolean
    subject?: boolean
    period?: boolean
    periodSpan?: boolean
    schoolId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timetable"]>

  export type TimetableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    startTime?: boolean
    endTime?: boolean
    class?: boolean
    subject?: boolean
    period?: boolean
    periodSpan?: boolean
    schoolId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timetable"]>

  export type TimetableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    startTime?: boolean
    endTime?: boolean
    class?: boolean
    subject?: boolean
    period?: boolean
    periodSpan?: boolean
    schoolId?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["timetable"]>

  export type TimetableSelectScalar = {
    id?: boolean
    day?: boolean
    startTime?: boolean
    endTime?: boolean
    class?: boolean
    subject?: boolean
    period?: boolean
    periodSpan?: boolean
    schoolId?: boolean
  }

  export type TimetableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "day" | "startTime" | "endTime" | "class" | "subject" | "period" | "periodSpan" | "schoolId", ExtArgs["result"]["timetable"]>
  export type TimetableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type TimetableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type TimetableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $TimetablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Timetable"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      day: string
      startTime: Date
      endTime: Date
      class: string
      subject: string
      period: number
      periodSpan: number
      schoolId: string
    }, ExtArgs["result"]["timetable"]>
    composites: {}
  }

  type TimetableGetPayload<S extends boolean | null | undefined | TimetableDefaultArgs> = $Result.GetResult<Prisma.$TimetablePayload, S>

  type TimetableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimetableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimetableCountAggregateInputType | true
    }

  export interface TimetableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Timetable'], meta: { name: 'Timetable' } }
    /**
     * Find zero or one Timetable that matches the filter.
     * @param {TimetableFindUniqueArgs} args - Arguments to find a Timetable
     * @example
     * // Get one Timetable
     * const timetable = await prisma.timetable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimetableFindUniqueArgs>(args: SelectSubset<T, TimetableFindUniqueArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Timetable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimetableFindUniqueOrThrowArgs} args - Arguments to find a Timetable
     * @example
     * // Get one Timetable
     * const timetable = await prisma.timetable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimetableFindUniqueOrThrowArgs>(args: SelectSubset<T, TimetableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Timetable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableFindFirstArgs} args - Arguments to find a Timetable
     * @example
     * // Get one Timetable
     * const timetable = await prisma.timetable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimetableFindFirstArgs>(args?: SelectSubset<T, TimetableFindFirstArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Timetable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableFindFirstOrThrowArgs} args - Arguments to find a Timetable
     * @example
     * // Get one Timetable
     * const timetable = await prisma.timetable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimetableFindFirstOrThrowArgs>(args?: SelectSubset<T, TimetableFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Timetables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timetables
     * const timetables = await prisma.timetable.findMany()
     * 
     * // Get first 10 Timetables
     * const timetables = await prisma.timetable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timetableWithIdOnly = await prisma.timetable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TimetableFindManyArgs>(args?: SelectSubset<T, TimetableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Timetable.
     * @param {TimetableCreateArgs} args - Arguments to create a Timetable.
     * @example
     * // Create one Timetable
     * const Timetable = await prisma.timetable.create({
     *   data: {
     *     // ... data to create a Timetable
     *   }
     * })
     * 
     */
    create<T extends TimetableCreateArgs>(args: SelectSubset<T, TimetableCreateArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Timetables.
     * @param {TimetableCreateManyArgs} args - Arguments to create many Timetables.
     * @example
     * // Create many Timetables
     * const timetable = await prisma.timetable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimetableCreateManyArgs>(args?: SelectSubset<T, TimetableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Timetables and returns the data saved in the database.
     * @param {TimetableCreateManyAndReturnArgs} args - Arguments to create many Timetables.
     * @example
     * // Create many Timetables
     * const timetable = await prisma.timetable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Timetables and only return the `id`
     * const timetableWithIdOnly = await prisma.timetable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimetableCreateManyAndReturnArgs>(args?: SelectSubset<T, TimetableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Timetable.
     * @param {TimetableDeleteArgs} args - Arguments to delete one Timetable.
     * @example
     * // Delete one Timetable
     * const Timetable = await prisma.timetable.delete({
     *   where: {
     *     // ... filter to delete one Timetable
     *   }
     * })
     * 
     */
    delete<T extends TimetableDeleteArgs>(args: SelectSubset<T, TimetableDeleteArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Timetable.
     * @param {TimetableUpdateArgs} args - Arguments to update one Timetable.
     * @example
     * // Update one Timetable
     * const timetable = await prisma.timetable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimetableUpdateArgs>(args: SelectSubset<T, TimetableUpdateArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Timetables.
     * @param {TimetableDeleteManyArgs} args - Arguments to filter Timetables to delete.
     * @example
     * // Delete a few Timetables
     * const { count } = await prisma.timetable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimetableDeleteManyArgs>(args?: SelectSubset<T, TimetableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timetables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timetables
     * const timetable = await prisma.timetable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimetableUpdateManyArgs>(args: SelectSubset<T, TimetableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timetables and returns the data updated in the database.
     * @param {TimetableUpdateManyAndReturnArgs} args - Arguments to update many Timetables.
     * @example
     * // Update many Timetables
     * const timetable = await prisma.timetable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Timetables and only return the `id`
     * const timetableWithIdOnly = await prisma.timetable.updateManyAndReturn({
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
    updateManyAndReturn<T extends TimetableUpdateManyAndReturnArgs>(args: SelectSubset<T, TimetableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Timetable.
     * @param {TimetableUpsertArgs} args - Arguments to update or create a Timetable.
     * @example
     * // Update or create a Timetable
     * const timetable = await prisma.timetable.upsert({
     *   create: {
     *     // ... data to create a Timetable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timetable we want to update
     *   }
     * })
     */
    upsert<T extends TimetableUpsertArgs>(args: SelectSubset<T, TimetableUpsertArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Timetables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableCountArgs} args - Arguments to filter Timetables to count.
     * @example
     * // Count the number of Timetables
     * const count = await prisma.timetable.count({
     *   where: {
     *     // ... the filter for the Timetables we want to count
     *   }
     * })
    **/
    count<T extends TimetableCountArgs>(
      args?: Subset<T, TimetableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimetableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timetable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimetableAggregateArgs>(args: Subset<T, TimetableAggregateArgs>): Prisma.PrismaPromise<GetTimetableAggregateType<T>>

    /**
     * Group by Timetable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableGroupByArgs} args - Group by arguments.
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
      T extends TimetableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimetableGroupByArgs['orderBy'] }
        : { orderBy?: TimetableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimetableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimetableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Timetable model
   */
  readonly fields: TimetableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Timetable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimetableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Timetable model
   */
  interface TimetableFieldRefs {
    readonly id: FieldRef<"Timetable", 'String'>
    readonly day: FieldRef<"Timetable", 'String'>
    readonly startTime: FieldRef<"Timetable", 'DateTime'>
    readonly endTime: FieldRef<"Timetable", 'DateTime'>
    readonly class: FieldRef<"Timetable", 'String'>
    readonly subject: FieldRef<"Timetable", 'String'>
    readonly period: FieldRef<"Timetable", 'Int'>
    readonly periodSpan: FieldRef<"Timetable", 'Int'>
    readonly schoolId: FieldRef<"Timetable", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Timetable findUnique
   */
  export type TimetableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * Filter, which Timetable to fetch.
     */
    where: TimetableWhereUniqueInput
  }

  /**
   * Timetable findUniqueOrThrow
   */
  export type TimetableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * Filter, which Timetable to fetch.
     */
    where: TimetableWhereUniqueInput
  }

  /**
   * Timetable findFirst
   */
  export type TimetableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * Filter, which Timetable to fetch.
     */
    where?: TimetableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timetables to fetch.
     */
    orderBy?: TimetableOrderByWithRelationInput | TimetableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timetables.
     */
    cursor?: TimetableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timetables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timetables.
     */
    distinct?: TimetableScalarFieldEnum | TimetableScalarFieldEnum[]
  }

  /**
   * Timetable findFirstOrThrow
   */
  export type TimetableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * Filter, which Timetable to fetch.
     */
    where?: TimetableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timetables to fetch.
     */
    orderBy?: TimetableOrderByWithRelationInput | TimetableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timetables.
     */
    cursor?: TimetableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timetables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timetables.
     */
    distinct?: TimetableScalarFieldEnum | TimetableScalarFieldEnum[]
  }

  /**
   * Timetable findMany
   */
  export type TimetableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * Filter, which Timetables to fetch.
     */
    where?: TimetableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timetables to fetch.
     */
    orderBy?: TimetableOrderByWithRelationInput | TimetableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Timetables.
     */
    cursor?: TimetableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timetables.
     */
    skip?: number
    distinct?: TimetableScalarFieldEnum | TimetableScalarFieldEnum[]
  }

  /**
   * Timetable create
   */
  export type TimetableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * The data needed to create a Timetable.
     */
    data: XOR<TimetableCreateInput, TimetableUncheckedCreateInput>
  }

  /**
   * Timetable createMany
   */
  export type TimetableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Timetables.
     */
    data: TimetableCreateManyInput | TimetableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Timetable createManyAndReturn
   */
  export type TimetableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * The data used to create many Timetables.
     */
    data: TimetableCreateManyInput | TimetableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Timetable update
   */
  export type TimetableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * The data needed to update a Timetable.
     */
    data: XOR<TimetableUpdateInput, TimetableUncheckedUpdateInput>
    /**
     * Choose, which Timetable to update.
     */
    where: TimetableWhereUniqueInput
  }

  /**
   * Timetable updateMany
   */
  export type TimetableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Timetables.
     */
    data: XOR<TimetableUpdateManyMutationInput, TimetableUncheckedUpdateManyInput>
    /**
     * Filter which Timetables to update
     */
    where?: TimetableWhereInput
    /**
     * Limit how many Timetables to update.
     */
    limit?: number
  }

  /**
   * Timetable updateManyAndReturn
   */
  export type TimetableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * The data used to update Timetables.
     */
    data: XOR<TimetableUpdateManyMutationInput, TimetableUncheckedUpdateManyInput>
    /**
     * Filter which Timetables to update
     */
    where?: TimetableWhereInput
    /**
     * Limit how many Timetables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Timetable upsert
   */
  export type TimetableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * The filter to search for the Timetable to update in case it exists.
     */
    where: TimetableWhereUniqueInput
    /**
     * In case the Timetable found by the `where` argument doesn't exist, create a new Timetable with this data.
     */
    create: XOR<TimetableCreateInput, TimetableUncheckedCreateInput>
    /**
     * In case the Timetable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimetableUpdateInput, TimetableUncheckedUpdateInput>
  }

  /**
   * Timetable delete
   */
  export type TimetableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * Filter which Timetable to delete.
     */
    where: TimetableWhereUniqueInput
  }

  /**
   * Timetable deleteMany
   */
  export type TimetableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timetables to delete
     */
    where?: TimetableWhereInput
    /**
     * Limit how many Timetables to delete.
     */
    limit?: number
  }

  /**
   * Timetable without action
   */
  export type TimetableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Timetable
     */
    omit?: TimetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    date: Date | null
    status: string | null
    schoolId: string | null
    studentId: string | null
    classId: string | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    status: string | null
    schoolId: string | null
    studentId: string | null
    classId: string | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    date: number
    status: number
    schoolId: number
    studentId: number
    classId: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    date?: true
    status?: true
    schoolId?: true
    studentId?: true
    classId?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    date?: true
    status?: true
    schoolId?: true
    studentId?: true
    classId?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    date?: true
    status?: true
    schoolId?: true
    studentId?: true
    classId?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    date: Date
    status: string
    schoolId: string
    studentId: string
    classId: string
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    schoolId?: boolean
    studentId?: boolean
    classId?: boolean
    school?: boolean | Attendance$schoolArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    schoolId?: boolean
    studentId?: boolean
    classId?: boolean
    school?: boolean | Attendance$schoolArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    schoolId?: boolean
    studentId?: boolean
    classId?: boolean
    school?: boolean | Attendance$schoolArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    date?: boolean
    status?: boolean
    schoolId?: boolean
    studentId?: boolean
    classId?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "status" | "schoolId" | "studentId" | "classId", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | Attendance$schoolArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | Attendance$schoolArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | Attendance$schoolArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs> | null
      student: Prisma.$UserPayload<ExtArgs>
      class: Prisma.$ClassPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      status: string
      schoolId: string
      studentId: string
      classId: string
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends Attendance$schoolArgs<ExtArgs> = {}>(args?: Subset<T, Attendance$schoolArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly date: FieldRef<"Attendance", 'DateTime'>
    readonly status: FieldRef<"Attendance", 'String'>
    readonly schoolId: FieldRef<"Attendance", 'String'>
    readonly studentId: FieldRef<"Attendance", 'String'>
    readonly classId: FieldRef<"Attendance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance.school
   */
  export type Attendance$schoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    where?: SchoolWhereInput
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    schoolId: 'schoolId',
    class: 'class',
    parentId: 'parentId',
    oracleNo: 'oracleNo',
    registrationNo: 'registrationNo',
    designation: 'designation',
    post: 'post',
    payrollNo: 'payrollNo',
    level: 'level',
    yearOfExit: 'yearOfExit',
    address: 'address',
    phoneNo: 'phoneNo',
    yearOfService: 'yearOfService',
    teaching: 'teaching',
    parentNo: 'parentNo',
    parentName: 'parentName',
    DOA: 'DOA',
    birthdate: 'birthdate',
    admissionNo: 'admissionNo',
    gender: 'gender'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SchoolScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    primaryColor: 'primaryColor',
    secondaryColor: 'secondaryColor',
    mutedColor: 'mutedColor',
    accentColor: 'accentColor',
    logo: 'logo',
    missionStatement: 'missionStatement',
    visionStatement: 'visionStatement',
    principal: 'principal',
    vicePrincipal: 'vicePrincipal',
    slogan: 'slogan',
    subjects: 'subjects'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    name: 'name',
    schoolId: 'schoolId',
    teacherId: 'teacherId'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const TimetableScalarFieldEnum: {
    id: 'id',
    day: 'day',
    startTime: 'startTime',
    endTime: 'endTime',
    class: 'class',
    subject: 'subject',
    period: 'period',
    periodSpan: 'periodSpan',
    schoolId: 'schoolId'
  };

  export type TimetableScalarFieldEnum = (typeof TimetableScalarFieldEnum)[keyof typeof TimetableScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    date: 'date',
    status: 'status',
    schoolId: 'schoolId',
    studentId: 'studentId',
    classId: 'classId'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    schoolId?: StringNullableFilter<"User"> | string | null
    class?: StringNullableFilter<"User"> | string | null
    parentId?: StringNullableFilter<"User"> | string | null
    oracleNo?: StringNullableFilter<"User"> | string | null
    registrationNo?: StringNullableFilter<"User"> | string | null
    designation?: StringNullableFilter<"User"> | string | null
    post?: StringNullableFilter<"User"> | string | null
    payrollNo?: StringNullableFilter<"User"> | string | null
    level?: StringNullableFilter<"User"> | string | null
    yearOfExit?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    phoneNo?: StringNullableFilter<"User"> | string | null
    yearOfService?: StringNullableFilter<"User"> | string | null
    teaching?: BoolNullableFilter<"User"> | boolean | null
    parentNo?: StringNullableFilter<"User"> | string | null
    parentName?: StringNullableFilter<"User"> | string | null
    DOA?: DateTimeNullableFilter<"User"> | Date | string | null
    birthdate?: DateTimeNullableFilter<"User"> | Date | string | null
    admissionNo?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    school?: XOR<SchoolNullableScalarRelationFilter, SchoolWhereInput> | null
    parent?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    children?: UserListRelationFilter
    Class?: ClassListRelationFilter
    Attendance?: AttendanceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    schoolId?: SortOrderInput | SortOrder
    class?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    oracleNo?: SortOrderInput | SortOrder
    registrationNo?: SortOrderInput | SortOrder
    designation?: SortOrderInput | SortOrder
    post?: SortOrderInput | SortOrder
    payrollNo?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    yearOfExit?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phoneNo?: SortOrderInput | SortOrder
    yearOfService?: SortOrderInput | SortOrder
    teaching?: SortOrderInput | SortOrder
    parentNo?: SortOrderInput | SortOrder
    parentName?: SortOrderInput | SortOrder
    DOA?: SortOrderInput | SortOrder
    birthdate?: SortOrderInput | SortOrder
    admissionNo?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    school?: SchoolOrderByWithRelationInput
    parent?: UserOrderByWithRelationInput
    children?: UserOrderByRelationAggregateInput
    Class?: ClassOrderByRelationAggregateInput
    Attendance?: AttendanceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    schoolId?: StringNullableFilter<"User"> | string | null
    class?: StringNullableFilter<"User"> | string | null
    parentId?: StringNullableFilter<"User"> | string | null
    oracleNo?: StringNullableFilter<"User"> | string | null
    registrationNo?: StringNullableFilter<"User"> | string | null
    designation?: StringNullableFilter<"User"> | string | null
    post?: StringNullableFilter<"User"> | string | null
    payrollNo?: StringNullableFilter<"User"> | string | null
    level?: StringNullableFilter<"User"> | string | null
    yearOfExit?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    phoneNo?: StringNullableFilter<"User"> | string | null
    yearOfService?: StringNullableFilter<"User"> | string | null
    teaching?: BoolNullableFilter<"User"> | boolean | null
    parentNo?: StringNullableFilter<"User"> | string | null
    parentName?: StringNullableFilter<"User"> | string | null
    DOA?: DateTimeNullableFilter<"User"> | Date | string | null
    birthdate?: DateTimeNullableFilter<"User"> | Date | string | null
    admissionNo?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    school?: XOR<SchoolNullableScalarRelationFilter, SchoolWhereInput> | null
    parent?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    children?: UserListRelationFilter
    Class?: ClassListRelationFilter
    Attendance?: AttendanceListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    schoolId?: SortOrderInput | SortOrder
    class?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    oracleNo?: SortOrderInput | SortOrder
    registrationNo?: SortOrderInput | SortOrder
    designation?: SortOrderInput | SortOrder
    post?: SortOrderInput | SortOrder
    payrollNo?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    yearOfExit?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phoneNo?: SortOrderInput | SortOrder
    yearOfService?: SortOrderInput | SortOrder
    teaching?: SortOrderInput | SortOrder
    parentNo?: SortOrderInput | SortOrder
    parentName?: SortOrderInput | SortOrder
    DOA?: SortOrderInput | SortOrder
    birthdate?: SortOrderInput | SortOrder
    admissionNo?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    schoolId?: StringNullableWithAggregatesFilter<"User"> | string | null
    class?: StringNullableWithAggregatesFilter<"User"> | string | null
    parentId?: StringNullableWithAggregatesFilter<"User"> | string | null
    oracleNo?: StringNullableWithAggregatesFilter<"User"> | string | null
    registrationNo?: StringNullableWithAggregatesFilter<"User"> | string | null
    designation?: StringNullableWithAggregatesFilter<"User"> | string | null
    post?: StringNullableWithAggregatesFilter<"User"> | string | null
    payrollNo?: StringNullableWithAggregatesFilter<"User"> | string | null
    level?: StringNullableWithAggregatesFilter<"User"> | string | null
    yearOfExit?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNo?: StringNullableWithAggregatesFilter<"User"> | string | null
    yearOfService?: StringNullableWithAggregatesFilter<"User"> | string | null
    teaching?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    parentNo?: StringNullableWithAggregatesFilter<"User"> | string | null
    parentName?: StringNullableWithAggregatesFilter<"User"> | string | null
    DOA?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    birthdate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    admissionNo?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    id?: StringFilter<"School"> | string
    name?: StringFilter<"School"> | string
    address?: StringFilter<"School"> | string
    primaryColor?: StringFilter<"School"> | string
    secondaryColor?: StringFilter<"School"> | string
    mutedColor?: StringFilter<"School"> | string
    accentColor?: StringFilter<"School"> | string
    logo?: StringFilter<"School"> | string
    missionStatement?: StringFilter<"School"> | string
    visionStatement?: StringFilter<"School"> | string
    principal?: StringFilter<"School"> | string
    vicePrincipal?: StringFilter<"School"> | string
    slogan?: StringFilter<"School"> | string
    subjects?: StringNullableListFilter<"School">
    User?: UserListRelationFilter
    Class?: ClassListRelationFilter
    Timetable?: TimetableListRelationFilter
    Attendance?: AttendanceListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    mutedColor?: SortOrder
    accentColor?: SortOrder
    logo?: SortOrder
    missionStatement?: SortOrder
    visionStatement?: SortOrder
    principal?: SortOrder
    vicePrincipal?: SortOrder
    slogan?: SortOrder
    subjects?: SortOrder
    User?: UserOrderByRelationAggregateInput
    Class?: ClassOrderByRelationAggregateInput
    Timetable?: TimetableOrderByRelationAggregateInput
    Attendance?: AttendanceOrderByRelationAggregateInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    name?: StringFilter<"School"> | string
    address?: StringFilter<"School"> | string
    primaryColor?: StringFilter<"School"> | string
    secondaryColor?: StringFilter<"School"> | string
    mutedColor?: StringFilter<"School"> | string
    accentColor?: StringFilter<"School"> | string
    logo?: StringFilter<"School"> | string
    missionStatement?: StringFilter<"School"> | string
    visionStatement?: StringFilter<"School"> | string
    principal?: StringFilter<"School"> | string
    vicePrincipal?: StringFilter<"School"> | string
    slogan?: StringFilter<"School"> | string
    subjects?: StringNullableListFilter<"School">
    User?: UserListRelationFilter
    Class?: ClassListRelationFilter
    Timetable?: TimetableListRelationFilter
    Attendance?: AttendanceListRelationFilter
  }, "id">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    mutedColor?: SortOrder
    accentColor?: SortOrder
    logo?: SortOrder
    missionStatement?: SortOrder
    visionStatement?: SortOrder
    principal?: SortOrder
    vicePrincipal?: SortOrder
    slogan?: SortOrder
    subjects?: SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"School"> | string
    name?: StringWithAggregatesFilter<"School"> | string
    address?: StringWithAggregatesFilter<"School"> | string
    primaryColor?: StringWithAggregatesFilter<"School"> | string
    secondaryColor?: StringWithAggregatesFilter<"School"> | string
    mutedColor?: StringWithAggregatesFilter<"School"> | string
    accentColor?: StringWithAggregatesFilter<"School"> | string
    logo?: StringWithAggregatesFilter<"School"> | string
    missionStatement?: StringWithAggregatesFilter<"School"> | string
    visionStatement?: StringWithAggregatesFilter<"School"> | string
    principal?: StringWithAggregatesFilter<"School"> | string
    vicePrincipal?: StringWithAggregatesFilter<"School"> | string
    slogan?: StringWithAggregatesFilter<"School"> | string
    subjects?: StringNullableListFilter<"School">
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    schoolId?: StringFilter<"Class"> | string
    teacherId?: StringFilter<"Class"> | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    Attendance?: AttendanceListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    schoolId?: SortOrder
    teacherId?: SortOrder
    school?: SchoolOrderByWithRelationInput
    teacher?: UserOrderByWithRelationInput
    Attendance?: AttendanceOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    name?: StringFilter<"Class"> | string
    schoolId?: StringFilter<"Class"> | string
    teacherId?: StringFilter<"Class"> | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    Attendance?: AttendanceListRelationFilter
  }, "id">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    schoolId?: SortOrder
    teacherId?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Class"> | string
    name?: StringWithAggregatesFilter<"Class"> | string
    schoolId?: StringWithAggregatesFilter<"Class"> | string
    teacherId?: StringWithAggregatesFilter<"Class"> | string
  }

  export type TimetableWhereInput = {
    AND?: TimetableWhereInput | TimetableWhereInput[]
    OR?: TimetableWhereInput[]
    NOT?: TimetableWhereInput | TimetableWhereInput[]
    id?: StringFilter<"Timetable"> | string
    day?: StringFilter<"Timetable"> | string
    startTime?: DateTimeFilter<"Timetable"> | Date | string
    endTime?: DateTimeFilter<"Timetable"> | Date | string
    class?: StringFilter<"Timetable"> | string
    subject?: StringFilter<"Timetable"> | string
    period?: IntFilter<"Timetable"> | number
    periodSpan?: IntFilter<"Timetable"> | number
    schoolId?: StringFilter<"Timetable"> | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }

  export type TimetableOrderByWithRelationInput = {
    id?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    class?: SortOrder
    subject?: SortOrder
    period?: SortOrder
    periodSpan?: SortOrder
    schoolId?: SortOrder
    school?: SchoolOrderByWithRelationInput
  }

  export type TimetableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TimetableWhereInput | TimetableWhereInput[]
    OR?: TimetableWhereInput[]
    NOT?: TimetableWhereInput | TimetableWhereInput[]
    day?: StringFilter<"Timetable"> | string
    startTime?: DateTimeFilter<"Timetable"> | Date | string
    endTime?: DateTimeFilter<"Timetable"> | Date | string
    class?: StringFilter<"Timetable"> | string
    subject?: StringFilter<"Timetable"> | string
    period?: IntFilter<"Timetable"> | number
    periodSpan?: IntFilter<"Timetable"> | number
    schoolId?: StringFilter<"Timetable"> | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
  }, "id">

  export type TimetableOrderByWithAggregationInput = {
    id?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    class?: SortOrder
    subject?: SortOrder
    period?: SortOrder
    periodSpan?: SortOrder
    schoolId?: SortOrder
    _count?: TimetableCountOrderByAggregateInput
    _avg?: TimetableAvgOrderByAggregateInput
    _max?: TimetableMaxOrderByAggregateInput
    _min?: TimetableMinOrderByAggregateInput
    _sum?: TimetableSumOrderByAggregateInput
  }

  export type TimetableScalarWhereWithAggregatesInput = {
    AND?: TimetableScalarWhereWithAggregatesInput | TimetableScalarWhereWithAggregatesInput[]
    OR?: TimetableScalarWhereWithAggregatesInput[]
    NOT?: TimetableScalarWhereWithAggregatesInput | TimetableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Timetable"> | string
    day?: StringWithAggregatesFilter<"Timetable"> | string
    startTime?: DateTimeWithAggregatesFilter<"Timetable"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Timetable"> | Date | string
    class?: StringWithAggregatesFilter<"Timetable"> | string
    subject?: StringWithAggregatesFilter<"Timetable"> | string
    period?: IntWithAggregatesFilter<"Timetable"> | number
    periodSpan?: IntWithAggregatesFilter<"Timetable"> | number
    schoolId?: StringWithAggregatesFilter<"Timetable"> | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: StringFilter<"Attendance"> | string
    schoolId?: StringFilter<"Attendance"> | string
    studentId?: StringFilter<"Attendance"> | string
    classId?: StringFilter<"Attendance"> | string
    school?: XOR<SchoolNullableScalarRelationFilter, SchoolWhereInput> | null
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    schoolId?: SortOrder
    studentId?: SortOrder
    classId?: SortOrder
    school?: SchoolOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: StringFilter<"Attendance"> | string
    schoolId?: StringFilter<"Attendance"> | string
    studentId?: StringFilter<"Attendance"> | string
    classId?: StringFilter<"Attendance"> | string
    school?: XOR<SchoolNullableScalarRelationFilter, SchoolWhereInput> | null
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }, "id">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    schoolId?: SortOrder
    studentId?: SortOrder
    classId?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attendance"> | string
    date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    status?: StringWithAggregatesFilter<"Attendance"> | string
    schoolId?: StringWithAggregatesFilter<"Attendance"> | string
    studentId?: StringWithAggregatesFilter<"Attendance"> | string
    classId?: StringWithAggregatesFilter<"Attendance"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    class?: string | null
    oracleNo?: string | null
    registrationNo?: string | null
    designation?: string | null
    post?: string | null
    payrollNo?: string | null
    level?: string | null
    yearOfExit?: string | null
    address?: string | null
    phoneNo?: string | null
    yearOfService?: string | null
    teaching?: boolean | null
    parentNo?: string | null
    parentName?: string | null
    DOA?: Date | string | null
    birthdate?: Date | string | null
    admissionNo?: string | null
    gender?: string | null
    school?: SchoolCreateNestedOneWithoutUserInput
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    Class?: ClassCreateNestedManyWithoutTeacherInput
    Attendance?: AttendanceCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    schoolId?: string | null
    class?: string | null
    parentId?: string | null
    oracleNo?: string | null
    registrationNo?: string | null
    designation?: string | null
    post?: string | null
    payrollNo?: string | null
    level?: string | null
    yearOfExit?: string | null
    address?: string | null
    phoneNo?: string | null
    yearOfService?: string | null
    teaching?: boolean | null
    parentNo?: string | null
    parentName?: string | null
    DOA?: Date | string | null
    birthdate?: Date | string | null
    admissionNo?: string | null
    gender?: string | null
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    Class?: ClassUncheckedCreateNestedManyWithoutTeacherInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    class?: NullableStringFieldUpdateOperationsInput | string | null
    oracleNo?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    post?: NullableStringFieldUpdateOperationsInput | string | null
    payrollNo?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfExit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfService?: NullableStringFieldUpdateOperationsInput | string | null
    teaching?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parentNo?: NullableStringFieldUpdateOperationsInput | string | null
    parentName?: NullableStringFieldUpdateOperationsInput | string | null
    DOA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissionNo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    school?: SchoolUpdateOneWithoutUserNestedInput
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    Class?: ClassUpdateManyWithoutTeacherNestedInput
    Attendance?: AttendanceUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    oracleNo?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    post?: NullableStringFieldUpdateOperationsInput | string | null
    payrollNo?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfExit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfService?: NullableStringFieldUpdateOperationsInput | string | null
    teaching?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parentNo?: NullableStringFieldUpdateOperationsInput | string | null
    parentName?: NullableStringFieldUpdateOperationsInput | string | null
    DOA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissionNo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    Class?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    schoolId?: string | null
    class?: string | null
    parentId?: string | null
    oracleNo?: string | null
    registrationNo?: string | null
    designation?: string | null
    post?: string | null
    payrollNo?: string | null
    level?: string | null
    yearOfExit?: string | null
    address?: string | null
    phoneNo?: string | null
    yearOfService?: string | null
    teaching?: boolean | null
    parentNo?: string | null
    parentName?: string | null
    DOA?: Date | string | null
    birthdate?: Date | string | null
    admissionNo?: string | null
    gender?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    class?: NullableStringFieldUpdateOperationsInput | string | null
    oracleNo?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    post?: NullableStringFieldUpdateOperationsInput | string | null
    payrollNo?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfExit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfService?: NullableStringFieldUpdateOperationsInput | string | null
    teaching?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parentNo?: NullableStringFieldUpdateOperationsInput | string | null
    parentName?: NullableStringFieldUpdateOperationsInput | string | null
    DOA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissionNo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    oracleNo?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    post?: NullableStringFieldUpdateOperationsInput | string | null
    payrollNo?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfExit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfService?: NullableStringFieldUpdateOperationsInput | string | null
    teaching?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parentNo?: NullableStringFieldUpdateOperationsInput | string | null
    parentName?: NullableStringFieldUpdateOperationsInput | string | null
    DOA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissionNo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SchoolCreateInput = {
    id?: string
    name: string
    address: string
    primaryColor: string
    secondaryColor: string
    mutedColor: string
    accentColor: string
    logo: string
    missionStatement: string
    visionStatement: string
    principal: string
    vicePrincipal: string
    slogan: string
    subjects?: SchoolCreatesubjectsInput | string[]
    User?: UserCreateNestedManyWithoutSchoolInput
    Class?: ClassCreateNestedManyWithoutSchoolInput
    Timetable?: TimetableCreateNestedManyWithoutSchoolInput
    Attendance?: AttendanceCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    primaryColor: string
    secondaryColor: string
    mutedColor: string
    accentColor: string
    logo: string
    missionStatement: string
    visionStatement: string
    principal: string
    vicePrincipal: string
    slogan: string
    subjects?: SchoolCreatesubjectsInput | string[]
    User?: UserUncheckedCreateNestedManyWithoutSchoolInput
    Class?: ClassUncheckedCreateNestedManyWithoutSchoolInput
    Timetable?: TimetableUncheckedCreateNestedManyWithoutSchoolInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    mutedColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    missionStatement?: StringFieldUpdateOperationsInput | string
    visionStatement?: StringFieldUpdateOperationsInput | string
    principal?: StringFieldUpdateOperationsInput | string
    vicePrincipal?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    subjects?: SchoolUpdatesubjectsInput | string[]
    User?: UserUpdateManyWithoutSchoolNestedInput
    Class?: ClassUpdateManyWithoutSchoolNestedInput
    Timetable?: TimetableUpdateManyWithoutSchoolNestedInput
    Attendance?: AttendanceUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    mutedColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    missionStatement?: StringFieldUpdateOperationsInput | string
    visionStatement?: StringFieldUpdateOperationsInput | string
    principal?: StringFieldUpdateOperationsInput | string
    vicePrincipal?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    subjects?: SchoolUpdatesubjectsInput | string[]
    User?: UserUncheckedUpdateManyWithoutSchoolNestedInput
    Class?: ClassUncheckedUpdateManyWithoutSchoolNestedInput
    Timetable?: TimetableUncheckedUpdateManyWithoutSchoolNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateManyInput = {
    id?: string
    name: string
    address: string
    primaryColor: string
    secondaryColor: string
    mutedColor: string
    accentColor: string
    logo: string
    missionStatement: string
    visionStatement: string
    principal: string
    vicePrincipal: string
    slogan: string
    subjects?: SchoolCreatesubjectsInput | string[]
  }

  export type SchoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    mutedColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    missionStatement?: StringFieldUpdateOperationsInput | string
    visionStatement?: StringFieldUpdateOperationsInput | string
    principal?: StringFieldUpdateOperationsInput | string
    vicePrincipal?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    subjects?: SchoolUpdatesubjectsInput | string[]
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    mutedColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    missionStatement?: StringFieldUpdateOperationsInput | string
    visionStatement?: StringFieldUpdateOperationsInput | string
    principal?: StringFieldUpdateOperationsInput | string
    vicePrincipal?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    subjects?: SchoolUpdatesubjectsInput | string[]
  }

  export type ClassCreateInput = {
    id?: string
    name: string
    school: SchoolCreateNestedOneWithoutClassInput
    teacher: UserCreateNestedOneWithoutClassInput
    Attendance?: AttendanceCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: string
    name: string
    schoolId: string
    teacherId: string
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    school?: SchoolUpdateOneRequiredWithoutClassNestedInput
    teacher?: UserUpdateOneRequiredWithoutClassNestedInput
    Attendance?: AttendanceUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    Attendance?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: string
    name: string
    schoolId: string
    teacherId: string
  }

  export type ClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type TimetableCreateInput = {
    id?: string
    day: string
    startTime: Date | string
    endTime: Date | string
    class: string
    subject: string
    period: number
    periodSpan: number
    school: SchoolCreateNestedOneWithoutTimetableInput
  }

  export type TimetableUncheckedCreateInput = {
    id?: string
    day: string
    startTime: Date | string
    endTime: Date | string
    class: string
    subject: string
    period: number
    periodSpan: number
    schoolId: string
  }

  export type TimetableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    period?: IntFieldUpdateOperationsInput | number
    periodSpan?: IntFieldUpdateOperationsInput | number
    school?: SchoolUpdateOneRequiredWithoutTimetableNestedInput
  }

  export type TimetableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    period?: IntFieldUpdateOperationsInput | number
    periodSpan?: IntFieldUpdateOperationsInput | number
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type TimetableCreateManyInput = {
    id?: string
    day: string
    startTime: Date | string
    endTime: Date | string
    class: string
    subject: string
    period: number
    periodSpan: number
    schoolId: string
  }

  export type TimetableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    period?: IntFieldUpdateOperationsInput | number
    periodSpan?: IntFieldUpdateOperationsInput | number
  }

  export type TimetableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    period?: IntFieldUpdateOperationsInput | number
    periodSpan?: IntFieldUpdateOperationsInput | number
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceCreateInput = {
    id?: string
    date: Date | string
    status: string
    school?: SchoolCreateNestedOneWithoutAttendanceInput
    student: UserCreateNestedOneWithoutAttendanceInput
    class: ClassCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    date: Date | string
    status: string
    schoolId: string
    studentId: string
    classId: string
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    school?: SchoolUpdateOneWithoutAttendanceNestedInput
    student?: UserUpdateOneRequiredWithoutAttendanceNestedInput
    class?: ClassUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceCreateManyInput = {
    id?: string
    date: Date | string
    status: string
    schoolId: string
    studentId: string
    classId: string
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SchoolNullableScalarRelationFilter = {
    is?: SchoolWhereInput | null
    isNot?: SchoolWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ClassListRelationFilter = {
    every?: ClassWhereInput
    some?: ClassWhereInput
    none?: ClassWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    schoolId?: SortOrder
    class?: SortOrder
    parentId?: SortOrder
    oracleNo?: SortOrder
    registrationNo?: SortOrder
    designation?: SortOrder
    post?: SortOrder
    payrollNo?: SortOrder
    level?: SortOrder
    yearOfExit?: SortOrder
    address?: SortOrder
    phoneNo?: SortOrder
    yearOfService?: SortOrder
    teaching?: SortOrder
    parentNo?: SortOrder
    parentName?: SortOrder
    DOA?: SortOrder
    birthdate?: SortOrder
    admissionNo?: SortOrder
    gender?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    schoolId?: SortOrder
    class?: SortOrder
    parentId?: SortOrder
    oracleNo?: SortOrder
    registrationNo?: SortOrder
    designation?: SortOrder
    post?: SortOrder
    payrollNo?: SortOrder
    level?: SortOrder
    yearOfExit?: SortOrder
    address?: SortOrder
    phoneNo?: SortOrder
    yearOfService?: SortOrder
    teaching?: SortOrder
    parentNo?: SortOrder
    parentName?: SortOrder
    DOA?: SortOrder
    birthdate?: SortOrder
    admissionNo?: SortOrder
    gender?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    schoolId?: SortOrder
    class?: SortOrder
    parentId?: SortOrder
    oracleNo?: SortOrder
    registrationNo?: SortOrder
    designation?: SortOrder
    post?: SortOrder
    payrollNo?: SortOrder
    level?: SortOrder
    yearOfExit?: SortOrder
    address?: SortOrder
    phoneNo?: SortOrder
    yearOfService?: SortOrder
    teaching?: SortOrder
    parentNo?: SortOrder
    parentName?: SortOrder
    DOA?: SortOrder
    birthdate?: SortOrder
    admissionNo?: SortOrder
    gender?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TimetableListRelationFilter = {
    every?: TimetableWhereInput
    some?: TimetableWhereInput
    none?: TimetableWhereInput
  }

  export type TimetableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    mutedColor?: SortOrder
    accentColor?: SortOrder
    logo?: SortOrder
    missionStatement?: SortOrder
    visionStatement?: SortOrder
    principal?: SortOrder
    vicePrincipal?: SortOrder
    slogan?: SortOrder
    subjects?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    mutedColor?: SortOrder
    accentColor?: SortOrder
    logo?: SortOrder
    missionStatement?: SortOrder
    visionStatement?: SortOrder
    principal?: SortOrder
    vicePrincipal?: SortOrder
    slogan?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    mutedColor?: SortOrder
    accentColor?: SortOrder
    logo?: SortOrder
    missionStatement?: SortOrder
    visionStatement?: SortOrder
    principal?: SortOrder
    vicePrincipal?: SortOrder
    slogan?: SortOrder
  }

  export type SchoolScalarRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    schoolId?: SortOrder
    teacherId?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    schoolId?: SortOrder
    teacherId?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    schoolId?: SortOrder
    teacherId?: SortOrder
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

  export type TimetableCountOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    class?: SortOrder
    subject?: SortOrder
    period?: SortOrder
    periodSpan?: SortOrder
    schoolId?: SortOrder
  }

  export type TimetableAvgOrderByAggregateInput = {
    period?: SortOrder
    periodSpan?: SortOrder
  }

  export type TimetableMaxOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    class?: SortOrder
    subject?: SortOrder
    period?: SortOrder
    periodSpan?: SortOrder
    schoolId?: SortOrder
  }

  export type TimetableMinOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    class?: SortOrder
    subject?: SortOrder
    period?: SortOrder
    periodSpan?: SortOrder
    schoolId?: SortOrder
  }

  export type TimetableSumOrderByAggregateInput = {
    period?: SortOrder
    periodSpan?: SortOrder
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

  export type ClassScalarRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    schoolId?: SortOrder
    studentId?: SortOrder
    classId?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    schoolId?: SortOrder
    studentId?: SortOrder
    classId?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    schoolId?: SortOrder
    studentId?: SortOrder
    classId?: SortOrder
  }

  export type SchoolCreateNestedOneWithoutUserInput = {
    create?: XOR<SchoolCreateWithoutUserInput, SchoolUncheckedCreateWithoutUserInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutUserInput
    connect?: SchoolWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChildrenInput = {
    create?: XOR<UserCreateWithoutChildrenInput, UserUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: UserCreateOrConnectWithoutChildrenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutParentInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput> | UserCreateWithoutParentInput[] | UserUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParentInput | UserCreateOrConnectWithoutParentInput[]
    createMany?: UserCreateManyParentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ClassCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput> | ClassCreateWithoutTeacherInput[] | ClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput | ClassCreateOrConnectWithoutTeacherInput[]
    createMany?: ClassCreateManyTeacherInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput> | UserCreateWithoutParentInput[] | UserUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParentInput | UserCreateOrConnectWithoutParentInput[]
    createMany?: UserCreateManyParentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput> | ClassCreateWithoutTeacherInput[] | ClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput | ClassCreateOrConnectWithoutTeacherInput[]
    createMany?: ClassCreateManyTeacherInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SchoolUpdateOneWithoutUserNestedInput = {
    create?: XOR<SchoolCreateWithoutUserInput, SchoolUncheckedCreateWithoutUserInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutUserInput
    upsert?: SchoolUpsertWithoutUserInput
    disconnect?: SchoolWhereInput | boolean
    delete?: SchoolWhereInput | boolean
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutUserInput, SchoolUpdateWithoutUserInput>, SchoolUncheckedUpdateWithoutUserInput>
  }

  export type UserUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<UserCreateWithoutChildrenInput, UserUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: UserCreateOrConnectWithoutChildrenInput
    upsert?: UserUpsertWithoutChildrenInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChildrenInput, UserUpdateWithoutChildrenInput>, UserUncheckedUpdateWithoutChildrenInput>
  }

  export type UserUpdateManyWithoutParentNestedInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput> | UserCreateWithoutParentInput[] | UserUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParentInput | UserCreateOrConnectWithoutParentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutParentInput | UserUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: UserCreateManyParentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutParentInput | UserUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutParentInput | UserUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ClassUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput> | ClassCreateWithoutTeacherInput[] | ClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput | ClassCreateOrConnectWithoutTeacherInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutTeacherInput | ClassUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ClassCreateManyTeacherInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutTeacherInput | ClassUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutTeacherInput | ClassUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput> | UserCreateWithoutParentInput[] | UserUncheckedCreateWithoutParentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutParentInput | UserCreateOrConnectWithoutParentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutParentInput | UserUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: UserCreateManyParentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutParentInput | UserUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutParentInput | UserUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput> | ClassCreateWithoutTeacherInput[] | ClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput | ClassCreateOrConnectWithoutTeacherInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutTeacherInput | ClassUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ClassCreateManyTeacherInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutTeacherInput | ClassUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutTeacherInput | ClassUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type SchoolCreatesubjectsInput = {
    set: string[]
  }

  export type UserCreateNestedManyWithoutSchoolInput = {
    create?: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput> | UserCreateWithoutSchoolInput[] | UserUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSchoolInput | UserCreateOrConnectWithoutSchoolInput[]
    createMany?: UserCreateManySchoolInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ClassCreateNestedManyWithoutSchoolInput = {
    create?: XOR<ClassCreateWithoutSchoolInput, ClassUncheckedCreateWithoutSchoolInput> | ClassCreateWithoutSchoolInput[] | ClassUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutSchoolInput | ClassCreateOrConnectWithoutSchoolInput[]
    createMany?: ClassCreateManySchoolInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type TimetableCreateNestedManyWithoutSchoolInput = {
    create?: XOR<TimetableCreateWithoutSchoolInput, TimetableUncheckedCreateWithoutSchoolInput> | TimetableCreateWithoutSchoolInput[] | TimetableUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: TimetableCreateOrConnectWithoutSchoolInput | TimetableCreateOrConnectWithoutSchoolInput[]
    createMany?: TimetableCreateManySchoolInputEnvelope
    connect?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutSchoolInput = {
    create?: XOR<AttendanceCreateWithoutSchoolInput, AttendanceUncheckedCreateWithoutSchoolInput> | AttendanceCreateWithoutSchoolInput[] | AttendanceUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSchoolInput | AttendanceCreateOrConnectWithoutSchoolInput[]
    createMany?: AttendanceCreateManySchoolInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput> | UserCreateWithoutSchoolInput[] | UserUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSchoolInput | UserCreateOrConnectWithoutSchoolInput[]
    createMany?: UserCreateManySchoolInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<ClassCreateWithoutSchoolInput, ClassUncheckedCreateWithoutSchoolInput> | ClassCreateWithoutSchoolInput[] | ClassUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutSchoolInput | ClassCreateOrConnectWithoutSchoolInput[]
    createMany?: ClassCreateManySchoolInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type TimetableUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<TimetableCreateWithoutSchoolInput, TimetableUncheckedCreateWithoutSchoolInput> | TimetableCreateWithoutSchoolInput[] | TimetableUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: TimetableCreateOrConnectWithoutSchoolInput | TimetableCreateOrConnectWithoutSchoolInput[]
    createMany?: TimetableCreateManySchoolInputEnvelope
    connect?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<AttendanceCreateWithoutSchoolInput, AttendanceUncheckedCreateWithoutSchoolInput> | AttendanceCreateWithoutSchoolInput[] | AttendanceUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSchoolInput | AttendanceCreateOrConnectWithoutSchoolInput[]
    createMany?: AttendanceCreateManySchoolInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type SchoolUpdatesubjectsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput> | UserCreateWithoutSchoolInput[] | UserUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSchoolInput | UserCreateOrConnectWithoutSchoolInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSchoolInput | UserUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: UserCreateManySchoolInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSchoolInput | UserUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSchoolInput | UserUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ClassUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<ClassCreateWithoutSchoolInput, ClassUncheckedCreateWithoutSchoolInput> | ClassCreateWithoutSchoolInput[] | ClassUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutSchoolInput | ClassCreateOrConnectWithoutSchoolInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutSchoolInput | ClassUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: ClassCreateManySchoolInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutSchoolInput | ClassUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutSchoolInput | ClassUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type TimetableUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<TimetableCreateWithoutSchoolInput, TimetableUncheckedCreateWithoutSchoolInput> | TimetableCreateWithoutSchoolInput[] | TimetableUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: TimetableCreateOrConnectWithoutSchoolInput | TimetableCreateOrConnectWithoutSchoolInput[]
    upsert?: TimetableUpsertWithWhereUniqueWithoutSchoolInput | TimetableUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: TimetableCreateManySchoolInputEnvelope
    set?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    disconnect?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    delete?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    connect?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    update?: TimetableUpdateWithWhereUniqueWithoutSchoolInput | TimetableUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: TimetableUpdateManyWithWhereWithoutSchoolInput | TimetableUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: TimetableScalarWhereInput | TimetableScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<AttendanceCreateWithoutSchoolInput, AttendanceUncheckedCreateWithoutSchoolInput> | AttendanceCreateWithoutSchoolInput[] | AttendanceUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSchoolInput | AttendanceCreateOrConnectWithoutSchoolInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutSchoolInput | AttendanceUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: AttendanceCreateManySchoolInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutSchoolInput | AttendanceUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutSchoolInput | AttendanceUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput> | UserCreateWithoutSchoolInput[] | UserUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSchoolInput | UserCreateOrConnectWithoutSchoolInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSchoolInput | UserUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: UserCreateManySchoolInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSchoolInput | UserUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSchoolInput | UserUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<ClassCreateWithoutSchoolInput, ClassUncheckedCreateWithoutSchoolInput> | ClassCreateWithoutSchoolInput[] | ClassUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutSchoolInput | ClassCreateOrConnectWithoutSchoolInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutSchoolInput | ClassUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: ClassCreateManySchoolInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutSchoolInput | ClassUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutSchoolInput | ClassUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type TimetableUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<TimetableCreateWithoutSchoolInput, TimetableUncheckedCreateWithoutSchoolInput> | TimetableCreateWithoutSchoolInput[] | TimetableUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: TimetableCreateOrConnectWithoutSchoolInput | TimetableCreateOrConnectWithoutSchoolInput[]
    upsert?: TimetableUpsertWithWhereUniqueWithoutSchoolInput | TimetableUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: TimetableCreateManySchoolInputEnvelope
    set?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    disconnect?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    delete?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    connect?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    update?: TimetableUpdateWithWhereUniqueWithoutSchoolInput | TimetableUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: TimetableUpdateManyWithWhereWithoutSchoolInput | TimetableUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: TimetableScalarWhereInput | TimetableScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<AttendanceCreateWithoutSchoolInput, AttendanceUncheckedCreateWithoutSchoolInput> | AttendanceCreateWithoutSchoolInput[] | AttendanceUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSchoolInput | AttendanceCreateOrConnectWithoutSchoolInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutSchoolInput | AttendanceUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: AttendanceCreateManySchoolInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutSchoolInput | AttendanceUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutSchoolInput | AttendanceUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type SchoolCreateNestedOneWithoutClassInput = {
    create?: XOR<SchoolCreateWithoutClassInput, SchoolUncheckedCreateWithoutClassInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutClassInput
    connect?: SchoolWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutClassInput = {
    create?: XOR<UserCreateWithoutClassInput, UserUncheckedCreateWithoutClassInput>
    connectOrCreate?: UserCreateOrConnectWithoutClassInput
    connect?: UserWhereUniqueInput
  }

  export type AttendanceCreateNestedManyWithoutClassInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type SchoolUpdateOneRequiredWithoutClassNestedInput = {
    create?: XOR<SchoolCreateWithoutClassInput, SchoolUncheckedCreateWithoutClassInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutClassInput
    upsert?: SchoolUpsertWithoutClassInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutClassInput, SchoolUpdateWithoutClassInput>, SchoolUncheckedUpdateWithoutClassInput>
  }

  export type UserUpdateOneRequiredWithoutClassNestedInput = {
    create?: XOR<UserCreateWithoutClassInput, UserUncheckedCreateWithoutClassInput>
    connectOrCreate?: UserCreateOrConnectWithoutClassInput
    upsert?: UserUpsertWithoutClassInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClassInput, UserUpdateWithoutClassInput>, UserUncheckedUpdateWithoutClassInput>
  }

  export type AttendanceUpdateManyWithoutClassNestedInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutClassInput | AttendanceUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutClassInput | AttendanceUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutClassInput | AttendanceUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput> | AttendanceCreateWithoutClassInput[] | AttendanceUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutClassInput | AttendanceCreateOrConnectWithoutClassInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutClassInput | AttendanceUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AttendanceCreateManyClassInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutClassInput | AttendanceUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutClassInput | AttendanceUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type SchoolCreateNestedOneWithoutTimetableInput = {
    create?: XOR<SchoolCreateWithoutTimetableInput, SchoolUncheckedCreateWithoutTimetableInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutTimetableInput
    connect?: SchoolWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SchoolUpdateOneRequiredWithoutTimetableNestedInput = {
    create?: XOR<SchoolCreateWithoutTimetableInput, SchoolUncheckedCreateWithoutTimetableInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutTimetableInput
    upsert?: SchoolUpsertWithoutTimetableInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutTimetableInput, SchoolUpdateWithoutTimetableInput>, SchoolUncheckedUpdateWithoutTimetableInput>
  }

  export type SchoolCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<SchoolCreateWithoutAttendanceInput, SchoolUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutAttendanceInput
    connect?: SchoolWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<UserCreateWithoutAttendanceInput, UserUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendanceInput
    connect?: UserWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<ClassCreateWithoutAttendanceInput, ClassUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAttendanceInput
    connect?: ClassWhereUniqueInput
  }

  export type SchoolUpdateOneWithoutAttendanceNestedInput = {
    create?: XOR<SchoolCreateWithoutAttendanceInput, SchoolUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutAttendanceInput
    upsert?: SchoolUpsertWithoutAttendanceInput
    disconnect?: SchoolWhereInput | boolean
    delete?: SchoolWhereInput | boolean
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutAttendanceInput, SchoolUpdateWithoutAttendanceInput>, SchoolUncheckedUpdateWithoutAttendanceInput>
  }

  export type UserUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<UserCreateWithoutAttendanceInput, UserUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendanceInput
    upsert?: UserUpsertWithoutAttendanceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttendanceInput, UserUpdateWithoutAttendanceInput>, UserUncheckedUpdateWithoutAttendanceInput>
  }

  export type ClassUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<ClassCreateWithoutAttendanceInput, ClassUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAttendanceInput
    upsert?: ClassUpsertWithoutAttendanceInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutAttendanceInput, ClassUpdateWithoutAttendanceInput>, ClassUncheckedUpdateWithoutAttendanceInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type SchoolCreateWithoutUserInput = {
    id?: string
    name: string
    address: string
    primaryColor: string
    secondaryColor: string
    mutedColor: string
    accentColor: string
    logo: string
    missionStatement: string
    visionStatement: string
    principal: string
    vicePrincipal: string
    slogan: string
    subjects?: SchoolCreatesubjectsInput | string[]
    Class?: ClassCreateNestedManyWithoutSchoolInput
    Timetable?: TimetableCreateNestedManyWithoutSchoolInput
    Attendance?: AttendanceCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    address: string
    primaryColor: string
    secondaryColor: string
    mutedColor: string
    accentColor: string
    logo: string
    missionStatement: string
    visionStatement: string
    principal: string
    vicePrincipal: string
    slogan: string
    subjects?: SchoolCreatesubjectsInput | string[]
    Class?: ClassUncheckedCreateNestedManyWithoutSchoolInput
    Timetable?: TimetableUncheckedCreateNestedManyWithoutSchoolInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutUserInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutUserInput, SchoolUncheckedCreateWithoutUserInput>
  }

  export type UserCreateWithoutChildrenInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    class?: string | null
    oracleNo?: string | null
    registrationNo?: string | null
    designation?: string | null
    post?: string | null
    payrollNo?: string | null
    level?: string | null
    yearOfExit?: string | null
    address?: string | null
    phoneNo?: string | null
    yearOfService?: string | null
    teaching?: boolean | null
    parentNo?: string | null
    parentName?: string | null
    DOA?: Date | string | null
    birthdate?: Date | string | null
    admissionNo?: string | null
    gender?: string | null
    school?: SchoolCreateNestedOneWithoutUserInput
    parent?: UserCreateNestedOneWithoutChildrenInput
    Class?: ClassCreateNestedManyWithoutTeacherInput
    Attendance?: AttendanceCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutChildrenInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    schoolId?: string | null
    class?: string | null
    parentId?: string | null
    oracleNo?: string | null
    registrationNo?: string | null
    designation?: string | null
    post?: string | null
    payrollNo?: string | null
    level?: string | null
    yearOfExit?: string | null
    address?: string | null
    phoneNo?: string | null
    yearOfService?: string | null
    teaching?: boolean | null
    parentNo?: string | null
    parentName?: string | null
    DOA?: Date | string | null
    birthdate?: Date | string | null
    admissionNo?: string | null
    gender?: string | null
    Class?: ClassUncheckedCreateNestedManyWithoutTeacherInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutChildrenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChildrenInput, UserUncheckedCreateWithoutChildrenInput>
  }

  export type UserCreateWithoutParentInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    class?: string | null
    oracleNo?: string | null
    registrationNo?: string | null
    designation?: string | null
    post?: string | null
    payrollNo?: string | null
    level?: string | null
    yearOfExit?: string | null
    address?: string | null
    phoneNo?: string | null
    yearOfService?: string | null
    teaching?: boolean | null
    parentNo?: string | null
    parentName?: string | null
    DOA?: Date | string | null
    birthdate?: Date | string | null
    admissionNo?: string | null
    gender?: string | null
    school?: SchoolCreateNestedOneWithoutUserInput
    children?: UserCreateNestedManyWithoutParentInput
    Class?: ClassCreateNestedManyWithoutTeacherInput
    Attendance?: AttendanceCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    schoolId?: string | null
    class?: string | null
    oracleNo?: string | null
    registrationNo?: string | null
    designation?: string | null
    post?: string | null
    payrollNo?: string | null
    level?: string | null
    yearOfExit?: string | null
    address?: string | null
    phoneNo?: string | null
    yearOfService?: string | null
    teaching?: boolean | null
    parentNo?: string | null
    parentName?: string | null
    DOA?: Date | string | null
    birthdate?: Date | string | null
    admissionNo?: string | null
    gender?: string | null
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    Class?: ClassUncheckedCreateNestedManyWithoutTeacherInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutParentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput>
  }

  export type UserCreateManyParentInputEnvelope = {
    data: UserCreateManyParentInput | UserCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type ClassCreateWithoutTeacherInput = {
    id?: string
    name: string
    school: SchoolCreateNestedOneWithoutClassInput
    Attendance?: AttendanceCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutTeacherInput = {
    id?: string
    name: string
    schoolId: string
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutTeacherInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput>
  }

  export type ClassCreateManyTeacherInputEnvelope = {
    data: ClassCreateManyTeacherInput | ClassCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutStudentInput = {
    id?: string
    date: Date | string
    status: string
    school?: SchoolCreateNestedOneWithoutAttendanceInput
    class: ClassCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutStudentInput = {
    id?: string
    date: Date | string
    status: string
    schoolId: string
    classId: string
  }

  export type AttendanceCreateOrConnectWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceCreateManyStudentInputEnvelope = {
    data: AttendanceCreateManyStudentInput | AttendanceCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type SchoolUpsertWithoutUserInput = {
    update: XOR<SchoolUpdateWithoutUserInput, SchoolUncheckedUpdateWithoutUserInput>
    create: XOR<SchoolCreateWithoutUserInput, SchoolUncheckedCreateWithoutUserInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutUserInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutUserInput, SchoolUncheckedUpdateWithoutUserInput>
  }

  export type SchoolUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    mutedColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    missionStatement?: StringFieldUpdateOperationsInput | string
    visionStatement?: StringFieldUpdateOperationsInput | string
    principal?: StringFieldUpdateOperationsInput | string
    vicePrincipal?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    subjects?: SchoolUpdatesubjectsInput | string[]
    Class?: ClassUpdateManyWithoutSchoolNestedInput
    Timetable?: TimetableUpdateManyWithoutSchoolNestedInput
    Attendance?: AttendanceUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    mutedColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    missionStatement?: StringFieldUpdateOperationsInput | string
    visionStatement?: StringFieldUpdateOperationsInput | string
    principal?: StringFieldUpdateOperationsInput | string
    vicePrincipal?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    subjects?: SchoolUpdatesubjectsInput | string[]
    Class?: ClassUncheckedUpdateManyWithoutSchoolNestedInput
    Timetable?: TimetableUncheckedUpdateManyWithoutSchoolNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type UserUpsertWithoutChildrenInput = {
    update: XOR<UserUpdateWithoutChildrenInput, UserUncheckedUpdateWithoutChildrenInput>
    create: XOR<UserCreateWithoutChildrenInput, UserUncheckedCreateWithoutChildrenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChildrenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChildrenInput, UserUncheckedUpdateWithoutChildrenInput>
  }

  export type UserUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    class?: NullableStringFieldUpdateOperationsInput | string | null
    oracleNo?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    post?: NullableStringFieldUpdateOperationsInput | string | null
    payrollNo?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfExit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfService?: NullableStringFieldUpdateOperationsInput | string | null
    teaching?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parentNo?: NullableStringFieldUpdateOperationsInput | string | null
    parentName?: NullableStringFieldUpdateOperationsInput | string | null
    DOA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissionNo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    school?: SchoolUpdateOneWithoutUserNestedInput
    parent?: UserUpdateOneWithoutChildrenNestedInput
    Class?: ClassUpdateManyWithoutTeacherNestedInput
    Attendance?: AttendanceUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    oracleNo?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    post?: NullableStringFieldUpdateOperationsInput | string | null
    payrollNo?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfExit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfService?: NullableStringFieldUpdateOperationsInput | string | null
    teaching?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parentNo?: NullableStringFieldUpdateOperationsInput | string | null
    parentName?: NullableStringFieldUpdateOperationsInput | string | null
    DOA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissionNo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Class?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutParentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutParentInput, UserUncheckedUpdateWithoutParentInput>
    create: XOR<UserCreateWithoutParentInput, UserUncheckedCreateWithoutParentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutParentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutParentInput, UserUncheckedUpdateWithoutParentInput>
  }

  export type UserUpdateManyWithWhereWithoutParentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutParentInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    schoolId?: StringNullableFilter<"User"> | string | null
    class?: StringNullableFilter<"User"> | string | null
    parentId?: StringNullableFilter<"User"> | string | null
    oracleNo?: StringNullableFilter<"User"> | string | null
    registrationNo?: StringNullableFilter<"User"> | string | null
    designation?: StringNullableFilter<"User"> | string | null
    post?: StringNullableFilter<"User"> | string | null
    payrollNo?: StringNullableFilter<"User"> | string | null
    level?: StringNullableFilter<"User"> | string | null
    yearOfExit?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    phoneNo?: StringNullableFilter<"User"> | string | null
    yearOfService?: StringNullableFilter<"User"> | string | null
    teaching?: BoolNullableFilter<"User"> | boolean | null
    parentNo?: StringNullableFilter<"User"> | string | null
    parentName?: StringNullableFilter<"User"> | string | null
    DOA?: DateTimeNullableFilter<"User"> | Date | string | null
    birthdate?: DateTimeNullableFilter<"User"> | Date | string | null
    admissionNo?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
  }

  export type ClassUpsertWithWhereUniqueWithoutTeacherInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutTeacherInput, ClassUncheckedUpdateWithoutTeacherInput>
    create: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutTeacherInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutTeacherInput, ClassUncheckedUpdateWithoutTeacherInput>
  }

  export type ClassUpdateManyWithWhereWithoutTeacherInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutTeacherInput>
  }

  export type ClassScalarWhereInput = {
    AND?: ClassScalarWhereInput | ClassScalarWhereInput[]
    OR?: ClassScalarWhereInput[]
    NOT?: ClassScalarWhereInput | ClassScalarWhereInput[]
    id?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    schoolId?: StringFilter<"Class"> | string
    teacherId?: StringFilter<"Class"> | string
  }

  export type AttendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutStudentInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutStudentInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    status?: StringFilter<"Attendance"> | string
    schoolId?: StringFilter<"Attendance"> | string
    studentId?: StringFilter<"Attendance"> | string
    classId?: StringFilter<"Attendance"> | string
  }

  export type UserCreateWithoutSchoolInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    class?: string | null
    oracleNo?: string | null
    registrationNo?: string | null
    designation?: string | null
    post?: string | null
    payrollNo?: string | null
    level?: string | null
    yearOfExit?: string | null
    address?: string | null
    phoneNo?: string | null
    yearOfService?: string | null
    teaching?: boolean | null
    parentNo?: string | null
    parentName?: string | null
    DOA?: Date | string | null
    birthdate?: Date | string | null
    admissionNo?: string | null
    gender?: string | null
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    Class?: ClassCreateNestedManyWithoutTeacherInput
    Attendance?: AttendanceCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutSchoolInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    class?: string | null
    parentId?: string | null
    oracleNo?: string | null
    registrationNo?: string | null
    designation?: string | null
    post?: string | null
    payrollNo?: string | null
    level?: string | null
    yearOfExit?: string | null
    address?: string | null
    phoneNo?: string | null
    yearOfService?: string | null
    teaching?: boolean | null
    parentNo?: string | null
    parentName?: string | null
    DOA?: Date | string | null
    birthdate?: Date | string | null
    admissionNo?: string | null
    gender?: string | null
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    Class?: ClassUncheckedCreateNestedManyWithoutTeacherInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutSchoolInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput>
  }

  export type UserCreateManySchoolInputEnvelope = {
    data: UserCreateManySchoolInput | UserCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type ClassCreateWithoutSchoolInput = {
    id?: string
    name: string
    teacher: UserCreateNestedOneWithoutClassInput
    Attendance?: AttendanceCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutSchoolInput = {
    id?: string
    name: string
    teacherId: string
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutSchoolInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutSchoolInput, ClassUncheckedCreateWithoutSchoolInput>
  }

  export type ClassCreateManySchoolInputEnvelope = {
    data: ClassCreateManySchoolInput | ClassCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type TimetableCreateWithoutSchoolInput = {
    id?: string
    day: string
    startTime: Date | string
    endTime: Date | string
    class: string
    subject: string
    period: number
    periodSpan: number
  }

  export type TimetableUncheckedCreateWithoutSchoolInput = {
    id?: string
    day: string
    startTime: Date | string
    endTime: Date | string
    class: string
    subject: string
    period: number
    periodSpan: number
  }

  export type TimetableCreateOrConnectWithoutSchoolInput = {
    where: TimetableWhereUniqueInput
    create: XOR<TimetableCreateWithoutSchoolInput, TimetableUncheckedCreateWithoutSchoolInput>
  }

  export type TimetableCreateManySchoolInputEnvelope = {
    data: TimetableCreateManySchoolInput | TimetableCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutSchoolInput = {
    id?: string
    date: Date | string
    status: string
    student: UserCreateNestedOneWithoutAttendanceInput
    class: ClassCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutSchoolInput = {
    id?: string
    date: Date | string
    status: string
    studentId: string
    classId: string
  }

  export type AttendanceCreateOrConnectWithoutSchoolInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutSchoolInput, AttendanceUncheckedCreateWithoutSchoolInput>
  }

  export type AttendanceCreateManySchoolInputEnvelope = {
    data: AttendanceCreateManySchoolInput | AttendanceCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutSchoolInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSchoolInput, UserUncheckedUpdateWithoutSchoolInput>
    create: XOR<UserCreateWithoutSchoolInput, UserUncheckedCreateWithoutSchoolInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSchoolInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSchoolInput, UserUncheckedUpdateWithoutSchoolInput>
  }

  export type UserUpdateManyWithWhereWithoutSchoolInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSchoolInput>
  }

  export type ClassUpsertWithWhereUniqueWithoutSchoolInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutSchoolInput, ClassUncheckedUpdateWithoutSchoolInput>
    create: XOR<ClassCreateWithoutSchoolInput, ClassUncheckedCreateWithoutSchoolInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutSchoolInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutSchoolInput, ClassUncheckedUpdateWithoutSchoolInput>
  }

  export type ClassUpdateManyWithWhereWithoutSchoolInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutSchoolInput>
  }

  export type TimetableUpsertWithWhereUniqueWithoutSchoolInput = {
    where: TimetableWhereUniqueInput
    update: XOR<TimetableUpdateWithoutSchoolInput, TimetableUncheckedUpdateWithoutSchoolInput>
    create: XOR<TimetableCreateWithoutSchoolInput, TimetableUncheckedCreateWithoutSchoolInput>
  }

  export type TimetableUpdateWithWhereUniqueWithoutSchoolInput = {
    where: TimetableWhereUniqueInput
    data: XOR<TimetableUpdateWithoutSchoolInput, TimetableUncheckedUpdateWithoutSchoolInput>
  }

  export type TimetableUpdateManyWithWhereWithoutSchoolInput = {
    where: TimetableScalarWhereInput
    data: XOR<TimetableUpdateManyMutationInput, TimetableUncheckedUpdateManyWithoutSchoolInput>
  }

  export type TimetableScalarWhereInput = {
    AND?: TimetableScalarWhereInput | TimetableScalarWhereInput[]
    OR?: TimetableScalarWhereInput[]
    NOT?: TimetableScalarWhereInput | TimetableScalarWhereInput[]
    id?: StringFilter<"Timetable"> | string
    day?: StringFilter<"Timetable"> | string
    startTime?: DateTimeFilter<"Timetable"> | Date | string
    endTime?: DateTimeFilter<"Timetable"> | Date | string
    class?: StringFilter<"Timetable"> | string
    subject?: StringFilter<"Timetable"> | string
    period?: IntFilter<"Timetable"> | number
    periodSpan?: IntFilter<"Timetable"> | number
    schoolId?: StringFilter<"Timetable"> | string
  }

  export type AttendanceUpsertWithWhereUniqueWithoutSchoolInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutSchoolInput, AttendanceUncheckedUpdateWithoutSchoolInput>
    create: XOR<AttendanceCreateWithoutSchoolInput, AttendanceUncheckedCreateWithoutSchoolInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutSchoolInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutSchoolInput, AttendanceUncheckedUpdateWithoutSchoolInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutSchoolInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutSchoolInput>
  }

  export type SchoolCreateWithoutClassInput = {
    id?: string
    name: string
    address: string
    primaryColor: string
    secondaryColor: string
    mutedColor: string
    accentColor: string
    logo: string
    missionStatement: string
    visionStatement: string
    principal: string
    vicePrincipal: string
    slogan: string
    subjects?: SchoolCreatesubjectsInput | string[]
    User?: UserCreateNestedManyWithoutSchoolInput
    Timetable?: TimetableCreateNestedManyWithoutSchoolInput
    Attendance?: AttendanceCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutClassInput = {
    id?: string
    name: string
    address: string
    primaryColor: string
    secondaryColor: string
    mutedColor: string
    accentColor: string
    logo: string
    missionStatement: string
    visionStatement: string
    principal: string
    vicePrincipal: string
    slogan: string
    subjects?: SchoolCreatesubjectsInput | string[]
    User?: UserUncheckedCreateNestedManyWithoutSchoolInput
    Timetable?: TimetableUncheckedCreateNestedManyWithoutSchoolInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutClassInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutClassInput, SchoolUncheckedCreateWithoutClassInput>
  }

  export type UserCreateWithoutClassInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    class?: string | null
    oracleNo?: string | null
    registrationNo?: string | null
    designation?: string | null
    post?: string | null
    payrollNo?: string | null
    level?: string | null
    yearOfExit?: string | null
    address?: string | null
    phoneNo?: string | null
    yearOfService?: string | null
    teaching?: boolean | null
    parentNo?: string | null
    parentName?: string | null
    DOA?: Date | string | null
    birthdate?: Date | string | null
    admissionNo?: string | null
    gender?: string | null
    school?: SchoolCreateNestedOneWithoutUserInput
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    Attendance?: AttendanceCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutClassInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    schoolId?: string | null
    class?: string | null
    parentId?: string | null
    oracleNo?: string | null
    registrationNo?: string | null
    designation?: string | null
    post?: string | null
    payrollNo?: string | null
    level?: string | null
    yearOfExit?: string | null
    address?: string | null
    phoneNo?: string | null
    yearOfService?: string | null
    teaching?: boolean | null
    parentNo?: string | null
    parentName?: string | null
    DOA?: Date | string | null
    birthdate?: Date | string | null
    admissionNo?: string | null
    gender?: string | null
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutClassInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClassInput, UserUncheckedCreateWithoutClassInput>
  }

  export type AttendanceCreateWithoutClassInput = {
    id?: string
    date: Date | string
    status: string
    school?: SchoolCreateNestedOneWithoutAttendanceInput
    student: UserCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutClassInput = {
    id?: string
    date: Date | string
    status: string
    schoolId: string
    studentId: string
  }

  export type AttendanceCreateOrConnectWithoutClassInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput>
  }

  export type AttendanceCreateManyClassInputEnvelope = {
    data: AttendanceCreateManyClassInput | AttendanceCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type SchoolUpsertWithoutClassInput = {
    update: XOR<SchoolUpdateWithoutClassInput, SchoolUncheckedUpdateWithoutClassInput>
    create: XOR<SchoolCreateWithoutClassInput, SchoolUncheckedCreateWithoutClassInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutClassInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutClassInput, SchoolUncheckedUpdateWithoutClassInput>
  }

  export type SchoolUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    mutedColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    missionStatement?: StringFieldUpdateOperationsInput | string
    visionStatement?: StringFieldUpdateOperationsInput | string
    principal?: StringFieldUpdateOperationsInput | string
    vicePrincipal?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    subjects?: SchoolUpdatesubjectsInput | string[]
    User?: UserUpdateManyWithoutSchoolNestedInput
    Timetable?: TimetableUpdateManyWithoutSchoolNestedInput
    Attendance?: AttendanceUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    mutedColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    missionStatement?: StringFieldUpdateOperationsInput | string
    visionStatement?: StringFieldUpdateOperationsInput | string
    principal?: StringFieldUpdateOperationsInput | string
    vicePrincipal?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    subjects?: SchoolUpdatesubjectsInput | string[]
    User?: UserUncheckedUpdateManyWithoutSchoolNestedInput
    Timetable?: TimetableUncheckedUpdateManyWithoutSchoolNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type UserUpsertWithoutClassInput = {
    update: XOR<UserUpdateWithoutClassInput, UserUncheckedUpdateWithoutClassInput>
    create: XOR<UserCreateWithoutClassInput, UserUncheckedCreateWithoutClassInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClassInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClassInput, UserUncheckedUpdateWithoutClassInput>
  }

  export type UserUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    class?: NullableStringFieldUpdateOperationsInput | string | null
    oracleNo?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    post?: NullableStringFieldUpdateOperationsInput | string | null
    payrollNo?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfExit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfService?: NullableStringFieldUpdateOperationsInput | string | null
    teaching?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parentNo?: NullableStringFieldUpdateOperationsInput | string | null
    parentName?: NullableStringFieldUpdateOperationsInput | string | null
    DOA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissionNo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    school?: SchoolUpdateOneWithoutUserNestedInput
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    Attendance?: AttendanceUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    oracleNo?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    post?: NullableStringFieldUpdateOperationsInput | string | null
    payrollNo?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfExit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfService?: NullableStringFieldUpdateOperationsInput | string | null
    teaching?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parentNo?: NullableStringFieldUpdateOperationsInput | string | null
    parentName?: NullableStringFieldUpdateOperationsInput | string | null
    DOA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissionNo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type AttendanceUpsertWithWhereUniqueWithoutClassInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutClassInput, AttendanceUncheckedUpdateWithoutClassInput>
    create: XOR<AttendanceCreateWithoutClassInput, AttendanceUncheckedCreateWithoutClassInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutClassInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutClassInput, AttendanceUncheckedUpdateWithoutClassInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutClassInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutClassInput>
  }

  export type SchoolCreateWithoutTimetableInput = {
    id?: string
    name: string
    address: string
    primaryColor: string
    secondaryColor: string
    mutedColor: string
    accentColor: string
    logo: string
    missionStatement: string
    visionStatement: string
    principal: string
    vicePrincipal: string
    slogan: string
    subjects?: SchoolCreatesubjectsInput | string[]
    User?: UserCreateNestedManyWithoutSchoolInput
    Class?: ClassCreateNestedManyWithoutSchoolInput
    Attendance?: AttendanceCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutTimetableInput = {
    id?: string
    name: string
    address: string
    primaryColor: string
    secondaryColor: string
    mutedColor: string
    accentColor: string
    logo: string
    missionStatement: string
    visionStatement: string
    principal: string
    vicePrincipal: string
    slogan: string
    subjects?: SchoolCreatesubjectsInput | string[]
    User?: UserUncheckedCreateNestedManyWithoutSchoolInput
    Class?: ClassUncheckedCreateNestedManyWithoutSchoolInput
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutTimetableInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutTimetableInput, SchoolUncheckedCreateWithoutTimetableInput>
  }

  export type SchoolUpsertWithoutTimetableInput = {
    update: XOR<SchoolUpdateWithoutTimetableInput, SchoolUncheckedUpdateWithoutTimetableInput>
    create: XOR<SchoolCreateWithoutTimetableInput, SchoolUncheckedCreateWithoutTimetableInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutTimetableInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutTimetableInput, SchoolUncheckedUpdateWithoutTimetableInput>
  }

  export type SchoolUpdateWithoutTimetableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    mutedColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    missionStatement?: StringFieldUpdateOperationsInput | string
    visionStatement?: StringFieldUpdateOperationsInput | string
    principal?: StringFieldUpdateOperationsInput | string
    vicePrincipal?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    subjects?: SchoolUpdatesubjectsInput | string[]
    User?: UserUpdateManyWithoutSchoolNestedInput
    Class?: ClassUpdateManyWithoutSchoolNestedInput
    Attendance?: AttendanceUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutTimetableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    mutedColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    missionStatement?: StringFieldUpdateOperationsInput | string
    visionStatement?: StringFieldUpdateOperationsInput | string
    principal?: StringFieldUpdateOperationsInput | string
    vicePrincipal?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    subjects?: SchoolUpdatesubjectsInput | string[]
    User?: UserUncheckedUpdateManyWithoutSchoolNestedInput
    Class?: ClassUncheckedUpdateManyWithoutSchoolNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolCreateWithoutAttendanceInput = {
    id?: string
    name: string
    address: string
    primaryColor: string
    secondaryColor: string
    mutedColor: string
    accentColor: string
    logo: string
    missionStatement: string
    visionStatement: string
    principal: string
    vicePrincipal: string
    slogan: string
    subjects?: SchoolCreatesubjectsInput | string[]
    User?: UserCreateNestedManyWithoutSchoolInput
    Class?: ClassCreateNestedManyWithoutSchoolInput
    Timetable?: TimetableCreateNestedManyWithoutSchoolInput
  }

  export type SchoolUncheckedCreateWithoutAttendanceInput = {
    id?: string
    name: string
    address: string
    primaryColor: string
    secondaryColor: string
    mutedColor: string
    accentColor: string
    logo: string
    missionStatement: string
    visionStatement: string
    principal: string
    vicePrincipal: string
    slogan: string
    subjects?: SchoolCreatesubjectsInput | string[]
    User?: UserUncheckedCreateNestedManyWithoutSchoolInput
    Class?: ClassUncheckedCreateNestedManyWithoutSchoolInput
    Timetable?: TimetableUncheckedCreateNestedManyWithoutSchoolInput
  }

  export type SchoolCreateOrConnectWithoutAttendanceInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutAttendanceInput, SchoolUncheckedCreateWithoutAttendanceInput>
  }

  export type UserCreateWithoutAttendanceInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    class?: string | null
    oracleNo?: string | null
    registrationNo?: string | null
    designation?: string | null
    post?: string | null
    payrollNo?: string | null
    level?: string | null
    yearOfExit?: string | null
    address?: string | null
    phoneNo?: string | null
    yearOfService?: string | null
    teaching?: boolean | null
    parentNo?: string | null
    parentName?: string | null
    DOA?: Date | string | null
    birthdate?: Date | string | null
    admissionNo?: string | null
    gender?: string | null
    school?: SchoolCreateNestedOneWithoutUserInput
    parent?: UserCreateNestedOneWithoutChildrenInput
    children?: UserCreateNestedManyWithoutParentInput
    Class?: ClassCreateNestedManyWithoutTeacherInput
  }

  export type UserUncheckedCreateWithoutAttendanceInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    schoolId?: string | null
    class?: string | null
    parentId?: string | null
    oracleNo?: string | null
    registrationNo?: string | null
    designation?: string | null
    post?: string | null
    payrollNo?: string | null
    level?: string | null
    yearOfExit?: string | null
    address?: string | null
    phoneNo?: string | null
    yearOfService?: string | null
    teaching?: boolean | null
    parentNo?: string | null
    parentName?: string | null
    DOA?: Date | string | null
    birthdate?: Date | string | null
    admissionNo?: string | null
    gender?: string | null
    children?: UserUncheckedCreateNestedManyWithoutParentInput
    Class?: ClassUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type UserCreateOrConnectWithoutAttendanceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendanceInput, UserUncheckedCreateWithoutAttendanceInput>
  }

  export type ClassCreateWithoutAttendanceInput = {
    id?: string
    name: string
    school: SchoolCreateNestedOneWithoutClassInput
    teacher: UserCreateNestedOneWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutAttendanceInput = {
    id?: string
    name: string
    schoolId: string
    teacherId: string
  }

  export type ClassCreateOrConnectWithoutAttendanceInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutAttendanceInput, ClassUncheckedCreateWithoutAttendanceInput>
  }

  export type SchoolUpsertWithoutAttendanceInput = {
    update: XOR<SchoolUpdateWithoutAttendanceInput, SchoolUncheckedUpdateWithoutAttendanceInput>
    create: XOR<SchoolCreateWithoutAttendanceInput, SchoolUncheckedCreateWithoutAttendanceInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutAttendanceInput, SchoolUncheckedUpdateWithoutAttendanceInput>
  }

  export type SchoolUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    mutedColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    missionStatement?: StringFieldUpdateOperationsInput | string
    visionStatement?: StringFieldUpdateOperationsInput | string
    principal?: StringFieldUpdateOperationsInput | string
    vicePrincipal?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    subjects?: SchoolUpdatesubjectsInput | string[]
    User?: UserUpdateManyWithoutSchoolNestedInput
    Class?: ClassUpdateManyWithoutSchoolNestedInput
    Timetable?: TimetableUpdateManyWithoutSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
    secondaryColor?: StringFieldUpdateOperationsInput | string
    mutedColor?: StringFieldUpdateOperationsInput | string
    accentColor?: StringFieldUpdateOperationsInput | string
    logo?: StringFieldUpdateOperationsInput | string
    missionStatement?: StringFieldUpdateOperationsInput | string
    visionStatement?: StringFieldUpdateOperationsInput | string
    principal?: StringFieldUpdateOperationsInput | string
    vicePrincipal?: StringFieldUpdateOperationsInput | string
    slogan?: StringFieldUpdateOperationsInput | string
    subjects?: SchoolUpdatesubjectsInput | string[]
    User?: UserUncheckedUpdateManyWithoutSchoolNestedInput
    Class?: ClassUncheckedUpdateManyWithoutSchoolNestedInput
    Timetable?: TimetableUncheckedUpdateManyWithoutSchoolNestedInput
  }

  export type UserUpsertWithoutAttendanceInput = {
    update: XOR<UserUpdateWithoutAttendanceInput, UserUncheckedUpdateWithoutAttendanceInput>
    create: XOR<UserCreateWithoutAttendanceInput, UserUncheckedCreateWithoutAttendanceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttendanceInput, UserUncheckedUpdateWithoutAttendanceInput>
  }

  export type UserUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    class?: NullableStringFieldUpdateOperationsInput | string | null
    oracleNo?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    post?: NullableStringFieldUpdateOperationsInput | string | null
    payrollNo?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfExit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfService?: NullableStringFieldUpdateOperationsInput | string | null
    teaching?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parentNo?: NullableStringFieldUpdateOperationsInput | string | null
    parentName?: NullableStringFieldUpdateOperationsInput | string | null
    DOA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissionNo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    school?: SchoolUpdateOneWithoutUserNestedInput
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    Class?: ClassUpdateManyWithoutTeacherNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    oracleNo?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    post?: NullableStringFieldUpdateOperationsInput | string | null
    payrollNo?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfExit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfService?: NullableStringFieldUpdateOperationsInput | string | null
    teaching?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parentNo?: NullableStringFieldUpdateOperationsInput | string | null
    parentName?: NullableStringFieldUpdateOperationsInput | string | null
    DOA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissionNo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    Class?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type ClassUpsertWithoutAttendanceInput = {
    update: XOR<ClassUpdateWithoutAttendanceInput, ClassUncheckedUpdateWithoutAttendanceInput>
    create: XOR<ClassCreateWithoutAttendanceInput, ClassUncheckedCreateWithoutAttendanceInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutAttendanceInput, ClassUncheckedUpdateWithoutAttendanceInput>
  }

  export type ClassUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    school?: SchoolUpdateOneRequiredWithoutClassNestedInput
    teacher?: UserUpdateOneRequiredWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyParentInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    schoolId?: string | null
    class?: string | null
    oracleNo?: string | null
    registrationNo?: string | null
    designation?: string | null
    post?: string | null
    payrollNo?: string | null
    level?: string | null
    yearOfExit?: string | null
    address?: string | null
    phoneNo?: string | null
    yearOfService?: string | null
    teaching?: boolean | null
    parentNo?: string | null
    parentName?: string | null
    DOA?: Date | string | null
    birthdate?: Date | string | null
    admissionNo?: string | null
    gender?: string | null
  }

  export type ClassCreateManyTeacherInput = {
    id?: string
    name: string
    schoolId: string
  }

  export type AttendanceCreateManyStudentInput = {
    id?: string
    date: Date | string
    status: string
    schoolId: string
    classId: string
  }

  export type UserUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    class?: NullableStringFieldUpdateOperationsInput | string | null
    oracleNo?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    post?: NullableStringFieldUpdateOperationsInput | string | null
    payrollNo?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfExit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfService?: NullableStringFieldUpdateOperationsInput | string | null
    teaching?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parentNo?: NullableStringFieldUpdateOperationsInput | string | null
    parentName?: NullableStringFieldUpdateOperationsInput | string | null
    DOA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissionNo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    school?: SchoolUpdateOneWithoutUserNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    Class?: ClassUpdateManyWithoutTeacherNestedInput
    Attendance?: AttendanceUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableStringFieldUpdateOperationsInput | string | null
    oracleNo?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    post?: NullableStringFieldUpdateOperationsInput | string | null
    payrollNo?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfExit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfService?: NullableStringFieldUpdateOperationsInput | string | null
    teaching?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parentNo?: NullableStringFieldUpdateOperationsInput | string | null
    parentName?: NullableStringFieldUpdateOperationsInput | string | null
    DOA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissionNo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    Class?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    class?: NullableStringFieldUpdateOperationsInput | string | null
    oracleNo?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    post?: NullableStringFieldUpdateOperationsInput | string | null
    payrollNo?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfExit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfService?: NullableStringFieldUpdateOperationsInput | string | null
    teaching?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parentNo?: NullableStringFieldUpdateOperationsInput | string | null
    parentName?: NullableStringFieldUpdateOperationsInput | string | null
    DOA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissionNo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    school?: SchoolUpdateOneRequiredWithoutClassNestedInput
    Attendance?: AttendanceUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    Attendance?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    school?: SchoolUpdateOneWithoutAttendanceNestedInput
    class?: ClassUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManySchoolInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    class?: string | null
    parentId?: string | null
    oracleNo?: string | null
    registrationNo?: string | null
    designation?: string | null
    post?: string | null
    payrollNo?: string | null
    level?: string | null
    yearOfExit?: string | null
    address?: string | null
    phoneNo?: string | null
    yearOfService?: string | null
    teaching?: boolean | null
    parentNo?: string | null
    parentName?: string | null
    DOA?: Date | string | null
    birthdate?: Date | string | null
    admissionNo?: string | null
    gender?: string | null
  }

  export type ClassCreateManySchoolInput = {
    id?: string
    name: string
    teacherId: string
  }

  export type TimetableCreateManySchoolInput = {
    id?: string
    day: string
    startTime: Date | string
    endTime: Date | string
    class: string
    subject: string
    period: number
    periodSpan: number
  }

  export type AttendanceCreateManySchoolInput = {
    id?: string
    date: Date | string
    status: string
    studentId: string
    classId: string
  }

  export type UserUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    class?: NullableStringFieldUpdateOperationsInput | string | null
    oracleNo?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    post?: NullableStringFieldUpdateOperationsInput | string | null
    payrollNo?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfExit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfService?: NullableStringFieldUpdateOperationsInput | string | null
    teaching?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parentNo?: NullableStringFieldUpdateOperationsInput | string | null
    parentName?: NullableStringFieldUpdateOperationsInput | string | null
    DOA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissionNo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: UserUpdateOneWithoutChildrenNestedInput
    children?: UserUpdateManyWithoutParentNestedInput
    Class?: ClassUpdateManyWithoutTeacherNestedInput
    Attendance?: AttendanceUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    class?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    oracleNo?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    post?: NullableStringFieldUpdateOperationsInput | string | null
    payrollNo?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfExit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfService?: NullableStringFieldUpdateOperationsInput | string | null
    teaching?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parentNo?: NullableStringFieldUpdateOperationsInput | string | null
    parentName?: NullableStringFieldUpdateOperationsInput | string | null
    DOA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissionNo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    children?: UserUncheckedUpdateManyWithoutParentNestedInput
    Class?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
    Attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    class?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    oracleNo?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNo?: NullableStringFieldUpdateOperationsInput | string | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    post?: NullableStringFieldUpdateOperationsInput | string | null
    payrollNo?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfExit?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    yearOfService?: NullableStringFieldUpdateOperationsInput | string | null
    teaching?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parentNo?: NullableStringFieldUpdateOperationsInput | string | null
    parentName?: NullableStringFieldUpdateOperationsInput | string | null
    DOA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admissionNo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacher?: UserUpdateOneRequiredWithoutClassNestedInput
    Attendance?: AttendanceUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    Attendance?: AttendanceUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type TimetableUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    period?: IntFieldUpdateOperationsInput | number
    periodSpan?: IntFieldUpdateOperationsInput | number
  }

  export type TimetableUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    period?: IntFieldUpdateOperationsInput | number
    periodSpan?: IntFieldUpdateOperationsInput | number
  }

  export type TimetableUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    period?: IntFieldUpdateOperationsInput | number
    periodSpan?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    student?: UserUpdateOneRequiredWithoutAttendanceNestedInput
    class?: ClassUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceCreateManyClassInput = {
    id?: string
    date: Date | string
    status: string
    schoolId: string
    studentId: string
  }

  export type AttendanceUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    school?: SchoolUpdateOneWithoutAttendanceNestedInput
    student?: UserUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
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