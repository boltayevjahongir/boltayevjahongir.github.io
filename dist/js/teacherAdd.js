( function ( document, window, index )
               {
                  var inputs = document.querySelectorAll( '.inputfile' );
                  Array.prototype.forEach.call( inputs, function( input )
                  {
                     var label	 = input.nextElementSibling,
                        labelVal = label.innerHTML;

                     input.addEventListener( 'change', function( e )
                     {
                        var fileName = '';
                        if( this.files && this.files.length > 1 )
                           fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
                        else
                           fileName = e.target.value.split( '\\' ).pop();

                        if( fileName )
                           label.querySelector( 'span' ).innerHTML = fileName;
                        else
                           label.innerHTML = labelVal;
                     });

                     // Firefox bug fix
                     input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
                     input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
                  });
               }( document, window, 0 ));
               $("#selectOne").change(function() {
                if ($(this).val() == 0) {
                    $(".addDegre").attr("disabled", "disabled");
                } else {
                    $(".addDegre").removeAttr("disabled");
                }
                }).trigger("change");
                $("#selectTwo").change(function() {
                if ($(this).val() == 0) {
                    $(".addRank").attr("disabled", "disabled");
                } else {
                    $(".addRank").removeAttr("disabled");
                }
                }).trigger("change");
                

                document.querySelector("#change-button_1").onclick = function() {
                  const counter = document.getElementById("counter_1");
                  const font = document.getElementById("disable-font_1");
               
                  if (counter.style.pointerEvents === "auto") {
                     counter.style.pointerEvents = "none";
                     font.style.color = "#999999dd";
                  } else {
                     counter.style.pointerEvents = "auto";
                     font.style.color = "black";
                  }
               };

               document.querySelector("#change-button_2").onclick = function() {
                  const counter = document.getElementById("counter_2");
                  const font = document.getElementById("disable-font_2");
                  
                  if (counter.style.pointerEvents === "auto") {
                     counter.style.pointerEvents = "none";
                     font.style.color = "#999999dd";
                  } else {
                     counter.style.pointerEvents = "auto";
                     font.style.color = "black";
                  }
               };   

               document.querySelector("#change-button_3").onclick = function() {
                  const counter = document.getElementById("counter_3");
                  const font = document.getElementById("disable-font_3");
                  
                  if (counter.style.pointerEvents === "auto") {
                     counter.style.pointerEvents = "none";
                     font.style.color = "#999999dd";
                  } else {
                     counter.style.pointerEvents = "auto";
                     font.style.color = "black";
                  }
               }; 

               document.querySelector("#change-button_4").onclick = function() {
                  const counter = document.getElementById("counter_4");
                  const font = document.getElementById("disable-font_4");
                  
                  if (counter.style.pointerEvents === "auto") {
                     counter.style.pointerEvents = "none";
                     font.style.color = "#999999dd";
                  } else {
                     counter.style.pointerEvents = "auto";
                     font.style.color = "black";
                  }
               }; 

               // Grand section js

               document.querySelector("#change_grant_1").onclick = function() {
                  const counter = document.getElementById("counter_grant_1");
                  const font = document.getElementById("disable_grant_1");
                  
                  if (counter.style.pointerEvents === "auto") {
                     counter.style.pointerEvents = "none";
                     font.style.color = "#999999dd";
                  } else {
                     counter.style.pointerEvents = "auto";
                     font.style.color = "black";
                  }
               }; 
               document.querySelector("#change_grant_2").onclick = function() {
                  const counter = document.getElementById("counter_grant_2");
                  const font = document.getElementById("disable_grant_2");
                  
                  if (counter.style.pointerEvents === "auto") {
                     counter.style.pointerEvents = "none";
                     font.style.color = "#999999dd";
                  } else {
                     counter.style.pointerEvents = "auto";
                     font.style.color = "black";
                  }
               }; 

               document.querySelector("#change_grant_3").onclick = function() {
                  const counter = document.getElementById("counter_grant_3");
                  const font = document.getElementById("disable_grant_3");
                  
                  if (counter.style.pointerEvents === "auto") {
                     counter.style.pointerEvents = "none";
                     font.style.color = "#999999dd";
                  } else {
                     counter.style.pointerEvents = "auto";
                     font.style.color = "black";
                  }
               };
               // Shogird
               document.querySelector("#change-button_1_student").onclick = function() {
                  const counter = document.getElementById("counter_1_student");
                  const font = document.getElementById("disable-font_1_student");
                  
                  if (counter.style.pointerEvents === "auto") {
                     counter.style.pointerEvents = "none";
                     font.style.color = "#999999dd";
                  } else {
                     counter.style.pointerEvents = "auto";
                     font.style.color = "black";
                  }
               };
               document.querySelector("#change-button_2_student").onclick = function() {
                  const counter = document.getElementById("counter_2_student");
                  const font = document.getElementById("disable-font_2_student");
                  
                  if (counter.style.pointerEvents === "auto") {
                     counter.style.pointerEvents = "none";
                     font.style.color = "#999999dd";
                  } else {
                     counter.style.pointerEvents = "auto";
                     font.style.color = "black";
                  }
               };
               document.querySelector("#change-button_3_student").onclick = function() {
                  const counter = document.getElementById("counter_3_student");
                  const font = document.getElementById("disable-font_3_student");
                  
                  if (counter.style.pointerEvents === "auto") {
                     counter.style.pointerEvents = "none";
                     font.style.color = "#999999dd";
                  } else {
                     counter.style.pointerEvents = "auto";
                     font.style.color = "black";
                  }
               };
               document.querySelector("#change-button_4_student").onclick = function() {
                  const counter = document.getElementById("counter_4_student");
                  const font = document.getElementById("disable-font_4_student");
                  
                  if (counter.style.pointerEvents === "auto") {
                     counter.style.pointerEvents = "none";
                     font.style.color = "#999999dd";
                  } else {
                     counter.style.pointerEvents = "auto";
                     font.style.color = "black";
                  }
               }
