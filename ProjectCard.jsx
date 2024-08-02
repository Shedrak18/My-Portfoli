// // // import React from "react";
// // // import styled from "styled-components";

// // // const Card = styled.div`
// // //   width: 330px;
// // //   height: 490px;
// // //   background-color: ${({ theme }) => theme.card};
// // //   cursor: pointer;
// // //   border-radius: 10px;
// // //   box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
// // //   overflow: hidden;
// // //   padding: 26px 20px;
// // //   display: flex;
// // //   flex-direction: column;
// // //   gap: 14px;
// // //   transition: all 0.5s ease-in-out;
// // //   &:hover {
// // //     transform: translateY(-10px);
// // //     box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
// // //     filter: brightness(1.1);
// // //   }
// // // `;
// // // const Image = styled.img`
// // //   width: 100%;
// // //   height: 180px;
// // //   background-color: ${({ theme }) => theme.white};
// // //   border-radius: 10px;
// // //   box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
// // // `;
// // // const Tags = styled.div`
// // //   width: 100%;
// // //   display: flex;
// // //   align-items: center;
// // //   flex-wrap: wrap;
// // //   gap: 8px;
// // //   margin-top: 4px;
// // // `;
// // // const Tag = styled.div`
// // //   font-size: 12px;
// // //   font-weight: 400;
// // //   color: ${({ theme }) => theme.primary};
// // //   background-color: ${({ theme }) => theme.primary + 15};
// // //   padding: 2px 8px;
// // //   border-radius: 10px;
// // // `;
// // // const Details = styled.div`
// // //   width: 100%;
// // //   display: flex;
// // //   flex-direction: column;
// // //   gap: 0px;
// // //   padding: 0px 2px;
// // // `;
// // // const Title = styled.div`
// // //   font-size: 20px;
// // //   font-weight: 600;
// // //   color: ${({ theme }) => theme.text_secondary};
// // //   overflow: hidden;
// // //   display: -webkit-box;
// // //   max-width: 100%;
// // //   -webkit-line-clamp: 2;
// // //   -webkit-box-orient: vertical;
// // //   overflow: hidden;
// // //   text-overflow: ellipsis;
// // // `;
// // // const Date = styled.div`
// // //   font-size: 12px;
// // //   margin-left: 2px;
// // //   font-weight: 400;
// // //   color: ${({ theme }) => theme.text_secondary + 80};
// // //   @media only screen and (max-width: 768px) {
// // //     font-size: 10px;
// // //   }
// // // `;
// // // const Description = styled.div`
// // //   font-weight: 400;
// // //   color: ${({ theme }) => theme.text_secondary + 99};
// // //   overflow: hidden;
// // //   margin-top: 8px;
// // //   display: -webkit-box;
// // //   max-width: 100%;
// // //   -webkit-line-clamp: 3;
// // //   -webkit-box-orient: vertical;
// // //   text-overflow: ellipsis;
// // // `;
// // // const Members = styled.div`
// // //   display: flex;
// // //   align-items: center;
// // //   padding-left: 10px;
// // // `;
// // // const Avatar = styled.img`
// // //   width: 38px;
// // //   height: 38px;
// // //   border-radius: 50%;
// // //   margin-left: -10px;
// // //   background-color: ${({ theme }) => theme.white};
// // //   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
// // //   border: 3px solid ${({ theme }) => theme.card};
// // // `;
// // // const Button = styled.a`
// // //   color: ${({ theme }) => theme.primary};
// // //   text-decoration: none;
// // //   font-weight: 600;
// // //   text-align: center;
// // // `;

// // // const ProjectCard = ({ project, setOpenModal }) => {
// // //   return (
// // //     <Card onClick={() => setOpenModal({ state: true, project: project })}>
// // //       <Image src={project.image} />
// // //       <Tags>
// // //         {project.tags?.map((tag, index) => (
// // //           <Tag>{tag}</Tag>
// // //         ))}
// // //       </Tags>
// // //       <Details>
// // //         <Title>{project.title}</Title>
// // //         <Date>{project.date}</Date>
// // //         <Description>{project.description}</Description>
// // //       </Details>
// // //       <Members>
// // //         {project.member?.map((member) => (
// // //           <Avatar src={member.img} />
// // //         ))}
// // //       </Members>
// // //     </Card>
// // //   );
// // // };

// // // export default ProjectCard;




