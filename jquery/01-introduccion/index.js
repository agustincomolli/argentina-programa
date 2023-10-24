function showGreetings(language){
    let greet = "";
    if (language === "es") {
        greet = "¡Bienvenido a JQuery!";
    } else {
        greet = "Welcome to JQuery";
    };

    return greet;
};

$(document).ready(() => { 
    const selectLanguage = $("#language");
    const btnClickMe = $("#btn-clickme");
    
    btnClickMe.on("click", ()=>{
        let message = showGreetings(selectLanguage.val());
        $("h1").text(message);
        $("#hided-paragraph").toggle();
    });

    const comments = $(".comments"); // Array de elementos.
    comments.each((index) => {
        const btnDelete = $(comments[index]).find("button");
        btnDelete.on("click", function() {
            const parent = $(this).closest(".comment");
            parent.css("position", "relative");
            parent.animate({
                opacity: 0,
                left: "-=100px"
            }, 1000, () => {parent.remove()});
        });
    });
});

