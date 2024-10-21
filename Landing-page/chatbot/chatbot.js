document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    const chatBox = document.getElementById("chat-box");
    const sendButton = document.getElementById("send-button");

    function loadChatHistory() {
        const chatHistory = JSON.parse(sessionStorage.getItem('chatHistory')) || [];
        chatHistory.forEach(({ text, className }) => {
            addMessage(text, className);
        });
    }

    function saveChatHistory() {
        const messages = [];
        document.querySelectorAll('.chat-message').forEach(message => {
            messages.push({
                text: message.innerText,
                className: message.className.split(' ')[1]
            });
        });
        sessionStorage.setItem('chatHistory', JSON.stringify(messages));
    }

    function clearChat() {
        sessionStorage.removeItem('chatHistory');
        chatBox.innerHTML = "";
    }

    function addMessage(text, className) {
        const messageElement = document.createElement('div');
        messageElement.className = `chat-message ${className}`;
        messageElement.innerHTML = `<p>${text}</p>`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
        saveChatHistory();
    }

    sendButton.addEventListener("click", function() {
        let input = inputField.value.trim();
        if (input) {
            if (input.toLowerCase() === "clear chat") {
                clearChat();
                inputField.value = "";
                return;
            }
            addMessage(input, 'user-message');
            inputField.value = "";
            const response = getBotResponse(input);
            addMessage(response, 'bot-message');
        }
    });

    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            e.preventDefault();
            sendButton.click();
        }
    });

    function getBotResponse(userMessage) {
        let text = userMessage.toLowerCase().replace(/[^\w\s\d]/gi, "");
        text = text
            // .replace(/ a /g, " ")
            .replace(/i feel /g, "")
            .replace(/whats/g, "what is")
            .replace(/please /g, "")
            .replace(/ please/g, "");

        const trigger = [
            ["hi", "hey", "hello"],
            ["how are you", "how are things"],
            ["what is going on", "what is up"],
            ["i am happy", "i am cool"],
            ["i am bored", "i am sad", "i am not happy"],
            ["tell me a story", "tell me a joke"],
            ["thanks", "thank you"],
            ["bye", "good bye", "goodbye"],
        ["nearest hotels", "find hotels nearby", " What are the closest hotels"],
            ["nearest restaurants", "find restaurants nearby", "closest restaurants"],
            ["tourist attractions", "find nearest tourist centers"],
            ["how much to plan my travel to paris", "how do i get a flight to paris", "what is the best time to visit paris" ],
            ["how do i book a flight and make reservations", "when should I travel"],
            ["passport requirements", "do I need a passport", "passport for travel"],
            ["currency exchange", "how to exchange currency", "currency conversion"],
            ["local customs", "what are local customs", "cultural practices"],
            ["emergency contacts", "who to contact in an emergency", "emergency services"],
            ["travel insurance", "do I need travel insurance", "travel insurance options"],
            ["language spoken in Bahamas", "what language is spoken", "language in this country"],
            ["vaccinations", "do I need vaccinations", "required vaccinations"],
            ["weather forecast", "what's the weather like"],
            ["transportation options", "how to get around", "transport options"],
            ["accommodation types", "what type of accommodation", "types of lodging"],
            ["local events", "are there any local events", "events happening"],
            ["packing tips", "what should I pack to travel", "packing list"]
        ];

        console.log(trigger.length);

        const reply = [
            ["Hello!", "Hi!", "Hey!", "Hi there!"], 
            ["Fine... how are you?", "Pretty well, how are you too?", "Fantastic, how are you?"],
            ["Nothing much", "Exciting things!"],
            ["Glad to hear it"],
            ["Why?", "Cheer up buddy"],
            ["once upon a time...", "I love asking kids what they want to be when they grow up because i am still looking for ideas"],
            ["You're welcome", "No problem"],
            ["Take care", "Have a good day"],
            ["Here are some nearby hotels: The Grand Hotel, City Inn, Boutique Suites.", "Some hotels near you are: The Plaza, Central Hotel, The Ritz."],
            ["Nearby restaurants include: Italian Bistro, Sushi Place, Café Deluxe.", "You can try these restaurants: The Diner, Gourmet Bistro, Fast Food Corner."],
            ["Visit the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Paris has many landmarks to explore."],
            ["You need a passport to travel internationally. Ensure it’s valid for at least six months beyond your planned departure date.", "The best time to visit Paris is from April to June or September to October for pleasant weather and fewer crowds."],
            ["visit google flight for more clarification or download our travel planner app", "Summer June to August: Ideal for beach vacations and outdoor activities, but popular tourist spots can be crowded and more expensive."],
            ["you'll need your personal documents, passport photograph and other online applications", "yes you need a passport", "international passport"],
            ["To exchange currency, visit a local exchange bureau or use ATMs that offer international transactions. Compare rates for the best deal."],
            ["Local customs vary, but generally include dining etiquette, dress codes, and social norms. Research customs of your destination before you travel."],
            ["In case of emergency, dial 112 in Europe or check local emergency numbers. It’s a good idea to have contact information for local hospitals."],
            ["Travel insurance is recommended to cover unexpected events like trip cancellations or medical emergencies. Check various providers for the best plan."],
            ["The language spoken in Bahamas is english aand germany. It’s helpful to know basic French phrases or have a translation app handy."],
            ["Vaccinations depend on your destination. Check with your healthcare provider or visit a travel clinic for required vaccinations."],
            ["Check the weather forecast online or use a weather app to know what to expect. Paris weather can be unpredictable, so be prepared for changes."],
            ["Options include public transportation (metro, buses), taxis, and ride-sharing services. Consider renting a bike for a scenic option."],
            ["Accommodation types range from luxury hotels to budget hostels, and vacation rentals. Choose based on your budget and preferences."],
            ["Local events can be found on community websites, local event calendars, or tourism boards. Check for festivals, concerts, and cultural events."],
            ["Pack according to the weather forecast and activities planned. Essentials include comfortable clothing, travel documents, and any special items needed."]
        ];
        console.log(reply.length);

        for (let i = 0; i < trigger.length; i++) {
            for (let j = 0; j < trigger[i].length; j++) {
                if (text.includes(trigger[i][j])) {
                    return reply[i][Math.floor(Math.random() * reply[i].length)];
                }
            }
        }

        const alternative = [
           "i am sorry, i can not answer this, please contact our customer care representative : 080563297389"
        ];

        return alternative[Math.floor(Math.random() * alternative.length)];
    }

    loadChatHistory();
});
