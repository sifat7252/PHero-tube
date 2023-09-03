const handleCategory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const mainData = await response.json();
    // console.log(mainData.data);
    const displayMainData = mainData.data;
    // console.log(displayData);
    // displayData(displayMainData)

    const tabContainer = document.getElementById('tab-container');
    displayMainData.forEach((category)=> {
        // console.log(category)
        const div = document.createElement('div');
        div.innerHTML = `
        <button onclick="handleLoadVideos('${category.category_id}')" class="btn mx-1 text-sm font-medium">${category.category}</button>

        `;
        tabContainer.appendChild(div);
    })

}
const handleLoadVideos = async (categoryId) => {
    // console.log(categoryId);
    const response = await fetch (`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    // console.log(data.data)
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";

    data.data.forEach((videos)=> {
        console.log(videos);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card  bg-base-100 shadow-xl">
        <figure><img src="${videos.thumbnail
        }" alt="thumbnail" class=" h-40 w-72" /></figure>
        <div class="card-body">
            <div class="flex justify-items-start items-start">
                <img src="${videos.authors[0]?.profile_picture
                }" alt="author-pic" class="w-9 h-9 rounded-full">
                <div>
                    <h2 class="card-title">${videos.title}</h2>
                    <div class="flex justify-center items-center gap-2">
                        <h2 class="">${videos.authors[0]?.profile_name}</h2>
                        <img src="${videos.authors[0]?.verified ? './fi_10629607.svg' : 'Verified Hidden'}" class="inline-block w-4 h-4" alt="Verified">
                    </div>
                    <h2 class="views-counter"><span id="views-counter">${videos.others.views}</span> views</h2>
                </div>
            </div>
          
        </div>
      </div>
        
        `;
        cardContainer.appendChild(div);
    })

}



// const displayData = displayMainData => {
//     // console.log(displayMainData);
//     displayMainData.forEach(videos => {
//         // console.log(videos);
//     });
// }





handleCategory();
// displayData()
