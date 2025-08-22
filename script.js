  // Array of verbs
  const verbs = ['DRAWING', 'BUILDING', 'CODING', 'DESIGNING'];

  // Get the verb element by its ID
  const dynamicTextElement = document.getElementById('dynamic-verb');

  function updateVerb() {
    // Get the text of current verb
    const currentVerb = dynamicTextElement.textContent;

    // Find the index of the current verb.
    const currentIndex = verbs.indexOf(currentVerb);

    // Get the index of the next word, cycling back to the first word if needed
    const nextIndex = (currentIndex + 1) % verbs.length;

    // Get the next word by updating the index.
    const nextVerb = verbs[nextIndex];

    // Update the text content of the h1 element
    dynamicTextElement.textContent = nextVerb;
  }

  updateVerb();

  // Interval to call the updateText function every 3 seconds
  setInterval(updateVerb, 3000);
