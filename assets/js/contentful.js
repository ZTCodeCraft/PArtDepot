

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

        const activityName = document.createElement('h4');
        activityName.className = 'card-text';
        activityName.textContent = entry.fields.activity;

        const activityTime = document.createElement('h3');
        activityTime.className = 'card-text';
        activityTime.textContent = entry.fields.time;

        cardBody.appendChild(activityName);
        cardBody.appendChild(activityTime);

        card.appendChild(cardHeader);
        card.appendChild(cardBody);

        div.appendChild(card);
        scheduleContainer.appendChild(div);
      });
    })
    .catch(console.error);
  

});