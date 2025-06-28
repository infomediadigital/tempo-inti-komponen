# 🌟 @tech-of-tempo/memberzone-module

A **reusable Nuxt 3 component library** for building modern, member-focused interfaces. The `<TempoMemberzonePlugin>` component delivers a customizable, responsive, and accessible member zone UI, styled with **Tailwind CSS**, powered by **Radix Vue** for accessibility, and enhanced with **Lucide icons**.

## ✨ Features

- **Member Zone Component**: `<TempoMemberzonePlugin>` provides a flexible UI for displaying subscription-based member zones with dynamic branding and layout. 🎨
- **Accessible UI**: Uses `radix-vue` for WCAG-compliant components. ♿
- **Icon Support**: Integrates `lucide-vue-next` for modern, lightweight icons. 🖼️
- **Responsive Design**: Adapts to screen sizes with Tailwind CSS and props like `side`. 📱💻
- **Branding Support**: Customizes content based on `template-for` (e.g., `"teras"`) and subscription data. 🏷️
- **TypeScript Ready**: Fully typed for robust development. 🛠️

## 📦 Installation

### 1. Install the Package
```bash
npm install @tech-of-tempo/memberzone-module
```

### 2. Install Peer Dependencies

The module requires the following dependencies in your Nuxt 3 project:

```bash
npm install nuxt@^3.17.5 vue@^3.5.17 @nuxt/image@^1.10.0 tailwindcss@^4.1.10 tw-animate-css@^1.3.4 lucide-vue-next@^0.511.0
```

### 3. Add to Nuxt Config

Add the module to your ```nuxt.config.ts```:

```bash
export default defineNuxtConfig({
  modules: ['@tech-of-tempo/memberzone-module'],
  // Optional: Configure Tailwind CSS
  css: ['~/assets/css/tailwind.css']
});
```

### 4. Set Up Tailwind CSS

Create an ```assets/css/tailwind.css``` file:

```bash
@import "tailwindcss"
```

## 🚀 Usage

The module’s components are auto-imported into your Nuxt 3 project, allowing you to use ```<TempoMemberzonePlugin>``` directly in your pages or components.

Example: Using ```<TempoMemberzonePlugin>```

```bash
<template>
    <TempoMemberzonePlugin
      use-initial="F"
      template-for="teras"
      :side="viewport.isGreaterOrEquals('lg') ? 'right' : 'left'"
      header-logo="/img/teras_logo.png"
    />
</template>

<script setup>
import { useViewport } from 'nuxt-viewport'; // Or your preferred viewport utility
const viewport = useViewport();
</script>
```

**Component Props**

The ```<TempoMemberzonePlugin>``` component supports the following props:

- ```use-initial``` (String): Sets the initial letter or identifier for the member zone (e.g., ```"F"``` for a user’s initial).
- ```template-for``` (String): Specifies the template or branding context (e.g., ```"teras"``` for a specific brand).
- ```side``` (String): Controls the layout orientation (```"left"``` or ```"right"```) based on screen size or other logic.
- ```header-logo``` (String): Path to the logo image for branding (e.g., ```"/img/teras_logo.png"```).

_**Note**: Additional props or components may be available. Detailed documentation will be added soon._

## 📋 Requirements

Ensure your project includes:

- Nuxt: ```^3.17.5```
- Vue: ```^3.5.17```
- @nuxt/image: ```^1.10.0``` (for optimized images)
- tailwindcss: ```^4.1.10``` (for styling)
- tw-animate-css: ```^1.3.4``` (for animations)
- lucide-vue-next: ```^0.511.0``` (for icons)

## 📄 License

Licensed under the ISC License. See the LICENSE file for details.

## 🙌 Author

Created with ❤️ by XXX.
