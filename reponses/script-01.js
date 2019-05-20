//  chemin relatif : reponses/script-01.js 

<script  src="reponses/script-01.js"></script>
//1
$("#ce div:first").css("color","red");
//2
$("#ce").append($("#ce div:first").clone());
//3
$("#ce").prepend($("#ce div:last"));
//4
$("<div>").appendTo("#ce").text($("#ce div").length);
//5
$("#ce div").each((e, i) => $(i).prepend(e+" "))