export default function Journal({ text, setText }) {
  return (
    <textarea
      className="w-full h-60 p-4 rounded-2xl bg-white/10 backdrop-blur-xl"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}