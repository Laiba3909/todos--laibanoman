import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let ans = await inquirer.prompt([
        { name: "select",
            type: "list",
            message: "Select an Operation",
            choices: ["add", "update", "view", "delete", "exit",]
        }
    ]);
    if (ans.select === "add") {
        let addTodo = await inquirer.prompt([
            {
                name: "todo",
                type: "input",
                message: "What do you want to add in todos?"
            }
        ]);
        todos.push(addTodo.todo);
        console.log(todos);
    }
    if (ans.select === "update") {
        let updateTodo = await inquirer.prompt([
            {
                name: "todo",
                type: "list",
                message: "update items in a list:",
                choices: todos.map(item => item)
            }
        ]);
        let addTodo = await inquirer.prompt([
            {
                name: "todo",
                type: "input",
                message: "What do you want to add in todos?"
            }
        ]);
        let newTodo = todos.filter(val => val !== updateTodo.todo);
        todos = [...newTodo, addTodo.todo];
        console.log(todos);
    }
    if (ans.select === "view") {
        console.log("..TO-DO LIST..!:");
        console.log(todos);
    }
    if (ans.select === "delete") {
        let deleteTodo = await inquirer.prompt([
            {
                name: "todo",
                type: "list",
                message: "update items in a list:",
                choices: todos.map(item => item)
            }
        ]);
        let newTodo = todos.filter(val => val !== deleteTodo.todo);
        todos = [...newTodo];
        console.log(todos);
    }
    if (ans.select === "exit") {
        console.log("Exit from todo...!");
        condition = false;
    }
}
