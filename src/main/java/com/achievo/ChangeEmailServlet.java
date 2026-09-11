package com.achievo;

import java.io.IOException;
import java.sql.*;
import javax.servlet.http.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.achievo.db.DBConnection;

/**
 * Servlet implementation class ChangeEmailServlet
 */
@WebServlet("/ChangeEmailServlet")
public class ChangeEmailServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ChangeEmailServlet() {
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
               HttpSession session = request.getSession(false);

		        if(session == null || session.getAttribute("email") == null) {
		            response.sendRedirect("login.html");
		            return;
		        }

		        String sessionEmail = (String) session.getAttribute("email");

		        String currentEmail = request.getParameter("currentEmail");
		        String newEmail = request.getParameter("newEmail");
		        String confirmEmail = request.getParameter("confirmEmail");

		        // ✅ 1. Check confirm email
		        if(!newEmail.equals(confirmEmail)) {
		            session.setAttribute("msg", "Emails do not match!");
		            response.sendRedirect("changeemail.jsp");
		            return;
		        }

		        // ✅ 2. Check current email matches session
		        if(!sessionEmail.equals(currentEmail)) {
		            session.setAttribute("msg", "Current email is incorrect!");
		            response.sendRedirect("changeemail.jsp");
		            return;
		        }

		        try {
		            Connection con = DBConnection.getConnection();

		            // ✅ 3. Check if new email already exists
		            PreparedStatement check = con.prepareStatement("SELECT * FROM users WHERE email=?");
		            check.setString(1, newEmail);
		            ResultSet rs = check.executeQuery();

		            if(rs.next()) {
		                session.setAttribute("msg", "Email already exists!");
		                response.sendRedirect("changeemail.jsp");
		                return;
		            }

		            // ✅ 4. Update email
		            PreparedStatement update = con.prepareStatement("UPDATE users SET email=? WHERE email=?");
		            update.setString(1, newEmail);
		            update.setString(2, sessionEmail);

		            int i = update.executeUpdate();

		            if(i > 0) {
		                session.setAttribute("msg", "Email updated successfully!");
		                
		                // 🔥 IMPORTANT: update session email also
		                session.setAttribute("email", newEmail);
		            } else {
		                session.setAttribute("msg", "Something went wrong!");
		            }

		            response.sendRedirect("changeemail.jsp");

		        } catch(Exception e) {
		            e.printStackTrace();
		            session.setAttribute("msg", "Server error!");
		            response.sendRedirect("changeemail.jsp");
		        }
		    }
		
	}


