// 1.Create a HTML FORM with the following fields using DOM(functional approach)
// a.Firstname
// b.Middlename
// c.lastname
// e.email
// f.state

function labels(tagname,attname,attvalue,content){
    let ele=document.createElement(tagname);
    ele.setAttribute(attname,attvalue)
    ele.innerHTML=content
    return ele
}
function linebreak(tagname){
    let ele=document.createElement(tagname)
    return ele
}

function inputs(tagname,attname,attvalue,attname1,attvalue1,content){
    let ele=document.createElement(tagname);
    ele.setAttribute(attname,attvalue)
    return ele
}
function butt(tagname,content){
    let ele=document.createElement(tagname);
    ele.innerHTML=content
    return ele
}


var fistnames=labels("label","for","name1","Firstname")
var breaks=linebreak("br")
var inputtag=inputs("input","type","text","id","name1")
var breaks0=linebreak("br")

var fistnames1=labels("label","for","name2","Middlename")
var breaks1=linebreak("br")
var inputtag1=inputs("input","type","text","id","name2")
var breaks01=linebreak("br")

var fistnames2=labels("label","for","name3","Lastname")
var breaks2=linebreak("br")
var inputtag2=inputs("input","type","text","id","name3")
var breaks02=linebreak("br")

var fistnames3=labels("label","for","name4","Email")
var breaks3=linebreak("br")
var inputtag3=inputs("input","type","text","id","name4")
var breaks03=linebreak("br")

var fistnames4=labels("label","for","name5","State")
var breaks4=linebreak("br")
var inputtag4=inputs("input","type","text","id","name5")
var breaks04=linebreak("br")

var buttons=butt("button","Submit")





document.body.append(fistnames,breaks,inputtag,breaks0,fistnames1,breaks1,inputtag1,breaks01,fistnames2,breaks2,inputtag2,breaks02,fistnames3,breaks3,inputtag3,breaks03,fistnames4,breaks4,inputtag4,breaks04,buttons)




