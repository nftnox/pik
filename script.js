// Firebase configuration and initialization
const firebaseConfig = {
    apiKey: "AIzaSyDD_aYHztx16Gp0f0icIO3CdM-XfoDsvr4",
    authDomain: "pik1-374bc.firebaseapp.com",
    projectId: "pik1-374bc",
    storageBucket: "pik1-374bc.appspot.com",
    messagingSenderId: "38745525009",
    appId: "1:38745525009:web:a577fdad0e3cdbb25fdab0",
    measurementId: "G-HZN6ZC9CG0"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function showOptions(category) {
    document.getElementById('details-section').classList.remove('hidden');
    if (category === 'automobil') {
        document.getElementById('brand-selection').classList.remove('hidden');
    }
    // Add logic for other categories as needed
}

function showModels(brand) {
    const models = {
        audi: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7'],
        bmw: ['1 Series', '2 Series', '3 Series', '4 Series', '5 Series', '7 Series'],
        mercedes: ['A-Class', 'B-Class', 'C-Class', 'E-Class', 'S-Class']
    };

    let modelButtons = models[brand].map(model => `<button class="model-btn" onclick="showCarDetails('${model}')">${model}</button>`).join('');
    document.getElementById('model-selection').innerHTML = modelButtons;
    document.getElementById('model-selection').classList.remove('hidden');
}

function showCarDetails(model) {
    document.getElementById('car-details').classList.remove('hidden');
    // Save selected model if needed
}

function showAdditionalDetails() {
    document.getElementById('additional-details').classList.remove('hidden');
}

function showImageUpload() {
    document.getElementById('image-upload').classList.remove('hidden');
}

function finishPosting() {
    const carData = {
        condition: document.getElementById('condition').value,
        location: document.getElementById('location').value,
        price: document.getElementById('price').value,
        description: document.getElementById('description').value,
        year: document.getElementById('year').value,
        fuel: document.getElementById('fuel').value,
        transmission: document.getElementById('transmission').value,
        mileage: document.getElementById('mileage').value,
        engineSize: document.getElementById('engine-size').value,
        power: document.getElementById('power').value,
        doors: document.getElementById('doors').value,
        horsepower: document.getElementById('horsepower').value,
        type: document.getElementById('type').value,
        drive: document.getElementById('drive').value,
        firstRegistration: document.getElementById('first-registration').value,
        color: document.getElementById('color').value,
        wheelSize: document.getElementById('wheel-size').value,
        music: document.getElementById('music').value,
        parkingSensors: document.getElementById('parking-sensors').value,
        parkingCamera: document.getElementById('parking-camera').value,
        lights: document.getElementById('lights').value,
        protection: document.getElementById('protection').value,
        transmissionGears: document.getElementById('transmission-gears').value,
        tires: document.getElementById('tires').value,
        emissionStandard: document.getElementById('emission-standard').value,
        previousOwners: document.getElementById('previous-owners').value,
        weight: document.getElementById('weight').value,
        registered: document.getElementById('registered').checked,
        metallicPaint: document.getElementById('metallic-paint').checked,
        alloyWheels: document.getElementById('alloy-wheels').checked,
        digitalClimate: document.getElementById('digital-climate').checked,
        steeringControls: document.getElementById('steering-controls').checked,
        navigation: document.getElementById('navigation').checked,
        touchScreen: document.getElementById('touch-screen').checked,
        headUpDisplay: document.getElementById('head-up-display').checked,
        usbPort: document.getElementById('usb-port').checked,
        cruiseControl: document.getElementById('cruise-control').checked,
        bluetooth: document.getElementById('bluetooth').checked,
        carplay: document.getElementById('carplay').checked,
        rainSensor: document.getElementById('rain-sensor').checked,
        parkAssist: document.getElementById('park-assist').checked,
        autoHeadlights: document.getElementById('auto-headlights').checked,
        blindSpot: document.getElementById('blind-spot').checked,
        startStop: document.getElementById('start-stop').checked,
        hillAssist: document.getElementById('hill-assist').checked,
        seatMemory: document.getElementById('seat-memory').checked,
        seatHeating: document.getElementById('seat-heating').checked,
        seatCooling: document.getElementById('seat-cooling').checked,
        electricWindows: document.getElementById('electric-windows').checked,
        electricSeats: document.getElementById('electric-seats').checked,
        armrest: document.getElementById('armrest').checked,
        panoramicRoof: document.getElementById('panoramic-roof').checked,
        sunroof: document.getElementById('sunroof').checked,
        fogLights: document.getElementById('fog-lights').checked,
        electricMirrors: document.getElementById('electric-mirrors').checked,
        alarm: document.getElementById('alarm').checked,
        centralLocking: document.getElementById('central-locking').checked,
        remoteUnlocking: document.getElementById('remote-unlocking').checked,
        airbags: document.getElementById('airbags').checked,
        abs: document.getElementById('abs').checked,
        esp: document.getElementById('esp').checked,
        dpf: document.getElementById('dpf').checked,
        powerSteering: document.getElementById('power-steering').checked,
        turbo: document.getElementById('turbo').checked,
        isofix: document.getElementById('isofix').checked,
        towbar: document.getElementById('towbar').checked,
        certified: document.getElementById('certified').checked,
        foreignPlates: document.getElementById('foreign-plates').checked,
        leasing: document.getElementById('leasing').checked,
        serviceBook: document.getElementById('service-book').checked,
        accident: document.getElementById('accident').checked,
        classicCar: document.getElementById('classic-car').checked
    };

    // Save to Firestore
    db.collection('automobili').add(carData)
        .then(() => {
            alert('Oglas je uspješno objavljen!');
        })
        .catch((error) => {
            console.error('Greška pri objavljivanju oglasa: ', error);
        });

    // Handle image upload if needed
    const images = document.getElementById('images').files;
    if (images.length > 0) {
        // Upload images logic here
    }
}
