package com.achievo;

import java.io.IOException;
import javax.servlet.http.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ResultServlet
 */
@WebServlet("/ResultServlet")
public class ResultServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ResultServlet() {
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
		
		int correct= 0;
		int attempted= 0;
		int set=Integer.parseInt(request.getParameter("set"));
		int start= 0;
		int end= 0;
		if(set==1)
		{
			start=1;
			end=30;
		}
		else
		{
			start=31;
			end=60;
		}
		int total= end-start+1;
		
		int[] correctAnswers= null;
		
		String subject= request.getParameter("subject");
		switch(subject) {
		case "advjava":
			correctAnswers= new int[]
		   {1,1,1,1,1,1,0,1,1,0,1,1,0,1,2,1,1,2,1,1,
		            2,1,1,0,1,1,1,2,1,3,
		            0,1,0,1,1,1,1,0,1,1,
		            1,1,1,1,1,0,1,1,1,1,
		            2,1,1,0,1,1,1,0};
			break;
		case "cpp":
			correctAnswers= new int[]
					   {1,1,1,1,0,0,2,1,1,0,1,0,2,1,1,0,2,0,1,2,1,2,1,1,0,1,1,1,0,1,
						   0,1,0,1,0,2,0,2,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,2,1,0,2,1,0,0
						};
			break;
		case "cpro":
			correctAnswers= new int[]
					   {2,1,2,0,1,2,0,1,1,2,1,1,1,1,2,2,0,2,1,1,1,1,1,0,2,2,2,1,0,1,
					    2,1,1,1,1,2,0,2,1,1,1,1,1,1,0,2,1,2,0,1,2,1,0,1,0,0,1,1,0,0};
			break;
		case "css":
			correctAnswers= new int[]
					   {1,1,3,1,1,2,1,2,2,0,0,1,0,1,2,1,0,2,3,0,3,0,2,0,1,0,0,1,0,1,
					          1,1,1,1,2,1,0,2,1,0,0,1,1,2,1,0,2,1,0,1,0,1,1,0,1,1,1,0,1,1};
			break;
		case "html":
			correctAnswers= new int[]
					   {0,2,3,2,0,1,1,0,2,1,2,1,1,2,1,2,2,1,3,1,1,2,0,1,0,2,0,1,2,1,
						   1,1,1,2,1,2,1,2,0,1,1,1,2,1,2,1,1,1,2,0,2,2,2,1,1,0,1,1,1,0};
					   
			break;
		case "js":
			correctAnswers= new int[]
					   {1,2,2,1,0,1,1,2,0,1,2,1,2,2,0,1,0,1,1,0,1,1,0,1,1,1,0,2,0,1,
					         1,1,1,1,0,0,0,2,0,1,1,0,2,1,1,1,0,2,2,1,0,1,1,0,1,2,1,1,1,2};
			break;
		case "php":
			correctAnswers= new int[]
					   {1,1,1,2,2,1,2,2,2,1,
							   0,0,2,1,0,2,1,2,2,1,
							   1,0,1,1,1,0,1,1,2,0,
							   0,0,0,0,1,1,1,0,1,0,
							   1,2,1,2,2,1,1,2,1,0,
							   2,1,0,0,2,0,1,1,2,1};
			break;
		case "python":
			correctAnswers= new int[]
					   {1,2,1,1,1,2,1,1,0,1,2,1,1,1,0,2,1,0,1,2,1,1,0,2,1,1,2,1,1,1,
						   0,1,1,1,1,1,0,2,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,1,1};
					  
			break;
		
		}
		for(int i=start; i<=end; i++)
		{
			String ans= request.getParameter("q" +i);
			
			if(ans!=null && !ans.equals(""))
			{
				attempted++;
				if(Integer.parseInt(ans)==correctAnswers[i-1])
				{
					correct++;
				}
			}
			
			}

		int skipped= total-attempted;
		int percent= (correct*100)/total;
		
		HttpSession session= request.getSession();
		if(session==null) {
			request.getSession();
		}
		String username= (String)session.getAttribute("username");
		session.setAttribute("set", set);
		session.setAttribute("subject", subject);
		session.setAttribute("correct", correct);
		session.setAttribute("attempted", attempted);
		session.setAttribute("skipped", skipped);
		session.setAttribute("percent", percent);
		session.setAttribute("total", total);
		if(username!=null)
		{
		session.setAttribute("username", username);
		
		}
		request.getRequestDispatcher("result.jsp").forward(request, response); 
	}
	}

	
