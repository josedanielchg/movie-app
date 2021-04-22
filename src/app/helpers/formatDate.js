export default function formatDate(dateString) {
     const months = [
               "January", "February", "Mach", "April", "May", "June", 
               "July", "August", "September", "October", "November", "December"
          ],
          date = new Date(dateString+"T00:00:00"),
          formatDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

     return formatDate;
}