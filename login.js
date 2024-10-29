<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>
<h2>Login to Inventory Management System</h2>
<form action="login" method="post">
    <label for="username">Username:</label>
    <input type="text" name="username" id="username" required><br>

        <label for="password">Password:</label>
        <input type="password" name="password" id="password" required><br>

            <button type="submit">Login</button>
</form>

<c:if test="${param.error != null}">
    <p style="color: red;">${param.error}</p>
</c:if>
</body>
</html>
