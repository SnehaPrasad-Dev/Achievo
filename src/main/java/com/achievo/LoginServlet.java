package com.achievo;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.*;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
	
	}
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	

		// TODO Auto-generated method stub
		
		response.setContentType("text/html");
		
		String email= request.getParameter("email");
		String password= request.getParameter("password");
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection(
				    AppConfig.DB_URL,
				    AppConfig.DB_USERNAME,
				    AppConfig.DB_PASSWORD
				);
			String query="SELECT * FROM users WHERE email=? AND password=?";
			PreparedStatement ps=con.prepareStatement(query);
			ps.setString(1, email);
			ps.setString(2, password);
			
			ResultSet rs=ps.executeQuery();
			
			
			if(rs.next())
			{
				HttpSession session=request.getSession();
				session.setAttribute("fullname",rs.getString("fullname"));
				session.setAttribute("email", email);
				
				response.sendRedirect(request.getContextPath() + "/start.html");
			}
			else
			{
				PrintWriter out=response.getWriter();
				out.println("<script>");
				out.println("alert('Invalid Email or Password!');");
				out.println("location='login.html';");
				out.println("</script>");
			}
			con.close();
			}
			
		catch(Exception e)
		{
			e.printStackTrace();

		}
	
	}

}
