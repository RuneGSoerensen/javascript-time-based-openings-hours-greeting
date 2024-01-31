const openingHours = {
    mandag: {open: 9, close: 17},
    tirsdag: {open: 9, close: 17},
    onsdag: {open: null, close: null},
    torsdag: {open: 9, close: 16.5},
    fredag: {open: 9, close: 16},
};

// Dato

let day = new Date();

// tid

let currentDay = day.toLocaleDateString("da-DK", { weekday: "long"}).toLowerCase();

let currentHour = day.getHours();

let currentMinute = day.getMinutes();

let currentOpeningHours = openingHours[currentDay]

let openingHoursMessage;

let messagePrint = document.getElementById("openingHoursMessage");

if(currentOpeningHours) {
    if(currentOpeningHours.open === null || currentOpeningHours.close === null) {
        openingHoursMessage = "Vi har lukket idag";
    } else {
        let timeUntilClosing = (currentOpeningHours.close - currentHour) * 60 - currentMinute;

        if(timeUntilClosing > 180) {
            openingHoursMessage = `Der er åben indtil ${currentOpeningHours.close}:00`;
        }

        else if(timeUntilClosing > 120) {
            openingHoursMessage = `Vi lukker snart, Vi har åbent indtil: ${currentOpeningHours.close}:00`;
        }

        else if(timeUntilClosing > 60) {
            openingHoursMessage = `Vi lukker meget snart idfk ${currentOpeningHours.close}:00`;
        }

        else if(timeUntilClosing > 0) {
            openingHoursMessage = `lukker om 1 time ${currentOpeningHours.close}:00`;
        }

        else {
            openingHoursMessage = `sdfglkæjsdfglkjæsdf`;
        }
    }
} else {
    openingHoursMessage = "Den sidste else message";
}

messagePrint.textContent = openingHoursMessage;