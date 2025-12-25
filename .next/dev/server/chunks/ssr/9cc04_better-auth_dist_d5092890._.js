module.exports = [
"[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/dialect-BvcuosDD.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>getKyselyDatabaseType,
    "t",
    ()=>createKyselyAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$kysely$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/kysely@0.28.8/node_modules/kysely/dist/esm/kysely.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$mssql$2f$mssql$2d$dialect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/kysely@0.28.8/node_modules/kysely/dist/esm/dialect/mssql/mssql-dialect.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$mysql$2f$mysql$2d$dialect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/kysely@0.28.8/node_modules/kysely/dist/esm/dialect/mysql/mysql-dialect.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$postgres$2f$postgres$2d$dialect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/kysely@0.28.8/node_modules/kysely/dist/esm/dialect/postgres/postgres-dialect.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$sqlite$2f$sqlite$2d$dialect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/kysely@0.28.8/node_modules/kysely/dist/esm/dialect/sqlite/sqlite-dialect.js [app-rsc] (ecmascript)");
;
//#region src/adapters/kysely-adapter/dialect.ts
function getKyselyDatabaseType(db) {
    if (!db) return null;
    if ("dialect" in db) return getKyselyDatabaseType(db.dialect);
    if ("createDriver" in db) {
        if (db instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$sqlite$2f$sqlite$2d$dialect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SqliteDialect"]) return "sqlite";
        if (db instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$mysql$2f$mysql$2d$dialect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MysqlDialect"]) return "mysql";
        if (db instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$postgres$2f$postgres$2d$dialect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PostgresDialect"]) return "postgres";
        if (db instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$mssql$2f$mssql$2d$dialect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MssqlDialect"]) return "mssql";
    }
    if ("aggregate" in db) return "sqlite";
    if ("getConnection" in db) return "mysql";
    if ("connect" in db) return "postgres";
    if ("fileControl" in db) return "sqlite";
    if ("open" in db && "close" in db && "prepare" in db) return "sqlite";
    return null;
}
const createKyselyAdapter = async (config)=>{
    const db = config.database;
    if (!db) return {
        kysely: null,
        databaseType: null,
        transaction: void 0
    };
    if ("db" in db) return {
        kysely: db.db,
        databaseType: db.type,
        transaction: db.transaction
    };
    if ("dialect" in db) return {
        kysely: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$kysely$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Kysely"]({
            dialect: db.dialect
        }),
        databaseType: db.type,
        transaction: db.transaction
    };
    let dialect = void 0;
    const databaseType = getKyselyDatabaseType(db);
    if ("createDriver" in db) dialect = db;
    if ("aggregate" in db && !("createSession" in db)) dialect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$sqlite$2f$sqlite$2d$dialect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SqliteDialect"]({
        database: db
    });
    if ("getConnection" in db) dialect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$mysql$2f$mysql$2d$dialect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MysqlDialect"](db);
    if ("connect" in db) dialect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$dialect$2f$postgres$2f$postgres$2d$dialect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PostgresDialect"]({
        pool: db
    });
    if ("fileControl" in db) {
        const { BunSqliteDialect } = await __turbopack_context__.A("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/bun-sqlite-dialect-2R9nCsVF.mjs [app-rsc] (ecmascript, async loader)");
        dialect = new BunSqliteDialect({
            database: db
        });
    }
    if ("createSession" in db && ("TURBOPACK compile-time value", "undefined") === "undefined") {
        let DatabaseSync = void 0;
        try {
            let nodeSqlite = "node:sqlite";
            ({ DatabaseSync } = await import(/* @vite-ignore */ /* webpackIgnore: true */ nodeSqlite));
        } catch (error) {
            if (error !== null && typeof error === "object" && "code" in error && error.code !== "ERR_UNKNOWN_BUILTIN_MODULE") throw error;
        }
        if (DatabaseSync && db instanceof DatabaseSync) {
            const { NodeSqliteDialect } = await __turbopack_context__.A("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/node-sqlite-dialect-CdC7L-ji.mjs [app-rsc] (ecmascript, async loader)");
            dialect = new NodeSqliteDialect({
                database: db
            });
        }
    }
    return {
        kysely: dialect ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$kysely$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Kysely"]({
            dialect
        }) : null,
        databaseType,
        transaction: void 0
    };
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/get-model-name-D4DUV7S2.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>getAuthTables,
    "i",
    ()=>initGetDefaultModelName,
    "n",
    ()=>initGetFieldName,
    "r",
    ()=>initGetDefaultFieldName,
    "t",
    ()=>initGetModelName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/error/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/error-BhAKg8LX.mjs [app-rsc] (ecmascript) <export t as BetterAuthError>");
;
//#region src/db/get-tables.ts
const getAuthTables = (options)=>{
    const pluginSchema = (options.plugins ?? []).reduce((acc, plugin)=>{
        const schema = plugin.schema;
        if (!schema) return acc;
        for (const [key, value] of Object.entries(schema))acc[key] = {
            fields: {
                ...acc[key]?.fields,
                ...value.fields
            },
            modelName: value.modelName || key
        };
        return acc;
    }, {});
    const shouldAddRateLimitTable = options.rateLimit?.storage === "database";
    const rateLimitTable = {
        rateLimit: {
            modelName: options.rateLimit?.modelName || "rateLimit",
            fields: {
                key: {
                    type: "string",
                    fieldName: options.rateLimit?.fields?.key || "key"
                },
                count: {
                    type: "number",
                    fieldName: options.rateLimit?.fields?.count || "count"
                },
                lastRequest: {
                    type: "number",
                    bigint: true,
                    fieldName: options.rateLimit?.fields?.lastRequest || "lastRequest"
                }
            }
        }
    };
    const { user, session, account, ...pluginTables } = pluginSchema;
    const sessionTable = {
        session: {
            modelName: options.session?.modelName || "session",
            fields: {
                expiresAt: {
                    type: "date",
                    required: true,
                    fieldName: options.session?.fields?.expiresAt || "expiresAt"
                },
                token: {
                    type: "string",
                    required: true,
                    fieldName: options.session?.fields?.token || "token",
                    unique: true
                },
                createdAt: {
                    type: "date",
                    required: true,
                    fieldName: options.session?.fields?.createdAt || "createdAt",
                    defaultValue: ()=>/* @__PURE__ */ new Date()
                },
                updatedAt: {
                    type: "date",
                    required: true,
                    fieldName: options.session?.fields?.updatedAt || "updatedAt",
                    onUpdate: ()=>/* @__PURE__ */ new Date()
                },
                ipAddress: {
                    type: "string",
                    required: false,
                    fieldName: options.session?.fields?.ipAddress || "ipAddress"
                },
                userAgent: {
                    type: "string",
                    required: false,
                    fieldName: options.session?.fields?.userAgent || "userAgent"
                },
                userId: {
                    type: "string",
                    fieldName: options.session?.fields?.userId || "userId",
                    references: {
                        model: options.user?.modelName || "user",
                        field: "id",
                        onDelete: "cascade"
                    },
                    required: true,
                    index: true
                },
                ...session?.fields,
                ...options.session?.additionalFields
            },
            order: 2
        }
    };
    return {
        user: {
            modelName: options.user?.modelName || "user",
            fields: {
                name: {
                    type: "string",
                    required: true,
                    fieldName: options.user?.fields?.name || "name",
                    sortable: true
                },
                email: {
                    type: "string",
                    unique: true,
                    required: true,
                    fieldName: options.user?.fields?.email || "email",
                    sortable: true
                },
                emailVerified: {
                    type: "boolean",
                    defaultValue: false,
                    required: true,
                    fieldName: options.user?.fields?.emailVerified || "emailVerified",
                    input: false
                },
                image: {
                    type: "string",
                    required: false,
                    fieldName: options.user?.fields?.image || "image"
                },
                createdAt: {
                    type: "date",
                    defaultValue: ()=>/* @__PURE__ */ new Date(),
                    required: true,
                    fieldName: options.user?.fields?.createdAt || "createdAt"
                },
                updatedAt: {
                    type: "date",
                    defaultValue: ()=>/* @__PURE__ */ new Date(),
                    onUpdate: ()=>/* @__PURE__ */ new Date(),
                    required: true,
                    fieldName: options.user?.fields?.updatedAt || "updatedAt"
                },
                ...user?.fields,
                ...options.user?.additionalFields
            },
            order: 1
        },
        ...!options.secondaryStorage || options.session?.storeSessionInDatabase ? sessionTable : {},
        account: {
            modelName: options.account?.modelName || "account",
            fields: {
                accountId: {
                    type: "string",
                    required: true,
                    fieldName: options.account?.fields?.accountId || "accountId"
                },
                providerId: {
                    type: "string",
                    required: true,
                    fieldName: options.account?.fields?.providerId || "providerId"
                },
                userId: {
                    type: "string",
                    references: {
                        model: options.user?.modelName || "user",
                        field: "id",
                        onDelete: "cascade"
                    },
                    required: true,
                    fieldName: options.account?.fields?.userId || "userId",
                    index: true
                },
                accessToken: {
                    type: "string",
                    required: false,
                    fieldName: options.account?.fields?.accessToken || "accessToken"
                },
                refreshToken: {
                    type: "string",
                    required: false,
                    fieldName: options.account?.fields?.refreshToken || "refreshToken"
                },
                idToken: {
                    type: "string",
                    required: false,
                    fieldName: options.account?.fields?.idToken || "idToken"
                },
                accessTokenExpiresAt: {
                    type: "date",
                    required: false,
                    fieldName: options.account?.fields?.accessTokenExpiresAt || "accessTokenExpiresAt"
                },
                refreshTokenExpiresAt: {
                    type: "date",
                    required: false,
                    fieldName: options.account?.fields?.refreshTokenExpiresAt || "refreshTokenExpiresAt"
                },
                scope: {
                    type: "string",
                    required: false,
                    fieldName: options.account?.fields?.scope || "scope"
                },
                password: {
                    type: "string",
                    required: false,
                    fieldName: options.account?.fields?.password || "password"
                },
                createdAt: {
                    type: "date",
                    required: true,
                    fieldName: options.account?.fields?.createdAt || "createdAt",
                    defaultValue: ()=>/* @__PURE__ */ new Date()
                },
                updatedAt: {
                    type: "date",
                    required: true,
                    fieldName: options.account?.fields?.updatedAt || "updatedAt",
                    onUpdate: ()=>/* @__PURE__ */ new Date()
                },
                ...account?.fields,
                ...options.account?.additionalFields
            },
            order: 3
        },
        verification: {
            modelName: options.verification?.modelName || "verification",
            fields: {
                identifier: {
                    type: "string",
                    required: true,
                    fieldName: options.verification?.fields?.identifier || "identifier",
                    index: true
                },
                value: {
                    type: "string",
                    required: true,
                    fieldName: options.verification?.fields?.value || "value"
                },
                expiresAt: {
                    type: "date",
                    required: true,
                    fieldName: options.verification?.fields?.expiresAt || "expiresAt"
                },
                createdAt: {
                    type: "date",
                    required: true,
                    defaultValue: ()=>/* @__PURE__ */ new Date(),
                    fieldName: options.verification?.fields?.createdAt || "createdAt"
                },
                updatedAt: {
                    type: "date",
                    required: true,
                    defaultValue: ()=>/* @__PURE__ */ new Date(),
                    onUpdate: ()=>/* @__PURE__ */ new Date(),
                    fieldName: options.verification?.fields?.updatedAt || "updatedAt"
                }
            },
            order: 4
        },
        ...pluginTables,
        ...shouldAddRateLimitTable ? rateLimitTable : {}
    };
};
//#endregion
//#region src/adapters/adapter-factory/get-default-model-name.ts
const initGetDefaultModelName = ({ usePlural, schema })=>{
    /**
	* This function helps us get the default model name from the schema defined by devs.
	* Often times, the user will be using the `modelName` which could had been customized by the users.
	* This function helps us get the actual model name useful to match against the schema. (eg: schema[model])
	*
	* If it's still unclear what this does:
	*
	* 1. User can define a custom modelName.
	* 2. When using a custom modelName, doing something like `schema[model]` will not work.
	* 3. Using this function helps us get the actual model name based on the user's defined custom modelName.
	*/ const getDefaultModelName = (model)=>{
        if (usePlural && model.charAt(model.length - 1) === "s") {
            let pluralessModel = model.slice(0, -1);
            let m$1 = schema[pluralessModel] ? pluralessModel : void 0;
            if (!m$1) m$1 = Object.entries(schema).find(([_, f])=>f.modelName === pluralessModel)?.[0];
            if (m$1) return m$1;
        }
        let m = schema[model] ? model : void 0;
        if (!m) m = Object.entries(schema).find(([_, f])=>f.modelName === model)?.[0];
        if (!m) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"](`Model "${model}" not found in schema`);
        return m;
    };
    return getDefaultModelName;
};
//#endregion
//#region src/adapters/adapter-factory/get-default-field-name.ts
const initGetDefaultFieldName = ({ schema, usePlural })=>{
    const getDefaultModelName = initGetDefaultModelName({
        schema,
        usePlural
    });
    /**
	* This function helps us get the default field name from the schema defined by devs.
	* Often times, the user will be using the `fieldName` which could had been customized by the users.
	* This function helps us get the actual field name useful to match against the schema. (eg: schema[model].fields[field])
	*
	* If it's still unclear what this does:
	*
	* 1. User can define a custom fieldName.
	* 2. When using a custom fieldName, doing something like `schema[model].fields[field]` will not work.
	*/ const getDefaultFieldName = ({ field, model: unsafeModel })=>{
        if (field === "id" || field === "_id") return "id";
        const model = getDefaultModelName(unsafeModel);
        let f = schema[model]?.fields[field];
        if (!f) {
            const result = Object.entries(schema[model].fields).find(([_, f$1])=>f$1.fieldName === field);
            if (result) {
                f = result[1];
                field = result[0];
            }
        }
        if (!f) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"](`Field ${field} not found in model ${model}`);
        return field;
    };
    return getDefaultFieldName;
};
//#endregion
//#region src/adapters/adapter-factory/get-field-name.ts
const initGetFieldName = ({ schema, usePlural })=>{
    const getDefaultModelName = initGetDefaultModelName({
        schema,
        usePlural
    });
    const getDefaultFieldName = initGetDefaultFieldName({
        schema,
        usePlural
    });
    /**
	* Get the field name which is expected to be saved in the database based on the user's schema.
	*
	* This function is useful if you need to save the field name to the database.
	*
	* For example, if the user has defined a custom field name for the `user` model, then you can use this function to get the actual field name from the schema.
	*/ function getFieldName({ model: modelName, field: fieldName }) {
        const model = getDefaultModelName(modelName);
        const field = getDefaultFieldName({
            model,
            field: fieldName
        });
        return schema[model]?.fields[field]?.fieldName || field;
    }
    return getFieldName;
};
//#endregion
//#region src/adapters/adapter-factory/get-model-name.ts
const initGetModelName = ({ usePlural, schema })=>{
    const getDefaultModelName = initGetDefaultModelName({
        schema,
        usePlural
    });
    /**
	* Users can overwrite the default model of some tables. This function helps find the correct model name.
	* Furthermore, if the user passes `usePlural` as true in their adapter config,
	* then we should return the model name ending with an `s`.
	*/ const getModelName = (model)=>{
        const defaultModelKey = getDefaultModelName(model);
        if (schema && schema[defaultModelKey] && schema[defaultModelKey].modelName !== model) return usePlural ? `${schema[defaultModelKey].modelName}s` : schema[defaultModelKey].modelName;
        return usePlural ? `${model}s` : model;
    };
    return getModelName;
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/crypto-BQxYXGGX.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>verifyPassword,
    "i",
    ()=>hashPassword,
    "n",
    ()=>symmetricEncrypt,
    "o",
    ()=>constantTimeEqual,
    "r",
    ()=>generateRandomString,
    "t",
    ()=>symmetricDecrypt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/error/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/error-BhAKg8LX.mjs [app-rsc] (ecmascript) <export t as BetterAuthError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hash.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$chacha$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+ciphers@2.0.1/node_modules/@noble/ciphers/chacha.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+ciphers@2.0.1/node_modules/@noble/ciphers/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hex.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$scrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@2.0.1/node_modules/@noble/hashes/scrypt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@2.0.1/node_modules/@noble/hashes/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$random$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/random.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
//#region src/crypto/buffer.ts
/**
* Compare two buffers in constant time.
*/ function constantTimeEqual(a, b) {
    if (typeof a === "string") a = new TextEncoder().encode(a);
    if (typeof b === "string") b = new TextEncoder().encode(b);
    const aBuffer = new Uint8Array(a);
    const bBuffer = new Uint8Array(b);
    let c = aBuffer.length ^ bBuffer.length;
    const length = Math.max(aBuffer.length, bBuffer.length);
    for(let i = 0; i < length; i++)c |= (i < aBuffer.length ? aBuffer[i] : 0) ^ (i < bBuffer.length ? bBuffer[i] : 0);
    return c === 0;
}
//#endregion
//#region src/crypto/password.ts
const config = {
    N: 16384,
    r: 16,
    p: 1,
    dkLen: 64
};
async function generateKey(password, salt) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$scrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scryptAsync"])(password.normalize("NFKC"), salt, {
        N: config.N,
        p: config.p,
        r: config.r,
        dkLen: config.dkLen,
        maxmem: 128 * config.N * config.r * 2
    });
}
const hashPassword = async (password)=>{
    const salt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hex"].encode(crypto.getRandomValues(new Uint8Array(16)));
    const key = await generateKey(password, salt);
    return `${salt}:${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hex$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hex"].encode(key)}`;
};
const verifyPassword = async ({ hash, password })=>{
    const [salt, key] = hash.split(":");
    if (!salt || !key) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"]("Invalid password hash");
    return constantTimeEqual(await generateKey(password, salt), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hexToBytes"])(key));
};
//#endregion
//#region src/crypto/random.ts
const generateRandomString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$random$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRandomStringGenerator"])("a-z", "0-9", "A-Z", "-_");
//#endregion
//#region src/crypto/index.ts
const symmetricEncrypt = async ({ key, data })=>{
    const keyAsBytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHash"])("SHA-256").digest(key);
    const dataAsBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["utf8ToBytes"])(data);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bytesToHex"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["managedNonce"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$chacha$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["xchacha20poly1305"])(new Uint8Array(keyAsBytes)).encrypt(dataAsBytes));
};
const symmetricDecrypt = async ({ key, data })=>{
    const keyAsBytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hash$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHash"])("SHA-256").digest(key);
    const dataAsBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hexToBytes"])(data);
    const chacha = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["managedNonce"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$ciphers$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$ciphers$2f$chacha$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["xchacha20poly1305"])(new Uint8Array(keyAsBytes));
    return new TextDecoder().decode(chacha.decrypt(dataAsBytes));
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/utils-DBbaShi0.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>getOAuthState,
    "i",
    ()=>parseState,
    "n",
    ()=>HIDE_METADATA,
    "r",
    ()=>generateState,
    "t",
    ()=>generateId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2d$BQxYXGGX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/crypto-BQxYXGGX.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/context/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__defineRequestState$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/context-DgQ9XGBl.mjs [app-rsc] (ecmascript) <export a as defineRequestState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.0/node_modules/better-call/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.1.13/node_modules/zod/v4/classic/schemas.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.1.13/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$random$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/random.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
//#region src/api/middlewares/oauth.ts
const { get: getOAuthState, set: setOAuthState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__defineRequestState$3e$__["defineRequestState"])(()=>null);
//#endregion
//#region src/oauth2/state.ts
async function generateState(c, link, additionalData) {
    const callbackURL = c.body?.callbackURL || c.context.options.baseURL;
    if (!callbackURL) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: "callbackURL is required"
    });
    const codeVerifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2d$BQxYXGGX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(128);
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2d$BQxYXGGX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(32);
    const storeStateStrategy = c.context.oauthConfig?.storeStateStrategy || "cookie";
    const stateData = {
        ...additionalData ? additionalData : {},
        callbackURL,
        codeVerifier,
        errorURL: c.body?.errorCallbackURL,
        newUserURL: c.body?.newUserCallbackURL,
        link,
        expiresAt: Date.now() + 600 * 1e3,
        requestSignUp: c.body?.requestSignUp
    };
    await setOAuthState(stateData);
    if (storeStateStrategy === "cookie") {
        const encryptedData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2d$BQxYXGGX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])({
            key: c.context.secret,
            data: JSON.stringify(stateData)
        });
        const stateCookie$1 = c.context.createAuthCookie("oauth_state", {
            maxAge: 600 * 1e3
        });
        c.setCookie(stateCookie$1.name, encryptedData, stateCookie$1.attributes);
        return {
            state,
            codeVerifier
        };
    }
    const stateCookie = c.context.createAuthCookie("state", {
        maxAge: 300 * 1e3
    });
    await c.setSignedCookie(stateCookie.name, state, c.context.secret, stateCookie.attributes);
    const expiresAt = /* @__PURE__ */ new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 10);
    const verification = await c.context.internalAdapter.createVerificationValue({
        value: JSON.stringify(stateData),
        identifier: state,
        expiresAt
    });
    if (!verification) {
        c.context.logger.error("Unable to create verification. Make sure the database adapter is properly working and there is a verification table in the database");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
            message: "Unable to create verification"
        });
    }
    return {
        state: verification.identifier,
        codeVerifier
    };
}
async function parseState(c) {
    const state = c.query.state || c.body.state;
    const storeStateStrategy = c.context.oauthConfig.storeStateStrategy || "cookie";
    const stateDataSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["looseObject"]({
        callbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"](),
        codeVerifier: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"](),
        errorURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().optional(),
        newUserURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().optional(),
        expiresAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["number"](),
        link: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
            email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"](),
            userId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["coerce"].string()
        }).optional(),
        requestSignUp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["boolean"]().optional()
    });
    let parsedData;
    if (storeStateStrategy === "cookie") {
        const stateCookie = c.context.createAuthCookie("oauth_state");
        const encryptedData = c.getCookie(stateCookie.name);
        if (!encryptedData) {
            c.context.logger.error("State Mismatch. OAuth state cookie not found", {
                state
            });
            const errorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
            throw c.redirect(`${errorURL}?error=please_restart_the_process`);
        }
        try {
            const decryptedData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2d$BQxYXGGX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])({
                key: c.context.secret,
                data: encryptedData
            });
            parsedData = stateDataSchema.parse(JSON.parse(decryptedData));
        } catch (error) {
            c.context.logger.error("Failed to decrypt or parse OAuth state cookie", {
                error
            });
            const errorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
            throw c.redirect(`${errorURL}?error=please_restart_the_process`);
        }
        c.setCookie(stateCookie.name, "", {
            maxAge: 0
        });
    } else {
        const data = await c.context.internalAdapter.findVerificationValue(state);
        if (!data) {
            c.context.logger.error("State Mismatch. Verification not found", {
                state
            });
            const errorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
            throw c.redirect(`${errorURL}?error=please_restart_the_process`);
        }
        parsedData = stateDataSchema.parse(JSON.parse(data.value));
        const stateCookie = c.context.createAuthCookie("state");
        const stateCookieValue = await c.getSignedCookie(stateCookie.name, c.context.secret);
        if (!c.context.oauthConfig?.skipStateCookieCheck && (!stateCookieValue || stateCookieValue !== state)) {
            const errorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
            throw c.redirect(`${errorURL}?error=state_mismatch`);
        }
        c.setCookie(stateCookie.name, "", {
            maxAge: 0
        });
        await c.context.internalAdapter.deleteVerificationValue(data.id);
    }
    if (!parsedData.errorURL) parsedData.errorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
    if (parsedData.expiresAt < Date.now()) {
        const errorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
        throw c.redirect(`${errorURL}?error=please_restart_the_process`);
    }
    if (parsedData) await setOAuthState(parsedData);
    return parsedData;
}
//#endregion
//#region src/utils/hide-metadata.ts
const HIDE_METADATA = {
    isAction: false
};
//#endregion
//#region src/utils/id.ts
const generateId = (size)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$random$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRandomStringGenerator"])("a-z", "A-Z", "0-9")(size || 32);
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/schema-CSB7dlK0.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>parseInputData,
    "c",
    ()=>parseUserInput,
    "i",
    ()=>parseAdditionalUserInput,
    "l",
    ()=>parseUserOutput,
    "n",
    ()=>parseAccountInput,
    "o",
    ()=>parseSessionInput,
    "r",
    ()=>parseAccountOutput,
    "s",
    ()=>parseSessionOutput,
    "t",
    ()=>mergeSchema,
    "u",
    ()=>getDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.0/node_modules/better-call/dist/index.js [app-rsc] (ecmascript)");
;
//#region src/utils/date.ts
const getDate = (span, unit = "ms")=>{
    return new Date(Date.now() + (unit === "sec" ? span * 1e3 : span));
};
//#endregion
//#region src/db/schema.ts
const cache = /* @__PURE__ */ new WeakMap();
function parseOutputData(data, schema) {
    const fields = schema.fields;
    const parsedData = {};
    for(const key in data){
        const field = fields[key];
        if (!field) {
            parsedData[key] = data[key];
            continue;
        }
        if (field.returned === false) continue;
        parsedData[key] = data[key];
    }
    return parsedData;
}
function getAllFields(options, table) {
    if (!cache.has(options)) cache.set(options, /* @__PURE__ */ new Map());
    const tableCache = cache.get(options);
    if (tableCache.has(table)) return tableCache.get(table);
    let schema = {
        ...table === "user" ? options.user?.additionalFields : {},
        ...table === "session" ? options.session?.additionalFields : {}
    };
    for (const plugin of options.plugins || [])if (plugin.schema && plugin.schema[table]) schema = {
        ...schema,
        ...plugin.schema[table].fields
    };
    cache.get(options).set(table, schema);
    return schema;
}
function parseUserOutput(options, user) {
    return parseOutputData(user, {
        fields: getAllFields(options, "user")
    });
}
function parseAccountOutput(options, account) {
    return parseOutputData(account, {
        fields: getAllFields(options, "account")
    });
}
function parseSessionOutput(options, session) {
    return parseOutputData(session, {
        fields: getAllFields(options, "session")
    });
}
function parseInputData(data, schema) {
    const action = schema.action || "create";
    const fields = schema.fields;
    const parsedData = Object.assign(Object.create(null), null);
    for(const key in fields){
        if (key in data) {
            if (fields[key].input === false) {
                if (fields[key].defaultValue !== void 0) {
                    if (action !== "update") {
                        parsedData[key] = fields[key].defaultValue;
                        continue;
                    }
                }
                if (data[key]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: `${key} is not allowed to be set`
                });
                continue;
            }
            if (fields[key].validator?.input && data[key] !== void 0) {
                parsedData[key] = fields[key].validator.input["~standard"].validate(data[key]);
                continue;
            }
            if (fields[key].transform?.input && data[key] !== void 0) {
                parsedData[key] = fields[key].transform?.input(data[key]);
                continue;
            }
            parsedData[key] = data[key];
            continue;
        }
        if (fields[key].defaultValue !== void 0 && action === "create") {
            if (typeof fields[key].defaultValue === "function") {
                parsedData[key] = fields[key].defaultValue();
                continue;
            }
            parsedData[key] = fields[key].defaultValue;
            continue;
        }
        if (fields[key].required && action === "create") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: `${key} is required`
        });
    }
    return parsedData;
}
function parseUserInput(options, user = {}, action) {
    return parseInputData(user, {
        fields: getAllFields(options, "user"),
        action
    });
}
function parseAdditionalUserInput(options, user) {
    const schema = getAllFields(options, "user");
    return parseInputData(user || {}, {
        fields: schema
    });
}
function parseAccountInput(options, account) {
    return parseInputData(account, {
        fields: getAllFields(options, "account")
    });
}
function parseSessionInput(options, session) {
    return parseInputData(session, {
        fields: getAllFields(options, "session")
    });
}
function mergeSchema(schema, newSchema) {
    if (!newSchema) return schema;
    for(const table in newSchema){
        const newModelName = newSchema[table]?.modelName;
        if (newModelName) schema[table].modelName = newModelName;
        for(const field in schema[table].fields){
            const newField = newSchema[table]?.fields?.[field];
            if (!newField) continue;
            schema[table].fields[field].fieldName = newField;
        }
    }
    return schema;
}
;
}),
"[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/get-request-ip-RYTz2Uba.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>getIp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__d__as__isDevelopment$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env-DwlNAN_D.mjs [app-rsc] (ecmascript) <export d as isDevelopment>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__p__as__isTest$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env-DwlNAN_D.mjs [app-rsc] (ecmascript) <export p as isTest>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.1.13/node_modules/zod/v4/classic/schemas.js [app-rsc] (ecmascript)");
;
;
//#region src/utils/get-request-ip.ts
const LOCALHOST_IP = "127.0.0.1";
function getIp(req, options) {
    if (options.advanced?.ipAddress?.disableIpTracking) return null;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__p__as__isTest$3e$__["isTest"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__d__as__isDevelopment$3e$__["isDevelopment"])()) return LOCALHOST_IP;
    const headers = "headers" in req ? req.headers : req;
    const ipHeaders = options.advanced?.ipAddress?.ipAddressHeaders || [
        "x-forwarded-for"
    ];
    for (const key of ipHeaders){
        const value = "get" in headers ? headers.get(key) : headers[key];
        if (typeof value === "string") {
            const ip = value.split(",")[0].trim();
            if (isValidIP(ip)) return ip;
        }
    }
    return null;
}
function isValidIP(ip) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ipv4"]().safeParse(ip).success) return true;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ipv6"]().safeParse(ip).success) return true;
    return false;
}
;
}),
"[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/json-_HMgPUVh.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>safeJSONParse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env-DwlNAN_D.mjs [app-rsc] (ecmascript) <export i as logger>");
;
//#region src/utils/json.ts
function safeJSONParse(data) {
    function reviver(_, value) {
        if (typeof value === "string") {
            if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/.test(value)) {
                const date = new Date(value);
                if (!isNaN(date.getTime())) return date;
            }
        }
        return value;
    }
    try {
        if (typeof data !== "string") return data;
        return JSON.parse(data, reviver);
    } catch (e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__["logger"].error("Error parsing JSON", {
            error: e
        });
        return null;
    }
}
;
}),
"[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/get-migration-6ewabxRC.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>createInternalAdapter,
    "c",
    ()=>convertToDB,
    "d",
    ()=>getBaseAdapter,
    "i",
    ()=>toZodSchema,
    "l",
    ()=>createFieldAttribute,
    "n",
    ()=>matchType,
    "o",
    ()=>getWithHooks,
    "r",
    ()=>getSchema,
    "s",
    ()=>convertFromDB,
    "t",
    ()=>getMigrations,
    "u",
    ()=>getAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$dialect$2d$BvcuosDD$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/dialect-BvcuosDD.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$model$2d$name$2d$D4DUV7S2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/get-model-name-D4DUV7S2.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2d$DBbaShi0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/utils-DBbaShi0.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/schema-CSB7dlK0.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$request$2d$ip$2d$RYTz2Uba$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/get-request-ip-RYTz2Uba.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/json-_HMgPUVh.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/context/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/context-DgQ9XGBl.mjs [app-rsc] (ecmascript) <export t as getCurrentAdapter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__getCurrentAuthContext$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/context-DgQ9XGBl.mjs [app-rsc] (ecmascript) <export u as getCurrentAuthContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__runWithTransaction$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/context-DgQ9XGBl.mjs [app-rsc] (ecmascript) <export i as runWithTransaction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__createLogger$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env-DwlNAN_D.mjs [app-rsc] (ecmascript) <export n as createLogger>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env-DwlNAN_D.mjs [app-rsc] (ecmascript) <export i as logger>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/error/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/error-BhAKg8LX.mjs [app-rsc] (ecmascript) <export t as BetterAuthError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$raw$2d$builder$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/kysely@0.28.8/node_modules/kysely/dist/esm/raw-builder/sql.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.1.13/node_modules/zod/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
