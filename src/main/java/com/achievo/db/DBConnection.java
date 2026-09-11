package com.achievo.db;
import java.sql.Connection;
import java.sql.DriverManager;
import com.achievo.AppConfig;
public class DBConnection {
public static Connection getConnection() {
	Connection con=null;
	
	try {
		Class.forName("com.mysql.cj.jdbc.Driver");
		con = DriverManager.getConnection(
		        AppConfig.DB_URL,
		        AppConfig.DB_USERNAME,
		        AppConfig.DB_PASSWORD
		);
		
	}
	catch(Exception e)
	{
		e.printStackTrace();
	}
	return con;
}
}
