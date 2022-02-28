import { PopoverBody, PopoverContent } from "@chakra-ui/react";
import { ForestItem } from "../../shared/types/Forests";
import { RegionItem, Regions } from "../../shared/types/Regions";
import styles from "../../styles/Forests.module.css";

const Forests = ({ regions }: { regions: Regions }) => {
  return (
    <div className={styles.container}>
      {regions.data.map((item: RegionItem) => {
        return (
          <div key={String(item.id)} className={styles.item}>
            <p className={styles.title}>{item.attributes.title}</p>
            {item.attributes.forests.data.map((item: ForestItem) => {
              return (
                <p className={styles.forestTitle} key={String(item.id)}>
                  {item.attributes.title}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );

  // return (
  // <div className={styles.container}>
  //   {regions.data.map((item: RegionItem) => {
  //     return (
  //       <div key={String(item.id)} className={styles.item}>
  //         <p className={styles.title}>{item.attributes.title}</p>
  //         {item.attributes.forests.data.map((item: ForestItem) => {
  //           return (
  //             <p className={styles.forestTitle} key={String(item.id)}>
  //               {item.attributes.title}
  //             </p>
  //           );
  //         })}
  //       </div>
  //     );
  //   })}
  // </div>
  // );
};

export default Forests;
