document.getElementById('error-message').style.display = 'none';

// search Book 

const searchBook = () => {

    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    searchField.value = '';
    document.getElementById('error-message').style.display = 'none';



    if (searchText === '') {
        displayError();

    }
    else {

        //fetching

        const url = `https://openlibrary.org/search.json?q=${searchText}`


        fetch(url)
            .then(res => res.json())
            .then(data => displayBook(data))
            .catch(error => displayError(error));


    }





}

//display error function
const displayError = error => {
    document.getElementById('error-message').style.display = 'block';

}



//displaying book



const displayBook = books => {


    // storing data

    const result = books.docs;


    const count = document.getElementById('counting-search')
    count.innerHTML = `Found Result : ${books.numFound}<br>
                        Showing Result: ${books.docs.length}<br>
                               
    `;








    //search result div 


    const searchResult = document.getElementById('search-result');


    searchResult.textContent = '';

    if (books.length === 0) {
        displayError();
    }




    result.forEach(book => {







        const div = document.createElement('div');
        div.classList.add('col');

        // search result 
        div.innerHTML = `<div class="card h-100" style="width: 18rem; margin-left:5rem;">
        <img  src="https://covers.openlibrary.org/b/id/${book.cover_i ? book.cover_i : ''}-L.jpg" class="card-img-top" alt="...">
        <div class="card-body">
               
              
            <h5 class="card-title">Book Name: ${book.title_suggest ? book.title_suggest : ''}</h5>
            <p class="card-text"><h5>Author_name: </h5> ${book.author_name ? book.author_name : ''}</p>
            <p class="card-text"><h6>First_Published:</h6> ${book.first_publish_year ? book.first_publish_year : ''}</p>
            <p class="card-text"><h6>publisher:</h6> ${book.publisher ? book.publisher : ''}</p>
           
        </div>
    </div>`;

        searchResult.appendChild(div);//appending div
    })


}