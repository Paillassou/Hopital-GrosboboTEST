/*Ancre avec scroll progressif*/
$(document).ready(function() {
  $('a').on('click', function(evt) {
    /*Bloquer le comportement par défaut: on ne rechargera pas la page */
    evt.preventDefault();
    /*enregistre la valeur de l'attribut  href dans la variable target*/
    var target = $(this).attr('href');

    $('html, body')
      /*on arrête toutes les animations en cours*/
      .stop()
      /* on fait maintenant l'animation vers le haut (scrollTop) vers
       notre ancre target */
      .animate({
        scrollTop: $(target).offset().top
      }, 1000);
  });
});

/*Fonction jQuery
Tout le texte est en display none. A chaque clic le texte concerné s'affiche, à chaque clic suivant tout redisparait et le bon texte suivant apparaît
 */

    $(document).ready(function() {

  $("#buttonshoulder").click(function() {
    if ($("#shoulder").is(':visible') && $('#shoulder').data/*affiche le texte du bouton concerné-->*/('lastClicked') !== this) {
                $('#shoulder').toggle/*affichage lent du texte en scrolling*/("slow")
    } else {
      /*Cache les autres textes*/$('p').hide();
      $('#shoulder').toggle("slow");
    }
    $( ".buttton" ).removeClass( "redbutton" );
    $( "#buttonshoulder").addClass("redbutton");
    $('#shoulder').data('lastClicked', this);
  });


  $("#buttonelbow").click(function() {
    if ($("#elbow").is(':visible') && $('#elbow').data('lastClicked') !== this) {
      $('#elbow').toggle("slow");
    } else {
      $('p').hide();
      $('#elbow').toggle("slow");
    }
    $( ".buttton" ).removeClass( "redbutton" );
    $( "#buttonelbow").addClass("redbutton");
    $('#elbow').data('lastClicked', this);
  });


  $("#buttonhip").click(function() {
    if ($("#hip").is(':visible') && $('#hip').data('lastClicked') !== this) {
      $('#hip').toggle("slow");
    } else {
      $('p').hide();
      $('#hip').toggle("slow");
    }
    $( ".buttton" ).removeClass( "redbutton" );
    $( "#buttonhip").addClass("redbutton");
    $('#hip').data('lastClicked', this);
  });


  $("#buttonwrist").click(function() {
    if ($("#wrist").is(':visible') && $('#wrist').data('lastClicked') !== this) {
      $('#wrist').toggle("slow");
    } else {
      $('p').hide();
      $('#wrist').toggle("slow");
    }
    $( ".buttton" ).removeClass( "redbutton" );
    $( "#buttonwrist").addClass("redbutton");
    $('#wrist').data('lastClicked', this);
  });


  $("#buttonknee").click(function() {
    if ($("#knee").is(':visible') && $('#knee').data('lastClicked') !== this) {
      $('#knee').toggle("slow");
    } else {
      $('p').hide();
      $('#knee').toggle("slow");
    }
    $( ".buttton" ).removeClass( "redbutton" );
    $( "#buttonknee").addClass("redbutton");
    $('#knee').data('lastClicked', this);
  });


  $("#buttonankle").click(function() {
    if ($("#ankle").is(':visible') && $('#ankle').data('lastClicked') !== this) {
      $('#ankle').toggle("slow");
    } else {
      $('p').hide();
      $('#ankle').toggle("slow");
    }
    $( ".buttton" ).removeClass( "redbutton" );
    $( "#buttonankle").addClass("redbutton");
    $('#ankle').data('lastClicked', this);
  });
});
