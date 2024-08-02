// // // import React, { useState } from "react";
// // // import styled from "styled-components";
// // // import { projects } from "../../data/constants";
// // // import ProjectCard from "../cards/ProjectCard";

// // // const Container = styled.div`
// // // margin-top: 100px;
// // // display: flex;
// // // flex-direction: column;
// // // justify-content-center;
// // // position: relative;
// // // z-index: 1;
// // // padding: 0 16px;
// // // align-items: center;
// // // `;
// // // const Wrapper = styled.div`
// // //   position: relative;
// // //   display: flex;
// // //   justify-content: space-between;
// // //   align-items: center;
// // //   flex-direction: column;
// // //   width: 100%;
// // //   max-width: 1100px;
// // //   gap: 12px;
// // //   @media (max-width: 960px) {
// // //     flex-direction: column;
// // //   }
// // // `;

// // // const Title = styled.div`
// // //   font-size: 52px;
// // //   text-align: center;
// // //   font-weight: 600;
// // //   margin-top: 20px;
// // //   color: ${({ theme }) => theme.text_primary};
// // //   @media (max-width: 768px) {
// // //     margin-top: 12px;
// // //     font-size: 32px;
// // //   }
// // // `;

// // // const Desc = styled.div`
// // //   font-size: 18px;
// // //   text-align: center;
// // //   font-weight: 600;
// // //   color: ${({ theme }) => theme.text_secondary};
// // //   @media (max-width: 768px) {
// // //     font-size: 16px;
// // //   }
// // // `;

// // // const ToggleButtonGroup = styled.div`
// // // display: flex;
// // // border: 1.5px solid ${({ theme }) => theme.primary};
// // // color: ${({ theme }) => theme.primary};
// // // font-size: 16px;
// // // border-radius: 12px;
// // // font-weight 500;
// // // margin: 22px 0;
// // // @media (max-width: 768px){
// // //     font-size: 12px;
// // // }
// // // `;

// // // const ToggleButton = styled.div`
// // //   padding: 8px 18px;
// // //   border-radius: 6px;
// // //   cursor: pointer;
// // //   &:hover {
// // //     background: ${({ theme }) => theme.primary + 20};
// // //   }
// // //   @media (max-width: 768px) {
// // //     padding: 6px 8px;
// // //     border-radius: 4px;
// // //   }
// // //   ${({ active, theme }) =>
// // //     active &&
// // //     `
// // //   background:  ${theme.primary + 20};
// // //   `}
// // // `;

// // // const Divider = styled.div`
// // //   width: 1.5px;
// // //   background: ${({ theme }) => theme.primary};
// // // `;

// // // const CardContainer = styled.div`
// // //   display: flex;
// // //   justify-content: center;
// // //   align-items: center;
// // //   gap: 28px;
// // //   flex-wrap: wrap;
// // // `;

// // // const Projects = ({ openModal, setOpenModal }) => {
// // //   const [toggle, setToggle] = useState("all");
// // //   return (
// // //     <Container id="Projects">
// // //       <Wrapper>
// // //         <Title>Projects</Title>
// // //         <Desc
// // //           style={{
// // //             marginBottom: "40px",
// // //           }}
// // //         >
// // //           I have worked on a wide range of projects. From Various Design's to Video's
// // //         . Here are some of my projects.
// // //         </Desc>
// // //         <ToggleButtonGroup>
// // //           <ToggleButton
// // //             active={toggle === "all"}
// // //             onClick={() => setToggle("all")}
// // //           >
// // //             ALL
// // //           </ToggleButton>
// // //           <Divider />
// // //           <ToggleButton
// // //             active={toggle === "web app"}
// // //             onClick={() => setToggle("web app")}
// // //           >
// // //            DESIGNS
// // //           </ToggleButton>
// // //           <Divider />
// // //           <ToggleButton
// // //             active={toggle === "android app"}
// // //             onClick={() => setToggle("android app")}
// // //           >
// // //             VIDEOS
// // //           </ToggleButton>
// // //           <Divider />
// // //           <ToggleButton
// // //             active={toggle === "machine learning"}
// // //             onClick={() => setToggle("machine learning")}
// // //           >
// // //             SEO
// // //           </ToggleButton>
// // //         </ToggleButtonGroup>
// // //         <CardContainer>
// // //           {toggle === "all" &&
// // //             projects.map((project) => (
// // //               <ProjectCard
// // //                 project={project}
// // //                 openModal={openModal}
// // //                 setOpenModal={setOpenModal}
// // //               />
// // //             ))}
// // //           {projects
// // //             .filter((item) => item.category === toggle)
// // //             .map((project) => (
// // //               <ProjectCard
// // //                 project={project}
// // //                 openModal={openModal}
// // //                 setOpenModal={setOpenModal}
// // //               />
// // //             ))}
// // //         </CardContainer>
// // //       </Wrapper>
// // //     </Container>
// // //   );
// // // };

