/*function myfunction()
{
    document.getElementById("a").innerHTML="a的内容换成innerHTML的内容";
}
function message()
{
    document.write("点击后文档消失")
}
var d = new Date()
var time = d.getHours()
if (time<10)
{
document.write("<b>Good morning</b>")
}
else if (time>=10 && time<16)
{
document.write("<b>Good day</b>")
}
else
{
document.write("<b>Hello World!</b>")
}
function getValue()
  {
  var x=document.getElementById("myHeader")
  alert(x.innerHTML)
  }
function myfunction()
{
    var x=5;
    var y=x+2;
    var demop=document.getElementById("demo")
    demop.innerHTML="y="+y;
}
function myfunction()
{
    var x=5;
    var y=x=2;
    var demop=document.getElementById("demo")
    demop.innerHTML="y="+y;
}
function myFunction()
    {
    var x;
    var d=new Date().getDay();
    switch (d)
    {
    case 0:
        x="Today it's Sunday";
        break;
    case 1:
        x="Today it's Monday";
        break;
    case 2:
        x="Today it's Tuesday";
        break;
    case 3:
        x="Today it's Wednesday";
        break;
    case 4:
        x="Today it's Thursday";
        break;
    case 5:
        x="Today it's Friday";
        break;
    case 6:
        x="Today it's Saturday";
        break;
    }
    document.getElementById("demo").innerHTML=x;
    }
function myfunction()
{   
    var a=15;
    var b='10';
    var c=a+b;
    document.getElementById("ab")
    ab.innerHTML=c;

}*/
function myfunction()
{
var x="",i=1;
while (i<=100)
    {
    if (i%13==0) 
    {
        x=x+i+"<br>";            
    } 
    i++;           
    }
document.getElementById("demo").innerHTML=x;
}

