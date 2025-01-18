getCategories();
setTimeout(() => {
  document.querySelectorAll("#categories .category").forEach((category) => {
    const activeCategory = category.querySelector("h5.active-category");
    if (activeCategory) {
      console.log(activeCategory.id);
      console.log("===========");
    }
  });
}, 500);
