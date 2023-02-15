import React, { useState, useEffect } from "react";

const App = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [song, setSong] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((currentLine) => currentLine + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentLine]);

  const handleChange = (event) => {
    setSong(event.target.value);
    setCurrentLine(0);
  };

  const lyrics = [
    {
      title: "Twinkle, Twinkle, Little Star",
      lyrics: [
        "Twinkle, twinkle, little star,",
        "How I wonder what you are.",
        "Up above the world so high,",
        "Like a diamond in the sky.",
      ],
    },
    {
      title: "Old MacDonald Had a Farm",
      lyrics: [
        "Old MacDonald had a farm,",
        "E-I-E-I-O.",
        "And on his farm he had a cow,",
        "E-I-E-I-O.",
        "With a moo-moo here,",
        "And a moo-moo there,",
        "Here a moo, there a moo,",
        "Everywhere a moo-moo.",
      ],
    },
  ];

  return (
    <div>
      <h1>Singing App</h1>
      <select onChange={handleChange}>
        <option value="">Select a song</option>
        {lyrics.map((lyric) => (
          <option key={lyric.title} value={lyric.title}>
            {lyric.title}
          </option>
        ))}
      </select>
      {song && (
        <div>
          <h2>{song}</h2>
          <p>
            {lyrics
              .find((lyric) => lyric.title === song)
              .lyrics.map((line, index) => (
                <span
                  key={line}
                  style={{
                    backgroundColor: index === currentLine ? "yellow" : "white",
                  }}
                >
                  {line}
                </span>
              ))}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
