    const apiKey = "758cc24f202cd84a983e92a2bb7bb364";

    function speak(text, lang = 'hi-IN') {
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = lang;
      speechSynthesis.speak(msg);
    }

    function formatDateTime() {
      const now = new Date();
      const date = now.toLocaleDateString('en-GB', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      });
      const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      document.getElementById("date-time").innerText = `${date} | ${time}`;
    }

    function setBackground(condition) {
      const bg = {
        Clear: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1950&q=80",
        Clouds: "https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg",
        Snow: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
        Thunderstorm: "https://images.pexels.com/photos/416920/pexels-photo-416920.jpeg",
        Haze: "https://images.pexels.com/photos/1004665/pexels-photo-1004665.jpeg"
      };
      document.body.style.backgroundImage = `url('${bg[condition] || bg.Clear}')`;
    }

    function getWeather() {
      const city = document.getElementById("city-input").value || "Surat";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      fetch(url)
        .then(res => res.json())
        .then(data => {
          document.getElementById("city-name").innerText = data.name;
          document.getElementById("temp").innerText = `${Math.round(data.main.temp)}°C`;
          document.getElementById("feels-like").innerText = `Feels like: ${Math.round(data.main.feels_like)}°C`;
          document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
          document.getElementById("wind").innerText = `Wind: ${data.wind.speed} km/h`;
          document.getElementById("weather-desc").innerText = data.weather[0].description;
          document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

          setBackground(data.weather[0].main);
          formatDateTime();

          const msg = `${data.name} का तापमान है ${Math.round(data.main.temp)} डिग्री और मौसम है ${data.weather[0].description}`;
          speak(msg, 'hi-IN');
        });
    }

    function startVoice() {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'hi-IN';
      recognition.start();

      recognition.onresult = function (event) {
        const spoken = event.results[0][0].transcript;
        document.getElementById("city-input").value = spoken;
        getWeather();
      };

      recognition.onerror = function (e) {
        alert("Voice error: " + e.error);
      };
    }

    window.onload = () => {
      speak("Welcome to the weather website Akhil sir", 'en-IN');
      getWeather();
      formatDateTime();
    };
