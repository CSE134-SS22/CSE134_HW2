// console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--text-color'))
document.getElementById('dark-theme-btn').addEventListener
('click', () => {
    document.documentElement.style.setProperty
    ('--background-color', 'rgb(51,51,51)');
    document.documentElement.style.setProperty
    ('--text-color', 'rgb(255,255,255)');
});



// function lightTheme() {
//     document.documentElement.style.setProperty
//     ('--background-color', 'white');
//     document.documentElement.style.setProperty
//     ('--text-color', 'black');


// }


// function lightTheme() {

//     // document.documentElement.style.setProperty
//     // ('--background-color', 'white');

//     // let currColor = 'white';
//     // document.documentElement.style.setProperty
//     // ('--background-color', currColor);

//     let currColor = 'rgb(255, 255, 255)'
//     document.documentElement.style.setProperty
//     ('--background-color', currColor);

//     document.documentElement.style.setProperty
//     ('--text-color', 'black');


// }


// document.getElementById('light-theme-btn').addEventListener('click', lightTheme);


function lightThemeGrad() {


    let getBgColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color');

    // alert(typeof(getBgColor));
    // alert(getBgColor);

    // console.log('${getBgColor} ${getBgColor.length)');
    // alert(getBgColor.length);

    getBgColor = getBgColor.substring(5, getBgColor.length-1);
    // alert(getBgColor);

    let getBgColor_arr = getBgColor.split(',');
    // alert(getBgColor_arr[0]);
    // alert(getBgColor_arr[1]);
    // alert(getBgColor_arr[2]);

    let getBgColor_r = parseInt(getBgColor_arr[0]);
    let getBgColor_g = parseInt(getBgColor_arr[1]);
    let getBgColor_b = parseInt(getBgColor_arr[2]);

    // alert(getBgColor_r);
    // alert(typeof(getBgColor_r));
    // alert(getBgColor_g);
    // alert(typeof(getBgColor_g));
    // alert(getBgColor_b);
    // alert(typeof(getBgColor_b));


    let period = 10;

    let increaR = (255 - getBgColor_r) / period;
    // alert(increaR);

    let increaG = (255 - getBgColor_g) / period;
    // alert(increaG);

    let increaB = (255 - getBgColor_b) / period;
    // alert(increaB);

    for (let i=0; i < period; i++) {
        getBgColor_r+=increaR;
        getBgColor_g+=increaG;
        getBgColor_b+=increaB;

        let timeout = 2000;

        setTimeout( ()=>{document.documentElement.style.setProperty
        ('--background-color', 'rgb(${getBgColor_r},${getBgColor_g},${getBgColor_b})');}, timeout / period);

        // document.documentElement.style.setProperty
        // ('--background-color', 'rgb(${getBgColor_r},${getBgColor_g},${getBgColor_b})');
    }


    document.documentElement.style.setProperty
    ('--text-color', 'black');
}


document.getElementById('light-theme-btn').addEventListener('click', lightThemeGrad);