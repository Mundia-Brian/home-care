# Rohi HomeCare

A modern, professional home healthcare services website built with React, TypeScript, Express, and Tailwind CSS.

## Features

- 🏥 Home-based nursing care services
- 🛏️ Medical equipment rental and sales
- 👨‍⚕️ Professional caregiver services
- 📱 WhatsApp integration for quick contact
- 📧 Contact form with validation
- 🎨 Modern, responsive design
- ⚡ Fast performance with Vite
- 🔒 Security best practices

## Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Wouter (routing)
- React Hook Form
- Zod (validation)
- Framer Motion (animations)
- Radix UI (components)

### Backend
- Node.js
- Express
- TypeScript
- Drizzle ORM (optional database)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd RohiHomeCare

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5000`

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
RohiHomeCare/
├── client/              # Frontend React application
│   └── src/
│       ├── components/  # Reusable UI components
│       ├── pages/       # Page components
│       ├── hooks/       # Custom React hooks
│       └── lib/         # Utilities and helpers
├── server/              # Backend Express server
│   ├── index.ts        # Server entry point
│   ├── routes.ts       # API routes
│   └── vite.ts         # Vite dev server setup
├── shared/              # Shared types and schemas
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type check with TypeScript
- `npm run db:push` - Push database schema changes

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions for:
- Vercel (recommended)
- Netlify
- Railway
- Traditional VPS

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
NODE_ENV=development
DATABASE_URL=<your-database-url>  # Optional
```

## Contact Information

- **Phone**: 0111 726 508
- **Email**: info@rohihomecare.co.ke
- **Location**: Macjo Building, Off Magadi Road, Ongata Rongai, Kenya
- **WhatsApp**: +254 111 726 508

## License

MIT
