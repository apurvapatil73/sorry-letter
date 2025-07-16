let highestZ = 1;

class Paper {
  holding = false;
  currentX = 0;
  currentY = 0;
  prevMouseX = 0;
  prevMouseY = 0;

  init(el) {
    el.addEventListener('mousedown', (e) => {
      this.holding = true;
      el.style.zIndex = highestZ++;
      this.prevMouseX = e.clientX;
      this.prevMouseY = e.clientY;
    });

    document.addEventListener('mousemove', (e) => {
      if (!this.holding) return;

      const deltaX = e.clientX - this.prevMouseX;
      const deltaY = e.clientY - this.prevMouseY;

      this.currentX += deltaX;
      this.currentY += deltaY;

      el.style.transform = `translate(${this.currentX}px, ${this.currentY}px)`;

      this.prevMouseX = e.clientX;
      this.prevMouseY = e.clientY;
    });

    window.addEventListener('mouseup', () => {
      this.holding = false;
    });
  }
}

window.onload = () => {
  const papers = document.querySelectorAll('.paper');
  papers.forEach(p => {
    const paper = new Paper();
    paper.init(p);
  });
};
