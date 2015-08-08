artc = 1;//Start the counters
title="Frontier Fortnightly - Issue #" //Set title excluding issue ID
divider="----------\n"//Divides titles and content
newsletter=""
function addArticle(){//Add line for thanksgiving section
    artTitle = document.createElement("input");//Start by making the input for title
    artTitle.setAttribute("type", "text");//Add the type
    artTitle.setAttribute("name", "title" + artc);//Give it a unique name
    artTitle.setAttribute("id", "title"+artc);//Give it a unique id
    artCont = document.createElement("textarea");//Repeat for text field for content
    artCont.setAttribute("type", "text");
    artCont.setAttribute("class", "pure-input-2-3");
    artCont.setAttribute("name", "content" + artc);
    artCont.setAttribute("id", "content"+artc);
    artc = artc+1;
    document.getElementById("repeats").appendChild(document.createElement("br"));//Create newline
    document.getElementById("repeats").appendChild(artTitle);//Append everything to the parent block
    document.getElementById("repeats").appendChild(artCont);
}
function formatArt(){
    newsletter+=title+document.getElementById("issueNum").value+"\n\n"
    newsletter+=document.getElementById("announce").innerHTML
    for(i = 0; i < artc; i++){//Repeat process for each news column
        title=document.getElementById("title"+i).value+"\n"
        content=document.getElementById("content"+i).value+"\n\n"
        newsletter+=title+divider+content
    }
    document.getElementById("formatted").innerHTML=newsletter
}