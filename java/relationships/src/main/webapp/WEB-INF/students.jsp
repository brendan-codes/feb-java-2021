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

	<c:forEach items="${students}" var="stu">
		<p>
			<c:out value="${stu.firstName }"></c:out>
			<c:out value="${stu.school.name }"></c:out>
		</p>
	</c:forEach>


	<form:form action="/students" method="post" modelAttribute="student">
	    <p>
	        <form:label path="firstName">Name your name</form:label>
	        <form:errors path="firstName"/>
	        <form:input path="firstName"/>
	    </p>
	   	<p>
	        <form:label path="lastName">Name your lastname</form:label>
	        <form:errors path="lastName"/>
	        <form:input path="lastName"/>
	    </p> 
	    <p>
	        <form:label path="age">Name your age</form:label>
	        <form:errors path="age"/>
	        <form:input path="age"/>
	    </p> 
	    <p>
	    	<form:label path="school"></form:label>
	    	<form:errors path="school"></form:errors>
	    	<form:select path="school">
	    		<option value="" disabled selected>Select a school!</option>
	    		<c:forEach items="${schools}" var="s">
					<form:option value="${s}">
						<c:out value="${s.name}"></c:out>
					</form:option>
				</c:forEach>
	    	</form:select>
	    </p>
	    <input type="submit" value="Submit"/>
	</form:form>
</body>
</html>