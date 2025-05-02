document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const openMenu = document.getElementById("openMenu");
    const closeMenu = document.getElementById("closeMenu");
    const gamesList = document.getElementById("games-list");
    const filterButtons = document.querySelectorAll(".filter-btn");
  
    // Дані ігор
const games = [
    {
      title: "The Elder Scrolls V: Skyrim Special Edition",
      genre: ["rpg"],
      href: "The Elder Scrolls V Skyrim Special Edition.html",
      image: "https://assets.spielekauf.de/storage/angebote/the-elder-scrolls-v-skyrim-special-edition-1668616745wmwaZ.jpg"
    },
    {
      title: "Far Cry 3",
      genre: ["action"],
      href: "Far Cry 3.html",
      image: "https://static.posters.cz/image/750/plakaty/far-cry-3-cover-i13147.jpg"
    },
    {
      title: "The Forest",
      genre: ["Horror"],
      href: "The Forest.html",
      image: "https://static.pepper.pl/threads/raw/vc8Jw/856058_1/re/768x768/qt/60/856058_1.jpg"
    },
    {
      title: "Loco Parentis / 孤女咒怨",
      genre: ["Horror"],
      href: "Loco Parentis.html",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSawC6XBosDG542GMLJ_J97gPX4D2efOtEdwQ&s"
    },
    {
      title: "S.T.A.L.K.E.R. 2: Heart of Chornobyl",
      genre: ["rpg"],
      href: "S.T.A.L.K.E.R. 2 Heart of Chornobyl.html",
      image: "https://wp-uploads.qualbert.com/2022/01/Stalker-2-title-1170x720.jpg"
    },
    {
      title: "Phasmophobia",
      genre: ["Horror"],
      href: "Phasmophobia.html",
      image: "https://data.xxlgamer.com/products/5142/DGslpxgzt6Q7HO-medium.jpg"
    },
    {
      title: "Counter-Strike 2",
      genre: ["fps"],
      href: "Counter-Strike 2.html",
      image: "https://upload.wikimedia.org/wikipedia/ru/thumb/d/db/Counter-strike_2.jpg/640px-Counter-strike_2.jpg"
    },
    {
      title: "Euro Truck Simulator 2",
      genre: ["simulation"],
      href: "Euro Truck Simulator 2.html",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPJ6-_swZbY86w-cfOZfTmWvO3ucwzM5sOJw&s"
    },
    {
      title: "Farming Simulator 17",
      genre: ["simulation"],
      href: "Farming Simulator 17.html",
      image: "https://m.media-amazon.com/images/M/MV5BNmI0OGEyMGMtMTcyZi00ZTJiLTk3YWMtYTBkOTY2MzViOWZiXkEyXkFqcGc@._V1_.jpg"
    },
    {
      title: "Fallout 4",
      genre: ["action"],
      href: "Fallout 4.html",
      image: "https://m.media-amazon.com/images/I/81LVtnitzDL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      title: "Vampire's Fall: Origins",
      genre: ["rpg"],
      href: "Vampire's Fall Origins.html",
      image: "https://fwcdn.pl/fpo/66/34/846634/7935750_2.8.webp"
    },
    {
      title: "Potion Craft: Alchemist Simulator",
      genre: ["simulation"],
      href: "Potion Craft Alchemist Simulato.html",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsltJCXezClrtZBbc6iklKXJQcTROJLC78w&s"
    },
    {
      title: "theHunter: Call of the Wild",
      genre: ["adventure"],
      href: "theHunter Call of the Wild.html",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjbsP4nePHhICpu6EBqLbVbZGOIniTgpFTNg&s"
    },
    {
      title: "Red Dead Redemption 2",
      genre: ["action"],
      href: "Red Dead Redemption 2.html",
      image: "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png?w=440"
    },
    {
      title: "7 Days to Die",
      genre: ["Horror"],
      href: "7 Days to Die.html",
      image: "https://pbs.twimg.com/profile_images/744764452365426689/hjAzwUG1_400x400.jpg"
    },
    {
      title: "Metro 2033 Redux",
      genre: ["fps"],
      href: "Metro 2033 Redux.html",
      image: "https://data.xxlgamer.com/products/2821/gPw26Sk608TxZo-big.jpg"
    },
    {
      title: "Diablo® IV",
      genre: ["action"],
      href: "RDiablo IV.html",
      image: "https://image.api.playstation.com/vulcan/ap/rnd/202211/3017/Oo1B84A7BLCT157YFSxjtwG0.png"
    },
    {
      title: "Slime Rancher",
      genre: ["simulation"],
      href: "Slime Rancher.html",
      image: "https://static0.thegamerimages.com/wordpress/wp-content/uploads/sharedimages/2024/12/mixcollage-12-dec-2024-04-01-pm-8648.jpg"
    },
    {
      title: "The Binding of Isaac: Rebirth",
      genre: ["adventure"],
      href: "The Binding of Isaac Rebirth.html",
      image: "https://upload.wikimedia.org/wikipedia/en/e/e1/The_Binding_of_Issac_Rebirth_cover.jpg"
    },
    {
      title: "Stardew Valley",
      genre: ["adventure"],
      href: "Stardew Valley.html",
      image: "https://store-images.s-microsoft.com/image/apps.44413.65985311967005000.4f51b5e9-febf-4990-8951-33ba59b634c9.924253ef-36b2-4cc0-8bb1-9a97c88d4828"
    },
    {
      title: "Vintage Story",
      genre: ["adventure"],
      href: "Vintage Story.html",
      image: "https://upload.wikimedia.org/wikipedia/en/1/1b/Vintage_Story_Logo.png"
    },
    {
      title: "RoboCop: Rogue City",
      genre: ["action"],
      href: "RoboCop Rogue City.html",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6imUvDITkTeNzfMl58vByTJCZ1IGDiPu_Jw&s"
    },
    {
      title: "Left 4 Dead 2",
      genre: ["fps"],
      href: "Left 4 Dead 2.html",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MjwgE1LuqhhuUgRxoA4gImpgwFGP22LVlQ&s"
    },
    {
      title: "Dark Deception",
      genre: ["Horror"],
      href: "Dark Deception.html",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyH8G6ocsSRlTpADYpyeoiGU0bpQCTy0Na7Q&s"
    },
    {
      title: "Graveyard Keeper",
      genre: ["adventure"],
      href: "Graveyard Keeper.html",
      image: "https://cdn-ext.fanatical.com/production/product/1280x720/a0a145a8-80aa-4de6-8767-b6be8e5e610f.jpeg"
    },
    {
      title: "R.E.P.O.",
      genre: ["action"],
      href: "REPO.html",
      image: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co9lxz.jpg"
    },
    {
      title: "Forza Horizon 4",
      genre: ["sports"],
      href: "Forza Horizon 4.html",
      image: "https://upload.wikimedia.org/wikipedia/ru/thumb/5/5f/Forza_Horizon_4_coverart.jpg/274px-Forza_Horizon_4_coverart.jpg"
    },
    {
      title: "Don't Starve",
      genre: ["adventure"],
      href: "Don't Starve.html",
      image: "https://image.api.playstation.com/cdn/EP2107/CUSA00327_00/i5qwqMWJj33IIr2m9TM29GQNnFCi4ZqI.png"
    },
    {
      title: "Fear Therapy",
      genre: ["horror", "adventure"],
      href: "Fear Therapy.html",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc23QdJcW5PcKut1V9x5U0DaOuv3gy14_1rQ&s"
    },
    {
      title: "Terraria",
      genre: ["adventure"],
      href: "Terraria.html",
      image: "https://store-images.s-microsoft.com/image/apps.31019.70406876433810089.4beffaca-3fee-4154-a21f-ecd9b3bedbb3.cc90d42b-0620-473e-a51e-52f0e5ff8454"
    }
  ];

  
    // Функція для відображення ігор
    function displayGames(filter) {
      gamesList.innerHTML = "";
      const filteredGames = filter === "all"
        ? games
        : games.filter(game => game.genre.includes(filter));
    
      filteredGames.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.className = "game-card";
        gameCard.innerHTML = `
          <img src="${game.image}" alt="${game.title}" class="game-image">
          <h2>${game.title}</h2>
          <p>Жанр: ${game.genre.join(", ")}</p>
        `;
    
        gameCard.addEventListener("click", () => {
          window.open(game.href, "_blank");
        });
    
        gamesList.appendChild(gameCard);
      });
    }
  
    // Відображення всіх ігор на старті
    displayGames("all");
  
    // Відкриття та закриття бокової панелі
    openMenu.addEventListener("click", () => {
      sidebar.classList.add("open");
    });
  
    closeMenu.addEventListener("click", () => {
      sidebar.classList.remove("open");
    });
  
    // Фільтрація ігор
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const genre = button.getAttribute("data-genre");
        displayGames(genre);
        sidebar.classList.remove("open"); // Закриваємо меню після вибору
      });
    });
  });
  