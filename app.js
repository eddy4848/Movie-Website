

let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];


left_btn.addEventListener('click', () => {
    cards.scrollLeft -= 140;
})
right_btn.addEventListener('click', () => {
    cards.scrollLeft += 140;
})
search_icon.addEventListener('click', () => {
    search.classList.toggle('search_input');
})

let json_url = "movie.json";

fetch(json_url).then(Response => Response.json())
    .then((data) => {
        data.forEach((ele, i) => {
            let { name, imdb, date, sposter, bposter, genre, url,} = ele;
            let card = document.createElement('a');
            card.classList.add('card');
            card.href = url;
            card.innerHTML`
            <img src="${sposter}" alt="${name}" class="poster">
                    <div class="rest_card">
                        <video src="./video/theboys.webm" autoplay ></video>
                        <img src="${bposter}" alt="">
                        <div class="cont">
                            <h4>${name}</h4>
                            <div class="sub">
                                <p>${genre}, ${date}</p>
                                <h3><span>INDB</span><i class="bi bi-star-fill"></i>${imdb}</h3>
                            </div>
                        </div>
                    </div>`
                    
                    cards.appendChild(card);
        });
    });



// Movies Box Set

const movies = [{
            id: 36,
            img: "img/the boys.jpg",
            down_img: "img/the-ghazi-attack-poster.webp",
            title: "The boys",
            letter: "t",
            genre1: "action",
            genre2: "none",
            genre3: "none",
            genre4: "biography",
            genre5: "animation",
            genre6: "none",
            genre7: "documentary",
            genre8: "none",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2021,
            rate: 9.9,
            url: "the_gazi_attack.html",
            tppr: "trend",
            msot: "movie",
            screen1: "img/gazi1.jpg",
            screen2: "img/gazi2.jpg",
            screen3: "img/gazi3.jpg",
            ph420: "img/the-ghazi-attack-poster.webp",
            ph720: "mimg/comndo.jpg",
            ph1080: "img/the-ghazi-attack-poster.webp",
        },
        {
            id: 35,
            img: "img/venom.jpeg",
            title: "venom",
            letter: "c",
            genre1: "action",
            genre2: "none",
            genre3: "none",
            genre4: "biography",
            genre5: "animation",
            genre6: "none",
            genre7: "documentary",
            genre8: "none",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2020,
            rate: 9.3,
            url: "themanor.html",
            tppr: "trend",
            msot: "movie"
        },
        {
            id: 34,
            img: "img/spiderman.jpg",
            title: "spider man 3",
            letter: "c",
            genre1: "action",
            genre2: "none",
            genre3: "none",
            genre4: "biography",
            genre5: "animation",
            genre6: "none",
            genre7: "documentary",
            genre8: "none",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2020,
            rate: 9.1,
            url: "themanor.html",
            tppr: "trend",
            msot: "movie"
        },
        {
            id: 33,
            img: "img/money heist1.jpg",
            title: "Moon Knight",
            letter: "b",
            genre1: "action",
            genre2: "none",
            genre3: "none",
            genre4: "biography",
            genre5: "animation",
            genre6: "none",
            genre7: "documentary",
            genre8: "none",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2021,
            rate: 9.7,
            url: "themanor.html",
            tppr: "trend",
            msot: "movie"
        },
        {
            id: 32,
            img: "img/blade.jpeg",
            title: "Blade",
            letter: "b",
            genre1: "action",
            genre2: "none",
            genre3: "none",
            genre4: "biography",
            genre5: "animation",
            genre6: "none",
            genre7: "documentary",
            genre8: "none",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2021,
            rate: 7.7,
            url: "themanor.html",
            tppr: "trend",
            msot: "movie"
        },
        {
            id: 31,
            img: "img/iron3.jpeg",
            title: "Iron man 3",
            letter: "t",
            genre1: "action",
            genre2: "none",
            genre3: "none",
            genre4: "biography",
            genre5: "animation",
            genre6: "none",
            genre7: "documentary",
            genre8: "none",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2021,
            rate: 7.9,
            url: "themanor.html",
            tppr: "trend",
            msot: "movie"
        },
        {
            id: 30,
            img: "img/iron man 2.jpeg",
            title: "iron man 2",
            letter: "b",
            genre1: "action",
            genre2: "none",
            genre3: "none",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "none",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2020,
            rate: 8.9,
            url: "themanor.html",
            tppr: "trend",
            msot: "movie"
        },
        {
            id: 29,
            img: "img/iron man 1.jpeg",
            title: "Iron Man 1",
            letter: "b",
            genre1: "action",
            genre2: "none",
            genre3: "none",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "none",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2020,
            rate: 8.8,
            url: "themanor.html",
            tppr: "trend",
            msot: "movie"
        },
        {
            id: 28,
            img: "img/captain1.jpeg",
            title: "Captain America",
            letter: "b",
            genre1: "action",
            genre2: "none",
            genre3: "none",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "none",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2021,
            rate: 6.8,
            url: "themanor.html",
            tppr: "trend",
            msot: "movie"
        },
        {
            id: 27,
            img: "img/avengers endgame.jpeg",
            title: "Avengers End Game",
            letter: "a",
            genre1: "action",
            genre2: "none",
            genre3: "none",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "none",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2020,
            rate: 9.7,
            url: "themanor.html",
            tppr: "trend",
            msot: "movie"
        },
        {
            id: 26,
            img: "img/avengers.jpg",
            title: "Avengers",
            letter: "a",
            genre1: "action",
            genre2: "crime",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "none",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2020,
            rate: 9.6,
            url: "themanor.html",
            tppr: "trend",
            msot: "movie"
        },
        {
            id: 25,
            img: "img/topgun.jpeg",
            title: "Top gun",
            letter: "a",
            genre1: "action",
            genre2: "crime",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "none",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2021,
            rate: 8.8,
            url: "themanor.html",
            tppr: "trend",
            msot: "movie"
        },
        {
            id: 24,
            img: "img/uncharted1.jpg",
            title: "uncharted1",
            letter: "a",
            genre1: "action",
            genre2: "crime",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "none",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2021,
            rate: 8.2,
            url: "themanor.html",
            tppr: "trend",
            msot: "movie"
        },
        {
            id: 23,
            img: "img/moon knight.jpg",
            title: "moon knight",
            letter: "a",
            genre1: "none",
            genre2: "crime",
            genre3: "none",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "none",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2021,
            rate: 9.1,
            url: "themanor.html",
            tppr: "trend",
            msot: "movie"
        },
        {
            id: 22,
            img: "img/no time.jpeg",
            title: "No Time to die ",
            letter: "a",
            genre1: "none",
            genre2: "crime",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "none",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2020,
            rate: 9.9,
            url: "themanor.html",
            tppr: "trend",
            msot: "movie"
        },
        {
            id: 21,
            img: "img/jurassic world.jpg",
            title: "Jurassic World",
            letter: "a",
            genre1: "none",
            genre2: "crime",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "none",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2020,
            rate: 7.9,
            url: "themanor.html",
            tppr: "trend",
            msot: "movie"
        },
        {
            id: 20,
            img: "img/Jhon Wick.jpg",
            title: "John Wick 1",
            letter: "a",
            genre1: "none",
            genre2: "crime",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "none",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2021,
            rate: 6.9,
            url: "themanor.html",
            tppr: "trend",
            msot: "movie"
        },
        {
            id: 19,
            img: "img/jhon wick1.webp",
            title: "John Wick 2",
            letter: "u",
            genre1: "none",
            genre2: "crime",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "none",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2021,
            rate: 9.2,
            url: "themanor.html",
            tppr: "trend",
            msot: "movie"
        },
        {
            id: 18,
            img: "mimg/noah.webp",
            title: "Noah",
            letter: "n",
            genre1: "none",
            genre2: "crime",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "none",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2020,
            rate: 8.2,
            url: "themanor.html",
            tppr: "popular",
            msot: "movie"
        },
        {
            id: 17,
            img: "mimg/notimethedie.webp",
            title: "No Time The Die",
            letter: "n",
            genre1: "none",
            genre2: "crime",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "none",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2021,
            rate: 8.5,
            url: "themanor.html",
            tppr: "trend",
            msot: "movie",
            upload: "latest"
        },
        {
            id: 16,
            img: "img/avater ways of the water.jpeg",
            title: "avater ways of the water",
            letter: "o",
            genre1: "none",
            genre2: "crime",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "none",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2021,
            rate: 8.6,
            url: "themanor.html",
            tppr: "trend",
            msot: "movie"
        },
        {
            id: 15,
            img: "img/av1.jpeg",
            title: "Avater 1",
            letter: "p",
            genre1: "none",
            genre2: "crime",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "none",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2021,
            rate: 9.3,
            url: "themanor.html",
            tppr: "recent",
            msot: "movie",
            upload: "latest"
        },
        {
            id: 14,
            img: "img/ant man 1.jpeg",
            title: "Ant Man 1",
            letter: "p",
            genre1: "none",
            genre2: "crime",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "none",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2020,
            rate: 7.3,
            url: "themanor.html",
            tppr: "popluar",
            msot: "movie"
        },
        {
            id: 13,
            img: "mimg/Qismat_2.webp",
            title: "Qismat 2",
            letter: "q",
            genre1: "none",
            genre2: "crime",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "none",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2020,
            rate: 5.8,
            url: "themanor.html",
            tppr: "recent",
            msot: "movie",
            upload: "latest"
        },
        {
            id: 12,
            img: "mimg/red_notice.jpg",
            title: "Red Notice",
            letter: "r",
            genre1: "none",
            genre2: "none",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "drama",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2020,
            rate: 6.8,
            url: "themanor.html",
            tppr: "recent",
            msot: "movie"
        },
        {
            id: 11,
            img: "mimg/shershaah.webp",
            title: "Shershaah",
            letter: "s",
            genre1: "none",
            genre2: "none",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "drama",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2020,
            rate: 7.8,
            url: "themanor.html",
            tppr: "recent",
            msot: "series",
            upload: "latest"
        },
        {
            id: 10,
            img: "mimg/shiddat.webp",
            title: "Shiddat",
            letter: "s",
            genre1: "none",
            genre2: "none",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "drama",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2020,
            rate: 8.8,
            url: "themanor.html",
            tppr: "trend",
            msot: "movie"
        },
        {
            id: 9,
            img: "mimg/snakeeyes.webp",
            title: "Snake Eyes",
            letter: "s",
            genre1: "none",
            genre2: "none",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "drama",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2020,
            rate: 8.9,
            url: "themanor.html",
            tppr: "trend",
            msot: "movie",
            upload: "latest"
        },
        {
            id: 8,
            img: "mimg/takepoint.webp",
            title: "Take Point",
            letter: "t",
            genre1: "none",
            genre2: "none",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "drama",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2021,
            rate: 9.8,
            url: "themanor.html",
            tppr: "popular",
            msot: "movie"
        },
        {
            id: 7,
            img: "mimg/The-Manor.webp",
            title: "The Manor",
            letter: "t",
            genre1: "none",
            genre2: "none",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "drama",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2021,
            rate: 8.8,
            url: "themanor.html",
            tppr: "trend",
            msot: "movie",
            upload: "latest"
        },
        {
            id: 6,
            img: "mimg/theblackwater.webp",
            title: "The Black Water",
            letter: "t",
            genre1: "none",
            genre2: "none",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "drama",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2020,
            rate: 8.8,
            url: "theblackwater.html",
            tppr: "recent",
            msot: "series"
        },
        {
            id: 5,
            img: "mimg/theoutpost.webp",
            title: "The Out Post",
            letter: "t",
            genre1: "none",
            genre2: "none",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "drama",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2019,
            rate: 5.8,
            url: "venom2.html",
            tppr: "recent",
            msot: "series",
            upload: "latest"
        },
        {
            id: 4,
            img: "mimg/thevault.webp",
            title: "The Vault",
            letter: "t",
            genre1: "none",
            genre2: "none",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "drama",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2019,
            rate: 5.8,
            url: "venom2.html",
            tppr: "popular",
            msot: "movie"
        },
        {
            id: 3,
            img: "mimg/venom2.webp",
            title: "Venom 2",
            letter: "v",
            genre1: "none",
            genre2: "",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "drama",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2021,
            rate: 9.2,
            url: "venom2.html",
            tppr: "trend",
            msot: "movie",
            upload: "latest"
        },
        {
            id: 2,
            img: "mimg/Warrior.webp",
            title: "Warrior",
            letter: "w",
            genre1: "none",
            genre2: "none",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "drama",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2020,
            rate: 8.6,
            url: "bfg.html",
            tppr: "popular",
            msot: "movie"
        },
        {
            id: 1,
            img: "mimg/xtreme.webp",
            title: "Xtreme",
            letter: "x",
            genre1: "none",
            genre2: "none",
            genre3: "adeventure",
            genre4: "biography",
            genre5: "animation",
            genre6: "comady",
            genre7: "documentary",
            genre8: "drama",
            genre9: "18+",
            genre10: "scifi",
            genre11: "horor",
            year: 2022,
            rate: 6.5,
            url: "bfg.html",
            tppr: "recent",
            msot: "movie",
            upload: "latest"
        },
    ]
    // all array copyed!

