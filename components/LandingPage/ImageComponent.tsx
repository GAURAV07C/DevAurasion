import React from "react";

interface ImageComponentProps {
  fill: string; // Ensure the `fill` prop is a string
}

const ImageComponent: React.FC<ImageComponentProps> = ({ fill }) => {
  return (
    <div className="">
      <svg
        width="151"
        height="139"
        viewBox="0 0 151 139"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M44.0939 97.3861C44.0939 102.588 39.8718 106.811 34.6695 106.811C29.4672 106.811 25.245 102.588 25.245 97.3861C25.245 92.1838 29.4672 87.9617 34.6695 87.9617C39.8718 87.9617 44.0939 92.1838 44.0939 97.3861ZM150.785 103.669C150.785 122.725 135.279 138.225 116.229 138.225C99.3276 138.225 85.2411 126.011 82.2756 109.952H68.5096C65.544 126.011 51.4576 138.225 34.5564 138.225C15.5064 138.225 0 122.725 0 103.669C0 84.6128 15.5064 69.1127 34.5564 69.1127C38.7283 69.1127 42.7054 69.8918 46.4123 71.2552L52.7267 60.5742C45.4636 54.2346 40.8393 44.9358 40.8393 34.5564C40.8393 15.5001 56.3457 0 75.3957 0C94.4457 0 109.952 15.5001 109.952 34.5564C109.952 44.9358 105.334 54.2346 98.0647 60.5742L104.379 71.2552C108.086 69.8981 112.063 69.1127 116.235 69.1127C135.285 69.1127 150.785 84.6128 150.785 103.669ZM53.399 34.5564C53.399 40.7891 56.0316 46.3935 60.216 50.402C61.4726 46.6762 64.9597 43.9808 69.1064 43.9808H81.6724C85.8192 43.9808 89.3062 46.6762 90.5628 50.402C94.7473 46.3935 97.3798 40.7891 97.3798 34.5564C97.3798 22.4302 87.5156 12.566 75.3894 12.566C63.2633 12.566 53.399 22.4302 53.399 34.5564ZM56.5405 103.669C56.5405 91.543 46.6762 81.6787 34.5501 81.6787C22.4239 81.6787 12.5597 91.543 12.5597 103.669C12.5597 109.902 15.1922 115.506 19.3767 119.515C20.6333 115.789 24.1203 113.094 28.2671 113.094H40.8331C44.9798 113.094 48.4669 115.789 49.7235 119.515C53.9079 115.506 56.5405 109.902 56.5405 103.669ZM93.5535 77.6576L87.2391 66.9765C83.5384 68.3337 79.555 69.1127 75.3831 69.1127C71.2112 69.1127 67.2341 68.3337 63.5272 66.9765L57.2128 77.6576C62.9743 82.684 67.0519 89.5701 68.497 97.3861H82.263C83.7081 89.5701 87.792 82.684 93.5535 77.6576ZM138.219 103.669C138.219 91.543 128.355 81.6787 116.229 81.6787C104.103 81.6787 94.2384 91.543 94.2384 103.669C94.2384 109.902 96.8709 115.506 101.055 119.515C102.312 115.789 105.799 113.094 109.946 113.094H122.512C126.659 113.094 130.146 115.789 131.402 119.515C135.587 115.506 138.219 109.902 138.219 103.669ZM116.348 87.9617C111.146 87.9617 106.924 92.1838 106.924 97.3861C106.924 102.588 111.146 106.811 116.348 106.811C121.55 106.811 125.773 102.588 125.773 97.3861C125.773 92.1838 121.55 87.9617 116.348 87.9617ZM75.5088 37.6979C80.7111 37.6979 84.9333 33.4757 84.9333 28.2734C84.9333 23.0711 80.7111 18.8489 75.5088 18.8489C70.3065 18.8489 66.0843 23.0711 66.0843 28.2734C66.0843 33.4757 70.3065 37.6979 75.5088 37.6979Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default ImageComponent;
