# PopChoice - Movie Recommendation App

## Overview

PopChoice is a Movie Recommendation App built using React, a Supabase vector database, and the OpenAI API. The app suggests personalized movie recommendations based on user preferences and interactions.

## Features

- **Personalized Recommendations:** Utilizes a Supabase vector database and OpenAI API to generate personalized movie recommendations.
- **User Interaction:** Allows users to input preferences and receive tailored suggestions.
- **React Framework:** Built with React for a responsive and interactive user interface.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/popchoice.git
   ```

2. Navigate to the project directory:

   ```bash
   cd popchoice
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Set up the Supabase database credentials for a populated vector database. 

   ```plaintext
   # .env
   SUPABASE_DB_API_KEY=your_supabase_db_api_key
   ```

2. Obtain API keys for the OpenAI API.

   ```plaintext
   # .env
   OPENAI_API_KEY=your_openai_api_key
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open the app in your browser:

   ```plaintext
   http://localhost:3000
   ```

3. Interact with the app, input your preferences, and receive personalized movie recommendations.

## Contributing

If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- PopChoice was a challenge project apart of the Scrimba AI Engineer Path (scrimba.com). 
