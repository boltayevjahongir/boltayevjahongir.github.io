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
                

               document.querySelector("#save-button_1").onclick = function(){
                  document.getElementById("counter_1").style.pointerEvents = 'none';
                  document.getElementById("disable-font_1").style.color = "#999999dd";
               }
               document.querySelector("#change-button_1").onclick = function(){
                  document.getElementById("counter_1").style.pointerEvents = 'auto';
                  document.getElementById("disable-font_1").style.color = "black";
               }

               document.querySelector("#save-button_2").onclick = function(){
                  document.getElementById("counter_2").style.pointerEvents = 'none';
                  document.getElementById("disable-font_2").style.color = "#999999dd";
               }
               document.querySelector("#change-button_2").onclick = function(){
                  document.getElementById("counter_2").style.pointerEvents = 'auto';
                  document.getElementById("disable-font_2").style.color = "black";
               }

               document.querySelector("#save-button_3").onclick = function(){
                  document.getElementById("counter_3").style.pointerEvents = 'none';
                  document.getElementById("disable-font_3").style.color = "#999999dd";
               }
               document.querySelector("#change-button_3").onclick = function(){
                  document.getElementById("counter_3").style.pointerEvents = 'auto';
                  document.getElementById("disable-font_3").style.color = "black";
               }

               document.querySelector("#save-button_4").onclick = function(){
                  document.getElementById("counter_4").style.pointerEvents = 'none';
                  document.getElementById("disable-font_4").style.color = "#999999dd";
               }
               document.querySelector("#change-button_4").onclick = function(){
                  document.getElementById("counter_4").style.pointerEvents = 'auto';
                  document.getElementById("disable-font_4").style.color = "black";
               }

               // Grand section js

               document.querySelector("#save_grant_1").onclick = function(){
                  document.getElementById("counter_grant_1").style.pointerEvents = 'none';
                  document.getElementById("disable_grant_1").style.color = "#999999dd";
               }
               document.querySelector("#change_grant_1").onclick = function(){
                  document.getElementById("counter_grant_1").style.pointerEvents = 'auto';
                  document.getElementById("disable_grant_1").style.color = "black";
               }

               document.querySelector("#save_grant_2").onclick = function(){
                  document.getElementById("counter_grant_2").style.pointerEvents = 'none';
                  document.getElementById("disable_grant_2").style.color = "#999999dd";
               }
               document.querySelector("#change_grant_2").onclick = function(){
                  document.getElementById("counter_grant_2").style.pointerEvents = 'auto';
                  document.getElementById("disable_grant_2").style.color = "black";
               }

               document.querySelector("#save_grant_3").onclick = function(){
                  document.getElementById("counter_grant_3").style.pointerEvents = 'none';
                  document.getElementById("disable_grant_3").style.color = "#999999dd";
               }
               document.querySelector("#change_grant_3").onclick = function(){
                  document.getElementById("counter_grant_3").style.pointerEvents = 'auto';
                  document.getElementById("disable_grant_3").style.color = "black";
               }

               // Shogird
               document.querySelector("#save-button_1_student").onclick = function(){
                  document.getElementById("counter_1_student").style.pointerEvents = 'none';
                  document.getElementById("disable-font_1_student").style.color = "#999999dd";
               }
               document.querySelector("#change-button_1_student").onclick = function(){
                  document.getElementById("counter_1_student").style.pointerEvents = 'auto';
                  document.getElementById("disable-font_1_student").style.color = "black";
               }

               document.querySelector("#save-button_2_student").onclick = function(){
                  document.getElementById("counter_2_student").style.pointerEvents = 'none';
                  document.getElementById("disable-font_2_student").style.color = "#999999dd";
               }
               document.querySelector("#change-button_2_student").onclick = function(){
                  document.getElementById("counter_2_student").style.pointerEvents = 'auto';
                  document.getElementById("disable-font_2_student").style.color = "black";
               }

               document.querySelector("#save-button_3_student").onclick = function(){
                  document.getElementById("counter_3_student").style.pointerEvents = 'none';
                  document.getElementById("disable-font_3_student").style.color = "#999999dd";
               }
               document.querySelector("#change-button_3_student").onclick = function(){
                  document.getElementById("counter_3_student").style.pointerEvents = 'auto';
                  document.getElementById("disable-font_3_student").style.color = "black";
               }

               document.querySelector("#save-button_4_student").onclick = function(){
                  document.getElementById("counter_4_student").style.pointerEvents = 'none';
                  document.getElementById("disable-font_4_student").style.color = "#999999dd";
               }
               document.querySelector("#change-button_4_student").onclick = function(){
                  document.getElementById("counter_4_student").style.pointerEvents = 'auto';
                  document.getElementById("disable-font_4_student").style.color = "black";
               }