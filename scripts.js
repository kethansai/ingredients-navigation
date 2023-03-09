let ingredients = document.getElementById("ingredients");
let categories = document.getElementById("categories");
let categories2 = document.getElementById("categories2");
let data = "";
const CategoriesList = [
  "Vegetable",
  "Non-Vegetarian",
  "Proteins",
  "Gluten",
  "Spices",
];

const getCategories =
  `<option value=''>Select Category</option>` +
  CategoriesList.reduce((options, el) => {
    options += `<option value='${el}'>${el}</option>`;
    return options;
  }, "");

categories.innerHTML = getCategories;
categories2.innerHTML = getCategories;

const IngredientsList = [
  {
    name: "Broccoli",
    category: "Vegetable",
    description: `This is a wider card with supporting text below as a natural.`,
    calories: 400,
    tags: ["Farm Product", "Vegetable", "Dairy Product", "Dairy Product"],
    image: `https://cdn.pixabay.com/photo/2016/03/05/19/02/broccoli-1238250_960_720.jpg`,
  },
  {
    name: "Radish",
    category: "Vegetable",
    description: `This is a wider card with supporting text below as a natural.`,
    calories: 450,
    tags: ["Farm Product"],
    image: `https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2020/02/vegetables-name-in-english-3.jpg`,
  },
  {
    name: "Tomato",
    category: "Vegetable",
    description: `This is a wider card with supporting text below as a natural.`,
    calories: 480,
    tags: ["Farm Product", "Vegetable", "Dairy Product", "Dairy Product"],
    image: `https://www.worldatlas.com/r/w500-q80/upload/c8/0e/5f/shutterstock-311521226.jpg`,
  },
  {
    name: "Potato",
    category: "Vegetable",
    description: `This is a wider card with supporting text below as a natural.`,
    calories: 420,
    tags: ["Farm Product"],
    image: `https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2020/02/vegetables-name-in-english-5.jpg`,
  },
  {
    name: "Carrot",
    category: "Vegetable",
    description: `This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.`,
    calories: 400,
    tags: ["Farm Product", "Vegetable", "Dairy Product", "Dairy Product"],
    image: `https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2020/02/vegetables-name-in-english-7.jpg`,
  },
  {
    name: "Onion",
    category: "Vegetable",
    description: `This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.`,
    calories: 400,
    tags: ["Farm Product"],
    image: `https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2020/02/vegetables-name-in-english-9.jpg`,
  },
  {
    name: "Meat",
    category: "Non-Vegetarian",
    description: `This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.`,
    calories: 400,
    tags: ["Farm Product", "Vegetable", "Dairy Product", "Dairy Product"],
    image: `https://www.foodmanufacture.co.uk/var/wrbm_gb_food_pharma/storage/images/_aliases/wrbm_large/publications/food-beverage-nutrition/foodmanufacture.co.uk/article/2021/02/01/meat-trends-market-prospers-in-face-of-pandemic/12148503-4-eng-GB/Meat-trends-market-prospers-in-face-of-pandemic.jpg`,
  },
  {
    name: "Chicken",
    category: "Non-Vegetarian",
    description: `This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.`,
    calories: 400,
    tags: ["Farm Product"],
    image: `https://img.freepik.com/premium-photo/chicken-meat-white-background_181303-1986.jpg`,
  },
];

const filterByCategory = (val) => {
  getIngredients(
    val.length
      ? IngredientsList.filter((el) => el.category === val)
      : IngredientsList
  );
};

const filterBySearch = (val) => {
  val = val.toLowerCase();
  getIngredients(
    IngredientsList.filter(
      (el) =>
        el.name.toLowerCase().includes(val) ||
        el.category.toLowerCase().includes(val)
    ) || IngredientsList
  );
};

const getIngredients = (ingredientsArr) => {
  let data = "";
  ingredientsArr.forEach((el, i) => {
    data += `<div class='col'>
          <div class='card shadow-sm' style='height:100%;'>
            <img
              src=${el.image}
              alt='photo'
              height='200'
              class='bd-placeholder-img card-img-top'
            />
            <div class='card-body'>
              <div class='fs-2 fw-bold text-center'>${el.name}</div>
              <div class='fs-4 fw-semibold text-center'>${el.category}</div>
              <p class='card-text text-center'>${el.description}</p>
              <div class='d-flex flex-wrap justify-content-center mb-5'>`;
    el.tags.forEach((tag) => {
      data += `<div class='card-text py-1 px-2 m-1 fw-bolder rounded' style='background:#dee2e6;font-size:0.7rem;'><i class='fa-solid fa-tags'></i> ${tag}</div>`;
    });
    data += `</div>
              <button
                  type='button'
                  class='btn btn-sm fs-3 text-secondary'
                  style='position:absolute; top:90%; left:45%'
                  data-bs-toggle='modal'
                  data-bs-target='#editModal${i}'
                  >
                  <i class='fa-solid fa-pen-to-square'></i>
              </button>
            </div>
            <button
              type='button'
              style='position:absolute; top:1%; left:85%'
              class='btn btn-sm fs-3'
              data-bs-toggle='modal'
              data-bs-target='#deleteModal${i}'
              >
              <i class='fa-solid fa-trash text-danger'></i>
            </button>
            <div class='text-center' style="position:absolute;border:1.5px solid black;width:38px;background-color:white;height:40px;border-radius:10px;top:1%;left:3%;">
              <div class='fs-6 fw-bold' style='margin-bottom:-5px;'>${el.calories}</div>
              <div class='fw-bold' style='font-size:8px'>Calories</div>
            </div>
          </div>
          <!-- Delete Modal -->
          <div class="modal fade" id="deleteModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                  <div class="modal-header border-bottom-0">
                      <h5 class="modal-title text-center" id="exampleModalLabel">Delete Ingredient</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      Are you sure you want to delete this ingredient?
                  </div>
                  <div class="modal-footer border-top-0">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                      <button type="button" class="btn btn-danger">Delete</button>
                  </div>
                  </div>
              </div>
          </div>
          <!-- Delete Modal Close-->
          <!-- Edit Modal -->
          <div class="modal fade" id="editModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                  <div class="modal-header border-bottom-0">
                      <h5 class="modal-title text-center" id="exampleModalLabel">Edit Ingredient</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      <form>
                          <div class="mb-3">
                              <label for="ingredient" class="form-label">Ingredient Name</label>
                              <input type="text" class="form-control" id="ingredient" value='${el.name}' placeholder="Enter ingredient name">
                          </div>
                          <div class="mb-3">
                              <label for="category" class="form-label">Category</label>
                              <select id='category' class="form-select mb-3" aria-label=".form-select-lg example">
                                  `;
    CategoriesList.forEach((cat) => {
      data += `<option value=${cat} ${
        cat == el.category ? "selected" : ""
      }>${cat}</option>`;
    });
    data += `
                              </select>
                          </div>
                          <div class="mb-3">
                              <label for="description" class="form-label">Description</label>
                              <textarea class="form-control" id="description" placeholder='Description..' rows='3'>
                                  ${el.description}
                              </textarea>
                          </div>
                      </form>
                  </div>
                  <div class="modal-footer border-top-0">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                      <button type="button" class="btn btn-primary"> Save </button>
                  </div>
                  </div>
              </div>
          </div>
          <!-- Edit Modal Close-->
        </div>`;
  });

  ingredients.innerHTML = data;
};

getIngredients(IngredientsList);
