<%-- 
    Document   : index
    Created on : 27 Jan, 2022, 11:29:46 PM
    Author     : MAHESH JADHAV
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.sql.*"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Display data in jsp</title>
    </head>
    <body>
        <table>
            <tr>
                <th>Username</th>
                <th>Password</th>
            </tr>
            
                <%
                    try{
                        Class.forName("com.mysql.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/licence", "root","");
			
			Statement s=con.createStatement();
			ResultSet rs=s.executeQuery("select * from register");
			while(rs.next())
			{
                            %> 
                            <tr>
                            <td><%=rs.getString("username")%></td>
                            <td><%=rs.getString("password")%></td>
                            </tr>
                            <%
			}
                    }
                        catch(Exception e) {
			System.out.println(e.getMessage());
                    }
                %>
           
        </table>
    </body>
</html>
