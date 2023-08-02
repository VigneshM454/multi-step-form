const name1= document.getElementById('name');
const email= document.getElementById('email');
const phone= document.getElementById('phone');
const nerr=document.getElementById('nerr');
const eerr=document.getElementById('eerr');
const perr=document.getElementById('perr');
const err=document.querySelectorAll('.error');
const ip1=document.getElementsByClassName('ip1');
const active1=document.getElementsByClassName('activecontent1')[0];
const active2=document.getElementsByClassName('activecontent2')[0];
const active3=document.getElementsByClassName('activecontent3')[0];
const active4=document.getElementsByClassName('activecontent4')[0];
const success=document.getElementsByClassName('success')[0];
const range=document.getElementById('range');
const plan=document.querySelectorAll('.plan');
const check=document.querySelectorAll('.check');
const page12=document.getElementById('page12');
const page21=document.getElementById('page21');
const page23=document.getElementById('page23');
const page32=document.getElementById('page32');
const page34=document.getElementById('page34');
const page43=document.getElementById('page43');
const page45=document.getElementById('page45');
const mon=document.querySelectorAll('.mo');
const yr=document.querySelectorAll('.yr');     
const pfname=document.getElementById('pfname');
const pfcost=document.getElementById('pfcost');
let pickarr=[];
let pickarr2=[];
let fpcost;
let num=document.querySelectorAll('.num');
const faddon=document.getElementsByClassName('faddon')[0];
const faddon2=document.getElementsByClassName('faddon2')[0];
const tot=document.getElementById('tot');
let x1;
const phonepattern=/^\+[1-9][0-9]{10}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let hasnumber=(str)=>{
    return /\d/.test(str);
  }
page12.addEventListener('click',()=>{
    let x=0;
    for(var i=0;i<3;i++){
   //     if(ip1[i].value===''){
   // String(ip1[2].value).replace(/\+/g, '\\+').charAt(0);
    
            console.log(String(ip1[2].value).charAt(0))
            if(ip1[i].value===''){
                err[i].style.cssText='display:block';
                x=1;
            }
            if(ip1[i].value!==''){
                err[i].style.cssText='display:none';
                if(hasnumber(ip1[0].value)){
                    err[0].style.cssText='display:block';
                    err[0].innerHTML='Invalid input';
                    x=1;
                }
                if(!(ip1[2].value).match(phonepattern)){
                    err[2].style.cssText='display:block';
                    err[2].innerHTML='Invalid input';  
                    x=1;
                    console.log(x);
                }
                if(!(ip1[1].value).match(emailPattern)){
                    err[1].style.cssText='display:block';
                    err[1].innerHTML='Invalid input';  
                    x=1;
                }
                else{
                    if(x!==1){
                        err[i].style.cssText='display:none';
                    active1.style.cssText='display:none';
                    active2.style.cssText='display:block';
                    range.addEventListener('input',()=>{
                        console.log(range.value);//0 monthly
                                                // 1 yearly
                    })
                    }  
                }
            }
       // }
    }/*
    if(ip1[i].value===''){
        err[i].style.cssText='display:block';
    }
    if(ip1[i].value!==''){
        err[i].style.cssText='display:none';
    }*/
    /*
    if(name1.value===''||email.value===''||phone.value===''){
        if(name1.value===''){
            err[0].style.cssText='display:block';
        }
        if(email.value===''){
            err[1].style.cssText='display:block';
        }
        if(phone.value===''){
            err[2].style.cssText='display:block';
        }
        if(name1.value!==''){
            err[0].style.cssText='display:none';
        }
        if(email.value!==''){
            err[1].style.cssText='display:none';
        }
        if(phone.value!==''){
            err[2].style.cssText='display:none';
        }
    }
    else{
   
    }*/
    
})

function decolor(){
    num.forEach((n)=>{
        n.style.cssText='background-color:white';
    })
}
function color(){
    if(window.getComputedStyle(active1).display !== 'none'){
        decolor();
        num[0].style.cssText='background-color:skyblue';
    }
   // alert(window.getComputedStyle(active2).display)
     if(window.getComputedStyle(active2).display !== 'none'){
        decolor();
        num[1].style.cssText='background-color:skyblue';
    }
    
     if(window.getComputedStyle(active3).display !== 'none'){
        decolor();
        num[2].style.cssText='background-color:skyblue';
    }
    
     if((window.getComputedStyle(active4).display !== 'none')||(window.getComputedStyle(success).display !== 'none')){
        decolor();
        num[3].style.cssText='background-color:skyblue';
    }
}
/*
function setcol(){
   
}*/
const btn=document.querySelectorAll('button');
btn.forEach((b)=>{
    b.addEventListener('click',()=>{
        x1= setTimeout(color,10);
    })
})

window.addEventListener('DOMContentLoaded',color())
  color();
let planname, planamt,h,p,preplan;
    function change(){
        preplan=document.getElementsByClassName('preplan')[0];
        h=preplan.querySelector('.pname')
        p=preplan.querySelector('p'); 
        console.log(h.textContent);
        pfname.innerHTML=h.textContent;
        pfcost.innerHTML=p.textContent;
        if(range.value==='0'){
            p=preplan.querySelector('p.mo'); 
        }
        if(range.value==='1'){
            p=preplan.querySelector('p#yr'); 
        }
    }
    change();
