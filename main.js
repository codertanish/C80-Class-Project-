var name_array=[];

function submit() {
var display_student_array = [];
for (var j =1; j<=4; j++)
{
var name= document.getElementById("name_of_the_student_"+j).value
name_array.push(name);
}

var len = name_array.length;

for (var k = 0; k < len; k++)
{
display_student_array.push("<h4> Name - " + name_array[k]+ "</h4>");

}

document.getElementById("display_name_with_commas").innerHTML=display_student_array;

var no_commas = display_student_array.join(" ")
document.getElementById("display_name_without_commas").innerHTML=no_commas;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

}

function sorting()
{
name_array.sort();

var sorted_array=[];

var len = name_array.length;

for (var k = 0; k < len; k++)
{
sorted_array.push("<h4> Name - " + name_array[k]+ "</h4>");

}

var no_commas = sorted_array.join(" ")
document.getElementById("display_name_without_commas").innerHTML=no_commas;



}