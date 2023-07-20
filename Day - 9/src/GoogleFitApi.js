import React, { useEffect, useState } from 'react';
import { google } from 'googleapis';

function GoogleFit() {
  const [fitnessData, setFitnessData] = useState([]);

  useEffect(() => {
    const loadGoogleFitAPI = async () => {
      try {
        // Load the Google API client
        await google.auth.getClient({
          scopes: ['https://www.googleapis.com/auth/fitness.activity.read'],
        });

        // Make API calls
        // Example: Fetch user's fitness data
        const fitness = google.fitness('v1');
        const response = await fitness.users.dataset.aggregate({
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
        const dataPoints = response.data.bucket[0].dataset[0].point;
        setFitnessData(dataPoints);
      } catch (error) {
        // Handle errors
        console.error('Error loading Google Fit API:', error);
      }
    };

    loadGoogleFitAPI();
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
