### Index

- [Rooms](#5-Rooms)

---

<h2 align ='center'> <strong>5. Rooms<strong> </h2>

[Back to Endpoints](#3-endpoints)

<br>

The Room object is defined as:

| Field    | Type   | Description                                |
| -------- | ------ | ------------------------------------------ |
| id       | string | Room unique identifier.                    |
| capacity | number | seating capacity in a room.                |
| CinemaId | string | Identification of the cinema that the room |
|          |        | belongs to.                                |

<br>

### **Endpoints**

<br>

| Method | Routes     | Description                                |
| ------ | ---------- | ------------------------------------------ |
| POST   | /rooms     | Create room.                               |
| GET    | /rooms     | List all rooms.                            |
| GET    | /rooms/:id | List a room using its ID as a parameter.   |
| PATCH  | /rooms/:id | Update a room using its ID as a parameter. |

---

<br>

## **5.1 Room Creation**

[Back to Endpoints](#6-endpoints)

<br>

## POST `/rooms`

<br>

### **Request**:

- POST /rooms
- Host: https://cine-express-projeto-m4.herokuapp.com
- Authorization: Bearer Token
- Content-type: application/json

<br>

### **Request body**:

```json
{
  "capacity": 100,
  "cinema": "1"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `201 - CREATED`**

```json
{
  "capacity": 100,
  "cinema": {
    "id": 1,
    "name": "CineGusta"
  },
  "id": 1
}
```

<br>

### **Error Responses**:

<br>

#### **Status `401 - UNAUTHORIZED`** - "Missing authorization token"

```json
{
  "message": "Invalid token"
}
```

<br>

#### **Status `400 - BAD REQUEST`** - Minimum of seats

```json
{
  "message": "Minimum of 30 chairs"
}
```

<br>

#### **Status `400 - BAD REQUEST`** - Maximum of seats

```json
{
  "message": "Maximum of 100 chairs"
}
```

<br>

#### **Status `400 - BAD REQUEST`** - Maximum number of rooms created

```json
{
  "message": "Only 10 rooms can be created"
}
```

<br>

#

## **5.2 List Rooms**

[Back to Endpoints](#5-endpoints)

<br>

## GET `/rooms`

<br>

### **Request**:

- GET /rooms
- Host: https://cine-express-projeto-m4.herokuapp.com
- Authorization: Bearer Token
- Content-type: application/json
- Empty body

<br>

### **Request headers**:

```json
{
  "authorization": "Bearer Token"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `200 - OK`**

```json
[
   {
		"id": 1,
		"capacity": 100,
		"sessions": []
	}
...
]
```

<br>

### **Error Responses**:

<br>

#### **Status `401 - UNAUTHORIZED`** - "Missing authorization token"

```json
{
  "message": "invalid token"
}
```

## **5.3 List Room by Id**

[Back to Endpoints](#5-endpoints)

<br>

## GET `/rooms/:id`

<br>

### **Request**:

- POST /users
- Host: https://cine-express-projeto-m4.herokuapp.com
- Authorization: Bearer Token
- Content-type: application/json
- Empty body
- User must be an Adm

<br>

### **Request headers**:

```json
{
  "authorization": "Bearer Token"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `200 - OK`**

```json
{
  "id": 1,
  "capacity:": 100,
  "sessions": []
}
```

<br>

### **Error Responses**:

<br>

#### **Status `401 - UNAUTHORIZED`** - "Missing authorization token"

```json
{
  "message": "invalid token"
}
```

<br>

#### **Status `404 - NOT FOUND`** - Invalid Id or room not exists

```json
{
  "message": "Invalid Id or room not exists"
}
```

## **5.4 Update Room**

[Back to Endpoints](#5-endpoints)

<br>

## PATCH `/rooms/:id`

<br>

### **Request**:

- PATCH /rooms/roomId
- Host: https://cine-express-projeto-m4.herokuapp.com
- Authorization: Bearer Token
- Content-type: application/json
- User must be an Employee and admin

<br>

### **Request headers**:

```json
{
  "authorization": "Bearer Token"
}
```

### **Request body**:

```json
{
  "capacity": 50
}
```

<br>

### **Expected Response**:

<br>

#### **Status `200 - OK`**

```json
{
  "id": 1,
  "capacity": 50
}
```

<br>

### **Error Responses**:

<br>

#### **Status `401 - UNAUTHORIZED`** - "Missing authorization token"

```json
{
  "message": "invalid token"
}
```

<br>

#### **Status `403 - FORBIDDEN`** - "User is not employee"

```json
{
  "message": "User is not employee"
}
```

<br>

<br>

#### **Status `403 - FORBIDDEN`** - "User is not adm"

```json
{
  "message": "User is not adm"
}
```

<br>

#### **Status `404 - NOT FOUND`** - Room was not found

```json
{
  "message": "Room was not found"
}
```

<br>

#### **Status `400 - BAD REQUEST`** - Minimum limit

```json
{
  "message": "Room cannot have a capacity less than 30"
}
```

<br>

#### **Status `400 - BAD REQUEST`** - Maximum limit

```json
{
  "message": "Room cannot have a capacity above than 100"
}
```
