// the DOMContent is already loaded for you.
document.addEventListener("DOMContentLoaded",function(e){
    var button  = document.getElementById("colorSubmit");
    console.dir(button);
    var color = '#'; 
    var colors = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0'];      
    color += colors[Math.floor(Math.random() * colors.length)];
        	
        	
    button.onclick = function(e){
        e.preventDefault();
        var listItem = document.getElementById('list').children;
        console.dir('listItem:',listItem.children);
        for (var m = 0;m < listItem.length;m++){
        	// listItem[m].classList.add('blueListItem');
        	// document.getElementsByClassName('blueListItem').style.color = color; 
        	console.log('color:',color);
            listItem[m].style.color = color;
            // color = ''; trying to reset as the random color won't change
        	
        }
    };

    var userInput = document.getElementById('userInput');
    userInput.onclick = function(e){
        e.preventDefault();
        var ourTextBox = document.getElementById('colorSubmit').children[3].value;
        console.log('ourTextBox:',ourTextBox);
        var list = document.getElementById('list');
        var listItem = document.createElement('li');
        console.log('listItem:',listItem)
        listItem.innerHTML = ourTextBox;
        list.appendChild(listItem);
        
    }
})
