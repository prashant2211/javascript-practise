
/*=========================================================================================================\\
                                         ---------------   
                                         |   HEADING    |
                                         ----------------

                Author:- Prashant Raj
                Level :- Beginers
                Topic :- i and looping value given by user (full loop based on user input)
//=========================================================================================================*\


/*``````````````````````````````````````````````````````````````````````````````````````````````````````````\\
                                        ----------------                              
                                       |     CODE       |                                       
                                        ----------------                                         */


    function user_input(num, num1)
  {
      for(let i=num; i <= num1; i++){
      console.log('number'+':'+ i);
      }
  }
  var number = prompt("Enter the number: ");
  var looping_time = prompt("Enter the loop counting: ");
  user_input(number, looping_time);



/*                                     -------------------
                                       |      END         |
                                       -------------------                                  
//```````````````````````````````````````````````````````````````````````````````````````````````````````````*/





