### How to Run the App Locally

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd esx-project
   ```

2. **Backend Setup**:

   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install PHP dependencies:
     ```bash
     composer install
     ```
   - Copy the `.env` file and configure it:
     ```bash
     cp .env.example .env
     ```
   - Generate the application key:
     ```bash
     php artisan key:generate
     ```
   - Configure the database in the `.env` file:
     ```env
     DB_CONNECTION=mysql
     DB_HOST=127.0.0.1
     DB_PORT=3306
     DB_DATABASE=your_database_name
     DB_USERNAME=your_database_user
     DB_PASSWORD=your_database_password
     ```
   - Run database migrations:
     ```bash
     php artisan migrate
     ```
   - Start the backend server:
     ```bash
     php artisan serve
     ```

3. **Frontend Setup**:

   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```
   - Install Node.js dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

4. **Access the Application**:
   - The backend will run on `http://127.0.0.1:8000`.
   - The frontend will run on `http://127.0.0.1:3000`.

---

### Necessary Steps for Installation and Configuration

1. **Backend**:

   - Ensure PHP 8.1 or higher is installed.
   - Install Composer globally.
   - Set up a MySQL database and configure the `.env` file.
   - Install Laravel dependencies using `composer install`.

2. **Frontend**:

   - Ensure Node.js and npm are installed.
   - Install dependencies using `npm install`.

3. **Sanctum Configuration**:

   - Ensure `SANCTUM_STATEFUL_DOMAINS` in the `.env` file includes your frontend domain (e.g., `localhost:3000`).
   - Set `SESSION_DRIVER=cookie` in the `.env` file.

4. **CORS Configuration**:
   - Ensure `config/cors.php` allows requests from your frontend domain:
     ```php
     'supports_credentials' => true,
     ```

---

### How to Deploy This App

1. **Backend Deployment**:

   - Use a cloud hosting provider like AWS, DigitalOcean, or Heroku.
   - Set up a web server (e.g., Nginx or Apache) to serve the Laravel app.
   - Configure `.env` for production (e.g., database credentials, `APP_ENV=production`, `APP_DEBUG=false`).
   - Use a queue worker for background jobs if needed:
     ```bash
     php artisan queue:work
     ```
   - Set up a cron job for scheduled tasks:
     ```bash
     * * * * * php /path-to-your-project/artisan schedule:run >> /dev/null 2>&1
     ```

2. **Frontend Deployment**:

   - Build the frontend for production:
     ```bash
     npm run build
     ```
   - Deploy the `dist` folder to a static hosting service like Netlify, Vercel, or an S3 bucket.

3. **Domain and SSL**:
   - Point your domain to the hosting server.
   - Use Let's Encrypt or another SSL provider to secure your app with HTTPS.

---

### What Would You Improve If You Had Time

1. **Error Handling**:

   - Add centralized error handling for both frontend and backend.
   - Display user-friendly error messages in the frontend.

2. **Testing**:

   - Write unit tests and feature tests for the backend using PHPUnit.
   - Add integration tests for the frontend using tools like Jest or Cypress.

3. **Code Quality**:

   - Use tools like Laravel Pint for backend code formatting.
   - Use ESLint and Prettier for frontend code consistency.

4. **Performance**:

   - Optimize database queries using eager loading.
   - Use caching for frequently accessed data.

5. **Security**:
   - Implement rate limiting for API endpoints.
   - Use HTTPS in all environments.
   - Regularly audit dependencies for vulnerabilities.

---

### Challenges and How to Approach Them

1. **Authentication Issues**:

   - Ensure Sanctum is correctly configured for SPA authentication.
   - Debug token and cookie handling using browser developer tools and Laravel logs.

2. **Scalability**:

   - Use a load balancer to distribute traffic across multiple backend servers.
   - Use a CDN for serving static assets.

3. **State Management**:

   - If the app grows, consider using a state management library like Redux or Context API for better state handling.

4. **Deployment Complexity**:
   - Use Docker to containerize the app for consistent deployment.
   - Set up CI/CD pipelines for automated testing and deployment.
