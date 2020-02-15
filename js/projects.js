$(function() {
    let startDate = new Date(2018, 5, 27);
    let now = Date.now();
    let msInDay = 1000 * 60 * 60 * 24;
    let daysBetween = Math.floor((now - startDate) / msInDay);
    $('#days').text(daysBetween);
});
