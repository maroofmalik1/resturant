// Food items available for search
const foodItems = [
  "Burger",
  "Pizza",
  "Momo",
  "Smoky Burger",
  "Chicken Steam Momo",
];

function performSearch() {
  // Get the search input
  const query = document.getElementById("search-input").value.toLowerCase();

  // Filter food items based on the search query
  const results = foodItems.filter((item) =>
    item.toLowerCase().includes(query)
  );

  // Display the search results
  if (results.length > 0) {
    alert("Search Results: " + results.join(", "));
  } else {
    alert("No matching food items found.");
  }
}