//#region src/db/adapter-base.ts
async function getBaseAdapter(options, handleDirectDatabase) {
    let adapter;
    if (!options.database) {
        const tables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$model$2d$name$2d$D4DUV7S2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"])(options);
        const memoryDB = Object.keys(tables).reduce((acc, key)=>{
            acc[key] = [];
            return acc;
        }, {});
        const { memoryAdapter } = await __turbopack_context__.A("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/adapters/memory-adapter/index.mjs [app-rsc] (ecmascript, async loader)");
        adapter = memoryAdapter(memoryDB)(options);
    } else if (typeof options.database === "function") adapter = options.database(options);
    else adapter = await handleDirectDatabase(options);
    if (!adapter.transaction) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__["logger"].warn("Adapter does not correctly implement transaction function, patching it automatically. Please update your adapter implementation.");
        adapter.transaction = async (cb)=>{
            return cb(adapter);
        };
    }
    return adapter;
}
//#endregion
//#region src/db/adapter-kysely.ts
async function getAdapter(options) {
    return getBaseAdapter(options, async (opts)=>{
        const { createKyselyAdapter: createKyselyAdapter$1 } = await __turbopack_context__.A("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/adapters/kysely-adapter/index.mjs [app-rsc] (ecmascript, async loader)");
        const { kysely, databaseType, transaction } = await createKyselyAdapter$1(opts);
        if (!kysely) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"]("Failed to initialize database adapter");
        const { kyselyAdapter } = await __turbopack_context__.A("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/adapters/kysely-adapter/index.mjs [app-rsc] (ecmascript, async loader)");
        return kyselyAdapter(kysely, {
            type: databaseType || "sqlite",
            debugLogs: opts.database && "debugLogs" in opts.database ? opts.database.debugLogs : false,
            transaction
        })(opts);
    });
}
//#endregion
//#region src/db/field.ts
const createFieldAttribute = (type, config)=>{
    return {
        type,
        ...config
    };
};
//#endregion
//#region src/db/field-converter.ts
function convertToDB(fields, values) {
    let result = values.id ? {
        id: values.id
    } : {};
    for(const key in fields){
        const field = fields[key];
        const value = values[key];
        if (value === void 0) continue;
        result[field.fieldName || key] = value;
    }
    return result;
}
function convertFromDB(fields, values) {
    if (!values) return null;
    let result = {
        id: values.id
    };
    for (const [key, value] of Object.entries(fields))result[key] = values[value.fieldName || key];
    return result;
}
//#endregion
//#region src/db/with-hooks.ts
function getWithHooks(adapter, ctx) {
    const hooks = ctx.hooks;
    async function createWithHooks(data, model, customCreateFn) {
        const context = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__getCurrentAuthContext$3e$__["getCurrentAuthContext"])();
        let actualData = data;
        for (const hook of hooks || []){
            const toRun = hook[model]?.create?.before;
            if (toRun) {
                const result = await toRun(actualData, context);
                if (result === false) return null;
                if (typeof result === "object" && "data" in result) actualData = {
                    ...actualData,
                    ...result.data
                };
            }
        }
        const customCreated = customCreateFn ? await customCreateFn.fn(actualData) : null;
        const created = !customCreateFn || customCreateFn.executeMainFn ? await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).create({
            model,
            data: actualData,
            forceAllowId: true
        }) : customCreated;
        for (const hook of hooks || []){
            const toRun = hook[model]?.create?.after;
            if (toRun) await toRun(created, context);
        }
        return created;
    }
    async function updateWithHooks(data, where, model, customUpdateFn) {
        const context = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__getCurrentAuthContext$3e$__["getCurrentAuthContext"])();
        let actualData = data;
        for (const hook of hooks || []){
            const toRun = hook[model]?.update?.before;
            if (toRun) {
                const result = await toRun(data, context);
                if (result === false) return null;
                if (typeof result === "object" && "data" in result) actualData = {
                    ...actualData,
                    ...result.data
                };
            }
        }
        const customUpdated = customUpdateFn ? await customUpdateFn.fn(actualData) : null;
        const updated = !customUpdateFn || customUpdateFn.executeMainFn ? await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).update({
            model,
            update: actualData,
            where
        }) : customUpdated;
        for (const hook of hooks || []){
            const toRun = hook[model]?.update?.after;
            if (toRun) await toRun(updated, context);
        }
        return updated;
    }
    async function updateManyWithHooks(data, where, model, customUpdateFn) {
        const context = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__getCurrentAuthContext$3e$__["getCurrentAuthContext"])();
        let actualData = data;
        for (const hook of hooks || []){
            const toRun = hook[model]?.update?.before;
            if (toRun) {
                const result = await toRun(data, context);
                if (result === false) return null;
                if (typeof result === "object" && "data" in result) actualData = {
                    ...actualData,
                    ...result.data
                };
            }
        }
        const customUpdated = customUpdateFn ? await customUpdateFn.fn(actualData) : null;
        const updated = !customUpdateFn || customUpdateFn.executeMainFn ? await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).updateMany({
            model,
            update: actualData,
            where
        }) : customUpdated;
        for (const hook of hooks || []){
            const toRun = hook[model]?.update?.after;
            if (toRun) await toRun(updated, context);
        }
        return updated;
    }
    async function deleteWithHooks(where, model, customDeleteFn) {
        const context = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__getCurrentAuthContext$3e$__["getCurrentAuthContext"])();
        let entityToDelete = null;
        try {
            entityToDelete = (await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findMany({
                model,
                where,
                limit: 1
            }))[0] || null;
        } catch (error) {}
        if (entityToDelete) for (const hook of hooks || []){
            const toRun = hook[model]?.delete?.before;
            if (toRun) {
                if (await toRun(entityToDelete, context) === false) return null;
            }
        }
        const customDeleted = customDeleteFn ? await customDeleteFn.fn(where) : null;
        const deleted = !customDeleteFn || customDeleteFn.executeMainFn ? await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).delete({
            model,
            where
        }) : customDeleted;
        if (entityToDelete) for (const hook of hooks || []){
            const toRun = hook[model]?.delete?.after;
            if (toRun) await toRun(entityToDelete, context);
        }
        return deleted;
    }
    async function deleteManyWithHooks(where, model, customDeleteFn) {
        const context = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__getCurrentAuthContext$3e$__["getCurrentAuthContext"])();
        let entitiesToDelete = [];
        try {
            entitiesToDelete = await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findMany({
                model,
                where
            });
        } catch (error) {}
        for (const entity of entitiesToDelete)for (const hook of hooks || []){
            const toRun = hook[model]?.delete?.before;
            if (toRun) {
                if (await toRun(entity, context) === false) return null;
            }
        }
        const customDeleted = customDeleteFn ? await customDeleteFn.fn(where) : null;
        const deleted = !customDeleteFn || customDeleteFn.executeMainFn ? await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).deleteMany({
            model,
            where
        }) : customDeleted;
        for (const entity of entitiesToDelete)for (const hook of hooks || []){
            const toRun = hook[model]?.delete?.after;
            if (toRun) await toRun(entity, context);
        }
        return deleted;
    }
    return {
        createWithHooks,
        updateWithHooks,
        updateManyWithHooks,
        deleteWithHooks,
        deleteManyWithHooks
    };
}
//#endregion
//#region src/db/internal-adapter.ts
const createInternalAdapter = (adapter, ctx)=>{
    const logger$1 = ctx.logger;
    const options = ctx.options;
    const secondaryStorage = options.secondaryStorage;
    const sessionExpiration = options.session?.expiresIn || 3600 * 24 * 7;
    const { createWithHooks, updateWithHooks, updateManyWithHooks, deleteWithHooks, deleteManyWithHooks } = getWithHooks(adapter, ctx);
    async function refreshUserSessions(user) {
        if (!secondaryStorage) return;
        const listRaw = await secondaryStorage.get(`active-sessions-${user.id}`);
        if (!listRaw) return;
        const now = Date.now();
        const validSessions = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(listRaw) || []).filter((s)=>s.expiresAt > now);
        await Promise.all(validSessions.map(async ({ token })=>{
            const cached = await secondaryStorage.get(token);
            if (!cached) return;
            const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(cached);
            if (!parsed) return;
            const sessionTTL = Math.max(Math.floor(new Date(parsed.session.expiresAt).getTime() - now) / 1e3, 0);
            await secondaryStorage.set(token, JSON.stringify({
                session: parsed.session,
                user
            }), Math.floor(sessionTTL));
        }));
    }
    return {
        createOAuthUser: async (user, account)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__runWithTransaction$3e$__["runWithTransaction"])(adapter, async ()=>{
                const createdUser = await createWithHooks({
                    createdAt: /* @__PURE__ */ new Date(),
                    updatedAt: /* @__PURE__ */ new Date(),
                    ...user
                }, "user", void 0);
                return {
                    user: createdUser,
                    account: await createWithHooks({
                        ...account,
                        userId: createdUser.id,
                        createdAt: /* @__PURE__ */ new Date(),
                        updatedAt: /* @__PURE__ */ new Date()
                    }, "account", void 0)
                };
            });
        },
        createUser: async (user)=>{
            return await createWithHooks({
                createdAt: /* @__PURE__ */ new Date(),
                updatedAt: /* @__PURE__ */ new Date(),
                ...user,
                email: user.email?.toLowerCase()
            }, "user", void 0);
        },
        createAccount: async (account)=>{
            return await createWithHooks({
                createdAt: /* @__PURE__ */ new Date(),
                updatedAt: /* @__PURE__ */ new Date(),
                ...account
            }, "account", void 0);
        },
        listSessions: async (userId)=>{
            if (secondaryStorage) {
                const currentList = await secondaryStorage.get(`active-sessions-${userId}`);
                if (!currentList) return [];
                const list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(currentList) || [];
                const now = Date.now();
                const validSessions = list.filter((s)=>s.expiresAt > now);
                const sessions = [];
                for (const session of validSessions){
                    const sessionStringified = await secondaryStorage.get(session.token);
                    if (sessionStringified) {
                        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(sessionStringified);
                        if (!s) return [];
                        const parsedSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["s"])(ctx.options, {
                            ...s.session,
                            expiresAt: new Date(s.session.expiresAt)
                        });
                        sessions.push(parsedSession);
                    }
                }
                return sessions;
            }
            return await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findMany({
                model: "session",
                where: [
                    {
                        field: "userId",
                        value: userId
                    }
                ]
            });
        },
        listUsers: async (limit, offset, sortBy, where)=>{
            return await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findMany({
                model: "user",
                limit,
                offset,
                sortBy,
                where
            });
        },
        countTotalUsers: async (where)=>{
            const total = await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).count({
                model: "user",
                where
            });
            if (typeof total === "string") return parseInt(total);
            return total;
        },
        deleteUser: async (userId)=>{
            if (secondaryStorage) await secondaryStorage.delete(`active-sessions-${userId}`);
            if (!secondaryStorage || options.session?.storeSessionInDatabase) await deleteManyWithHooks([
                {
                    field: "userId",
                    value: userId
                }
            ], "session", void 0);
            await deleteManyWithHooks([
                {
                    field: "userId",
                    value: userId
                }
            ], "account", void 0);
            await deleteWithHooks([
                {
                    field: "id",
                    value: userId
                }
            ], "user", void 0);
        },
        createSession: async (userId, dontRememberMe, override, overrideAll)=>{
            const ctx$1 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__getCurrentAuthContext$3e$__["getCurrentAuthContext"])();
            const headers = ctx$1.headers || ctx$1.request?.headers;
            const { id: _, ...rest } = override || {};
            const data = {
                ipAddress: ctx$1.request || ctx$1.headers ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$request$2d$ip$2d$RYTz2Uba$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(ctx$1.request || ctx$1.headers, ctx$1.context.options) || "" : "",
                userAgent: headers?.get("user-agent") || "",
                ...rest,
                expiresAt: dontRememberMe ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u"])(3600 * 24, "sec") : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u"])(sessionExpiration, "sec"),
                userId,
                token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2d$DBbaShi0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(32),
                createdAt: /* @__PURE__ */ new Date(),
                updatedAt: /* @__PURE__ */ new Date(),
                ...overrideAll ? rest : {}
            };
            return await createWithHooks(data, "session", secondaryStorage ? {
                fn: async (sessionData)=>{
                    /**
					* store the session token for the user
					* so we can retrieve it later for listing sessions
					*/ const currentList = await secondaryStorage.get(`active-sessions-${userId}`);
                    let list = [];
                    const now = Date.now();
                    if (currentList) {
                        list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(currentList) || [];
                        list = list.filter((session)=>session.expiresAt > now);
                    }
                    const sorted = list.sort((a, b)=>a.expiresAt - b.expiresAt);
                    let furthestSessionExp = sorted.at(-1)?.expiresAt;
                    sorted.push({
                        token: data.token,
                        expiresAt: data.expiresAt.getTime()
                    });
                    if (!furthestSessionExp || furthestSessionExp < data.expiresAt.getTime()) furthestSessionExp = data.expiresAt.getTime();
                    const furthestSessionTTL = Math.max(Math.floor((furthestSessionExp - now) / 1e3), 0);
                    if (furthestSessionTTL > 0) await secondaryStorage.set(`active-sessions-${userId}`, JSON.stringify(sorted), furthestSessionTTL);
                    const user = await adapter.findOne({
                        model: "user",
                        where: [
                            {
                                field: "id",
                                value: userId
                            }
                        ]
                    });
                    const sessionTTL = Math.max(Math.floor((data.expiresAt.getTime() - now) / 1e3), 0);
                    if (sessionTTL > 0) await secondaryStorage.set(data.token, JSON.stringify({
                        session: sessionData,
                        user
                    }), sessionTTL);
                    return sessionData;
                },
                executeMainFn: options.session?.storeSessionInDatabase
            } : void 0);
        },
        findSession: async (token)=>{
            if (secondaryStorage) {
                const sessionStringified = await secondaryStorage.get(token);
                if (!sessionStringified && !options.session?.storeSessionInDatabase) return null;
                if (sessionStringified) {
                    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(sessionStringified);
                    if (!s) return null;
                    return {
                        session: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["s"])(ctx.options, {
                            ...s.session,
                            expiresAt: new Date(s.session.expiresAt),
                            createdAt: new Date(s.session.createdAt),
                            updatedAt: new Date(s.session.updatedAt)
                        }),
                        user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"])(ctx.options, {
                            ...s.user,
                            createdAt: new Date(s.user.createdAt),
                            updatedAt: new Date(s.user.updatedAt)
                        })
                    };
                }
            }
            const result = await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findOne({
                model: "session",
                where: [
                    {
                        value: token,
                        field: "token"
                    }
                ],
                join: {
                    user: true
                }
            });
            if (!result) return null;
            const { user, ...session } = result;
            if (!user) return null;
            return {
                session: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["s"])(ctx.options, session),
                user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"])(ctx.options, user)
            };
        },
        findSessions: async (sessionTokens)=>{
            if (secondaryStorage) {
                const sessions$1 = [];
                for (const sessionToken of sessionTokens){
                    const sessionStringified = await secondaryStorage.get(sessionToken);
                    if (sessionStringified) {
                        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(sessionStringified);
                        if (!s) return [];
                        const session = {
                            session: {
                                ...s.session,
                                expiresAt: new Date(s.session.expiresAt)
                            },
                            user: {
                                ...s.user,
                                createdAt: new Date(s.user.createdAt),
                                updatedAt: new Date(s.user.updatedAt)
                            }
                        };
                        sessions$1.push(session);
                    }
                }
                return sessions$1;
            }
            const sessions = await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findMany({
                model: "session",
                where: [
                    {
                        field: "token",
                        value: sessionTokens,
                        operator: "in"
                    }
                ],
                join: {
                    user: true
                }
            });
            if (!sessions.length) return [];
            if (sessions.some((session)=>!session.user)) return [];
            return sessions.map((_session)=>{
                const { user, ...session } = _session;
                return {
                    session,
                    user
                };
            });
        },
        updateSession: async (sessionToken, session)=>{
            return await updateWithHooks(session, [
                {
                    field: "token",
                    value: sessionToken
                }
            ], "session", secondaryStorage ? {
                async fn (data) {
                    const currentSession = await secondaryStorage.get(sessionToken);
                    let updatedSession = null;
                    if (currentSession) {
                        const parsedSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(currentSession);
                        if (!parsedSession) return null;
                        updatedSession = {
                            ...parsedSession.session,
                            ...data
                        };
                        return updatedSession;
                    } else return null;
                },
                executeMainFn: options.session?.storeSessionInDatabase
            } : void 0);
        },
        deleteSession: async (token)=>{
            if (secondaryStorage) {
                const data = await secondaryStorage.get(token);
                if (data) {
                    const { session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(data) ?? {};
                    if (!session) {
                        logger$1.error("Session not found in secondary storage");
                        return;
                    }
                    const userId = session.userId;
                    const currentList = await secondaryStorage.get(`active-sessions-${userId}`);
                    if (currentList) {
                        let list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(currentList) || [];
                        const now = Date.now();
                        const filtered = list.filter((session$1)=>session$1.expiresAt > now && session$1.token !== token);
                        const furthestSessionExp = filtered.sort((a, b)=>a.expiresAt - b.expiresAt).at(-1)?.expiresAt;
                        if (filtered.length > 0 && furthestSessionExp && furthestSessionExp > Date.now()) await secondaryStorage.set(`active-sessions-${userId}`, JSON.stringify(filtered), Math.floor((furthestSessionExp - now) / 1e3));
                        else await secondaryStorage.delete(`active-sessions-${userId}`);
                    } else logger$1.error("Active sessions list not found in secondary storage");
                }
                await secondaryStorage.delete(token);
                if (!options.session?.storeSessionInDatabase || ctx.options.session?.preserveSessionInDatabase) return;
            }
            await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).delete({
                model: "session",
                where: [
                    {
                        field: "token",
                        value: token
                    }
                ]
            });
        },
        deleteAccounts: async (userId)=>{
            await deleteManyWithHooks([
                {
                    field: "userId",
                    value: userId
                }
            ], "account", void 0);
        },
        deleteAccount: async (accountId)=>{
            await deleteWithHooks([
                {
                    field: "id",
                    value: accountId
                }
            ], "account", void 0);
        },
        deleteSessions: async (userIdOrSessionTokens)=>{
            if (secondaryStorage) {
                if (typeof userIdOrSessionTokens === "string") {
                    const activeSession = await secondaryStorage.get(`active-sessions-${userIdOrSessionTokens}`);
                    const sessions = activeSession ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(activeSession) : [];
                    if (!sessions) return;
                    for (const session of sessions)await secondaryStorage.delete(session.token);
                } else for (const sessionToken of userIdOrSessionTokens)if (await secondaryStorage.get(sessionToken)) await secondaryStorage.delete(sessionToken);
                if (!options.session?.storeSessionInDatabase || ctx.options.session?.preserveSessionInDatabase) return;
            }
            await deleteManyWithHooks([
                {
                    field: Array.isArray(userIdOrSessionTokens) ? "token" : "userId",
                    value: userIdOrSessionTokens,
                    operator: Array.isArray(userIdOrSessionTokens) ? "in" : void 0
                }
            ], "session", void 0);
        },
        findOAuthUser: async (email, accountId, providerId)=>{
            const account = await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findMany({
                model: "account",
                where: [
                    {
                        value: accountId,
                        field: "accountId"
                    }
                ],
                join: {
                    user: true
                }
            }).then((accounts)=>{
                return accounts.find((a)=>a.providerId === providerId);
            });
            if (account) if (account.user) return {
                user: account.user,
                accounts: [
                    account
                ]
            };
            else {
                const user = await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findOne({
                    model: "user",
                    where: [
                        {
                            value: email.toLowerCase(),
                            field: "email"
                        }
                    ]
                });
                if (user) return {
                    user,
                    accounts: [
                        account
                    ]
                };
                return null;
            }
            else {
                const user = await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findOne({
                    model: "user",
                    where: [
                        {
                            value: email.toLowerCase(),
                            field: "email"
                        }
                    ]
                });
                if (user) return {
                    user,
                    accounts: await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findMany({
                        model: "account",
                        where: [
                            {
                                value: user.id,
                                field: "userId"
                            }
                        ]
                    }) || []
                };
                else return null;
            }
        },
        findUserByEmail: async (email, options$1)=>{
            const result = await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findOne({
                model: "user",
                where: [
                    {
                        value: email.toLowerCase(),
                        field: "email"
                    }
                ],
                join: {
                    ...options$1?.includeAccounts ? {
                        account: true
                    } : {}
                }
            });
            if (!result) return null;
            const { account: accounts, ...user } = result;
            return {
                user,
                accounts: accounts ?? []
            };
        },
        findUserById: async (userId)=>{
            return await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findOne({
                model: "user",
                where: [
                    {
                        field: "id",
                        value: userId
                    }
                ]
            });
        },
        linkAccount: async (account)=>{
            return await createWithHooks({
                createdAt: /* @__PURE__ */ new Date(),
                updatedAt: /* @__PURE__ */ new Date(),
                ...account
            }, "account", void 0);
        },
        updateUser: async (userId, data)=>{
            const user = await updateWithHooks(data, [
                {
                    field: "id",
                    value: userId
                }
            ], "user", void 0);
            await refreshUserSessions(user);
            await refreshUserSessions(user);
            return user;
        },
        updateUserByEmail: async (email, data)=>{
            const user = await updateWithHooks(data, [
                {
                    field: "email",
                    value: email.toLowerCase()
                }
            ], "user", void 0);
            await refreshUserSessions(user);
            await refreshUserSessions(user);
            return user;
        },
        updatePassword: async (userId, password)=>{
            await updateManyWithHooks({
                password
            }, [
                {
                    field: "userId",
                    value: userId
                },
                {
                    field: "providerId",
                    value: "credential"
                }
            ], "account", void 0);
        },
        findAccounts: async (userId)=>{
            return await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findMany({
                model: "account",
                where: [
                    {
                        field: "userId",
                        value: userId
                    }
                ]
            });
        },
        findAccount: async (accountId)=>{
            return await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findOne({
                model: "account",
                where: [
                    {
                        field: "accountId",
                        value: accountId
                    }
                ]
            });
        },
        findAccountByProviderId: async (accountId, providerId)=>{
            return await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findOne({
                model: "account",
                where: [
                    {
                        field: "accountId",
                        value: accountId
                    },
                    {
                        field: "providerId",
                        value: providerId
                    }
                ]
            });
        },
        findAccountByUserId: async (userId)=>{
            return await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findMany({
                model: "account",
                where: [
                    {
                        field: "userId",
                        value: userId
                    }
                ]
            });
        },
        updateAccount: async (id, data)=>{
            return await updateWithHooks(data, [
                {
                    field: "id",
                    value: id
                }
            ], "account", void 0);
        },
        createVerificationValue: async (data)=>{
            return await createWithHooks({
                createdAt: /* @__PURE__ */ new Date(),
                updatedAt: /* @__PURE__ */ new Date(),
                ...data
            }, "verification", void 0);
        },
        findVerificationValue: async (identifier)=>{
            const verification = await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).findMany({
                model: "verification",
                where: [
                    {
                        field: "identifier",
                        value: identifier
                    }
                ],
                sortBy: {
                    field: "createdAt",
                    direction: "desc"
                },
                limit: 1
            });
            if (!options.verification?.disableCleanup) await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).deleteMany({
                model: "verification",
                where: [
                    {
                        field: "expiresAt",
                        value: /* @__PURE__ */ new Date(),
                        operator: "lt"
                    }
                ]
            });
            return verification[0];
        },
        deleteVerificationValue: async (id)=>{
            await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).delete({
                model: "verification",
                where: [
                    {
                        field: "id",
                        value: id
                    }
                ]
            });
        },
        deleteVerificationByIdentifier: async (identifier)=>{
            await (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__["getCurrentAdapter"])(adapter)).delete({
                model: "verification",
                where: [
                    {
                        field: "identifier",
                        value: identifier
                    }
                ]
            });
        },
        updateVerificationValue: async (id, data)=>{
            return await updateWithHooks(data, [
                {
                    field: "id",
                    value: id
                }
            ], "verification", void 0);
        }
    };
};
//#endregion
//#region src/db/to-zod.ts
function toZodSchema({ fields, isClientSide }) {
    const zodFields = Object.keys(fields).reduce((acc, key)=>{
        const field = fields[key];
        if (!field) return acc;
        if (isClientSide && field.input === false) return acc;
        let schema;
        if (field.type === "json") schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.json ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.json() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.any();
        else if (field.type === "string[]" || field.type === "number[]") schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.array(field.type === "string[]" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.string() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.number());
        else if (Array.isArray(field.type)) schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.any();
        else schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[field.type]();
        if (field?.required === false) schema = schema.optional();
        if (field?.returned === false) return acc;
        return {
            ...acc,
            [key]: schema
        };
    }, {});
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.object(zodFields);
}
//#endregion
//#region src/db/get-schema.ts
function getSchema(config) {
    const tables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$model$2d$name$2d$D4DUV7S2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"])(config);
    let schema = {};
    for(const key in tables){
        const table = tables[key];
        const fields = table.fields;
        let actualFields = {};
        Object.entries(fields).forEach(([key$1, field])=>{
            actualFields[field.fieldName || key$1] = field;
            if (field.references) {
                const refTable = tables[field.references.model];
                if (refTable) actualFields[field.fieldName || key$1].references = {
                    ...field.references,
                    model: refTable.modelName,
                    field: field.references.field
                };
            }
        });
        if (schema[table.modelName]) {
            schema[table.modelName].fields = {
                ...schema[table.modelName].fields,
                ...actualFields
            };
            continue;
        }
        schema[table.modelName] = {
            fields: actualFields,
            order: table.order || Infinity
        };
    }
    return schema;
}
//#endregion
//#region src/db/get-migration.ts
const map = {
    postgres: {
        string: [
            "character varying",
            "varchar",
            "text",
            "uuid"
        ],
        number: [
            "int4",
            "integer",
            "bigint",
            "smallint",
            "numeric",
            "real",
            "double precision"
        ],
        boolean: [
            "bool",
            "boolean"
        ],
        date: [
            "timestamptz",
            "timestamp",
            "date"
        ],
        json: [
            "json",
            "jsonb"
        ]
    },
    mysql: {
        string: [
            "varchar",
            "text",
            "uuid"
        ],
        number: [
            "integer",
            "int",
            "bigint",
            "smallint",
            "decimal",
            "float",
            "double"
        ],
        boolean: [
            "boolean",
            "tinyint"
        ],
        date: [
            "timestamp",
            "datetime",
            "date"
        ],
        json: [
            "json"
        ]
    },
    sqlite: {
        string: [
            "TEXT"
        ],
        number: [
            "INTEGER",
            "REAL"
        ],
        boolean: [
            "INTEGER",
            "BOOLEAN"
        ],
        date: [
            "DATE",
            "INTEGER"
        ],
        json: [
            "TEXT"
        ]
    },
    mssql: {
        string: [
            "varchar",
            "nvarchar",
            "uniqueidentifier"
        ],
        number: [
            "int",
            "bigint",
            "smallint",
            "decimal",
            "float",
            "double"
        ],
        boolean: [
            "bit",
            "smallint"
        ],
        date: [
            "datetime2",
            "date",
            "datetime"
        ],
        json: [
            "varchar",
            "nvarchar"
        ]
    }
};
function matchType(columnDataType, fieldType, dbType) {
    function normalize(type) {
        return type.toLowerCase().split("(")[0].trim();
    }
    if (fieldType === "string[]" || fieldType === "number[]") return columnDataType.toLowerCase().includes("json");
    const types = map[dbType];
    return (Array.isArray(fieldType) ? types["string"].map((t)=>t.toLowerCase()) : types[fieldType].map((t)=>t.toLowerCase())).includes(normalize(columnDataType));
}
/**
* Get the current PostgreSQL schema (search_path) for the database connection
* Returns the first schema in the search_path, defaulting to 'public' if not found
*/ async function getPostgresSchema(db) {
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$raw$2d$builder$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`SHOW search_path`.execute(db);
        if (result.rows[0]?.search_path) return result.rows[0].search_path.split(",").map((s)=>s.trim()).map((s)=>s.replace(/^["']|["']$/g, "")).filter((s)=>!s.startsWith("$"))[0] || "public";
    } catch (error) {}
    return "public";
}
async function getMigrations(config) {
    const betterAuthSchema = getSchema(config);
    const logger$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__createLogger$3e$__["createLogger"])(config.logger);
    let { kysely: db, databaseType: dbType } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$dialect$2d$BvcuosDD$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(config);
    if (!dbType) {
        logger$1.warn("Could not determine database type, defaulting to sqlite. Please provide a type in the database options to avoid this.");
        dbType = "sqlite";
    }
    if (!db) {
        logger$1.error("Only kysely adapter is supported for migrations. You can use `generate` command to generate the schema, if you're using a different adapter.");
        process.exit(1);
    }
    let currentSchema = "public";
    if (dbType === "postgres") {
        currentSchema = await getPostgresSchema(db);
        logger$1.debug(`PostgreSQL migration: Using schema '${currentSchema}' (from search_path)`);
        try {
            if (!(await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$raw$2d$builder$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
				SELECT schema_name 
				FROM information_schema.schemata 
				WHERE schema_name = ${currentSchema}
			`.execute(db)).rows[0]) logger$1.warn(`Schema '${currentSchema}' does not exist. Tables will be inspected from available schemas. Consider creating the schema first or checking your database configuration.`);
        } catch (error) {
            logger$1.debug(`Could not verify schema existence: ${error instanceof Error ? error.message : String(error)}`);
        }
    }
    const allTableMetadata = await db.introspection.getTables();
    let tableMetadata = allTableMetadata;
    if (dbType === "postgres") try {
        const tablesInSchema = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$raw$2d$builder$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
				SELECT table_name 
				FROM information_schema.tables 
				WHERE table_schema = ${currentSchema}
				AND table_type = 'BASE TABLE'
			`.execute(db);
        const tableNamesInSchema = new Set(tablesInSchema.rows.map((row)=>row.table_name));
        tableMetadata = allTableMetadata.filter((table)=>table.schema === currentSchema && tableNamesInSchema.has(table.name));
        logger$1.debug(`Found ${tableMetadata.length} table(s) in schema '${currentSchema}': ${tableMetadata.map((t)=>t.name).join(", ") || "(none)"}`);
    } catch (error) {
        logger$1.warn(`Could not filter tables by schema. Using all discovered tables. Error: ${error instanceof Error ? error.message : String(error)}`);
    }
    const toBeCreated = [];
    const toBeAdded = [];
    for (const [key, value] of Object.entries(betterAuthSchema)){
        const table = tableMetadata.find((t)=>t.name === key);
        if (!table) {
            const tIndex = toBeCreated.findIndex((t)=>t.table === key);
            const tableData = {
                table: key,
                fields: value.fields,
                order: value.order || Infinity
            };
            const insertIndex = toBeCreated.findIndex((t)=>(t.order || Infinity) > tableData.order);
            if (insertIndex === -1) if (tIndex === -1) toBeCreated.push(tableData);
            else toBeCreated[tIndex].fields = {
                ...toBeCreated[tIndex].fields,
                ...value.fields
            };
            else toBeCreated.splice(insertIndex, 0, tableData);
            continue;
        }
        let toBeAddedFields = {};
        for (const [fieldName, field] of Object.entries(value.fields)){
            const column = table.columns.find((c)=>c.name === fieldName);
            if (!column) {
                toBeAddedFields[fieldName] = field;
                continue;
            }
            if (matchType(column.dataType, field.type, dbType)) continue;
            else logger$1.warn(`Field ${fieldName} in table ${key} has a different type in the database. Expected ${field.type} but got ${column.dataType}.`);
        }
        if (Object.keys(toBeAddedFields).length > 0) toBeAdded.push({
            table: key,
            fields: toBeAddedFields,
            order: value.order || Infinity
        });
    }
    const migrations = [];
    const useUUIDs = config.advanced?.database?.generateId === "uuid";
    const useNumberId = config.advanced?.database?.useNumberId || config.advanced?.database?.generateId === "serial";
    function getType(field, fieldName) {
        const type = field.type;
        const typeMap = {
            string: {
                sqlite: "text",
                postgres: "text",
                mysql: field.unique ? "varchar(255)" : field.references ? "varchar(36)" : field.sortable ? "varchar(255)" : field.index ? "varchar(255)" : "text",
                mssql: field.unique || field.sortable ? "varchar(255)" : field.references ? "varchar(36)" : "varchar(8000)"
            },
            boolean: {
                sqlite: "integer",
                postgres: "boolean",
                mysql: "boolean",
                mssql: "smallint"
            },
            number: {
                sqlite: field.bigint ? "bigint" : "integer",
                postgres: field.bigint ? "bigint" : "integer",
                mysql: field.bigint ? "bigint" : "integer",
                mssql: field.bigint ? "bigint" : "integer"
            },
            date: {
                sqlite: "date",
                postgres: "timestamptz",
                mysql: "timestamp(3)",
                mssql: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$raw$2d$builder$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`datetime2(3)`
            },
            json: {
                sqlite: "text",
                postgres: "jsonb",
                mysql: "json",
                mssql: "varchar(8000)"
            },
            id: {
                postgres: useNumberId ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$raw$2d$builder$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`integer GENERATED BY DEFAULT AS IDENTITY` : useUUIDs ? "uuid" : "text",
                mysql: useNumberId ? "integer" : useUUIDs ? "varchar(36)" : "varchar(36)",
                mssql: useNumberId ? "integer" : useUUIDs ? "varchar(36)" : "varchar(36)",
                sqlite: useNumberId ? "integer" : "text"
            },
            foreignKeyId: {
                postgres: useNumberId ? "integer" : useUUIDs ? "uuid" : "text",
                mysql: useNumberId ? "integer" : useUUIDs ? "varchar(36)" : "varchar(36)",
                mssql: useNumberId ? "integer" : useUUIDs ? "varchar(36)" : "varchar(36)",
                sqlite: useNumberId ? "integer" : "text"
            }
        };
        if (fieldName === "id" || field.references?.field === "id") {
            if (fieldName === "id") return typeMap.id[dbType];
            return typeMap.foreignKeyId[dbType];
        }
        if (dbType === "sqlite" && (type === "string[]" || type === "number[]")) return "text";
        if (type === "string[]" || type === "number[]") return "jsonb";
        if (Array.isArray(type)) return "text";
        return typeMap[type][dbType || "sqlite"];
    }
    const getModelName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$model$2d$name$2d$D4DUV7S2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])({
        schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$model$2d$name$2d$D4DUV7S2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"])(config),
        usePlural: false
    });
    const getFieldName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$model$2d$name$2d$D4DUV7S2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])({
        schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$model$2d$name$2d$D4DUV7S2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"])(config),
        usePlural: false
    });
    function getReferencePath(model, field) {
        try {
            return `${getModelName(model)}.${getFieldName({
                model,
                field
            })}`;
        } catch  {
            return `${model}.${field}`;
        }
    }
    if (toBeAdded.length) for (const table of toBeAdded)for (const [fieldName, field] of Object.entries(table.fields)){
        const type = getType(field, fieldName);
        let builder = db.schema.alterTable(table.table);
        if (field.index) {
            const index = db.schema.alterTable(table.table).addIndex(`${table.table}_${fieldName}_idx`);
            migrations.push(index);
        }
        let built = builder.addColumn(fieldName, type, (col)=>{
            col = field.required !== false ? col.notNull() : col;
            if (field.references) col = col.references(getReferencePath(field.references.model, field.references.field)).onDelete(field.references.onDelete || "cascade");
            if (field.unique) col = col.unique();
            if (field.type === "date" && typeof field.defaultValue === "function" && (dbType === "postgres" || dbType === "mysql" || dbType === "mssql")) if (dbType === "mysql") col = col.defaultTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$raw$2d$builder$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`CURRENT_TIMESTAMP(3)`);
            else col = col.defaultTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$raw$2d$builder$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`CURRENT_TIMESTAMP`);
            return col;
        });
        migrations.push(built);
    }
    let toBeIndexed = [];
    if (config.advanced?.database?.useNumberId) logger$1.warn("`useNumberId` is deprecated. Please use `generateId` with `serial` instead.");
    if (toBeCreated.length) for (const table of toBeCreated){
        const idType = getType({
            type: useNumberId ? "number" : "string"
        }, "id");
        let dbT = db.schema.createTable(table.table).addColumn("id", idType, (col)=>{
            if (useNumberId) {
                if (dbType === "postgres") return col.primaryKey().notNull();
                else if (dbType === "sqlite") return col.primaryKey().notNull();
                else if (dbType === "mssql") return col.identity().primaryKey().notNull();
                return col.autoIncrement().primaryKey().notNull();
            }
            if (useUUIDs) {
                if (dbType === "postgres") return col.primaryKey().defaultTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$raw$2d$builder$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`pg_catalog.gen_random_uuid()`).notNull();
                return col.primaryKey().notNull();
            }
            return col.primaryKey().notNull();
        });
        for (const [fieldName, field] of Object.entries(table.fields)){
            const type = getType(field, fieldName);
            dbT = dbT.addColumn(fieldName, type, (col)=>{
                col = field.required !== false ? col.notNull() : col;
                if (field.references) col = col.references(getReferencePath(field.references.model, field.references.field)).onDelete(field.references.onDelete || "cascade");
                if (field.unique) col = col.unique();
                if (field.type === "date" && typeof field.defaultValue === "function" && (dbType === "postgres" || dbType === "mysql" || dbType === "mssql")) if (dbType === "mysql") col = col.defaultTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$raw$2d$builder$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`CURRENT_TIMESTAMP(3)`);
                else col = col.defaultTo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$kysely$40$0$2e$28$2e$8$2f$node_modules$2f$kysely$2f$dist$2f$esm$2f$raw$2d$builder$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`CURRENT_TIMESTAMP`);
                return col;
            });
            if (field.index) {
                let builder = db.schema.createIndex(`${table.table}_${fieldName}_${field.unique ? "uidx" : "idx"}`).on(table.table).columns([
                    fieldName
                ]);
                toBeIndexed.push(field.unique ? builder.unique() : builder);
            }
        }
        migrations.push(dbT);
    }
    if (toBeIndexed.length) for (const index of toBeIndexed)migrations.push(index);
    async function runMigrations() {
        for (const migration of migrations)await migration.execute();
    }
    async function compileMigrations() {
        return migrations.map((m)=>m.compile().sql).join(";\n\n") + ";";
    }
    return {
        toBeCreated,
        toBeAdded,
        runMigrations,
        compileMigrations
    };
}
;
}),
"[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/jwt-DzuIBp7t.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "i",
    ()=>verifyJWT,
    "n",
    ()=>symmetricDecodeJWT,
    "r",
    ()=>symmetricEncodeJWT,
    "t",
    ()=>signJWT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$hkdf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@2.0.1/node_modules/@noble/hashes/hkdf.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$sha2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@noble+hashes@2.0.1/node_modules/@noble/hashes/sha2.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$2$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$encrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.1.2/node_modules/jose/dist/webapi/jwt/encrypt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$2$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.1.2/node_modules/jose/dist/webapi/jwt/sign.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$2$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__base64url$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.1.2/node_modules/jose/dist/webapi/util/base64url.js [app-rsc] (ecmascript) <export * as base64url>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$2$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwk$2f$thumbprint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.1.2/node_modules/jose/dist/webapi/jwk/thumbprint.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$2$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$decrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.1.2/node_modules/jose/dist/webapi/jwt/decrypt.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$2$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.1.2/node_modules/jose/dist/webapi/jwt/verify.js [app-rsc] (ecmascript)");
;
;
;
//#region src/crypto/jwt.ts
async function signJWT(payload, secret, expiresIn = 3600) {
    return await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$2$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
        alg: "HS256"
    }).setIssuedAt().setExpirationTime(Math.floor(Date.now() / 1e3) + expiresIn).sign(new TextEncoder().encode(secret));
}
async function verifyJWT(token, secret) {
    try {
        return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$2$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jwtVerify"])(token, new TextEncoder().encode(secret))).payload;
    } catch (error) {
        return null;
    }
}
const info = new Uint8Array([
    66,
    101,
    116,
    116,
    101,
    114,
    65,
    117,
    116,
    104,
    46,
    106,
    115,
    32,
    71,
    101,
    110,
    101,
    114,
    97,
    116,
    101,
    100,
    32,
    69,
    110,
    99,
    114,
    121,
    112,
    116,
    105,
    111,
    110,
    32,
    75,
    101,
    121
]);
const now = ()=>Date.now() / 1e3 | 0;
const alg = "dir";
const enc = "A256CBC-HS512";
async function symmetricEncodeJWT(payload, secret, salt, expiresIn = 3600) {
    const encryptionSecret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$hkdf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hkdf"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$sha2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sha256"], new TextEncoder().encode(secret), new TextEncoder().encode(salt), info, 64);
    const thumbprint = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$2$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwk$2f$thumbprint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateJwkThumbprint"])({
        kty: "oct",
        k: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$2$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__base64url$3e$__["base64url"].encode(encryptionSecret)
    }, "sha256");
    return await new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$2$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$encrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EncryptJWT"](payload).setProtectedHeader({
        alg,
        enc,
        kid: thumbprint
    }).setIssuedAt().setExpirationTime(now() + expiresIn).setJti(crypto.randomUUID()).encrypt(encryptionSecret);
}
async function symmetricDecodeJWT(token, secret, salt) {
    if (!token) return null;
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$2$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$decrypt$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jwtDecrypt"])(token, async ({ kid })=>{
            const encryptionSecret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$hkdf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hkdf"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$noble$2b$hashes$40$2$2e$0$2e$1$2f$node_modules$2f40$noble$2f$hashes$2f$sha2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sha256"], new TextEncoder().encode(secret), new TextEncoder().encode(salt), info, 64);
            if (kid === void 0) return encryptionSecret;
            if (kid === await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$2$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwk$2f$thumbprint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateJwkThumbprint"])({
                kty: "oct",
                k: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$2$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__base64url$3e$__["base64url"].encode(encryptionSecret)
            }, "sha256")) return encryptionSecret;
            throw new Error("no matching decryption secret");
        }, {
            clockTolerance: 15,
            keyManagementAlgorithms: [
                alg
            ],
            contentEncryptionAlgorithms: [
                enc,
                "A256GCM"
            ]
        });
        return payload;
    } catch (error) {
        return null;
    }
}
;
}),
"[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/misc-D8A8FGv2.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//#region src/utils/misc.ts
__turbopack_context__.s([
    "t",
    ()=>capitalizeFirstLetter
]);
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
;
}),
"[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/url-BLNRhCPO.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "i",
    ()=>getProtocol,
    "n",
    ()=>getHost,
    "r",
    ()=>getOrigin,
    "t",
    ()=>getBaseURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env-DwlNAN_D.mjs [app-rsc] (ecmascript) <export c as env>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/error/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/error-BhAKg8LX.mjs [app-rsc] (ecmascript) <export t as BetterAuthError>");
