import CustomLink from "./Custom"
import styles from '../../app/page.module.css'
import Image from "next/image"
import paw from "../../assets/images/paw-logo.png"
import textLogo from "../../assets/images/PetsPaw.png"
import votes from "../../assets/images/vote-table.png"
import breed from "../../assets/images/pet-breeds.png"
import gallery from "../../assets/images/images-search.png"

// export default function Test() {
//   return (
//     <div>

          

//           <div>
//                       <ul className={styles.mainList}>
//                           <li className={styles.listElWrapper}>
//                               <CustomLink href='/voting' >
//                               <div className={`${styles.listEl} ${styles.votesEl}`}>
//                                   <Image src={votes}  alt="votes element img" width="100px" height="124px"/>
//                               </div>
//                               <div className={styles.listBottom}>
//                                   <p className={styles.listBoxName}>Voting</p>
//                                   </div>
//                                   </CustomLink>
//                           </li>
//                           <li className={styles.listElWrapper}>
//                               <CustomLink href='/breed' >
//                               <div className={`${styles.listEl} ${styles.breedsEl}`}>
//                                   <Image src={breed}  alt="breed element img" width="100px" height="124px"/>
//                               </div>
//                               <div className={styles.listBottom}>
//                                    <p className={styles.listBoxName}>Breeds</p>
//                                   </div>
//                                   </CustomLink>
//                           </li>
//                           <li className={styles.listElWrapper}>
//                               <CustomLink href='/gallery' >
//                               <div className={`${styles.listEl} ${styles.galleryEl}`}>
//                                   <Image src={gallery}  alt="gallery element img" width="100px" height="124px"/>
//                               </div>
//                               <div className={styles.listBottom}>
//                                   <p className={styles.listBoxName}>Gallery</p>
//                                   </div>
//                                   </CustomLink>
//                           </li>
//                       </ul>
//                   </div>
//      </div>
//   )
// }