// // // export default Projects;


// // // // import React, { useState } from "react";
// // // // import styled from "styled-components";
// // // // import { projects } from "../../data/constants";
// // // // import ProjectCard from "../cards/ProjectCard";

// // // // const Container = styled.div`
// // // //   margin-top: 100px;
// // // //   display: flex;
// // // //   flex-direction: column;
// // // //   justify-content: center;
// // // //   position: relative;
// // // //   z-index: 1;
// // // //   padding: 0 16px;
// // // //   align-items: center;
// // // // `;

// // // // const Wrapper = styled.div`
// // // //   position: relative;
// // // //   display: flex;
// // // //   justify-content: space-between;
// // // //   align-items: center;
// // // //   flex-direction: column;
// // // //   width: 100%;
// // // //   max-width: 1100px;
// // // //   gap: 12px;
// // // //   @media (max-width: 960px) {
// // // //     flex-direction: column;
// // // //   }
// // // // `;

// // // // const Title = styled.div`
// // // //   font-size: 52px;
// // // //   text-align: center;
// // // //   font-weight: 600;
// // // //   margin-top: 20px;
// // // //   color: ${({ theme }) => theme.text_primary};
// // // //   @media (max-width: 768px) {
// // // //     margin-top: 12px;
// // // //     font-size: 32px;
// // // //   }
// // // // `;

// // // // const Desc = styled.div`
// // // //   font-size: 18px;
// // // //   text-align: center;
// // // //   font-weight: 600;
// // // //   color: ${({ theme }) => theme.text_secondary};
// // // //   @media (max-width: 768px) {
// // // //     font-size: 16px;
// // // //   }
// // // // `;

// // // // const ToggleButtonGroup = styled.div`
// // // //   display: flex;
// // // //   border: 1.5px solid ${({ theme }) => theme.primary};
// // // //   color: ${({ theme }) => theme.primary};
// // // //   font-size: 16px;
// // // //   border-radius: 12px;
// // // //   font-weight: 500;
// // // //   margin: 22px 0;
// // // //   @media (max-width: 768px) {
// // // //     font-size: 12px;
// // // //   }
// // // // `;

// // // // const ToggleButton = styled.div`
// // // //   padding: 8px 18px;
// // // //   border-radius: 6px;
// // // //   cursor: pointer;
// // // //   &:hover {
// // // //     background: ${({ theme }) => theme.primary + 20};
// // // //   }
// // // //   @media (max-width: 768px) {
// // // //     padding: 6px 8px;
// // // //     border-radius: 4px;
// // // //   }
// // // //   ${({ active, theme }) =>
// // // //     active &&
// // // //     `
// // // //   background:  ${theme.primary + 20};
// // // //   `}
// // // // `;

// // // // const Divider = styled.div`
// // // //   width: 1.5px;
// // // //   background: ${({ theme }) => theme.primary};
// // // // `;

