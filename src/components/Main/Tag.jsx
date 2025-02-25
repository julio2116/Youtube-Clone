import { newContent } from "../../utils/publishedTime";
import styles from './Tag.module.css'

const Tag = ({published, definition}) => {
    if(!published && !definition) return null
    
    return (
        <>
            <div>
                {newContent(published) ? (
                    <span className={styles.tag}>New</span>
                ) : (
                    definition === "hd" ? (
                        <span className={styles.tag}>HD</span>
                    ) : (
                        null
                    )
                )}
            </div>
        </>
    )
}

export default Tag