for(var x=0;x<plan.length;x++){
      for (let planel of plan) {
            planel.addEventListener('click', () => {
                plan.forEach((pl)=>{
                    pl.classList.remove('preplan');
                });
                planel.classList.add('preplan');
       
            change();
            console.log(planel.childNodes) ;
               console.log(h.textContent);
               console.log(p.textContent);
               pfname.innerHTML=h.textContent;
               pfcost.innerHTML=p.textContent;
            });
        }
}
document.getElementById('mocol').style.color='darkblue';
document.getElementById('yrcol').style.color='rgba(0, 0, 139,0.4)';

function subs(){
    if(range.value==='0'){//mo
        yr.forEach((y)=>{
            y.style.cssText='display:none';    
        })
        mon.forEach((m)=>{
            m.style.cssText='display:block';
        })
        p=preplan.querySelector('p.mo');
        document.getElementById('mocol').style.color='darkblue';
        document.getElementById('yrcol').style.color='rgba(0, 0, 139,0.4)';
    }
    else{//yr
        mon.forEach((m)=>{
            m.style.cssText='display:none';
        }) 
        yr.forEach((y)=>{
            y.style.cssText='display:block';
        })
        p=preplan.querySelector('p#yr');
        document.getElementById('yrcol').style.color='darkblue';
        document.getElementById('mocol').style.color='rgba(0, 0, 139,0.4)';
    }
}

range.addEventListener('input',()=>{
    console.log(range.value);//0 monthly
                            // 1 yearly
    subs();   
    pfcost.innerHTML=p.textContent;
    console.log(typeof range.value);
})

let rangeval;


function checkstate(x){
    const ischecked=x.checked;
    return ischecked;
}

window.addEventListener('DOMContentLoaded',()=>{
    check.forEach((c)=>{
        if(checkstate(c)){
            c.parentNode.style.cssText='border:2px solid blue; background-color:aliceblue;';          
        }
        else{
            c.parentNode.style.cssText='border:2px solid black; background-color:white;';
        }
        console.log(checkstate(c));
    })
})
check.forEach((c)=>{
    c.addEventListener('input',()=>{
        
       
        for(var i=0;i<check.length;i++){         
            let c1=check[i].parentNode;
            let ch4=c1.querySelector('h4').textContent;
            let ch5;
            let mo=c1.querySelector('h5.mo');
            fpcost=pfcost.innerHTML;
          
            if (window.getComputedStyle(mo).display === 'none') {
                ch5=c1.querySelector('h5.yr').textContent;                
            }
             else {
               ch5=c1.querySelector('h5.mo').textContent;
            }

            if(checkstate(check[i])){
                if(!(pickarr.includes(ch4))){
                    pickarr.push(ch4);
                    pickarr2.push(ch5);
                }
            }
            else{
                if (pickarr.includes(ch4)) {
                    const index = pickarr.indexOf(ch4);
                    if (index !== -1) {
                        pickarr.splice(index, 1);
                        pickarr2.splice(index, 1);
                    }
                    }
              //  }
               
            }
           // console.log(pickarr);
         }
        if(checkstate(c)){
            c.parentNode.style.cssText='border:2px solid blue; background-color:aliceblue;';
        }
        else{
            c.parentNode.style.cssText='border:2px solid black; background-color:white;';
         }
        console.log(checkstate(c));
      //  console.log(pickarr);
    })
})      
let addcharcost=0,cost,charcost,slc;
let checkarr=[];
let totcost;
page34.addEventListener('click',()=>{
        for(var i=0;i<pickarr.length;i++){   
        //    if (!checkarr.includes(pickarr[i])) {
                const newp=document.createElement('p');
            const sp1 =document.createElement('span');
            const sp2=document.createElement('span');
            sp1.textContent=pickarr[i];
            sp2.textContent=pickarr2[i];
            checkarr.push(sp1.textContent);
            console.log(checkarr);
            
            newp.appendChild(sp1);
            newp.appendChild(sp2);
            faddon.appendChild(newp);
            charcost=fpcost.slice(1,-3);
            cost=parseInt(charcost,10);
       //     console.log(pickarr);
        //    console.log(pickarr2);
         //   console.log(fpcost);
          // console.log(pickarr.length)
            let addchar=pickarr2[i].slice(2,-3);
            addcharcost+=parseInt(addchar,10);
             totcost=addcharcost+cost;
            slc=fpcost.slice(-3,);
            tot.innerText='$'+totcost+fpcost.slice(-3,);          
      
        //    }
              }
    if(pickarr.length<=0){
        tot.innerText=pfcost.innerText;          
     //   console.log(pickarr);
    }
 
    rangeval=range.value;
    active3.style.display='none';
    active4.style.display='block';
    
})
page21.addEventListener('click',()=>{
    active2.style.display='none';
    active1.style.display='flex';
})
page32.addEventListener('click',()=>{
    active3.style.display='none';
    active2.style.display='block';
})
page23.addEventListener('click',()=>{ 
    rangeval=range.value;
    active2.style.display='none';
    active3.style.display='block';
})
page45.addEventListener('click',()=>{
    active4.style.display='none';
    success.style.display='block';
})
page43.addEventListener('click',()=>{
    while(faddon.firstChild){
        faddon.removeChild(faddon.firstChild);
    }
    totcost=0;
    addcharcost=0;
    active4.style.display='none';
    active3.style.display='block';
})
function navigate(){
    active4.style.display='none';
    active1.style.display='flex';
}