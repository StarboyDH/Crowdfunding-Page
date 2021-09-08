$(function() {
    $("#back-project, #btn-1, #btn-2").click(function() {
        $("html, body").css({
            "background-color": "#7d7d7d",
        })

        $("header, #intro, #backing, #about-sec").css({
            "filter": "opacity(60%)",
        })

        $("#intro, #backing, #about-sec").hide()

        $("#popup").css({
            "display": "block",
        })
    });

    $("#close-img ").click(function() {
        $("#popup").css({
            "display": "none",
        });

        $("#intro, #backing, #about-sec").show()

        $("header, #intro, #backing, #about-sec").css({
            "filter": "opacity(100%)",
        })

        $("html, body").css({
            "background-color": "whitesmoke",
        })   
    });

    $(".circles").click(function(e) {
        let id = e.target.id;
        $("#f" + id).css({"display": "block"});
        $("#p" + id).css({"border": "2px solid hsl(162, 79%, 44%)"});
        $("#b" + id).slideDown(40);
        $("#b" + id).css({"display": "flex"});

        if (window.matchMedia("(max-width: 771px)").matches) {
            $("#b" + id).css({"display": "grid"});
        }
    });

    $(".fills").click(function(e) {
        let id = e.target.id;
        $("#" + id).css({"display":"none"});
        $("#p" + id.slice(1,4)).css({"border": "1px solid hsl(0, 0%, 80%)"});
        $("#b" + id.slice(1,4)).slideUp(500);
    });

    let ids = [];
    $(".popup-project-titles").click(function(e) {
        let id = (e.target.id).slice(1,4);

        if(ids.includes(id)) {
            $("#t" + id).css({"color": "black"});
            $("#f" + id).css({"display": "none"});
            $("#p" + id).css({"border": "1px solid hsl(0, 0%, 80%)"});
            $("#b" + id).slideUp(40);
            $("#b" + id).css({"display": "flex"});
            ids.splice(ids.indexOf(id), 1);
            
            if (window.matchMedia("(max-width: 771px)").matches) {
                $("#b" + id).css({"display": "grid"});
            }
        } else {
            ids.push(id);
            $("#t" + id).css({"color": "hsl(162, 79%, 44%)"})
            $("#f" + id).css({"display": "block"});
            $("#p" + id).css({"border": "2px solid hsl(162, 79%, 44%)"});
            $("#b" + id).slideDown(40);
            $("#b" + id).css({"display": "flex"});
            if (window.matchMedia("(max-width: 771px)").matches) {
                $("#b" + id).css({"display": "grid"});
            }
        }
    });

    let progressValue = 89.914;
    let totalBackers = 5007;
    $(".done").click(function(e) {
        totalBackers++;
        let id = (e.target.id).slice(2,10);
        if ($("#"+id).val() === "") {
            alert("You didn't enter any value.")
        } else {
            let newValue = $("#" + id).val() / 1000;
            progressValue += newValue;
            $("progress").attr("value", progressValue);
            $("#backed-num").text("$" + progressValue);
            $("#backers-num").text(totalBackers);
            $("#popup").css({"display":"none"})
            $("#complete").css({"display":"flex"});
        }
    });

    $("#gotIt").click(function() {
        $("#complete").css({
            "display": "none",
        });

        $("#intro, #backing, #about-sec").show()

        $("header, #intro, #backing, #about-sec").css({
            "filter": "opacity(100%)",
        })

        $("html, body").css({
            "background-color": "whitesmoke",
        });
    });

    let clicks = 0;
    $("#hamburger").click(function() {
        if (clicks % 2 === 0) {
            $("#hamburger").attr("src", "images/icon-close-menu.svg");
        } else {
            $("#hamburger").attr("src", "images/icon-hamburger.svg");
        }
        $("#navlist").slideToggle(400);
        $("#navlist").css({"display": "flex"});

        clicks++;
    });

});