;
;
//#region src/utils/url.ts
function checkHasPath(url) {
    try {
        return (new URL(url).pathname.replace(/\/+$/, "") || "/") !== "/";
    } catch (error) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"](`Invalid base URL: ${url}. Please provide a valid base URL.`);
    }
}
function assertHasProtocol(url) {
    try {
        const parsedUrl = new URL(url);
        if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"](`Invalid base URL: ${url}. URL must include 'http://' or 'https://'`);
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"]) throw error;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"](`Invalid base URL: ${url}. Please provide a valid base URL.`, String(error));
    }
}
function withPath(url, path = "/api/auth") {
    assertHasProtocol(url);
    if (checkHasPath(url)) return url;
    const trimmedUrl = url.replace(/\/+$/, "");
    if (!path || path === "/") return trimmedUrl;
    path = path.startsWith("/") ? path : `/${path}`;
    return `${trimmedUrl}${path}`;
}
function getBaseURL(url, path, request, loadEnv, trustedProxyHeaders) {
    if (url) return withPath(url, path);
    if (loadEnv !== false) {
        const fromEnv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].BETTER_AUTH_URL || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].NEXT_PUBLIC_BETTER_AUTH_URL || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].PUBLIC_BETTER_AUTH_URL || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].NUXT_PUBLIC_BETTER_AUTH_URL || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].NUXT_PUBLIC_AUTH_URL || (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].BASE_URL !== "/" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].BASE_URL : void 0);
        if (fromEnv) return withPath(fromEnv, path);
    }
    const fromRequest = request?.headers.get("x-forwarded-host");
    const fromRequestProto = request?.headers.get("x-forwarded-proto");
    if (fromRequest && fromRequestProto && trustedProxyHeaders) return withPath(`${fromRequestProto}://${fromRequest}`, path);
    if (request) {
        const url$1 = getOrigin(request.url);
        if (!url$1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"]("Could not get origin from request. Please provide a valid base URL.");
        return withPath(url$1, path);
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
function getOrigin(url) {
    try {
        const parsedUrl = new URL(url);
        return parsedUrl.origin === "null" ? null : parsedUrl.origin;
    } catch (error) {
        return null;
    }
}
function getProtocol(url) {
    try {
        return new URL(url).protocol;
    } catch (error) {
        return null;
    }
}
function getHost(url) {
    try {
        return new URL(url).host;
    } catch (error) {
        return null;
    }
}
;
}),
"[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/cookies-D_dksn7B.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>getSessionCookie,
    "c",
    ()=>setSessionCookie,
    "d",
    ()=>createSessionStore,
    "f",
    ()=>getChunkedCookie,
    "i",
    ()=>getCookies,
    "l",
    ()=>parseSetCookieHeader,
    "m",
    ()=>ms,
    "n",
    ()=>deleteSessionCookie,
    "o",
    ()=>parseCookies,
    "p",
    ()=>getSessionQuerySchema,
    "r",
    ()=>getCookieCache,
    "s",
    ()=>setCookieCache,
    "t",
    ()=>createCookieGetter,
    "u",
    ()=>setCookieToHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$jwt$2d$DzuIBp7t$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/jwt-DzuIBp7t.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/schema-CSB7dlK0.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/json-_HMgPUVh.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$url$2d$BLNRhCPO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/url-BLNRhCPO.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env-DwlNAN_D.mjs [app-rsc] (ecmascript) <export c as env>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__f__as__isProduction$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env-DwlNAN_D.mjs [app-rsc] (ecmascript) <export f as isProduction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/error/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/error-BhAKg8LX.mjs [app-rsc] (ecmascript) <export t as BetterAuthError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.1.13/node_modules/zod/v4/classic/schemas.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.1.13/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/base64.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$binary$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/binary.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hmac.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
//#region ../../node_modules/.pnpm/ms@4.0.0-nightly.202508271359/node_modules/ms/dist/index.js
const s = 1e3;
const m = s * 60;
const h = m * 60;
const d = h * 24;
const w = d * 7;
const y = d * 365.25;
const mo = y / 12;
function ms(value, options) {
    if (typeof value === "string") return parse(value);
    else if (typeof value === "number") return format(value, options);
    throw new Error(`Value provided to ms() must be a string or number. value=${JSON.stringify(value)}`);
}
/**
* Parse the given string and return milliseconds.
*
* @param str - A string to parse to milliseconds
* @returns The parsed value in milliseconds, or `NaN` if the string can't be
* parsed
*/ function parse(str) {
    if (typeof str !== "string" || str.length === 0 || str.length > 100) throw new Error(`Value provided to ms.parse() must be a string with length between 1 and 99. value=${JSON.stringify(str)}`);
    const match = /^(?<value>-?\d*\.?\d+) *(?<unit>milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|months?|mo|years?|yrs?|y)?$/i.exec(str);
    if (!match?.groups) return NaN;
    const { value, unit = "ms" } = match.groups;
    const n = parseFloat(value);
    const matchUnit = unit.toLowerCase();
    /* istanbul ignore next - istanbul doesn't understand, but thankfully the TypeScript the exhaustiveness check in the default case keeps us type safe here */ switch(matchUnit){
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
            return n * y;
        case "months":
        case "month":
        case "mo":
            return n * mo;
        case "weeks":
        case "week":
        case "w":
            return n * w;
        case "days":
        case "day":
        case "d":
            return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
            return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
            return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
            return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
            return n;
        default:
            throw new Error(`Unknown unit "${matchUnit}" provided to ms.parse(). value=${JSON.stringify(str)}`);
    }
}
/**
* Short format for `ms`.
*/ function fmtShort(ms$1) {
    const msAbs = Math.abs(ms$1);
    if (msAbs >= y) return `${Math.round(ms$1 / y)}y`;
    if (msAbs >= mo) return `${Math.round(ms$1 / mo)}mo`;
    if (msAbs >= w) return `${Math.round(ms$1 / w)}w`;
    if (msAbs >= d) return `${Math.round(ms$1 / d)}d`;
    if (msAbs >= h) return `${Math.round(ms$1 / h)}h`;
    if (msAbs >= m) return `${Math.round(ms$1 / m)}m`;
    if (msAbs >= s) return `${Math.round(ms$1 / s)}s`;
    return `${ms$1}ms`;
}
/**
* Long format for `ms`.
*/ function fmtLong(ms$1) {
    const msAbs = Math.abs(ms$1);
    if (msAbs >= y) return plural(ms$1, msAbs, y, "year");
    if (msAbs >= mo) return plural(ms$1, msAbs, mo, "month");
    if (msAbs >= w) return plural(ms$1, msAbs, w, "week");
    if (msAbs >= d) return plural(ms$1, msAbs, d, "day");
    if (msAbs >= h) return plural(ms$1, msAbs, h, "hour");
    if (msAbs >= m) return plural(ms$1, msAbs, m, "minute");
    if (msAbs >= s) return plural(ms$1, msAbs, s, "second");
    return `${ms$1} ms`;
}
/**
* Format the given integer as a string.
*
* @param ms - milliseconds
* @param options - Options for the conversion
* @returns The formatted string
*/ function format(ms$1, options) {
    if (typeof ms$1 !== "number" || !Number.isFinite(ms$1)) throw new Error("Value provided to ms.format() must be of type number.");
    return options?.long ? fmtLong(ms$1) : fmtShort(ms$1);
}
/**
* Pluralization helper.
*/ function plural(ms$1, msAbs, n, name) {
    const isPlural = msAbs >= n * 1.5;
    return `${Math.round(ms$1 / n)} ${name}${isPlural ? "s" : ""}`;
}
//#endregion
//#region src/cookies/session-store.ts
const ALLOWED_COOKIE_SIZE = 4096;
const ESTIMATED_EMPTY_COOKIE_SIZE = 200;
const CHUNK_SIZE = ALLOWED_COOKIE_SIZE - ESTIMATED_EMPTY_COOKIE_SIZE;
/**
* Parse cookies from the request headers
*/ function parseCookiesFromContext(ctx) {
    const cookieHeader = ctx.headers?.get("cookie");
    if (!cookieHeader) return {};
    const cookies = {};
    const pairs = cookieHeader.split("; ");
    for (const pair of pairs){
        const [name, ...valueParts] = pair.split("=");
        if (name && valueParts.length > 0) cookies[name] = valueParts.join("=");
    }
    return cookies;
}
/**
* Extract the chunk index from a cookie name
*/ function getChunkIndex(cookieName) {
    const parts = cookieName.split(".");
    const lastPart = parts[parts.length - 1];
    const index = parseInt(lastPart || "0", 10);
    return isNaN(index) ? 0 : index;
}
/**
* Read all existing chunks from cookies
*/ function readExistingChunks(cookieName, ctx) {
    const chunks = {};
    const cookies = parseCookiesFromContext(ctx);
    for (const [name, value] of Object.entries(cookies))if (name.startsWith(cookieName)) chunks[name] = value;
    return chunks;
}
/**
* Get the full session data by joining all chunks
*/ function joinChunks(chunks) {
    return Object.keys(chunks).sort((a, b)=>{
        return getChunkIndex(a) - getChunkIndex(b);
    }).map((key)=>chunks[key]).join("");
}
/**
* Split a cookie value into chunks if needed
*/ function chunkCookie(cookie, chunks, logger$1) {
    const chunkCount = Math.ceil(cookie.value.length / CHUNK_SIZE);
    if (chunkCount === 1) {
        chunks[cookie.name] = cookie.value;
        return [
            cookie
        ];
    }
    const cookies = [];
    for(let i = 0; i < chunkCount; i++){
        const name = `${cookie.name}.${i}`;
        const start = i * CHUNK_SIZE;
        const value = cookie.value.substring(start, start + CHUNK_SIZE);
        cookies.push({
            ...cookie,
            name,
            value
        });
        chunks[name] = value;
    }
    logger$1.debug("CHUNKING_SESSION_COOKIE", {
        message: `Session cookie exceeds allowed ${ALLOWED_COOKIE_SIZE} bytes.`,
        emptyCookieSize: ESTIMATED_EMPTY_COOKIE_SIZE,
        valueSize: cookie.value.length,
        chunkCount,
        chunks: cookies.map((c)=>c.value.length + ESTIMATED_EMPTY_COOKIE_SIZE)
    });
    return cookies;
}
/**
* Get all cookies that should be cleaned (removed)
*/ function getCleanCookies(chunks, cookieOptions) {
    const cleanedChunks = {};
    for(const name in chunks)cleanedChunks[name] = {
        name,
        value: "",
        options: {
            ...cookieOptions,
            maxAge: 0
        }
    };
    return cleanedChunks;
}
/**
* Create a session store for handling cookie chunking.
* When session data exceeds 4KB, it automatically splits it into multiple cookies.
*
* Based on next-auth's SessionStore implementation.
* @see https://github.com/nextauthjs/next-auth/blob/27b2519b84b8eb9cf053775dea29d577d2aa0098/packages/next-auth/src/core/lib/cookie.ts
*/ function createSessionStore(cookieName, cookieOptions, ctx) {
    const chunks = readExistingChunks(cookieName, ctx);
    const logger$1 = ctx.context.logger;
    return {
        getValue () {
            return joinChunks(chunks);
        },
        hasChunks () {
            return Object.keys(chunks).length > 0;
        },
        chunk (value, options) {
            const cleanedChunks = getCleanCookies(chunks, cookieOptions);
            for(const name in chunks)delete chunks[name];
            const cookies = cleanedChunks;
            const chunked = chunkCookie({
                name: cookieName,
                value,
                options: {
                    ...cookieOptions,
                    ...options
                }
            }, chunks, logger$1);
            for (const chunk of chunked)cookies[chunk.name] = chunk;
            return Object.values(cookies);
        },
        clean () {
            const cleanedChunks = getCleanCookies(chunks, cookieOptions);
            for(const name in chunks)delete chunks[name];
            return Object.values(cleanedChunks);
        },
        setCookies (cookies) {
            for (const cookie of cookies)ctx.setCookie(cookie.name, cookie.value, cookie.options);
        }
    };
}
function getChunkedCookie(ctx, cookieName) {
    const value = ctx.getCookie(cookieName);
    if (value) return value;
    const chunks = [];
    const cookieHeader = ctx.headers?.get("cookie");
    if (!cookieHeader) return null;
    const cookies = {};
    const pairs = cookieHeader.split("; ");
    for (const pair of pairs){
        const [name, ...valueParts] = pair.split("=");
        if (name && valueParts.length > 0) cookies[name] = valueParts.join("=");
    }
    for (const [name, val] of Object.entries(cookies))if (name.startsWith(cookieName + ".")) {
        const indexStr = name.split(".").at(-1);
        const index = parseInt(indexStr || "0", 10);
        if (!isNaN(index)) chunks.push({
            index,
            value: val
        });
    }
    if (chunks.length > 0) {
        chunks.sort((a, b)=>a.index - b.index);
        return chunks.map((c)=>c.value).join("");
    }
    return null;
}
const getSessionQuerySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["optional"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
    disableCookieCache: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["coerce"].boolean().meta({
        description: "Disable cookie cache and fetch session from database"
    }).optional(),
    disableRefresh: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["coerce"].boolean().meta({
        description: "Disable session refresh. Useful for checking session status, without updating the session"
    }).optional()
}));
//#endregion
//#region src/cookies/cookie-utils.ts
function parseSetCookieHeader(setCookie) {
    const cookies = /* @__PURE__ */ new Map();
    setCookie.split(", ").forEach((cookieString)=>{
        const [nameValue, ...attributes] = cookieString.split(";").map((part)=>part.trim());
        const [name, ...valueParts] = (nameValue || "").split("=");
        const value = valueParts.join("=");
        if (!name || value === void 0) return;
        const attrObj = {
            value
        };
        attributes.forEach((attribute)=>{
            const [attrName, ...attrValueParts] = attribute.split("=");
            const attrValue = attrValueParts.join("=");
            const normalizedAttrName = attrName.trim().toLowerCase();
            switch(normalizedAttrName){
                case "max-age":
                    attrObj["max-age"] = attrValue ? parseInt(attrValue.trim(), 10) : void 0;
                    break;
                case "expires":
                    attrObj.expires = attrValue ? new Date(attrValue.trim()) : void 0;
                    break;
                case "domain":
                    attrObj.domain = attrValue ? attrValue.trim() : void 0;
                    break;
                case "path":
                    attrObj.path = attrValue ? attrValue.trim() : void 0;
                    break;
                case "secure":
                    attrObj.secure = true;
                    break;
                case "httponly":
                    attrObj.httponly = true;
                    break;
                case "samesite":
                    attrObj.samesite = attrValue ? attrValue.trim().toLowerCase() : void 0;
                    break;
                default:
                    attrObj[normalizedAttrName] = attrValue ? attrValue.trim() : true;
                    break;
            }
        });
        cookies.set(name, attrObj);
    });
    return cookies;
}
function setCookieToHeader(headers) {
    return (context)=>{
        const setCookieHeader = context.response.headers.get("set-cookie");
        if (!setCookieHeader) return;
        const cookieMap = /* @__PURE__ */ new Map();
        (headers.get("cookie") || "").split(";").forEach((cookie)=>{
            const [name, ...rest] = cookie.trim().split("=");
            if (name && rest.length > 0) cookieMap.set(name, rest.join("="));
        });
        setCookieHeader.split(",").forEach((header)=>{
            parseSetCookieHeader(header).forEach((value, name)=>{
                cookieMap.set(name, value.value);
            });
        });
        const updatedCookies = Array.from(cookieMap.entries()).map(([name, value])=>`${name}=${value}`).join("; ");
        headers.set("cookie", updatedCookies);
    };
}
//#endregion
//#region src/cookies/index.ts
function createCookieGetter(options) {
    const secureCookiePrefix = (options.advanced?.useSecureCookies !== void 0 ? options.advanced?.useSecureCookies : options.baseURL !== void 0 ? options.baseURL.startsWith("https://") ? true : false : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__f__as__isProduction$3e$__["isProduction"]) ? "__Secure-" : "";
    const crossSubdomainEnabled = !!options.advanced?.crossSubDomainCookies?.enabled;
    const domain = crossSubdomainEnabled ? options.advanced?.crossSubDomainCookies?.domain || (options.baseURL ? new URL(options.baseURL).hostname : void 0) : void 0;
    if (crossSubdomainEnabled && !domain) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"]("baseURL is required when crossSubdomainCookies are enabled");
    function createCookie(cookieName, overrideAttributes = {}) {
        const prefix = options.advanced?.cookiePrefix || "better-auth";
        const name = options.advanced?.cookies?.[cookieName]?.name || `${prefix}.${cookieName}`;
        const attributes = options.advanced?.cookies?.[cookieName]?.attributes;
        return {
            name: `${secureCookiePrefix}${name}`,
            attributes: {
                secure: !!secureCookiePrefix,
                sameSite: "lax",
                path: "/",
                httpOnly: true,
                ...crossSubdomainEnabled ? {
                    domain
                } : {},
                ...options.advanced?.defaultCookieAttributes,
                ...overrideAttributes,
                ...attributes
            }
        };
    }
    return createCookie;
}
function getCookies(options) {
    const createCookie = createCookieGetter(options);
    const sessionToken = createCookie("session_token", {
        maxAge: options.session?.expiresIn || ms("7d") / 1e3
    });
    const sessionData = createCookie("session_data", {
        maxAge: options.session?.cookieCache?.maxAge || 300
    });
    const accountData = createCookie("account_data", {
        maxAge: options.session?.cookieCache?.maxAge || 300
    });
    const dontRememberToken = createCookie("dont_remember");
    return {
        sessionToken: {
            name: sessionToken.name,
            options: sessionToken.attributes
        },
        sessionData: {
            name: sessionData.name,
            options: sessionData.attributes
        },
        dontRememberToken: {
            name: dontRememberToken.name,
            options: dontRememberToken.attributes
        },
        accountData: {
            name: accountData.name,
            options: accountData.attributes
        }
    };
}
async function setCookieCache(ctx, session, dontRememberMe) {
    if (ctx.context.options.session?.cookieCache?.enabled) {
        const filteredSession = Object.entries(session.session).reduce((acc, [key, value])=>{
            const fieldConfig = ctx.context.options.session?.additionalFields?.[key];
            if (!fieldConfig || fieldConfig.returned !== false) acc[key] = value;
            return acc;
        }, {});
        const filteredUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"])(ctx.context.options, session.user);
        const versionConfig = ctx.context.options.session?.cookieCache?.version;
        let version = "1";
        if (versionConfig) {
            if (typeof versionConfig === "string") version = versionConfig;
            else if (typeof versionConfig === "function") {
                const result = versionConfig(session.session, session.user);
                version = result instanceof Promise ? await result : result;
            }
        }
        const sessionData = {
            session: filteredSession,
            user: filteredUser,
            updatedAt: Date.now(),
            version
        };
        const options = {
            ...ctx.context.authCookies.sessionData.options,
            maxAge: dontRememberMe ? void 0 : ctx.context.authCookies.sessionData.options.maxAge
        };
        const expiresAtDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u"])(options.maxAge || 60, "sec").getTime();
        const strategy = ctx.context.options.session?.cookieCache?.strategy || "compact";
        let data;
        if (strategy === "jwe") data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$jwt$2d$DzuIBp7t$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(sessionData, ctx.context.secret, "better-auth-session", options.maxAge || 300);
        else if (strategy === "jwt") data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$jwt$2d$DzuIBp7t$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(sessionData, ctx.context.secret, options.maxAge || 300);
        else data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["base64Url"].encode(JSON.stringify({
            session: sessionData,
            expiresAt: expiresAtDate,
            signature: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHMAC"])("SHA-256", "base64urlnopad").sign(ctx.context.secret, JSON.stringify({
                ...sessionData,
                expiresAt: expiresAtDate
            }))
        }), {
            padding: false
        });
        if (data.length > 4093) {
            const sessionStore = createSessionStore(ctx.context.authCookies.sessionData.name, options, ctx);
            const cookies = sessionStore.chunk(data, options);
            sessionStore.setCookies(cookies);
        } else {
            const sessionStore = createSessionStore(ctx.context.authCookies.sessionData.name, options, ctx);
            if (sessionStore.hasChunks()) {
                const cleanCookies = sessionStore.clean();
                sessionStore.setCookies(cleanCookies);
            }
            ctx.setCookie(ctx.context.authCookies.sessionData.name, data, options);
        }
    }
}
async function setSessionCookie(ctx, session, dontRememberMe, overrides) {
    const dontRememberMeCookie = await ctx.getSignedCookie(ctx.context.authCookies.dontRememberToken.name, ctx.context.secret);
    dontRememberMe = dontRememberMe !== void 0 ? dontRememberMe : !!dontRememberMeCookie;
    const options = ctx.context.authCookies.sessionToken.options;
    const maxAge = dontRememberMe ? void 0 : ctx.context.sessionConfig.expiresIn;
    await ctx.setSignedCookie(ctx.context.authCookies.sessionToken.name, session.session.token, ctx.context.secret, {
        ...options,
        maxAge,
        ...overrides
    });
    if (dontRememberMe) await ctx.setSignedCookie(ctx.context.authCookies.dontRememberToken.name, "true", ctx.context.secret, ctx.context.authCookies.dontRememberToken.options);
    await setCookieCache(ctx, session, dontRememberMe);
    ctx.context.setNewSession(session);
    /**
	* If secondary storage is enabled, store the session data in the secondary storage
	* This is useful if the session got updated and we want to update the session data in the
	* secondary storage
	*/ if (ctx.context.options.secondaryStorage) await ctx.context.secondaryStorage?.set(session.session.token, JSON.stringify({
        user: session.user,
        session: session.session
    }), Math.floor((new Date(session.session.expiresAt).getTime() - Date.now()) / 1e3));
}
function deleteSessionCookie(ctx, skipDontRememberMe) {
    ctx.setCookie(ctx.context.authCookies.sessionToken.name, "", {
        ...ctx.context.authCookies.sessionToken.options,
        maxAge: 0
    });
    const sessionStore = createSessionStore(ctx.context.authCookies.sessionData.name, ctx.context.authCookies.sessionData.options, ctx);
    const cleanCookies = sessionStore.clean();
    sessionStore.setCookies(cleanCookies);
    if (!skipDontRememberMe) ctx.setCookie(ctx.context.authCookies.dontRememberToken.name, "", {
        ...ctx.context.authCookies.dontRememberToken.options,
        maxAge: 0
    });
}
function parseCookies(cookieHeader) {
    const cookies = cookieHeader.split("; ");
    const cookieMap = /* @__PURE__ */ new Map();
    cookies.forEach((cookie)=>{
        const [name, value] = cookie.split("=");
        cookieMap.set(name, value);
    });
    return cookieMap;
}
const getSessionCookie = (request, config)=>{
    if (config?.cookiePrefix) if (config.cookieName) config.cookiePrefix = `${config.cookiePrefix}-`;
    else config.cookiePrefix = `${config.cookiePrefix}.`;
    const headers = "headers" in request ? request.headers : request;
    const req = request instanceof Request ? request : void 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$url$2d$BLNRhCPO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(req?.url, config?.path, req);
    const cookies = headers.get("cookie");
    if (!cookies) return null;
    const { cookieName = "session_token", cookiePrefix = "better-auth." } = config || {};
    const name = `${cookiePrefix}${cookieName}`;
    const secureCookieName = `__Secure-${name}`;
    const parsedCookie = parseCookies(cookies);
    const sessionToken = parsedCookie.get(name) || parsedCookie.get(secureCookieName);
    if (sessionToken) return sessionToken;
    return null;
};
const getCookieCache = async (request, config)=>{
    const cookies = (request instanceof Headers ? request : request.headers).get("cookie");
    if (!cookies) return null;
    const { cookieName = "session_data", cookiePrefix = "better-auth" } = config || {};
    const name = config?.isSecure !== void 0 ? config.isSecure ? `__Secure-${cookiePrefix}.${cookieName}` : `${cookiePrefix}.${cookieName}` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__f__as__isProduction$3e$__["isProduction"] ? `__Secure-${cookiePrefix}.${cookieName}` : `${cookiePrefix}.${cookieName}`;
    const parsedCookie = parseCookies(cookies);
    let sessionData = parsedCookie.get(name);
    if (!sessionData) {
        const chunks = [];
        for (const [cookieName$1, value] of parsedCookie.entries())if (cookieName$1.startsWith(name + ".")) {
            const parts = cookieName$1.split(".");
            const indexStr = parts[parts.length - 1];
            const index = parseInt(indexStr || "0", 10);
            if (!isNaN(index)) chunks.push({
                index,
                value
            });
        }
        if (chunks.length > 0) {
            chunks.sort((a, b)=>a.index - b.index);
            sessionData = chunks.map((c)=>c.value).join("");
        }
    }
    if (sessionData) {
        const secret = config?.secret || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].BETTER_AUTH_SECRET;
        if (!secret) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"]("getCookieCache requires a secret to be provided. Either pass it as an option or set the BETTER_AUTH_SECRET environment variable");
        const strategy = config?.strategy || "compact";
        if (strategy === "jwe") {
            const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$jwt$2d$DzuIBp7t$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(sessionData, secret, "better-auth-session");
            if (payload && payload.session && payload.user) {
                if (config?.version) {
                    const cookieVersion = payload.version || "1";
                    let expectedVersion = "1";
                    if (typeof config.version === "string") expectedVersion = config.version;
                    else if (typeof config.version === "function") {
                        const result = config.version(payload.session, payload.user);
                        expectedVersion = result instanceof Promise ? await result : result;
                    }
                    if (cookieVersion !== expectedVersion) return null;
                }
                return payload;
            }
            return null;
        } else if (strategy === "jwt") {
            const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$jwt$2d$DzuIBp7t$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])(sessionData, secret);
            if (payload && payload.session && payload.user) {
                if (config?.version) {
                    const cookieVersion = payload.version || "1";
                    let expectedVersion = "1";
                    if (typeof config.version === "string") expectedVersion = config.version;
                    else if (typeof config.version === "function") {
                        const result = config.version(payload.session, payload.user);
                        expectedVersion = result instanceof Promise ? await result : result;
                    }
                    if (cookieVersion !== expectedVersion) return null;
                }
                return payload;
            }
            return null;
        } else {
            const sessionDataPayload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$binary$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["binary"].decode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["base64Url"].decode(sessionData)));
            if (!sessionDataPayload) return null;
            if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHMAC"])("SHA-256", "base64urlnopad").verify(secret, JSON.stringify({
                ...sessionDataPayload.session,
                expiresAt: sessionDataPayload.expiresAt
            }), sessionDataPayload.signature)) return null;
            if (config?.version && sessionDataPayload.session) {
                const cookieVersion = sessionDataPayload.session.version || "1";
                let expectedVersion = "1";
                if (typeof config.version === "string") expectedVersion = config.version;
                else if (typeof config.version === "function") {
                    const result = config.version(sessionDataPayload.session.session, sessionDataPayload.session.user);
                    expectedVersion = result instanceof Promise ? await result : result;
                }
                if (cookieVersion !== expectedVersion) return null;
            }
            return sessionDataPayload.session;
        }
    }
    return null;
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/session-CgfX4vv1.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>requestOnlySessionMiddleware,
    "c",
    ()=>revokeSessions,
    "i",
    ()=>listSessions,
    "l",
    ()=>sensitiveSessionMiddleware,
    "n",
    ()=>getSession,
    "o",
    ()=>revokeOtherSessions,
    "r",
    ()=>getSessionFromCtx,
    "s",
    ()=>revokeSession,
    "t",
    ()=>freshSessionMiddleware,
    "u",
    ()=>sessionMiddleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$jwt$2d$DzuIBp7t$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/jwt-DzuIBp7t.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/schema-CSB7dlK0.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/json-_HMgPUVh.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/cookies-D_dksn7B.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/error/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/error-BhAKg8LX.mjs [app-rsc] (ecmascript) <export n as BASE_ERROR_CODES>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.0/node_modules/better-call/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.1.13/node_modules/zod/v4/classic/schemas.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/api/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/base64.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$binary$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/binary.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+utils@0.3.0/node_modules/@better-auth/utils/dist/hmac.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
