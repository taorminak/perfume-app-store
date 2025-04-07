# NETCONOMY Frontend Shop Task

## General Description

This task involves creating a simplified web shop based on a provided design reference. The implementation should closely resemble the design, aiming for fidelity without needing to be pixel-perfect. The technologies allowed for implementation are Angular or React.

## Task Description

1. **Loading Products:**

   - All products should be loaded from the JSON file (`products.json`).

2. **Cart Information:**

   - When no product is selected, the cart icon should provide the information that the cart is empty.

3. **Navigation:**

   - You can go to the product detail page by clicking on the product tile. You can return to the main page by clicking on the logo.

4. **Adding to Cart:**

   - You can add a product to the cart by clicking on the “Add to cart” button. This should add the product to the cart and update the stock level of the product everywhere (product detail page, listing, homepage).

5. **Cart Management:**

   - The cart can be updated by adding more products to it or by changing the amount of products already in the cart. The amount cannot exceed the stock level.

6. **Search Functionality:**

   - Above the banner, there is a search input where you can search products by name. The list should update with every new character typed. You can also reach the product detail page by clicking on the product in the search list.

7. **Social Icons:**

   - For social icons, “Font Awesome” can be used.

8. **Interaction Animations:**
   - Please refer to the screen recording for specific interaction animations.

## Bonus Task

- **Keyboard Navigation:**
  - The search list can be navigated with the arrow keys. The active product should be highlighted as in the video. Keyboard navigation inside the search suggest dropdown should be circular. When using keyboard navigation and the last item is highlighted, pressing the down arrow should move focus to the first item, and vice versa. By pressing the Enter button, you should navigate to the product detail page of the highlighted product.

## Resources

- **JSON file with products:** `/json/products.json`
- **All images:** `/images/`
- **Reference design and demo video:** `/design/`

### Installation

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
