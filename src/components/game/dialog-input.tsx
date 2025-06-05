function DialogInput() {
  return (
    <textarea
      id="prompt"
      // biome-ignore lint/a11y/noAutofocus: <explanation>
      autoFocus
      className="resize-none focus:outline-none w-full max-w-3xl mx-auto p-4 bottom-10 fixed h-16 bg-secondary rounded-md"
      rows={3}
    />
  );
}

export default DialogInput;
