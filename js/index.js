document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
    const initData = btoa(window.Telegram.WebApp.initData);

    if (currentPath === "/") {
    fetch("https://test0123481.ru/api/user/profile/?lang=ru", {
        headers: { Authorization: initData },
        method: "GET",
    })
        .then((response) => response.json())
        .then((data) => {
        const userName = `${data.user.firstName} ${data.user.lastName}`;
        const balance = `${data.user.balance}`;
        const name = `${data.series.name}`;
        const number = `${data.series.number}`;
        const progressValue = `${data.progress}`;
        const newsArray = data.news;

        document.getElementById("userName").innerHTML = userName;
        document.getElementById("balance").textContent = balance;
        document.getElementById("name").textContent = `Серия ${number}`;
        document.getElementById("number").textContent = `"${name}"`;
        document.getElementById("progress").style.width =
          progressValue * 100 + "%";
        document.getElementById("avatarLink").src = data.user.avatarLink;
        document.getElementById("communityLink").href = data.communityLink;
        document.getElementById("iconLink").href = data.iconLink;
        document.getElementById("supportLink").href = data.supportLink;

        for (let i = 0; i < newsArray.length; i++) {
            let newsElement = `<a href="${newsArray[i].telegraphLink}" class="advertising__blocks" style="height: inherit;"><img src='${newsArray[i].imageLink}' style='height: inherit; border-radius: 10px;width:100%;'></a>`;
            document.getElementById("newsContainer").innerHTML += newsElement;
        }
        })
        .catch((error) => console.error("Ошибка:", error));
    }
});
