// programmer name: Luis Rodriguez

// program use: This progam will be Loading each work members bio's without having to go to a new page.

// date: Oct 04 2022

$(document).ready(function() {      // starting the main function  
    
	
	//jsonCallFunction();
    ajaxCallFunction();     // calling one of the two functions
});


function ajaxCallFunction(){     // function for the ajax
              
    $.ajax({      // variable for ajax
                url: 'team.json',       // file in folder URL                                       
                
				method: 'GET',      // Getting the team.json file                                           
                
				dataType: 'json',    // type of data being GET                                        
                
				beforeSend: function(){   // before starting the main function                                   
                        $('#team').append('<h2 id="load">Loading...</h2>').hide(2000);  // loading comes on to bring in the #team div in 2 seconds
                },                                                              
                    
                complete: function(){                                             
                    $('#load').hide(1000);    // load function hides after 1 second                                      
                         
                },
                    
                success: function(workmembers) {   // function for the array of work members                              
                        
                    $.getJSON('team.json', function(team) {                     
                            $.each(team.workmembers, function() {   // function for the team members array                                                
                                $('#team').append("<h2>" +this['name']+ "</h2><h5>" +this['position']+    //.append will insert the name, the position, and the bio.
                                            "</h5><p>" +this['bio']+"</p>").fadeIn(4000);    // fadeIn at 4 seconds
                            });
                            console.log(workmembers);     // print the array of work members
                        
                    })
                        
                        setTimeout(function() {   // this will load a message on screen
                            alert('Data has Loaded from team.json');   // the alert will appear to the user that the file team.json data has been gotten from the page   
                        }, 4500);  // 4.5 seconds 
                    }}
)};


function jsonCallFunction(){  // function for JSON     
	
    
	$.getJSON("team.json", function(team) {                     
        
		$.each(team.workmembers, function() {                   
            
			$("#team").append("<h2>"+this['name']+"</h2><h5>"      // . append will insert the name , position, and bio into the json call function
                                    
									+this['position']+ "</h5><p>"
                                    
									+this['bio']+"</p>");
            
        }
		
    )})};  // closing