// // // // const CardContainer = styled.div`
// // // //   display: flex;
// // // //   justify-content: center;
// // // //   align-items: center;
// // // //   gap: 28px;
// // // //   flex-wrap: wrap;
// // // // `;

// // // // const Projects = ({ openModal, setOpenModal }) => {
// // // //   const [toggle, setToggle] = useState("all");

// // // //   return (
// // // //     <Container id="Projects">
// // // //       <Wrapper>
// // // //         <Title>Projects</Title>
// // // //         <Desc style={{ marginBottom: "40px" }}>
// // // //           I have worked on a wide range of projects, from various designs to videos.
// // // //           Here are some of my projects.
// // // //         </Desc>
// // // //         <ToggleButtonGroup>
// // // //           <ToggleButton active={toggle === "all"} onClick={() => setToggle("all")}>
// // // //             ALL
// // // //           </ToggleButton>
// // // //           <Divider />
// // // //           <ToggleButton active={toggle === "web app"} onClick={() => setToggle("web app")}>
// // // //             DESIGNS
// // // //           </ToggleButton>
// // // //           <Divider />
// // // //           <ToggleButton active={toggle === "android app"} onClick={() => setToggle("android app")}>
// // // //             VIDEOS
// // // //           </ToggleButton>
// // // //           <Divider />
// // // //           <ToggleButton active={toggle === "machine learning"} onClick={() => setToggle("machine learning")}>
// // // //             SEO
// // // //           </ToggleButton>
// // // //         </ToggleButtonGroup>
// // // //         <CardContainer>
// // // //           {projects
// // // //             .filter((project) => toggle === "all" || project.category === toggle)
// // // //             .map((project) => (
// // // //               <ProjectCard
// // // //                 key={project.id}
// // // //                 project={project}
// // // //                 openModal={openModal}
// // // //                 setOpenModal={setOpenModal}
// // // //               />
// // // //             ))}
// // // //         </CardContainer>
// // // //       </Wrapper>
// // // //     </Container>
// // // //   );
// // // // };

// // // // export default Projects;
// // // import React, { useState } from "react";
// // // import styled from "styled-components";
// // // import { projects } from "../../data/constants";
// // // import ProjectCard from "../cards/ProjectCard";
// // // import VideoModal from "../sections/VideoModal"; // Adjust the import path as needed

// // // const Container = styled.div`
// // //   margin-top: 100px;
// // //   display: flex;
// // //   flex-direction: column;
// // //   justify-content: center;
// // //   position: relative;
// // //   // z-index: 1;
// // //   padding: 0 16px;
// // //   align-items: center;
// // // `;

// // // const Wrapper = styled.div`
// // //   position: relative;
// // //   display: flex;
// // //   justify-content: space-between;
// // //   align-items: center;
// // //   flex-direction: column;
// // //   width: 100%;
// // //   max-width: 1100px;
// // //   gap: 12px;
// // //   @media (max-width: 960px) {
// // //     flex-direction: column;
// // //   }
// // // `;

// // // const Title = styled.div`
// // //   font-size: 52px;
// // //   text-align: center;
// // //   font-weight: 600;
// // //   margin-top: 20px;
// // //   color: ${({ theme }) => theme.text_primary};
// // //   @media (max-width: 768px) {
// // //     margin-top: 12px;
// // //     font-size: 32px;
// // //   }
// // // `;

// // // const Desc = styled.div`
// // //   font-size: 18px;
// // //   text-align: center;
// // //   font-weight: 600;
// // //   color: ${({ theme }) => theme.text_secondary};
// // //   @media (max-width: 768px) {
// // //     font-size: 16px;
// // //   }
// // // `;

// // // const ToggleButtonGroup = styled.div`
// // //   display: flex;
// // //   border: 1.5px solid ${({ theme }) => theme.primary};
// // //   color: ${({ theme }) => theme.primary};
// // //   font-size: 16px;
// // //   border-radius: 12px;
// // //   font-weight: 500;
// // //   margin: 22px 0;
// // //   @media (max-width: 768px) {
// // //     font-size: 12px;
// // //   }
// // // `;

