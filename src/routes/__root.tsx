import { createRootRoute } from "@tanstack/react-router";
import { Layout } from "components/Layout";
import React, { Suspense } from "react";

const TanStackRouterDevtools =
	// @ts-ignore
	process.env.NODE_ENV === "production"
		? () => null // Render nothing in production
		: React.lazy(() =>
				// Lazy load in development
				import("@tanstack/router-devtools").then((res) => ({
					default: res.TanStackRouterDevtools,
					// For Embedded Mode
					// default: res.TanStackRouterDevtoolsPanel
				})),
			);

export const Route = createRootRoute({
	component: () => (
		<>
			<Layout />
			<Suspense>
				<TanStackRouterDevtools />
			</Suspense>
		</>
	),
});
