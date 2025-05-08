jQuery(document).ready(function () {
    
    $("meta").each(function () {
        if ($(this).attr("property") == "og:url") {
            $(this).attr("content", window.location.href);
        };
    });

    $('.milestone-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });


    $('.text-to-character-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1800,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });


    $('.protocol-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1800,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });



    $('.our-vision-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
    }
  ]
    });


    $('.use-cases-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });


    $('.inft-protocol-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });


    $('.beta-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
    }
  ]
    });


    $('.build-tech-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true

                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true

                }
    }
  ]
    });

    //--------Append header-----------
    jQuery("#header").append(`
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-dark d-md-flex justify-content-between">
                <a class="navbar-brand" href="/">
                    <img src="assets/img/atl-logo.svg">
                </a>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="ai-protocol.html">AI Protocol</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="characterGPT.html">CharacterGPT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="dApp.html">dApps</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="research.html">Research</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">About</a>
                        </li>
                    </ul>
                </div>
              <div class="d-flex">
                 <div class="headerSocial">
                    <a class="btn btn-primary" href="https://coinmarketcap.com/currencies/alethea-artificial-liquid-intelligence-token/markets/" target="_blank">
                        About ALI
                    </a> 
                </div>
                <button class="navbar-toggler border-0 collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">
                        <img src="assets/img/menu-bar.svg" class="bar-icon">
                        <img src="assets/img/cross.svg" class="cross-icon">
                    </span>
                </button>
              </div>
            </nav>
        </div>`)
    //--------------------------------

    var path = window.location.href;
    $('.navbar-nav .nav-item a').each(function () {
        if (path === this.href) {
            $(this).addClass('active');
        }
    });

    //************Add cookie logic***********

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }


    function getCookie(name) {
        let cookie = {};
        document.cookie.split(';').forEach(function (el) {
            let [k, v] = el.split('=');
            cookie[k.trim()] = v;
        })
        return cookie[name];
    }

    const cookie = getCookie("cookie_consent")
    if (!cookie) {
        jQuery("body").append(`
            <div class="cookie-box-inner">
               <div class="cookie-box">
                <div class="cookie-content">
                    <h3>This website uses cookies</h3>
                    <p>We use necessary cookies to provide website functionality and security. We also use cookies to analyze traffic on our website, personalize content and improve user experience. These will be set only if you accept these cookies, You can read about how we use cookies in our Privacy Policy
                    </p>
                </div>
                <div class="cookie-action">
                <button class="btn btn-outline" id="reject">Reject</button>
                <button class="btn btn-primary" id="accept">Accept</button>
                </div>
              </div> 
           </div> 
    `)
    }


    jQuery(document).on("click", "#accept", function () {
        setCookie("cookie_consent", true, 365)
        jQuery(".cookie-box-inner").remove();
    });

    jQuery(document).on("click", "#reject", function () {
        window.location.replace('https://alethea.gitbook.io/alethea-ai-whitepaper/')
    });
    //***********************************
    //--------Append footer-----------

    jQuery("#footer").append(`
    <div class="container">
            <div class="row pb-5">
                <div class="col-xl-5 col-lg-4 col-md-12 col-sm-12 col-12 mb-md-0 mb-4">
                    <div class="mineres-footer-web-logo mb-4">
                        <img src="assets/img/atl-logo.svg">
                    </div>
                    <p class="mineres-footer-info">
                    Alethea AI is a research and development studio building at the intersection of two of the most transformative technologies of our time: Generative AI and Blockchain. Our mission is to use these technologies to enable decentralized ownership and democratic governance of AI. We believe the key to achieving our mission is to partner and work with those who share our values to advance the development and adoption of the AI Protocol.
                    </p>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-md-0 mb-4">
                    <h3 class="mineres-footer-heading mb-4">Explore</h3>
                    <div class="footer-links">
                        <div class="footer-links-inner">
                            <a href="about.html">About Us</a>
                            <a href="ai-protocol.html">AI Protocol</a>
                            <a href="research.html">Research</a>
                        </div>
                        <div class="footer-links-inner">
                            <a href="characterGPT.html">CharacterGPT</a>
                            <a href="privacy-policy.html">Privacy Policy</a>
                            <a href="terms-of-service.html">Terms of Service</a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 mb-md-0 mb-4">
                    <h3 class="mineres-footer-heading mb-4">community</h3>
                    <nav class="mineres-footer-social-icons">
                        <ul>
                            <li>
                                <a href="https://twitter.com/real_alethea" target="_blank">
                                    <img src="assets/img/twitter.svg">
                                </a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com/@real_alethea" target="_blank">
                                    <img src="assets/img/tiktok.svg" >
                                 </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UC3WLysYnxlErUeCeXxzVRLA" target="_blank">
                                    <img src="assets/img/youtube.svg" >
                                 </a>
                            </li>
                            <li>
                                <a href="https://medium.com/alethea-ai" target="_blank">
                                    <img src="assets/img/LinkedIn.svg" >
                                 </a>
                            </li>
                            <li>
                                <a href="https://www.reddit.com/r/Alethea/" target="_blank">
                                    <img src="assets/img/Exclude.svg" >
                                 </a>
                            </li>
                            <li>
                                <a href="https://discord.com/invite/aletheaai" target="_blank">
                                    <img src="assets/img/discord.svg" >
                                 </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="blue-divider"></div>
            <div class="col-12 mt-4">
                <p class="mineres-copy-text text-center">© Copyright 2023, All Rights Reserved by Alethea AI</p>
            </div>
        </div>
`);

    //    ---------
    function showMessage(msg, type, ) {
        if (type === "success") {
            $("body").append(`
            <div class="message-toaster success">
                <div class="msg-icon">
                    <img src="../assets/img/s-icon.svg"/>
                </div>
                <p>${msg}</p>
            </div>
        `)
        } else {
            $("body").append(`
            <div class="message-toaster error">
                <div class="msg-icon">
                    <img src="../assets/img/f-icon.svg"/>
                </div>
                <p>${msg}</p>
            </div>
        `)
        }

        $("#submit-button").attr("disabled", false)
        setTimeout(function () {
            $(".message-toaster").remove()
        }, 5000)
    }

    if ($("#api-form").length > 0) {

        //--------validate form footer-----------
        $("#api-form").validate();
        //-----------------------

        //selector from your HTML form
        $('#api-form').submit(function (e) {
            e.preventDefault()
            if (!$("#api-form").valid()) {
                return
            }
            var myHeaders = new Headers();
            myHeaders.append("api-key", "71233ee8-bccd-4424-ac9a-c75fb1a8ba7c");
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Cookie", "messages=.eJyt00EOwiAUBNCrELYigdai3TXxGE1DvgYLWvhJ4f5Rt26d9SQvs5iZZ-n9s3LxOdRKa5DKqM4oeeXySHumlriIcMyUNlFDaaKxqJEp3egVG-2md4dhWr-5vnPWclEI0qFITbh6H8tNtIUWA2lKf2MXJDYiMWugmoVqHVTrodoJqg1YDTpei9XOUA36LPtzreUNFQTClA:1pCkDh:bRGPzR9TG9Sd8ruSlJJPnGx0Qbe-JVTONozv6eM4Ac4; sessionid=3f7scy9oeas692vebdfjab9mzrtlkrko");

            $("#submit-button").attr("disabled", true);


            const json = {};
            $.each(jQuery(this).serializeArray(), function () {
                json[this.name] = this.value || "";
            });

            var request = JSON.stringify(json);

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: request,
                redirect: 'follow'
            };

            fetch("https://noahsark.ai/api/v1/contact_messages/", requestOptions)
                .then(response => response.json())
                .then(result => {
                    showMessage(result.detail || result.message, "success")
                    document.getElementById("api-form").reset();

                })
                .catch(error => {
                    showMessage(error.message, "error")
                    document.getElementById("api-form").reset();

                });

        })
    }

    if ($("#newsletter-form").length > 0) {
        $("#newsletter-form").validate();

        //selector from your HTML form
        $("#newsletter-form").submit(function (e) {
            e.preventDefault()
            if (!$("#newsletter-form").valid()) {
                return
            }
            var myHeaders = new Headers();
            myHeaders.append("api-key", "71233ee8-bccd-4424-ac9a-c75fb1a8ba7c");
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Cookie", "messages=.eJyt00EOwiAUBNCrELYigdai3TXxGE1DvgYLWvhJ4f5Rt26d9SQvs5iZZ-n9s3LxOdRKa5DKqM4oeeXySHumlriIcMyUNlFDaaKxqJEp3egVG-2md4dhWr-5vnPWclEI0qFITbh6H8tNtIUWA2lKf2MXJDYiMWugmoVqHVTrodoJqg1YDTpei9XOUA36LPtzreUNFQTClA:1pCkDh:bRGPzR9TG9Sd8ruSlJJPnGx0Qbe-JVTONozv6eM4Ac4; sessionid=3f7scy9oeas692vebdfjab9mzrtlkrko");

            $("#submit-button").attr("disabled", true);

            const json = {};
            $.each(jQuery(this).serializeArray(), function () {
                json[this.name] = this.value || "";
            });

            var request = JSON.stringify(json);

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: request,
                redirect: 'follow'
            };

            fetch("https://noahsark.ai/api/v1/newsletter_subscription/", requestOptions)
                .then(response => response.json())
                .then(result => {
                    showMessage(result.message || result.detail || result.email[0], "success")
                    document.getElementById("newsletter-form").reset();
                })
                .catch(error => {
                    showMessage(error.message, "error")
                    document.getElementById("newsletter-form").reset();
                });

        })
    }
})

//8=*******************
jQuery("body").append(`
    <a rel="noreferrer" href="https://discord.com/invite/aletheaai" target="_blank" class="discord-fixed">
        <img src="assets/img/discord-circle.png" alt="discord the sandbox">
    </a>
`);