// // // const ToggleButton = styled.div`
// // //   padding: 8px 18px;
// // //   border-radius: 6px;
// // //   cursor: pointer;
// // //   &:hover {
// // //     background: ${({ theme }) => theme.primary + 20};
// // //   }
// // //   @media (max-width: 768px) {
// // //     padding: 6px 8px;
// // //     border-radius: 4px;
// // //   }
// // //   ${({ active, theme }) =>
// // //     active &&
// // //     `
// // //   background:  ${theme.primary + 20};
// // //   `}
// // // `;

// // // const Divider = styled.div`
// // //   width: 1.5px;
// // //   background: ${({ theme }) => theme.primary};
// // // `;

// // // const CardContainer = styled.div`
// // //   display: flex;
// // //   justify-content: center;
// // //   align-items: center;
// // //   gap: 28px;
// // //   flex-wrap: wrap;
// // // `;

// // // const Projects = () => {
// // //   const [toggle, setToggle] = useState("all");
// // //   const [modalProject, setModalProject] = useState(null);

// // //   const handleOpenModal = (project) => {
// // //     if (project.video) {
// // //       setModalProject(project);
// // //     }
// // //   };

// // //   const handleCloseModal = () => {
// // //     setModalProject(null);
// // //   };

// // //   return (
// // //     <Container id="Projects">
// // //       <Wrapper>
// // //         <Title>Projects</Title>
// // //         <Desc style={{ marginBottom: "40px" }}>
// // //           I have worked on a wide range of projects, from various designs to videos.
// // //           Here are some of my projects.
// // //         </Desc>
// // //         <ToggleButtonGroup>
// // //           <ToggleButton active={toggle === "all"} onClick={() => setToggle("all")}>
// // //             ALL
// // //           </ToggleButton>
// // //           <Divider />
// // //           <ToggleButton active={toggle === "web app"} onClick={() => setToggle("web app")}>
// // //             DESIGNS
// // //           </ToggleButton>
// // //           <Divider />
// // //           <ToggleButton active={toggle === "android app"} onClick={() => setToggle("android app")}>
// // //             VIDEOS
// // //           </ToggleButton>
// // //           <Divider />
// // //           <ToggleButton active={toggle === "machine learning"} onClick={() => setToggle("machine learning")}>
// // //             SEO
// // //           </ToggleButton>
// // //         </ToggleButtonGroup>
// // //         <CardContainer>
// // //           {projects
// // //             .filter((project) => toggle === "all" || project.category === toggle)
// // //             .map((project) => (
// // //               <ProjectCard
// // //                 key={project.id}
// // //                 project={project}
// // //                 openModal={handleOpenModal}
// // //               />
// // //             ))}
// // //         </CardContainer>
// // //         {modalProject && (
// // //           <VideoModal
// // //             project={modalProject}
// // //             onClose={handleCloseModal}
// // //           />
// // //         )}
// // //       </Wrapper>
// // //     </Container>
// // //   );
// // // };

// // // export default Projects;




// import React, { useState } from "react";
// import styled from "styled-components";
// import { projects } from "../../data/constants";
// import ProjectCard from "../cards/ProjectCard";
// import VideoModal from "../sections/VideoModal"; // Adjust the import path as needed

// const Container = styled.div`
//   margin-top: 100px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   position: relative;
//   z-index: 1;
//   padding: 0 16px;
//   align-items: center;
// `;

// const Wrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   max-width: 1100px;
//   gap: 12px;
//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;

// const Title = styled.div`
//   font-size: 52px;
//   text-align: center;
//   font-weight: 600;
//   margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 32px;
//   }
// `;

