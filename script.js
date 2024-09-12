var student = {
name: 'Sabusiswa',
age: 17,
Grade: 11,
hobbies: 'reading',
fav_sport: 'football'
};
var color=["red","orange","black","pink","purple"]
document.getElementById("Student name is :" + student.name <br> "students favourite sport is :" + student.fav_sport).innerHTML="blue";
document.write("before poping the colors are: " +color.join ("^"));
document.write("My favourite colour is : " +color[3]);
color.pop()
document.write("After Poping the colors are: " + color.join("*"));