/* document.querySelector("#task-title").innerHTML = localStorage.getItem(
  "idToPass"
); */

//document.getElementById("result").innerHTML = localStorage.getItem("idToPass");
let idToPass = localStorage.getItem("idToPass");

const title = document.querySelector("#task-title");
//title = title.toLowerCase();
const dueDate = document.querySelector("#task-due-date");
const comments = document.querySelector("#task-comments");
const description = document.querySelector("#task-description");
const tags = document.querySelector("#task-tags");
//const isCompleted = 0;

console.log(title);
document.addEventListener("DOMContentLoaded", () => {
  let url = "https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks";
  let urlComplement = "/" + idToPass + "?token=nextLine123456";

  url = url + urlComplement;
  //console.log("Miraaaaaaaaaaaaaaa: " + url);

  //e.preventDefault();
  async function getTaskInfo() {
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
    //console.log(tasks);
    renderTaks(tasks);
  }

  getTaskInfo();

  function renderTaks(tasks) {
    const task_title = tasks[0].title;
    console.log(title);
    const task_dueDate = tasks[0].due_date;
    const task_comments = tasks[0].comments;
    const task_description = tasks[0].description;
    const task_tags = tasks[0].tags;

    const isCompleted = tasks[0].is_completed;

    title.value = task_title;
    dueDate.value = task_dueDate;
    comments.value = task_comments;
    description.value = task_description;
    tags.value = task_tags;
    //isCompleted.value = task_title;
  }
});
