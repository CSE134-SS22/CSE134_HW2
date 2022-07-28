// console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--text-color'))
// document.getElementById('dark-theme-btn').addEventListener
// ('click', () => {
//     document.documentElement.style.setProperty
//     ('--background-color', 'rgb(51,51,51)');
//     document.documentElement.style.setProperty
//     ('--text-color', 'rgb(255,255,255)');
// });


// function lightTheme() {
//     document.documentElement.style.setProperty
//     ('--background-color', 'white');
//     document.documentElement.style.setProperty
//     ('--text-color', 'black');


// }


// document.getElementById('light-theme-btn').addEventListener('click', lightTheme);

function changeColorGrad(colorVar, period, timeout, targetR, targetG, targetB) {

    let getBgColor = getComputedStyle(document.documentElement).getPropertyValue(colorVar);
    // alert(getBgColor);
    // alert(getBgColor[0]);

    getBgColor = getBgColor.substring(5, getBgColor.length-1);
    // alert(getBgColor);

    let getBgColor_arr = getBgColor.split(',');
    // alert('getBgColor_arr[0]' + getBgColor_arr[0]);

    let getBgColor_r = parseInt(getBgColor_arr[0]);
    let getBgColor_g = parseInt(getBgColor_arr[1]);
    let getBgColor_b = parseInt(getBgColor_arr[2]);
    // alert(getBgColor_r);
    // alert(getBgColor_g);
    // alert(getBgColor_b);


    let increaR = (targetR - getBgColor_r) / period;
    // alert(increaR);

    let increaG = (targetG - getBgColor_g) / period;
    // alert(increaG);

    let increaB = (targetB - getBgColor_b) / period;
    // alert(increaB);


    for (let i=0; i < period; i++) {

        // getBgColor_r = Math.floor(getBgColor_r + increaR);
        // getBgColor_g = Math.floor(getBgColor_g + increaG);
        // getBgColor_b = Math.floor(getBgColor_b + increaB);


        getBgColor_r = Math.ceil(getBgColor_r + increaR);
        getBgColor_g = Math.ceil(getBgColor_g + increaG);
        getBgColor_b = Math.ceil(getBgColor_b + increaB);

        // getBgColor_r+=increaR;
        // getBgColor_r = Math.ceil(getBgColor_r);
        // getBgColor_g+=increaG;
        // getBgColor_g = Math.ceil(getBgColor_g);
        // getBgColor_b+=increaB;
        // getBgColor_b = Math.ceil(getBgColor_b);


        // getBgColor_r+=increaR;
        // getBgColor_g+=increaG;
        // getBgColor_b+=increaB;

        colorString = ' rgb(';
        colorString  = colorString + getBgColor_r;
        colorString = colorString + ',';
        colorString  = colorString + getBgColor_g;
        colorString = colorString + ',';
        colorString  = colorString + getBgColor_b;
        colorString = colorString + ')';
        // alert(colorString);

        // setTimeout( ()=>{document.documentElement.style.setProperty
        // (colorVar, 'rgb(${getBgColor_r},${getBgColor_g},${getBgColor_b})'.toString);}, timeout / period);
        setTimeout( ()=>{document.documentElement.style.setProperty
            (colorVar, colorString);}, timeout / period);
        // document.documentElement.style.setProperty
        // ('--background-color', 'rgb(${getBgColor_r},${getBgColor_g},${getBgColor_b})');
    }

    // alert(getBgColor_r);
    // alert(getBgColor_g);
    // alert(getBgColor_b);



}

// function darkThemeGrad() {

//     changeColorGrad('--text-color', 10, 2000, 240, 240, 240);

//     // changeColorGrad('--background-color', 10, 2000, 0, 0, 0);

// }

// document.getElementById('dark-theme-btn').addEventListener('click', darkThemeGrad);
// // document.getElementById('dark-theme-btn').addEventListener('click', changeColorGrad('--background-color', 10, 2000, 0, 0, 0));

// function lightThemeGrad() {
//     //     document.documentElement.style.setProperty
//     // ('--text-color', 'black');

//     changeColorGrad('--text-color', 10, 2000, 0, 0, 0);

//     // changeColorGrad('--background-color', 10, 2000, 255, 255, 255);

// }

// document.getElementById('light-theme-btn').addEventListener('click', lightThemeGrad);
// // document.getElementById('light-theme-btn').addEventListener('click', changeColorGrad('--background-color', 10, 2000, 255, 255, 255));

//------------------------------------------

// function defaultThemeGrad() {

//     changeColorGrad('--text-color', 10, 2000, 0, 0, 0);

//     changeColorGrad('--background-color', 10, 2000, 255, 192, 203);

// }

// document.getElementById('default-theme-btn').addEventListener('click', defaultThemeGrad);

// function darkThemeGrad() {

//     changeColorGrad('--text-color', 10, 2000, 255, 255, 255);

//     changeColorGrad('--background-color', 10, 2000, 50, 50, 50);

// }

// document.getElementById('dark-theme-btn').addEventListener('click', darkThemeGrad);


// function lightThemeGrad() {
    
//     changeColorGrad('--text-color', 10, 2000, 0, 0, 0);

//     changeColorGrad('--background-color', 10, 2000, 255, 255, 255);


// }

// document.getElementById('light-theme-btn').addEventListener('click', lightThemeGrad);
//----------------------------------------------------------------



function defaultThemeGrad() {

    document.documentElement.style.setProperty
    ('--text-color', 'black');

    changeColorGrad('--background-color', 10, 2000, 255, 192, 203);

}

document.getElementById('default-theme-btn').addEventListener('click', defaultThemeGrad);

function darkThemeGrad() {

    document.documentElement.style.setProperty
    ('--text-color', 'white');

    changeColorGrad('--background-color', 10, 2000, 50, 50, 50);

}

document.getElementById('dark-theme-btn').addEventListener('click', darkThemeGrad);


function lightThemeGrad() {
    
    document.documentElement.style.setProperty
    ('--text-color', 'black');

    changeColorGrad('--background-color', 10, 2000, 255, 255, 255);

}

document.getElementById('light-theme-btn').addEventListener('click', lightThemeGrad);



