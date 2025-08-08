module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        // Custom color palette matching the image
        primary: '#002f5e', // Dark blue for the main navigation bar
        'primary-dark': '#00264b', // Slightly darker blue for dropdown background
        'primary-light': '#003a74', // Lighter blue for dropdown item hover
        accent: '#f0f2f5', // Yellowish color for social media icons (as seen in image)
        'light-gray-bg': '#f0f2f5', // Very light grey for the top header background
      },
      fontFamily: {
        // Using 'Inter' as a general sans-serif font, as 'Playfair Display' might not be ideal for navigation links.
        // If 'Playfair Display' is strictly required, ensure it's imported and suitable for small, uppercase text.
        // For matching the image, a clean sans-serif like 'Inter' or 'Roboto' is often a better fit for navigation.
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
