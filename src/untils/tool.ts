/* 处理权限 */
export const hasPermission = (route: any, role: any) => {
  if (route.meta && route.meta.roles) {
    return route.meta.roles.includes(role);
  }
  return true; /* 默认不设权限 */
};

export const filterAsyncRouter = (routerMap: any, roles: any) => {
  const accessedRouters = routerMap.filter((route: { children: string | any[]; }) => {
    if (hasPermission(route, roles)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles);
      }
      return true;
    }
    return false;
  });
  return accessedRouters;
};
