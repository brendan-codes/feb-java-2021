<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<c:out value="${2+2}"/>

<h1>Hello world!!</h1>
<form action="/submit" method="POST">
	Username: <input type="text" name="username" placeholder="leave your name!" />
	Email: <input type="text" name="email" placeholder="leave your email!" />
	<input type="submit" value="Create!" />
</form>


</body>
</html>