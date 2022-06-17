//-----Funtion Number 0

function myFunction()
 {
    var x = document.getElementById("myDIV");
    x.querySelector(".example").innerHTML = "It`s dangerous read with precaution";
 }


  //------function number 1

  function myFunction1() 
  {
    const z1 = document.getElementById("myDIV1");// este div se usa para el css myDIV1
    document.getElementById("myDIV1").style.color = "white"; // css in js - css en javascript
    document.getElementById("myDIV1").style.backgroundColor = " rgb(0, 168, 157) "; // css in js - css en javascript
    document.getElementById("myDIV1").style.width = "80%"; // css in js - css en javascript
    document.getElementById("myDIV1").style.fontSize = "9px"; // css in js - css en javascript
    document.getElementById("myDIV1").style.borderRadius= "100px 100px 100px 1px"; // css in js - css en javascript
    document.getElementById("myDIV1").style.transition = "0.5s"; // css in js - css en javascript


    const z = "1 - Use VPN and Proxy for entry " ;
    const p = ["User : hack@zero" + "  " +  "Password : alien007"]; 
    z1.querySelector(".example").innerHTML = "Read important !!! " +  " <br><br> "  + z + "<br><br>" + p;


  }

  //----------------function 2

  const x = function (a, b, c) {return a - b + " " + c};
  const Day = new Date();
  
  document.getElementById("demo2").innerHTML = x (4, 3, "Admin Active") + " " + " || "  + "Users actives" +  " " +
  Math.floor(Math.random() * 20) + "<br>" + Day;
  
  

  //----------------------function 3

  const person = {
    fullName: function() {
      return this.firstName + " " + 
      this.lastName + " " + 
      this.age + " " +
      this.Profession + " " +
      this.Languages;
    }
  }
  
  const person1 = {
    firstName:"Name : Aaron",
    lastName: "P. |",
    age: "| age :" + " " + 26, 
    Profession: "|| Profession : Developer and Ethical Hacker",
    Languages: "<br>" + "|| Language of programming : Javascript | Framework : React",
  }
 
  document.getElementById("demo3").innerHTML = person.fullName.apply(person1) ; 


  //----------------------------SWITCH per day
/*switch */

let days;
switch (new Date().getDay()) {
  case 0:
    days = "Sunday : Change your life today. Don’t gamble on the future, act now, without delay.";
    break;
  case 1:
    days = "Monday : You only fail when you stop trying";
    break;
  case 2:
    days = "Tuesday : Do it now. Sometimes 'later' becomes 'never'";
    break;
  case 3:
    days = "Wednesday : The power of imagination makes us infinite";
    break;
  case 4:
    days = "Thursday : Keep your eyes on the stars, and your feet on the ground ";
    break;
  case 5:
    days = "Friday : Hack your brain and travel to others dimensions";
    break;
  case  6:
    days = "Saturday : Live the moment";
}
document.getElementById("demo4").innerHTML = "Phrase of today -  " + days;