
const mainApi = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();
    
    const tabContainer = document.getElementById("tabindex");
    const listedCategory = data.data
    listedCategory.forEach((category) => {
        const div = document.createElement("div");
        div.innerHTML = `
                <button class="btnRed"><a onclick="loadVideos('${category.category_id}')" class="tab btn-ghost gap-5">${category.category}</a> </button>

                `;
                tabContainer.appendChild(div);
    });
    console.log(data.data);
    

};

mainApi();

const loadVideos = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    const cardContainer = document.getElementById('videos');
    cardContainer.innerHTML = "";
    const listedData = data?.data
    listedData.forEach((video) => { console.log(video);
        let div2 = document.createElement("div");
        div2.innerHTML = `
        <div class="card w-[312px] h-auto">
                
                <figure><img id="" class="w-[312px] h-[200px] pb-1 rounded-lg" src=${video?.thumbnail} alt="Video"></figure>
                
                <div id="" class="card-body">
                    <div class="profile flex items-center ">
                        <img id="" class="w-10 h-10 rounded-e-full pr-3" src= ${video.authors.profile_picture} alt="Profile" />
                        <h2 id="" class="card-title text-base font-bold leading-6 text-[#171717]">${video.title}</h2>
                    </div>
                    
                    <div id="" class="flex items-center">
                        <p id="" class="text-sm font-normal text-[#171717]">${video.authors?.profile_name}</p>
                        <img id="badge" class="w-5 h-5 items-center flex-1 ml-[-160px] " src= ${video.authors.verified} alt="Badge">
                    </div>
                    <p id="views" class="text-sm font-normal text-[#171717]">${video.others.views} views</p>
                    
                </div>
            </div>
        `;
        cardContainer.appendChild(div2);
    })
};

loadVideos('1000');