//#region src/api/routes/session.ts
const getSession = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/get-session", {
        method: "GET",
        operationId: "getSession",
        query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["p"],
        requireHeaders: true,
        metadata: {
            openapi: {
                operationId: "getSession",
                description: "Get the current session",
                responses: {
                    "200": {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        session: {
                                            $ref: "#/components/schemas/Session"
                                        },
                                        user: {
                                            $ref: "#/components/schemas/User"
                                        }
                                    },
                                    required: [
                                        "session",
                                        "user"
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        try {
            const sessionCookieToken = await ctx.getSignedCookie(ctx.context.authCookies.sessionToken.name, ctx.context.secret);
            if (!sessionCookieToken) return null;
            const sessionDataCookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["f"])(ctx, ctx.context.authCookies.sessionData.name);
            let sessionDataPayload = null;
            if (sessionDataCookie) {
                const strategy = ctx.context.options.session?.cookieCache?.strategy || "compact";
                if (strategy === "jwe") {
                    const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$jwt$2d$DzuIBp7t$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(sessionDataCookie, ctx.context.secret, "better-auth-session");
                    if (payload && payload.session && payload.user) sessionDataPayload = {
                        session: {
                            session: payload.session,
                            user: payload.user,
                            updatedAt: payload.updatedAt,
                            version: payload.version
                        },
                        expiresAt: payload.exp ? payload.exp * 1e3 : Date.now()
                    };
                    else {
                        const dataCookie = ctx.context.authCookies.sessionData.name;
                        ctx.setCookie(dataCookie, "", {
                            maxAge: 0
                        });
                        return ctx.json(null);
                    }
                } else if (strategy === "jwt") {
                    const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$jwt$2d$DzuIBp7t$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])(sessionDataCookie, ctx.context.secret);
                    if (payload && payload.session && payload.user) sessionDataPayload = {
                        session: {
                            session: payload.session,
                            user: payload.user,
                            updatedAt: payload.updatedAt,
                            version: payload.version
                        },
                        expiresAt: payload.exp ? payload.exp * 1e3 : Date.now()
                    };
                    else {
                        const dataCookie = ctx.context.authCookies.sessionData.name;
                        ctx.setCookie(dataCookie, "", {
                            maxAge: 0
                        });
                        return ctx.json(null);
                    }
                } else {
                    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$binary$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["binary"].decode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$base64$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["base64Url"].decode(sessionDataCookie)));
                    if (parsed) if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$utils$40$0$2e$3$2e$0$2f$node_modules$2f40$better$2d$auth$2f$utils$2f$dist$2f$hmac$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createHMAC"])("SHA-256", "base64urlnopad").verify(ctx.context.secret, JSON.stringify({
                        ...parsed.session,
                        expiresAt: parsed.expiresAt
                    }), parsed.signature)) sessionDataPayload = parsed;
                    else {
                        const dataCookie = ctx.context.authCookies.sessionData.name;
                        ctx.setCookie(dataCookie, "", {
                            maxAge: 0
                        });
                        return ctx.json(null);
                    }
                }
            }
            const dontRememberMe = await ctx.getSignedCookie(ctx.context.authCookies.dontRememberToken.name, ctx.context.secret);
            /**
		* If session data is present in the cookie, check if it should be used or refreshed
		*/ if (sessionDataPayload?.session && ctx.context.options.session?.cookieCache?.enabled && !ctx.query?.disableCookieCache) {
                const session$1 = sessionDataPayload.session;
                const versionConfig = ctx.context.options.session?.cookieCache?.version;
                let expectedVersion = "1";
                if (versionConfig) {
                    if (typeof versionConfig === "string") expectedVersion = versionConfig;
                    else if (typeof versionConfig === "function") {
                        const result = versionConfig(session$1.session, session$1.user);
                        expectedVersion = result instanceof Promise ? await result : result;
                    }
                }
                if ((session$1.version || "1") !== expectedVersion) {
                    const dataCookie = ctx.context.authCookies.sessionData.name;
                    ctx.setCookie(dataCookie, "", {
                        maxAge: 0
                    });
                } else if (sessionDataPayload.expiresAt < Date.now() || session$1.session.expiresAt < /* @__PURE__ */ new Date()) {
                    const dataCookie = ctx.context.authCookies.sessionData.name;
                    ctx.setCookie(dataCookie, "", {
                        maxAge: 0
                    });
                } else {
                    const cookieRefreshCache = ctx.context.sessionConfig.cookieRefreshCache;
                    if (cookieRefreshCache === false) {
                        ctx.context.session = session$1;
                        return ctx.json({
                            session: session$1.session,
                            user: session$1.user
                        });
                    }
                    if (sessionDataPayload.expiresAt - Date.now() < cookieRefreshCache.updateAge * 1e3) {
                        const newExpiresAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u"])(ctx.context.options.session?.cookieCache?.maxAge || 300, "sec");
                        const refreshedSession = {
                            session: {
                                ...session$1.session,
                                expiresAt: newExpiresAt
                            },
                            user: session$1.user,
                            updatedAt: Date.now()
                        };
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["s"])(ctx, refreshedSession, false);
                        const parsedRefreshedSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["s"])(ctx.context.options, {
                            ...refreshedSession.session,
                            expiresAt: new Date(refreshedSession.session.expiresAt),
                            createdAt: new Date(refreshedSession.session.createdAt),
                            updatedAt: new Date(refreshedSession.session.updatedAt)
                        });
                        const parsedRefreshedUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"])(ctx.context.options, {
                            ...refreshedSession.user,
                            createdAt: new Date(refreshedSession.user.createdAt),
                            updatedAt: new Date(refreshedSession.user.updatedAt)
                        });
                        ctx.context.session = {
                            session: parsedRefreshedSession,
                            user: parsedRefreshedUser
                        };
                        return ctx.json({
                            session: parsedRefreshedSession,
                            user: parsedRefreshedUser
                        });
                    }
                    const parsedSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["s"])(ctx.context.options, {
                        ...session$1.session,
                        expiresAt: new Date(session$1.session.expiresAt),
                        createdAt: new Date(session$1.session.createdAt),
                        updatedAt: new Date(session$1.session.updatedAt)
                    });
                    const parsedUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"])(ctx.context.options, {
                        ...session$1.user,
                        createdAt: new Date(session$1.user.createdAt),
                        updatedAt: new Date(session$1.user.updatedAt)
                    });
                    ctx.context.session = {
                        session: parsedSession,
                        user: parsedUser
                    };
                    return ctx.json({
                        session: parsedSession,
                        user: parsedUser
                    });
                }
            }
            const session = await ctx.context.internalAdapter.findSession(sessionCookieToken);
            ctx.context.session = session;
            if (!session || session.session.expiresAt < /* @__PURE__ */ new Date()) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(ctx);
                if (session) /**
			* if session expired clean up the session
			*/ await ctx.context.internalAdapter.deleteSession(session.session.token);
                return ctx.json(null);
            }
            /**
		* We don't need to update the session if the user doesn't want to be remembered
		* or if the session refresh is disabled
		*/ if (dontRememberMe || ctx.query?.disableRefresh) {
                const parsedSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["s"])(ctx.context.options, session.session);
                const parsedUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"])(ctx.context.options, session.user);
                return ctx.json({
                    session: parsedSession,
                    user: parsedUser
                });
            }
            const expiresIn = ctx.context.sessionConfig.expiresIn;
            const updateAge = ctx.context.sessionConfig.updateAge;
            if (session.session.expiresAt.valueOf() - expiresIn * 1e3 + updateAge * 1e3 <= Date.now() && (!ctx.query?.disableRefresh || !ctx.context.options.session?.disableSessionRefresh)) {
                const updatedSession = await ctx.context.internalAdapter.updateSession(session.session.token, {
                    expiresAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u"])(ctx.context.sessionConfig.expiresIn, "sec"),
                    updatedAt: /* @__PURE__ */ new Date()
                });
                if (!updatedSession) {
                    /**
				* Handle case where session update fails (e.g., concurrent deletion)
				*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(ctx);
                    return ctx.json(null, {
                        status: 401
                    });
                }
                const maxAge = (updatedSession.expiresAt.valueOf() - Date.now()) / 1e3;
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(ctx, {
                    session: updatedSession,
                    user: session.user
                }, false, {
                    maxAge
                });
                const parsedUpdatedSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["s"])(ctx.context.options, updatedSession);
                const parsedUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"])(ctx.context.options, session.user);
                return ctx.json({
                    session: parsedUpdatedSession,
                    user: parsedUser
                });
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["s"])(ctx, session, !!dontRememberMe);
            return ctx.json(session);
        } catch (error) {
            ctx.context.logger.error("INTERNAL_SERVER_ERROR", error);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].FAILED_TO_GET_SESSION
            });
        }
    });
const getSessionFromCtx = async (ctx, config)=>{
    if (ctx.context.session) return ctx.context.session;
    const session = await getSession()({
        ...ctx,
        asResponse: false,
        headers: ctx.headers,
        returnHeaders: false,
        returnStatus: false,
        query: {
            ...config,
            ...ctx.query
        }
    }).catch((e)=>{
        return null;
    });
    ctx.context.session = session;
    return session;
};
/**
* The middleware forces the endpoint to require a valid session.
*/ const sessionMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
    const session = await getSessionFromCtx(ctx);
    if (!session?.session) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED");
    return {
        session
    };
});
/**
* This middleware forces the endpoint to require a valid session and ignores cookie cache.
* This should be used for sensitive operations like password changes, account deletion, etc.
* to ensure that revoked sessions cannot be used even if they're still cached in cookies.
*/ const sensitiveSessionMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
    const session = await getSessionFromCtx(ctx, {
        disableCookieCache: true
    });
    if (!session?.session) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED");
    return {
        session
    };
});
/**
* This middleware allows you to call the endpoint on the client if session is valid.
* However, if called on the server, no session is required.
*/ const requestOnlySessionMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
    const session = await getSessionFromCtx(ctx);
    if (!session?.session && (ctx.request || ctx.headers)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED");
    return {
        session
    };
});
/**
* This middleware forces the endpoint to require a valid session,
* as well as making sure the session is fresh before proceeding.
*
* Session freshness check will be skipped if the session config's freshAge
* is set to 0
*/ const freshSessionMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
    const session = await getSessionFromCtx(ctx);
    if (!session?.session) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED");
    if (ctx.context.sessionConfig.freshAge === 0) return {
        session
    };
    const freshAge = ctx.context.sessionConfig.freshAge;
    const lastUpdated = new Date(session.session.updatedAt || session.session.createdAt).getTime();
    if (!(Date.now() - lastUpdated < freshAge * 1e3)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
        message: "Session is not fresh"
    });
    return {
        session
    };
});
/**
* user active sessions list
*/ const listSessions = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/list-sessions", {
        method: "GET",
        operationId: "listUserSessions",
        use: [
            sessionMiddleware
        ],
        requireHeaders: true,
        metadata: {
            openapi: {
                operationId: "listUserSessions",
                description: "List all active sessions for the user",
                responses: {
                    "200": {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/Session"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        try {
            const activeSessions = (await ctx.context.internalAdapter.listSessions(ctx.context.session.user.id)).filter((session)=>{
                return session.expiresAt > /* @__PURE__ */ new Date();
            });
            return ctx.json(activeSessions);
        } catch (e) {
            ctx.context.logger.error(e);
            throw ctx.error("INTERNAL_SERVER_ERROR");
        }
    });
/**
* revoke a single session
*/ const revokeSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/revoke-session", {
    method: "POST",
    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
        token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The token to revoke"
        })
    }),
    use: [
        sensitiveSessionMiddleware
    ],
    requireHeaders: true,
    metadata: {
        openapi: {
            description: "Revoke a single session",
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                token: {
                                    type: "string",
                                    description: "The token to revoke"
                                }
                            },
                            required: [
                                "token"
                            ]
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    status: {
                                        type: "boolean",
                                        description: "Indicates if the session was revoked successfully"
                                    }
                                },
                                required: [
                                    "status"
                                ]
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    const token = ctx.body.token;
    if ((await ctx.context.internalAdapter.findSession(token))?.session.userId === ctx.context.session.user.id) try {
        await ctx.context.internalAdapter.deleteSession(token);
    } catch (error) {
        ctx.context.logger.error(error && typeof error === "object" && "name" in error ? error.name : "", error);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR");
    }
    return ctx.json({
        status: true
    });
});
/**
* revoke all user sessions
*/ const revokeSessions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/revoke-sessions", {
    method: "POST",
    use: [
        sensitiveSessionMiddleware
    ],
    requireHeaders: true,
    metadata: {
        openapi: {
            description: "Revoke all sessions for the user",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    status: {
                                        type: "boolean",
                                        description: "Indicates if all sessions were revoked successfully"
                                    }
                                },
                                required: [
                                    "status"
                                ]
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    try {
        await ctx.context.internalAdapter.deleteSessions(ctx.context.session.user.id);
    } catch (error) {
        ctx.context.logger.error(error && typeof error === "object" && "name" in error ? error.name : "", error);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR");
    }
    return ctx.json({
        status: true
    });
});
const revokeOtherSessions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/revoke-other-sessions", {
    method: "POST",
    requireHeaders: true,
    use: [
        sensitiveSessionMiddleware
    ],
    metadata: {
        openapi: {
            description: "Revoke all other sessions for the user except the current one",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    status: {
                                        type: "boolean",
                                        description: "Indicates if all other sessions were revoked successfully"
                                    }
                                },
                                required: [
                                    "status"
                                ]
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    const session = ctx.context.session;
    if (!session.user) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED");
    const otherSessions = (await ctx.context.internalAdapter.listSessions(session.user.id)).filter((session$1)=>{
        return session$1.expiresAt > /* @__PURE__ */ new Date();
    }).filter((session$1)=>session$1.token !== ctx.context.session.session.token);
    await Promise.all(otherSessions.map((session$1)=>ctx.context.internalAdapter.deleteSession(session$1.token)));
    return ctx.json({
        status: true
    });
});
;
}),
"[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/api-q2sbQ7PT.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A",
    ()=>getAccessToken,
    "C",
    ()=>createEmailVerificationToken,
    "D",
    ()=>callbackOAuth,
    "E",
    ()=>verifyEmail,
    "F",
    ()=>decryptOAuthToken,
    "I",
    ()=>setTokenUtil,
    "L",
    ()=>originCheck,
    "M",
    ()=>listUserAccounts,
    "N",
    ()=>refreshToken,
    "O",
    ()=>handleOAuthUserInfo,
    "P",
    ()=>unlinkAccount,
    "R",
    ()=>originCheckMiddleware,
    "S",
    ()=>error,
    "T",
    ()=>sendVerificationEmailFn,
    "_",
    ()=>signInSocial,
    "a",
    ()=>getEndpoints,
    "b",
    ()=>resetPassword,
    "c",
    ()=>changeEmail,
    "d",
    ()=>deleteUserCallback,
    "f",
    ()=>setPassword,
    "g",
    ()=>signInEmail,
    "h",
    ()=>signOut,
    "j",
    ()=>linkSocialAccount,
    "k",
    ()=>accountInfo,
    "l",
    ()=>changePassword,
    "m",
    ()=>signUpEmail,
    "n",
    ()=>checkEndpointConflicts,
    "p",
    ()=>updateUser,
    "s",
    ()=>router,
    "u",
    ()=>deleteUser,
    "v",
    ()=>requestPasswordReset,
    "w",
    ()=>sendVerificationEmail,
    "x",
    ()=>ok,
    "y",
    ()=>requestPasswordResetCallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2d$DBbaShi0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/utils-DBbaShi0.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2d$BQxYXGGX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/crypto-BQxYXGGX.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$jwt$2d$DzuIBp7t$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/jwt-DzuIBp7t.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/schema-CSB7dlK0.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$request$2d$ip$2d$RYTz2Uba$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/get-request-ip-RYTz2Uba.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/json-_HMgPUVh.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$url$2d$BLNRhCPO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/url-BLNRhCPO.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/cookies-D_dksn7B.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$session$2d$CgfX4vv1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/session-CgfX4vv1.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/context/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__hasRequestState$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/context-DgQ9XGBl.mjs [app-rsc] (ecmascript) <export c as hasRequestState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__f__as__runWithEndpointContext$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/context-DgQ9XGBl.mjs [app-rsc] (ecmascript) <export f as runWithEndpointContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__l__as__runWithRequestState$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/context-DgQ9XGBl.mjs [app-rsc] (ecmascript) <export l as runWithRequestState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__runWithTransaction$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/context-DgQ9XGBl.mjs [app-rsc] (ecmascript) <export i as runWithTransaction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__d__as__isDevelopment$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env-DwlNAN_D.mjs [app-rsc] (ecmascript) <export d as isDevelopment>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__f__as__isProduction$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env-DwlNAN_D.mjs [app-rsc] (ecmascript) <export f as isProduction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env-DwlNAN_D.mjs [app-rsc] (ecmascript) <export i as logger>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__shouldPublishLog$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env-DwlNAN_D.mjs [app-rsc] (ecmascript) <export a as shouldPublishLog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/error/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/error-BhAKg8LX.mjs [app-rsc] (ecmascript) <export n as BASE_ERROR_CODES>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.0/node_modules/better-call/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.1.13/node_modules/zod/v4/classic/schemas.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$2$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.1.2/node_modules/jose/dist/webapi/jwt/verify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$social$2d$providers$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/social-providers/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$defu$40$6$2e$1$2e$4$2f$node_modules$2f$defu$2f$dist$2f$defu$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/api/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$2$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/jose@6.1.2/node_modules/jose/dist/webapi/util/errors.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
//#region src/utils/wildcard.ts
/**
* Escapes a character if it has a special meaning in regular expressions
* and returns the character as is if it doesn't
*/ function escapeRegExpChar(char) {
    if (char === "-" || char === "^" || char === "$" || char === "+" || char === "." || char === "(" || char === ")" || char === "|" || char === "[" || char === "]" || char === "{" || char === "}" || char === "*" || char === "?" || char === "\\") return `\\${char}`;
    else return char;
}
/**
* Escapes all characters in a given string that have a special meaning in regular expressions
*/ function escapeRegExpString(str) {
    let result = "";
    for(let i = 0; i < str.length; i++)result += escapeRegExpChar(str[i]);
    return result;
}
/**
* Transforms one or more glob patterns into a RegExp pattern
*/ function transform(pattern, separator = true) {
    if (Array.isArray(pattern)) return `(?:${pattern.map((p)=>`^${transform(p, separator)}$`).join("|")})`;
    let separatorSplitter = "";
    let separatorMatcher = "";
    let wildcard = ".";
    if (separator === true) {
        separatorSplitter = "/";
        separatorMatcher = "[/\\\\]";
        wildcard = "[^/\\\\]";
    } else if (separator) {
        separatorSplitter = separator;
        separatorMatcher = escapeRegExpString(separatorSplitter);
        if (separatorMatcher.length > 1) {
            separatorMatcher = `(?:${separatorMatcher})`;
            wildcard = `((?!${separatorMatcher}).)`;
        } else wildcard = `[^${separatorMatcher}]`;
    }
    let requiredSeparator = separator ? `${separatorMatcher}+?` : "";
    let optionalSeparator = separator ? `${separatorMatcher}*?` : "";
    let segments = separator ? pattern.split(separatorSplitter) : [
        pattern
    ];
    let result = "";
    for(let s = 0; s < segments.length; s++){
        let segment = segments[s];
        let nextSegment = segments[s + 1];
        let currentSeparator = "";
        if (!segment && s > 0) continue;
        if (separator) if (s === segments.length - 1) currentSeparator = optionalSeparator;
        else if (nextSegment !== "**") currentSeparator = requiredSeparator;
        else currentSeparator = "";
        if (separator && segment === "**") {
            if (currentSeparator) {
                result += s === 0 ? "" : currentSeparator;
                result += `(?:${wildcard}*?${currentSeparator})*?`;
            }
            continue;
        }
        for(let c = 0; c < segment.length; c++){
            let char = segment[c];
            if (char === "\\") {
                if (c < segment.length - 1) {
                    result += escapeRegExpChar(segment[c + 1]);
                    c++;
                }
            } else if (char === "?") result += wildcard;
            else if (char === "*") result += `${wildcard}*?`;
            else result += escapeRegExpChar(char);
        }
        result += currentSeparator;
    }
    return result;
}
function isMatch(regexp, sample) {
    if (typeof sample !== "string") throw new TypeError(`Sample must be a string, but ${typeof sample} given`);
    return regexp.test(sample);
}
/**
* Compiles one or more glob patterns into a RegExp and returns an isMatch function.
* The isMatch function takes a sample string as its only argument and returns `true`
* if the string matches the pattern(s).
*
* ```js
* wildcardMatch('src/*.js')('src/index.js') //=> true
* ```
*
* ```js
* const isMatch = wildcardMatch('*.example.com', '.')
* isMatch('foo.example.com') //=> true
* isMatch('foo.bar.com') //=> false
* ```
*/ function wildcardMatch(pattern, options) {
    if (typeof pattern !== "string" && !Array.isArray(pattern)) throw new TypeError(`The first argument must be a single pattern string or an array of patterns, but ${typeof pattern} given`);
    if (typeof options === "string" || typeof options === "boolean") options = {
        separator: options
    };
    if (arguments.length === 2 && !(typeof options === "undefined" || typeof options === "object" && options !== null && !Array.isArray(options))) throw new TypeError(`The second argument must be an options object or a string/boolean separator, but ${typeof options} given`);
    options = options || {};
    if (options.separator === "\\") throw new Error("\\ is not a valid separator because it is used for escaping. Try setting the separator to `true` instead");
    let regexpPattern = transform(pattern, options.separator);
    let regexp = new RegExp(`^${regexpPattern}$`, options.flags);
    let fn = isMatch.bind(null, regexp);
    fn.options = options;
    fn.pattern = pattern;
    fn.regexp = regexp;
    return fn;
}
//#endregion
//#region src/api/middlewares/origin-check.ts
/**
* A middleware to validate callbackURL and origin against
* trustedOrigins.
*/ const originCheckMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
    if (ctx.request?.method === "GET" || ctx.request?.method === "OPTIONS" || ctx.request?.method === "HEAD" || !ctx.request) return;
    const headers = ctx.request?.headers;
    const request = ctx.request;
    const { body, query, context } = ctx;
    const originHeader = headers?.get("origin") || headers?.get("referer") || "";
    const callbackURL = body?.callbackURL || query?.callbackURL;
    const redirectURL = body?.redirectTo;
    const errorCallbackURL = body?.errorCallbackURL;
    const newUserCallbackURL = body?.newUserCallbackURL;
    const trustedOrigins = Array.isArray(context.options.trustedOrigins) ? context.trustedOrigins : [
        ...context.trustedOrigins,
        ...await context.options.trustedOrigins?.(request) || []
    ];
    const useCookies = headers?.has("cookie");
    const matchesPattern = (url, pattern)=>{
        if (url.startsWith("/")) return false;
        if (pattern.includes("*")) {
            if (pattern.includes("://")) return wildcardMatch(pattern)((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$url$2d$BLNRhCPO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(url) || url);
            const host = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$url$2d$BLNRhCPO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(url);
            if (!host) return false;
            return wildcardMatch(pattern)(host);
        }
        const protocol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$url$2d$BLNRhCPO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])(url);
        return protocol === "http:" || protocol === "https:" || !protocol ? pattern === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$url$2d$BLNRhCPO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(url) : url.startsWith(pattern);
    };
    const validateURL = (url, label)=>{
        if (!url) return;
        if (!trustedOrigins.some((origin)=>matchesPattern(url, origin) || url?.startsWith("/") && label !== "origin" && /^\/(?!\/|\\|%2f|%5c)[\w\-.\+/@]*(?:\?[\w\-.\+/=&%@]*)?$/.test(url))) {
            ctx.context.logger.error(`Invalid ${label}: ${url}`);
            ctx.context.logger.info(`If it's a valid URL, please add ${url} to trustedOrigins in your auth config\n`, `Current list of trustedOrigins: ${trustedOrigins}`);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
                message: `Invalid ${label}`
            });
        }
    };
    if (useCookies && !ctx.context.skipCSRFCheck && !ctx.context.skipOriginCheck) {
        if (!originHeader || originHeader === "null") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
            message: "Missing or null Origin"
        });
        validateURL(originHeader, "origin");
    }
    callbackURL && validateURL(callbackURL, "callbackURL");
    redirectURL && validateURL(redirectURL, "redirectURL");
    errorCallbackURL && validateURL(errorCallbackURL, "errorCallbackURL");
    newUserCallbackURL && validateURL(newUserCallbackURL, "newUserCallbackURL");
});
const originCheck = (getValue)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthMiddleware"])(async (ctx)=>{
        if (!ctx.request) return;
        const { context } = ctx;
        const callbackURL = getValue(ctx);
        const trustedOrigins = Array.isArray(context.options.trustedOrigins) ? context.trustedOrigins : [
            ...context.trustedOrigins,
            ...await context.options.trustedOrigins?.(ctx.request) || []
        ];
        const matchesPattern = (url, pattern)=>{
            if (url.startsWith("/")) return false;
            if (pattern.includes("*")) {
                if (pattern.includes("://")) return wildcardMatch(pattern)((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$url$2d$BLNRhCPO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(url) || url);
                const host = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$url$2d$BLNRhCPO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(url);
                if (!host) return false;
                return wildcardMatch(pattern)(host);
            }
            const protocol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$url$2d$BLNRhCPO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])(url);
            return protocol === "http:" || protocol === "https:" || !protocol ? pattern === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$url$2d$BLNRhCPO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(url) : url.startsWith(pattern);
        };
        const validateURL = (url, label)=>{
            if (!url) return;
            if (!trustedOrigins.some((origin)=>matchesPattern(url, origin) || url?.startsWith("/") && label !== "origin" && /^\/(?!\/|\\|%2f|%5c)[\w\-.\+/@]*(?:\?[\w\-.\+/=&%@]*)?$/.test(url))) {
                ctx.context.logger.error(`Invalid ${label}: ${url}`);
                ctx.context.logger.info(`If it's a valid URL, please add ${url} to trustedOrigins in your auth config\n`, `Current list of trustedOrigins: ${trustedOrigins}`);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
                    message: `Invalid ${label}`
                });
            }
        };
        const callbacks = Array.isArray(callbackURL) ? callbackURL : [
            callbackURL
        ];
        for (const url of callbacks)validateURL(url, "callbackURL");
    });
