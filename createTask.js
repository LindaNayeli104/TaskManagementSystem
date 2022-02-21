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

    //Fetch stuff

    console.log("Postman code");
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

    fetch(
      "https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks?token=nextLine1234567&title=prueba12&is_completed=0&due_date=2022-02-18&comments=Cantar a lot&description=Cantar 5 times more&tags=Cantar, 5 times",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  });
});
