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
 * Servlet implementation class DeleteAccountServlet
 */
@WebServlet("/DeleteAccountServlet")
public class DeleteAccountServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DeleteAccountServlet() {
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

        // ✅ 1. Check if user is logged in
        if (session == null || session.getAttribute("email") == null) {
            response.sendRedirect("login.html");
            return;
        }

        String sessionEmail = (String) session.getAttribute("email");

        String enteredEmail = request.getParameter("userEmail");
        String password = request.getParameter("password");

        // ✅ 2. Check email matches session
        if (!sessionEmail.equals(enteredEmail)) {
            session.setAttribute("msg", "Email does not match your account!");
            response.sendRedirect("delete.jsp");
            return;
        }

        try {
            Connection con = DBConnection.getConnection();

            // ✅ 3. Verify password
            PreparedStatement ps = con.prepareStatement(
                "SELECT * FROM users WHERE email=? AND password=?"
            );
            ps.setString(1, sessionEmail);
            ps.setString(2, password);

            ResultSet rs = ps.executeQuery();

            if (!rs.next()) {
                session.setAttribute("msg", "Incorrect password!");
                response.sendRedirect("delete.jsp");
                return;
            }

            // ✅ 4. Delete account
            PreparedStatement delete = con.prepareStatement(
                "DELETE FROM users WHERE email=?"
            );
            delete.setString(1, sessionEmail);

            int i = delete.executeUpdate();

            if (i > 0) {
                // 🔥 IMPORTANT: logout user after delete
                session.invalidate();

                // Redirect to login with message
                response.sendRedirect("login.html");
            } else {
                session.setAttribute("msg", "Something went wrong!");
                response.sendRedirect("delete.jsp");
            }

        } catch (Exception e) {
            e.printStackTrace();
            session.setAttribute("msg", "Server error!");
            response.sendRedirect("delete.jsp");
        }
    }

	}


