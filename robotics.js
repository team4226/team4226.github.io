l=Array();
l[0]="images/mnctcGear.png";
l[1]="images/midsotaGear.jpg";
l[2]="images/jayceesGear.jpg";
l[3]="images/frcGear.jpg";
j=0;
var gi;
var gd;

function init()
{
    g1=document.getElementById("gear1");
    g2=document.getElementById("gear2");
    g3=document.getElementById("gear3");
    g4=document.getElementById("gear4");
    tl=document.getElementById("teamLogo");
    gi=document.getElementsByClassName("gearImg");
    gd=document.getElementsByClassName("gearDiv");
    w=document.body.offsetWidth/5;

    for (i=1; i<=gd.length; i++)
    {
        t=i*200;
        setTimeout("g"+i+".style.opacity=.9;", t);
        setTimeout("g"+i+".style.width="+w+"px;", t);
        setTimeout("g"+i+".style.height="+w+"px;", t);
    }

    tl.style.left=document.body.offsetWidth/2-tl.offsetWidth/2;
}

function sponsorSwitch()
{
    g=document.getElementById("sponsorGear");
    g.src=l[j];
    if (j==4)
    {
        j=0;
    }
    else
    {
        j++;
    }
}

function gearMove(s)
{
    for (i=0; i<=3; i++)
    {
        gi[i].style.width="100px";
        gi[i].style.height="100px";
        gd[i].style.width="100px";
        gd[i].style.height="100px";
    }
}
