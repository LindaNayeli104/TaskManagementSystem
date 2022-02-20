document.addEventListener("DOMContentLoaded", () => {
  const list_el = document.querySelector("#tasks");
  //Get elements
  var title = "";
  const dueDate = "";
  const isCompleted = 0;

  //Fetch stuff

  let url =
    "https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks?token=nextLine123456";
  async function getTaks() {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: new Headers({
        //Authentication: "Bearer ${token}",
        Authorization:
          "Bearer e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd",
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    });

    const tasks = await response.json();
    console.log(tasks);
    renderTaks(tasks);
  }

  getTaks();

  function renderTaks(tasks) {
    for (var i = 0; i < tasks.length; i++) {
      const task = tasks[i].title;

      const task_el = document.createElement("div");
      task_el.classList.add("task");

      const task_content_el = document.createElement("div");
      task_content_el.classList.add("content");

      const task_checkmark = document.createElement("input");
      task_checkmark.type = "checkbox";
      task_checkmark.classList.add("task-checkmark");

      const task_text = document.createElement("a");
      task_text.href = "editTask.html";
      task_text.classList.add("task-text");

      task_text.innerText = task;

      task_content_el.appendChild(task_checkmark);
      task_content_el.appendChild(task_text);
      task_el.appendChild(task_content_el);

      list_el.appendChild(task_el);
    }
  }
});
