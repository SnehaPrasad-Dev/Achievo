package com.achievo;

public class AppConfig {

    public static final String DB_URL =
            "jdbc:mysql://localhost:3306/achievo";

    public static final String DB_USERNAME =
            System.getenv("ACHIEVO_DB_USERNAME");

    public static final String DB_PASSWORD =
            System.getenv("ACHIEVO_DB_PASSWORD");

    public static final String EMAIL_USERNAME =
            System.getenv("ACHIEVO_EMAIL_USERNAME");

    public static final String EMAIL_PASSWORD =
            System.getenv("ACHIEVO_EMAIL_PASSWORD");
}