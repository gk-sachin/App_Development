import React, { useEffect, useState } from 'react';

function GoogleFit() {
  const [fitnessData, setFitnessData] = useState([]);

  useEffect(() => {
    const loadGoogleFitAPI = () => {
      return new Promise((resolve, reject) => {
        window.gapi.load('client', {
          callback: resolve,
          onerror: reject,
          timeout: 10000,
          ontimeout: reject,
        });
      });
    };

    const initGoogleClient = async () => {
      try {
        await window.gapi.client.init({
          clientId: 'YOUR_CLIENT_ID',
          scope: 'https://www.googleapis.com/auth/fitness.activity.read',
        });

        // Make API calls
        // Example: Fetch user's fitness data
        const response = await window.gapi.client.fitness.users.dataset.aggregate({
          userId: 'me',
          requestBody: {
            aggregateBy: [
              {
                dataTypeName: 'com.google.step_count.delta',
              },
            ],
            bucketByTime: { durationMillis: 86400000 },
            startTimeMillis: new Date().setHours(0, 0, 0, 0),
            endTimeMillis: new Date().getTime(),
          },
        });

        // Process the response data
        const dataPoints = response.result.bucket[0].dataset[0].point;
        setFitnessData(dataPoints);
      } catch (error) {
        // Handle errors
        console.error(error);
      }
    };

    loadGoogleFitAPI()
      .then(initGoogleClient)
      .catch((error) => {
        console.error('Error loading Google Fit API:', error);
      });
  }, []);

  return (
    <div>
      <h1>Google Fit Integration</h1>
      <ul>
        {fitnessData.map((data, index) => (
          <li key={index}>
            <p>Start Time: {new Date(parseInt(data.startTimeNanos) / 1000000).toString()}</p>
            <p>End Time: {new Date(parseInt(data.endTimeNanos) / 1000000).toString()}</p>
            <p>Step Count: {data.value[0].intVal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoogleFit;
