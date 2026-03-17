# 01UDF/01TXY Web Applications I (2025/2026)

## API design

### __List the films__

URL: `/api/films`

HTTP Method: GET.

Description: Retrieve the list of all the available films.

Response: `200 OK`(success) or `500 Internal Server Error` (failure). In case of success, returns an array of films in JSON format (see below); otherwise, an error message.

Response body:
```
[
  {
    "id": 1,
    "title": "Pulp Fiction",
    "favorite": true,
    "rating": 5,
    "watchDate": "2026-03-09T23:00:00.000Z",
    "userId": 1
  },
  ...
]
```