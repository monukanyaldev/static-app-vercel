# Static App Demo

A modern, production-ready React application built with TypeScript, Vite, and TailwindCSS.

## Features

- ⚡️ Lightning-fast builds with [Vite](https://vitejs.dev/)
- 🔒 TypeScript for type safety
- � [TailwindCSS](https://tailwindcss.com/) for styling
- � Responsive design
- 🧭 React Router for navigation
- 🔍 ESLint for code quality
- 📦 Modern build optimization

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### Static Deployment

This is a static application that can be deployed to any static hosting service. The build output will be in the `dist` directory after running `npm run build`.

#### Deployment Options:

- **AWS S3**: Deploy to Amazon S3 with CloudFront for CDN
- **Netlify**: Easy deployment with continuous integration
- **Vercel**: Great for frontend applications
- **GitHub Pages**: Free hosting for open source projects

## Project Structure

```
├── src/
│   ├── components/    # Reusable components
│   ├── pages/        # Page components
│   ├── App.tsx       # Main application component
│   ├── main.tsx      # Application entry point
│   └── index.css     # Global styles
├── public/           # Static assets
└── dist/            # Build output
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Check TypeScript types

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with 💻 using React + TypeScript + Vite
