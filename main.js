
var taskInput=document.getElementById("new-task");//Add a new task.
var addButton=document.getElementsByTagName("button")[0];//first button
var incompleteTaskHolder=document.getElementById("incomplete-tasks");//ul of #incomplete-tasks
var completedTasksHolder=document.getElementById("completed-tasks");//completed-tasks


//New task list item
var createNewTaskElement=function(taskString){

	var listItem=document.createElement("li");

	//input (checkbox)
	var checkBox=document.createElement("input");//checkbx
	//label
	var label=document.createElement("label");//label
	//input (text)
	var editInput=document.createElement("input");//text
	
	

	//button.delete
	var deleteButton=document.createElement("button");//delete button

	label.innerText=taskString;

	//Each elements, needs appending
	checkBox.type="checkbox";
	editInput.type="text";

	
	deleteButton.innerText="delete";
	deleteButton.className="material-icons delete";



	//and appending.
	listItem.appendChild(checkBox);
	listItem.appendChild(label);

	listItem.appendChild(deleteButton);
	return listItem;
}




    var button = document.getElementById("button");

button.addEventListener("click", function() {
      
var url=`https://jsonplaceholder.typicode.com/todos`;
    console.log(url)
    axios.post(url)
        .then(function(response) {
            if (response)
            console.log(response)
        
            //Create a new list item with the text from the #new-task:
            var listItem=createNewTaskElement(taskInput.value);
        
            //Append listItem to incompleteTaskHolder
            incompleteTaskHolder.appendChild(listItem);
            bindTaskEvents(listItem, taskCompleted);
        
            taskInput.value="";
            

        }).catch(error)
   

    })






//Delete task.
var deleteTask=function(){
            console.log("Delete Task...");

            var listItem=this.parentNode;
            var ul=listItem.parentNode;
            //Remove the parent list item from the ul.
            ul.removeChild(listItem);

}


//Mark task completed
var taskCompleted=function(){
		console.log("Complete Task...");
	
	//Append the task list item to the #completed-tasks
	var listItem=this.parentNode;
	completedTasksHolder.appendChild(listItem);
				bindTaskEvents(listItem, taskIncomplete);

}


var taskIncomplete=function(){
		console.log("Incomplete Task...");
//Mark task as incomplete.
	//When the checkbox is unchecked
		//Add the task list item to the #incomplete-tasks.
		var listItem=this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
			bindTaskEvents(listItem,taskCompleted);
}



var ajaxRequest=function(){
	console.log("AJAX Request");
}



var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
	console.log("bind list item events");
//select ListItems children
	var checkBox=taskListItem.querySelector("input[type=checkbox]");

	var deleteButton=taskListItem.querySelector("button.delete");


		
			deleteButton.onclick=deleteTask;

			checkBox.onchange=checkBoxEventHandler;
}

	for (var i=0; i<incompleteTaskHolder.children.length;i++){

		bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
	}




//cycle over completedTasksHolder ul list items
	for (var i=0; i<completedTasksHolder.children.length;i++){
	//bind events to list items chldren(tasksIncompleted)
		bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
	}



