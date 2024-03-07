# Marketplace Multivendor Selling Food Items Project

## Description
This project is a comprehensive marketplace platform designed for selling a wide range of food items from multiple vendors. It leverages the power of Django and Django REST framework for the backend implementation, Redis for efficient handling of email OTP and view caching, PostgreSQL as the database management system, Celery for task queuing and background processing, and Docker for containerizing the application. The frontend is developed using React with TypeScript, providing a responsive and dynamic user interface. Bootstrap is used for styling to ensure a visually appealing presentation, while custom hooks enhance the functionality and user experience.

## Features
### Vendor Module
- **Models**: Vendor, OpeningHours, Staff
- **Endpoints**: `/vendors/`, `/openinghours/`, `/staff/`

### Menu Module
- **Models**: Category, RawItem, FoodItem, ProductRating
- **Endpoints**: `/Categories/`, `/Category/<int:pk>/`, `/fooditems/`, `/rawitems/`, `/product-ratting/`

### Marketplace Module
- **Models**: Discount, Cart, Tax
- **Endpoints**: `/discounts/`, `/carts/`, `/taxes/`

### Main Module
- Provides a base model for inheriting time created, modified, and soft delete fields.

### Account Module
- **Models**: Address, User (with UserManager)
- **Endpoints**: `/users/`, `/addresses/`...

### Order Module
- **Models**: Payment, Order, OrderedFoodItem, Currency Enumeration, Bank Types, Payment Statuses

## Installation
1. Clone the repository:
   ```bash
   git clone <[repository_url](https://github.com/erfannaderi/DRF-food-online/)>
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Set up the database:
   ```bash
   python manage.py migrate
   ```
4. Run the development server:
   ```bash
   python manage.py runserver
   ```

## Backend Structure
The backend architecture of the project is organized into several modules to efficiently manage different aspects of the marketplace platform.

### Vendor Module
The Vendor module handles the management of vendors, their opening hours, and staff members. Each vendor can set their availability hours and have dedicated staff members assigned to them.

### Menu Module
The Menu module focuses on categorizing food items into different categories, managing raw items, food items, and collecting product ratings from customers. This module ensures a well-organized menu for customers to browse and make selections.

### Marketplace Module
The Marketplace module introduces features such as discounts on products, cart management for users to store selected items, and tax calculation for transparent pricing. These functionalities enhance the shopping experience for customers and provide flexibility to vendors in offering promotions.

### Main Module
The Main module serves as the foundation for other modules by providing a base model that includes fields for tracking creation time, modification time, and soft deletion status. This ensures consistency across the application in managing data entities.

### Account Module
The Account module is responsible for handling user-related functionalities such as managing user addresses, user authentication, registration, login processes, and user profile management. The UserManager facilitates custom user management operations.

### Order Module
The Order module streamlines the ordering process by managing payments, order details, ordered food items, currency types, bank information, and payment statuses. This module ensures smooth transaction processing and order fulfillment.

## Frontend Structure
The frontend of the project is built using React with TypeScript to create a dynamic and interactive user interface. The integration of Bootstrap ensures a responsive design that adapts to various screen sizes. Custom hooks are utilized to enhance functionality and provide a seamless user experience.

## Continuous Integration and Continuous Deployment (CI/CD)
The project utilizes GitLab for CI/CD pipelines to automate the testing, building, and deployment processes. GitLab CI/CD pipelines help ensure code quality and enable efficient delivery of updates to the production environment.

## Contributors
- Erfan Naderi

Feel free to contribute to this project by submitting pull requests or reporting issues.
