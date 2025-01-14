

/*const freelancers = [
    {
        name: 'Alice',
        occupation: 'Writer',
        price: 30,
    },

    {
        name: 'Bob',
        occupation: 'Teacher',
        price: 50, 
    }
]

const possiblefreelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];
// avg starting price//
function calculateAveragePrice() {
    const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const averagePrice = totalPrices / freelancers.length; 
    const averagePriceSpan = document.getElementById('averagePrice');
    averagePriceSpan.textContent = `$${averagePrice.toFixed(2)}`;
  };


 function addFreelancer() {
    const newFreelancer = { name: "Carol", occupation: "Programmer", price: 70};
    freelancers.push(newFreelancer);
    displayFreelancers();
    calculateAveragePrice();
    };

function renderFreelancers (freelancers) {

  };



function render() {

  };



setInterval(addFreelancer, 1000)

displayFreelancers();
calculateAveragePrice();


console,log() */

const freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 }
  ];
  
  function displayFreelancers() {
    const freelancersList = document.getElementById("freelancersList");
    freelancersList.innerHTML = " ";
  
    freelancers.forEach((freelancer) => {
      const freelancerDiv = document.createElement("div");
      freelancerDiv.innerHTML = `<p>Name: ${freelancer.name}</p>
                                 <p>Occupation: ${freelancer.occupation}</p>
                                 <p>Starting Price: $${freelancer.startingPrice}</p>`;
      freelancersList.appendChild(freelancerDiv);
    });
  }
  
  function calculateAveragePrice() {
    const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    const averagePrice = totalPrices / freelancers.length;
    const averagePriceSpan = document.getElementById("averagePrice");
    averagePriceSpan.textContent = `$${averagePrice.toFixed(2)}`;
  }
  
  function addNewFreelancer() {
    const newFreelancer = { name: "Carol", occupation: "Programmer", startingPrice: 70 };
    freelancers.push(newFreelancer);
    displayFreelancers();
    calculateAveragePrice();
  }
  
  setInterval(addNewFreelancer, 3000);
  
  displayFreelancers();
  calculateAveragePrice();
  
