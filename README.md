# Ecommerce_API
MongoDB API Project for Admin In Use of  Product Inventory Control 

Tools & Libraries Required:
  1. Node JS Library
  2. Express Library
  3. Mongoose Library
  4. Visual Studio Code IDE
  5. PostMan Tool
  6. Chrome Browser
  

How to setup:
  1. Clone or download the Repostitory
  2. Use npm install and it will install the required Libraries
  3. To start the Node Server, use  "node index.js " . Since Index.js is our Entry File
  4. To Check the Product API CURD ( Create, Update, Read, Delete ) Functionalities . Use PostMan Tool and check the Following routes

     Create Route
     
     
         url: localhost:8000/products/create

         PostMan:  In Body Section , you can find " x-www-form-urlencoded " option . Add the  "name & Quantity Data"
                 Select POST Request and send the Request

         Result:
              You can see Similar Response in the Output

     
              ![image](https://github.com/swarnajeswanth/Ecommerce_API/assets/41503134/a9cd7666-e0a0-460a-b53b-c8312f95372e)



     Update Route:
     
     
         url: localhost:8000/products/:id/update_quantity/

         PostMan:  In Parms Section , you can find " Query Params & Path/String Params " option . Add the  " Id & Update Quantity Data"
                 Select POST Request and send the Request

         Result:
                 You can see Similar Response in the Output


                  ![image](https://github.com/swarnajeswanth/Ecommerce_API/assets/41503134/923aae71-80d2-4844-bab3-ac4f0174c277)




     Delete Route:

     
         url: localhost:8000/products/:id

         PostMan:  In Parms Section , you can find " Path/String Params " option . Add the  " ID Data"
                 Select Delete Request and send the Request

         Result:
                 You can see Similar Response in the Output


                 ![image](https://github.com/swarnajeswanth/Ecommerce_API/assets/41503134/f055a63f-810c-4768-b390-0d7bc70fc569)



NOTE:
This is a Open Source Project ,Feel Free to Clone and Do the Required Changes
