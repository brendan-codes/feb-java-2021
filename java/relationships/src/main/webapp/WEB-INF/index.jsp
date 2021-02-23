<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<h1>Welcome to Schools n' Students</h1>
<a href="/schools">New School</a> | <a href="/students">New Student</a> | <a href="/logout">logout</a>






<%-- 
<h1>All Books</h1>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Language</th>
            <th>Number of Pages</th>
        </tr>
    </thead>
    <tbody>
        <c:forEach items="${books}" var="b">
        <tr>
            <td><a href="/books/${b.id}"><c:out value="${b.title}"/></a></td>
            <td><c:out value="${b.description}"/></td>
            <td><c:out value="${b.language}"/></td>
            <td><c:out value="${b.numberOfPages}"/></td>
        </tr>
        </c:forEach>
    </tbody>
</table>
<a href="/books/new">New Book</a> --%>