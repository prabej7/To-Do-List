// module.exports = getDate;

// function getDate() {
//     let today = new Date();
//     const option = {
//         weekday: "long",
//         year: "numeric",
//         month: "long"
//     }
//     let day = today.toLocaleDateString("en-Us", option);
//     return day;
// }
module.exports= date;

function date()
{
    let today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    let day = today.toLocaleDateString("en-US",options);
    return day;
}