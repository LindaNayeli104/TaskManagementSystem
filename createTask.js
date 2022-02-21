document.addEventListener("DOMContentLoaded", () => {
  const createTaskForm = document.querySelector("#create-task-form");

  createTaskForm.addEventListener("submit", (e) => {
    //Get elements
    e.preventDefault();
    let title = document.querySelector("#task-title").value;
    title = title.toLowerCase();
    const dueDate = document.querySelector("#task-due-date").value;
    const comments = document.querySelector("#task-comments").value;
    const description = document.querySelector("#task-description").value;
    const tags = document.querySelector("#task-tags").value;
    const isCompleted = 0;

    let urlComplement = "?token=NextLine12345678";
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
    let url =
      "https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks" +
      urlComplement;

    console.log(url);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append(
      "Authorization",
      "Bearer e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd"
    );

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    console.log("fetch");
    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        window.history.go(-1);
      })
      .catch((error) => console.log("error", error));
  });
});

//"https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks?token=NextLine12345678&title=prueba14&is_completed=0&due_date=2022-02-18&comments=Cantar a lot&description=Cantar 5 times more&tags=Cantar, 5 times",
