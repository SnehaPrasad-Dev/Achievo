package com.achievo;

import java.io.IOException;
import java.sql.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.achievo.db.DBConnection;

/**
 * Servlet implementation class ChangePasswordServlet
 */
@WebServlet("/ChangePasswordServlet")
public class ChangePasswordServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ChangePasswordServlet() {
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
		HttpSession session= request.getSession(false);
		if(session==null || session.getAttribute("email")==null)
		{
			response.sendRedirect("login.html");
			return;
		}
		
		String email= (String)session.getAttribute("email");
		String currentPassword=request.getParameter("currentPassword");
		String newPassword=request.getParameter("newPassword");
		String confirmPassword=request.getParameter("confirmPassword");
		
		if(!newPassword.equals(confirmPassword))
		{
			session.setAttribute("msg", "Passwords do not match!");
			response.sendRedirect("changepass.jsp");
			return;
		}
		try {
			Connection con=DBConnection.getConnection();
			
			PreparedStatement ps=con.prepareStatement("SELECT password FROM users WHERE email=?");
			ps.setString(1, email);
			ResultSet rs=ps.executeQuery();
			
			if(rs.next())
			{
			    String dbPassword = rs.getString("password");

			    if(!dbPassword.equals(currentPassword))
			    {
			        session.setAttribute("msg", "Current password is incorrect!");
			        response.sendRedirect("changepass.jsp");
			        return;
			    }
			}
			else
			{
			    session.setAttribute("msg", "User not found!");
			    response.sendRedirect("changepass.jsp");
			    return;
			}
			
			PreparedStatement update= con.prepareStatement("UPDATE users SET password=? WHERE email=?");
			update.setString(1, newPassword);
			update.setString(2, email);
			
			int i= update.executeUpdate();
			if(i>0)
			{
				session.setAttribute("msg", "Password updated Successfully");
			}
			else
			{
				session.setAttribute("msg", "Something went wrong");
			}
			
			response.sendRedirect("changepass.jsp");
		}
		
		catch(Exception e)
		{
			e.printStackTrace();
			response.sendRedirect("changepass.jsp");
		}
	    }

}
