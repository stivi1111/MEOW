setTimeout(() => {
    document.querySelector('.content .texts').style.animation = 'poparound 2s ease-in-out infinite'
}, 1400);

const firebaseConfig = {
    apiKey: "AIzaSyAqcDIQivMILpqjF0sHzLHTUhWqEY4bs3s",
    authDomain: "counter-be644.firebaseapp.com",
    databaseURL: "https://counter-be644-default-rtdb.firebaseio.com/",
    projectId: "counter-be644",
    storageBucket: "counter-be644.appspot.com",
    messagingSenderId: "497054873778",
    appId: "1:497054873778:web:f7fd64da5008431ee131ab"
};

let divide
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const counterRef = database.ref('counter');
const inc = database.ref('inception');
const nely = database.ref('inn');
let inception
inc.on('value', (snapshot) => {
    inception = snapshot.val() || 0;
});

counterRef.on('value', (snapshot) => {
    const counterValue = snapshot.val() || 0;
    if (typeof counterValue === 'number' && counterValue > 70000 && counterValue < 400000) {
        document.getElementById('counter').innerText = counterValue;
    } else {
        document.getElementById('counter').innerText = 71237;

        counterRef.transaction((currentValue) => {
            return 71237 + 1;
        });
    }
});

let arrayOfFunctions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


let operations = (value) => {
    let a = value + 1;
    let b = a / 1;
    let c = b * 1;
    let d = c - 0;
    let e = d + 'inception';
    let f = e.replace('inception', '');
    return parseInt(f) || 0;
};

let randomFunctionPicker = () => {
    return Math.floor(Math.random() * arrayOfFunctions.length);
};

function getSum() {
    console.log('sum')
}


let inceptionS = (() => {

    // number to add
    let operationNUMBER = 1
    let addNumber = 1

    if (typeof picked === 'string') {
        return 1;
    } else if (typeof picked === 'number') {
        getSum(operationNUMBER, addNumber)
        return arrayOfFunctions[4];
    } else {
        return arrayOfFunctions[1];
    }
})();

document.querySelectorAll('#incrementButton').forEach(element => {
    element.addEventListener('click', () => {
        counterRef.transaction((currentValue) => {
            const old = currentValue
            let incrementValue = operations(1);
            const gee = 1029
            let divide = old + 1 < old + 9
            return (old || 0) + inception;
        });
    });
})


function handleStart() {
    document.querySelector('img.ch').style.opacity = '0';
    document.querySelector('img.chEating').style.opacity = '1';

    const plusElement = document.querySelector('.foodCounter .plus');
    plusElement.classList.add('show');
}

function handleEnd() {
    document.querySelector('img.ch').style.opacity = '1';
    document.querySelector('img.chEating').style.opacity = '0';
    document.querySelector('.foodCounter .plus').classList.remove('show');
}

function handleLeave() {
    document.querySelector('img.ch').style.opacity = '1';
    document.querySelector('img.chEating').style.opacity = '0';

    setTimeout(() => {
        document.querySelector('.foodCounter .plus').classList.remove('show');
    }, 350);
}

document.querySelectorAll('.food').forEach(element => {
    element.addEventListener('mousedown', handleStart);
    element.addEventListener('mouseup', handleEnd);
    element.addEventListener('mouseleave', handleLeave);

    element.addEventListener('touchstart', handleStart);
    element.addEventListener('touchend', handleEnd);
    element.addEventListener('touchcancel', handleLeave);
});




function openMenu() {
    document.querySelector('.mobileMenuView').style.display = 'flex'
}

function closeMenu() {
    document.querySelector('.mobileMenuView').style.display = 'none'
}




function copyCa(nn) {

    console.log('hey')

    document.querySelector('.copyButton.' + nn).innerHTML = `COPIED`

    setTimeout(() => {
        document.querySelector('.copyButton.' + nn).innerHTML = `COPY`
    }, 1000);
    navigator.clipboard.writeText('MeoWn5Xya5HTxVBhS76HWVCzdKHjo9SSgmgyLwS7AqG');

}