(() => {
  const compact = matchMedia("(max-width: 1279px)");
  const sheet = document.querySelector("#mapRightSheet");
  const clip = document.querySelector("#mapClipWrapper");
  const mapFrame = document.querySelector("#section-5-4-frame");
  function placeMapDetails() {
    if (sheet && clip && mapFrame) {
      (compact.matches ? mapFrame : clip).append(sheet);
    }
  }
  placeMapDetails();
  compact.addEventListener("change", placeMapDetails);

  const book = document.querySelector("#artBook3D");
  if (book) {
    const guide = document.createElement("div");
    guide.className = "mobile-art-guide";
    const sources = [
      book.querySelector(".book-base-page-left"),
      ...book.querySelectorAll(".book-leaf .front"),
    ];
    sources.filter(Boolean).forEach((source, index) => {
      const details = document.createElement("details");
      details.open = index === 0;
      const summary = document.createElement("summary");
      summary.textContent = [
        "Mulai mengenal seni Bali",
        "Cara menikmati karya",
        "Mengenal seniman & perajin",
        "Lanjutkan penjelajahan",
      ][index];
      details.append(summary);
      const paragraphs = [...source.querySelectorAll("p")];
      if (paragraphs.length)
        paragraphs.forEach((p) => {
          const text = document.createElement("p");
          text.textContent = p.textContent.trim();
          details.append(text);
        });
      else {
        const text = document.createElement("p");
        text.textContent = source.textContent.replace(/\s+/g, " ").trim();
        details.append(text);
      }
      guide.append(details);
    });
    book.closest(".book-perspective-wrapper").after(guide);
  }
})();