// const Desc = styled.div`
//   font-size: 18px;
//   text-align: center;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const ToggleButtonGroup = styled.div`
//   display: flex;
//   border: 1.5px solid ${({ theme }) => theme.primary};
//   color: ${({ theme }) => theme.primary};
//   font-size: 16px;
//   border-radius: 12px;
//   font-weight: 500;
//   margin: 22px 0;
//   @media (max-width: 768px) {
//     font-size: 12px;
//   }
// `;

// const ToggleButton = styled.div`
//   padding: 8px 18px;
//   border-radius: 6px;
//   cursor: pointer;
//   &:hover {
//     background: ${({ theme }) => theme.primary + 20};
//   }
//   @media (max-width: 768px) {
//     padding: 6px 8px;
//     border-radius: 4px;
//   }
//   ${({ active, theme }) =>
//     active &&
//     `
//   background:  ${theme.primary + 20};
//   `}
// `;

// const Divider = styled.div`
//   width: 1.5px;
//   background: ${({ theme }) => theme.primary};
// `;

// const CardContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 28px;
//   flex-wrap: wrap;
// `;

// const Projects = () => {
//   const [toggle, setToggle] = useState("all");
//   const [modalProject, setModalProject] = useState(null);

//   const openModal = (project) => {
//     setModalProject(project);
//   };

//   const closeModal = () => {
//     setModalProject(null);
//   };

//   return (
//     <Container id="Projects">
//       <Wrapper>
//         <Title>Projects</Title>
//         <Desc style={{ marginBottom: "40px" }}>
//           I have worked on a wide range of projects, from various designs to videos.
//           Here are some of my projects.
//         </Desc>
//         <ToggleButtonGroup>
//           <ToggleButton active={toggle === "all"} onClick={() => setToggle("all")}>
//             ALL
//           </ToggleButton>
//           <Divider />
//           <ToggleButton active={toggle === "web app"} onClick={() => setToggle("web app")}>
//             DESIGNS
//           </ToggleButton>
//           <Divider />
//           <ToggleButton active={toggle === "android app"} onClick={() => setToggle("android app")}>
//             VIDEOS
//           </ToggleButton>
//           <Divider />
//           <ToggleButton active={toggle === "machine learning"} onClick={() => setToggle("machine learning")}>
//             SEO
//           </ToggleButton>
//         </ToggleButtonGroup>
//         <CardContainer>
//           {projects
//             .filter((project) => toggle === "all" || project.category === toggle)
//             .map((project) => (
//               <ProjectCard
//                 key={project.id}
//                 project={project}
//                 openModal={openModal}
//               />
//             ))}
//         </CardContainer>
//         {modalProject && (
//           <VideoModal
//             project={modalProject}
//             onClose={closeModal}
//           />
//         )}
//       </Wrapper>
//     </Container>
//   );
// };

// export default Projects;


// import React, { useState } from "react";
// import styled from "styled-components";
// import { projects } from "../../data/constants";
// import ProjectCard from "../cards/ProjectCard";
// import VideoModal from "../sections/VideoModal";
// import ImageModal from "../sections/ImageModal"; // Adjust the import path as needed

// const Container = styled.div`
//   margin-top: 100px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   position: relative;
//   z-index: 1;
//   padding: 0 16px;
//   align-items: center;
// `;

// const Wrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   max-width: 1100px;
//   gap: 12px;
//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;

// const Title = styled.div`
//   font-size: 52px;
//   text-align: center;
//   font-weight: 600;
//   margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 32px;
//   }
// `;

// const Desc = styled.div`
//   font-size: 18px;
//   text-align: center;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const ToggleButtonGroup = styled.div`
//   display: flex;
//   border: 1.5px solid ${({ theme }) => theme.primary};
//   color: ${({ theme }) => theme.primary};
//   font-size: 16px;
//   border-radius: 12px;
//   font-weight: 500;
//   margin: 22px 0;
//   @media (max-width: 768px) {
//     font-size: 12px;
//   }
// `;

