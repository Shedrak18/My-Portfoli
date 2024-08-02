// import React from "react";
// import styled from "styled-components";

// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.8);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// `;

// const ModalContent = styled.div`
//   position: relative;
//   width: 80%;
//   max-width: 800px;
//   background: ${({ theme }) => theme.white};
//   border-radius: 10px;
//   padding: 20px;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background: ${({ theme }) => theme.primary};
//   color: ${({ theme }) => theme.white};
//   border: none;
//   border-radius: 50%;
//   width: 30px;
//   height: 30px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   font-size: 20px;
//   &:hover {
//     background: ${({ theme }) => theme.primary + 20};
//   }
// `;

// const Video = styled.video`
//   width: 100%;
//   height: auto;
// `;

// const VideoModal = ({ project, onClose }) => {
//   return (
//     <ModalOverlay onClick={onClose}>
//       <ModalContent onClick={(e) => e.stopPropagation()}>
//         <CloseButton onClick={onClose}>×</CloseButton>
//         <Video controls autoPlay>
//           <source src={project.video} type="video/mp4" />
//           Your browser does not support the video tag.
//         </Video>
//       </ModalContent>
//     </ModalOverlay>
//   );
// };

// export default VideoModal;


import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  width: 80%;
  max-width: 800px;
  background: ${({ theme }) => theme.white};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    background: ${({ theme }) => theme.primary + '20'}; /* Fixed color code */
  }
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;

const VideoModal = ({ project, onClose }) => {
  if (!project || !project.video) {
    return null; // Handle the case where project or video is not provided
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Video controls autoPlay onError={(e) => {
          console.error('Error loading video:', e);
          e.target.style.display = 'none'; // Hide video element on error
        }}>
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
        <ErrorMessage id="video-error">Unable to load video.</ErrorMessage>
      </ModalContent>
    </ModalOverlay>
  );
};

export default VideoModal;
