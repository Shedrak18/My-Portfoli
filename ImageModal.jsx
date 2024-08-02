// // import React from "react";
// // import styled from "styled-components";

// // const ModalOverlay = styled.div`
// //   position: fixed;
// //   top: 0;
// //   left: 0;
// //   width: 100%;
// //   height: 100%;
// //   background: rgba(0, 0, 0, 0.6);
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// // `;

// // const ModalContent = styled.div`
// //   background: white;
// //   padding: 20px;
// //   border-radius: 8px;
// //   max-width: 800px;
// //   max-height: 80%;
// //   overflow-y: auto;
// //   position: relative;
// // `;

// // const CloseButton = styled.button`
// //   position: absolute;
// //   top: 10px;
// //   right: 10px;
// //   background: transparent;
// //   border: none;
// //   font-size: 24px;
// //   cursor: pointer;
// // `;

// // const Image = styled.img`
// //   width: 100%;
// //   height: auto;
// //   border-radius: 8px;
// // `;

// // const Details = styled.div`
// //   margin-top: 20px;
// // `;

// // const Title = styled.div`
// //   font-size: 24px;
// //   font-weight: 600;
// // `;

// // const Date = styled.div`
// //   font-size: 14px;
// //   margin-top: 10px;
// // `;

// // const Description = styled.div`
// //   font-size: 16px;
// //   margin-top: 10px;
// // `;

// // const ImageModal = ({ project, onClose }) => {
// //   return (
// //     <ModalOverlay onClick={onClose}>
// //       <ModalContent onClick={(e) => e.stopPropagation()}>
// //         <CloseButton onClick={onClose}>×</CloseButton>
// //         <Image src={project.image} alt={project.title} />
// //         <Details>
// //           <Title>{project.title}</Title>
// //           <Date>{project.date}</Date>
// //           <Description>{project.description}</Description>
// //         </Details>
// //       </ModalContent>
// //     </ModalOverlay>
// //   );
// // };

// // export default ImageModal;
// import React from 'react';
// import styled from 'styled-components';

// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.6);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ModalContent = styled.div`
//   background: white;
//   padding: 20px;
//   border-radius: 8px;
//   max-width: 800px;
//   max-height: 80%;
//   overflow: hidden;
//   position: relative;
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background: transparent;
//   border: none;
//   font-size: 24px;
//   cursor: pointer;
// `;

// const Image = styled.img`
//   width: 100%;
//   height: auto;
// `;

// const ImageModal = ({ project, onClose }) => {
//   return (
//     <ModalOverlay onClick={onClose}>
//       <ModalContent onClick={(e) => e.stopPropagation()}>
//         <CloseButton onClick={onClose}>×</CloseButton>
//         <Image src={project.image} alt={project.title} />
//       </ModalContent>
//     </ModalOverlay>
//   );
// };

// export default ImageModal;
// import React from 'react';
// import styled from 'styled-components';

// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.6);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ModalContent = styled.div`
//   background: white;
//   padding: 20px;
//   border-radius: 8px;
//   max-width: 800px;
//   max-height: 80%;
//   overflow: hidden;
//   position: relative;
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background: transparent;
//   border: none;
//   font-size: 24px;
//   cursor: pointer;
// `;

// const Image = styled.img`
//   width: 100%;
//   height: auto;
// `;

// const ImageModal = ({ project, onClose }) => {
//   return (
//     <ModalOverlay onClick={onClose}>
//       <ModalContent onClick={(e) => e.stopPropagation()}>
//         <CloseButton onClick={onClose}>×</CloseButton>
//         <Image src={project.image} alt={project.title} />
//       </ModalContent>
//     </ModalOverlay>
//   );
// };

// export default ImageModal;
import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 80%;
  max-height: 80%;
  overflow: hidden;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: contain;
`;

const ImageModal = ({ project, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Image src={project.image} alt={project.title} />
      </ModalContent>
    </ModalOverlay>
  );
};

export default ImageModal;
