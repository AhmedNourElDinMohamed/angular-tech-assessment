# Tech Assessment - Angular Management System

A modern Angular 19 application for managing products and users with authentication. This project demonstrates a complete full-stack management system with a clean, modular architecture using the latest Angular features and best practices.

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Angular CLI 19.1.4

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd tech-assessment
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ng serve

4. **Open your browser**
   Navigate to `http://localhost:4200/`
   Enter any username and password to login (Fake Login)

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build and watch for changes
- `npm test` - Run unit tests
- `ng generate component component-name` - Generate new component

## 📦 Project Structure & Modules

### Core Architecture

The application follows a modular architecture with feature-based organization:

```
src/app/
├── core/                    # Core shared functionality
│   ├── components/          # Shared components (loading spinner, etc.)
│   ├── data/               # Mock data and constants
│   ├── enums/              # Application enums (API endpoints)
│   ├── guards/             # Route guards (authentication)
│   ├── models/             # TypeScript interfaces and models
│   └── services/           # Core services (auth, loading, layout)
├── layouts/                # Application layouts
│   ├── auth-layout/        # Layout for authentication pages
│   ├── main-layout/        # Main application layout
│   └── components/         # Layout components (navbar, footer)
├── pages/                  # Feature modules
│   ├── auth/               # Authentication module
│   ├── products-management/ # Products management module
│   ├── users-management/   # Users management module
│   └── not-found/          # 404 page
└── assets/                 # Static assets (images, fonts, styles)
```

### Module Descriptions

#### 🔐 Authentication Module (`src/app/pages/auth/`)

- **Login Component**: User authentication with local storage persistence
- **Register Component**: New user registration
- **Forgot Password**: Password recovery functionality
- **Reset Password**: Password reset workflow
- **Features**: Route guarding, authentication state management

#### 📦 Products Management Module (`src/app/pages/products-management/`)

- **Products List**: Display all products with pagination and filtering
- **Product Details**: View detailed product information
- **Create Product**: Add new products to the system
- **Update Product**: Edit existing product information
- **Features**: CRUD operations, reactive state management with signals

#### 👥 Users Management Module (`src/app/pages/users-management/`)

- **Users List**: Display all users with management capabilities
- **Create User**: Add new users to the system
- **Features**: User CRUD operations, reactive data management

#### 🏗️ Core Module (`src/app/core/`)

- **Services**: Authentication, loading states, layout management
- **Guards**: Route protection and authentication checks
- **Models**: TypeScript interfaces for type safety
- **Components**: Reusable UI components (loading spinner)
- **Enums**: API endpoint definitions and constants

#### 🎨 Layout System (`src/app/layouts/`)

- **Main Layout**: Primary application layout with navigation
- **Auth Layout**: Simplified layout for authentication pages
- **Components**: Navbar, footer, and layout-specific components

## 🌐 API Configuration

### Fake API Service

The application uses **FakeStore API** for demonstration purposes:

**Base URL**: `https://fakestoreapi.com/`

### API Endpoints Used

- `GET /products` - Fetch all products
- `GET /products/{id}` - Fetch single product
- `POST /products` - Create new product
- `PUT /products/{id}` - Update existing product
- `GET /users` - Fetch all users
- `POST /users` - Create new user

### Environment Configuration

API configuration is managed through environment files:

- `src/envs/env.ts` - Development environment
- `src/envs/env.prod.ts` - Production environment
- `src/envs/env.staging.ts` - Staging environment
- `src/envs/env.test.ts` - Testing environment

All environments currently point to: `https://fakestoreapi.com/`

## 🛠️ Technology Stack

### Frontend Framework

- **Angular 19.1.0** - Latest Angular with standalone components
- **TypeScript 5.7.2** - Type-safe JavaScript development
- **RxJS 7.8.0** - Reactive programming with observables

### UI Components & Styling

- **PrimeNG 19.1.3** - Rich UI component library
- **Bootstrap 5.3.3** - CSS framework for responsive design
- **PrimeIcons 7.0.0** - Icon library
- **SCSS** - Enhanced CSS with variables and mixins

### State Management

- **Angular Signals** - Modern reactive state management
- **RxJS** - Observable-based data flow

### Development Tools

- **Angular CLI 19.1.4** - Command line interface
- **Karma & Jasmine** - Unit testing framework
- **Angular DevKit** - Development and build tools

## 🔧 Key Features

### Modern Angular Patterns

- ✅ Standalone components
- ✅ Signal-based state management
- ✅ Reactive forms
- ✅ Route guards and lazy loading
- ✅ HTTP interceptors ready
- ✅ Type-safe development

### User Experience

- ✅ Responsive design
- ✅ Loading states and error handling
- ✅ Toast notifications
- ✅ Form validation
- ✅ Authentication persistence

### Code Quality

- ✅ TypeScript strict mode
- ✅ Modular architecture
- ✅ SCSS organization
- ✅ Component isolation
- ✅ Service injection patterns

## 🚦 Authentication Flow

1. Users must authenticate to access the main application (Enter any username and password to login)
2. Login state is stored in localStorage
3. Route guards protect authenticated routes
4. Automatic redirect to login if not authenticated
5. Toast notifications for authentication feedback

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop browsers
- Tablet devices
- Mobile phones
- Modern web standards

## 🔄 Development Workflow

1. **Feature Development**: Create components in appropriate feature modules
2. **Service Integration**: Use dependency injection for service access
3. **State Management**: Leverage Angular signals for reactive state
4. **Styling**: Follow SCSS organization in assets/scss
5. **Testing**: Write unit tests for new components and services

## 📈 Performance Optimizations

- Lazy loading for feature modules
- OnPush change detection strategy
- Optimized bundle size with tree shaking
- Angular optimization features enabled
