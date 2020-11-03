
/*=========================================================================================================\\
                                         ---------------   
                                         |   HEADING    |
                                         ----------------

                Author:- Prashant Raj
                Level :- Beginers
                Topic :- Dom manupulation usiing airthmetic operation
//=========================================================================================================*\


/*``````````````````````````````````````````````````````````````````````````````````````````````````````````\\
                                        ----------------                              
                                       |     CODE       |                                       
                                        ----------------                                                     */


            function input(){
               let a = (prompt("Enter the first number: "));
               let b = (prompt("Enter the second number:"));
            }

            function add(){
               let sum = parseInt(a) + parseInt(b);
               document.getElementById('result').innerHTML = "Sum of given numbers : " + parseInt(sum);
            }

            function subtract(a, b){
               let subtract = parseFloat(a) - parseFloat(b);
               document.getElementById('result').innerHTML = "Subtraction of given numbers: " + parseFloat(subtract);
            }

            function multiply(){
               let multiply = parseInt(a) * parseInt(b);
               document.getElementById('result').innerHTML = "Multiplication of given numbers: " + parseInt(multiply);
            }

            function divide(){
               let div = parseInt(a) / parseInt(b);
               document.getElementById('result').innerHTML = "Division of given numbers: " + parseInt(div);
            }

            function modulas(){
               let modulas = parseInt(a) % parseInt(b);
               document.getElementById('result').innerHTML = "Modulas of given number: " + parseInt(modulas);
            }

            let keyword = prompt('What you want? ');

            if (keyword === add){
               input();
               add();
            }
            else if (keyword == subtract){
               input();
               subtract();
            }
            else if (keyword == multiply){
               input();
               multiply();
            }
            else if (keyword == divide){
               input();
               divide();
            }
            else if (keyword == modulas){
               input();
               modulas();
            }
            else if (keyword == closed){
               exit();
            }
            else{
               document.getElementById('result').innerHTML = "Wrong Input!!";
               input();
            }



/*                                     -------------------
                                       |      END         |
                                       -------------------                                  
//```````````````````````````````````````````````````````````````````````````````````````````````````````````*/
