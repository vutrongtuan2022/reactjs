import React, { memo, useState } from "react";
import "./styles.scss";

function Carousel({ items, show = 3 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Tính toán số lượng phần tử có thể cuộn
  const totalItems = items.length;

  const handleNext = () => {
    if (currentIndex + show < totalItems) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Quay lại phần tử đầu tiên
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(totalItems - show); // Quay về phần tử cuối cùng hiển thị
    }
  };

  return (
    <div className="carousel">
      <button
        className="carousel-button prev"
        onClick={handlePrev}
        disabled={false} // Không cần disable khi có tính năng quay vòng
      >
        {"<"}
      </button>
      <div className="carousel-track">
        <div
          className="carousel-items"
          style={{
            transform: `translateX(-${(100 / show) * currentIndex}%)`,
            width: `${(100 / show) * totalItems}%`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="carousel-item"
              style={{ flex: `0 0 ${100 / show}%` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <button
        className="carousel-button next"
        onClick={handleNext}
        disabled={false} // Không cần disable khi có tính năng quay vòng
      >
        {">"}
      </button>
    </div>
  );
}

const HomePage = () => {
  const items = [
    <div style={{ backgroundColor: "red", height: "100px" }}>Item 1</div>,
    <div style={{ backgroundColor: "blue", height: "100px" }}>Item 2</div>,
    <div style={{ backgroundColor: "green", height: "100px" }}>Item 3</div>,
    <div style={{ backgroundColor: "yellow", height: "100px" }}>Item 4</div>,
    <div style={{ backgroundColor: "purple", height: "100px" }}>Item 5</div>,
    <div style={{ backgroundColor: "red", height: "100px" }}>Item 6</div>,
    <div style={{ backgroundColor: "blue", height: "100px" }}>Item 7</div>,
    <div style={{ backgroundColor: "green", height: "100px" }}>Item 8</div>,
    <div style={{ backgroundColor: "yellow", height: "100px" }}>Item 9</div>,
    <div style={{ backgroundColor: "purple", height: "100px" }}>Item 10</div>,
    <div style={{ backgroundColor: "red", height: "100px" }}>Item 11</div>,
    <div style={{ backgroundColor: "blue", height: "100px" }}>Item 12</div>,
    <div style={{ backgroundColor: "green", height: "100px" }}>Item 13</div>,
    <div style={{ backgroundColor: "yellow", height: "100px" }}>Item 14</div>,
    <div style={{ backgroundColor: "purple", height: "100px" }}>Item 15</div>,
  ];

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <h1>Custom Carousel</h1>
      <Carousel items={items} show={5} />
    </div>
  );
};

export default memo(HomePage);
