package com.achievo;

import javax.mail.*;
import javax.mail.internet.*;
import java.util.Properties;
import java.util.Random;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class ForgotPasswordServlet
 */
@WebServlet("/ForgotPasswordServlet")
public class ForgotPasswordServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ForgotPasswordServlet() {
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
		String email=request.getParameter("email");
		
		Random rand= new Random();
		int otp= 100000 + rand.nextInt(900000);
		
		HttpSession session=request.getSession();
		session.setAttribute("otp", otp);
		session.setAttribute("email", email);
		
		long expiryTime= System.currentTimeMillis() + (60 * 1000);
		session.setAttribute("otpExpiry", expiryTime);
		
		final String senderEmail = AppConfig.EMAIL_USERNAME;
		final String appPassword = AppConfig.EMAIL_PASSWORD;
		
		Properties props= new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587");
		props.put("mail.smtp.auth", "true");
		
		props.put("mail.smtp.starttls.enable", "true");
		
		Session mailSession= Session.getInstance(props, new Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new 
			PasswordAuthentication(senderEmail, appPassword);
						
			}
		});
		
		try {
			Message message= new MimeMessage(mailSession);
			message.setFrom(new InternetAddress(senderEmail));
			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(email));
			message.setSubject("Your Achievo Password Reset OTP");
			message.setText("Hello,\n\nYour OTP for resetting your password is: " +otp+ 
					"\n\nYour OTP is valid for 1 minute. Do not share it with anyone.");
			Transport.send(message);
			response.sendRedirect("otp.html");
		}
		catch(MessagingException e){
			e.printStackTrace();
		    response.setContentType("text/html");
		    PrintWriter out=response.getWriter();
		    
		    out.println("<script>alert('Error sending email. Check connection.');"
		    		+ " location='forgot.html';</script>");
		    				
		}
		
	
	}

}
