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
const isCompleted = document.querySelector("#task-checkmark");

document.addEventListener("DOMContentLoaded", () => {
  let urlGet = "https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks";
  let urlComplementGet = "/" + idToPass + "?token=nextLine123456";

  urlGet = urlGet + urlComplementGet;

  //e.preventDefault();
  async function getTaskInfo() {
    const response = await fetch(urlGet, {
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
    renderTaks(tasks);
  }

  getTaskInfo();

  function renderTaks(tasks) {
    const task_title = tasks[0].title;
    const task_dueDate = tasks[0].due_date;
    const task_comments = tasks[0].comments;
    const task_description = tasks[0].description;
    const task_tags = tasks[0].tags;

    const is_completed = tasks[0].is_completed;

    title.value = task_title;
    dueDate.value = task_dueDate;
    comments.value = task_comments;
    description.value = task_description;
    tags.value = task_tags;

    if (is_completed) {
      isCompleted.checked = true;
    } else {
      isCompleted.checked = false;
    }
    //isCompleted.value = task_title;
  }

  //Update Task-------------------------------------------
  const editTaskForm = document.querySelector("#edit-task-form");

  editTaskForm.addEventListener("submit", (e) => {
    let titlePut = document.querySelector("#task-title").value;
    titlePut = titlePut.toLowerCase();
    const dueDatePut = document.querySelector("#task-due-date").value;
    const commentsPut = document.querySelector("#task-comments").value;
    const descriptionPut = document.querySelector("#task-description").value;
    const tagsPut = document.querySelector("#task-tags").value;
    const isCompletedPut = document.querySelector("#task-checkmark").checked;

    let urlPut = "https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks";

    let urlComplementPut = "/" + idToPass + "?token=nextLine123456";

    let isCompletedValue;
    if (isCompletedPut) {
      isCompletedValue = 1;
    } else {
      isCompletedValue = 0;
    }

    urlComplementPut =
      urlComplementPut +
      "&title=" +
      titlePut +
      "&is_completed=" +
      isCompletedValue +
      "&due_date=" +
      dueDatePut +
      "&comments=" +
      commentsPut +
      "&description=" +
      descriptionPut +
      "&tags=" +
      tagsPut;

    //Fetch stuff

    urlPut = urlPut + urlComplementPut;

    console.log("Miraaaaaaaaaaaaaaa: " + urlPut);

    e.preventDefault();
    fetch(urlPut, {
      method: "PUT",
      mode: "cors",
      headers: new Headers({
        //Authentication: "Bearer ${token}",
        Authorization:
          "Bearer e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd",
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
      .then((response) => {
        response.json();
      })

      .then((result) => {
        console.log(result);

        //window.history.go(-1);
      })
      .catch((err) => {
        console.error(err.message);
        alert("Check your info");
      });
  });

  //Delete Task-------------------------------------------

  const deleteTaskForm = document.querySelector("#delete-task-submit");

  deleteTaskForm.addEventListener("click", (e) => {
    let urlDelete = "https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks";
    let urlComplementDelete = "/" + idToPass + "?token=nextLine123456";

    urlDelete = urlDelete + urlComplementDelete;

    //e.preventDefault();
    async function deleteTask() {
      const response = await fetch(urlDelete, {
        method: "DELETE",
        mode: "cors",
        headers: new Headers({
          //Authentication: "Bearer ${token}",
          Authorization:
            "Bearer e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd",
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      });

      const tasksDelete = await response.json();
      window.history.go(-1);
    }

    deleteTask();
  });
});
