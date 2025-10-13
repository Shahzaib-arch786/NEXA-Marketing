# Project Structure - Admin & User Panels

This project has been restructured to support both admin and user panels in a single repository.

## Directory Structure

```
src/
├── panels/
│   ├── admin/                 # Admin Panel
│   │   ├── components/        # Admin-specific components
│   │   │   ├── AdminLayout.jsx
│   │   │   └── AdminNavbar.jsx
│   │   ├── pages/            # Admin pages
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── UserManagement.jsx
│   │   │   └── ContentManagement.jsx
│   │   └── index.js          # Admin panel exports
│   │
│   └── user/                 # User Panel (Public Website)
│       ├── components/       # User-specific components
│       │   └── UserLayout.jsx
│       ├── pages/           # User pages (existing website pages)
│       │   ├── Dashboard.jsx
│       │   ├── AdCampaignManagement.jsx
│       │   ├── PageManagement.jsx
│       │   ├── FollowersBoosting.jsx
│       │   ├── PostDesign.jsx
│       │   ├── SMMStratgies.jsx
│       │   ├── AnalyticsReporting.jsx
│       │   ├── StarterPage.jsx
│       │   ├── ProfessionalPage.jsx
│       │   ├── EnterprisePage.jsx
│       │   └── ... (other pages)
│       └── index.js         # User panel exports
│
├── shared/                  # Shared resources
│   ├── components/         # Shared components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── Cards.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── BGSplashCursor.jsx
│   │   ├── ORB.jsx
│   │   └── Scrollingtext.jsx
│   ├── assets/            # Shared assets (images, etc.)
│   ├── utils/             # Shared utilities and constants
│   └── index.js           # Shared exports
│
├── App.jsx                # Main application with routing
├── main.jsx              # Application entry point
├── index.css             # Global styles
└── App.css               # App-specific styles
```

## Routes

### User Panel (Public Website)
- `/` - Main dashboard/homepage
- `/PageManagement` - Page management services
- `/AdCampaignManagement` - Ad campaign services
- `/FollowersBoosting` - Followers boosting services
- `/PostDesign` - Post design services
- `/SMMS` - Social media marketing strategies
- `/AnalyticsReporting` - Analytics and reporting
- `/pricing/starter` - Starter pricing plan
- `/pricing/professional` - Professional pricing plan
- `/pricing/enterprise` - Enterprise pricing plan

### Admin Panel
- `/admin` - Admin dashboard
- `/admin/users` - User management
- `/admin/content` - Content management

## Key Features

### Admin Panel
- **Empty Structure**: Ready for implementation
- **Basic Layout**: AdminLayout component with AdminNavbar
- **Routing**: Separate routes for admin functionality
- **Dark Mode**: Integrated dark mode support

### User Panel
- **Existing Functionality**: All existing pages moved here
- **Shared Components**: Uses shared components from `/shared`
- **Asset Management**: All assets moved to shared folder

### Shared Resources
- **Components**: Reusable components for both panels
- **Assets**: Images and media files
- **Utils**: Constants and utility functions

## Development

### Running the Project
```bash
npm install
npm run dev
```

### Building the Project
```bash
npm run build
```

### Adding New Features

#### For Admin Panel:
1. Add new components to `src/panels/admin/components/`
2. Add new pages to `src/panels/admin/pages/`
3. Update routing in `src/App.jsx`
4. Export new components from `src/panels/admin/index.js`

#### For User Panel:
1. Add new components to `src/panels/user/components/`
2. Add new pages to `src/panels/user/pages/`
3. Update routing in `src/App.jsx`
4. Export new components from `src/panels/user/index.js`

#### For Shared Resources:
1. Add shared components to `src/shared/components/`
2. Add shared assets to `src/shared/assets/`
3. Add shared utilities to `src/shared/utils/`
4. Export new items from `src/shared/index.js`

## Notes

- All asset paths have been updated to use the shared assets folder
- Import paths have been updated throughout the project
- The admin panel is currently empty and ready for development
- Dark mode is supported across both panels
- The project maintains all existing functionality while providing a clear separation between admin and user interfaces