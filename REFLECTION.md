### 1. Why is it beneficial to separate your routes, models, and database connection into different directories?<br>
It keeps the code organized, easier to read, and maintain. Each file has a single responsibility, which makes debugging and scaling simpler.

### 2. What is the difference between PUT and PATCH HTTP methods, and which one does your PUT /:id endpoint more closely resemble?<br>

PUT replaces the whole resource with new data.

PATCH updates only specific fields.
Our PUT /:id endpoint behaves more like PATCH since it updates only the fields sent in req.body.

### 3. In the DELETE route, what is a good practice for the response you send back to the client after a successful deletion? Should you send the deleted object, a simple success message, or something else? Why?<br>
A simple success message (with maybe the deleted ID) is best. It confirms deletion without sending unnecessary data, keeping responses clean and secure.