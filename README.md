```markdown
# CSS-JS Clock

This is a simple analog clock created using pure CSS and JavaScript. The project demonstrates the use of CSS for styling and JavaScript for controlling the clock's hands based on the current time.

![Clock Preview](https://orange-clock.netlify.app/screenshot.png)

## Live Demo

You can view the live version of the project [here](https://orange-clock.netlify.app/).

## Project Structure

- **HTML:** Basic structure of the clock.
- **CSS:** Used to design and style the clock. It includes the creation of the clock's face, hands, and pin.
- **JavaScript:** Controls the movement of the clock's hands by using the current time and rotating the hands accordingly.

## Technologies Used

- HTML5
- CSS3
- JavaScript (No libraries or frameworks used)

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

Make sure you have a modern web browser installed.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/aytekinkaplan/CSS-JS-Clock.git
   ```

2. Navigate to the project directory:

   ```bash
   cd CSS-JS-Clock
   ```

3. Open the `index.html` file in your preferred web browser to view the clock.

## How It Works

### CSS

- The clock's face and hands are styled using CSS. Gradients, shadows, and absolute positioning are utilized to create a realistic clock appearance.

### JavaScript

- The JavaScript code retrieves the current time using the `Date` object and calculates the degree of rotation for each hand (seconds, minutes, hours). It then applies the rotation to the corresponding hand using the `transform` property.

- The clock updates every second using `setInterval`, ensuring the time is always accurate.

```javascript
(function () {
  "use strict";
  
  var clockSeconds = document.getElementById('sec');
  var clockMinutes = document.getElementById('min');
  var clockHours = document.getElementById('hr');

  function getTime() {
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    
    var degSeconds = seconds * 360 / 60;
    var degMinutes = (minutes + seconds / 60) * 360 / 60;
    var degHours = (hours + minutes / 60 + seconds / 60 / 60) * 360 / 12;

    clockSeconds.style.transform = 'rotate(' + degSeconds + 'deg)';
    clockMinutes.style.transform = 'rotate(' + degMinutes + 'deg)';
    clockHours.style.transform = 'rotate(' + degHours + 'deg)';
  }

  document.addEventListener('DOMContentLoaded', function() {
    setInterval(getTime, 1000);
  });

})();
```

## Screenshot

![Clock Preview](https://orange-clock.netlify.app/screenshot.png)

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue if you have any suggestions or improvements.

## License

This project is licensed under the MIT License.

---

**Author:** Aytekin Kaplan

**GitHub:** [aytekinkaplan](https://github.com/aytekinkaplan)
```
