1) "npm install" to install the required packages : BOTH ON SERVER AND CLIENT
2) "npm run dev" to lanuch the server from the server screen
3) "npm start" from the client screen

-------Make sure you are connected to VPN because the database is stored in Stagging server--------


** NodeJS for nmp dependency
** VS code as IDE for Visual Studion
** Need Stagging Serevr MSSQL database  to store the data
** Postman to test API
** Download Chrome extension. 
** https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=zh-CN



Important Urls,

GET Request
http://localhost:4000/api/order/orderdata		--get all the orders from the databse         ->                                                according to Date
http://localhost:4000/api/drivers/data			--get all the driver Data
http://localhost:4000/api/users/current			--JWT tokens for protected routes and example for future use case
http://localhost:4000/api/users/display			--Just to display users we will remove this in future while deployement.



POST Request
http://localhost:4000/api/users/login			--Post all the login request with UserName and Password