// // // // // import React from "react";
// // // // // import styled from "styled-components";

// // // // // const Card = styled.div`
// // // // //   width: 330px;
// // // // //   height: 490px;
// // // // //   background-color: ${({ theme }) => theme.card};
// // // // //   cursor: pointer;
// // // // //   border-radius: 10px;
// // // // //   box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
// // // // //   overflow: hidden;
// // // // //   padding: 26px 20px;
// // // // //   display: flex;
// // // // //   flex-direction: column;
// // // // //   gap: 14px;
// // // // //   transition: all 0.5s ease-in-out;
// // // // //   &:hover {
// // // // //     transform: translateY(-10px);
// // // // //     box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
// // // // //     filter: brightness(1.1);
// // // // //   }
// // // // // `;

// // // // // const Media = styled.div`
// // // // //   width: 100%;
// // // // //   height: 180px;
// // // // //   background-color: ${({ theme }) => theme.white};
// // // // //   border-radius: 10px;
// // // // //   box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
// // // // //   overflow: hidden;
// // // // //   display: flex;
// // // // //   justify-content: center;
// // // // //   align-items: center;
// // // // // `;

// // // // // const Image = styled.img`
// // // // //   width: 100%;
// // // // //   height: 100%;
// // // // //   object-fit: cover;
// // // // // `;

// // // // // const Video = styled.video`
// // // // //   width: 100%;
// // // // //   height: 100%;
// // // // //   object-fit: cover;
// // // // //   autoplay
// // // // // `;

// // // // // const Tags = styled.div`
// // // // //   width: 100%;
// // // // //   display: flex;
// // // // //   align-items: center;
// // // // //   flex-wrap: wrap;
// // // // //   gap: 8px;
// // // // //   margin-top: 4px;
// // // // // `;

// // // // // const Tag = styled.div`
// // // // //   font-size: 12px;
// // // // //   font-weight: 400;
// // // // //   color: ${({ theme }) => theme.primary};
// // // // //   background-color: ${({ theme }) => theme.primary + 15};
// // // // //   padding: 2px 8px;
// // // // //   border-radius: 10px;
// // // // // `;

// // // // // const Details = styled.div`
// // // // //   width: 100%;
// // // // //   display: flex;
// // // // //   flex-direction: column;
// // // // //   gap: 0px;
// // // // //   padding: 0px 2px;
// // // // // `;

// // // // // const Title = styled.div`
// // // // //   font-size: 20px;
// // // // //   font-weight: 600;
// // // // //   color: ${({ theme }) => theme.text_secondary};
// // // // //   overflow: hidden;
// // // // //   display: -webkit-box;
// // // // //   max-width: 100%;
// // // // //   -webkit-line-clamp: 2;
// // // // //   -webkit-box-orient: vertical;
// // // // //   overflow: hidden;
// // // // //   text-overflow: ellipsis;
// // // // // `;

// // // // // const Date = styled.div`
// // // // //   font-size: 12px;
// // // // //   margin-left: 2px;
// // // // //   font-weight: 400;
// // // // //   color: ${({ theme }) => theme.text_secondary + 80};
// // // // //   @media only screen and (max-width: 768px) {
// // // // //     font-size: 10px;
// // // // //   }
// // // // // `;

// // // // // const Description = styled.div`
// // // // //   font-weight: 400;
// // // // //   color: ${({ theme }) => theme.text_secondary + 99};
// // // // //   overflow: hidden;
// // // // //   margin-top: 8px;
// // // // //   display: -webkit-box;
// // // // //   max-width: 100%;
// // // // //   -webkit-line-clamp: 3;
// // // // //   -webkit-box-orient: vertical;
// // // // //   text-overflow: ellipsis;
// // // // // `;

// // // // // const Members = styled.div`
// // // // //   display: flex;
// // // // //   align-items: center;
// // // // //   padding-left: 10px;
// // // // // `;

// // // // // const Avatar = styled.img`
// // // // //   width: 38px;
// // // // //   height: 38px;
// // // // //   border-radius: 50%;
// // // // //   margin-left: -10px;
// // // // //   background-color: ${({ theme }) => theme.white};
// // // // //   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
// // // // //   border: 3px solid ${({ theme }) => theme.card};
// // // // // `;

// // // // // const Button = styled.a`
// // // // //   color: ${({ theme }) => theme.primary};
// // // // //   text-decoration: none;
// // // // //   font-weight: 600;
// // // // //   text-align: center;
// // // // // `;

