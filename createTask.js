document.addEventListener("DOMContentLoaded", () => {
  const createTaskForm = document.querySelector("#create-task-form");

  createTaskForm.addEventListener("submit", (e) => {
    //Get elements
    var title = document.querySelector("#task-title").value;
    title = title.toLowerCase();
    const dueDate = document.querySelector("#task-due-date").value;
    const comments = document.querySelector("#task-comments").value;
    const description = document.querySelector("#task-description").value;
    const tags = document.querySelector("#task-tags").value;
    const isCompleted = 0;

    console.log(title);
    var urlComplement = "?token=NextLine123456";
    urlComplement =
      urlComplement +
      "&title=" +
      title +
      "&is_completed=" +
      isCompleted +
      "&due_date=" +
      dueDate +
      "&comments=" +
      comments +
      "&description=" +
      description +
      "&tags=" +
      tags;

    //Fetch stuff

    let url = "https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks";

    url = url + urlComplement;
    console.log("Miraaaaaaaaaaaaaaa: " + url);

    e.preventDefault();
    fetch(url, {
      method: "POST",
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
        window.history.go(-1);
      })
      .catch((err) => {
        console.error(err.message);
        alert("Check your info");
      });
  });
});
