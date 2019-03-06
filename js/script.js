
function plus(){
    var fs = document.getElementById("text").style.fontSize;

    fs = parseInt(fs);
    var txt = document.getElementById("text").style.fontSize = (fs + 3) + "px";
    document.getElementById("display").innerHTML = txt;

}

function minus() {
    var fs = document.getElementById("text").style.fontSize;

    fs = parseInt(fs);
    var txt = document.getElementById("text").style.fontSize = (fs - 3) + "px";
    console.log(txt);
     document.getElementById("display").innerHTML = txt;
}
function bgred(){
document.getElementById("text").style.backgroundColor = "red";
}

function bggreen(){
document.getElementById("text").style.backgroundColor = "green";

}

function bgblue(){
document.getElementById("text").style.backgroundColor = "blue";
   
}

function textred(){
 document.getElementById("text").style.color = "red";
}

function textgreen(){
 document.getElementById("text").style.color = "green";
}

function textblue(){
 document.getElementById("text").style.color = "blue";
}
function pt(){
      var pt = document.getElementById("text").style.paddingTop;

      pt = parseInt(pt);
    
   var pt = document.getElementById("text").style.paddingTop = (pt + 3) + "px";
}
function pr(){
      var pr = document.getElementById("text").style.paddingRight;

      pr = parseInt(pr);
    
   var pt = document.getElementById("text").style.paddingRight = (pr + 3) + "px";
}
function pb(){
      var pb = document.getElementById("text").style.paddingBottom;

      pb = parseInt(pb);
    
   var pb = document.getElementById("text").style.paddingBottom = (pb + 3) + "px";
}
function pl(){
      var pl = document.getElementById("text").style.paddingLeft;

      pl = parseInt(pl);
    
   var pl = document.getElementById("text").style.paddingLeft= (pl + 3) + "px";
}
function pall(){
    var pall = document.getElementById("text").style.padding;
    pall = parseInt(pall);
    console.log(pall);
    var pall = document.getElementById("text").style.padding= (pall + 3) + "px";
}
function mt(){
      var mt = document.getElementById("mtbut").style.marginTop;

      mt = parseInt(mt);
    
   var mt = document.getElementById("mtbut").style.marginTop = (mt + 3) + "px";
}
function mr(){
      var mr = document.getElementById("text").style.marginRight;

      mr = parseInt(mr);
    
   var mr = document.getElementById("text").style.marginRight = (mr + 3) + "px";
}
function mb(){
      var mb = document.getElementById("text").style.marginBottom;

      mb = parseInt(mb);
    
   var mb = document.getElementById("text").style.marginBottom = (mb + 3) + "px";
}
function ml(){
      var ml = document.getElementById("text").style.marginLeft;

      ml = parseInt(ml);
    
   var ml = document.getElementById("text").style.marginLeft= (ml + 3) + "px";
}
function mall(){
    var mall = document.getElementById("text").style.margin;
    mall = parseInt(mall);
    var mall = document.getElementById("text").style.margin= (mall + 3) + "px";
    console.log(mall);
}
function btl(){
    var btl = document.getElementById("text").style.borderTopLeftRadius;
      btl = parseInt(btl);
    var btl = document.getElementById("text").style.borderTopLeftRadius= (btl + 3) + "px";
    
    
}
function btr(){
    var btr = document.getElementById("text").style.borderTopRightRadius;
      btr = parseInt(btr);
    var btl = document.getElementById("text").style.borderTopRightRadius= (btr + 3) + "px";
}
function bbl(){
       var bbl = document.getElementById("text").style.borderBottomLeftRadius;
      bbl = parseInt(bbl);
    var bbl = document.getElementById("text").style.borderBottomLeftRadius= (bbl + 3) + "px";
}
function bbr(){
       var bbr = document.getElementById("text").style.borderBottomRightRadius;
      bbr = parseInt(bbr);
    var bbr = document.getElementById("text").style.borderBottomRightRadius= (bbr + 3) + "px";
}
function ball(){
       var ball = document.getElementById("text").style.borderRadius;
      ball = parseInt(ball);
    var ball = document.getElementById("text").style.borderRadius= (ball + 3) + "px";
}