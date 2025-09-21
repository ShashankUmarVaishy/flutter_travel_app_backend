# S_Squad Ventures Mini Project - Backend

A Node.js backend API for managing banquet and venue bidding system, built with Express.js, TypeScript, Prisma, and MongoDB.

## Features

- **Bid Creation**: Submit bids for banquet events with detailed specifications
- **Validation**: Robust input validation using Zod schemas
- **Error Handling**: Centralized error handling middleware
- **Database Integration**: MongoDB with Prisma ORM
- **TypeScript Support**: Fully typed codebase for better development experience

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Prisma ORM
- **Validation**: Zod
- **Environment**: dotenv for configuration

## Project Structure

```
back_end/
├── src/
│   ├── controller/
│   │   └── banquets_and_venues.ts    # Controller for bid operations
│   ├── middleware/
│   │   └── error-handler.ts          # Error handling middleware
│   ├── Types/
│   │   └── banquet_bid.ts            # Zod schemas for validation
│   └── index.ts                      # Main application entry point
├── prisma/
│   └── schema.prisma                 # Database schema definition
├── generated/
│   └── prisma/                       # Auto-generated Prisma client
├── dist/                             # Compiled JavaScript output
├── package.json                      # Dependencies and scripts
├── tsconfig.json                     # TypeScript configuration
├── .env                              # Environment variables
└── .gitignore                       # Git ignore rules
```

## API Endpoints

### Base URL
`http://localhost:3000` (default port)

### Routes

#### GET /
Returns a welcome message.

**Response:**
```json
"This is s_squad_mini_project Server!"
```

#### POST /api/v1/banq_and_ven/bid
Creates a new bid for a banquet or venue event.

**Request Body:**
```json
{
  "EventType": "string",
  "Country": "string",
  "State": "string",
  "City": "string",
  "Dates": ["ISO8601 date string"],
  "AdultCount": number,
  "CateringPreference": "string",
  "Cuisine": "string",
  "BudgetAmount": number,
  "AmountCurrency": "string",
  "OffersWithin": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Bid created successfully",
  "data": {
    "id": "string",
    "EventType": "string",
    "Country": "string",
    "State": "string",
    "City": "string",
    "Dates": ["Date"],
    "AdultCount": number,
    "CateringPreference": "string",
    "Cuisine": "string",
    "BudgetAmount": number,
    "AmountCurrency": "string",
    "OffersWithin": "string"
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error description",
  "stack": "Error stack (development only)"
}
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ShashankUmarVaishy/flutter_travel_app_backend.git
   cd back_end
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with:
   ```
   DATABASE_URL="your-mongodb-connection-string"
   PORT=3000
   ```

4. Generate Prisma client:
   ```bash
   npx prisma generate
   ```

5. Push the database schema:
   ```bash
   npx prisma db push
   ```

## Running the Application

### Development
```bash
npm run dev
nodemon ./dist/index.js
```


## Database Schema

The application uses MongoDB with the following main model:

### Banquet_Bid
- `id`: Auto-generated ObjectId
- `EventType`: String
- `Country`: String
- `State`: String
- `City`: String
- `Dates`: Array of DateTime
- `AdultCount`: Integer
- `CateringPreference`: String
- `Cuisine`: String
- `BudgetAmount`: Integer
- `AmountCurrency`: String
- `OffersWithin`: String

## Validation Rules

All bid creation requests are validated using Zod schemas:

- `EventType`: Required, non-empty string
- `Country`: Required, minimum 5 characters
- `State`: Required, minimum 5 characters
- `City`: Required, minimum 5 characters
- `Dates`: Required array of valid ISO date strings, at least one date
- `AdultCount`: Required positive integer
- `CateringPreference`: Required, minimum 3 characters
- `Cuisine`: Required, minimum 5 characters
- `BudgetAmount`: Required positive integer
- `AmountCurrency`: Required, non-empty string
- `OffersWithin`: Required, non-empty string

## Error Handling

The application includes comprehensive error handling:

- **Validation Errors**: Returns 400 status with detailed field-level error messages
- **Server Errors**: Returns 500 status with error details
- **Custom Errors**: Uses operational errors with specific status codes
