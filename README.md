# Interactive Pricing Component

A responsive pricing component with interactive slider built with Next.js and Tailwind CSS.

![Interactive Pricing Component Screenshot](./public/task%20taknet.png)

## Features

- Interactive slider
- Dynamic pricing based on selected page views
- Toggle between monthly and yearly billing (25% discount for yearly)
- Responsive design that works on all device sizes
- Hover states for all interactive elements
- Clean, modern UI with smooth animations

## Built With

- [Next.js 15](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- TypeScript - For type safety
- Mobile-first workflow

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/aliehs74/price-slider-card.git

```

2. Install dependencies:

```bash
cd taknet-task
npm install
# or
yarn install

```

3. Run the development server:

```bash
npm run dev
# or
yarn dev

```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
interactive-pricing-component/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global CSS styles
│   │   ├── page.tsx          # Main page component
│   │   └── layout.tsx        # Main layout
│   └── components/
│       ├── PricingCard.tsx   # Pricing card component
│       ├── Options.tsx       # Option component
│       ├── Slider.tsx        # Slider component
│       └── Switcher.tsx      # Switcher component
│   
├── public/                   # Static files
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```


## Available Scripts

- `dev`: Runs the development server
- `build`: Creates an optimized production build
- `start`: Starts the production server
- `lint`: Runs ESLint

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
