export default function calculateAge(birthday) {
     let birthdayDate = new Date(birthday),
          ageDifference = Date.now() - birthdayDate.getTime(),
          ageDate = new Date(ageDifference);

     return Math.abs(ageDate.getUTCFullYear() - 1970);
}