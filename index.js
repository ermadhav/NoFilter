function handleSearch(event) {
    event.preventDefault(); // Prevent default form submission
  
    const input = document.getElementById("searchInput").value.trim().toLowerCase();
  
    const pages = {
      indian: "indian.html",
      american: "american.html",
      chinese: "chinese.html",
      japanese: "japanese.html",
      korean: "korean.html",
      favourite: "my_favourite.html",
      home: "index.html"
    };
  
    if (pages[input]) {
      window.location.href = `/Pages/${pages[input]}`;
    } else {
      alert("No page found for: " + input);
    }
  }
  