//#endregion
//#region src/api/rate-limiter/index.ts
function shouldRateLimit(max, window, rateLimitData) {
    const now = Date.now();
    const windowInMs = window * 1e3;
    return now - rateLimitData.lastRequest < windowInMs && rateLimitData.count >= max;
}
function rateLimitResponse(retryAfter) {
    return new Response(JSON.stringify({
        message: "Too many requests. Please try again later."
    }), {
        status: 429,
        statusText: "Too Many Requests",
        headers: {
            "X-Retry-After": retryAfter.toString()
        }
    });
}
function getRetryAfter(lastRequest, window) {
    const now = Date.now();
    const windowInMs = window * 1e3;
    return Math.ceil((lastRequest + windowInMs - now) / 1e3);
}
function createDBStorage(ctx) {
    const model = "rateLimit";
    const db = ctx.adapter;
    return {
        get: async (key)=>{
            const data = (await db.findMany({
                model,
                where: [
                    {
                        field: "key",
                        value: key
                    }
                ]
            }))[0];
            if (typeof data?.lastRequest === "bigint") data.lastRequest = Number(data.lastRequest);
            return data;
        },
        set: async (key, value, _update)=>{
            try {
                if (_update) await db.updateMany({
                    model,
                    where: [
                        {
                            field: "key",
                            value: key
                        }
                    ],
                    update: {
                        count: value.count,
                        lastRequest: value.lastRequest
                    }
                });
                else await db.create({
                    model,
                    data: {
                        key,
                        count: value.count,
                        lastRequest: value.lastRequest
                    }
                });
            } catch (e) {
                ctx.logger.error("Error setting rate limit", e);
            }
        }
    };
}
const memory = /* @__PURE__ */ new Map();
function getRateLimitStorage(ctx, rateLimitSettings) {
    if (ctx.options.rateLimit?.customStorage) return ctx.options.rateLimit.customStorage;
    const storage = ctx.rateLimit.storage;
    if (storage === "secondary-storage") return {
        get: async (key)=>{
            const data = await ctx.options.secondaryStorage?.get(key);
            return data ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(data) : void 0;
        },
        set: async (key, value, _update)=>{
            const ttl = rateLimitSettings?.window ?? ctx.options.rateLimit?.window ?? 10;
            await ctx.options.secondaryStorage?.set?.(key, JSON.stringify(value), ttl);
        }
    };
    else if (storage === "memory") return {
        async get (key) {
            return memory.get(key);
        },
        async set (key, value, _update) {
            memory.set(key, value);
        }
    };
    return createDBStorage(ctx);
}
async function onRequestRateLimit(req, ctx) {
    if (!ctx.rateLimit.enabled) return;
    const path = new URL(req.url).pathname.replace(ctx.options.basePath || "/api/auth", "");
    let window = ctx.rateLimit.window;
    let max = ctx.rateLimit.max;
    const ip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$request$2d$ip$2d$RYTz2Uba$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(req, ctx.options);
    if (!ip) return;
    const key = ip + path;
    const specialRule = getDefaultSpecialRules().find((rule)=>rule.pathMatcher(path));
    if (specialRule) {
        window = specialRule.window;
        max = specialRule.max;
    }
    for (const plugin of ctx.options.plugins || [])if (plugin.rateLimit) {
        const matchedRule = plugin.rateLimit.find((rule)=>rule.pathMatcher(path));
        if (matchedRule) {
            window = matchedRule.window;
            max = matchedRule.max;
            break;
        }
    }
    if (ctx.rateLimit.customRules) {
        const _path = Object.keys(ctx.rateLimit.customRules).find((p)=>{
            if (p.includes("*")) return wildcardMatch(p)(path);
            return p === path;
        });
        if (_path) {
            const customRule = ctx.rateLimit.customRules[_path];
            const resolved = typeof customRule === "function" ? await customRule(req) : customRule;
            if (resolved) {
                window = resolved.window;
                max = resolved.max;
            }
            if (resolved === false) return;
        }
    }
    const storage = getRateLimitStorage(ctx, {
        window
    });
    const data = await storage.get(key);
    const now = Date.now();
    if (!data) await storage.set(key, {
        key,
        count: 1,
        lastRequest: now
    });
    else {
        const timeSinceLastRequest = now - data.lastRequest;
        if (shouldRateLimit(max, window, data)) return rateLimitResponse(getRetryAfter(data.lastRequest, window));
        else if (timeSinceLastRequest > window * 1e3) await storage.set(key, {
            ...data,
            count: 1,
            lastRequest: now
        }, true);
        else await storage.set(key, {
            ...data,
            count: data.count + 1,
            lastRequest: now
        }, true);
    }
}
function getDefaultSpecialRules() {
    return [
        {
            pathMatcher (path) {
                return path.startsWith("/sign-in") || path.startsWith("/sign-up") || path.startsWith("/change-password") || path.startsWith("/change-email");
            },
            window: 10,
            max: 3
        }
    ];
}
//#endregion
//#region src/oauth2/utils.ts
function decryptOAuthToken(token, ctx) {
    if (!token) return token;
    if (ctx.options.account?.encryptOAuthTokens) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2d$BQxYXGGX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])({
        key: ctx.secret,
        data: token
    });
    return token;
}
function setTokenUtil(token, ctx) {
    if (ctx.options.account?.encryptOAuthTokens && token) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2d$BQxYXGGX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])({
        key: ctx.secret,
        data: token
    });
    return token;
}
//#endregion
//#region src/api/routes/account.ts
const listUserAccounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/list-accounts", {
    method: "GET",
    use: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$session$2d$CgfX4vv1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u"]
    ],
    metadata: {
        openapi: {
            operationId: "listUserAccounts",
            description: "List all accounts linked to the user",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        id: {
                                            type: "string"
                                        },
                                        providerId: {
                                            type: "string"
                                        },
                                        createdAt: {
                                            type: "string",
                                            format: "date-time"
                                        },
                                        updatedAt: {
                                            type: "string",
                                            format: "date-time"
                                        },
                                        accountId: {
                                            type: "string"
                                        },
                                        userId: {
                                            type: "string"
                                        },
                                        scopes: {
                                            type: "array",
                                            items: {
                                                type: "string"
                                            }
                                        }
                                    },
                                    required: [
                                        "id",
                                        "providerId",
                                        "createdAt",
                                        "updatedAt",
                                        "accountId",
                                        "userId",
                                        "scopes"
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}, async (c)=>{
    const session = c.context.session;
    const accounts = await c.context.internalAdapter.findAccounts(session.user.id);
    return c.json(accounts.map((a)=>({
            id: a.id,
            providerId: a.providerId,
            createdAt: a.createdAt,
            updatedAt: a.updatedAt,
            accountId: a.accountId,
            userId: a.userId,
            scopes: a.scope?.split(",") || []
        })));
});
const linkSocialAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/link-social", {
    method: "POST",
    requireHeaders: true,
    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
        callbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The URL to redirect to after the user has signed in"
        }).optional(),
        provider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$social$2d$providers$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SocialProviderListEnum"],
        idToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
            token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"](),
            nonce: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().optional(),
            accessToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().optional(),
            refreshToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().optional(),
            scopes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["array"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]()).optional()
        }).optional(),
        requestSignUp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["boolean"]().optional(),
        scopes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["array"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]()).meta({
            description: "Additional scopes to request from the provider"
        }).optional(),
        errorCallbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The URL to redirect to if there is an error during the link process"
        }).optional(),
        disableRedirect: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["boolean"]().meta({
            description: "Disable automatic redirection to the provider. Useful for handling the redirection yourself"
        }).optional(),
        additionalData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["record"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"](), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["any"]()).optional()
    }),
    use: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$session$2d$CgfX4vv1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u"]
    ],
    metadata: {
        openapi: {
            description: "Link a social account to the user",
            operationId: "linkSocialAccount",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    url: {
                                        type: "string",
                                        description: "The authorization URL to redirect the user to"
                                    },
                                    redirect: {
                                        type: "boolean",
                                        description: "Indicates if the user should be redirected to the authorization URL"
                                    },
                                    status: {
                                        type: "boolean"
                                    }
                                },
                                required: [
                                    "redirect"
                                ]
                            }
                        }
                    }
                }
            }
        }
    }
}, async (c)=>{
    const session = c.context.session;
    const provider = c.context.socialProviders.find((p)=>p.id === c.body.provider);
    if (!provider) {
        c.context.logger.error("Provider not found. Make sure to add the provider in your auth config", {
            provider: c.body.provider
        });
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("NOT_FOUND", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].PROVIDER_NOT_FOUND
        });
    }
    if (c.body.idToken) {
        if (!provider.verifyIdToken) {
            c.context.logger.error("Provider does not support id token verification", {
                provider: c.body.provider
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("NOT_FOUND", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].ID_TOKEN_NOT_SUPPORTED
            });
        }
        const { token, nonce } = c.body.idToken;
        if (!await provider.verifyIdToken(token, nonce)) {
            c.context.logger.error("Invalid id token", {
                provider: c.body.provider
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].INVALID_TOKEN
            });
        }
        const linkingUserInfo = await provider.getUserInfo({
            idToken: token,
            accessToken: c.body.idToken.accessToken,
            refreshToken: c.body.idToken.refreshToken
        });
        if (!linkingUserInfo || !linkingUserInfo?.user) {
            c.context.logger.error("Failed to get user info", {
                provider: c.body.provider
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].FAILED_TO_GET_USER_INFO
            });
        }
        const linkingUserId = String(linkingUserInfo.user.id);
        if (!linkingUserInfo.user.email) {
            c.context.logger.error("User email not found", {
                provider: c.body.provider
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].USER_EMAIL_NOT_FOUND
            });
        }
        if ((await c.context.internalAdapter.findAccounts(session.user.id)).find((a)=>a.providerId === provider.id && a.accountId === linkingUserId)) return c.json({
            url: "",
            status: true,
            redirect: false
        });
        if (!c.context.options.account?.accountLinking?.trustedProviders?.includes(provider.id) && !linkingUserInfo.user.emailVerified || c.context.options.account?.accountLinking?.enabled === false) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
            message: "Account not linked - linking not allowed"
        });
        if (linkingUserInfo.user.email !== session.user.email && c.context.options.account?.accountLinking?.allowDifferentEmails !== true) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
            message: "Account not linked - different emails not allowed"
        });
        try {
            await c.context.internalAdapter.createAccount({
                userId: session.user.id,
                providerId: provider.id,
                accountId: linkingUserId,
                accessToken: c.body.idToken.accessToken,
                idToken: token,
                refreshToken: c.body.idToken.refreshToken,
                scope: c.body.idToken.scopes?.join(",")
            });
        } catch (e) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("EXPECTATION_FAILED", {
                message: "Account not linked - unable to create account"
            });
        }
        if (c.context.options.account?.accountLinking?.updateUserInfoOnLink === true) try {
            await c.context.internalAdapter.updateUser(session.user.id, {
                name: linkingUserInfo.user?.name,
                image: linkingUserInfo.user?.image
            });
        } catch (e) {
            console.warn("Could not update user - " + e.toString());
        }
        return c.json({
            url: "",
            status: true,
            redirect: false
        });
    }
    const state = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2d$DBbaShi0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(c, {
        userId: session.user.id,
        email: session.user.email
    }, c.body.additionalData);
    const url = await provider.createAuthorizationURL({
        state: state.state,
        codeVerifier: state.codeVerifier,
        redirectURI: `${c.context.baseURL}/callback/${provider.id}`,
        scopes: c.body.scopes
    });
    return c.json({
        url: url.toString(),
        redirect: !c.body.disableRedirect
    });
});
const unlinkAccount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/unlink-account", {
    method: "POST",
    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
        providerId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"](),
        accountId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().optional()
    }),
    use: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$session$2d$CgfX4vv1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]
    ],
    metadata: {
        openapi: {
            description: "Unlink an account",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    status: {
                                        type: "boolean"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    const { providerId, accountId } = ctx.body;
    const accounts = await ctx.context.internalAdapter.findAccounts(ctx.context.session.user.id);
    if (accounts.length === 1 && !ctx.context.options.account?.accountLinking?.allowUnlinkingAll) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].FAILED_TO_UNLINK_LAST_ACCOUNT
    });
    const accountExist = accounts.find((account)=>accountId ? account.accountId === accountId && account.providerId === providerId : account.providerId === providerId);
    if (!accountExist) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].ACCOUNT_NOT_FOUND
    });
    await ctx.context.internalAdapter.deleteAccount(accountExist.id);
    return ctx.json({
        status: true
    });
});
const getAccessToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/get-access-token", {
    method: "POST",
    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
        providerId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The provider ID for the OAuth provider"
        }),
        accountId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The account ID associated with the refresh token"
        }).optional(),
        userId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The user ID associated with the account"
        }).optional()
    }),
    metadata: {
        openapi: {
            description: "Get a valid access token, doing a refresh if needed",
            responses: {
                200: {
                    description: "A Valid access token",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    tokenType: {
                                        type: "string"
                                    },
                                    idToken: {
                                        type: "string"
                                    },
                                    accessToken: {
                                        type: "string"
                                    },
                                    refreshToken: {
                                        type: "string"
                                    },
                                    accessTokenExpiresAt: {
                                        type: "string",
                                        format: "date-time"
                                    },
                                    refreshTokenExpiresAt: {
                                        type: "string",
                                        format: "date-time"
                                    }
                                }
                            }
                        }
                    }
                },
                400: {
                    description: "Invalid refresh token or provider configuration"
                }
            }
        }
    }
}, async (ctx)=>{
    const { providerId, accountId, userId } = ctx.body || {};
    const req = ctx.request;
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$session$2d$CgfX4vv1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(ctx);
    if (req && !session) throw ctx.error("UNAUTHORIZED");
    let resolvedUserId = session?.user?.id || userId;
    if (!resolvedUserId) throw ctx.error("UNAUTHORIZED");
    if (!ctx.context.socialProviders.find((p)=>p.id === providerId)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: `Provider ${providerId} is not supported.`
    });
    const accountDataCookieName = ctx.context.authCookies.accountData.name;
    const accountDataCookie = await ctx.getSignedCookie(accountDataCookieName, ctx.context.secret);
    const accountData = accountDataCookie ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(accountDataCookie) : null;
    let account = void 0;
    if (accountData && providerId === accountData.providerId && (!accountId || accountData.id === accountId)) account = accountData;
    else account = (await ctx.context.internalAdapter.findAccounts(resolvedUserId)).find((acc)=>accountId ? acc.id === accountId && acc.providerId === providerId : acc.providerId === providerId);
    if (!account) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: "Account not found"
    });
    const provider = ctx.context.socialProviders.find((p)=>p.id === providerId);
    if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: `Provider ${providerId} not found.`
    });
    try {
        let newTokens = null;
        const accessTokenExpired = account.accessTokenExpiresAt && new Date(account.accessTokenExpiresAt).getTime() - Date.now() < 5e3;
        if (account.refreshToken && accessTokenExpired && provider.refreshAccessToken) {
            const refreshToken$1 = await decryptOAuthToken(account.refreshToken, ctx.context);
            newTokens = await provider.refreshAccessToken(refreshToken$1);
            const updatedAccount = await ctx.context.internalAdapter.updateAccount(account.id, {
                accessToken: await setTokenUtil(newTokens.accessToken, ctx.context),
                accessTokenExpiresAt: newTokens.accessTokenExpiresAt,
                refreshToken: await setTokenUtil(newTokens.refreshToken, ctx.context),
                refreshTokenExpiresAt: newTokens.refreshTokenExpiresAt
            });
            if (ctx.context.options.account?.storeAccountCookie && updatedAccount) await ctx.setSignedCookie(accountDataCookieName, JSON.stringify(updatedAccount), ctx.context.secret, ctx.context.authCookies.accountData.options);
        }
        const tokens = {
            accessToken: newTokens?.accessToken ?? await decryptOAuthToken(account.accessToken ?? "", ctx.context),
            accessTokenExpiresAt: newTokens?.accessTokenExpiresAt ?? account.accessTokenExpiresAt ?? void 0,
            scopes: account.scope?.split(",") ?? [],
            idToken: newTokens?.idToken ?? account.idToken ?? void 0
        };
        return ctx.json(tokens);
    } catch (error$1) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "Failed to get a valid access token",
            cause: error$1
        });
    }
});
const refreshToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/refresh-token", {
    method: "POST",
    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
        providerId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The provider ID for the OAuth provider"
        }),
        accountId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The account ID associated with the refresh token"
        }).optional(),
        userId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The user ID associated with the account"
        }).optional()
    }),
    metadata: {
        openapi: {
            description: "Refresh the access token using a refresh token",
            responses: {
                200: {
                    description: "Access token refreshed successfully",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    tokenType: {
                                        type: "string"
                                    },
                                    idToken: {
                                        type: "string"
                                    },
                                    accessToken: {
                                        type: "string"
                                    },
                                    refreshToken: {
                                        type: "string"
                                    },
                                    accessTokenExpiresAt: {
                                        type: "string",
                                        format: "date-time"
                                    },
                                    refreshTokenExpiresAt: {
                                        type: "string",
                                        format: "date-time"
                                    }
                                }
                            }
                        }
                    }
                },
                400: {
                    description: "Invalid refresh token or provider configuration"
                }
            }
        }
    }
}, async (ctx)=>{
    const { providerId, accountId, userId } = ctx.body;
    const req = ctx.request;
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$session$2d$CgfX4vv1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(ctx);
    if (req && !session) throw ctx.error("UNAUTHORIZED");
    let resolvedUserId = session?.user?.id || userId;
    if (!resolvedUserId) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: `Either userId or session is required`
    });
    const provider = ctx.context.socialProviders.find((p)=>p.id === providerId);
    if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: `Provider ${providerId} not found.`
    });
    if (!provider.refreshAccessToken) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: `Provider ${providerId} does not support token refreshing.`
    });
    const accountDataCookieName = ctx.context.authCookies.accountData.name;
    const accountDataCookie = await ctx.getSignedCookie(accountDataCookieName, ctx.context.secret);
    let account = void 0;
    const accountData = accountDataCookie ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(accountDataCookie) : null;
    if (accountData && (!providerId || providerId === accountData?.providerId)) account = accountData;
    else account = (await ctx.context.internalAdapter.findAccounts(resolvedUserId)).find((acc)=>accountId ? acc.id === accountId && acc.providerId === providerId : acc.providerId === providerId);
    if (!account) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: "Account not found"
    });
    let refreshToken$1 = void 0;
    if (accountData && providerId === accountData.providerId) refreshToken$1 = accountData.refreshToken ?? void 0;
    else refreshToken$1 = account.refreshToken ?? void 0;
    if (!refreshToken$1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: "Refresh token not found"
    });
    try {
        const decryptedRefreshToken = await decryptOAuthToken(refreshToken$1, ctx.context);
        const tokens = await provider.refreshAccessToken(decryptedRefreshToken);
        if (account.id) {
            const updateData = {
                ...account || {},
                accessToken: await setTokenUtil(tokens.accessToken, ctx.context),
                refreshToken: await setTokenUtil(tokens.refreshToken, ctx.context),
                accessTokenExpiresAt: tokens.accessTokenExpiresAt,
                refreshTokenExpiresAt: tokens.refreshTokenExpiresAt,
                scope: tokens.scopes?.join(",") || account.scope,
                idToken: tokens.idToken || account.idToken
            };
            await ctx.context.internalAdapter.updateAccount(account.id, updateData);
        }
        if (accountData && providerId === accountData.providerId && ctx.context.options.account?.storeAccountCookie) {
            const updateData = {
                ...accountData,
                accessToken: await setTokenUtil(tokens.accessToken, ctx.context),
                refreshToken: await setTokenUtil(tokens.refreshToken, ctx.context),
                accessTokenExpiresAt: tokens.accessTokenExpiresAt,
                refreshTokenExpiresAt: tokens.refreshTokenExpiresAt,
                scope: tokens.scopes?.join(",") || accountData.scope,
                idToken: tokens.idToken || accountData.idToken
            };
            await ctx.setSignedCookie(accountDataCookieName, JSON.stringify(updateData), ctx.context.secret, ctx.context.authCookies.accountData.options);
        }
        return ctx.json({
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
            accessTokenExpiresAt: tokens.accessTokenExpiresAt,
            refreshTokenExpiresAt: tokens.refreshTokenExpiresAt,
            scope: tokens.scopes?.join(",") || account.scope,
            idToken: tokens.idToken || account.idToken,
            providerId: account.providerId,
            accountId: account.accountId
        });
    } catch (error$1) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "Failed to refresh access token",
            cause: error$1
        });
    }
});
const accountInfoQuerySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["optional"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
    accountId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
        description: "The provider given account id for which to get the account info"
    }).optional()
}));
const accountInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/account-info", {
    method: "GET",
    use: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$session$2d$CgfX4vv1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u"]
    ],
    metadata: {
        openapi: {
            description: "Get the account info provided by the provider",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    user: {
                                        type: "object",
                                        properties: {
                                            id: {
                                                type: "string"
                                            },
                                            name: {
                                                type: "string"
                                            },
                                            email: {
                                                type: "string"
                                            },
                                            image: {
                                                type: "string"
                                            },
                                            emailVerified: {
                                                type: "boolean"
                                            }
                                        },
                                        required: [
                                            "id",
                                            "emailVerified"
                                        ]
                                    },
                                    data: {
                                        type: "object",
                                        properties: {},
                                        additionalProperties: true
                                    }
                                },
                                required: [
                                    "user",
                                    "data"
                                ],
                                additionalProperties: false
                            }
                        }
                    }
                }
            }
        }
    },
    query: accountInfoQuerySchema
}, async (ctx)=>{
    const providedAccountId = ctx.query?.accountId;
    let account = void 0;
    if (!providedAccountId) {
        if (ctx.context.options.account?.storeAccountCookie) {
            const accountCookieName = ctx.context.authCookies.accountData.name;
            const accountCookie = await ctx.getSignedCookie(accountCookieName, ctx.context.secret);
            if (accountCookie) {
                const accountData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(accountCookie);
                if (accountData) account = accountData;
            }
        }
    } else {
        const accountData = await ctx.context.internalAdapter.findAccount(providedAccountId);
        if (accountData) account = accountData;
    }
    if (!account || account.userId !== ctx.context.session.user.id) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: "Account not found"
    });
    const provider = ctx.context.socialProviders.find((p)=>p.id === account.providerId);
    if (!provider) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
        message: `Provider account provider is ${account.providerId} but it is not configured`
    });
    const tokens = await getAccessToken({
        ...ctx,
        method: "POST",
        body: {
            accountId: account.id,
            providerId: account.providerId
        },
        returnHeaders: false,
        returnStatus: false
    });
    if (!tokens.accessToken) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: "Access token not found"
    });
    const info = await provider.getUserInfo({
        ...tokens,
        accessToken: tokens.accessToken
    });
    return ctx.json(info);
});
//#endregion
//#region src/oauth2/link-account.ts
async function handleOAuthUserInfo(c, { userInfo, account, callbackURL, disableSignUp, overrideUserInfo }) {
    const dbUser = await c.context.internalAdapter.findOAuthUser(userInfo.email.toLowerCase(), account.accountId, account.providerId).catch((e)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__["logger"].error("Better auth was unable to query your database.\nError: ", e);
        const errorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
        throw c.redirect(`${errorURL}?error=internal_server_error`);
    });
    let user = dbUser?.user;
    let isRegister = !user;
    if (dbUser) {
        const hasBeenLinked = dbUser.accounts.find((a)=>a.providerId === account.providerId && a.accountId === account.accountId);
        if (!hasBeenLinked) {
            if (!c.context.options.account?.accountLinking?.trustedProviders?.includes(account.providerId) && !userInfo.emailVerified || c.context.options.account?.accountLinking?.enabled === false) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__d__as__isDevelopment$3e$__["isDevelopment"])()) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__["logger"].warn(`User already exist but account isn't linked to ${account.providerId}. To read more about how account linking works in Better Auth see https://www.better-auth.com/docs/concepts/users-accounts#account-linking.`);
                return {
                    error: "account not linked",
                    data: null
                };
            }
            try {
                await c.context.internalAdapter.linkAccount({
                    providerId: account.providerId,
                    accountId: userInfo.id.toString(),
                    userId: dbUser.user.id,
                    accessToken: await setTokenUtil(account.accessToken, c.context),
                    refreshToken: await setTokenUtil(account.refreshToken, c.context),
                    idToken: account.idToken,
                    accessTokenExpiresAt: account.accessTokenExpiresAt,
                    refreshTokenExpiresAt: account.refreshTokenExpiresAt,
                    scope: account.scope
                });
            } catch (e) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__["logger"].error("Unable to link account", e);
                return {
                    error: "unable to link account",
                    data: null
                };
            }
            if (userInfo.emailVerified && !dbUser.user.emailVerified && userInfo.email.toLowerCase() === dbUser.user.email) await c.context.internalAdapter.updateUser(dbUser.user.id, {
                emailVerified: true
            });
        } else {
            if (c.context.options.account?.updateAccountOnSignIn !== false) {
                const updateData = Object.fromEntries(Object.entries({
                    idToken: account.idToken,
                    accessToken: await setTokenUtil(account.accessToken, c.context),
                    refreshToken: await setTokenUtil(account.refreshToken, c.context),
                    accessTokenExpiresAt: account.accessTokenExpiresAt,
                    refreshTokenExpiresAt: account.refreshTokenExpiresAt,
                    scope: account.scope
                }).filter(([_, value])=>value !== void 0));
                if (c.context.options.account?.storeAccountCookie) {
                    const accountDataCookie = c.context.authCookies.accountData;
                    await c.setSignedCookie(accountDataCookie.name, JSON.stringify(updateData), c.context.secret, accountDataCookie.options);
                }
                if (Object.keys(updateData).length > 0) await c.context.internalAdapter.updateAccount(hasBeenLinked.id, updateData);
            }
            if (userInfo.emailVerified && !dbUser.user.emailVerified && userInfo.email.toLowerCase() === dbUser.user.email) await c.context.internalAdapter.updateUser(dbUser.user.id, {
                emailVerified: true
            });
        }
        if (overrideUserInfo) {
            const { id: _, ...restUserInfo } = userInfo;
            user = await c.context.internalAdapter.updateUser(dbUser.user.id, {
                ...restUserInfo,
                email: userInfo.email.toLowerCase(),
                emailVerified: userInfo.email.toLowerCase() === dbUser.user.email ? dbUser.user.emailVerified || userInfo.emailVerified : userInfo.emailVerified
            });
        }
    } else {
        if (disableSignUp) return {
            error: "signup disabled",
            data: null,
            isRegister: false
        };
        try {
            const { id: _, ...restUserInfo } = userInfo;
            const accountData = {
                accessToken: await setTokenUtil(account.accessToken, c.context),
                refreshToken: await setTokenUtil(account.refreshToken, c.context),
                idToken: account.idToken,
                accessTokenExpiresAt: account.accessTokenExpiresAt,
                refreshTokenExpiresAt: account.refreshTokenExpiresAt,
                scope: account.scope,
                providerId: account.providerId,
                accountId: userInfo.id.toString()
            };
            const { user: createdUser, account: createdAccount } = await c.context.internalAdapter.createOAuthUser({
                ...restUserInfo,
                email: userInfo.email.toLowerCase()
            }, accountData);
            user = createdUser;
            if (c.context.options.account?.storeAccountCookie) {
                const accountDataCookie = c.context.authCookies.accountData;
                await c.setSignedCookie(accountDataCookie.name, JSON.stringify(createdAccount), c.context.secret, accountDataCookie.options);
            }
            if (!userInfo.emailVerified && user && c.context.options.emailVerification?.sendOnSignUp) {
                const token = await createEmailVerificationToken(c.context.secret, user.email, void 0, c.context.options.emailVerification?.expiresIn);
                const url = `${c.context.baseURL}/verify-email?token=${token}&callbackURL=${callbackURL}`;
                await c.context.options.emailVerification?.sendVerificationEmail?.({
                    user,
                    url,
                    token
                }, c.request);
            }
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__["logger"].error(e);
            if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]) return {
                error: e.message,
                data: null,
                isRegister: false
            };
            return {
                error: "unable to create user",
                data: null,
                isRegister: false
            };
        }
    }
    if (!user) return {
        error: "unable to create user",
        data: null,
        isRegister: false
    };
    const session = await c.context.internalAdapter.createSession(user.id);
    if (!session) return {
        error: "unable to create session",
        data: null,
        isRegister: false
    };
    return {
        data: {
            session,
            user
        },
        error: null,
        isRegister
    };
}
//#endregion
//#region src/api/routes/callback.ts
const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().optional(),
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().optional(),
    device_id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().optional(),
    error_description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().optional(),
    state: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().optional(),
    user: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().optional()
});
const callbackOAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/callback/:id", {
    method: [
        "GET",
        "POST"
    ],
    operationId: "handleOAuthCallback",
    body: schema.optional(),
    query: schema.optional(),
    metadata: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2d$DBbaShi0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"],
        allowedMediaTypes: [
            "application/x-www-form-urlencoded",
            "application/json"
        ]
    }
}, async (c)=>{
    let queryOrBody;
    const defaultErrorURL = c.context.options.onAPIError?.errorURL || `${c.context.baseURL}/error`;
    if (c.method === "POST") {
        const postData = c.body ? schema.parse(c.body) : {};
        const queryData = c.query ? schema.parse(c.query) : {};
        const mergedData = schema.parse({
            ...postData,
            ...queryData
        });
        const params = new URLSearchParams();
        for (const [key, value] of Object.entries(mergedData))if (value !== void 0 && value !== null) params.set(key, String(value));
        const redirectURL = `${c.context.baseURL}/callback/${c.params.id}?${params.toString()}`;
        throw c.redirect(redirectURL);
    }
    try {
        if (c.method === "GET") queryOrBody = schema.parse(c.query);
        else if (c.method === "POST") queryOrBody = schema.parse(c.body);
        else throw new Error("Unsupported method");
    } catch (e) {
        c.context.logger.error("INVALID_CALLBACK_REQUEST", e);
        throw c.redirect(`${defaultErrorURL}?error=invalid_callback_request`);
    }
    const { code, error: error$1, state, error_description, device_id } = queryOrBody;
    if (!state) {
        c.context.logger.error("State not found", error$1);
        const url = `${defaultErrorURL}${defaultErrorURL.includes("?") ? "&" : "?"}state=state_not_found`;
        throw c.redirect(url);
    }
    const { codeVerifier, callbackURL, link, errorURL, newUserURL, requestSignUp } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2d$DBbaShi0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])(c);
    function redirectOnError(error$2, description) {
        const baseURL = errorURL ?? defaultErrorURL;
        const params = new URLSearchParams({
            error: error$2
        });
        if (description) params.set("error_description", description);
        const url = `${baseURL}${baseURL.includes("?") ? "&" : "?"}${params.toString()}`;
        throw c.redirect(url);
    }
    if (error$1) redirectOnError(error$1, error_description);
    if (!code) {
        c.context.logger.error("Code not found");
        throw redirectOnError("no_code");
    }
    const provider = c.context.socialProviders.find((p)=>p.id === c.params.id);
    if (!provider) {
        c.context.logger.error("Oauth provider with id", c.params.id, "not found");
        throw redirectOnError("oauth_provider_not_found");
    }
    let tokens;
    try {
        tokens = await provider.validateAuthorizationCode({
            code,
            codeVerifier,
            deviceId: device_id,
            redirectURI: `${c.context.baseURL}/callback/${provider.id}`
        });
    } catch (e) {
        c.context.logger.error("", e);
        throw redirectOnError("invalid_code");
    }
    const userInfo = await provider.getUserInfo({
        ...tokens,
        user: c.body?.user ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(c.body.user) : void 0
    }).then((res)=>res?.user);
    if (!userInfo) {
        c.context.logger.error("Unable to get user info");
        return redirectOnError("unable_to_get_user_info");
    }
    if (!callbackURL) {
        c.context.logger.error("No callback URL found");
        throw redirectOnError("no_callback_url");
    }
    if (link) {
        if (!c.context.options.account?.accountLinking?.trustedProviders?.includes(provider.id) && !userInfo.emailVerified || c.context.options.account?.accountLinking?.enabled === false) {
            c.context.logger.error("Unable to link account - untrusted provider");
            return redirectOnError("unable_to_link_account");
        }
        if (userInfo.email !== link.email && c.context.options.account?.accountLinking?.allowDifferentEmails !== true) return redirectOnError("email_doesn't_match");
        const existingAccount = await c.context.internalAdapter.findAccount(String(userInfo.id));
        if (existingAccount) {
            if (existingAccount.userId.toString() !== link.userId.toString()) return redirectOnError("account_already_linked_to_different_user");
            const updateData = Object.fromEntries(Object.entries({
                accessToken: await setTokenUtil(tokens.accessToken, c.context),
                refreshToken: await setTokenUtil(tokens.refreshToken, c.context),
                idToken: tokens.idToken,
                accessTokenExpiresAt: tokens.accessTokenExpiresAt,
                refreshTokenExpiresAt: tokens.refreshTokenExpiresAt,
                scope: tokens.scopes?.join(",")
            }).filter(([_, value])=>value !== void 0));
            await c.context.internalAdapter.updateAccount(existingAccount.id, updateData);
        } else if (!await c.context.internalAdapter.createAccount({
            userId: link.userId,
            providerId: provider.id,
            accountId: String(userInfo.id),
            ...tokens,
            accessToken: await setTokenUtil(tokens.accessToken, c.context),
            refreshToken: await setTokenUtil(tokens.refreshToken, c.context),
            scope: tokens.scopes?.join(",")
        })) return redirectOnError("unable_to_link_account");
        let toRedirectTo$1;
        try {
            toRedirectTo$1 = callbackURL.toString();
        } catch  {
            toRedirectTo$1 = callbackURL;
        }
        throw c.redirect(toRedirectTo$1);
    }
    if (!userInfo.email) {
        c.context.logger.error("Provider did not return email. This could be due to misconfiguration in the provider settings.");
        return redirectOnError("email_not_found");
    }
    const accountData = {
        providerId: provider.id,
        accountId: String(userInfo.id),
        ...tokens,
        scope: tokens.scopes?.join(",")
    };
    const result = await handleOAuthUserInfo(c, {
        userInfo: {
            ...userInfo,
            id: String(userInfo.id),
            email: userInfo.email,
            name: userInfo.name || userInfo.email
        },
        account: accountData,
        callbackURL,
        disableSignUp: provider.disableImplicitSignUp && !requestSignUp || provider.options?.disableSignUp,
        overrideUserInfo: provider.options?.overrideUserInfoOnSignIn
    });
    if (result.error) {
        c.context.logger.error(result.error.split(" ").join("_"));
        return redirectOnError(result.error.split(" ").join("_"));
    }
    const { session, user } = result.data;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(c, {
        session,
        user
    });
    let toRedirectTo;
    try {
        toRedirectTo = (result.isRegister ? newUserURL || callbackURL : callbackURL).toString();
    } catch  {
        toRedirectTo = result.isRegister ? newUserURL || callbackURL : callbackURL;
    }
    throw c.redirect(toRedirectTo);
});
//#endregion
//#region src/api/routes/email-verification.ts
async function createEmailVerificationToken(secret, email, updateTo, expiresIn = 3600, extraPayload) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$jwt$2d$DzuIBp7t$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])({
        email: email.toLowerCase(),
        updateTo,
        ...extraPayload
    }, secret, expiresIn);
}
/**
* A function to send a verification email to the user
*/ async function sendVerificationEmailFn(ctx, user) {
    if (!ctx.context.options.emailVerification?.sendVerificationEmail) {
        ctx.context.logger.error("Verification email isn't enabled.");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "Verification email isn't enabled"
        });
    }
    const token = await createEmailVerificationToken(ctx.context.secret, user.email, void 0, ctx.context.options.emailVerification?.expiresIn);
    const callbackURL = ctx.body.callbackURL ? encodeURIComponent(ctx.body.callbackURL) : encodeURIComponent("/");
    const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${callbackURL}`;
    await ctx.context.options.emailVerification.sendVerificationEmail({
        user,
        url,
        token
    }, ctx.request);
}
const sendVerificationEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/send-verification-email", {
    method: "POST",
    operationId: "sendVerificationEmail",
    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
        email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["email"]().meta({
            description: "The email to send the verification email to"
        }),
        callbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The URL to use for email verification callback"
        }).optional()
    }),
    metadata: {
        openapi: {
            operationId: "sendVerificationEmail",
            description: "Send a verification email to the user",
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                email: {
                                    type: "string",
                                    description: "The email to send the verification email to",
                                    example: "user@example.com"
                                },
                                callbackURL: {
                                    type: "string",
                                    description: "The URL to use for email verification callback",
                                    example: "https://example.com/callback",
                                    nullable: true
                                }
                            },
                            required: [
                                "email"
                            ]
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    status: {
                                        type: "boolean",
                                        description: "Indicates if the email was sent successfully",
                                        example: true
                                    }
                                }
                            }
                        }
                    }
                },
                "400": {
                    description: "Bad Request",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string",
                                        description: "Error message",
                                        example: "Verification email isn't enabled"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    if (!ctx.context.options.emailVerification?.sendVerificationEmail) {
        ctx.context.logger.error("Verification email isn't enabled.");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "Verification email isn't enabled"
        });
    }
    const { email } = ctx.body;
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$session$2d$CgfX4vv1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(ctx);
    if (!session) {
        const user = await ctx.context.internalAdapter.findUserByEmail(email);
        if (!user) {
            await createEmailVerificationToken(ctx.context.secret, email, void 0, ctx.context.options.emailVerification?.expiresIn);
            return ctx.json({
                status: true
            });
        }
        await sendVerificationEmailFn(ctx, user.user);
        return ctx.json({
            status: true
        });
    }
    if (session?.user.emailVerified) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: "You can only send a verification email to an unverified email"
    });
    if (session?.user.email !== email) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: "You can only send a verification email to your own email"
    });
    await sendVerificationEmailFn(ctx, session.user);
    return ctx.json({
        status: true
    });
});
const verifyEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/verify-email", {
    method: "GET",
    operationId: "verifyEmail",
    query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
        token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The token to verify the email"
        }),
        callbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The URL to redirect to after email verification"
        }).optional()
    }),
    use: [
        originCheck((ctx)=>ctx.query.callbackURL)
    ],
    metadata: {
        openapi: {
            description: "Verify the email of the user",
            parameters: [
                {
                    name: "token",
                    in: "query",
                    description: "The token to verify the email",
                    required: true,
                    schema: {
                        type: "string"
                    }
                },
                {
                    name: "callbackURL",
                    in: "query",
                    description: "The URL to redirect to after email verification",
                    required: false,
                    schema: {
                        type: "string"
                    }
                }
            ],
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    user: {
                                        type: "object",
                                        $ref: "#/components/schemas/User"
                                    },
                                    status: {
                                        type: "boolean",
                                        description: "Indicates if the email was verified successfully"
                                    }
                                },
                                required: [
                                    "user",
                                    "status"
                                ]
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    function redirectOnError(error$1) {
        if (ctx.query.callbackURL) {
            if (ctx.query.callbackURL.includes("?")) throw ctx.redirect(`${ctx.query.callbackURL}&error=${error$1}`);
            throw ctx.redirect(`${ctx.query.callbackURL}?error=${error$1}`);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
            message: error$1
        });
    }
    const { token } = ctx.query;
    let jwt;
    try {
        jwt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$2$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jwtVerify"])(token, new TextEncoder().encode(ctx.context.secret), {
            algorithms: [
                "HS256"
            ]
        });
    } catch (e) {
        if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$jose$40$6$2e$1$2e$2$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$util$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JWTExpired"]) return redirectOnError("token_expired");
        return redirectOnError("invalid_token");
    }
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
        email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["email"](),
        updateTo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().optional(),
        requestType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().optional()
    }).parse(jwt.payload);
    const user = await ctx.context.internalAdapter.findUserByEmail(parsed.email);
    if (!user) return redirectOnError("user_not_found");
    if (parsed.updateTo) {
        let session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$session$2d$CgfX4vv1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(ctx);
        if (session && session.user.email !== parsed.email) return redirectOnError("unauthorized");
        if (parsed.requestType === "change-email-confirmation") {
            const newToken$1 = await createEmailVerificationToken(ctx.context.secret, parsed.email, parsed.updateTo, ctx.context.options.emailVerification?.expiresIn, {
                requestType: "change-email-verification"
            });
            const updateCallbackURL$1 = ctx.query.callbackURL ? encodeURIComponent(ctx.query.callbackURL) : encodeURIComponent("/");
            const url = `${ctx.context.baseURL}/verify-email?token=${newToken$1}&callbackURL=${updateCallbackURL$1}`;
            await ctx.context.options.emailVerification?.sendVerificationEmail?.({
                user: {
                    ...user.user,
                    email: parsed.updateTo
                },
                url,
                token: newToken$1
            }, ctx.request);
            if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
            return ctx.json({
                status: true
            });
        }
        if (!session) {
            const newSession = await ctx.context.internalAdapter.createSession(user.user.id);
            if (!newSession) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                message: "Failed to create session"
            });
            session = {
                session: newSession,
                user: user.user
            };
        }
        if (parsed.requestType === "change-email-verification") {
            const updatedUser$2 = await ctx.context.internalAdapter.updateUserByEmail(parsed.email, {
                email: parsed.updateTo,
                emailVerified: true
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(ctx, {
                session: session.session,
                user: {
                    ...session.user,
                    email: parsed.updateTo,
                    emailVerified: true
                }
            });
            if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
            return ctx.json({
                status: true,
                user: updatedUser$2
            });
        }
        const updatedUser$1 = await ctx.context.internalAdapter.updateUserByEmail(parsed.email, {
            email: parsed.updateTo,
            emailVerified: false
        });
        const newToken = await createEmailVerificationToken(ctx.context.secret, parsed.updateTo);
        const updateCallbackURL = ctx.query.callbackURL ? encodeURIComponent(ctx.query.callbackURL) : encodeURIComponent("/");
        await ctx.context.options.emailVerification?.sendVerificationEmail?.({
            user: updatedUser$1,
            url: `${ctx.context.baseURL}/verify-email?token=${newToken}&callbackURL=${updateCallbackURL}`,
            token: newToken
        }, ctx.request);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(ctx, {
            session: session.session,
            user: {
                ...session.user,
                email: parsed.updateTo,
                emailVerified: false
            }
        });
        if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
        return ctx.json({
            status: true,
            user: {
                id: updatedUser$1.id,
                email: updatedUser$1.email,
                name: updatedUser$1.name,
                image: updatedUser$1.image,
                emailVerified: updatedUser$1.emailVerified,
                createdAt: updatedUser$1.createdAt,
                updatedAt: updatedUser$1.updatedAt
            }
        });
    }
    if (user.user.emailVerified) {
        if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
        return ctx.json({
            status: true,
            user: null
        });
    }
    if (ctx.context.options.emailVerification?.onEmailVerification) await ctx.context.options.emailVerification.onEmailVerification(user.user, ctx.request);
    const updatedUser = await ctx.context.internalAdapter.updateUserByEmail(parsed.email, {
        emailVerified: true
    });
    if (ctx.context.options.emailVerification?.afterEmailVerification) await ctx.context.options.emailVerification.afterEmailVerification(updatedUser, ctx.request);
    if (ctx.context.options.emailVerification?.autoSignInAfterVerification) {
        const currentSession = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$session$2d$CgfX4vv1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(ctx);
        if (!currentSession || currentSession.user.email !== parsed.email) {
            const session = await ctx.context.internalAdapter.createSession(user.user.id);
            if (!session) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
                message: "Failed to create session"
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(ctx, {
                session,
                user: {
                    ...user.user,
                    emailVerified: true
                }
            });
        } else await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(ctx, {
            session: currentSession.session,
            user: {
                ...currentSession.user,
                emailVerified: true
            }
        });
    }
    if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL);
    return ctx.json({
        status: true,
        user: null
    });
});
//#endregion
//#region src/api/routes/error.ts
function sanitize(input) {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/&(?!amp;|lt;|gt;|quot;|#39;|#x[0-9a-fA-F]+;|#[0-9]+;)/g, "&amp;");
}
const html = (options, code = "Unknown", description = null)=>{
    const custom = options.onAPIError?.customizeDefaultErrorPage;
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Error</title>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        font-family: ${custom?.font?.defaultFamily || "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"};
        background: ${custom?.colors?.background || "var(--background)"};
        color: var(--foreground);
        margin: 0;
      }
      :root,
      :host {
        --spacing: 0.25rem;
        --container-md: 28rem;
        --text-sm: ${custom?.size?.textSm || "0.875rem"};
        --text-sm--line-height: calc(1.25 / 0.875);
        --text-2xl: ${custom?.size?.text2xl || "1.5rem"};
        --text-2xl--line-height: calc(2 / 1.5);
        --text-4xl: ${custom?.size?.text4xl || "2.25rem"};
        --text-4xl--line-height: calc(2.5 / 2.25);
        --text-6xl: ${custom?.size?.text6xl || "3rem"};
        --text-6xl--line-height: 1;
        --font-weight-medium: 500;
        --font-weight-semibold: 600;
        --font-weight-bold: 700;
        --default-transition-duration: 150ms;
        --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        --radius: ${custom?.size?.radiusSm || "0.625rem"};
        --default-mono-font-family: ${custom?.font?.monoFamily || "var(--font-geist-mono)"};
        --primary: ${custom?.colors?.primary || "black"};
        --primary-foreground: ${custom?.colors?.primaryForeground || "white"};
        --background: ${custom?.colors?.background || "white"};
        --foreground: ${custom?.colors?.foreground || "oklch(0.271 0 0)"};
        --border: ${custom?.colors?.border || "oklch(0.89 0 0)"};
        --destructive: ${custom?.colors?.destructive || "oklch(0.55 0.15 25.723)"};
        --muted-foreground: ${custom?.colors?.mutedForeground || "oklch(0.545 0 0)"};
        --corner-border: ${custom?.colors?.cornerBorder || "#404040"};
      }

      button, .btn {
        cursor: pointer;
        background: none;
        border: none;
        color: inherit;
        font: inherit;
        transition: all var(--default-transition-duration)
          var(--default-transition-timing-function);
      }
      button:hover, .btn:hover {
        opacity: 0.8;
      }

      @media (prefers-color-scheme: dark) {
        :root,
        :host {
          --primary: ${custom?.colors?.primary || "white"};
          --primary-foreground: ${custom?.colors?.primaryForeground || "black"};
          --background: ${custom?.colors?.background || "oklch(0.15 0 0)"};
          --foreground: ${custom?.colors?.foreground || "oklch(0.98 0 0)"};
          --border: ${custom?.colors?.border || "oklch(0.27 0 0)"};
          --destructive: ${custom?.colors?.destructive || "oklch(0.65 0.15 25.723)"};
          --muted-foreground: ${custom?.colors?.mutedForeground || "oklch(0.65 0 0)"};
          --corner-border: ${custom?.colors?.cornerBorder || "#a0a0a0"};
        }
      }
      @media (max-width: 640px) {
        :root, :host {
          --text-6xl: 2.5rem;
          --text-2xl: 1.25rem;
          --text-sm: 0.8125rem;
        }
      }
      @media (max-width: 480px) {
        :root, :host {
          --text-6xl: 2rem;
          --text-2xl: 1.125rem;
        }
      }
    </style>
  </head>
  <body style="width: 100vw; min-height: 100vh; overflow-x: hidden; overflow-y: auto;">
    <div
        style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            position: relative;
            width: 100%;
            min-height: 100vh;
            padding: 1rem;
        "
        >
${custom?.disableBackgroundGrid ? "" : `
      <div
        style="
          position: absolute;
          inset: 0;
          background-image: linear-gradient(to right, ${custom?.colors?.gridColor || "var(--border)"} 1px, transparent 1px),
            linear-gradient(to bottom, ${custom?.colors?.gridColor || "var(--border)"} 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.6;
          pointer-events: none;
          width: 100vw;
          height: 100vh;
        "
      ></div>
      <div
        style="
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${custom?.colors?.background || "var(--background)"};
          mask-image: radial-gradient(ellipse at center, transparent 20%, black);
          -webkit-mask-image: radial-gradient(ellipse at center, transparent 20%, black);
          pointer-events: none;
        "
      ></div>
`}

<div
  style="
    position: relative;
    z-index: 10;
    border: 2px solid var(--border);
    background: ${custom?.colors?.cardBackground || "var(--background)"};
    padding: 1.5rem;
    max-width: 42rem;
    width: 100%;
  "
>
    ${custom?.disableCornerDecorations ? "" : `
        <!-- Corner decorations -->
        <div
          style="
            position: absolute;
            top: -2px;
            left: -2px;
            width: 2rem;
            height: 2rem;
            border-top: 4px solid var(--corner-border);
            border-left: 4px solid var(--corner-border);
          "
        ></div>
        <div
          style="
            position: absolute;
            top: -2px;
            right: -2px;
            width: 2rem;
            height: 2rem;
            border-top: 4px solid var(--corner-border);
            border-right: 4px solid var(--corner-border);
          "
        ></div>
  
        <div
          style="
            position: absolute;
            bottom: -2px;
            left: -2px;
            width: 2rem;
            height: 2rem;
            border-bottom: 4px solid var(--corner-border);
            border-left: 4px solid var(--corner-border);
          "
        ></div>
        <div
          style="
            position: absolute;
            bottom: -2px;
            right: -2px;
            width: 2rem;
            height: 2rem;
            border-bottom: 4px solid var(--corner-border);
            border-right: 4px solid var(--corner-border);
          "
        ></div>`}

        <div style="text-align: center; margin-bottom: 1.5rem;">
          <div style="margin-bottom: 1.5rem;">
            <div
              style="
                display: inline-block;
                border: 2px solid ${custom?.disableTitleBorder ? "transparent" : custom?.colors?.titleBorder || "var(--destructive)"};
                padding: 0.375rem 1rem;
              "
            >
              <h1
                style="
                  font-size: var(--text-6xl);
                  font-weight: var(--font-weight-semibold);
                  color: ${custom?.colors?.titleColor || "var(--foreground)"};
                  letter-spacing: -0.02em;
                  margin: 0;
                "
              >
                ERROR
              </h1>
            </div>
            <div
              style="
                height: 2px;
                background-color: var(--border);
                width: calc(100% + 3rem);
                margin-left: -1.5rem;
                margin-top: 1.5rem;
              "
            ></div>
          </div>

          <h2
            style="
              font-size: var(--text-2xl);
              font-weight: var(--font-weight-semibold);
              color: var(--foreground);
              margin: 0 0 1rem;
            "
          >
            Something went wrong
          </h2>

          <div
            style="
                display: inline-flex;
                align-items: center;
                gap: 0.5rem;
                border: 2px solid var(--border);
                background-color: var(--muted);
                padding: 0.375rem 0.75rem;
                margin: 0 0 1rem;
                flex-wrap: wrap;
                justify-content: center;
            "
            >
            <span
                style="
                font-size: 0.75rem;
                color: var(--muted-foreground);
                font-weight: var(--font-weight-semibold);
                "
            >
                CODE:
            </span>
            <span
                style="
                font-size: var(--text-sm);
                font-family: var(--default-mono-font-family, monospace);
                color: var(--foreground);
                word-break: break-all;
                "
            >
                ${sanitize(code)}
            </span>
            </div>

          <p
            style="
              color: var(--muted-foreground);
              max-width: 28rem;
              margin: 0 auto;
              font-size: var(--text-sm);
              line-height: 1.5;
              text-wrap: pretty;
            "
          >
            ${!description ? `We encountered an unexpected error. Please try again or return to the home page. If you're a developer, you can find more information about the error <a href='https://better-auth.com/docs/errors/${encodeURIComponent(code)}' target='_blank' rel="noopener noreferrer" style='color: var(--foreground); text-decoration: underline;'>here</a>.` : description}
          </p>
        </div>

        <div
          style="
            display: flex;
            gap: 0.75rem;
            margin-top: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
          "
        >
          <a
            href="/"
            style="
              text-decoration: none;
            "
          >
            <div
              style="
                border: 2px solid var(--border);
                background: var(--primary);
                color: var(--primary-foreground);
                padding: 0.5rem 1rem;
                border-radius: 0;
                white-space: nowrap;
              "
              class="btn"
            >
              Go Home
            </div>
          </a>
          <a
            href="https://better-auth.com/docs/errors/${encodeURIComponent(code)}?askai=${encodeURIComponent(`What does the error code ${code} mean?`)}"
            target="_blank"
            rel="noopener noreferrer"
            style="
              text-decoration: none;
            "
          >
            <div
              style="
                border: 2px solid var(--border);
                background: transparent;
                color: var(--foreground);
                padding: 0.5rem 1rem;
                border-radius: 0;
                white-space: nowrap;
              "
              class="btn"
            >
              Ask AI
            </div>
          </a>
        </div>
      </div>
    </div>
  </body>
</html>`;
};
const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/error", {
    method: "GET",
    metadata: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2d$DBbaShi0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"],
        openapi: {
            description: "Displays an error page",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "text/html": {
                            schema: {
                                type: "string",
                                description: "The HTML content of the error page"
                            }
                        }
                    }
                }
            }
        }
    }
}, async (c)=>{
    const url = new URL(c.request?.url || "");
    const unsanitizedCode = url.searchParams.get("error") || "UNKNOWN";
    const unsanitizedDescription = url.searchParams.get("error_description") || null;
    const safeCode = /^[\'A-Za-z0-9_-]+$/.test(unsanitizedCode || "") ? unsanitizedCode : "UNKNOWN";
    const safeDescription = unsanitizedDescription ? sanitize(unsanitizedDescription) : null;
    const queryParams = new URLSearchParams();
    queryParams.set("error", safeCode);
    if (unsanitizedDescription) queryParams.set("error_description", unsanitizedDescription);
    const options = c.context.options;
    const errorURL = options.onAPIError?.errorURL;
    if (errorURL) return new Response(null, {
        status: 302,
        headers: {
            Location: `${errorURL}${errorURL.includes("?") ? "&" : "?"}${queryParams.toString()}`
        }
    });
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__f__as__isProduction$3e$__["isProduction"] && !options.onAPIError?.customizeDefaultErrorPage) return new Response(null, {
        status: 302,
        headers: {
            Location: `/?${queryParams.toString()}`
        }
    });
    return new Response(html(c.context.options, safeCode, safeDescription), {
        headers: {
            "Content-Type": "text/html"
        }
    });
});
//#endregion
//#region src/api/routes/ok.ts
const ok = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/ok", {
    method: "GET",
    metadata: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2d$DBbaShi0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"],
        openapi: {
            description: "Check if the API is working",
            responses: {
                "200": {
                    description: "API is working",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    ok: {
                                        type: "boolean",
                                        description: "Indicates if the API is working"
                                    }
                                },
                                required: [
                                    "ok"
                                ]
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    return ctx.json({
        ok: true
    });
});
//#endregion
//#region src/api/routes/reset-password.ts
function redirectError(ctx, callbackURL, query) {
    const url = callbackURL ? new URL(callbackURL, ctx.baseURL) : new URL(`${ctx.baseURL}/error`);
    if (query) Object.entries(query).forEach(([k, v])=>url.searchParams.set(k, v));
    return url.href;
}
function redirectCallback(ctx, callbackURL, query) {
    const url = new URL(callbackURL, ctx.baseURL);
    if (query) Object.entries(query).forEach(([k, v])=>url.searchParams.set(k, v));
    return url.href;
}
const requestPasswordReset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/request-password-reset", {
    method: "POST",
    operationId: "forgetPassword",
    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
        email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["email"]().meta({
            description: "The email address of the user to send a password reset email to"
        }),
        redirectTo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The URL to redirect the user to reset their password. If the token isn't valid or expired, it'll be redirected with a query parameter `?error=INVALID_TOKEN`. If the token is valid, it'll be redirected with a query parameter `?token=VALID_TOKEN"
        }).optional()
    }),
    metadata: {
        openapi: {
            operationId: "forgetPassword",
            description: "Send a password reset email to the user",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    status: {
                                        type: "boolean"
                                    },
                                    message: {
                                        type: "string"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    if (!ctx.context.options.emailAndPassword?.sendResetPassword) {
        ctx.context.logger.error("Reset password isn't enabled.Please pass an emailAndPassword.sendResetPassword function in your auth config!");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "Reset password isn't enabled"
        });
    }
    const { email, redirectTo } = ctx.body;
    const user = await ctx.context.internalAdapter.findUserByEmail(email, {
        includeAccounts: true
    });
    if (!user) {
        /**
		* We simulate the verification token generation and the database lookup
		* to mitigate timing attacks.
		*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2d$DBbaShi0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(24);
        await ctx.context.internalAdapter.findVerificationValue("dummy-verification-token");
        ctx.context.logger.error("Reset Password: User not found", {
            email
        });
        return ctx.json({
            status: true,
            message: "If this email exists in our system, check your email for the reset link"
        });
    }
    const expiresAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u"])(ctx.context.options.emailAndPassword.resetPasswordTokenExpiresIn || 3600 * 1, "sec");
    const verificationToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2d$DBbaShi0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(24);
    await ctx.context.internalAdapter.createVerificationValue({
        value: user.user.id,
        identifier: `reset-password:${verificationToken}`,
        expiresAt
    });
    const callbackURL = redirectTo ? encodeURIComponent(redirectTo) : "";
    const url = `${ctx.context.baseURL}/reset-password/${verificationToken}?callbackURL=${callbackURL}`;
    /**
	* We send the email in the background to prevent timing attacks.
	* This is to ensure that the response time is consistent regardless of whether the email was sent or not.
	*/ ctx.context.options.emailAndPassword.sendResetPassword({
        user: user.user,
        url,
        token: verificationToken
    }, ctx.request).catch((e)=>{
        ctx.context.logger.error("Failed to send reset password email", e);
    });
    return ctx.json({
        status: true,
        message: "If this email exists in our system, check your email for the reset link"
    });
});
const requestPasswordResetCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/reset-password/:token", {
    method: "GET",
    operationId: "forgetPasswordCallback",
    query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
        callbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The URL to redirect the user to reset their password"
        })
    }),
    use: [
        originCheck((ctx)=>ctx.query.callbackURL)
    ],
    metadata: {
        openapi: {
            operationId: "resetPasswordCallback",
            description: "Redirects the user to the callback URL with the token",
            parameters: [
                {
                    name: "token",
                    in: "path",
                    required: true,
                    description: "The token to reset the password",
                    schema: {
                        type: "string"
                    }
                },
                {
                    name: "callbackURL",
                    in: "query",
                    required: true,
                    description: "The URL to redirect the user to reset their password",
                    schema: {
                        type: "string"
                    }
                }
            ],
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    token: {
                                        type: "string"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    const { token } = ctx.params;
    const { callbackURL } = ctx.query;
    if (!token || !callbackURL) throw ctx.redirect(redirectError(ctx.context, callbackURL, {
        error: "INVALID_TOKEN"
    }));
    const verification = await ctx.context.internalAdapter.findVerificationValue(`reset-password:${token}`);
    if (!verification || verification.expiresAt < /* @__PURE__ */ new Date()) throw ctx.redirect(redirectError(ctx.context, callbackURL, {
        error: "INVALID_TOKEN"
    }));
    throw ctx.redirect(redirectCallback(ctx.context, callbackURL, {
        token
    }));
});
const resetPassword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/reset-password", {
    method: "POST",
    operationId: "resetPassword",
    query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
        token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().optional()
    }).optional(),
    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
        newPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The new password to set"
        }),
        token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The token to reset the password"
        }).optional()
    }),
    metadata: {
        openapi: {
            operationId: "resetPassword",
            description: "Reset the password for a user",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    status: {
                                        type: "boolean"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    const token = ctx.body.token || ctx.query?.token;
    if (!token) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].INVALID_TOKEN
    });
    const { newPassword } = ctx.body;
    const minLength = ctx.context.password?.config.minPasswordLength;
    const maxLength = ctx.context.password?.config.maxPasswordLength;
    if (newPassword.length < minLength) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].PASSWORD_TOO_SHORT
    });
    if (newPassword.length > maxLength) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].PASSWORD_TOO_LONG
    });
    const id = `reset-password:${token}`;
    const verification = await ctx.context.internalAdapter.findVerificationValue(id);
    if (!verification || verification.expiresAt < /* @__PURE__ */ new Date()) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].INVALID_TOKEN
    });
    const userId = verification.value;
    const hashedPassword = await ctx.context.password.hash(newPassword);
    if (!(await ctx.context.internalAdapter.findAccounts(userId)).find((ac)=>ac.providerId === "credential")) await ctx.context.internalAdapter.createAccount({
        userId,
        providerId: "credential",
        password: hashedPassword,
        accountId: userId
    });
    else await ctx.context.internalAdapter.updatePassword(userId, hashedPassword);
    await ctx.context.internalAdapter.deleteVerificationValue(verification.id);
    if (ctx.context.options.emailAndPassword?.onPasswordReset) {
        const user = await ctx.context.internalAdapter.findUserById(userId);
        if (user) await ctx.context.options.emailAndPassword.onPasswordReset({
            user
        }, ctx.request);
    }
    if (ctx.context.options.emailAndPassword?.revokeSessionsOnPasswordReset) await ctx.context.internalAdapter.deleteSessions(userId);
    return ctx.json({
        status: true
    });
});
//#endregion
//#region src/api/routes/sign-in.ts
const socialSignInBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
    callbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
        description: "Callback URL to redirect to after the user has signed in"
    }).optional(),
    newUserCallbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().optional(),
    errorCallbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
        description: "Callback URL to redirect to if an error happens"
    }).optional(),
    provider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$social$2d$providers$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SocialProviderListEnum"],
    disableRedirect: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["boolean"]().meta({
        description: "Disable automatic redirection to the provider. Useful for handling the redirection yourself"
    }).optional(),
    idToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["optional"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
        token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "ID token from the provider"
        }),
        nonce: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "Nonce used to generate the token"
        }).optional(),
        accessToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "Access token from the provider"
        }).optional(),
        refreshToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "Refresh token from the provider"
        }).optional(),
        expiresAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["number"]().meta({
            description: "Expiry date of the token"
        }).optional()
    })),
    scopes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["array"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]()).meta({
        description: "Array of scopes to request from the provider. This will override the default scopes passed."
    }).optional(),
    requestSignUp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["boolean"]().meta({
        description: "Explicitly request sign-up. Useful when disableImplicitSignUp is true for this provider"
    }).optional(),
    loginHint: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
        description: "The login hint to use for the authorization code request"
    }).optional(),
    additionalData: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["record"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"](), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["any"]()).optional().meta({
        description: "Additional data to be passed through the OAuth flow"
    })
});
const signInSocial = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/sign-in/social", {
        method: "POST",
        operationId: "socialSignIn",
        body: socialSignInBodySchema,
        metadata: {
            $Infer: {
                body: {},
                returned: {}
            },
            openapi: {
                description: "Sign in with a social provider",
                operationId: "socialSignIn",
                responses: {
                    "200": {
                        description: "Success - Returns either session details or redirect URL",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    description: "Session response when idToken is provided",
                                    properties: {
                                        token: {
                                            type: "string"
                                        },
                                        user: {
                                            type: "object",
                                            $ref: "#/components/schemas/User"
                                        },
                                        url: {
                                            type: "string"
                                        },
                                        redirect: {
                                            type: "boolean",
                                            enum: [
                                                false
                                            ]
                                        }
                                    },
                                    required: [
                                        "redirect",
                                        "token",
                                        "user"
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (c)=>{
        const provider = c.context.socialProviders.find((p)=>p.id === c.body.provider);
        if (!provider) {
            c.context.logger.error("Provider not found. Make sure to add the provider in your auth config", {
                provider: c.body.provider
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("NOT_FOUND", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].PROVIDER_NOT_FOUND
            });
        }
        if (c.body.idToken) {
            if (!provider.verifyIdToken) {
                c.context.logger.error("Provider does not support id token verification", {
                    provider: c.body.provider
                });
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("NOT_FOUND", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].ID_TOKEN_NOT_SUPPORTED
                });
            }
            const { token, nonce } = c.body.idToken;
            if (!await provider.verifyIdToken(token, nonce)) {
                c.context.logger.error("Invalid id token", {
                    provider: c.body.provider
                });
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].INVALID_TOKEN
                });
            }
            const userInfo = await provider.getUserInfo({
                idToken: token,
                accessToken: c.body.idToken.accessToken,
                refreshToken: c.body.idToken.refreshToken
            });
            if (!userInfo || !userInfo?.user) {
                c.context.logger.error("Failed to get user info", {
                    provider: c.body.provider
                });
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].FAILED_TO_GET_USER_INFO
                });
            }
            if (!userInfo.user.email) {
                c.context.logger.error("User email not found", {
                    provider: c.body.provider
                });
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].USER_EMAIL_NOT_FOUND
                });
            }
            const data = await handleOAuthUserInfo(c, {
                userInfo: {
                    ...userInfo.user,
                    email: userInfo.user.email,
                    id: String(userInfo.user.id),
                    name: userInfo.user.name || "",
                    image: userInfo.user.image,
                    emailVerified: userInfo.user.emailVerified || false
                },
                account: {
                    providerId: provider.id,
                    accountId: String(userInfo.user.id),
                    accessToken: c.body.idToken.accessToken
                },
                callbackURL: c.body.callbackURL,
                disableSignUp: provider.disableImplicitSignUp && !c.body.requestSignUp || provider.disableSignUp
            });
            if (data.error) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                message: data.error
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(c, data.data);
            return c.json({
                redirect: false,
                token: data.data.session.token,
                url: void 0,
                user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"])(c.context.options, data.data.user)
            });
        }
        const { codeVerifier, state } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2d$DBbaShi0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(c, void 0, c.body.additionalData);
        const url = await provider.createAuthorizationURL({
            state,
            codeVerifier,
            redirectURI: `${c.context.baseURL}/callback/${provider.id}`,
            scopes: c.body.scopes,
            loginHint: c.body.loginHint
        });
        return c.json({
            url: url.toString(),
            redirect: !c.body.disableRedirect
        });
    });
