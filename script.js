setInterval(() => {
    let d = new Date();
     let hTime = d.getHours();
     let mTime = d.getMinutes();
     let sTime = d.getSeconds();
     let msTime = d.getMilliseconds();

     let hRotation = (30 * hTime + mTime / 2) + 0.0084 * sTime;
     let mRotation = 6 * mTime + 0.1 * sTime;
     let sRotation = 6 * sTime + 0.006 * msTime;
    console.log(mRotation);
    console.log(hRotation);
    console.log(sRotation);
    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;

}, 1000);