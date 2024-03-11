setInterval(() => {
    let d = new Date();
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds();
    msTime = d.getMilliseconds();

    hRotation = (30 * hTime + mTime / 2) + 0.0084 * sTime;
    mRotation = 6 * mTime + 0.1 * sTime;
    sRotation = 6 * sTime + 0.006 * msTime;
    console.log(mRotation);
    console.log(hRotation);
    console.log(sRotation);
    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;

}, 1);