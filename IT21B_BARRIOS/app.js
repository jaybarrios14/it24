class ToDoItem {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }
}

class ToDoList {
    constructor() {
        this.tasks = [];
    }

    addTask(description) {
        const task = new ToDoItem(description);
        this.tasks.push(task);
        console.log(`Task added: ${description}`);
    }

    removeTask(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
            console.log(`Task removed at index ${index}`);
        } else {
            console.log("Invalid index");
        }
    }

    markTaskCompleted(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].toggleCompleted();
            console.log(`Task marked as completed at index ${index}`);
        } else {
            console.log("Invalid index");
        }
    }

    printTasks() {
        console.log("To-Do List:");
        this.tasks.forEach((task, index) => {
            const status = task.completed ? "Completed" : "Not Completed";
            console.log(`${index}: ${task.description} - ${status}`);
        });
    }
}

// Example usage
const toDoList = new ToDoList();
toDoList.addTask("Buy milk");
toDoList.addTask("Walk the dog");
toDoList.addTask("Do laundry");

toDoList.printTasks();

toDoList.markTaskCompleted(0);

toDoList.printTasks();

toDoList.removeTask(1);

toDoList.printTasks();