// // // // // const ProjectCard = ({ project, setOpenModal }) => {
// // // // //   return (
// // // // //     <Card onClick={() => setOpenModal({ state: true, project: project })}>
// // // // //       <Media>
// // // // //         {project.video ? (
// // // // //           <Video controls>
// // // // //             <source src={project.video} type="video/mp4" />
// // // // //             Your browser does not support the video tag.
// // // // //           </Video>
// // // // //         ) : (
// // // // //           <Image src={project.image} alt={project.title} />
// // // // //         )}
// // // // //       </Media>
// // // // //       <Tags>
// // // // //         {project.tags?.map((tag, index) => (
// // // // //           <Tag key={index}>{tag}</Tag>
// // // // //         ))}
// // // // //       </Tags>
// // // // //       <Details>
// // // // //         <Title>{project.title}</Title>
// // // // //         <Date>{project.date}</Date>
// // // // //         <Description>{project.description}</Description>
// // // // //       </Details>
// // // // //       <Members>
// // // // //         {project.member?.map((member, index) => (
// // // // //           <Avatar key={index} src={member.img} alt={`Member ${index}`} />
// // // // //         ))}
// // // // //       </Members>
// // // // //     </Card>
// // // // //   );
// // // // // };

// // // // // export default ProjectCard;



// // // // import React from "react";
// // // // import styled from "styled-components";

// // // // const Card = styled.div`
// // // //   width: 330px;
// // // //   height: 490px;
// // // //   background-color: ${({ theme }) => theme.card};
// // // //   cursor: pointer;
// // // //   border-radius: 10px;
// // // //   box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
// // // //   overflow: hidden;
// // // //   padding: 26px 20px;
// // // //   display: flex;
// // // //   flex-direction: column;
// // // //   gap: 14px;
// // // //   transition: all 0.5s ease-in-out;
// // // //   &:hover {
// // // //     transform: translateY(-10px);
// // // //     box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
// // // //     filter: brightness(1.1);
// // // //   }
// // // // `;

// // // // const Media = styled.div`
// // // //   width: 100%;
// // // //   height: 180px;
// // // //   background-color: ${({ theme }) => theme.white};
// // // //   border-radius: 10px;
// // // //   box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
// // // //   overflow: hidden;
// // // //   display: flex;
// // // //   justify-content: center;
// // // //   align-items: center;
// // // //   cursor: pointer;
// // // // `;

// // // // const Image = styled.img`
// // // //   width: 100%;
// // // //   height: 100%;
// // // //   object-fit: cover;
// // // // `;

// // // // const Video = styled.video`
// // // //   width: 100%;
// // // //   height: 100%;
// // // //   object-fit: cover;
// // // // `;

// // // // const Tags = styled.div`
// // // //   width: 100%;
// // // //   display: flex;
// // // //   align-items: center;
// // // //   flex-wrap: wrap;
// // // //   gap: 8px;
// // // //   margin-top: 4px;
// // // // `;

// // // // const Tag = styled.div`
// // // //   font-size: 12px;
// // // //   font-weight: 400;
// // // //   color: ${({ theme }) => theme.primary};
// // // //   background-color: ${({ theme }) => theme.primary + 15};
// // // //   padding: 2px 8px;
// // // //   border-radius: 10px;
// // // // `;

// // // // const Details = styled.div`
// // // //   width: 100%;
// // // //   display: flex;
// // // //   flex-direction: column;
// // // //   gap: 0px;
// // // //   padding: 0px 2px;
// // // // `;

// // // // const Title = styled.div`
// // // //   font-size: 20px;
// // // //   font-weight: 600;
// // // //   color: ${({ theme }) => theme.text_secondary};
// // // //   overflow: hidden;
// // // //   display: -webkit-box;
// // // //   max-width: 100%;
// // // //   -webkit-line-clamp: 2;
// // // //   -webkit-box-orient: vertical;
// // // //   overflow: hidden;
// // // //   text-overflow: ellipsis;
// // // // `;

// // // // const Date = styled.div`
// // // //   font-size: 12px;
// // // //   margin-left: 2px;
// // // //   font-weight: 400;
// // // //   color: ${({ theme }) => theme.text_secondary + 80};
// // // //   @media only screen and (max-width: 768px) {
// // // //     font-size: 10px;
// // // //   }
// // // // `;

