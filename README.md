# SkyMiles Rewards - Airline Loyalty Program

A modern, responsive web application for an airline loyalty program built with React, TypeScript, and Tailwind CSS. This application allows users to manage their loyalty points, redeem rewards, book flights, and track their membership benefits.

## 🚀 Features

### Core Functionality
- **User Authentication**: Sign in/Sign up functionality with secure user management
- **Points Management**: Track and display loyalty points balance
- **Rewards Redemption**: Redeem points for various benefits including:
  - Flight discounts (domestic and international)
  - First-class upgrades
  - Free luggage allowances
  - Airport lounge access
- **Flight Booking**: Complete flight booking system with points earning preview
- **Member Profile**: View account details, tier status, and activity history
- **Customer Support**: FAQ section and contact information

### User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Intuitive Navigation**: Easy-to-use navigation with clear call-to-actions
- **Visual Feedback**: Hover effects and micro-interactions for better UX

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Routing**: React Router DOM for navigation
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Vite for fast development and building
- **Code Quality**: ESLint for code linting

## 📁 Project Structure

```
src/
├── components/
│   └── Navbar.tsx          # Navigation component
├── pages/
│   ├── Home.tsx            # Dashboard/landing page
│   ├── SignIn.tsx          # User authentication
│   ├── SignUp.tsx          # User registration
│   ├── Profile.tsx         # User profile and activity
│   ├── Redeem.tsx          # Rewards redemption hub
│   ├── BookTicket.tsx      # Flight booking system
│   ├── EarnPoints.tsx      # Points earning information
│   ├── Support.tsx         # Customer support
│   ├── FlightDiscounts.tsx # Flight discount redemption
│   ├── UpgradeFirstClass.tsx # First class upgrade options
│   ├── FreeLuggage.tsx     # Luggage benefit redemption
│   └── LoungeAccess.tsx    # Lounge access redemption
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

## 🎨 Design Features

- **Professional Color Scheme**: Blue and white theme representing trust and aviation
- **High-Quality Images**: Stock photos from Unsplash for visual appeal
- **Consistent Typography**: Clear hierarchy and readable fonts
- **Interactive Elements**: Hover states and smooth transitions
- **Card-Based Layout**: Modern card design for content organization

## 🚦 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd skymiles-rewards
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 Pages Overview

### Home Dashboard
- Welcome message with points balance
- Quick access to main features
- Navigation cards for key actions

### Rewards Redemption
- Flight discounts and upgrades
- Luggage and lounge benefits
- Clear point requirements and descriptions

### Flight Booking
- Comprehensive booking form
- Points earning calculator
- Round-trip and one-way options

### User Profile
- Account information and tier status
- Activity history and transactions
- Points balance and miles flown

### Customer Support
- Contact information
- Frequently asked questions
- Help resources

## 🎯 Target Audience

This application is designed for:
- Frequent travelers who want to maximize their loyalty benefits
- Airlines looking for a modern loyalty program interface
- Users who prefer intuitive, mobile-friendly web applications

## 🔧 Customization

The application is built with modularity in mind:
- Easy to rebrand with different colors and logos
- Configurable point values and reward tiers
- Extensible component architecture
- Responsive design adapts to any screen size

## 📄 License

This project is available for educational and commercial use.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📞 Support

For questions or support, please contact the development team or refer to the in-app support section.

---

Built with ❤️ using modern web technologies for the best user experience.
