function header(){
    return ` <div id="header">
    <div class="store">
       <img src="data:image/jpeg;base64,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" alt="" class="locationlogo">
       <p class="position">Find a store</p>
       <p class="position">Buying Guides</p>
       <p class="position">Contact Us</p>
   </div>
   <div class="middlebox">
   <a href="./index.html">

   <div class="reliancelogo">
           <img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="">
       </div>
       </a>

       <div id="searchbar">
           <input type="search" placeholder="Find Your favorite Products" id="q">

            <button id="searchbtn">Search</button>
           </div>
            <div class="logincart">
      <a href="./cart.html"><img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt="" class="lgp">
       <p class="lgp">Cart</p></a>
       <a href="./login.html"> <img src="https://simg.nicepng.com/png/small/136-1366211_group-of-10-guys-login-user-icon-png.png" alt="" class="lgp">
       <p class="lgp">Login</p></a>
   </div>
   </div>
  

  
  
  
  
</div>
<div id=dropdown>
   <ul>
       <li id="mt">MOBILE & TABLETS</li>
       <li id="ta">TELEVISION AND AUDIO</li>
       <li id="ha">HOME APPLIANCES</li>
       <li id="co">COMPUTERS</li>
       <li id="ca">CAMERAS</li>
       <li id="ka">KITCHEN APPLIANCES</li>
       <li id="pc">PERSONAL CARE</li>
       <li id="ac">ACCESSORIES</li>
   </ul>
   </div>
​
   <div id="popupdiv">
       <div id="toggle1" class="toggledisp">
           <div id="mobandtab">
               <div>
                   <ul>
                       <a href="./prodcatalogfromnav.html"><li class="bold">Smartphone</li></a>
                       <li>Accessories</li>
                       <li>Apple Accessories</li>
                       <li> Mobile Accessories</li>
                       <li>Tublet Accessories</li>
                       <li>Docking Accessories</li>
                       <li>Mobile Grips & standa</li>
                   </ul>                            
               </div>
               <div>
                   <ul>
                       <li class="bold">Smart and Wearbales</li>
                       <li>Trending Smart Watches</li>
                   </ul>
               </div>                        
           </div>
       </div>
       <div id="toggle2" class="toggledisp">
           <div id="tel&aud">
               <div>
                   <ul>
                       <li class="bold">Telivisions</li>
                       <li>Smart Tv</li>
                   </ul>
               </div>
               <div>
                   <ul>
                       <li class="bold">Speciality Speakers</li>
                       <li class="bold">Gaming</li>
                       <li>Gaming Consoles</li>
                   </ul>
               </div>
               <div>
                   <ul>
                       <li class="bold">Reconnect Disney | Marvel Audio Collection</li>
                   </ul>
               </div>
           </div>
       </div>
       <div id="toggle3" class="toggledisp">
           <div id="homapp">
               <div>
                   <ul>
                       <li class="bold">Air conditioning</li>
                       <li>Split Air Conditioners</li>
                          <li>Window Air Conditioners</li> 
                          <li> Smart Air Conditioners</li>
                          <li> Energy Efficient Air Conditioners</li>
                          <li> 1 ton Air Conditioners</li>
                          <li> 1.5 ton Air Conditioners</li>
                          <li> 1.5 ton Air Conditioners</li>
                           </ul>
               </div>
               <div>
                   <ul>
                       <li class="bold">Washing Machines</li>
                          <li>Fully Automatic Front Load</li>
                          <li> Fully Automatic Top Load</li>
                          <li>Semi-Automatic Top Load</li>
                          <li>Washing Machine Detergents & Liquids</li>
                        </ul>
               </div>
               <div>
                   <ul>
                       <li class="bold">Dish washers</li>
                   </ul>
               </div>
           </div>
       </div>
       <div id="toggle4" class="toggledisp">
           <div id="comp">
               <div>
                   <ul>
                       <li class="bold">Laptop</li>
                       <li>Basic use laptops</li>
                       <li> Student Laptops</li>
                       <li> Thin and light Laptops</li>
                       <li> Multi-Tasking Laptops</li>
                       <li> Gaming Laptops</li>
                       <li> Content creator Laptops</li>
               </ul>
               </div>
               <div>
                   <ul>
                       <li class="bold">Bluetooth & WiFi Speakers</li>
                       <li class="bold">Internet Connectivity Devices</li>
                   </ul>
               </div>
               <div>
                   <ul>
                       <li class="bold">Computer Accessories</li>
                       <li>Computer Networking Cables</li>
                       <li>Laptop Chargers & Adaptor</li>
                       <li>Laptop Bags & Sleeves</li>
                       <li>Laptop Cooling Pad</li>
                       <li>Laptop Screen Protectors</li>
                    </ul>
               </div>
           </div>
       </div>
       <div id="toggle5" class="toggledisp">
           <div id="cam">
               <div>
                   <ul>
                       <li class="bold">DSLR Cameras</li>
                       <li>Mirrorless Cameras</li>
                       <li>Point & Shoot Cameras</li>
                       <li>ProSumer Cameras</li>
                       <li>Action Cameras</li>
                        </ul>
               </div>
               <div>
                   <ul>
                       <li class="bold">Digital Camera Accessories</li>
                       <li>Camera Batteries & Chargers</li>
                       <li>Camera bags & cases</li>
                       <li>Tripods & Monopods</li>
                       <li>Action Camera Accessories</li>
               </ul>
               </div>
               
           </div>
       </div>
       <div id="toggle6" class="toggledisp">
           <div id="kitchapp">
               <div>
                   <ul>
                       <li class="bold">Microwave Ovens</li>
                       <li class="bold"> Water Purifiers</li>
                       <li class="bold">Fruits and Vegetable Cleaner</li>
                       <li class="bold">Oven Toaster Grillers (OTG)</li>
                   </ul>
               </div>
               <div>
                   <ul>
                       <li class="bold">Induction Cookers</li>
                       <li class="bold">Food Processors</li>
                       <li class="bold">Blenders</li>
                       <li class="bold">Kitchen Hobs & Gas Stoves</li>
                    </ul>
               </div>
               <div>
                   <ul>
                       <li class="bold"> Specialty Appliances</li>
                       <li>Electric Kettles</li>
                       <li>Water Dispensers</li>
                       <li>Wet Grinders</li>
                      </ul>
               </div>
           </div>
       </div>
       <div id="toggle7" class="toggledisp">
           <div id="percare">
               <div>
                   <ul>
                       <li class="bold">Shavers and Trimmers</li>
                       <li class="bold"> Epilators</li>
                       <li class="bold">Hair Dryers & Stylers</li>
                       <li class="bold">Irons</li>
                    </ul>
               </div>
               <div>
                   <ul>
                       <li> Reconnect Disney|Marvel Grooming Collection</li>
                       <li>Hygiene & Personal Care</li>
                       <li>Digital Thermometers</li>
                       </ul>
               </div>
               
           </div>
       </div>
       <div id="toggle8" class="toggledisp">
           <div id="acces">
               <div>
                   <ul>
                       <li class="bold">Bags Cases & Sleeves</li>
                       <li class="bold">Smart Devices</li>
                       <li>Smart Plugs</li>
                       <li>Smart Cameras</li>
                       <li>Smart Sensors</li>
                       <li>Smart Lights</li>
                       <li>Smart Speakers</li>
       </ul>
               </div>
               <div>
                   <ul>
                       <li class="bold">Reconnect Disney | Marvel Accessories</li>
                       <li class="bold">Memory Cards</li>
                       <li class="bold">Mounts & Stands</li>
                       <li class="bold">Pen Drives</li>
                       <li class="bold">Routers</li>
                </ul>
               </div>
               <div>
                   <ul>
                       <li class="bold">External Hard Disks</li>
                       <li class="bold">Headphones & Headsets</li>
                       <li class="bold">Keyboards</li>
                       <li class="bold">Indoor Lighting</li>
                   </ul>
               </div>
           </div>
       </div>
       
   </div>`
}

