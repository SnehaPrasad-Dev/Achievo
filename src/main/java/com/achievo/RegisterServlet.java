package com.achievo;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.achievo.db.DBConnection;

/**
 * Servlet implementation class RegisterServlet
 */
@WebServlet("/RegisterServlet")
public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RegisterServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String fullname=request.getParameter("fullname");
		String email=request.getParameter("email");
		String password=request.getParameter("password");
		
		response.setContentType("text/html");
		PrintWriter out=response.getWriter();
		try {
			Connection con=DBConnection.getConnection();
			
			String query= "INSERT INTO users(fullname, email, password) VALUES(?, ?, ?)";
			PreparedStatement ps=con.prepareStatement(query);
			ps.setString(1, fullname);
			ps.setString(2, email);
			ps.setString(3,  password);
			
			int i=ps.executeUpdate();
			
			if(i>0)
			{
				response.sendRedirect("login.html");
				return;
			}
			else {
				out.println("<script>alert('Registration Failed!');</script>");
			}
		}
			catch(Exception e)
			{
				e.printStackTrace();
				
				out.println("<script>alert('Error occurred!');</script>");
			}
		
	}

}