// // // // const Description = styled.div`
// // // //   font-weight: 400;
// // // //   color: ${({ theme }) => theme.text_secondary + 99};
// // // //   overflow: hidden;
// // // //   margin-top: 8px;
// // // //   display: -webkit-box;
// // // //   max-width: 100%;
// // // //   -webkit-line-clamp: 3;
// // // //   -webkit-box-orient: vertical;
// // // //   text-overflow: ellipsis;
// // // // `;

// // // // const Members = styled.div`
// // // //   display: flex;
// // // //   align-items: center;
// // // //   padding-left: 10px;
// // // // `;

// // // // const Avatar = styled.img`
// // // //   width: 38px;
// // // //   height: 38px;
// // // //   border-radius: 50%;
// // // //   margin-left: -10px;
// // // //   background-color: ${({ theme }) => theme.white};
// // // //   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
// // // //   border: 3px solid ${({ theme }) => theme.card};
// // // // `;

// // // // const Button = styled.a`
// // // //   color: ${({ theme }) => theme.primary};
// // // //   text-decoration: none;
// // // //   font-weight: 600;
// // // //   text-align: center;
// // // // `;

// // // // const ProjectCard = ({ project, setOpenModal }) => {
// // // //   const handleClick = () => {
// // // //     if (project.video) {
// // // //       setOpenModal({ state: true, project: project });
// // // //     }
// // // //   };

// // // //   return (
// // // //     <Card>
// // // //       <Media onClick={handleClick}>
// // // //         {project.video ? (
// // // //           <Video autoPlay muted>
// // // //             <source src={project.video} type="video/mp4" />
// // // //             Your browser does not support the video tag.
// // // //           </Video>
// // // //         ) : (
// // // //           <Image src={project.image} alt={project.title} />
// // // //         )}
// // // //       </Media>
// // // //       <Tags>
// // // //         {project.tags?.map((tag, index) => (
// // // //           <Tag key={index}>{tag}</Tag>
// // // //         ))}
// // // //       </Tags>
// // // //       <Details>
// // // //         <Title>{project.title}</Title>
// // // //         <Date>{project.date}</Date>
// // // //         <Description>{project.description}</Description>
// // // //       </Details>
// // // //       <Members>
// // // //         {project.member?.map((member, index) => (
// // // //           <Avatar key={index} src={member.img} alt={`Member ${index}`} />
// // // //         ))}
// // // //       </Members>
// // // //     </Card>
// // // //   );
// // // // };

// // // // export default ProjectCard;



// // // import React from "react";
// // // import styled from "styled-components";

// // // const Card = styled.div`
// // //   width: 330px;
// // //   height: 490px;
// // //   background-color: ${({ theme }) => theme.card};
// // //   cursor: pointer;
// // //   border-radius: 10px;
// // //   box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
// // //   overflow: hidden;
// // //   padding: 26px 20px;
// // //   display: flex;
// // //   flex-direction: column;
// // //   gap: 14px;
// // //   transition: all 0.5s ease-in-out;
// // //   &:hover {
// // //     transform: translateY(-10px);
// // //     box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
// // //     filter: brightness(1.1);
// // //   }
// // // `;

// // // const Image = styled.img`
// // //   width: 100%;
// // //   height: 180px;
// // //   background-color: ${({ theme }) => theme.white};
// // //   border-radius: 10px;
// // //   box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
// // // `;

// // // const Tags = styled.div`
// // //   width: 100%;
// // //   display: flex;
// // //   align-items: center;
// // //   flex-wrap: wrap;
// // //   gap: 8px;
// // //   margin-top: 4px;
// // // `;

// // // const Tag = styled.div`
// // //   font-size: 12px;
// // //   font-weight: 400;
// // //   color: ${({ theme }) => theme.primary};
// // //   background-color: ${({ theme }) => theme.primary + 15};
// // //   padding: 2px 8px;
// // //   border-radius: 10px;
// // // `;

// // // const Details = styled.div`
// // //   width: 100%;
// // //   display: flex;
// // //   flex-direction: column;
// // //   gap: 0px;
// // //   padding: 0px 2px;
// // // `;

// // // const Title = styled.div`
// // //   font-size: 20px;
// // //   font-weight: 600;
// // //   color: ${({ theme }) => theme.text_secondary};
// // //   overflow: hidden;
// // //   display: -webkit-box;
// // //   max-width: 100%;
// // //   -webkit-line-clamp: 2;
// // //   -webkit-box-orient: vertical;
// // //   overflow: hidden;
// // //   text-overflow: ellipsis;
// // // `;

