function submitForm(event) {
    event.preventDefault();
    alert("Thank you for volunteering!");
}
function copyUPI() {
    navigator.clipboard.writeText("motilalngo@upi");
    alert("UPI ID copied!");
}