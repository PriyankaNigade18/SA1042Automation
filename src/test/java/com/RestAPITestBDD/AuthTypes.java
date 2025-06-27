package com.RestAPITestBDD;

import org.testng.Assert;
import org.testng.annotations.Test;

import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

import java.util.HashMap;
/*
 * given(): pre-requisite
 * ----------------------------------------
 * endpoint,request payload, path and query parameters, headers, Authentication
 * 
 * when(): Request
 * -------------------------------------------
 * GET,POST,PUT,PATCH,DELETE
 * 
 * then():validate Response
 * -----------------------------------------
 * status code,status message,response payload,header,cookies
 * 
 */
public class AuthTypes
{
	
	
	String tokenValue;
	
  @Test(priority=1)
  public void basicAuth()
  {
	  
	  System.out.println("*********Basic Authentication:Base64 algorithm*********");
	  
	Response res=given()
			.header("Content-Type","application/json")
			.auth().basic("postman","password")
	  
			.when().get("https://postman-echo.com/basic-auth");
	
	
	//log the result
	res.then().log().body();
	
	//status validation
	  int code=res.getStatusCode();	
	  Assert.assertEquals(code,200);
	  System.out.println("Status code matched!..."+code);
	  
	  //json body
	  boolean status=res.jsonPath().getBoolean("authenticated");
	  System.out.println("Authenticated status is: "+status);
	  
  }
  
  @Test(priority=2)
  public void testDigestAuth()
  {
	  System.out.println("*********Digest Authentication:MD5 and SHA algorithm*********");

	  
	  Response res=given()
			  		.header("Content-Type","application/json")
			  		.auth().digest("postman","password")
			  		
			  			.when().get("https://postman-echo.com/digest-auth");	
	  
	  
	  //log the result
	  res.then().log().body();
	  
	  
	//status validation
	  int code=res.getStatusCode();	
	  Assert.assertEquals(code,200);
	  System.out.println("Status code matched!..."+code);
	  
  }
  //Bearer token
  
  @Test(priority=3)
  public void testGenerateToken()
  {
	  //payload
	  HashMap<String,Object> data=new HashMap<String,Object>();
	  data.put("email","test24@gmail.com");
	  data.put("password","test123");
	  
	  
	  Response res=given()
			  .header("Content-Type","application/json")
			  .body(data)
	  
			  .when().post("https://thinking-tester-contact-list.herokuapp.com/users/login");
	  
	  //log the response
	  res.then().log().body();
	  
	  System.out.println("-----------------------");
	  
	  //get the token
	 tokenValue=res.jsonPath().getString("token");
	  System.out.println(tokenValue);
	  System.out.println("Token generated........");
  }
  
  @Test (priority=4,dependsOnMethods = "testGenerateToken")
  public void testBearerToken()
  {
	  System.out.println("Using same token Get the user details");
	  Response res=given()
			  .header("Content-type","application/json")
			  .header("Authorization","Bearer "+tokenValue)
	  
			  .when().get("https://thinking-tester-contact-list.herokuapp.com/users/me");
	  
	  //log the response
	  res.then().log().body();
	  
	  
  }
  
  
  @Test
  public void OpenAuth2()
  {
	  Response res=given()
	  .header("Content-Type","application/json")
	  .auth().oauth2("gjhjhljklj")
	  
	  .when().get("https://api.github.com/user/repos");
	  
	  
	  //log
	  res.then().log().body();
	  
  }
  
  
  
  
  
}
