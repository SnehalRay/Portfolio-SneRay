import React from 'react';
import Typewriter from 'typewriter-effect';

export const Type2 = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Hello Viewer!",
          "Bonjour, spectateur !",
          "Hallo, Zuschauer!",
          "¡Hola, espectador!",
          "नमस्ते, दर्शक!",
          "হ্যালো, দর্শক!",
          "مرحبًا، مشاهد!",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
      style={{ color: 'white' }} // Set your desired color here
    />
  );
}
