export function SectionVideo() {
  return (
    <div className="max-w-5xl mx-auto mt-20 flex justify-center">
      <div className="relative w-full mx-6" style={{ paddingTop: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://rutube.ru/play/embed/c398f81515fe106bf938d8fa554103e0/"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
