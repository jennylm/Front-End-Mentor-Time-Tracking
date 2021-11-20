var hoursSpent = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

const activityAmount = document.querySelectorAll(".activity-amount");
const previousActivityAmount = document.querySelectorAll(".previous-activity")
console.log(activityAmount);

const dailyButton = document.getElementById("daily-link");
dailyButton.addEventListener("click", eventHandler);

const weeklyButton = document.getElementById("weekly-link");
weeklyButton.addEventListener("click", eventHandler);

const monthlyButton = document.getElementById("monthly-link");
monthlyButton.addEventListener("click", eventHandler);

let timeframe = "weekly";
let precursorText = "Last Week - "

function eventHandler(event) {

  if (event.target.id === "daily-link") {

    timeframe = "daily";
    precursorText = "Yesterday - "

    activityAmount.forEach((node, index) => {
    node.innerHTML = hoursSpent[index].timeframes.daily.current + " hrs";
    });

    previousActivityAmount.forEach((node, index) => {
    node.innerHTML = precursorText + hoursSpent[index].timeframes.daily.previous + " hrs";
    });

  } else if (event.target.id === "weekly-link") {
    timeframe = "weekly";
    precursorText = "Last Week - "

    activityAmount.forEach((node, index) => {
    node.innerHTML = hoursSpent[index].timeframes.weekly.current + " hrs";
    });

    previousActivityAmount.forEach((node, index) => {
    node.innerHTML = precursorText + hoursSpent[index].timeframes.weekly.previous + " hrs";
    });

  } else {

    timeframe = "monthly";
    precursorText = "Last Month - "

    activityAmount.forEach((node, index) => {
    node.innerHTML = hoursSpent[index].timeframes.monthly.current + " hrs";
    });

    previousActivityAmount.forEach((node, index) => {
    node.innerHTML = precursorText + hoursSpent[index].timeframes.monthly.previous + " hrs";
    });
  }

}
