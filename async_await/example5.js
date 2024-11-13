async function doTask(id) {
    return `Task ${id} done`;
}

async function runAllTasks() {
    for (let i = 1; i <= 3; i++) {
        const result = await doTask(i);
        console.log(result); 
    }
}

runAllTasks();
