# HSOE College Website API Documentation

## Overview
This API provides endpoints for managing the HSOE Hohai School of Engineering website data, hosted on Vercel with Neon PostgreSQL database.

## Base URL
```
https://your-domain.vercel.app/api
```

## Database Setup
1. Create a Neon PostgreSQL database
2. Set the `DATABASE_URL` environment variable in Vercel
3. Run the seed script to populate initial data:
   ```bash
   npm run seed
   ```

## API Endpoints

### Departments
- **GET** `/departments` - Get all departments
- **GET** `/departments?id={id}` - Get specific department
- **POST** `/departments` - Create new department
- **PUT** `/departments?id={id}` - Update department
- **DELETE** `/departments?id={id}` - Delete department

### Programs
- **GET** `/programs` - Get all programs
- **GET** `/programs?id={id}` - Get specific program
- **GET** `/programs?type={type}` - Filter by type (undergraduate/postgraduate/research)
- **POST** `/programs` - Create new program
- **PUT** `/programs?id={id}` - Update program
- **DELETE** `/programs?id={id}` - Delete program

### Events
- **GET** `/events` - Get all events
- **GET** `/events?id={id}` - Get specific event
- **GET** `/events?type={type}` - Filter by event type
- **GET** `/events?featured=true` - Get featured events
- **POST** `/events` - Create new event
- **PUT** `/events?id={id}` - Update event
- **DELETE** `/events?id={id}` - Delete event

### News
- **GET** `/news` - Get all news
- **GET** `/news?id={id}` - Get specific news item
- **GET** `/news?category={category}` - Filter by category
- **GET** `/news?featured=true` - Get featured news
- **POST** `/news` - Create new news item
- **PUT** `/news?id={id}` - Update news item
- **DELETE** `/news?id={id}` - Delete news item

### Admissions
- **GET** `/admissions` - Get all admission applications
- **GET** `/admissions?id={id}` - Get specific application
- **GET** `/admissions?status={status}` - Filter by status (pending/approved/rejected)
- **POST** `/admissions` - Submit new admission application
- **PUT** `/admissions?id={id}` - Update application status
- **DELETE** `/admissions?id={id}` - Delete application

### Placements - Companies
- **GET** `/placements/companies` - Get all companies
- **GET** `/placements/companies?id={id}` - Get specific company
- **GET** `/placements/companies?top_tier=true` - Get top tier companies
- **POST** `/placements/companies` - Add new company
- **PUT** `/placements/companies?id={id}` - Update company
- **DELETE** `/placements/companies?id={id}` - Delete company

### Placements - Statistics
- **GET** `/placements/stats` - Get all placement statistics
- **GET** `/placements/stats?id={id}` - Get specific stats
- **GET** `/placements/stats?year={year}` - Get stats for specific year
- **POST** `/placements/stats` - Create new stats entry
- **PUT** `/placements/stats?id={id}` - Update stats
- **DELETE** `/placements/stats?id={id}` - Delete stats

### Research - Areas
- **GET** `/research/areas` - Get all research areas
- **GET** `/research/areas?id={id}` - Get specific area
- **GET** `/research/areas?featured=true` - Get featured areas
- **POST** `/research/areas` - Create new research area
- **PUT** `/research/areas?id={id}` - Update research area
- **DELETE** `/research/areas?id={id}` - Delete research area

### Research - Projects
- **GET** `/research/projects` - Get all research projects
- **GET** `/research/projects?id={id}` - Get specific project
- **GET** `/research/projects?area_id={id}` - Filter by research area
- **GET** `/research/projects?status={status}` - Filter by status
- **POST** `/research/projects` - Create new research project
- **PUT** `/research/projects?id={id}` - Update research project
- **DELETE** `/research/projects?id={id}` - Delete research project

### Contact
- **POST** `/contact` - Submit contact enquiry

## Example Requests

### Get all departments
```javascript
fetch('/api/departments')
  .then(response => response.json())
  .then(data => console.log(data));
```

### Create new event
```javascript
const event = {
  title: "Tech Summit 2026",
  date: "15 June 2026",
  location: "Main Auditorium",
  type: "Technical",
  description: "Annual technical conference",
  image_url: "https://example.com/image.jpg"
};

fetch('/api/events', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(event)
})
.then(response => response.json())
.then(data => console.log(data));
```

### Update admission status
```javascript
fetch('/api/admissions?id=123', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ status: 'approved' })
})
.then(response => response.json())
.then(data => console.log(data));
```

## Error Responses
All endpoints return appropriate HTTP status codes and error messages:

- `400` - Bad Request (missing required fields, invalid data)
- `404` - Not Found (resource doesn't exist)
- `409` - Conflict (duplicate entry)
- `500` - Internal Server Error

Example error response:
```json
{
  "error": "Title and date are required"
}
```

## Database Schema
The database includes the following main tables:
- `departments` - Academic departments
- `programs` - Educational programs
- `events` - College events
- `news` - News articles
- `admissions` - Admission applications
- `placement_companies` - Recruiting companies
- `placement_stats` - Placement statistics
- `research_areas` - Research focus areas
- `research_projects` - Research projects
- `contact_enquiries` - Contact form submissions
- `hero_slides` - Homepage hero slides

## Deployment
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard:
   - `DATABASE_URL` - Neon PostgreSQL connection string
4. Deploy automatically or manually

## Security Notes
- All endpoints include basic validation
- Database connections use connection pooling
- SQL injection prevention through parameterized queries
- Environment variables are not exposed to client-side code
