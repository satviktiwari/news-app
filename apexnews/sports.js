//98ee93c7c2684dd5a85e7dc7be7e5807

//console.log("This is my index js file");

// Initialize the news api parameters
let source = 'the-times-of-india';
let apiKey = '98ee93c7c2684dd5a85e7dc7be7e5807'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
//xhr.open('GET', `https://gnews.io/api/v4/search?q=trending&country=in&category=technology&lang=en&token=a61c5655594ae38beed19cbf3ce562c9`, true);
xhr.open('GET', `https://inshorts.vercel.app/news?category=sports`, true);


// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <img src="${element["image"]}" class="" alt="..." width="300" height="175">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Sports-Headlines ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["description"]}. <a href="${element["read_more"]}" target="_blank" >Click here to read more</a>  </div>
                                <div class="sharethis-inline-share-buttons text-center mb-3"></div>
                                </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()


