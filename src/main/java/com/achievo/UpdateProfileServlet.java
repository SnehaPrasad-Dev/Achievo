package com.achievo;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class UpdateProfileServlet
 */
@WebServlet("/UpdateProfileServlet")
public class UpdateProfileServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdateProfileServlet() {
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
		String displayName= request.getParameter("displayName");
		String newPassword= request.getParameter("newPassword");
		String currentPassword= request.getParameter("currentPassword");
		
		HttpSession session= request.getSession();
		String email= (String)session.getAttribute("email");
		
		response.setContentType("text/html");
		PrintWriter out=response.getWriter();
		
		if(email==null)
		{
		out.println("<script>alert('Session expired! Please login again');"
				+ "location='login.html';</script>");
		return;
		}
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection(
				    AppConfig.DB_URL,
				    AppConfig.DB_USERNAME,
				    AppConfig.DB_PASSWORD
				);
			
			String checkQuery="SELECT password FROM users WHERE email=?";
			PreparedStatement checkPs=con.prepareStatement(checkQuery);
			checkPs.setString(1, email);
			
			ResultSet rs=checkPs.executeQuery();
			
			if(rs.next())
			{
				String dbPassword= rs.getString("password");
				
				if(currentPassword == null || currentPassword.isEmpty())
				{
				    out.println("<script>alert('Please enter current password');location='editprofile.html';</script>");
				    return;
				}
				
				if(!dbPassword.equals(currentPassword))
				{
					out.println("<script>alert('Current Password is incorrect!');"
							+ "location='editprofile.html';</script>");
					return;
				}
			}
			String updateQuery;
			if(newPassword==null || newPassword.isEmpty())
			{
				updateQuery="UPDATE users SET fullname=?  WHERE email=?";
			}
			else {
				updateQuery="UPDATE users SET fullname=?, password=?  WHERE email=?";
			}
			PreparedStatement ps=con.prepareStatement(updateQuery);
			
			ps.setString(1, displayName);
			
			if(newPassword==null || newPassword.isEmpty())
			{
				ps.setString(2, email);
			}
			else {
				ps.setString(2, newPassword);
				ps.setString(3, email);
			}
			int result=ps.executeUpdate();
			if(result>0)
			{
				session.setAttribute("fullname", displayName);
				out.println("<script>");
				out.println("alert('Profile updated successfully!');");
				out.println("location='login.html';");
				out.println("</script>");
			}
			else {
				out.println("<script>alert('Update Failed!');"
						+ "location='editprofile.html';</script>");
			}
			ps.close();
			con.close();
			}
		    catch(Exception e)
		    {
			e.printStackTrace();
		    }
		}

}
