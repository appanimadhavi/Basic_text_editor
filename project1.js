const textarea=document.getElementById("textarea");

function m1(e)
{
    let value=e.value;
    textarea.style.fontSize=value+"px";
}
function m2(e)
{
    if(textarea.style.fontWeight=="bold")
    {
        textarea.style.fontWeight="normal";
    }
    else
    {
        textarea.style.fontWeight="bold";
    }
}
function m3(e)
{
    if(textarea.style.fontStyle=="italic")
    {
        textarea.style.fontStyle= "normal";
    }
    else{
        textarea.style.fontStyle= "italic";
    }
}
function m4(e)
{
    if(textarea.style.textDecoration=="underline")
    {
        textarea.style.textDecoration="none";
    }
    else
    {
        textarea.style.textDecoration="underline";
    }
}
function m5(e)
{
    textarea.style.textAlign="left";   
}
function m6(e)
{
    textarea.style.textAlign="center";   
}
function m7(e)
{
    textarea.style.textAlign="right";   
}
function m81(e)
{
    
    textarea.style.textTransform="uppercase";
    
}
function m82(e)
{
    textarea.style.textTransform="none";
}
function m9(e)
{
    textarea.style.textAlign="left"; 
    textarea.style.fontWeight="normal";
    textarea.style.textDecoration="normal";
    textarea.style.fontStyle= "normal";
    textarea.value="";

}
function m10(e)
{
    let value=e.value;
    textarea.style.color=value;

}