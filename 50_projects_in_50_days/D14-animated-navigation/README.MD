TODO1: HTML
-create a nav element
-create ul elemenet inside nav
-create a element inside li element
-create button element with class of 'icon' and id 'toggle'
-create div element with class 'line line1' and create another div element with 'line line2'

TODO2: CSS

- Change the font-family to Muli
- Add background-color
- Add background-image: linear-gradient(to bottom, #eafbff 0%, #eafbff 50%, #5290f9 50%, #5290f9 100%)
  (see what is the effect it is?)
- set body {display: flex, align-items:center, justify-content: center; height:100vh; margin:0}

TODO2: set nav element css

- nav element background-color: #fff
- padding: 20px
- width: 80px
- nav.active width:350px;
- display: flex of nav element; align-items: center; justify-content: center; border-radius: 3px
- border-radius: 3px
- box-shadow: 0 2px 5px rgba(0,0,0,.3)

TODO3: set nav ul style

- display: flex
- list-style-type: none
- padding:0
- margin:0
- width: 0
- transition: width 0.6s linear;

TODO 4: set nav active ul

- width: 100%
- set nav ul li {transform rotateY(0deg); opacity:0; transition: transform 0.6s linear, opacity 0.6s linear}
- nav.active ul li { opacity:1;}
  -nav.active ul li {opacity:1; transform:rotateY(360deg)}
- nav ul a {position: relative; color:#000; text-decoration: none; margin: 0 10px}

TODO5: icon-styling & active toggle

- set icon background-color: #fff
- border:0; cursor: pointer; padding:0; position:relative; height:30px; width:30px
- icon:focus {outline:0}
- icon .line {background-color: #5290f9}
  height:2px; width: 20px; position:cursor; top: 10px; left:5px
