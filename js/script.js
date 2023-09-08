//portfolio.js
function setupImageFading(thumbnailIndex) {
  const images = document.querySelectorAll(`.thumbs li:nth-child(${thumbnailIndex}) .image-container img`);
  let currentIndex = 0;

  function fadeInNextImage() {
    images[currentIndex].style.opacity = '1';
    currentIndex = (currentIndex + 1) % images.length;

    setTimeout(() => {
      fadeOutCurrentImage();
    }, 10000); // Display time
  }

  function fadeOutCurrentImage() {
    images[currentIndex - 1 >= 0 ? currentIndex - 1 : images.length - 1].style.opacity = '0';

    setTimeout(() => {
      fadeInNextImage();
    }, 0); // Transition time
  }

  fadeInNextImage();
}

// Apply the fading effect to each thumbnail's images
const thumbnails = document.querySelectorAll('.thumbs li');
thumbnails.forEach((thumbnail, index) => {
  setupImageFading(index + 1); // Indices are 1-based
});
//end portfolio.js








//skill.js
document.addEventListener("DOMContentLoaded", function () {
  // Skill data and labels
  const WEbTechnologiesData = [85, 80, 75, 70, 65];
  const WEbTechnologiesLabels = ["HTML5", "CSS3", "JavaScript", "Ajax", "JSON"];
  const programmingLanguagesData = [95, 85, 80, 70, 80, 70];
  const programmingLanguagesLabels = [
    "C / C++",
    "Python",
    "Java",
    "Kotlin",
    "Assembly",
    "Others",
  ];

  const webFrameworksData = [85, 80, 70];
  const webFrameworksLabels = ["Express", "Node", "Flask"];

  const databasesData = [90, 85, 75];
  const databasesLabels = ["SQL", "MySQL", "MongoDB"];
  const toolsData = [90, 85, 75, 95, 90, 80];
  const toolsLabels = [
    "Visual Studio",
    "Android Studio",
    "CODE Blocks",
    "VS Code",
    "MS Office",
    "Oracle",
  ];
  // Create polar area charts
  function createPolarAreaChart(elementId, data, labels) {
    new Chart(document.getElementById(elementId), {
      type: "polarArea",
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: [
              "#FF6384",
              "#7FFFD4",
              "#00BFFF",
              "#FFCE56",
              "#BA55D3",
              "#7B68EE",
            ],
          },
        ],
      },
    });
  }
  createPolarAreaChart(
    "WebTechChart",
    WEbTechnologiesData,
    WEbTechnologiesLabels
  );
  createPolarAreaChart(
    "programmingLanguagesChart",
    programmingLanguagesData,
    programmingLanguagesLabels
  );
  createPolarAreaChart(
    "webFrameworksChart",
    webFrameworksData,
    webFrameworksLabels
  );
  createPolarAreaChart("databasesChart", databasesData, databasesLabels);
  createPolarAreaChart("toolsChart", toolsData, toolsLabels);
});







document.addEventListener("DOMContentLoaded", function () {
  // Skill data (replace these with actual data)
  const skillData = [
    [50, 70, 100], // Web & iOS Development
    [80, 90, 100, 100], // Problem Solving
    [80, 70], // Creative Thinking
    [80, 90, 70, 75], // Object-Oriented Programming (OOP)
    [80, 85, 70, 90], // Data Structures & Algorithms
    [60, 40], // Machine Learning
    [40, 70, 80], // Artificial Intelligence
    [60, 40], // Compiler Construction
    [40, 30, 30], // Computer Vision
  ];

  // Skill labels
  const skillLabels = [
    ["Designing", "Front-End", "Back-End"], // Web & iOS Development
    ["Time Complexity", "Space Complexity", "Completeness", "Accuracy"], // Problem Solving
    ["New Ideas", "Complex to Simple"], // Creative Thinking
    ["Abstraction", "Encapsulation", "Inheritance", "Polymorphisms"], // Object-Oriented Programming (OOP)
    [
      "Problem Solving",
      "Efficient Logics",
      "Data Organization",
      "Algorithm Design",
    ], // Data Structures & Algorithms
    ["Regression", "Classification"], // Machine Learning
    ["Game Development", "Algorithm Analysis", "AI Implementation"], // Artificial Intelligence
    ["Automata", "Logic Construction"], // Compiler Construction
    ["Image Processing", "Convolution", "Neural Networks"], // Computer Vision
  ];

  // Define colors for the bar charts
  const colors = ["#B0C4DE", "#FFA07A", "#90EE90", "#DEB887"];

  // Create a function to generate a bar chart
  function createBarChart(elementId, data, colors, labels) {
    new Chart(document.getElementById(elementId), {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: colors,
          },
        ],
      },
      options: {
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
            beginAtZero: true,
          },
        },
      },
    });
  }

  // Call the function for each skill section
  createBarChart(
    "webDevChart",
    skillData[0],
    colors.slice(0, 3),
    skillLabels[0]
  );
  createBarChart(
    "problemSolvingChart",
    skillData[1],
    colors.slice(0, 4),
    skillLabels[1]
  );
  createBarChart(
    "creativeThinkingChart",
    skillData[2],
    colors.slice(0, 2),
    skillLabels[2]
  );
  createBarChart("oopChart", skillData[3], colors.slice(0, 4), skillLabels[3]);
  createBarChart(
    "dsAndAlgoChart",
    skillData[4],
    colors.slice(0, 4),
    skillLabels[4]
  );
  createBarChart(
    "machineLearningChart",
    skillData[5],
    colors.slice(0, 2),
    skillLabels[5]
  );
  createBarChart("aiChart", skillData[6], colors.slice(0, 3), skillLabels[6]);
  createBarChart(
    "compilerConstructionChart",
    skillData[7],
    colors.slice(0, 2),
    skillLabels[7]
  );
  createBarChart(
    "computerVisionChart",
    skillData[8],
    colors.slice(0, 3),
    skillLabels[8]
  );
});
//end skill.js

//project
// Create a function to initialize a carousel
function initCarousel(cardsContainer) {
  const cards = cardsContainer.querySelectorAll('.card');

  let angle = 0;
  let isHovered = false;

  function rotateCarousel(angle) {
      if (!isHovered) {
          cardsContainer.style.transform = `translateZ(-200px) rotateY(${angle}deg)`;
      }
  }

  cards.forEach((card, index) => {
      card.style.transform = `rotateY(${index * 360 / cards.length}deg) translateZ(200px)`;
      card.addEventListener('mouseenter', () => {
          isHovered = true;
          card.style.transform = 'translateZ(200px) scale(1.2)';
          cards.forEach((otherCard, otherIndex) => {
              if (otherIndex !== index) {
                  otherCard.style.transition = 'none';
                  otherCard.style.opacity = '0';
              }
          });
      });
      card.addEventListener('mouseleave', () => {
          isHovered = false;
          card.style.transition = '';
          card.style.transform = `rotateY(${index * 360 / cards.length}deg) translateZ(200px)`;
          cards.forEach((otherCard) => {
              otherCard.style.opacity = '1';
          });
          rotateCarousel(angle);
      });
  });

  document.addEventListener('keydown', (event) => {
      if (!isHovered) {
          if (event.key === 'ArrowLeft') {
              angle += 60;
              rotateCarousel(angle);
          } else if (event.key === 'ArrowRight') {
              angle -= 60;
              rotateCarousel(angle);
          }
      }
  });
}

// Initialize each carousel on the page
const allCarousels = document.querySelectorAll('.cards-container');
allCarousels.forEach(initCarousel);



//end project



