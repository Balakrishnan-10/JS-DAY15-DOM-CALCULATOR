
// Create elementsusing Function(): 
function ele(tag,classname,id,text){
    let tags = document.createElement(tag);
    tags.classList = classname;
    tags.id = id;
    tags.innerHTML = text;
    return tags;
}

// Create h1, p, div, input, eleton tags:
const h1 = ele("h1","d-flex align-item-center justify-content-center","title","");
const p  = ele("p","d-flex align-item-center justify-content-center","description", "");
const div = ele("div","d-flex justify-content-center align-items-center","container","");
h1.innerHTML = "<strong>DOM Calculator</strong>";
p.innerHTML = "Calculator was Created by DOM";

const calci = ele("div","d-grid rounded-3 border border-dark p-5","calculator","");

const input = ele("input","d-grid rounded-3","result","");
input.type = "text";
input.placeholder = "0";
input.setAttribute = ("readonly","true");

const bt0  = ele("button","rounded-3 text-danger","clear","C");
const bt1  = ele("button","rounded-3","back","<");
const bt2  = ele("button","rounded-3","dot",".");
const bt3  = ele("button","rounded-3","multiply","*");
const bt4  = ele("button","rounded-3","7","7");
const bt5  = ele("button","rounded-3","8","8");
const bt6  = ele("button","rounded-3","9","9");
const bt7  = ele("button","rounded-3","division","/");
const bt8  = ele("button","rounded-3","4","4");
const bt9  = ele("button","rounded-3","5","5");
const bt10 = ele("button","rounded-3","6","6");
const bt11 = ele("button","rounded-3","subtract","-");
const bt12 = ele("button","rounded-3","1","1");
const bt13 = ele("button","rounded-3","2","2");
const bt14 = ele("button","rounded-3","3","3");
const bt15 = ele("button","rounded-3","add","+");
const bt16 = ele("button","rounded-3","0","0");
const bt17 = ele("button","rounded-3","00","00");
const bt18 = ele("button","rounded-3 bg-primary","equal","=");

bt0.setAttribute("onclick", "Clear()");
bt0.setAttribute("onkeydown", "handlekey(event)");

bt1.setAttribute("onclick", "del()");
bt1.setAttribute("onkeydown", "handlekey(event)");

bt2.setAttribute("onclick", "solve('.')");
bt2.setAttribute("onkeydown", "handlekey(event)");

bt3.setAttribute("onclick", "solve('*')");
bt3.setAttribute("onkeydown", "handlekey(event)");

bt4.setAttribute("onclick", "solve('7')");
bt5.setAttribute("onclick", "solve('8')");
bt6.setAttribute("onclick", "solve('9')");

bt7.setAttribute("onclick", "solve('/')");
bt7.setAttribute("onkeydown", "handlekey(event)");

bt8.setAttribute("onclick", "solve('4')");
bt9.setAttribute("onclick", "solve('5')");
bt10.setAttribute("onclick", "solve('6')");

bt11.setAttribute("onclick", "solve('-')");
bt11.setAttribute("onkeydown", "handlekey(event)");

bt12.setAttribute("onclick", "solve('1')");
bt13.setAttribute("onclick", "solve('2')");
bt14.setAttribute("onclick", "solve('3')");

bt15.setAttribute("onclick", "solve('+')");
bt15.setAttribute("onkeydown", "handlekey(event)");

bt16.setAttribute("onclick", "solve('0')");
bt17.setAttribute("onclick", "solve('00')");


bt18.setAttribute("onclick", "equal()");
bt18.setAttribute("onkeydown", "handlekey(event)");


div.append(calci)
calci.append(input,bt0,bt1,bt1,bt2,bt3,bt4,bt5,bt6,bt7,bt8,bt9,bt10,bt11,bt12,bt13,bt14,bt15,bt16,bt17,bt18);

document.body.append(h1,p,div);

// calculator all function :
var output = document.getElementById("result");

function solve(val) {
    output.value += val;
}

function equal() {
    try{
        output.value = eval(output.value);
}
catch{
    output.value = "Invalid";
    alert("ONLY NUMBERS ARE ALLOWED");
}
}

function Clear() {
    output.value = "";
}

function del() {
    output.value = output.value.slice(0, -1);
  }
































