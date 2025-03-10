# Ticket Management API

## Overview
The Ticket Management API is a scalable backend system built with NestJS, designed to manage support tickets and agents. It incorporates real-time updates using Ably and a Supabase-powered database. This project demonstrates best practices in API design, validation, and documentation.

---

## Setup Instructions

### Prerequisites
1. [Node.js](https://nodejs.org/) (v16+ recommended)
2. [Supabase Account](https://supabase.com/)
3. [Ably Account](https://ably.com/)

### Clone the Repository
```bash
git clone https://github.com/dular88/ticket-management-with-ably-supabase.git
cd ticket-management-with-ably-supabase
```

### Install Dependencies
```bash
npm install
```

### Environment Variables
Create a `.env` file in the root directory and populate it with the following variables:
```env
DATABASE_URL=<your_supabase_database_url>
SUPABASE_API_KEY=<your_supabase_api_key>
ABLY_API_KEY=<your_ably_api_key>
```

### Run Database Migrations
Ensure your database schema is set up by running the migration scripts.
```bash
npm run migrate
```

### Start the Application
```bash
npm run start
```
Access the API at `http://localhost:3000`.

---

## API Documentation

### Swagger UI
The API documentation is available at:
```
http://localhost:3000/api-docs
```

### Endpoints

#### **Tickets**
- `POST /api/tickets` - Create a new ticket.
- `GET /api/tickets` - List all tickets with optional filters (status, priority).
- `GET /api/tickets/:id` - Retrieve a specific ticket by ID.
- `PATCH /api/tickets/:id` - Update ticket details (status, priority, assignment).
- `DELETE /api/tickets/:id` - Delete a ticket.

#### **Agents**
- `POST /api/agents` - Create a new agent.
- `GET /api/agents` - List all agents.

#### **Real-Time Updates**
- Uses Ably for broadcasting events like `ticket_created` or `ticket_updated`.

---

## Design Decisions

1. **Framework:**
   - Choose NestJS for its modular architecture and built-in support for validation and decorators.

2. **Database:**
   - Supabase was used for its ease of setup and PostgreSQL backend.

3. **Real-Time Updates:**
   - Integrated Ably to broadcast ticket-related events, enabling real-time communication.

4. **Validation:**
   - Used `class-validator` to enforce request body constraints.

5. **Documentation:**
   - Implemented Swagger for detailed and interactive API documentation.

---

## Challenges Faced

1. **Real-Time Integration:**
   - Setting up Ably and ensuring proper broadcasting of events required debugging and testing.

2. **Supabase Setup:**
   - Creating the correct schema and managing migrations in Supabase was a learning experience.

3. **Validation and Error Handling:**
   - Ensuring robust validation and meaningful error messages across the application took careful design.

4. **Swagger Integration:**
   - Properly annotating DTOs and controllers for comprehensive documentation was detailed but rewarding.

---

## Future Improvements

1. Add authentication and authorization to secure endpoints.
2. Enhance filtering options for ticket listings.
3. Add more detailed logging for debugging.
4. Build a frontend to consume the API and showcase real-time updates.



