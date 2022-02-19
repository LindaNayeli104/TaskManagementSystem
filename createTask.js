document.addEventListener("DOMContentLoaded", () => {
  const createTaskForm = document.querySelector("#create-task-form");

  var data = { title: "Work", is_completed: 0 };

  let url =
    "https://ecsdevapi.nextline.mx/vdev/tasks-challenge/tasks?token=nextLine12345&title=Act&is_completed=0";

  createTaskForm.addEventListener("submit", (e) => {
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
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.error(err.message);
      });
  });
});
