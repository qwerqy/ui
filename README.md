# @qwerqy/ui

![GitHub release (release name instead of tag name)](https://img.shields.io/github/v/release/qwerqy/ui) ![Codecov](https://img.shields.io/codecov/c/gh/qwerqy/ui?token=KUVNUEVA99) ![GitHub](https://img.shields.io/github/license/qwerqy/ui)


UI component to be used to be build my personal projects.

## Built with
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [React Typescript](https://react.dev/)
- [Storybook](https://storybook.js.org)
- [TailwindCSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com/)

## How to use

### Install

NPM:
```bash
npm install @qwerqy/ui
```

Yarn:
```bash
yarn add @qwerqy/ui
```

PNPM:
```bash
pnpm add @qwerqy/ui
```

### Import baseExtend

```tsx
// tailwind.config.js

const { baseExtend } = require('@qwerqy/ui');

module.exports = {
    // Other config,
    extend: {
        ...baseExtend,
        // Other extensions
    }
}
```

### Add CSS variables
I am using CSS variables so it is easy to change the theme of the app. You can change the CSS variables in the `:root` selector and the `.dark` selector.

```css
/* index.css */

@layer base {
  :root {
    --background: hsl(0 0% 100%);
    --foreground: hsl(0 0% 3.9%);
 
    --muted: hsl(0 0% 96.1%);
    --muted-foreground: hsl(0 0% 45.1%);
 
    --popover: hsl(0 0% 100%);
    --popover-foreground: hsl(0 0% 3.9%);
 
    --card: hsl(0 0% 100%);
    --card-foreground: hsl(0 0% 3.9%);
 
    --border: hsl(0 0% 89.8%);
    --input: hsl(0 0% 89.8%);
 
    --primary: hsl(0 0% 9%);
    --primary-foreground: hsl(0 0% 98%);
 
    --secondary: hsl(0 0% 96.1%);
    --secondary-foreground: hsl(0 0% 9%);
 
    --accent: hsl(0 0% 96.1%);
    --accent-foreground: hsl(0 0% 9%);
 
    --destructive: hsl(0 84.2% 60.2%);
    --destructive-foreground: hsl(0 0% 98%);
 
    --ring: hsl(0 0% 63.9%);
 
    --radius: 0.5rem;
  }
 
  .dark {
    --background: hsl(0 0% 3.9%);
    --foreground: hsl(0 0% 98%);
 
    --muted: hsl(0 0% 14.9%);
    --muted-foreground: hsl(0 0% 63.9%);
 
    --popover: hsl(0 0% 3.9%);
    --popover-foreground: hsl(0 0% 98%);
 
    --card: hsl(0 0% 3.9%);
    --card-foreground: hsl(0 0% 98%);
 
    --border: hsl(0 0% 14.9%);
    --input: hsl(0 0% 14.9%);
 
    --primary: hsl(0 0% 98%);
    --primary-foreground: hsl(0 0% 9%);
 
    --secondary: hsl(0 0% 14.9%);
    --secondary-foreground: hsl(0 0% 98%);
 
    --accent: hsl(0 0% 14.9%);
    --accent-foreground: hsl(0 0% 98%);
 
    --destructive: hsl(0 62.8% 30.6%);
    --destructive-foreground: hsl(0 85.7% 97.3%);
 
    --ring: hsl(0 0% 14.9%);
  }
}
 
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

You can skip using CSS variables by overriding the `extend` property in the `tailwind.config.js` file.

```js
// tailwind.config.js

const { baseExtend } = require('@qwerqy/ui');

module.exports = {
    // Other config,
    extend: {
        ...baseExtend,
        colors: {
            ...baseExtend.colors, 
            primary: '#fffff' // Override colors here,
        },
        // Other extensions
    }
}
```


## Development

### Install dependencies
    
```bash
yarn install
```

### Run Storybook

```bash
yarn storybook
```

### Build Storybook

```bash
yarn build-storybook
```

### Tests

```bash
yarn test
```


## Contributing

To contribute to this project, please follow the [contributing guidelines](CONTRIBUTORS.md).

## License

This project is licensed under the [MIT License](LICENSE.md).

