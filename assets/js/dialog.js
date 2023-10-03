function viewProject(event, buttonElement) {
    event.preventDefault();

    var title = $(buttonElement).data("title");

    console.log(title);

    var visitAlContent;
//TODO create a slider for the images
    if (title === "Visit AL") {
        var message = '<header class="major"><span class="date">September 27, 2023</span><h2><a href="https://visit.al/">Visit.al</a></h2><p>Booking APP </br>Everybody could create their hotel at our WebApplication, and attRooms and other details.The client can reserve a Hotel Room, he can see reviews, add a review,etc...</p></header><div class="list-container" ><h4 style="width: 100%;">LANGUAGES & FRAMEWORKS:</h4><ul class="left-list"><h4>Back-end</h4><li>Java</li><li>Spring Boot</li><li>Spring Security</li></ul><ul class="left-list"><h4>Storage</h4><li>MySQL</li><li>Hibernate</li><li>JPA</li></ul><ul class="left-list"><h4>Others</h4><li>AWS (CloudWatch, SQS), CI/CD</li><li>API Testing, Integration Testing, BDD, TDD</li><li>API, Data Analysis</li><li>WebSockets</li></ul></div><h4>Project</h4><div class="slider-container"><div class="slider"><img src="images/visital.png" alt="" class="slider-image" /><img src="images/ksamil.png" alt="" class="slider-image" /><img src="images/hotelView.png" alt="" class="slider-image" /><img src="images/mapVisital.png" alt="" class="slider-image" /></div><div class="slider-arrows"><button class="prev-slide" onclick="prevSlide()">&#8249;</button><button class="next-slide" onclick="nextSlide()">&#8250;</button></div></div>';
        visitAlContent = $(message);
    }else if(title === "Oneri") {
        var message = '<header class="major">Sales menagment, menage orders, sales results and team sales, status of order, calculations.<br/>Real-time data: Notifications, Chat, Succes orders, Signature of order.</p></header><div class="list-container"><h4 style="width: 100%;">LANGUAGES & FRAMEWORKS:</h4><ul class="left-list"><h4>Back-end</h4><li>Java</li><li>Spring Boot</li><li>Spring Security</li></ul><ul class="left-list"><h4>Storage</h4><li>MySQL</li><li>Hibernate</li><li>JPA</li></ul><ul class="left-list"><h4>Others</h4><li>AWS (CloudWatch, SQS), CI/CD</li><li>API, Data Analysis</li><li>WebSockets</li></ul></div><h4>Project</h4><div class="slider-container"><div class="slider"><img width="100%" src="images/oneri.png" alt="" class="slider-image" /><img width="100%" src="images/oneri1.png" alt="" class="slider-image" /><img width="100%" src="images/oneri3.png" alt="" class="slider-image" /><img width="100%" src="images/oneri4.png" alt="" class="slider-image" /><img width="100%" src="images/oneri2.png" alt="" class="slider-image" /></div><div class="slider-arrows"><button class="prev-slide" onclick="prevSlide()">&#8249;</button><button class="next-slide" onclick="nextSlide()">&#8250;</button></div></div><span class="date">September 27, 2023</span>';
        visitAlContent = $(message);
    }else if(title === "Elexico") {
        var message = '<article class="post featured"><header class="major"><p>Job menagment system, Posting jobs, Finding jobs, calculating salary, contrats etc.</p></header><div class="list-container"><h4 style="width: 100%;">LANGUAGES & FRAMEWORKS:</h4><ul class="left-list"><h4>Back-end</h4><li>Java</li><li>Spring Boot</li><li>Spring Security</li></ul><ul class="left-list"><h4>Storage</h4><li>MySQL</li><li>Hibernate</li><li>JPA</li></ul><ul class="left-list"><h4>Others</h4><li>API, Data Analysis</li><li>WebSockets</li></ul></div><h4>Project</h4><div class="slider-container"><div class="slider"><img src="images/elexico.png" alt="" class="slider-image" /></div><div class="slider-arrows"><button class="prev-slide" onclick="prevSlide()">&#8249;</button><button class="next-slide" onclick="nextSlide()">&#8250;</button></div></div><span class="date">September 27, 2023</span></article>';
        visitAlContent = $(message);
	}else if(title === "DataDear") {
        var message = '<article class="post featured"><header class="major"><p>Rows gives additional power to finance teams and accounting practices – it LINKS your Xero, QuickBooks, WorkflowMax, HMRC companies and groups, to your spreadsheet.</p></header><div class="list-container"><h4 style="width: 100%;">LANGUAGES & FRAMEWORKS:</h4><ul class="left-list"><h4>Back-end</h4><li>Java</li><li>Spring Boot</li><li>Spring Security</li></ul><ul class="left-list"><h4>Storage</h4><li>MySQL</li><li>Hibernate</li><li>JPA</li></ul><ul class="left-list"><h4>Others</h4><li>API, Data Analysis</li></ul></div><h4>Project</h4><div class="slider-container"><div class="slider"><img src="images/datadear.png" alt="" class="slider-image" /></div><div class="slider-arrows"><button class="prev-slide" onclick="prevSlide()">&#8249;</button><button class="next-slide" onclick="nextSlide()">&#8250;</button></div></div><span class="date">September 27, 2023</span></article>';
		visitAlContent = $(message);
	}else if(title === "Chat APP") {
        var message = '<article class="post featured"><header class="major"><p>Real-time data, direct messages, groups and more.</p></header><div class="list-container"><h4 style="width: 100%;">LANGUAGES & FRAMEWORKS:</h4><ul class="left-list"><h4>Back-end</h4><li>Java</li><li>Spring Boot</li><li>Spring Security</li></ul><ul class="left-list"><h4>Storage</h4><li>MySQL</li><li>Hibernate</li><li>JPA</li></ul><ul class="left-list"><h4>Others</h4><li>API, Data Analysis</li><li>WebSockets</li></ul></div><h4>Project</h4><div class="slider-container"><div class="slider"><img src="images/chat.png" alt="" class="slider-image" /></div><div class="slider-arrows"><button class="prev-slide" onclick="prevSlide()">&#8249;</button><button class="next-slide" onclick="nextSlide()">&#8250;</button></div></div><span class="date">September 27, 2023</span></article>';
		visitAlContent = $(message);
	}

    bootbox.dialog({
        message: visitAlContent,
        title: title,
        className: "large",
        buttons: {
            close: {
                label: "Close",
                className: "btn-danger"
            }
        },
        onShown: function() {
            initializeSlider(visitAlContent);
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initializeSlider();
});

function initializeSlider() {
    let currentSlide = 0;
    const sliderImages = document.querySelectorAll('.slider-image');
    const sliderContainer = document.querySelector('.slider');

    function showSlide(slideIndex) {
        if (slideIndex < 0) {
            currentSlide = sliderImages.length - 1;
        } else if (slideIndex >= sliderImages.length) {
            currentSlide = 0;
        }

        const offset = -currentSlide * 100;
        sliderContainer.style.transform = `translateX(${offset}%)`;
    }

    function prevSlide() {
        currentSlide--;
        showSlide(currentSlide);
    }

    function nextSlide() {
        currentSlide++;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);

    // Add event listeners to the prev and next buttons
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
}