

const url_api = "https://api.quotable.io/quotes/random?maxLength=50"

const author = $("#author")
const  content = $("#quote-body")

async function generate_quote(url) {
    const response = await fetch(url)
    const data  = await response.json()
    // here quote's tags for h2 
    $("#quote-heading").text(data[0]["tags"][0])
    content.text(data[0]["content"])
    author.text(data[0]["author"])
}

// // //content = $("#quote-body").text()
function new_window(){
        window.open("https://twitter.com/intent/tweet?text="+content.text() +  
        "---by "+ author.text(), " New Tweet", "width=600", "height=300")
    }
    
    
    generate_quote(url_api)
    console.log(content.text())