// Function to generate ticket
function generateTicket(name, email, event, date, location) {
    return `
    
        <div style="background-color: #1e1e1e; color: white; padding: 20px; border-radius: 10px; text-align: center; width: 300px; margin: 20px auto;">
            <h1>Congrats, ${name}!</h1>
            <p>Your ticket is ready.</p>
            <p>We've emailed your ticket to <strong>${email}</strong> and will send updates in the run up to the event.</p>
            <div style="margin-top: 20px; border: 2px solid #ff5c00; padding: 10px; border-radius: 5px;">
                <h2>${event}</h2>
                <p>${date} / ${location}</p>
                <p>${name}</p>
            </div>
        </div>
    `;
}

const ticketHTML = generateTicket('Jonatan Kristof', 'jonatan@email.com', 'Coding Conf', 'Jan 31, 2025', 'Austin, TX');
document.body.innerHTML += ticketHTML; // Add the generated ticket to the body

document.addEventListener('DOMContentLoaded', () => {
    console.log('Ticket confirmation displayed.');
});