const signInEmail = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/sign-in/email", {
        method: "POST",
        operationId: "signInEmail",
        body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
            email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
                description: "Email of the user"
            }),
            password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
                description: "Password of the user"
            }),
            callbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
                description: "Callback URL to use as a redirect for email verification"
            }).optional(),
            rememberMe: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["boolean"]().meta({
                description: "If this is false, the session will not be remembered. Default is `true`."
            }).default(true).optional()
        }),
        metadata: {
            $Infer: {
                body: {},
                returned: {}
            },
            openapi: {
                operationId: "signInEmail",
                description: "Sign in with email and password",
                responses: {
                    "200": {
                        description: "Success - Returns either session details or redirect URL",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    description: "Session response when idToken is provided",
                                    properties: {
                                        redirect: {
                                            type: "boolean",
                                            enum: [
                                                false
                                            ]
                                        },
                                        token: {
                                            type: "string",
                                            description: "Session token"
                                        },
                                        url: {
                                            type: "string",
                                            nullable: true
                                        },
                                        user: {
                                            type: "object",
                                            $ref: "#/components/schemas/User"
                                        }
                                    },
                                    required: [
                                        "redirect",
                                        "token",
                                        "user"
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        if (!ctx.context.options?.emailAndPassword?.enabled) {
            ctx.context.logger.error("Email and password is not enabled. Make sure to enable it in the options on you `auth.ts` file. Check `https://better-auth.com/docs/authentication/email-password` for more!");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: "Email and password is not enabled"
            });
        }
        const { email, password } = ctx.body;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["email"]().safeParse(email).success) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].INVALID_EMAIL
        });
        const user = await ctx.context.internalAdapter.findUserByEmail(email, {
            includeAccounts: true
        });
        if (!user) {
            await ctx.context.password.hash(password);
            ctx.context.logger.error("User not found", {
                email
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].INVALID_EMAIL_OR_PASSWORD
            });
        }
        const credentialAccount = user.accounts.find((a)=>a.providerId === "credential");
        if (!credentialAccount) {
            await ctx.context.password.hash(password);
            ctx.context.logger.error("Credential account not found", {
                email
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].INVALID_EMAIL_OR_PASSWORD
            });
        }
        const currentPassword = credentialAccount?.password;
        if (!currentPassword) {
            await ctx.context.password.hash(password);
            ctx.context.logger.error("Password not found", {
                email
            });
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].INVALID_EMAIL_OR_PASSWORD
            });
        }
        if (!await ctx.context.password.verify({
            hash: currentPassword,
            password
        })) {
            ctx.context.logger.error("Invalid password");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].INVALID_EMAIL_OR_PASSWORD
            });
        }
        if (ctx.context.options?.emailAndPassword?.requireEmailVerification && !user.user.emailVerified) {
            if (!ctx.context.options?.emailVerification?.sendVerificationEmail) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].EMAIL_NOT_VERIFIED
            });
            if (ctx.context.options?.emailVerification?.sendOnSignIn) {
                const token = await createEmailVerificationToken(ctx.context.secret, user.user.email, void 0, ctx.context.options.emailVerification?.expiresIn);
                const callbackURL = ctx.body.callbackURL ? encodeURIComponent(ctx.body.callbackURL) : encodeURIComponent("/");
                const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${callbackURL}`;
                await ctx.context.options.emailVerification.sendVerificationEmail({
                    user: user.user,
                    url,
                    token
                }, ctx.request);
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("FORBIDDEN", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].EMAIL_NOT_VERIFIED
            });
        }
        const session = await ctx.context.internalAdapter.createSession(user.user.id, ctx.body.rememberMe === false);
        if (!session) {
            ctx.context.logger.error("Failed to create session");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNAUTHORIZED", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].FAILED_TO_CREATE_SESSION
            });
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(ctx, {
            session,
            user: user.user
        }, ctx.body.rememberMe === false);
        return ctx.json({
            redirect: !!ctx.body.callbackURL,
            token: session.token,
            url: ctx.body.callbackURL,
            user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"])(ctx.context.options, user.user)
        });
    });
//#endregion
//#region src/api/routes/sign-out.ts
const signOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/sign-out", {
    method: "POST",
    operationId: "signOut",
    requireHeaders: true,
    metadata: {
        openapi: {
            operationId: "signOut",
            description: "Sign out the current user",
            responses: {
                "200": {
                    description: "Success",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    success: {
                                        type: "boolean"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    const sessionCookieToken = await ctx.getSignedCookie(ctx.context.authCookies.sessionToken.name, ctx.context.secret);
    if (sessionCookieToken) try {
        await ctx.context.internalAdapter.deleteSession(sessionCookieToken);
    } catch (e) {
        ctx.context.logger.error("Failed to delete session from database", e);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(ctx);
    return ctx.json({
        success: true
    });
});
//#endregion
//#region src/api/routes/sign-up.ts
const signUpEmail = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/sign-up/email", {
        method: "POST",
        operationId: "signUpWithEmailAndPassword",
        body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["record"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"](), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["any"]()),
        metadata: {
            $Infer: {
                body: {},
                returned: {}
            },
            openapi: {
                operationId: "signUpWithEmailAndPassword",
                description: "Sign up a user using email and password",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string",
                                        description: "The name of the user"
                                    },
                                    email: {
                                        type: "string",
                                        description: "The email of the user"
                                    },
                                    password: {
                                        type: "string",
                                        description: "The password of the user"
                                    },
                                    image: {
                                        type: "string",
                                        description: "The profile image URL of the user"
                                    },
                                    callbackURL: {
                                        type: "string",
                                        description: "The URL to use for email verification callback"
                                    },
                                    rememberMe: {
                                        type: "boolean",
                                        description: "If this is false, the session will not be remembered. Default is `true`."
                                    }
                                },
                                required: [
                                    "name",
                                    "email",
                                    "password"
                                ]
                            }
                        }
                    }
                },
                responses: {
                    "200": {
                        description: "Successfully created user",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        token: {
                                            type: "string",
                                            nullable: true,
                                            description: "Authentication token for the session"
                                        },
                                        user: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "string",
                                                    description: "The unique identifier of the user"
                                                },
                                                email: {
                                                    type: "string",
                                                    format: "email",
                                                    description: "The email address of the user"
                                                },
                                                name: {
                                                    type: "string",
                                                    description: "The name of the user"
                                                },
                                                image: {
                                                    type: "string",
                                                    format: "uri",
                                                    nullable: true,
                                                    description: "The profile image URL of the user"
                                                },
                                                emailVerified: {
                                                    type: "boolean",
                                                    description: "Whether the email has been verified"
                                                },
                                                createdAt: {
                                                    type: "string",
                                                    format: "date-time",
                                                    description: "When the user was created"
                                                },
                                                updatedAt: {
                                                    type: "string",
                                                    format: "date-time",
                                                    description: "When the user was last updated"
                                                }
                                            },
                                            required: [
                                                "id",
                                                "email",
                                                "name",
                                                "emailVerified",
                                                "createdAt",
                                                "updatedAt"
                                            ]
                                        }
                                    },
                                    required: [
                                        "user"
                                    ]
                                }
                            }
                        }
                    },
                    "422": {
                        description: "Unprocessable Entity. User already exists or failed to create user.",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: {
                                            type: "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__runWithTransaction$3e$__["runWithTransaction"])(ctx.context.adapter, async ()=>{
            if (!ctx.context.options.emailAndPassword?.enabled || ctx.context.options.emailAndPassword?.disableSignUp) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: "Email and password sign up is not enabled"
            });
            const body = ctx.body;
            const { name, email, password, image, callbackURL, rememberMe, ...rest } = body;
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["email"]().safeParse(email).success) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].INVALID_EMAIL
            });
            const minPasswordLength = ctx.context.password.config.minPasswordLength;
            if (password.length < minPasswordLength) {
                ctx.context.logger.error("Password is too short");
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].PASSWORD_TOO_SHORT
                });
            }
            const maxPasswordLength = ctx.context.password.config.maxPasswordLength;
            if (password.length > maxPasswordLength) {
                ctx.context.logger.error("Password is too long");
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].PASSWORD_TOO_LONG
                });
            }
            if ((await ctx.context.internalAdapter.findUserByEmail(email))?.user) {
                ctx.context.logger.info(`Sign-up attempt for existing email: ${email}`);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNPROCESSABLE_ENTITY", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL
                });
            }
            /**
		* Hash the password
		*
		* This is done prior to creating the user
		* to ensure that any plugin that
		* may break the hashing should break
		* before the user is created.
		*/ const hash = await ctx.context.password.hash(password);
            let createdUser;
            try {
                const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(ctx.context.options, rest, "create");
                createdUser = await ctx.context.internalAdapter.createUser({
                    email: email.toLowerCase(),
                    name,
                    image,
                    ...data,
                    emailVerified: false
                });
                if (!createdUser) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].FAILED_TO_CREATE_USER
                });
            } catch (e) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__d__as__isDevelopment$3e$__["isDevelopment"])()) ctx.context.logger.error("Failed to create user", e);
                if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]) throw e;
                ctx.context.logger?.error("Failed to create user", e);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNPROCESSABLE_ENTITY", {
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].FAILED_TO_CREATE_USER,
                    details: e
                });
            }
            if (!createdUser) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNPROCESSABLE_ENTITY", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].FAILED_TO_CREATE_USER
            });
            await ctx.context.internalAdapter.linkAccount({
                userId: createdUser.id,
                providerId: "credential",
                accountId: createdUser.id,
                password: hash
            });
            if (ctx.context.options.emailVerification?.sendOnSignUp || ctx.context.options.emailAndPassword.requireEmailVerification) {
                const token = await createEmailVerificationToken(ctx.context.secret, createdUser.email, void 0, ctx.context.options.emailVerification?.expiresIn);
                const callbackURL$1 = body.callbackURL ? encodeURIComponent(body.callbackURL) : encodeURIComponent("/");
                const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${callbackURL$1}`;
                const args = ctx.request ? [
                    {
                        user: createdUser,
                        url,
                        token
                    },
                    ctx.request
                ] : [
                    {
                        user: createdUser,
                        url,
                        token
                    }
                ];
                await ctx.context.options.emailVerification?.sendVerificationEmail?.(...args);
            }
            if (ctx.context.options.emailAndPassword.autoSignIn === false || ctx.context.options.emailAndPassword.requireEmailVerification) return ctx.json({
                token: null,
                user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"])(ctx.context.options, createdUser)
            });
            const session = await ctx.context.internalAdapter.createSession(createdUser.id, rememberMe === false);
            if (!session) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
                message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].FAILED_TO_CREATE_SESSION
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(ctx, {
                session,
                user: createdUser
            }, rememberMe === false);
            return ctx.json({
                token: session.token,
                user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"])(ctx.context.options, createdUser)
            });
        });
    });
//#endregion
//#region src/api/routes/update-user.ts
const updateUser = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/update-user", {
        method: "POST",
        operationId: "updateUser",
        body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["record"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "Field name must be a string"
        }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["any"]()),
        use: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$session$2d$CgfX4vv1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u"]
        ],
        metadata: {
            $Infer: {
                body: {}
            },
            openapi: {
                operationId: "updateUser",
                description: "Update the current user",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string",
                                        description: "The name of the user"
                                    },
                                    image: {
                                        type: "string",
                                        description: "The image of the user"
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    "200": {
                        description: "Success",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        user: {
                                            type: "object",
                                            $ref: "#/components/schemas/User"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, async (ctx)=>{
        const body = ctx.body;
        if (body.email) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].EMAIL_CAN_NOT_BE_UPDATED
        });
        const { name, image, ...rest } = body;
        const session = ctx.context.session;
        const additionalFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(ctx.context.options, rest, "update");
        if (image === void 0 && name === void 0 && Object.keys(additionalFields).length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "No fields to update"
        });
        const user = await ctx.context.internalAdapter.updateUser(session.user.id, {
            name,
            image,
            ...additionalFields
        });
        /**
	* Update the session cookie with the new user data
	*/ await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(ctx, {
            session: session.session,
            user
        });
        return ctx.json({
            status: true
        });
    });
const changePassword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/change-password", {
    method: "POST",
    operationId: "changePassword",
    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
        newPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The new password to set"
        }),
        currentPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The current password is required"
        }),
        revokeOtherSessions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["boolean"]().meta({
            description: "Must be a boolean value"
        }).optional()
    }),
    use: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$session$2d$CgfX4vv1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"]
    ],
    metadata: {
        openapi: {
            operationId: "changePassword",
            description: "Change the password of the user",
            responses: {
                "200": {
                    description: "Password successfully changed",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    token: {
                                        type: "string",
                                        nullable: true,
                                        description: "New session token if other sessions were revoked"
                                    },
                                    user: {
                                        type: "object",
                                        properties: {
                                            id: {
                                                type: "string",
                                                description: "The unique identifier of the user"
                                            },
                                            email: {
                                                type: "string",
                                                format: "email",
                                                description: "The email address of the user"
                                            },
                                            name: {
                                                type: "string",
                                                description: "The name of the user"
                                            },
                                            image: {
                                                type: "string",
                                                format: "uri",
                                                nullable: true,
                                                description: "The profile image URL of the user"
                                            },
                                            emailVerified: {
                                                type: "boolean",
                                                description: "Whether the email has been verified"
                                            },
                                            createdAt: {
                                                type: "string",
                                                format: "date-time",
                                                description: "When the user was created"
                                            },
                                            updatedAt: {
                                                type: "string",
                                                format: "date-time",
                                                description: "When the user was last updated"
                                            }
                                        },
                                        required: [
                                            "id",
                                            "email",
                                            "name",
                                            "emailVerified",
                                            "createdAt",
                                            "updatedAt"
                                        ]
                                    }
                                },
                                required: [
                                    "user"
                                ]
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    const { newPassword, currentPassword, revokeOtherSessions: revokeOtherSessions$1 } = ctx.body;
    const session = ctx.context.session;
    const minPasswordLength = ctx.context.password.config.minPasswordLength;
    if (newPassword.length < minPasswordLength) {
        ctx.context.logger.error("Password is too short");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].PASSWORD_TOO_SHORT
        });
    }
    const maxPasswordLength = ctx.context.password.config.maxPasswordLength;
    if (newPassword.length > maxPasswordLength) {
        ctx.context.logger.error("Password is too long");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].PASSWORD_TOO_LONG
        });
    }
    const account = (await ctx.context.internalAdapter.findAccounts(session.user.id)).find((account$1)=>account$1.providerId === "credential" && account$1.password);
    if (!account || !account.password) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].CREDENTIAL_ACCOUNT_NOT_FOUND
    });
    const passwordHash = await ctx.context.password.hash(newPassword);
    if (!await ctx.context.password.verify({
        hash: account.password,
        password: currentPassword
    })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].INVALID_PASSWORD
    });
    await ctx.context.internalAdapter.updateAccount(account.id, {
        password: passwordHash
    });
    let token = null;
    if (revokeOtherSessions$1) {
        await ctx.context.internalAdapter.deleteSessions(session.user.id);
        const newSession = await ctx.context.internalAdapter.createSession(session.user.id);
        if (!newSession) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("INTERNAL_SERVER_ERROR", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].FAILED_TO_GET_SESSION
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(ctx, {
            session: newSession,
            user: session.user
        });
        token = newSession.token;
    }
    return ctx.json({
        token,
        user: {
            id: session.user.id,
            email: session.user.email,
            name: session.user.name,
            image: session.user.image,
            emailVerified: session.user.emailVerified,
            createdAt: session.user.createdAt,
            updatedAt: session.user.updatedAt
        }
    });
});
const setPassword = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/set-password", {
    method: "POST",
    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
        newPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The new password to set is required"
        })
    }),
    metadata: {
        SERVER_ONLY: true
    },
    use: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$session$2d$CgfX4vv1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"]
    ]
}, async (ctx)=>{
    const { newPassword } = ctx.body;
    const session = ctx.context.session;
    const minPasswordLength = ctx.context.password.config.minPasswordLength;
    if (newPassword.length < minPasswordLength) {
        ctx.context.logger.error("Password is too short");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].PASSWORD_TOO_SHORT
        });
    }
    const maxPasswordLength = ctx.context.password.config.maxPasswordLength;
    if (newPassword.length > maxPasswordLength) {
        ctx.context.logger.error("Password is too long");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].PASSWORD_TOO_LONG
        });
    }
    const account = (await ctx.context.internalAdapter.findAccounts(session.user.id)).find((account$1)=>account$1.providerId === "credential" && account$1.password);
    const passwordHash = await ctx.context.password.hash(newPassword);
    if (!account) {
        await ctx.context.internalAdapter.linkAccount({
            userId: session.user.id,
            providerId: "credential",
            accountId: session.user.id,
            password: passwordHash
        });
        return ctx.json({
            status: true
        });
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: "user already has a password"
    });
});
const deleteUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/delete-user", {
    method: "POST",
    use: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$session$2d$CgfX4vv1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"]
    ],
    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
        callbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The callback URL to redirect to after the user is deleted"
        }).optional(),
        password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The password of the user is required to delete the user"
        }).optional(),
        token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The token to delete the user is required"
        }).optional()
    }),
    metadata: {
        openapi: {
            operationId: "deleteUser",
            description: "Delete the user",
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                callbackURL: {
                                    type: "string",
                                    description: "The callback URL to redirect to after the user is deleted"
                                },
                                password: {
                                    type: "string",
                                    description: "The user's password. Required if session is not fresh"
                                },
                                token: {
                                    type: "string",
                                    description: "The deletion verification token"
                                }
                            }
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "User deletion processed successfully",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    success: {
                                        type: "boolean",
                                        description: "Indicates if the operation was successful"
                                    },
                                    message: {
                                        type: "string",
                                        enum: [
                                            "User deleted",
                                            "Verification email sent"
                                        ],
                                        description: "Status message of the deletion process"
                                    }
                                },
                                required: [
                                    "success",
                                    "message"
                                ]
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    if (!ctx.context.options.user?.deleteUser?.enabled) {
        ctx.context.logger.error("Delete user is disabled. Enable it in the options");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("NOT_FOUND");
    }
    const session = ctx.context.session;
    if (ctx.body.password) {
        const account = (await ctx.context.internalAdapter.findAccounts(session.user.id)).find((account$1)=>account$1.providerId === "credential" && account$1.password);
        if (!account || !account.password) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].CREDENTIAL_ACCOUNT_NOT_FOUND
        });
        if (!await ctx.context.password.verify({
            hash: account.password,
            password: ctx.body.password
        })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].INVALID_PASSWORD
        });
    }
    if (ctx.body.token) {
        await deleteUserCallback({
            ...ctx,
            query: {
                token: ctx.body.token
            }
        });
        return ctx.json({
            success: true,
            message: "User deleted"
        });
    }
    if (ctx.context.options.user.deleteUser?.sendDeleteAccountVerification) {
        const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2d$BQxYXGGX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(32, "0-9", "a-z");
        await ctx.context.internalAdapter.createVerificationValue({
            value: session.user.id,
            identifier: `delete-account-${token}`,
            expiresAt: new Date(Date.now() + (ctx.context.options.user.deleteUser?.deleteTokenExpiresIn || 3600 * 24) * 1e3)
        });
        const url = `${ctx.context.baseURL}/delete-user/callback?token=${token}&callbackURL=${ctx.body.callbackURL || "/"}`;
        await ctx.context.options.user.deleteUser.sendDeleteAccountVerification({
            user: session.user,
            url,
            token
        }, ctx.request);
        return ctx.json({
            success: true,
            message: "Verification email sent"
        });
    }
    if (!ctx.body.password && ctx.context.sessionConfig.freshAge !== 0) {
        const currentAge = new Date(session.session.createdAt).getTime();
        const freshAge = ctx.context.sessionConfig.freshAge * 1e3;
        if (Date.now() - currentAge > freshAge * 1e3) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].SESSION_EXPIRED
        });
    }
    const beforeDelete = ctx.context.options.user.deleteUser?.beforeDelete;
    if (beforeDelete) await beforeDelete(session.user, ctx.request);
    await ctx.context.internalAdapter.deleteUser(session.user.id);
    await ctx.context.internalAdapter.deleteSessions(session.user.id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(ctx);
    const afterDelete = ctx.context.options.user.deleteUser?.afterDelete;
    if (afterDelete) await afterDelete(session.user, ctx.request);
    return ctx.json({
        success: true,
        message: "User deleted"
    });
});
const deleteUserCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/delete-user/callback", {
    method: "GET",
    query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
        token: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The token to verify the deletion request"
        }),
        callbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The URL to redirect to after deletion"
        }).optional()
    }),
    use: [
        originCheck((ctx)=>ctx.query.callbackURL)
    ],
    metadata: {
        openapi: {
            description: "Callback to complete user deletion with verification token",
            responses: {
                "200": {
                    description: "User successfully deleted",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    success: {
                                        type: "boolean",
                                        description: "Indicates if the deletion was successful"
                                    },
                                    message: {
                                        type: "string",
                                        enum: [
                                            "User deleted"
                                        ],
                                        description: "Confirmation message"
                                    }
                                },
                                required: [
                                    "success",
                                    "message"
                                ]
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    if (!ctx.context.options.user?.deleteUser?.enabled) {
        ctx.context.logger.error("Delete user is disabled. Enable it in the options");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("NOT_FOUND");
    }
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$session$2d$CgfX4vv1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(ctx);
    if (!session) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("NOT_FOUND", {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].FAILED_TO_GET_USER_INFO
    });
    const token = await ctx.context.internalAdapter.findVerificationValue(`delete-account-${ctx.query.token}`);
    if (!token || token.expiresAt < /* @__PURE__ */ new Date()) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("NOT_FOUND", {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].INVALID_TOKEN
    });
    if (token.value !== session.user.id) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("NOT_FOUND", {
        message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].INVALID_TOKEN
    });
    const beforeDelete = ctx.context.options.user.deleteUser?.beforeDelete;
    if (beforeDelete) await beforeDelete(session.user, ctx.request);
    await ctx.context.internalAdapter.deleteUser(session.user.id);
    await ctx.context.internalAdapter.deleteSessions(session.user.id);
    await ctx.context.internalAdapter.deleteAccounts(session.user.id);
    await ctx.context.internalAdapter.deleteVerificationValue(token.id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(ctx);
    const afterDelete = ctx.context.options.user.deleteUser?.afterDelete;
    if (afterDelete) await afterDelete(session.user, ctx.request);
    if (ctx.query.callbackURL) throw ctx.redirect(ctx.query.callbackURL || "/");
    return ctx.json({
        success: true,
        message: "User deleted"
    });
});
const changeEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$api$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAuthEndpoint"])("/change-email", {
    method: "POST",
    body: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["object"]({
        newEmail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["email"]().meta({
            description: "The new email address to set must be a valid email address"
        }),
        callbackURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$13$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$schemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["string"]().meta({
            description: "The URL to redirect to after email verification"
        }).optional()
    }),
    use: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$session$2d$CgfX4vv1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"]
    ],
    metadata: {
        openapi: {
            operationId: "changeEmail",
            responses: {
                "200": {
                    description: "Email change request processed successfully",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    user: {
                                        type: "object",
                                        $ref: "#/components/schemas/User"
                                    },
                                    status: {
                                        type: "boolean",
                                        description: "Indicates if the request was successful"
                                    },
                                    message: {
                                        type: "string",
                                        enum: [
                                            "Email updated",
                                            "Verification email sent"
                                        ],
                                        description: "Status message of the email change process",
                                        nullable: true
                                    }
                                },
                                required: [
                                    "status"
                                ]
                            }
                        }
                    }
                },
                "422": {
                    description: "Unprocessable Entity. Email already exists",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: {
                                        type: "string"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}, async (ctx)=>{
    if (!ctx.context.options.user?.changeEmail?.enabled) {
        ctx.context.logger.error("Change email is disabled.");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "Change email is disabled"
        });
    }
    const newEmail = ctx.body.newEmail.toLowerCase();
    if (newEmail === ctx.context.session.user.email) {
        ctx.context.logger.error("Email is the same");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "Email is the same"
        });
    }
    if (await ctx.context.internalAdapter.findUserByEmail(newEmail)) {
        ctx.context.logger.error("Email already exists");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("UNPROCESSABLE_ENTITY", {
            message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"].USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL
        });
    }
    /**
	* If the email is not verified, we can update the email if the option is enabled
	*/ if (ctx.context.session.user.emailVerified !== true && ctx.context.options.user.changeEmail.updateEmailWithoutVerification) {
        await ctx.context.internalAdapter.updateUserByEmail(ctx.context.session.user.email, {
            email: newEmail
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"])(ctx, {
            session: ctx.context.session.session,
            user: {
                ...ctx.context.session.user,
                email: newEmail
            }
        });
        if (ctx.context.options.emailVerification?.sendVerificationEmail) {
            const token$1 = await createEmailVerificationToken(ctx.context.secret, newEmail, void 0, ctx.context.options.emailVerification?.expiresIn);
            const url$1 = `${ctx.context.baseURL}/verify-email?token=${token$1}&callbackURL=${ctx.body.callbackURL || "/"}`;
            await ctx.context.options.emailVerification.sendVerificationEmail({
                user: {
                    ...ctx.context.session.user,
                    email: newEmail
                },
                url: url$1,
                token: token$1
            }, ctx.request);
        }
        return ctx.json({
            status: true
        });
    }
    if (ctx.context.session.user.emailVerified && (ctx.context.options.user.changeEmail.sendChangeEmailConfirmation || ctx.context.options.user.changeEmail.sendChangeEmailVerification)) {
        const token$1 = await createEmailVerificationToken(ctx.context.secret, ctx.context.session.user.email, newEmail, ctx.context.options.emailVerification?.expiresIn, {
            requestType: "change-email-confirmation"
        });
        const url$1 = `${ctx.context.baseURL}/verify-email?token=${token$1}&callbackURL=${ctx.body.callbackURL || "/"}`;
        const sendFn = ctx.context.options.user.changeEmail.sendChangeEmailConfirmation || ctx.context.options.user.changeEmail.sendChangeEmailVerification;
        if (sendFn) await sendFn({
            user: ctx.context.session.user,
            newEmail,
            url: url$1,
            token: token$1
        }, ctx.request);
        return ctx.json({
            status: true
        });
    }
    if (!ctx.context.options.emailVerification?.sendVerificationEmail) {
        ctx.context.logger.error("Verification email isn't enabled.");
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
            message: "Verification email isn't enabled"
        });
    }
    const token = await createEmailVerificationToken(ctx.context.secret, ctx.context.session.user.email, newEmail, ctx.context.options.emailVerification?.expiresIn, {
        requestType: "change-email-verification"
    });
    const url = `${ctx.context.baseURL}/verify-email?token=${token}&callbackURL=${ctx.body.callbackURL || "/"}`;
    await ctx.context.options.emailVerification.sendVerificationEmail({
        user: {
            ...ctx.context.session.user,
            email: newEmail
        },
        url,
        token
    }, ctx.request);
    return ctx.json({
        status: true
    });
});
//#endregion
//#region src/api/to-auth-endpoints.ts
const defuReplaceArrays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$defu$40$6$2e$1$2e$4$2f$node_modules$2f$defu$2f$dist$2f$defu$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDefu"])((obj, key, value)=>{
    if (Array.isArray(obj[key]) && Array.isArray(value)) {
        obj[key] = value;
        return true;
    }
});
function toAuthEndpoints(endpoints, ctx) {
    const api = {};
    for (const [key, endpoint] of Object.entries(endpoints)){
        api[key] = async (context)=>{
            const run = async ()=>{
                const authContext = await ctx;
                let internalContext = {
                    ...context,
                    context: {
                        ...authContext,
                        returned: void 0,
                        responseHeaders: void 0,
                        session: null
                    },
                    path: endpoint.path,
                    headers: context?.headers ? new Headers(context?.headers) : void 0
                };
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__f__as__runWithEndpointContext$3e$__["runWithEndpointContext"])(internalContext, async ()=>{
                    const { beforeHooks, afterHooks } = getHooks(authContext);
                    const before = await runBeforeHooks(internalContext, beforeHooks);
                    /**
					* If `before.context` is returned, it should
					* get merged with the original context
					*/ if ("context" in before && before.context && typeof before.context === "object") {
                        const { headers, ...rest } = before.context;
                        /**
						* Headers should be merged differently
						* so the hook doesn't override the whole
						* header
						*/ if (headers) headers.forEach((value, key$1)=>{
                            internalContext.headers.set(key$1, value);
                        });
                        internalContext = defuReplaceArrays(rest, internalContext);
                    } else if (before) return context?.asResponse ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toResponse"])(before, {
                        headers: context?.headers
                    }) : context?.returnHeaders ? {
                        headers: context?.headers,
                        response: before
                    } : before;
                    internalContext.asResponse = false;
                    internalContext.returnHeaders = true;
                    internalContext.returnStatus = true;
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__f__as__runWithEndpointContext$3e$__["runWithEndpointContext"])(internalContext, ()=>endpoint(internalContext)).catch((e)=>{
                        if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]) /**
						* API Errors from response are caught
						* and returned to hooks
						*/ return {
                            response: e,
                            status: e.statusCode,
                            headers: e.headers ? new Headers(e.headers) : null
                        };
                        throw e;
                    });
                    if (result && result instanceof Response) return result;
                    internalContext.context.returned = result.response;
                    internalContext.context.responseHeaders = result.headers;
                    const after = await runAfterHooks(internalContext, afterHooks);
                    if (after.response) result.response = after.response;
                    if (result.response instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__shouldPublishLog$3e$__["shouldPublishLog"])(authContext.logger.level, "debug")) result.response.stack = result.response.errorStack;
                    if (result.response instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] && !context?.asResponse) throw result.response;
                    return context?.asResponse ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toResponse"])(result.response, {
                        headers: result.headers,
                        status: result.status
                    }) : context?.returnHeaders ? context?.returnStatus ? {
                        headers: result.headers,
                        response: result.response,
                        status: result.status
                    } : {
                        headers: result.headers,
                        response: result.response
                    } : context?.returnStatus ? {
                        response: result.response,
                        status: result.status
                    } : result.response;
                });
            };
            if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__hasRequestState$3e$__["hasRequestState"])()) return run();
            else return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__l__as__runWithRequestState$3e$__["runWithRequestState"])(/* @__PURE__ */ new WeakMap(), run);
        };
        api[key].path = endpoint.path;
        api[key].options = endpoint.options;
    }
    return api;
}
async function runBeforeHooks(context, hooks) {
    let modifiedContext = {};
    for (const hook of hooks)if (hook.matcher(context)) {
        const result = await hook.handler({
            ...context,
            returnHeaders: false
        }).catch((e)=>{
            if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__shouldPublishLog$3e$__["shouldPublishLog"])(context.context.logger.level, "debug")) e.stack = e.errorStack;
            throw e;
        });
        if (result && typeof result === "object") {
            if ("context" in result && typeof result.context === "object") {
                const { headers, ...rest } = result.context;
                if (headers instanceof Headers) if (modifiedContext.headers) headers.forEach((value, key)=>{
                    modifiedContext.headers?.set(key, value);
                });
                else modifiedContext.headers = headers;
                modifiedContext = defuReplaceArrays(rest, modifiedContext);
                continue;
            }
            return result;
        }
    }
    return {
        context: modifiedContext
    };
}
async function runAfterHooks(context, hooks) {
    for (const hook of hooks)if (hook.matcher(context)) {
        const result = await hook.handler(context).catch((e)=>{
            if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__shouldPublishLog$3e$__["shouldPublishLog"])(context.context.logger.level, "debug")) e.stack = e.errorStack;
                return {
                    response: e,
                    headers: e.headers ? new Headers(e.headers) : null
                };
            }
            throw e;
        });
        if (result.headers) result.headers.forEach((value, key)=>{
            if (!context.context.responseHeaders) context.context.responseHeaders = new Headers({
                [key]: value
            });
            else if (key.toLowerCase() === "set-cookie") context.context.responseHeaders.append(key, value);
            else context.context.responseHeaders.set(key, value);
        });
        if (result.response) context.context.returned = result.response;
    }
    return {
        response: context.context.returned,
        headers: context.context.responseHeaders
    };
}
function getHooks(authContext) {
    const plugins = authContext.options.plugins || [];
    const beforeHooks = [];
    const afterHooks = [];
    if (authContext.options.hooks?.before) beforeHooks.push({
        matcher: ()=>true,
        handler: authContext.options.hooks.before
    });
    if (authContext.options.hooks?.after) afterHooks.push({
        matcher: ()=>true,
        handler: authContext.options.hooks.after
    });
    const pluginBeforeHooks = plugins.map((plugin)=>{
        if (plugin.hooks?.before) return plugin.hooks.before;
    }).filter((plugin)=>plugin !== void 0).flat();
    const pluginAfterHooks = plugins.map((plugin)=>{
        if (plugin.hooks?.after) return plugin.hooks.after;
    }).filter((plugin)=>plugin !== void 0).flat();
    /**
	* Add plugin added hooks at last
	*/ if (pluginBeforeHooks.length) beforeHooks.push(...pluginBeforeHooks);
    if (pluginAfterHooks.length) afterHooks.push(...pluginAfterHooks);
    return {
        beforeHooks,
        afterHooks
    };
}
//#endregion
//#region src/api/index.ts
function checkEndpointConflicts(options, logger$1) {
    const endpointRegistry = /* @__PURE__ */ new Map();
    options.plugins?.forEach((plugin)=>{
        if (plugin.endpoints) {
            for (const [key, endpoint] of Object.entries(plugin.endpoints))if (endpoint && "path" in endpoint) {
                const path = endpoint.path;
                let methods = [];
                if (endpoint.options && "method" in endpoint.options) {
                    if (Array.isArray(endpoint.options.method)) methods = endpoint.options.method;
                    else if (typeof endpoint.options.method === "string") methods = [
                        endpoint.options.method
                    ];
                }
                if (methods.length === 0) methods = [
                    "*"
                ];
                if (!endpointRegistry.has(path)) endpointRegistry.set(path, []);
                endpointRegistry.get(path).push({
                    pluginId: plugin.id,
                    endpointKey: key,
                    methods
                });
            }
        }
    });
    const conflicts = [];
    for (const [path, entries] of endpointRegistry.entries())if (entries.length > 1) {
        const methodMap = /* @__PURE__ */ new Map();
        let hasConflict = false;
        for (const entry of entries)for (const method of entry.methods){
            if (!methodMap.has(method)) methodMap.set(method, []);
            methodMap.get(method).push(entry.pluginId);
            if (methodMap.get(method).length > 1) hasConflict = true;
            if (method === "*" && entries.length > 1) hasConflict = true;
            else if (method !== "*" && methodMap.has("*")) hasConflict = true;
        }
        if (hasConflict) {
            const uniquePlugins = [
                ...new Set(entries.map((e)=>e.pluginId))
            ];
            const conflictingMethods = [];
            for (const [method, plugins] of methodMap.entries())if (plugins.length > 1 || method === "*" && entries.length > 1 || method !== "*" && methodMap.has("*")) conflictingMethods.push(method);
            conflicts.push({
                path,
                plugins: uniquePlugins,
                conflictingMethods
            });
        }
    }
    if (conflicts.length > 0) {
        const conflictMessages = conflicts.map((conflict)=>`  - "${conflict.path}" [${conflict.conflictingMethods.join(", ")}] used by plugins: ${conflict.plugins.join(", ")}`).join("\n");
        logger$1.error(`Endpoint path conflicts detected! Multiple plugins are trying to use the same endpoint paths with conflicting HTTP methods:
${conflictMessages}

To resolve this, you can:
	1. Use only one of the conflicting plugins
	2. Configure the plugins to use different paths (if supported)
	3. Ensure plugins use different HTTP methods for the same path
`);
    }
}
function getEndpoints(ctx, options) {
    const pluginEndpoints = options.plugins?.reduce((acc, plugin)=>{
        return {
            ...acc,
            ...plugin.endpoints
        };
    }, {}) ?? {};
    const middlewares = options.plugins?.map((plugin)=>plugin.middlewares?.map((m)=>{
            const middleware = async (context)=>{
                const authContext = await ctx;
                return m.middleware({
                    ...context,
                    context: {
                        ...authContext,
                        ...context.context
                    }
                });
            };
            middleware.options = m.middleware.options;
            return {
                path: m.path,
                middleware
            };
        })).filter((plugin)=>plugin !== void 0).flat() || [];
    return {
        api: toAuthEndpoints({
            signInSocial: signInSocial(),
            callbackOAuth,
            getSession: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$session$2d$CgfX4vv1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(),
            signOut,
            signUpEmail: signUpEmail(),
            signInEmail: signInEmail(),
            resetPassword,
            verifyEmail,
            sendVerificationEmail,
            changeEmail,
            changePassword,
            setPassword,
            updateUser: updateUser(),
            deleteUser,
            requestPasswordReset,
            requestPasswordResetCallback,
            listSessions: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$session$2d$CgfX4vv1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])(),
            revokeSession: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$session$2d$CgfX4vv1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["s"],
            revokeSessions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$session$2d$CgfX4vv1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"],
            revokeOtherSessions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$session$2d$CgfX4vv1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"],
            linkSocialAccount,
            listUserAccounts,
            deleteUserCallback,
            unlinkAccount,
            refreshToken,
            getAccessToken,
            accountInfo,
            ...pluginEndpoints,
            ok,
            error
        }, ctx),
        middlewares
    };
}
const router = (ctx, options)=>{
    const { api, middlewares } = getEndpoints(ctx, options);
    const basePath = new URL(ctx.baseURL).pathname;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRouter"])(api, {
        routerContext: ctx,
        openapi: {
            disabled: true
        },
        basePath,
        routerMiddleware: [
            {
                path: "/**",
                middleware: originCheckMiddleware
            },
            ...middlewares
        ],
        allowedMediaTypes: [
            "application/json"
        ],
        async onRequest (req) {
            const disabledPaths = ctx.options.disabledPaths || [];
            const path = new URL(req.url).pathname.replace(basePath, "");
            if (disabledPaths.includes(path)) return new Response("Not Found", {
                status: 404
            });
            for (const plugin of ctx.options.plugins || [])if (plugin.onRequest) {
                const response = await plugin.onRequest(req, ctx);
                if (response && "response" in response) return response.response;
                if (response && "request" in response) {
                    const rateLimitResponse$1 = await onRequestRateLimit(response.request, ctx);
                    if (rateLimitResponse$1) return rateLimitResponse$1;
                    return response.request;
                }
            }
            return onRequestRateLimit(req, ctx);
        },
        async onResponse (res) {
            for (const plugin of ctx.options.plugins || [])if (plugin.onResponse) {
                const response = await plugin.onResponse(res, ctx);
                if (response) return response.response;
            }
            return res;
        },
        onError (e) {
            if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"] && e.status === "FOUND") return;
            if (options.onAPIError?.throw) throw e;
            if (options.onAPIError?.onError) {
                options.onAPIError.onError(e, ctx);
                return;
            }
            const optLogLevel = options.logger?.level;
            const log = optLogLevel === "error" || optLogLevel === "warn" || optLogLevel === "debug" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__["logger"] : void 0;
            if (options.logger?.disabled !== true) {
                if (e && typeof e === "object" && "message" in e && typeof e.message === "string") {
                    if (e.message.includes("no column") || e.message.includes("column") || e.message.includes("relation") || e.message.includes("table") || e.message.includes("does not exist")) {
                        ctx.logger?.error(e.message);
                        return;
                    }
                }
                if (e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]) {
                    if (e.status === "INTERNAL_SERVER_ERROR") ctx.logger.error(e.status, e);
                    log?.error(e.message);
                } else ctx.logger?.error(e && typeof e === "object" && "name" in e ? e.name : "", e);
            }
        }
    });
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/password-DBH2q5D6.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>validatePassword,
    "t",
    ()=>checkPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.0/node_modules/better-call/dist/index.js [app-rsc] (ecmascript)");
