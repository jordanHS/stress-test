var stressCounter = 0;
var managementCounter = 0;


$(document).ready(function(){
  $("form#stress-test").submit(function(event){
    event.preventDefault();
    $("#warning-responses").show();
    $("input:checkbox[name=warning-signs]:checked").each(function(){
      var warningSigns = $(this).val();
      $('#warning-responses').append(warningSigns + "<br>");
      stressCounter+=1;
    });
    $("#symptom-responses").show();
    $("input:checkbox[name=symptoms]:checked").each(function(){
      var symptoms = $(this).val();
      $('#symptom-responses').append(symptoms + "<br>");
      stressCounter+=1;
    });
    $("#management-responses").show();
    $("input:checkbox[name=management]:checked").each(function(){
      var management = $(this).val();
      $('#management-responses').append(management + "<br>");
      managementCounter+=1;


    });

    if (managementCounter >= 2) {
      $("#good-job").show();
    }

    else if (stressCounter >= 6) {
      $("#suggestions").show();
    }
  });
});
