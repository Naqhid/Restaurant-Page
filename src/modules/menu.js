function setBtnActive(id) {
  const activeBtn = document.querySelector('.tab.active');
  if (activeBtn) activeBtn.classList.remove('active');

  const homeBtn = document.getElementById(id);
  homeBtn.classList.add('active');
}

function createFood(src, text, price, alt) {
  const food = document.createElement('div');
  food.classList.add('food');
  const img = document.createElement('img');
  img.setAttribute('src', src);
  img.setAttribute('alt', alt);

  const description = document.createElement('div');
  description.classList.add('description');

  const foodName = document.createElement('h3');
  foodName.textContent = text;

  const foodPrice = document.createElement('h2');
  foodPrice.textContent = price;

  description.appendChild(foodName);
  description.appendChild(foodPrice);

  food.appendChild(img);
  food.appendChild(description);
  return food;
}

function loadMenu() {
  const content = document.getElementById('tab-content');
  content.classList.add('grid-lay');
  content.classList.remove('flex-lay');

  content.textContent = '';
  setBtnActive('menu');

  const foods = [
    
    createFood(
      'https://starwarsblog.starwars.com/wp-content/uploads/2018/10/ewok-cookies-tall.jpg',
      'ewok cookies',
      '4CR',
      'ewok cookies'
    ),
    
    createFood(
      'https://starwarsblog.starwars.com/wp-content/uploads/2019/06/vader-peanut-butter-blossoms-tall.jpg',
      'vader peanut butter blossoms',
      '20CR',
      'vader peanut butter blossoms'
    )
  ];

  foods.forEach((food) => {
    content.appendChild(food);
  });
}

export default loadMenu;