// action button and active box

let search_bx2 = document.getElementsByClassName('search_bx2')[0];


window.addEventListener('load', ()=> {
    movies.forEach(element => {
        const { img, title, year, url } = element;
        

        let card = document.createElement('a');
        card.href = url;
        card.innerHTML = `  <img src="${img}" alt="">
                            <div class="content2">
                                <h6>${title}</h6>
                                <p>${year}</p>
                            </div>`;
                            search_bx2.appendChild(card);
    });
});




search.addEventListener('keyup', () => {
    let filter = search.value.toUpperCase();
    let a = search_bx2.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
        let b = a[i].getElementsByClassName('content2')[0];
        let c = b.getElementsByTagName('h6')[0];

        let TextValue = c.textContent || c.innerText;
        if (TextValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = '';
            search_bx2.style.visibility = "visible";
            search_bx2.style.opacity = 1;
        } else {
            a[i].style.display = 'none';
        }
        if (search.value == 0) {
            search_bx2.style.visibility = "hidden";
            search_bx2.style.opacity = 0;
        }
    }
})




// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDdutsrDFlAG9WpzYW4bbwI2bbu0pvt47A",
    authDomain: "reny-5ed93.firebaseapp.com",
    projectId: "reny-5ed93",
    storageBucket: "reny-5ed93.appspot.com",
    messagingSenderId: "36773305815",
    appId: "1:36773305815:web:265c23e9265e6ef415bf92"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  auth.onAuthStateChanged(function (user){
    if (user){
        var email = user.email;
        var user = document.getElementById("user");
        var text = document.createTextNode(email);
        user.appendChild(text);
        console.log(user);

    }
    else {
        alert("you have been logged out");
        // window.location = "l.html"
    }
  })

//   logout funtion

let signOutButton = document.getElementById("signout");
signOutButton.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("ghhsd")
    auth.signOut();
    // alert("signed outdsdsd")
    window.location = "index.html"
})

 


