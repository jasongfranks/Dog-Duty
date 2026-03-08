🐾 Dog Duty
A real-time family coordination app for dog care management.

Dog Duty is a high-performance, mobile-first web application designed to synchronize dog care routines across multiple family members. Built with a focus on real-time data persistence and automated state management, it ensures that every walk, meal, and medication is logged and visible to the whole family instantly.

🚀 Key Features
Real-Time Synchronization: Powered by Firebase Realtime Database for instant updates across all devices.

Dynamic Routine Management: Create, update, and delete custom daily tasks with emoji support.

Smart History Engine: Activity history is automatically organized by Month and Week using a collapsible accordion system for maximum readability.

Family Security: Integrated Google Authentication with an administrative allowlist to restrict access to family members only.

Supply Tracking: A global banner system that alerts all users when food, treats, or medications are running low.

Data Portability: Full CSV data export functionality to download the entire care history for veterinary review or personal backup.

Midnight Automation: Intelligent "Midnight Watcher" logic that automatically refreshes the app state at 12:00 AM to start the new day without manual reloads.

🛠 Technical Stack
Frontend: HTML5, CSS3 (Mobile-first Responsive Design), Vanilla JavaScript (ES6+).

Backend as a Service (BaaS): Firebase App, Firebase Realtime Database.

Security: Firebase Auth (Google OAuth 2.0).

Deployment: GitHub Pages.

📂 Database Structure
The application utilizes a flattened JSON structure to optimize for read/write speed and minimize data costs:

JSON
{
  "allowlist": {
    "user_email_com": true
  },
  "days": {
    "YYYY-MM-DD": {
      "TaskName": "✔ Time (UserName)",
      "Walks": "[{walk_object}]"
    }
  },
  "settings": {
    "routines": [{ "name": "Breakfast", "emoji": "🥣" }]
  },
  "supplies": {
    "Food": false
  }
}
🔧 Installation & Setup
Clone the Repository:

Bash
git clone https://github.com/yourusername/dog-duty.git
Configure Firebase:

Create a project at Firebase Console.

Enable Google Auth and Realtime Database.

Replace the firebaseConfig object in index.html with your unique project credentials.

Set Database Rules:
Use the provided security rules in the Firebase console to ensure the allowlist logic functions correctly.

Deploy:
Enable GitHub Pages in your repository settings to host the application.

📝 Changelog
[1.4.1] - 2026-03-08
Added: Professional "Current Week" indicator in History.

Improved: Multi-tiered history organization (Year > Month > Week).

Added: Full CSV Export functionality.

Fixed: Midnight refresh logic to prevent "stale" data on morning wake-ups.
