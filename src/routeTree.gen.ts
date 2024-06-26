/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const ProductsLazyImport = createFileRoute('/products')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()
const ProductsIndexLazyImport = createFileRoute('/products/')()
const OrdersIndexLazyImport = createFileRoute('/orders/')()
const CategoriesIndexLazyImport = createFileRoute('/categories/')()
const ProductsProductsIdLazyImport = createFileRoute('/products/$productsId')()

// Create/Update Routes

const ProductsLazyRoute = ProductsLazyImport.update({
  path: '/products',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/products.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const ProductsIndexLazyRoute = ProductsIndexLazyImport.update({
  path: '/',
  getParentRoute: () => ProductsLazyRoute,
} as any).lazy(() =>
  import('./routes/products/index.lazy').then((d) => d.Route),
)

const OrdersIndexLazyRoute = OrdersIndexLazyImport.update({
  path: '/orders/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/orders/index.lazy').then((d) => d.Route))

const CategoriesIndexLazyRoute = CategoriesIndexLazyImport.update({
  path: '/categories/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/categories/index.lazy').then((d) => d.Route),
)

const ProductsProductsIdLazyRoute = ProductsProductsIdLazyImport.update({
  path: '/$productsId',
  getParentRoute: () => ProductsLazyRoute,
} as any).lazy(() =>
  import('./routes/products/$productsId.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/products': {
      preLoaderRoute: typeof ProductsLazyImport
      parentRoute: typeof rootRoute
    }
    '/products/$productsId': {
      preLoaderRoute: typeof ProductsProductsIdLazyImport
      parentRoute: typeof ProductsLazyImport
    }
    '/categories/': {
      preLoaderRoute: typeof CategoriesIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/orders/': {
      preLoaderRoute: typeof OrdersIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/products/': {
      preLoaderRoute: typeof ProductsIndexLazyImport
      parentRoute: typeof ProductsLazyImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  AboutLazyRoute,
  ProductsLazyRoute.addChildren([
    ProductsProductsIdLazyRoute,
    ProductsIndexLazyRoute,
  ]),
  CategoriesIndexLazyRoute,
  OrdersIndexLazyRoute,
])

/* prettier-ignore-end */
