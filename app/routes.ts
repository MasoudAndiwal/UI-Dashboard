import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

// export default [index("routes/admin/dashboard.tsx")] satisfies RouteConfig;
export default [
  
        layout("routes/admin/admin-layout.tsx", [
            route('dashboard', 'routes/admin/dashboard.tsx'),
            route('all-users', 'routes/admin/all-users.tsx'),
            route('all-Trips', 'routes/admin/trips.tsx'),
        ])
    
] satisfies RouteConfig;
 