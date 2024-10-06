 // Mock data for the boarding pass
      const boardingPassData = {
        flightName: "AZAL A380 Airbus",
        airport: "Charles De Gaulle Airport",
        terminal: "2",
        price: "$240",
        departure: {
          time: "12:00 pm",
          location: "Paris (CDG)"
        },
        arrival: {
          time: "5:00 am",
          location: "Baku (HYD)"
        },
        passenger: {
          name: "Elmar G",
          boardingPassNumber: "Boarding Pass N°123",
          class: "Business Class"
        },
        flightDetails: {
          date: "12/12/2024",
          flightTime: "12:00",
          gate: "A12",
          seat: "128",
          airline: "EK",
          flightNumber: "ABC12345"
        },
        barcodeImg: "https://via.placeholder.com/150x40"
      };

      // Function to populate the boarding pass
      function populateBoardingPass(data) {
        document.getElementById('flight-name').innerText = data.flightName;
        document.getElementById('airport').innerText = data.airport;
        document.getElementById('terminal').innerText = data.terminal;
        document.getElementById('price').innerText = data.price;
        document.getElementById('departure-time').innerText = data.departure.time;
        document.getElementById('departure-location').innerText = data.departure.location;
        document.getElementById('arrival-time').innerText = data.arrival.time;
        document.getElementById('arrival-location').innerText = data.arrival.location;
        document.getElementById('passenger-name').innerText = data.passenger.name;
        document.getElementById('boarding-pass-number').innerText = data.passenger.boardingPassNumber;
        document.getElementById('class').innerText = data.passenger.class;
        document.getElementById('flight-date').innerText = data.flightDetails.date;
        document.getElementById('flight-time').innerText = data.flightDetails.flightTime;
        document.getElementById('gate').innerText = data.flightDetails.gate;
        document.getElementById('seat').innerText = data.flightDetails.seat;
        document.getElementById('airline').innerText = data.flightDetails.airline;
        document.getElementById('flight-number').innerText = data.flightDetails.flightNumber;
        document.getElementById('barcode-img').src = data.barcodeImg;
      }

      // Populate boarding pass with mock data
      populateBoardingPass(boardingPassData);

      // Capture the ticket section as an image and download it
      document.getElementById('downloadBtn').addEventListener('click', () => {
        const ticketElement = document.getElementById('ticket');

        html2canvas(ticketElement).then(canvas => {
          // Convert the canvas to an image
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/png');
          link.download = 'boarding-pass.png';
          link.click();
        }).catch(error => {
          console.error('Error generating image:', error);
        });
      });

      // Share functionality using Web Share API
      document.getElementById('shareBtn').addEventListener('click', () => {
        if (navigator.share) {
          // Share data
          navigator.share({
            title: 'Boarding Pass',
            text: 'Check out my boarding pass for AZAL A380 Airbus!',
            url: window.location.href, // Share the URL of the current page
          })
          .then(() => console.log('Share successful'))
          .catch((error) => console.log('Share failed', error));
        } else {
          alert('Web Share API is not supported in your browser.');
        }
      });
    