// // // const Date = styled.div`
// // //   font-size: 12px;
// // //   margin-left: 2px;
// // //   font-weight: 400;
// // //   color: ${({ theme }) => theme.text_secondary + 80};
// // //   @media only screen and (max-width: 768px) {
// // //     font-size: 10px;
// // //   }
// // // `;

// // // const Description = styled.div`
// // //   font-weight: 400;
// // //   color: ${({ theme }) => theme.text_secondary + 99};
// // //   overflow: hidden;
// // //   margin-top: 8px;
// // //   display: -webkit-box;
// // //   max-width: 100%;
// // //   -webkit-line-clamp: 3;
// // //   -webkit-box-orient: vertical;
// // //   text-overflow: ellipsis;
// // // `;

// // // const Members = styled.div`
// // //   display: flex;
// // //   align-items: center;
// // //   padding-left: 10px;
// // // `;

// // // const Avatar = styled.img`
// // //   width: 38px;
// // //   height: 38px;
// // //   border-radius: 50%;
// // //   margin-left: -10px;
// // //   background-color: ${({ theme }) => theme.white};
// // //   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
// // //   border: 3px solid ${({ theme }) => theme.card};
// // // `;

// // // const ProjectCard = ({ project, openModal }) => {
// // //   return (
// // //     <Card onClick={() => openModal(project)}>
// // //       {project.video ? (
// // //         <video width="100%" height="180" autoPlay muted>
// // //           <source src={project.video} type="video/mp4" />
// // //           Your browser does not support the video tag.
// // //         </video>
// // //       ) : (
// // //         <Image src={project.image} />
// // //       )}
// // //       <Tags>
// // //         {project.tags?.map((tag, index) => (
// // //           <Tag key={index}>{tag}</Tag>
// // //         ))}
// // //       </Tags>
// // //       <Details>
// // //         <Title>{project.title}</Title>
// // //         <Date>{project.date}</Date>
// // //         <Description>{project.description}</Description>
// // //       </Details>
// // //       <Members>
// // //         {project.member?.map((member, index) => (
// // //           <Avatar key={index} src={member.img} />
// // //         ))}
// // //       </Members>
// // //     </Card>
// // //   );
// // // };

// // // export default ProjectCard;
// import React from "react";
// import styled from "styled-components";

// const Card = styled.div`
//   width: 330px;
//   height: 490px;
//   background-color: ${({ theme }) => theme.card};
//   cursor: pointer;
//   border-radius: 10px;
//   box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
//   overflow: hidden;
//   padding: 26px 20px;
//   display: flex;
//   flex-direction: column;
//   gap: 14px;
//   transition: all 0.5s ease-in-out;
//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
//     filter: brightness(1.1);
//   }
// `;

// const Media = styled.div`
//   width: 100%;
//   height: 180px;
//   background-color: ${({ theme }) => theme.white};
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
// `;

// const Video = styled.video`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

// const Tags = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 8px;
//   margin-top: 4px;
// `;

// const Tag = styled.div`
//   font-size: 12px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.primary};
//   background-color: ${({ theme }) => theme.primary + 15};
//   padding: 2px 8px;
//   border-radius: 10px;
// `;

// const Details = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 0px;
//   padding: 0px 2px;
// `;

// const Title = styled.div`
//   font-size: 20px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   overflow: hidden;
//   display: -webkit-box;
//   max-width: 100%;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;

// const Date = styled.div`
//   font-size: 12px;
//   margin-left: 2px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 80};
//   @media only screen and (max-width: 768px) {
//     font-size: 10px;
//   }
// `;

// const Description = styled.div`
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 99};
//   overflow: hidden;
//   margin-top: 8px;
//   display: -webkit-box;
//   max-width: 100%;
//   -webkit-line-clamp: 3;
//   -webkit-box-orient: vertical;
//   text-overflow: ellipsis;
// `;

// const Members = styled.div`
//   display: flex;
//   align-items: center;
//   padding-left: 10px;
// `;

// const Avatar = styled.img`
//   width: 38px;
//   height: 38px;
//   border-radius: 50%;
//   margin-left: -10px;
//   background-color: ${({ theme }) => theme.white};
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   border: 3px solid ${({ theme }) => theme.card};
// `;

