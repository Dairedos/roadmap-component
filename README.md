# Flopcoin Roadmap Component

A standalone React component displaying the Flopcoin project roadmap with interactive timeline and detailed modal views.

## Features

- **Interactive Timeline**: Click on any roadmap item to view detailed information
- **Responsive Design**: Works on desktop and mobile devices
- **Custom Scrollbar**: Elegant scrollbar design for long content
- **Key-Value Descriptions**: Organized detailed descriptions for each milestone
- **Animated Background**: Beautiful gradient background with floating orbs
- **Modal System**: Detailed popup modals with smooth animations

## Installation

1. Navigate to the project directory:
```bash
cd /project/roadmap-component
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development
Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

### Production Build
Create a production build:
```bash
npm run build
```

The built files will be in the `build` directory.

## Project Structure

```
roadmap-component/
├── public/
│   └── index.html
├── src/
│   ├── images/
│   │   └── roadmap/
│   │       ├── demo_image.png
│   │       ├── demo_image_roadmap.png
│   │       └── flopcoin.png
│   ├── App.js
│   ├── index.js
│   ├── RoadmapPage.jsx
│   ├── dashboard.css
│   └── theme.css
├── package.json
└── README.md
```

## Customization

### Adding New Roadmap Items

Edit the `roadmapData` array in `RoadmapPage.jsx`:

```javascript
const roadmapData = [
  {
    id: 9,
    date: "Your Date",
    title: "Your Title",
    type: "completed|upcoming|future",
    description: "Brief description for timeline",
    detailedDescription: {
      "Key 1": "Detailed description 1",
      "Key 2": "Detailed description 2"
    },
    position: "top|bottom"
  }
];
```

### Styling

- `dashboard.css`: Contains all roadmap-specific styles
- `theme.css`: Contains background and container styles

## Dependencies

- React 18.2.0
- React DOM 18.2.0
- Lucide React (for icons)
- React Scripts (for build tooling)

## License

This project is part of the Flopcoin ecosystem. Made by Daired (BlockIO) - if you want to support this initiative fill any of faucets on https://blockio.xyz :)
