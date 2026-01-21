User Settings & Identity Store
The useUserStore manages the private domain of the authenticated user. Unlike the UserSlice (which is for administrative oversight of all users), this store is dedicated to the current session, account security telemetry, and personal system preferences.
1. Store Architecture
The store is divided into four logical pillars to ensure a clean separation between identity, security, and configuration.
Data Pillars
 * UserProfile: The core identity (Name, Role, Avatar). It includes a profileStrength metric used to drive "Complete your profile" UI prompts.
 * SecurityLogs: A chronological feed of sensitive account actions (e.g., password changes, login attempts).
 * UserSession: Device-level tracking. This allows the UI to render a "Log out from all devices" feature by identifying active IPs and locations.
 * UserPreferences: Boolean flags that control the application's notification engine and marketing reach.
2. Profile Management
The user object tracks the professional context of the account.
| Property | Purpose |
|---|---|
| Role | Displays the user's title (e.g., "Senior Architect") across the header and profile cards. |
| Status | Indicates if the account is active, inactive, or pending (awaiting email verification). |
| Strength | A numeric value (0-100) used to render circular progress bars in the settings dashboard. |
3. Security & Telemetry
This store provides the data necessary to build a transparent security audit trail for the user.
Security Event Types
Logs are categorized by severity to help the UI apply conditional styling:
 * warning: Critical events like a login from an unrecognized device.
 * info: Standard lifecycle events like a password update.
 * error: Failed attempts or blocked access.
Session Tracking
The sessions array allows users to monitor their digital footprint. By tracking device, location, and ip, the application can provide a "Security Checkup" interface that visualizes where the account is currently being accessed.
4. Preference Synchronization
The updatePreferences action utilizes a partial update pattern. This allows components (like a toggle switch) to update a single key without needing to provide the entire preferences object.
// Example: Updating only the marketing toggle
const updatePrefs = useUserStore(state => state.updatePreferences);

const handleToggle = (checked: boolean) => {
  updatePrefs({ marketingEmails: checked });
};

Technical Integration
This store is typically used in the Settings Page, Header Profile Dropdown, and Account Security tabs.
 * Initialization: Call fetchUser() in a top-level layout component to sync the latest profile data.
 * UI Feedback: Use the isLoading state to disable form inputs while preferences are being "saved" (simulated).
Would you like me to create a UI component example for the "Security Sessions" list, or should we move on to the final slice, the Kanban Task Management?