// const ProjectCard = ({ project, openModal }) => {
//   const handleClick = () => {
//     if (project.video) {
//       openModal(project);
//     }
//   };

//   return (
//     <Card onClick={handleClick}>
//       <Media>
//         {project.video ? (
//           <Video autoPlay muted>
//             <source src={project.video} type="video/mp4" />
//             Your browser does not support the video tag.
//           </Video>
//         ) : (
//           <Image src={project.image} />
//         )}
//       </Media>
//       <Tags>
//         {project.tags?.map((tag, index) => (
//           <Tag key={index}>{tag}</Tag>
//         ))}
//       </Tags>
//       <Details>
//         <Title>{project.title}</Title>
//         <Date>{project.date}</Date>
//         <Description>{project.description}</Description>
//       </Details>
//       <Members>
//         {project.member?.map((member, index) => (
//           <Avatar key={index} src={member.img} />
//         ))}
//       </Members>
//     </Card>
//   );
// };

// export default ProjectCard;
// import React from "react";
// import styled from "styled-components";

// const Card = styled.div`
//   width: 330px;
//   height: 490px;
//   background-color: ${({ theme }) => theme.card};
//   cursor: pointer;
//   border-radius: 10px;
//   box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
//   overflow: hidden;
//   padding: 26px 20px;
//   display: flex;
//   flex-direction: column;
//   gap: 14px;
//   transition: all 0.5s ease-in-out;
//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
//     filter: brightness(1.1);
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 180px;
//   background-color: ${({ theme }) => theme.white};
//   border-radius: 10px;
//   box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
// `;

// const Tags = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 8px;
//   margin-top: 4px;
// `;

// const Tag = styled.div`
//   font-size: 12px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.primary};
//   background-color: ${({ theme }) => theme.primary + 15};
//   padding: 2px 8px;
//   border-radius: 10px;
// `;

// const Details = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 0px;
//   padding: 0px 2px;
// `;

// const Title = styled.div`
//   font-size: 20px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   overflow: hidden;
//   display: -webkit-box;
//   max-width: 100%;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;

// const Date = styled.div`
//   font-size: 12px;
//   margin-left: 2px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 80};
//   @media only screen and (max-width: 768px) {
//     font-size: 10px;
//   }
// `;

// const Description = styled.div`
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_secondary + 99};
//   overflow: hidden;
//   margin-top: 8px;
//   display: -webkit-box;
//   max-width: 100%;
//   -webkit-line-clamp: 3;
//   -webkit-box-orient: vertical;
//   text-overflow: ellipsis;
// `;

// const Members = styled.div`
//   display: flex;
//   align-items: center;
//   padding-left: 10px;
// `;

// const Avatar = styled.img`
//   width: 38px;
//   height: 38px;
//   border-radius: 50%;
//   margin-left: -10px;
//   background-color: ${({ theme }) => theme.white};
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   border: 3px solid ${({ theme }) => theme.card};
// `;

// const ProjectCard = ({ project, setOpenModal }) => {
//   return (
//     <Card onClick={() => setOpenModal(project)}>
//       <Image src={project.image} />
//       <Tags>
//         {project.tags?.map((tag, index) => (
//           <Tag key={index}>{tag}</Tag>
//         ))}
//       </Tags>
//       <Details>
//         <Title>{project.title}</Title>
//         <Date>{project.date}</Date>
//         <Description>{project.description}</Description>
//       </Details>
//       <Members>
//         {project.member?.map((member, index) => (
//           <Avatar key={index} src={member.img} />
//         ))}
//       </Members>
//     </Card>
//   );
// };

// export default ProjectCard;

import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 330px;
  height: 490px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;

const Media = styled.div`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Members = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({ theme }) => theme.card};
`;

const ProjectCard = ({ project, openModal }) => {
  const handleClick = () => {
    if (project.video) {
      openModal(project, true); // Indicate this is a video
    } else if (project.image) {
      openModal(project, false); // Indicate this is an image
    }
  };

  return (
    <Card onClick={handleClick}>
      <Media>
        {project.video ? (
          <Video autoPlay muted>
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
        ) : (
          <Image src={project.image} />
        )}
      </Media>
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      <Members>
        {project.member?.map((member, index) => (
          <Avatar key={index} src={member.img} />
        ))}
      </Members>
    </Card>
  );
};

export default ProjectCard;
