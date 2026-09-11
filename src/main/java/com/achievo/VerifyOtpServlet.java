package com.achievo;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class VerifyOtpServlet
 */
@WebServlet("/VerifyOtpServlet")
public class VerifyOtpServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public VerifyOtpServlet() {
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
		response.setContentType("text/html");
		PrintWriter out=response.getWriter();
		try {
			 String otpInput = request.getParameter("otp");

			       
			        if (otpInput == null || otpInput.trim().isEmpty()) {
			            out.println("<script>alert('Please enter OTP');location='otp.html';</script>");
			            return;
			        }

			        int userOtp = Integer.parseInt(otpInput);

			        HttpSession session = request.getSession();
			        Object otpObj = session.getAttribute("otp");
			        Object expiryObj = session.getAttribute("otpExpiry");

			     
			        if (otpObj == null || expiryObj == null) {
			            out.println("<script>alert('Session expired. Try again');location='forgot.html';</script>");
			            return;
			        }

			        int realOtp = (int) otpObj;
			        long expiryTime = Long.parseLong(expiryObj.toString());
			        long currentTime = System.currentTimeMillis();

			        if (currentTime > expiryTime) {
			            out.println("<script>");
			            out.println("alert('OTP expired! Please try again.');");
			            out.println("location='forgot.html';");
			            out.println("</script>");
			            return;
			        }

			    
			        if (userOtp == realOtp) 
			        {
			            session.removeAttribute("otp");
			            session.removeAttribute("otpExpiry");

			            response.sendRedirect("reset.html");
			        } else 
			        {
			            out.println("<script>");
			            out.println("alert('Invalid OTP. Please try again!');");
			            out.println("location='otp.html';");
			            out.println("</script>");
			        }

			    } 
		         catch (NumberFormatException e) 
		         {
			        out.println("<script>alert('OTP must be numbers only!');location='otp.html';</script>");
			     } 
		          catch (Exception e)
		         {
			        e.printStackTrace();
			        out.println("<script>alert('Something went wrong!');location='otp.html';</script>");
			     }
			}
			
			
}


