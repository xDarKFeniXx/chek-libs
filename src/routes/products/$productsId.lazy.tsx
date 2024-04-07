import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$productsId')({
  component: () => <div>Hello /products/$productsId!</div>
})