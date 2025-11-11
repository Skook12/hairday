# HairDay - Hair Salon Appointment Scheduler

A modern, responsive web application for managing hair salon appointments. HairDay allows salon owners to schedule appointments, view daily schedules, and manage customer bookings with an intuitive interface.

## 🎯 Project Overview

HairDay is a single-page application (SPA) built with React and TypeScript that provides a complete appointment management system for hair salons. The application features a clean, modern UI with time-based scheduling organized into morning, afternoon, and evening periods.

## ✨ Features

- **Appointment Scheduling**: Create new appointments by selecting a date, time slot, and customer name
- **Daily Schedule View**: View all appointments for a selected date, organized by time periods
- **Time Slot Management**: Pre-defined time slots for morning (9:00-12:00), afternoon (13:00-18:00), and evening (19:00-21:00)
- **Appointment Deletion**: Remove appointments with a simple click
- **Data Persistence**: All appointments are stored in browser's local storage
- **Responsive Design**: Modern UI built with Tailwind CSS
- **Time Slot Validation**: Prevents double-booking by disabling already booked time slots
- **Date-based Filtering**: Filter and view appointments by specific dates

## 🛠️ Tech Stack

### Core Technologies

- **React 19.1.1**: Modern React with latest features
- **TypeScript 5.9.3**: Type-safe JavaScript
- **Vite 7.1.7**: Fast build tool and dev server
- **React Router 7.9.5**: Client-side routing

### UI & Styling

- **Tailwind CSS 4.1.16**: Utility-first CSS framework
- **React Day Picker 9.11.1**: Date picker component
- **Class Variance Authority**: Component styling variants

### Utilities

- **date-fns 4.1.0**: Date manipulation and formatting
- **use-local-storage 3.0.0**: Local storage React hook
- **clsx & tailwind-merge**: CSS class management

## 📁 Project Structure

```
hairday/
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── assets/            # SVG icons and images
│   │   ├── afternoon.svg
│   │   ├── arrow-down.svg
│   │   ├── calendar.svg
│   │   ├── logo.svg
│   │   ├── moon.svg
│   │   ├── sun.svg
│   │   ├── trash.svg
│   │   └── user-icon.svg
│   ├── components/        # Reusable UI components
│   │   ├── button.tsx
│   │   ├── container.tsx
│   │   ├── icon.tsx
│   │   ├── input.tsx
│   │   └── text.tsx
│   ├── core-components/   # Feature-specific components
│   │   ├── appointment.tsx
│   │   ├── appointment-list.tsx
│   │   ├── available-times.tsx
│   │   ├── header.tsx
│   │   ├── main-content.tsx
│   │   └── sidebar.tsx
│   ├── hooks/             # Custom React hooks
│   │   └── use-schedule.tsx
│   ├── lib/               # Utility functions
│   │   └── utils.ts
│   ├── models/            # TypeScript type definitions
│   │   └── schedule.ts
│   ├── pages/             # Page components
│   │   ├── layout-main.tsx
│   │   └── page-home.tsx
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Project dependencies
├── vite.config.ts         # Vite configuration
└── tsconfig.json          # TypeScript configuration
```

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd hairday
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

The production build will be created in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📖 Usage Guide

### Creating an Appointment

1. **Select a Date**: Click on the date input field in the sidebar and choose a date
2. **Choose a Time Slot**: Select an available time from the morning, afternoon, or evening periods
3. **Enter Customer Name**: Type the customer's name in the client name field
4. **Save Appointment**: Click the "Save" button to create the appointment

### Viewing Appointments

1. **Select a Date**: Use the date picker in the main content area
2. **View by Period**: Appointments are automatically organized into:
   - **Morning**: 9:00 - 12:00
   - **Afternoon**: 13:00 - 18:00
   - **Night**: 19:00 - 21:00

### Deleting an Appointment

1. Find the appointment in the schedule view
2. Click the trash icon next to the appointment
3. The appointment will be immediately removed

## 🔧 Key Components

### `useSchedule` Hook

Custom React hook that manages all schedule-related operations:

- **getTime(date)**: Retrieves all appointments for a specific date
- **handleNewSchedule(date, time, customer)**: Creates a new appointment
- **deleteSchedule(id)**: Removes an appointment by ID
- **getMorningAppointments(date)**: Gets morning appointments for a date
- **getAfternoonAppointments(date)**: Gets afternoon appointments for a date
- **getEveningAppointments(date)**: Gets evening appointments for a date

### Schedule Model

```typescript
type Schedule = {
  id: string;
  date: string;
  time: string;
  customer: string;
};
```

### Time Slots

- **Morning**: 09:00, 10:00, 11:00, 12:00
- **Afternoon**: 13:00, 14:00, 15:00, 16:00, 17:00, 18:00
- **Evening**: 19:00, 20:00, 21:00

## 💾 Data Persistence

All appointments are stored in the browser's local storage using the `use-local-storage` hook. The data persists across browser sessions and page refreshes. The storage key is `"schedule"` and contains an array of `Schedule` objects.

## 🎨 Styling

The application uses Tailwind CSS for styling with a custom design system:

- Custom color palette (gray-700, gray-600)
- Responsive layout with flexbox and grid
- Custom typography variants (title-lg, title-md, text-md, text-sm)
- Rounded corners and modern spacing

## 🔍 Available Scripts

- `npm run dev`: Start development server with hot module replacement
- `npm run build`: Build the application for production
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint to check code quality

## 📝 Development Notes

### Date Formatting

The application uses Brazilian Portuguese date format (pt-BR) for display, formatted using `Intl.DateTimeFormat`.

### Time Zone

Dates are handled in UTC timezone to ensure consistency across different browsers and regions.

### Component Architecture

- **Components**: Reusable UI elements (Button, Input, Text, etc.)
- **Core Components**: Feature-specific components (Appointment, Sidebar, etc.)
- **Pages**: Page-level components that compose core components
- **Hooks**: Custom logic and state management
- **Models**: TypeScript type definitions

## 🚧 Future Enhancements

Potential features for future development:

- Edit existing appointments
- Recurring appointments
- Customer database management
- Email/SMS notifications
- Calendar view
- Multiple service types
- Staff management
- Appointment history
- Export/Import functionality

