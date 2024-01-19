# youtube-skeleton
Similar to Neetcode clone:
Cloud Storage will store the raw and processed videos uploaded by users.
Pub/Sub will send messages to the video processing service.
Cloud Run will host a non-public video processing service. After it transcodes videos, they will be uploaded to Cloud Storage.
Cloud Firestore will store the metadata for the videos.
Cloud Run will host a Next.js app, which will serve as the Youtube web client.
The Next.js app will make API calls to Firebase Functions.
Firebase Functions will fetch videos from Cloud Firestore and return them.

Tech Stack: 
1. TypeScript
2. Next.js
3. Express.js
4. Docker
5. FFmpeg
6. Firebase Auth
7. Firebase Functions
8. Firebase Firestore
9. Google Cloud Storage
10. Google Cloud Pub/Sub
11. Google Cloud Run