// const ToggleButton = styled.div`
//   padding: 8px 18px;
//   border-radius: 6px;
//   cursor: pointer;
//   &:hover {
//     background: ${({ theme }) => theme.primary + 20};
//   }
//   @media (max-width: 768px) {
//     padding: 6px 8px;
//     border-radius: 4px;
//   }
//   ${({ active, theme }) =>
//     active &&
//     `
//   background:  ${theme.primary + 20};
//   `}
// `;

// const Divider = styled.div`
//   width: 1.5px;
//   background: ${({ theme }) => theme.primary};
// `;

// const CardContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 28px;
//   flex-wrap: wrap;
// `;

// const Projects = () => {
//   const [toggle, setToggle] = useState("all");
//   const [modalProject, setModalProject] = useState(null);
//   const [isVideoModal, setIsVideoModal] = useState(false);

//   const openModal = (project, isVideo) => {
//     setModalProject(project);
//     setIsVideoModal(isVideo);
//   };

//   const closeModal = () => {
//     setModalProject(null);
//     setIsVideoModal(false);
//   };

//   return (
//     <Container id="Projects">
//       <Wrapper>
//         <Title>Projects</Title>
//         <Desc style={{ marginBottom: "40px" }}>
//           I have worked on a wide range of projects, from various designs to videos.
//           Here are some of my projects.
//         </Desc>
//         <ToggleButtonGroup>
//           <ToggleButton active={toggle === "all"} onClick={() => setToggle("all")}>
//             ALL
//           </ToggleButton>
//           <Divider />
//           <ToggleButton active={toggle === "web app"} onClick={() => setToggle("web app")}>
//             DESIGNS
//           </ToggleButton>
//           <Divider />
//           <ToggleButton active={toggle === "android app"} onClick={() => setToggle("android app")}>
//             VIDEOS
//           </ToggleButton>
//           <Divider />
//           <ToggleButton active={toggle === "machine learning"} onClick={() => setToggle("machine learning")}>
//             SEO
//           </ToggleButton>
//         </ToggleButtonGroup>
//         <CardContainer>
//           {projects
//             .filter((project) => toggle === "all" || project.category === toggle)
//             .map((project) => (
//               <ProjectCard
//                 key={project.id}
//                 project={project}
//                 openModal={(isVideo) => openModal(project, isVideo)}
//               />
//             ))}
//         </CardContainer>
//         {modalProject && (
//           isVideoModal
//             ? <VideoModal project={modalProject} onClose={closeModal} />
//             : <ImageModal project={modalProject} onClose={closeModal} />
//         )}
//       </Wrapper>
//     </Container>
//   );
// };

// export default Projects;
import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";
import VideoModal from "../sections/VideoModal";
import ImageModal from "../sections/ImageModal";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 0 16px;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${({ active, theme }) =>
    active &&
    `
  background:  ${theme.primary + 20};
  `}
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  const [modalProject, setModalProject] = useState(null);
  const [isVideoModal, setIsVideoModal] = useState(false);

  const openModal = (project, isVideo) => {
    setModalProject(project);
    setIsVideoModal(isVideo);
  };

  const closeModal = () => {
    setModalProject(null);
    setIsVideoModal(false);
  };

  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc style={{ marginBottom: "40px" }}>
          I have worked on a wide range of projects, from various designs to videos.
          Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton active={toggle === "all"} onClick={() => setToggle("all")}>
            ALL
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === "web app"} onClick={() => setToggle("web app")}>
            DESIGNS
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === "android app"} onClick={() => setToggle("android app")}>
            VIDEOS
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === "machine learning"} onClick={() => setToggle("machine learning")}>
            SEO
          </ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {projects
            .filter((project) => toggle === "all" || project.category === toggle)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={(isVideo) => openModal(project, isVideo)}
              />
            ))}
        </CardContainer>
        {modalProject && isVideoModal && (
          <VideoModal
            project={modalProject}
            onClose={closeModal}
          />
        )}
        {modalProject && !isVideoModal && (
          <ImageModal
            project={modalProject}
            onClose={closeModal}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default Projects;