;
//#region src/utils/password.ts
async function validatePassword(ctx, data) {
    const credentialAccount = (await ctx.context.internalAdapter.findAccounts(data.userId))?.find((account)=>account.providerId === "credential");
    const currentPassword = credentialAccount?.password;
    if (!credentialAccount || !currentPassword) return false;
    return await ctx.context.password.verify({
        hash: currentPassword,
        password: data.password
    });
}
async function checkPassword(userId, c) {
    const credentialAccount = (await c.context.internalAdapter.findAccounts(userId))?.find((account)=>account.providerId === "credential");
    const currentPassword = credentialAccount?.password;
    if (!credentialAccount || !currentPassword || !c.body.password) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: "No password credential found"
    });
    if (!await c.context.password.verify({
        hash: currentPassword,
        password: c.body.password
    })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]("BAD_REQUEST", {
        message: "Invalid password"
    });
    return true;
}
;
}),
"[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/base-zB21ymNq.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>createAuthContext,
    "t",
    ()=>createBetterAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$model$2d$name$2d$D4DUV7S2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/get-model-name-D4DUV7S2.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$migration$2d$6ewabxRC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/get-migration-6ewabxRC.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2d$DBbaShi0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/utils-DBbaShi0.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2d$BQxYXGGX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/crypto-BQxYXGGX.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$url$2d$BLNRhCPO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/url-BLNRhCPO.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2d$q2sbQ7PT$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/api-q2sbQ7PT.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/cookies-D_dksn7B.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$password$2d$DBH2q5D6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/password-DBH2q5D6.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/context/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__runWithAdapter$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/context-DgQ9XGBl.mjs [app-rsc] (ecmascript) <export r as runWithAdapter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__createLogger$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env-DwlNAN_D.mjs [app-rsc] (ecmascript) <export n as createLogger>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env-DwlNAN_D.mjs [app-rsc] (ecmascript) <export c as env>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__f__as__isProduction$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env-DwlNAN_D.mjs [app-rsc] (ecmascript) <export f as isProduction>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__p__as__isTest$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env-DwlNAN_D.mjs [app-rsc] (ecmascript) <export p as isTest>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/error/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/error-BhAKg8LX.mjs [app-rsc] (ecmascript) <export n as BASE_ERROR_CODES>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/error-BhAKg8LX.mjs [app-rsc] (ecmascript) <export t as BetterAuthError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$social$2d$providers$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/social-providers/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$telemetry$40$1$2e$4$2e$3_$40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$f_716ed6e965f3d3502ec9a2e822dbc737$2f$node_modules$2f40$better$2d$auth$2f$telemetry$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+telemetry@1.4.3_@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-f_716ed6e965f3d3502ec9a2e822dbc737/node_modules/@better-auth/telemetry/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$defu$40$6$2e$1$2e$4$2f$node_modules$2f$defu$2f$dist$2f$defu$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
//#region src/utils/constants.ts
const DEFAULT_SECRET = "better-auth-secret-123456789";
//#endregion
//#region src/utils/is-promise.ts
function isPromise(obj) {
    return !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
}
//#endregion
//#region src/context/helpers.ts
async function runPluginInit(ctx) {
    let options = ctx.options;
    const plugins = options.plugins || [];
    let context = ctx;
    const dbHooks = [];
    for (const plugin of plugins)if (plugin.init) {
        let initPromise = plugin.init(context);
        let result;
        if (isPromise(initPromise)) result = await initPromise;
        else result = initPromise;
        if (typeof result === "object") {
            if (result.options) {
                const { databaseHooks, ...restOpts } = result.options;
                if (databaseHooks) dbHooks.push(databaseHooks);
                options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$defu$40$6$2e$1$2e$4$2f$node_modules$2f$defu$2f$dist$2f$defu$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defu"])(options, restOpts);
            }
            if (result.context) context = {
                ...context,
                ...result.context
            };
        }
    }
    dbHooks.push(options.databaseHooks);
    context.internalAdapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$migration$2d$6ewabxRC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"])(context.adapter, {
        options,
        logger: context.logger,
        hooks: dbHooks.filter((u)=>u !== void 0),
        generateId: context.generateId
    });
    context.options = options;
    return {
        context
    };
}
function getInternalPlugins(options) {
    const plugins = [];
    if (options.advanced?.crossSubDomainCookies?.enabled) {}
    return plugins;
}
function getTrustedOrigins(options) {
    const baseURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$url$2d$BLNRhCPO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(options.baseURL, options.basePath);
    if (!baseURL) return [];
    const trustedOrigins = [
        new URL(baseURL).origin
    ];
    if (options.trustedOrigins && Array.isArray(options.trustedOrigins)) trustedOrigins.push(...options.trustedOrigins);
    const envTrustedOrigins = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].BETTER_AUTH_TRUSTED_ORIGINS;
    if (envTrustedOrigins) trustedOrigins.push(...envTrustedOrigins.split(","));
    if (trustedOrigins.filter((x)=>!x).length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"]("A provided trusted origin is invalid, make sure your trusted origins list is properly defined.");
    return trustedOrigins;
}
//#endregion
//#region src/context/create-context.ts
async function createAuthContext(adapter, options, getDatabaseType) {
    if (!options.database) options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$defu$40$6$2e$1$2e$4$2f$node_modules$2f$defu$2f$dist$2f$defu$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(options, {
        session: {
            cookieCache: {
                enabled: true,
                strategy: "jwe",
                refreshCache: true
            }
        },
        account: {
            storeStateStrategy: "cookie",
            storeAccountCookie: true
        }
    });
    const plugins = options.plugins || [];
    const internalPlugins = getInternalPlugins(options);
    const logger$1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__createLogger$3e$__["createLogger"])(options.logger);
    const baseURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$url$2d$BLNRhCPO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(options.baseURL, options.basePath);
    const secret = options.secret || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].BETTER_AUTH_SECRET || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__env$3e$__["env"].AUTH_SECRET || DEFAULT_SECRET;
    if (secret === DEFAULT_SECRET) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__f__as__isProduction$3e$__["isProduction"]) logger$1.error("You are using the default secret. Please set `BETTER_AUTH_SECRET` in your environment variables or pass `secret` in your auth config.");
    }
    options = {
        ...options,
        secret,
        baseURL: baseURL ? new URL(baseURL).origin : "",
        basePath: options.basePath || "/api/auth",
        plugins: plugins.concat(internalPlugins)
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2d$q2sbQ7PT$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["n"])(options, logger$1);
    const cookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])(options);
    const tables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$model$2d$name$2d$D4DUV7S2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"])(options);
    const providers = Object.entries(options.socialProviders || {}).map(([key, config])=>{
        if (config == null) return null;
        if (config.enabled === false) return null;
        if (!config.clientId) logger$1.warn(`Social provider ${key} is missing clientId or clientSecret`);
        const provider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$social$2d$providers$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["socialProviders"][key](config);
        provider.disableImplicitSignUp = config.disableImplicitSignUp;
        return provider;
    }).filter((x)=>x !== null);
    const generateIdFunc = ({ model, size })=>{
        if (typeof options.advanced?.generateId === "function") return options.advanced.generateId({
            model,
            size
        });
        if (typeof options?.advanced?.database?.generateId === "function") return options.advanced.database.generateId({
            model,
            size
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2d$DBbaShi0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(size);
    };
    const { publish } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$telemetry$40$1$2e$4$2e$3_$40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$f_716ed6e965f3d3502ec9a2e822dbc737$2f$node_modules$2f40$better$2d$auth$2f$telemetry$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTelemetry"])(options, {
        adapter: adapter.id,
        database: typeof options.database === "function" ? "adapter" : getDatabaseType(options.database)
    });
    const initOrPromise = runPluginInit({
        appName: options.appName || "Better Auth",
        socialProviders: providers,
        options,
        oauthConfig: {
            storeStateStrategy: options.account?.storeStateStrategy || "database",
            skipStateCookieCheck: !!options.account?.skipStateCookieCheck
        },
        tables,
        trustedOrigins: getTrustedOrigins(options),
        baseURL: baseURL || "",
        sessionConfig: {
            updateAge: options.session?.updateAge !== void 0 ? options.session.updateAge : 1440 * 60,
            expiresIn: options.session?.expiresIn || 3600 * 24 * 7,
            freshAge: options.session?.freshAge === void 0 ? 3600 * 24 : options.session.freshAge,
            cookieRefreshCache: (()=>{
                const refreshCache = options.session?.cookieCache?.refreshCache;
                const maxAge = options.session?.cookieCache?.maxAge || 300;
                if (refreshCache === false || refreshCache === void 0) return false;
                if (refreshCache === true) return {
                    enabled: true,
                    updateAge: Math.floor(maxAge * .2)
                };
                return {
                    enabled: true,
                    updateAge: refreshCache.updateAge !== void 0 ? refreshCache.updateAge : Math.floor(maxAge * .2)
                };
            })()
        },
        secret,
        rateLimit: {
            ...options.rateLimit,
            enabled: options.rateLimit?.enabled ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__f__as__isProduction$3e$__["isProduction"],
            window: options.rateLimit?.window || 10,
            max: options.rateLimit?.max || 100,
            storage: options.rateLimit?.storage || (options.secondaryStorage ? "secondary-storage" : "memory")
        },
        authCookies: cookies,
        logger: logger$1,
        generateId: generateIdFunc,
        session: null,
        secondaryStorage: options.secondaryStorage,
        password: {
            hash: options.emailAndPassword?.password?.hash || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2d$BQxYXGGX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"],
            verify: options.emailAndPassword?.password?.verify || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2d$BQxYXGGX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"],
            config: {
                minPasswordLength: options.emailAndPassword?.minPasswordLength || 8,
                maxPasswordLength: options.emailAndPassword?.maxPasswordLength || 128
            },
            checkPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$password$2d$DBH2q5D6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]
        },
        setNewSession (session) {
            this.newSession = session;
        },
        newSession: null,
        adapter,
        internalAdapter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$migration$2d$6ewabxRC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"])(adapter, {
            options,
            logger: logger$1,
            hooks: options.databaseHooks ? [
                options.databaseHooks
            ] : [],
            generateId: generateIdFunc
        }),
        createAuthCookie: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(options),
        async runMigrations () {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"]("runMigrations will be set by the specific init implementation");
        },
        publishTelemetry: publish,
        skipCSRFCheck: !!options.advanced?.disableCSRFCheck,
        skipOriginCheck: options.advanced?.disableOriginCheck !== void 0 ? options.advanced.disableOriginCheck : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__p__as__isTest$3e$__["isTest"])() ? true : false
    });
    let context;
    if (isPromise(initOrPromise)) ({ context } = await initOrPromise);
    else ({ context } = initOrPromise);
    return context;
}
//#endregion
//#region src/auth/base.ts
const createBetterAuth = (options, initFn)=>{
    const authContext = initFn(options);
    const { api } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2d$q2sbQ7PT$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"])(authContext, options);
    return {
        handler: async (request)=>{
            const ctx = await authContext;
            const basePath = ctx.options.basePath || "/api/auth";
            if (!ctx.options.baseURL) {
                const baseURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$url$2d$BLNRhCPO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(void 0, basePath, request, void 0, ctx.options.advanced?.trustedProxyHeaders);
                if (baseURL) {
                    ctx.baseURL = baseURL;
                    ctx.options.baseURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$url$2d$BLNRhCPO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(ctx.baseURL) || void 0;
                } else throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"]("Could not get base URL from request. Please provide a valid base URL.");
            }
            ctx.trustedOrigins = [
                ...options.trustedOrigins ? Array.isArray(options.trustedOrigins) ? options.trustedOrigins : await options.trustedOrigins(request) : [],
                ctx.options.baseURL
            ];
            const { handler } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2d$q2sbQ7PT$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["s"])(ctx, options);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__runWithAdapter$3e$__["runWithAdapter"])(ctx.adapter, ()=>handler(request));
        },
        api,
        options,
        $context: authContext,
        $ERROR_CODES: {
            ...options.plugins?.reduce((acc, plugin)=>{
                if (plugin.$ERROR_CODES) return {
                    ...acc,
                    ...plugin.$ERROR_CODES
                };
                return acc;
            }, {}),
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__BASE_ERROR_CODES$3e$__["BASE_ERROR_CODES"]
        }
    };
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/auth-CManYvvp.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>betterAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$dialect$2d$BvcuosDD$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/dialect-BvcuosDD.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$migration$2d$6ewabxRC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/get-migration-6ewabxRC.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$base$2d$zB21ymNq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/base-zB21ymNq.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/error/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/error-BhAKg8LX.mjs [app-rsc] (ecmascript) <export t as BetterAuthError>");
;
;
;
;
//#region src/context/init.ts
const init = async (options)=>{
    const adapter = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$migration$2d$6ewabxRC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u"])(options);
    const getDatabaseType = (database)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$dialect$2d$BvcuosDD$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(database) || "unknown";
    const ctx = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$base$2d$zB21ymNq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(adapter, options, getDatabaseType);
    ctx.runMigrations = async function() {
        if (!options.database || "updateMany" in options.database) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"]("Database is not provided or it's an adapter. Migrations are only supported with a database instance.");
        const { runMigrations } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$migration$2d$6ewabxRC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(options);
        await runMigrations();
    };
    return ctx;
};
//#endregion
//#region src/auth/auth.ts
/**
* Better Auth initializer for full mode (with Kysely)
*
* Check `minimal.ts` for minimal mode (without Kysely)
*/ const betterAuth = (options)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$base$2d$zB21ymNq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(options, init);
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/types-BPNyg47E.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/index.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$dialect$2d$BvcuosDD$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/dialect-BvcuosDD.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$model$2d$name$2d$D4DUV7S2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/get-model-name-D4DUV7S2.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$migration$2d$6ewabxRC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/get-migration-6ewabxRC.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2d$DBbaShi0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/utils-DBbaShi0.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2d$BQxYXGGX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/crypto-BQxYXGGX.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$jwt$2d$DzuIBp7t$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/jwt-DzuIBp7t.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$misc$2d$D8A8FGv2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/misc-D8A8FGv2.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$schema$2d$CSB7dlK0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/schema-CSB7dlK0.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$request$2d$ip$2d$RYTz2Uba$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/get-request-ip-RYTz2Uba.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/json-_HMgPUVh.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$url$2d$BLNRhCPO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/url-BLNRhCPO.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$api$2d$q2sbQ7PT$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/api-q2sbQ7PT.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$call$40$1$2e$1$2e$0$2f$node_modules$2f$better$2d$call$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__APIError__as__t$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-call@1.1.0/node_modules/better-call/dist/index.js [app-rsc] (ecmascript) <export APIError as t>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$cookies$2d$D_dksn7B$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/cookies-D_dksn7B.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$session$2d$CgfX4vv1$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/session-CgfX4vv1.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$base$2d$zB21ymNq$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/base-zB21ymNq.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$password$2d$DBH2q5D6$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/password-DBH2q5D6.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$auth$2d$CManYvvp$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/auth-CManYvvp.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$types$2d$BPNyg47E$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/types-BPNyg47E.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/context/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$context$2d$DgQ9XGBl$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__getCurrentAdapter$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/context-DgQ9XGBl.mjs [app-rsc] (ecmascript) <export t as getCurrentAdapter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$telemetry$40$1$2e$4$2e$3_$40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$f_716ed6e965f3d3502ec9a2e822dbc737$2f$node_modules$2f40$better$2d$auth$2f$telemetry$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+telemetry@1.4.3_@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-f_716ed6e965f3d3502ec9a2e822dbc737/node_modules/@better-auth/telemetry/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$db$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/db/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/error/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$oauth2$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/oauth2/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/utils/index.mjs [app-rsc] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/auth-CManYvvp.mjs [app-rsc] (ecmascript) <export t as betterAuth>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "betterAuth",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$auth$2d$CManYvvp$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$auth$2d$CManYvvp$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/auth-CManYvvp.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/adapter-factory-oT7pVV1b.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>initGetFieldAttributes,
    "r",
    ()=>initGetIdField,
    "t",
    ()=>createAdapterFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$model$2d$name$2d$D4DUV7S2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/get-model-name-D4DUV7S2.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2d$DBbaShi0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/utils-DBbaShi0.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/json-_HMgPUVh.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__TTY_COLORS$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env-DwlNAN_D.mjs [app-rsc] (ecmascript) <export t as TTY_COLORS>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__getColorDepth$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env-DwlNAN_D.mjs [app-rsc] (ecmascript) <export o as getColorDepth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/env-DwlNAN_D.mjs [app-rsc] (ecmascript) <export i as logger>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/error/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/error-BhAKg8LX.mjs [app-rsc] (ecmascript) <export t as BetterAuthError>");
