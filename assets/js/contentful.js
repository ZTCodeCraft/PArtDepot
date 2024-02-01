

document.addEventListener('DOMContentLoaded', () => {

  const client = contentful.createClient({
    space: '9oxxwyo2qmf5',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'OzitjliXmS5IAiU3tqSqtq0EZ-inTrhZqhR4LVHgU1o'
  })

  const scheduleContainer = document.getElementById('schedule');


  client.getEntries({ content_type: 'schedule' })
    .then((entries) => {
      
      entries.items.sort((a, b) => {
        const days = ['Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота', 'Неделя'];
        return days.indexOf(a.fields.day) - days.indexOf(b.fields.day);
      });

      // Loop through each 'schedule' entry and create a div for each
      entries.items.forEach((entry) => {
        const div = document.createElement('div');
        div.className = 'col';
        
        const card = document.createElement('div');
        card.className = 'card text-center';
    
        const cardHeader = document.createElement('div');
        cardHeader.className = 'card-header';
        const dayName = document.createElement('h1');
        dayName.textContent = entry.fields.day;
        cardHeader.appendChild(dayName);
    
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
    
        // Check if activity and time fields are not empty
        if (entry.fields.activity && entry.fields.time) {
            const activityTimeContainer = document.createElement('div');
    
            const activityAndTime = document.createElement('h4');
            activityAndTime.className = 'card-text';
            activityAndTime.textContent = `${entry.fields.activity} - ${entry.fields.time}`;
    
            activityTimeContainer.appendChild(activityAndTime);
            cardBody.appendChild(activityTimeContainer);
        }
    
        // Check if activity2 and time2 fields are not empty
        if (entry.fields.activity2 && entry.fields.time2) {
            const activityTimeContainer2 = document.createElement('div');
    
            const activityAndTime2 = document.createElement('h4');
            activityAndTime2.className = 'card-text';
            activityAndTime2.className = 'mt-2';
            activityAndTime2.textContent = `${entry.fields.activity2} - ${entry.fields.time2}`;
    
            activityTimeContainer2.appendChild(activityAndTime2);
            cardBody.appendChild(activityTimeContainer2);
        }

        // Check if activity3 and time3 fields are not empty
        if (entry.fields.activity3 && entry.fields.time3) {
          const activityTimeContainer3 = document.createElement('div');
  
          const activityAndTime3 = document.createElement('h4');
          activityAndTime3.className = 'card-text';
          activityAndTime3.className = 'mt-2';
          activityAndTime3.textContent = `${entry.fields.activity3} - ${entry.fields.time3}`;
  
          activityTimeContainer3.appendChild(activityAndTime3);
          cardBody.appendChild(activityTimeContainer3);
      }
    
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
    
        div.appendChild(card);
        scheduleContainer.appendChild(div);
    });
    })
    .catch(console.error);
  
});