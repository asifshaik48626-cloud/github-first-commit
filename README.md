# GitHub First Commit Finder

A polished React + TypeScript application that helps you discover the very first commit of any public GitHub repository in seconds. Built with Vite and modern UI tooling, the project makes repository history exploration simple, fast, and visually appealing.

## Overview

GitHub First Commit Finder lets users enter a repository URL and instantly retrieve:

- the initial commit SHA
- the commit message
- the author name
- the commit date
- a shareable link to the result

This project is ideal for developers, researchers, and open-source enthusiasts who want to trace the origin of a repository or understand how a project began.

## Features

- Fast lookup of a repository's first commit
- Clean, modern interface built with React and Tailwind CSS
- Shareable result links using URL parameters
- Copy-to-clipboard support for commit SHAs
- Responsive design for desktop and mobile use

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Three.js / React Three Fiber
- GitHub REST API

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/asifshaik48626-cloud/github-first-commit.git
cd github-first-commit
npm install
```

### Run locally

```bash
npm run dev
```

Then open http://localhost:5173 in your browser.

### Build for production

```bash
npm run build
```

## Usage

1. Open the app in your browser.
2. Enter a public GitHub repository URL.
3. Click "Find First Commit".
4. Review the first commit details and copy the SHA if needed.

## Project Structure

```text
src/
  components/      # Reusable UI components
  services/        # GitHub API helpers
  App.tsx          # Main application UI
  main.tsx         # App entry point
```

## License

This project is currently for personal and educational use.

