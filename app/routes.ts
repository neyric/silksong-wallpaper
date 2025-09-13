import { prefix, type RouteConfig } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

// API 相关路由
const api = await flatRoutes({ rootDirectory: "./routes/_api/basic" });

// 基础信息路由
const meta = await flatRoutes({ rootDirectory: "./routes/_meta" });
const legal = await flatRoutes({ rootDirectory: "./routes/_legal" });

// 页面路由
const base = await flatRoutes({ rootDirectory: "./routes/base" });

const routes: RouteConfig = [
  ...prefix("api", api),
  ...prefix("legal", legal),
  ...meta,
  ...base,
];

export default routes;
