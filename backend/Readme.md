# User Registration Endpoint

## Endpoint

`POST /users/register`

## Description

Yeh endpoint naya user register karne ke liye use hota hai. User ko apne details provide karne hote hain jaise ki fullname, email, aur password.

## Request Body

Yeh fields required hain:

- **fullname**: Object
  - **firstname**: String (minimum 3 characters)
  - **lastname**: String (minimum 3 characters)
- **email**: String (valid email format)
- **password**: String (minimum 6 characters)

### Example Request Body

json
{
"fullname": {
"firstname": "John",
"lastname": "Doe"
},
"email": "john.doe@example.com",
"password": "securepassword"
}
json
{
"token": "JWT_TOKEN",
"user": {
"fullname": {
"firstname": "John",
"lastname": "Doe"
},
"email": "john.doe@example.com"
}
}
json
{
"errors": [
{
"msg": "Please enter a valid email",
"param": "email"
},
{
"msg": "Password must be at least 6 characters long",
"param": "password"
},
{
"msg": "First Name must be at least 3 characters long",
"param": "fullname.firstname"
}
]
}
Is file ko backend/README.md ke naam se save kar sakte hain. Isme aapke endpoint ki saari zaroori information hai.

## Responses

### Success Response

- **Code**: 200
- **Content**:
  json
  {
  "token": "JWT_TOKEN",
  "user": {
  "fullname": {
  "firstname": "John",
  "lastname": "Doe"
  },
  "email": "john.doe@example.com"
  }
  }

### Error Responses

- **Code**: 400
- **Content**:
  son
  {
  "errors": [
  {
  "msg": "Please enter a valid email",
  "param": "email"
  },
  {
  "msg": "Password must be at least 6 characters long",
  "param": "password"
  },
  {
  "msg": "First Name must be at least 3 characters long",
  "param": "fullname.firstname"
  }
  ]
  }

## Notes

- Ensure that all fields are provided in the request body.
- Passwords are hashed before being stored in the database.
