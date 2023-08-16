// Вот пример использования Instagram Basic Display API на JavaScript для получения данных о пользователе и его последних публикациях:

// // Создание объекта Instagram API
// var ig = new InstagramApi({
//     accessToken: "ваш токен доступа",
// });

// // Получение данных о пользователе
// ig.getUserByUsername("username").then(function (user) {
//     console.log(user); // Вывод информации о пользователе в консоль
// });

// // Получение последних публикаций пользователя
// ig.getRecentMediaByUser("user_id").then(function (media) {
//     console.log(media); // Вывод последних постов пользователя в консоль
// });

// // Вывод постов на сайт
// ig.getRecentMediaByUser("user_id").then(function (media) {
//     var posts = media.data;
//     var html = "";
//     for (var i = 0; i < posts.length; i++) {
//         var post = posts[i];
//         html += "<div>";
//         html += '<a href="' + post.permalink + '">';
//         html += '<img src="' + post.media_url + '">';
//         html += "</a>";
//         html += "</div>";
//     }
//     document.getElementById("posts").innerHTML = html;
// });

/* 
Обратите внимание, что вы должны заменить ваш токен доступа на свой токен доступа,
полученный через Instagram Basic Display API.
Также помните об ограничениях на количество запросов в час и количество постов, 
которые можно получить.Будьте осторожны, чтобы не превышать эти ограничения.
*/
