import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/products/")({
	component: Products,
});

function Products() {
	return <div className="p-2">Products</div>;
}