function footer(){
    return `<div class="cont1">
    <div>
       <h4>PRODUCT CATAGORIES</h4> 
        <p>Smartphones</p>
        <p>Laptops</p>
        <p>DSLR Cameras</p>
        <p>Televisions</p>
        <p>Air conditioners</p>
        <p>Refrigerators</p>
        <p>Kitchen Appliances</p>
        <p>Accessories</p>
        <p>Personal Care & Grooming</p>
    </div>
    <div>
       <h4>SITE INFO</h4> 
       <p>About Reliance Digital</p>
       <p>resQ Services</p>
       <p>Site Map</p>
       <p>Gift Cards</p>
       <p>Corporate Enquires</p>
       <p>Contact Us</p>
    </div>
    <div>
        <h4>RESOURCE CENTER</h4>
        <p>Product Reviews</p>
        <p>Buying Guides</p>
        <p>How Tos</p>
        <p>Featured Stories</p>
        <p>Event & Happenings</p>
    </div>
    <div>
       <h4>POLICIES</h4>
       <p>Terms of use</p>
       <p>Cancellation and Retruns</p>
       <p>Privacy Policy</p>
       <p>E-waste Policy</p>
       <p>EMI Terms and Conditions</p>
       <p>Pricing and Payments Policy</p>
       <p>Delivery & Shipping Policy</p>
       <p>JioMart Maha Cashback T&C</p>
    </div>
</div>
<div class="cont2">
    <div>
        <h4>FOLLOW US</h4>
        <a href="https://www.facebook.com"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8IpEU3sOxQxNjMw3VAoSWsekRpvgOvjziQ&usqp=CAU" alt="" class="socialmedialogo"></a>
        <a href="https://www.twitter.com"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQuQ1WZVJ3GUDCgjBkdoi29hZKhG2jqSJm2A&usqp=CAU" alt="" class="socialmedialogo"></a>
        <a href="https://www.youtube.com"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS49-2NdYCnhN07iUFqsG_ExFiP3QjH9s9naA&usqp=CAU" alt="" class="socialmedialogo"></a>
        </div>
      
    <div>
        <h4>EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</h4> 
       <img src="https://www.reliancedigital.in/build/client/images/google_play_store.png" alt="" class="image">
       <img src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png" alt="" class="image">
    </div>
</div>
      <div id="cont3">©2021 Reliance Digital. All Rights Reserved</div>`
}

export {footer,header}