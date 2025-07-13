export const playCreateSound = () => {
  const audio = new Audio("https://cdn.freesound.org/previews/66/66717_931655-lq.mp3");
  audio.play().catch((err) => console.warn("Create sound failed:", err));
};

export const playUpdateSound = () => {
  const audio = new Audio("https://cdn.freesound.org/previews/341/341695_626833-lq.mp3");
  audio.play().catch((err) => console.warn("Update sound failed:", err));
};

export const playDeleteSound = () => {
  const audio = new Audio("https://cdn.freesound.org/previews/198/198841_2859975-lq.mp3");
  audio.play().catch((err) => console.warn("Delete sound failed:", err));
};
