
let userNames = ["First", "Second", "Third"]
let users = userNames.map( (user, index) => {
    return {
        'name' : user,
        'sirname': user + " the Great " + (index + 1),
        'userPic' : (index === 0) ? user + "face.png" : "default.png",
    };
} );

let vm = new Vue({
    el: "[data-app-root]",
    data : function() {
        return {
            title : "Vue app",
            users : users,
            visible : true,


        };
    },
    methods : {
        usersToConsole : function(){
            return console.log(this.users);
        },
        typeOfAction : function () {
            return (this.visible) ? "Скрыть" : "Показать";
        }
    },
    computed : {
        usersCount : function () {
            return this.users.length;
        }
    }

});
console.log('hey!');