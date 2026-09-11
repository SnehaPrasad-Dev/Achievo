package com.achievo;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import javax.servlet.http.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class UpdatePasswordServlet
 */
@WebServlet("/UpdatePasswordServlet")
public class UpdatePasswordServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UpdatePasswordServlet() {
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
               String newPassword = request.getParameter("newPassword");

		        HttpSession session = request.getSession();
		        String email = (String) session.getAttribute("email");

		        response.setContentType("text/html");
		        PrintWriter out = response.getWriter();
		        
		        if(email==null)
		        {
		        	out.println("<script>");
		        	out.println("alert('Session expired! Please try again!');");
		        	
		        	out.println("location='forgot.html';");
		        	out.println("</script>");
		        	return;
		        }

		        try {
		        	Class.forName("com.mysql.cj.jdbc.Driver");
		        	Connection con = DriverManager.getConnection(
		        		    AppConfig.DB_URL,
		        		    AppConfig.DB_USERNAME,
		        		    AppConfig.DB_PASSWORD
		        		);

		            String query = "UPDATE users SET password=? WHERE email=?";
		            PreparedStatement ps = con.prepareStatement(query);

		            ps.setString(1, newPassword);
		            ps.setString(2, email);

		            int result = ps.executeUpdate();

		            if (result > 0) {
		            	session.removeAttribute("email");
		                // ✅ Success
		                out.println("<script>");
		                out.println("alert('Password updated successfully!');");
		                out.println("location='login.html';");
		                out.println("</script>");
		            } else {
		                // ❌ Failed
		                out.println("<script>");
		                out.println("alert('Error updating password!');");
		                out.println("location='reset.html';");
		                out.println("</script>");
		            }
                    ps.close();
		            con.close();
		            

		        } catch (Exception e) {
		            e.printStackTrace();
		            out.println("Error: " + e.getMessage());
		        }
		    }
		
	

}