;
;
;
;
;
//#region src/adapters/utils.ts
function withApplyDefault(value, field, action) {
    if (action === "update") {
        if (value === void 0 && field.onUpdate !== void 0) {
            if (typeof field.onUpdate === "function") return field.onUpdate();
            return field.onUpdate;
        }
        return value;
    }
    if (action === "create") {
        if (value === void 0 || field.required === true && value === null) {
            if (field.defaultValue !== void 0) {
                if (typeof field.defaultValue === "function") return field.defaultValue();
                return field.defaultValue;
            }
        }
    }
    return value;
}
//#endregion
//#region src/adapters/adapter-factory/get-id-field.ts
const initGetIdField = ({ usePlural, schema, disableIdGeneration, options, customIdGenerator, supportsUUIDs })=>{
    const getDefaultModelName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$model$2d$name$2d$D4DUV7S2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])({
        usePlural,
        schema
    });
    const idField = ({ customModelName, forceAllowId })=>{
        const useNumberId = options.advanced?.database?.useNumberId || options.advanced?.database?.generateId === "serial";
        const useUUIDs = options.advanced?.database?.generateId === "uuid";
        let shouldGenerateId = (()=>{
            if (disableIdGeneration) return false;
            else if (useNumberId && !forceAllowId) return false;
            else if (useUUIDs) return !supportsUUIDs;
            else return true;
        })();
        const model = getDefaultModelName(customModelName ?? "id");
        return {
            type: useNumberId ? "number" : "string",
            required: shouldGenerateId ? true : false,
            ...shouldGenerateId ? {
                defaultValue () {
                    if (disableIdGeneration) return void 0;
                    let generateId$1 = options.advanced?.database?.generateId;
                    if (generateId$1 === false || useNumberId) return void 0;
                    if (typeof generateId$1 === "function") return generateId$1({
                        model
                    });
                    if (customIdGenerator) return customIdGenerator({
                        model
                    });
                    if (generateId$1 === "uuid") return crypto.randomUUID();
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2d$DBbaShi0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])();
                }
            } : {},
            transform: {
                input: (value)=>{
                    if (!value) return void 0;
                    if (useNumberId) {
                        const numberValue = Number(value);
                        if (isNaN(numberValue)) return;
                        return numberValue;
                    }
                    if (useUUIDs) {
                        if (shouldGenerateId && !forceAllowId) return value;
                        if (disableIdGeneration) return void 0;
                        if (supportsUUIDs) return void 0;
                        if (forceAllowId && typeof value === "string") if (/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value)) return value;
                        else {
                            const stack = /* @__PURE__ */ new Error().stack?.split("\n").filter((_, i)=>i !== 1).join("\n").replace("Error:", "");
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__["logger"].warn("[Adapter Factory] - Invalid UUID value for field `id` provided when `forceAllowId` is true. Generating a new UUID.", stack);
                        }
                        if (typeof value !== "string" && !supportsUUIDs) return crypto.randomUUID();
                        return;
                    }
                    return value;
                },
                output: (value)=>{
                    if (!value) return void 0;
                    return String(value);
                }
            }
        };
    };
    return idField;
};
//#endregion
//#region src/adapters/adapter-factory/get-field-attributes.ts
const initGetFieldAttributes = ({ usePlural, schema, options, customIdGenerator, disableIdGeneration })=>{
    const getDefaultModelName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$model$2d$name$2d$D4DUV7S2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])({
        usePlural,
        schema
    });
    const getDefaultFieldName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$model$2d$name$2d$D4DUV7S2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])({
        usePlural,
        schema
    });
    const idField = initGetIdField({
        usePlural,
        schema,
        options,
        customIdGenerator,
        disableIdGeneration
    });
    const getFieldAttributes = ({ model, field })=>{
        const defaultModelName = getDefaultModelName(model);
        const defaultFieldName = getDefaultFieldName({
            field,
            model: defaultModelName
        });
        const fields = schema[defaultModelName].fields;
        fields.id = idField({
            customModelName: defaultModelName
        });
        const fieldAttributes = fields[defaultFieldName];
        if (!fieldAttributes) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"](`Field ${field} not found in model ${model}`);
        return fieldAttributes;
    };
    return getFieldAttributes;
};
//#endregion
//#region src/adapters/adapter-factory/index.ts
let debugLogs = [];
let transactionId = -1;
const createAsIsTransaction = (adapter)=>(fn)=>fn(adapter);
const createAdapterFactory = ({ adapter: customAdapter, config: cfg })=>(options)=>{
        const uniqueAdapterFactoryInstanceId = Math.random().toString(36).substring(2, 15);
        const config = {
            ...cfg,
            supportsBooleans: cfg.supportsBooleans ?? true,
            supportsDates: cfg.supportsDates ?? true,
            supportsJSON: cfg.supportsJSON ?? false,
            adapterName: cfg.adapterName ?? cfg.adapterId,
            supportsNumericIds: cfg.supportsNumericIds ?? true,
            supportsUUIDs: cfg.supportsUUIDs ?? false,
            transaction: cfg.transaction ?? false,
            disableTransformInput: cfg.disableTransformInput ?? false,
            disableTransformOutput: cfg.disableTransformOutput ?? false,
            disableTransformJoin: cfg.disableTransformJoin ?? false
        };
        if ((options.advanced?.database?.useNumberId === true || options.advanced?.database?.generateId === "serial") && config.supportsNumericIds === false) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"](`[${config.adapterName}] Your database or database adapter does not support numeric ids. Please disable "useNumberId" in your config.`);
        const schema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$model$2d$name$2d$D4DUV7S2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"])(options);
        const debugLog = (...args)=>{
            if (config.debugLogs === true || typeof config.debugLogs === "object") {
                if (typeof config.debugLogs === "object" && "isRunningAdapterTests" in config.debugLogs) {
                    if (config.debugLogs.isRunningAdapterTests) {
                        args.shift();
                        debugLogs.push({
                            instance: uniqueAdapterFactoryInstanceId,
                            args
                        });
                    }
                    return;
                }
                if (typeof config.debugLogs === "object" && config.debugLogs.logCondition && !config.debugLogs.logCondition?.()) return;
                if (typeof args[0] === "object" && "method" in args[0]) {
                    const method = args.shift().method;
                    if (typeof config.debugLogs === "object") {
                        if (method === "create" && !config.debugLogs.create) return;
                        else if (method === "update" && !config.debugLogs.update) return;
                        else if (method === "updateMany" && !config.debugLogs.updateMany) return;
                        else if (method === "findOne" && !config.debugLogs.findOne) return;
                        else if (method === "findMany" && !config.debugLogs.findMany) return;
                        else if (method === "delete" && !config.debugLogs.delete) return;
                        else if (method === "deleteMany" && !config.debugLogs.deleteMany) return;
                        else if (method === "count" && !config.debugLogs.count) return;
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__["logger"].info(`[${config.adapterName}]`, ...args);
                } else __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__["logger"].info(`[${config.adapterName}]`, ...args);
            }
        };
        const getDefaultModelName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$model$2d$name$2d$D4DUV7S2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])({
            usePlural: config.usePlural,
            schema
        });
        const getDefaultFieldName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$model$2d$name$2d$D4DUV7S2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])({
            usePlural: config.usePlural,
            schema
        });
        const getModelName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$model$2d$name$2d$D4DUV7S2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])({
            usePlural: config.usePlural,
            schema
        });
        const getFieldName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$model$2d$name$2d$D4DUV7S2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])({
            schema,
            usePlural: config.usePlural
        });
        const idField = initGetIdField({
            schema,
            options,
            usePlural: config.usePlural,
            disableIdGeneration: config.disableIdGeneration,
            customIdGenerator: config.customIdGenerator,
            supportsUUIDs: config.supportsUUIDs
        });
        const getFieldAttributes = initGetFieldAttributes({
            schema,
            options,
            usePlural: config.usePlural,
            disableIdGeneration: config.disableIdGeneration,
            customIdGenerator: config.customIdGenerator
        });
        const transformInput = async (data, defaultModelName, action, forceAllowId)=>{
            const transformedData = {};
            const fields = schema[defaultModelName].fields;
            const newMappedKeys = config.mapKeysTransformInput ?? {};
            const useNumberId = options.advanced?.database?.useNumberId || options.advanced?.database?.generateId === "serial";
            fields.id = idField({
                customModelName: defaultModelName,
                forceAllowId: forceAllowId && "id" in data
            });
            for(const field in fields){
                let value = data[field];
                const fieldAttributes = fields[field];
                let newFieldName = newMappedKeys[field] || fields[field].fieldName || field;
                if (value === void 0 && (fieldAttributes.defaultValue === void 0 && !fieldAttributes.transform?.input && !(action === "update" && fieldAttributes.onUpdate) || action === "update" && !fieldAttributes.onUpdate)) continue;
                if (fieldAttributes && fieldAttributes.type === "date" && !(value instanceof Date) && typeof value === "string") try {
                    value = new Date(value);
                } catch  {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__["logger"].error("[Adapter Factory] Failed to convert string to date", {
                        value,
                        field
                    });
                }
                let newValue = withApplyDefault(value, fieldAttributes, action);
                if (fieldAttributes.transform?.input) newValue = await fieldAttributes.transform.input(newValue);
                if (fieldAttributes.references?.field === "id" && useNumberId) if (Array.isArray(newValue)) newValue = newValue.map((x)=>x !== null ? Number(x) : null);
                else newValue = newValue !== null ? Number(newValue) : null;
                else if (config.supportsJSON === false && typeof newValue === "object" && fieldAttributes.type === "json") newValue = JSON.stringify(newValue);
                else if (config.supportsDates === false && newValue instanceof Date && fieldAttributes.type === "date") newValue = newValue.toISOString();
                else if (config.supportsBooleans === false && typeof newValue === "boolean") newValue = newValue ? 1 : 0;
                if (config.customTransformInput) newValue = config.customTransformInput({
                    data: newValue,
                    action,
                    field: newFieldName,
                    fieldAttributes,
                    model: getModelName(defaultModelName),
                    schema,
                    options
                });
                if (newValue !== void 0) transformedData[newFieldName] = newValue;
            }
            return transformedData;
        };
        const transformOutput = async (data, unsafe_model, select = [], join)=>{
            const transformSingleOutput = async (data$1, unsafe_model$1, select$1 = [])=>{
                if (!data$1) return null;
                const newMappedKeys = config.mapKeysTransformOutput ?? {};
                const transformedData$1 = {};
                const tableSchema = schema[getDefaultModelName(unsafe_model$1)].fields;
                const idKey = Object.entries(newMappedKeys).find(([_, v])=>v === "id")?.[0];
                tableSchema[idKey ?? "id"] = {
                    type: options.advanced?.database?.useNumberId || options.advanced?.database?.generateId === "serial" ? "number" : "string"
                };
                for(const key in tableSchema){
                    if (select$1.length && !select$1.includes(key)) continue;
                    const field = tableSchema[key];
                    if (field) {
                        const originalKey = field.fieldName || key;
                        let newValue = data$1[Object.entries(newMappedKeys).find(([_, v])=>v === originalKey)?.[0] || originalKey];
                        if (field.transform?.output) newValue = await field.transform.output(newValue);
                        let newFieldName = newMappedKeys[key] || key;
                        if (originalKey === "id" || field.references?.field === "id") {
                            if (typeof newValue !== "undefined" && newValue !== null) newValue = String(newValue);
                        } else if (config.supportsJSON === false && typeof newValue === "string" && field.type === "json") newValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(newValue);
                        else if (config.supportsDates === false && typeof newValue === "string" && field.type === "date") newValue = new Date(newValue);
                        else if (config.supportsBooleans === false && typeof newValue === "number" && field.type === "boolean") newValue = newValue === 1;
                        if (config.customTransformOutput) newValue = config.customTransformOutput({
                            data: newValue,
                            field: newFieldName,
                            fieldAttributes: field,
                            select: select$1,
                            model: getModelName(unsafe_model$1),
                            schema,
                            options
                        });
                        transformedData$1[newFieldName] = newValue;
                    }
                }
                return transformedData$1;
            };
            if (!join || Object.keys(join).length === 0) return await transformSingleOutput(data, unsafe_model, select);
            unsafe_model = getDefaultModelName(unsafe_model);
            let transformedData = await transformSingleOutput(data, unsafe_model, select);
            const requiredModels = Object.entries(join).map(([model, joinConfig])=>({
                    modelName: getModelName(model),
                    defaultModelName: getDefaultModelName(model),
                    joinConfig
                }));
            if (!data) return null;
            for (const { modelName, defaultModelName, joinConfig } of requiredModels){
                let joinedData = await (async ()=>{
                    if (options.experimental?.joins) return data[modelName];
                    else return await handleFallbackJoin({
                        baseModel: unsafe_model,
                        baseData: transformedData,
                        joinModel: modelName,
                        specificJoinConfig: joinConfig
                    });
                })();
                if (joinedData === void 0 || joinedData === null) joinedData = joinConfig.relation === "one-to-one" ? null : [];
                if (joinConfig.relation === "one-to-many" && !Array.isArray(joinedData)) joinedData = [
                    joinedData
                ];
                let transformed = [];
                if (Array.isArray(joinedData)) for (const item of joinedData){
                    const transformedItem = await transformSingleOutput(item, modelName, []);
                    transformed.push(transformedItem);
                }
                else {
                    const transformedItem = await transformSingleOutput(joinedData, modelName, []);
                    transformed.push(transformedItem);
                }
                transformedData[defaultModelName] = (joinConfig.relation === "one-to-one" ? transformed[0] : transformed) ?? null;
            }
            return transformedData;
        };
        const transformWhereClause = ({ model, where })=>{
            if (!where) return void 0;
            const newMappedKeys = config.mapKeysTransformInput ?? {};
            return where.map((w)=>{
                const { field: unsafe_field, value, operator = "eq", connector = "AND" } = w;
                if (operator === "in") {
                    if (!Array.isArray(value)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"]("Value must be an array");
                }
                let newValue = value;
                const defaultModelName = getDefaultModelName(model);
                const defaultFieldName = getDefaultFieldName({
                    field: unsafe_field,
                    model
                });
                const fieldName = newMappedKeys[defaultFieldName] || getFieldName({
                    field: defaultFieldName,
                    model: defaultModelName
                });
                const fieldAttr = getFieldAttributes({
                    field: defaultFieldName,
                    model: defaultModelName
                });
                const useNumberId = options.advanced?.database?.useNumberId || options.advanced?.database?.generateId === "serial";
                if (defaultFieldName === "id" || fieldAttr.references?.field === "id") {
                    if (useNumberId) if (Array.isArray(value)) newValue = value.map(Number);
                    else newValue = Number(value);
                }
                if (fieldAttr.type === "date" && value instanceof Date && !config.supportsDates) newValue = value.toISOString();
                if (fieldAttr.type === "boolean" && typeof value === "boolean" && !config.supportsBooleans) newValue = value ? 1 : 0;
                if (fieldAttr.type === "json" && typeof value === "object" && !config.supportsJSON) try {
                    newValue = JSON.stringify(value);
                } catch (error) {
                    throw new Error(`Failed to stringify JSON value for field ${fieldName}`, {
                        cause: error
                    });
                }
                return {
                    operator,
                    connector,
                    field: fieldName,
                    value: newValue
                };
            });
        };
        const transformJoinClause = (baseModel, unsanitizedJoin, select)=>{
            if (!unsanitizedJoin) return void 0;
            if (Object.keys(unsanitizedJoin).length === 0) return void 0;
            const transformedJoin = {};
            for (const [model, join] of Object.entries(unsanitizedJoin)){
                if (!join) continue;
                const defaultModelName = getDefaultModelName(model);
                const defaultBaseModelName = getDefaultModelName(baseModel);
                let foreignKeys = Object.entries(schema[defaultModelName].fields).filter(([field, fieldAttributes])=>fieldAttributes.references && getDefaultModelName(fieldAttributes.references.model) === defaultBaseModelName);
                let isForwardJoin = true;
                if (!foreignKeys.length) {
                    foreignKeys = Object.entries(schema[defaultBaseModelName].fields).filter(([field, fieldAttributes])=>fieldAttributes.references && getDefaultModelName(fieldAttributes.references.model) === defaultModelName);
                    isForwardJoin = false;
                }
                if (!foreignKeys.length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"](`No foreign key found for model ${model} and base model ${baseModel} while performing join operation.`);
                else if (foreignKeys.length > 1) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"](`Multiple foreign keys found for model ${model} and base model ${baseModel} while performing join operation. Only one foreign key is supported.`);
                const [foreignKey, foreignKeyAttributes] = foreignKeys[0];
                if (!foreignKeyAttributes.references) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"](`No references found for foreign key ${foreignKey} on model ${model} while performing join operation.`);
                let from;
                let to;
                let requiredSelectField;
                if (isForwardJoin) {
                    requiredSelectField = foreignKeyAttributes.references.field;
                    from = getFieldName({
                        model: baseModel,
                        field: requiredSelectField
                    });
                    to = getFieldName({
                        model,
                        field: foreignKey
                    });
                } else {
                    requiredSelectField = foreignKey;
                    from = getFieldName({
                        model: baseModel,
                        field: requiredSelectField
                    });
                    to = getFieldName({
                        model,
                        field: foreignKeyAttributes.references.field
                    });
                }
                if (select && !select.includes(requiredSelectField)) select.push(requiredSelectField);
                const isUnique = to === "id" ? true : foreignKeyAttributes.unique ?? false;
                let limit = options.advanced?.database?.defaultFindManyLimit ?? 100;
                if (isUnique) limit = 1;
                else if (typeof join === "object" && typeof join.limit === "number") limit = join.limit;
                transformedJoin[getModelName(model)] = {
                    on: {
                        from,
                        to
                    },
                    limit,
                    relation: isUnique ? "one-to-one" : "one-to-many"
                };
            }
            return {
                join: transformedJoin,
                select
            };
        };
        /**
	* Handle joins by making separate queries and combining results (fallback for adapters that don't support native joins).
	*/ const handleFallbackJoin = async ({ baseModel, baseData, joinModel, specificJoinConfig: joinConfig })=>{
            if (!baseData) return baseData;
            const modelName = getModelName(joinModel);
            const field = joinConfig.on.to;
            const value = baseData[getDefaultFieldName({
                field: joinConfig.on.from,
                model: baseModel
            })];
            if (value === null || value === void 0) return joinConfig.relation === "one-to-one" ? null : [];
            let result;
            const where = transformWhereClause({
                model: modelName,
                where: [
                    {
                        field,
                        value,
                        operator: "eq",
                        connector: "AND"
                    }
                ]
            });
            try {
                if (joinConfig.relation === "one-to-one") result = await adapterInstance.findOne({
                    model: modelName,
                    where
                });
                else {
                    const limit = joinConfig.limit ?? options.advanced?.database?.defaultFindManyLimit ?? 100;
                    result = await adapterInstance.findMany({
                        model: modelName,
                        where,
                        limit
                    });
                }
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__["logger"].error(`Failed to query fallback join for model ${modelName}:`, {
                    where,
                    limit: joinConfig.limit
                });
                console.error(error);
                throw error;
            }
            return result;
        };
        const adapterInstance = customAdapter({
            options,
            schema,
            debugLog,
            getFieldName,
            getModelName,
            getDefaultModelName,
            getDefaultFieldName,
            getFieldAttributes,
            transformInput,
            transformOutput,
            transformWhereClause
        });
        let lazyLoadTransaction = null;
        const adapter = {
            transaction: async (cb)=>{
                if (!lazyLoadTransaction) if (!config.transaction) lazyLoadTransaction = createAsIsTransaction(adapter);
                else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__["logger"].debug(`[${config.adapterName}] - Using provided transaction implementation.`);
                    lazyLoadTransaction = config.transaction;
                }
                return lazyLoadTransaction(cb);
            },
            create: async ({ data: unsafeData, model: unsafeModel, select, forceAllowId = false })=>{
                transactionId++;
                let thisTransactionId = transactionId;
                const model = getModelName(unsafeModel);
                unsafeModel = getDefaultModelName(unsafeModel);
                if ("id" in unsafeData && typeof unsafeData.id !== "undefined" && !forceAllowId) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__logger$3e$__["logger"].warn(`[${config.adapterName}] - You are trying to create a record with an id. This is not allowed as we handle id generation for you, unless you pass in the \`forceAllowId\` parameter. The id will be ignored.`);
                    const stack = /* @__PURE__ */ new Error().stack?.split("\n").filter((_, i)=>i !== 1).join("\n").replace("Error:", "Create method with `id` being called at:");
                    console.log(stack);
                    unsafeData.id = void 0;
                }
                debugLog({
                    method: "create"
                }, `${formatTransactionId(thisTransactionId)} ${formatStep(1, 4)}`, `${formatMethod("create")} ${formatAction("Unsafe Input")}:`, {
                    model,
                    data: unsafeData
                });
                let data = unsafeData;
                if (!config.disableTransformInput) data = await transformInput(unsafeData, unsafeModel, "create", forceAllowId);
                debugLog({
                    method: "create"
                }, `${formatTransactionId(thisTransactionId)} ${formatStep(2, 4)}`, `${formatMethod("create")} ${formatAction("Parsed Input")}:`, {
                    model,
                    data
                });
                const res = await adapterInstance.create({
                    data,
                    model
                });
                debugLog({
                    method: "create"
                }, `${formatTransactionId(thisTransactionId)} ${formatStep(3, 4)}`, `${formatMethod("create")} ${formatAction("DB Result")}:`, {
                    model,
                    res
                });
                let transformed = res;
                if (!config.disableTransformOutput) transformed = await transformOutput(res, unsafeModel, select, void 0);
                debugLog({
                    method: "create"
                }, `${formatTransactionId(thisTransactionId)} ${formatStep(4, 4)}`, `${formatMethod("create")} ${formatAction("Parsed Result")}:`, {
                    model,
                    data: transformed
                });
                return transformed;
            },
            update: async ({ model: unsafeModel, where: unsafeWhere, update: unsafeData })=>{
                transactionId++;
                let thisTransactionId = transactionId;
                unsafeModel = getDefaultModelName(unsafeModel);
                const model = getModelName(unsafeModel);
                const where = transformWhereClause({
                    model: unsafeModel,
                    where: unsafeWhere
                });
                debugLog({
                    method: "update"
                }, `${formatTransactionId(thisTransactionId)} ${formatStep(1, 4)}`, `${formatMethod("update")} ${formatAction("Unsafe Input")}:`, {
                    model,
                    data: unsafeData
                });
                let data = unsafeData;
                if (!config.disableTransformInput) data = await transformInput(unsafeData, unsafeModel, "update");
                debugLog({
                    method: "update"
                }, `${formatTransactionId(thisTransactionId)} ${formatStep(2, 4)}`, `${formatMethod("update")} ${formatAction("Parsed Input")}:`, {
                    model,
                    data
                });
                const res = await adapterInstance.update({
                    model,
                    where,
                    update: data
                });
                debugLog({
                    method: "update"
                }, `${formatTransactionId(thisTransactionId)} ${formatStep(3, 4)}`, `${formatMethod("update")} ${formatAction("DB Result")}:`, {
                    model,
                    data: res
                });
                let transformed = res;
                if (!config.disableTransformOutput) transformed = await transformOutput(res, unsafeModel, void 0, void 0);
                debugLog({
                    method: "update"
                }, `${formatTransactionId(thisTransactionId)} ${formatStep(4, 4)}`, `${formatMethod("update")} ${formatAction("Parsed Result")}:`, {
                    model,
                    data: transformed
                });
                return transformed;
            },
            updateMany: async ({ model: unsafeModel, where: unsafeWhere, update: unsafeData })=>{
                transactionId++;
                let thisTransactionId = transactionId;
                const model = getModelName(unsafeModel);
                const where = transformWhereClause({
                    model: unsafeModel,
                    where: unsafeWhere
                });
                unsafeModel = getDefaultModelName(unsafeModel);
                debugLog({
                    method: "updateMany"
                }, `${formatTransactionId(thisTransactionId)} ${formatStep(1, 4)}`, `${formatMethod("updateMany")} ${formatAction("Unsafe Input")}:`, {
                    model,
                    data: unsafeData
                });
                let data = unsafeData;
                if (!config.disableTransformInput) data = await transformInput(unsafeData, unsafeModel, "update");
                debugLog({
                    method: "updateMany"
                }, `${formatTransactionId(thisTransactionId)} ${formatStep(2, 4)}`, `${formatMethod("updateMany")} ${formatAction("Parsed Input")}:`, {
                    model,
                    data
                });
                const updatedCount = await adapterInstance.updateMany({
                    model,
                    where,
                    update: data
                });
                debugLog({
                    method: "updateMany"
                }, `${formatTransactionId(thisTransactionId)} ${formatStep(3, 4)}`, `${formatMethod("updateMany")} ${formatAction("DB Result")}:`, {
                    model,
                    data: updatedCount
                });
                debugLog({
                    method: "updateMany"
                }, `${formatTransactionId(thisTransactionId)} ${formatStep(4, 4)}`, `${formatMethod("updateMany")} ${formatAction("Parsed Result")}:`, {
                    model,
                    data: updatedCount
                });
                return updatedCount;
            },
            findOne: async ({ model: unsafeModel, where: unsafeWhere, select, join: unsafeJoin })=>{
                transactionId++;
                let thisTransactionId = transactionId;
                const model = getModelName(unsafeModel);
                const where = transformWhereClause({
                    model: unsafeModel,
                    where: unsafeWhere
                });
                unsafeModel = getDefaultModelName(unsafeModel);
                let join;
                let passJoinToAdapter = true;
                if (!config.disableTransformJoin) {
                    const result = transformJoinClause(unsafeModel, unsafeJoin, select);
                    if (result) {
                        join = result.join;
                        select = result.select;
                    }
                    if (!options.experimental?.joins && join && Object.keys(join).length > 0) passJoinToAdapter = false;
                } else join = unsafeJoin;
                debugLog({
                    method: "findOne"
                }, `${formatTransactionId(thisTransactionId)} ${formatStep(1, 3)}`, `${formatMethod("findOne")}:`, {
                    model,
                    where,
                    select,
                    join
                });
                const res = await adapterInstance.findOne({
                    model,
                    where,
                    select,
                    join: passJoinToAdapter ? join : void 0
                });
                debugLog({
                    method: "findOne"
                }, `${formatTransactionId(thisTransactionId)} ${formatStep(2, 3)}`, `${formatMethod("findOne")} ${formatAction("DB Result")}:`, {
                    model,
                    data: res
                });
                let transformed = res;
                if (!config.disableTransformOutput) transformed = await transformOutput(res, unsafeModel, select, join);
                debugLog({
                    method: "findOne"
                }, `${formatTransactionId(thisTransactionId)} ${formatStep(3, 3)}`, `${formatMethod("findOne")} ${formatAction("Parsed Result")}:`, {
                    model,
                    data: transformed
                });
                return transformed;
            },
            findMany: async ({ model: unsafeModel, where: unsafeWhere, limit: unsafeLimit, sortBy, offset, join: unsafeJoin })=>{
                transactionId++;
                let thisTransactionId = transactionId;
                const limit = unsafeLimit ?? options.advanced?.database?.defaultFindManyLimit ?? 100;
                const model = getModelName(unsafeModel);
                const where = transformWhereClause({
                    model: unsafeModel,
                    where: unsafeWhere
                });
                unsafeModel = getDefaultModelName(unsafeModel);
                let join;
                let passJoinToAdapter = true;
                if (!config.disableTransformJoin) {
                    const result = transformJoinClause(unsafeModel, unsafeJoin, void 0);
                    if (result) join = result.join;
                    if (!options.experimental?.joins && join && Object.keys(join).length > 0) passJoinToAdapter = false;
                } else join = unsafeJoin;
                debugLog({
                    method: "findMany"
                }, `${formatTransactionId(thisTransactionId)} ${formatStep(1, 3)}`, `${formatMethod("findMany")}:`, {
                    model,
                    where,
                    limit,
                    sortBy,
                    offset,
                    join
                });
                const res = await adapterInstance.findMany({
                    model,
                    where,
                    limit,
                    sortBy,
                    offset,
                    join: passJoinToAdapter ? join : void 0
                });
                debugLog({
                    method: "findMany"
                }, `${formatTransactionId(thisTransactionId)} ${formatStep(2, 3)}`, `${formatMethod("findMany")} ${formatAction("DB Result")}:`, {
                    model,
                    data: res
                });
                let transformed = res;
                if (!config.disableTransformOutput) transformed = await Promise.all(res.map(async (r)=>{
                    return await transformOutput(r, unsafeModel, void 0, join);
                }));
                debugLog({
                    method: "findMany"
                }, `${formatTransactionId(thisTransactionId)} ${formatStep(3, 3)}`, `${formatMethod("findMany")} ${formatAction("Parsed Result")}:`, {
                    model,
                    data: transformed
                });
                return transformed;
            },
            delete: async ({ model: unsafeModel, where: unsafeWhere })=>{
                transactionId++;
                let thisTransactionId = transactionId;
                const model = getModelName(unsafeModel);
                const where = transformWhereClause({
                    model: unsafeModel,
                    where: unsafeWhere
                });
                unsafeModel = getDefaultModelName(unsafeModel);
                debugLog({
                    method: "delete"
                }, `${formatTransactionId(thisTransactionId)} ${formatStep(1, 2)}`, `${formatMethod("delete")}:`, {
                    model,
                    where
                });
                await adapterInstance.delete({
                    model,
                    where
                });
                debugLog({
                    method: "delete"
                }, `${formatTransactionId(thisTransactionId)} ${formatStep(2, 2)}`, `${formatMethod("delete")} ${formatAction("DB Result")}:`, {
                    model
                });
            },
            deleteMany: async ({ model: unsafeModel, where: unsafeWhere })=>{
                transactionId++;
                let thisTransactionId = transactionId;
                const model = getModelName(unsafeModel);
                const where = transformWhereClause({
                    model: unsafeModel,
                    where: unsafeWhere
                });
                unsafeModel = getDefaultModelName(unsafeModel);
                debugLog({
                    method: "deleteMany"
                }, `${formatTransactionId(thisTransactionId)} ${formatStep(1, 2)}`, `${formatMethod("deleteMany")} ${formatAction("DeleteMany")}:`, {
                    model,
                    where
                });
                const res = await adapterInstance.deleteMany({
                    model,
                    where
                });
                debugLog({
                    method: "deleteMany"
                }, `${formatTransactionId(thisTransactionId)} ${formatStep(2, 2)}`, `${formatMethod("deleteMany")} ${formatAction("DB Result")}:`, {
                    model,
                    data: res
                });
                return res;
            },
            count: async ({ model: unsafeModel, where: unsafeWhere })=>{
                transactionId++;
                let thisTransactionId = transactionId;
                const model = getModelName(unsafeModel);
                const where = transformWhereClause({
                    model: unsafeModel,
                    where: unsafeWhere
                });
                unsafeModel = getDefaultModelName(unsafeModel);
                debugLog({
                    method: "count"
                }, `${formatTransactionId(thisTransactionId)} ${formatStep(1, 2)}`, `${formatMethod("count")}:`, {
                    model,
                    where
                });
                const res = await adapterInstance.count({
                    model,
                    where
                });
                debugLog({
                    method: "count"
                }, `${formatTransactionId(thisTransactionId)} ${formatStep(2, 2)}`, `${formatMethod("count")}:`, {
                    model,
                    data: res
                });
                return res;
            },
            createSchema: adapterInstance.createSchema ? async (_, file)=>{
                const tables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$model$2d$name$2d$D4DUV7S2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"])(options);
                if (options.secondaryStorage && !options.session?.storeSessionInDatabase) delete tables.session;
                if (options.rateLimit && options.rateLimit.storage === "database" && (typeof options.rateLimit.enabled === "undefined" || options.rateLimit.enabled === true)) tables.ratelimit = {
                    modelName: options.rateLimit.modelName ?? "ratelimit",
                    fields: {
                        key: {
                            type: "string",
                            unique: true,
                            required: true,
                            fieldName: options.rateLimit.fields?.key ?? "key"
                        },
                        count: {
                            type: "number",
                            required: true,
                            fieldName: options.rateLimit.fields?.count ?? "count"
                        },
                        lastRequest: {
                            type: "number",
                            required: true,
                            bigint: true,
                            defaultValue: ()=>Date.now(),
                            fieldName: options.rateLimit.fields?.lastRequest ?? "lastRequest"
                        }
                    }
                };
                return adapterInstance.createSchema({
                    file,
                    tables
                });
            } : void 0,
            options: {
                adapterConfig: config,
                ...adapterInstance.options ?? {}
            },
            id: config.adapterId,
            ...config.debugLogs?.isRunningAdapterTests ? {
                adapterTestDebugLogs: {
                    resetDebugLogs () {
                        debugLogs = debugLogs.filter((log)=>log.instance !== uniqueAdapterFactoryInstanceId);
                    },
                    printDebugLogs () {
                        const separator = `─`.repeat(80);
                        const logs = debugLogs.filter((log$1)=>log$1.instance === uniqueAdapterFactoryInstanceId);
                        if (logs.length === 0) return;
                        let log = logs.reverse().map((log$1)=>{
                            log$1.args[0] = `\n${log$1.args[0]}`;
                            return [
                                ...log$1.args,
                                "\n"
                            ];
                        }).reduce((prev, curr)=>{
                            return [
                                ...curr,
                                ...prev
                            ];
                        }, [
                            `\n${separator}`
                        ]);
                        console.log(...log);
                    }
                }
            } : {}
        };
        return adapter;
    };
function formatTransactionId(transactionId$1) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__getColorDepth$3e$__["getColorDepth"])() < 8) return `#${transactionId$1}`;
    return `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__TTY_COLORS$3e$__["TTY_COLORS"].fg.magenta}#${transactionId$1}${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__TTY_COLORS$3e$__["TTY_COLORS"].reset}`;
}
function formatStep(step, total) {
    return `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__TTY_COLORS$3e$__["TTY_COLORS"].bg.black}${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__TTY_COLORS$3e$__["TTY_COLORS"].fg.yellow}[${step}/${total}]${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__TTY_COLORS$3e$__["TTY_COLORS"].reset}`;
}
function formatMethod(method) {
    return `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__TTY_COLORS$3e$__["TTY_COLORS"].bright}${method}${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__TTY_COLORS$3e$__["TTY_COLORS"].reset}`;
}
function formatAction(action) {
    return `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__TTY_COLORS$3e$__["TTY_COLORS"].dim}(${action})${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2d$DwlNAN_D$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__TTY_COLORS$3e$__["TTY_COLORS"].reset}`;
}
;
}),
"[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/adapters/prisma-adapter/index.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prismaAdapter",
    ()=>prismaAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$get$2d$model$2d$name$2d$D4DUV7S2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/get-model-name-D4DUV7S2.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2d$DBbaShi0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/utils-DBbaShi0.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$crypto$2d$BQxYXGGX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/crypto-BQxYXGGX.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$jwt$2d$DzuIBp7t$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/jwt-DzuIBp7t.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$misc$2d$D8A8FGv2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/misc-D8A8FGv2.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$json$2d$_HMgPUVh$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/json-_HMgPUVh.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapter$2d$factory$2d$oT7pVV1b$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.4.3_next@16.0.10_@babel+core@7.28.5_react-dom@19.2.3_react@19.2.3__react@_c908334479ec86f73ef564b585e366bb/node_modules/better-auth/dist/adapter-factory-oT7pVV1b.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/error/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.4.3_@better-auth+utils@0.3.0_@better-fetch+fetch@1.1.18_better-call_7a5952b35df00fad17cc15ec5f00878b/node_modules/@better-auth/core/dist/error-BhAKg8LX.mjs [app-rsc] (ecmascript) <export t as BetterAuthError>");
;
;
;
;
;
;
;
;
//#region src/adapters/prisma-adapter/prisma-adapter.ts
const prismaAdapter = (prisma, config)=>{
    let lazyOptions = null;
    const createCustomAdapter = (prisma$1)=>({ getFieldName, getModelName, getFieldAttributes, getDefaultModelName, schema })=>{
            const db = prisma$1;
            const convertSelect = (select, model, join)=>{
                if (!select && !join) return void 0;
                let result = {};
                if (select) for (const field of select)result[getFieldName({
                    model,
                    field
                })] = true;
                if (join) {
                    if (!select) {
                        const fields = schema[getDefaultModelName(model)]?.fields || {};
                        fields.id = {
                            type: "string"
                        };
                        for (const field of Object.keys(fields))result[getFieldName({
                            model,
                            field
                        })] = true;
                    }
                    for (const [joinModel, joinAttr] of Object.entries(join)){
                        const key = getJoinKeyName(model, getModelName(joinModel), schema);
                        if (joinAttr.relation === "one-to-one") result[key] = true;
                        else result[key] = {
                            take: joinAttr.limit
                        };
                    }
                }
                return result;
            };
            /**
		* Build the join key name based on whether the foreign field is unique or not.
		* If unique, use singular. Otherwise, pluralize (add 's').
		*/ const getJoinKeyName = (baseModel, joinedModel, schema$1)=>{
                try {
                    const defaultBaseModelName = getDefaultModelName(baseModel);
                    const defaultJoinedModelName = getDefaultModelName(joinedModel);
                    const key = getModelName(joinedModel).toLowerCase();
                    let foreignKeys = Object.entries(schema$1[defaultJoinedModelName]?.fields || {}).filter(([_field, fieldAttributes])=>fieldAttributes.references && getDefaultModelName(fieldAttributes.references.model) === defaultBaseModelName);
                    if (foreignKeys.length > 0) {
                        const [_foreignKey, foreignKeyAttributes] = foreignKeys[0];
                        return foreignKeyAttributes?.unique === true || config.usePlural === true ? key : `${key}s`;
                    }
                    foreignKeys = Object.entries(schema$1[defaultBaseModelName]?.fields || {}).filter(([_field, fieldAttributes])=>fieldAttributes.references && getDefaultModelName(fieldAttributes.references.model) === defaultJoinedModelName);
                    if (foreignKeys.length > 0) return key;
                } catch  {}
                return `${getModelName(joinedModel).toLowerCase()}s`;
            };
            function operatorToPrismaOperator(operator) {
                switch(operator){
                    case "starts_with":
                        return "startsWith";
                    case "ends_with":
                        return "endsWith";
                    case "ne":
                        return "not";
                    case "not_in":
                        return "notIn";
                    default:
                        return operator;
                }
            }
            const convertWhereClause = (model, where)=>{
                if (!where || !where.length) return {};
                const buildSingleCondition = (w)=>{
                    const fieldName = getFieldName({
                        model,
                        field: w.field
                    });
                    if (w.operator === "ne" && w.value === null) return {};
                    if ((w.operator === "in" || w.operator === "not_in") && Array.isArray(w.value)) {
                        const filtered = w.value.filter((v)=>v != null);
                        if (filtered.length === 0) if (w.operator === "in") return {
                            AND: [
                                {
                                    [fieldName]: {
                                        equals: "__never__"
                                    }
                                },
                                {
                                    [fieldName]: {
                                        not: "__never__"
                                    }
                                }
                            ]
                        };
                        else return {};
                        const prismaOp = operatorToPrismaOperator(w.operator);
                        return {
                            [fieldName]: {
                                [prismaOp]: filtered
                            }
                        };
                    }
                    if (w.operator === "eq" || !w.operator) return {
                        [fieldName]: w.value
                    };
                    return {
                        [fieldName]: {
                            [operatorToPrismaOperator(w.operator)]: w.value
                        }
                    };
                };
                if (where.length === 1) {
                    const w = where[0];
                    if (!w) return;
                    return buildSingleCondition(w);
                }
                const and = where.filter((w)=>w.connector === "AND" || !w.connector);
                const or = where.filter((w)=>w.connector === "OR");
                const andClause = and.map((w)=>buildSingleCondition(w));
                const orClause = or.map((w)=>buildSingleCondition(w));
                return {
                    ...andClause.length ? {
                        AND: andClause
                    } : {},
                    ...orClause.length ? {
                        OR: orClause
                    } : {}
                };
            };
            return {
                async create ({ model, data: values, select }) {
                    if (!db[model]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"](`Model ${model} does not exist in the database. If you haven't generated the Prisma client, you need to run 'npx prisma generate'`);
                    return await db[model].create({
                        data: values,
                        select: convertSelect(select, model)
                    });
                },
                async findOne ({ model, where, select, join }) {
                    const whereClause = convertWhereClause(model, where);
                    if (!db[model]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"](`Model ${model} does not exist in the database. If you haven't generated the Prisma client, you need to run 'npx prisma generate'`);
                    let map = /* @__PURE__ */ new Map();
                    for (const joinModel of Object.keys(join ?? {})){
                        const key = getJoinKeyName(model, joinModel, schema);
                        map.set(key, getModelName(joinModel));
                    }
                    const selects = convertSelect(select, model, join);
                    let result = (await db[model].findMany({
                        where: whereClause,
                        select: selects,
                        take: 1
                    }))[0];
                    if (join && result) for (const [includeKey, originalKey] of map.entries()){
                        if (includeKey === originalKey) continue;
                        if (includeKey in result) {
                            result[originalKey] = result[includeKey];
                            delete result[includeKey];
                        }
                    }
                    return result;
                },
                async findMany ({ model, where, limit, offset, sortBy, join }) {
                    const whereClause = convertWhereClause(model, where);
                    if (!db[model]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"](`Model ${model} does not exist in the database. If you haven't generated the Prisma client, you need to run 'npx prisma generate'`);
                    let map = /* @__PURE__ */ new Map();
                    if (join) for (const [joinModel, value] of Object.entries(join)){
                        const key = getJoinKeyName(model, joinModel, schema);
                        map.set(key, getModelName(joinModel));
                    }
                    const selects = convertSelect(void 0, model, join);
                    const result = await db[model].findMany({
                        where: whereClause,
                        take: limit || 100,
                        skip: offset || 0,
                        ...sortBy?.field ? {
                            orderBy: {
                                [getFieldName({
                                    model,
                                    field: sortBy.field
                                })]: sortBy.direction === "desc" ? "desc" : "asc"
                            }
                        } : {},
                        select: selects
                    });
                    if (join && Array.isArray(result)) for (const item of result)for (const [includeKey, originalKey] of map.entries()){
                        if (includeKey === originalKey) continue;
                        if (includeKey in item) {
                            item[originalKey] = item[includeKey];
                            delete item[includeKey];
                        }
                    }
                    return result;
                },
                async count ({ model, where }) {
                    const whereClause = convertWhereClause(model, where);
                    if (!db[model]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"](`Model ${model} does not exist in the database. If you haven't generated the Prisma client, you need to run 'npx prisma generate'`);
                    return await db[model].count({
                        where: whereClause
                    });
                },
                async update ({ model, where, update }) {
                    if (!db[model]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"](`Model ${model} does not exist in the database. If you haven't generated the Prisma client, you need to run 'npx prisma generate'`);
                    const whereClause = convertWhereClause(model, where);
                    return await db[model].update({
                        where: whereClause,
                        data: update
                    });
                },
                async updateMany ({ model, where, update }) {
                    if (!db[model]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"](`Model ${model} does not exist in the database. If you haven't generated the Prisma client, you need to run 'npx prisma generate'`);
                    const whereClause = convertWhereClause(model, where);
                    const result = await db[model].updateMany({
                        where: whereClause,
                        data: update
                    });
                    return result ? result.count : 0;
                },
                async delete ({ model, where }) {
                    if (!db[model]) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$4$2e$3_$40$better$2d$auth$2b$utils$40$0$2e$3$2e$0_$40$better$2d$fetch$2b$fetch$40$1$2e$1$2e$18_better$2d$call_7a5952b35df00fad17cc15ec5f00878b$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2d$BhAKg8LX$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__BetterAuthError$3e$__["BetterAuthError"](`Model ${model} does not exist in the database. If you haven't generated the Prisma client, you need to run 'npx prisma generate'`);
                    const whereClause = convertWhereClause(model, where);
                    try {
                        await db[model].delete({
                            where: whereClause
                        });
                    } catch (e) {
                        if (e?.meta?.cause === "Record to delete does not exist.") return;
                        console.log(e);
                    }
                },
                async deleteMany ({ model, where }) {
                    const whereClause = convertWhereClause(model, where);
                    const result = await db[model].deleteMany({
                        where: whereClause
                    });
                    return result ? result.count : 0;
                },
                options: config
            };
        };
    let adapterOptions = null;
    adapterOptions = {
        config: {
            adapterId: "prisma",
            adapterName: "Prisma Adapter",
            usePlural: config.usePlural ?? false,
            debugLogs: config.debugLogs ?? false,
            supportsUUIDs: config.provider === "postgresql" ? true : false,
            transaction: config.transaction ?? false ? (cb)=>prisma.$transaction((tx)=>{
                    return cb((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapter$2d$factory$2d$oT7pVV1b$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])({
                        config: adapterOptions.config,
                        adapter: createCustomAdapter(tx)
                    })(lazyOptions));
                }) : false
        },
        adapter: createCustomAdapter(prisma)
    };
    const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$4$2e$3_next$40$16$2e$0$2e$10_$40$babel$2b$core$40$7$2e$28$2e$5_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$_c908334479ec86f73ef564b585e366bb$2f$node_modules$2f$better$2d$auth$2f$dist$2f$adapter$2d$factory$2d$oT7pVV1b$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(adapterOptions);
    return (options)=>{
        lazyOptions = options;
        return adapter(options);
    };
};
;
}),
];

//# sourceMappingURL=9cc04_better-auth_dist_d5092890._.js.map