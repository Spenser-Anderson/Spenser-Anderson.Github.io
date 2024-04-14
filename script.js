  // Array of verbs
  const words = ['DRAWING', 'BUILDING', 'CODING', 'DESIGNING'];

  // Get the element by its ID
  const dynamicTextElement = document.getElementById('dynamic-text');

  // Function to update the text
  function updateText() {
    // Get the current text
    const currentText = dynamicTextElement.textContent;

    // Find the index of the current text in the words array
    const currentIndex = words.indexOf(currentText);

    // Calculate the index of the next word, cycling back to the first word if needed
    const nextIndex = (currentIndex + 1) % words.length;

    // Get the next word
    const nextWord = words[nextIndex];

    // Update the text content of the h1 element
    dynamicTextElement.textContent = nextWord;
  }

  // Call the updateText function initially
  updateText();

  // Set up an interval to call the updateText function every 9 seconds
  setInterval(updateText, 3000);
