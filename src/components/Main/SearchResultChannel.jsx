import styles from './SearchResultChannel.module.css'
import { formatNumbers } from "../../utils/FormatNumbers";

const SearchResultChannel = ({ item }) => {
    return (
        <>
            <li className={styles.channel}>
                <div className={styles.icon}>
                    <img src={item.icon} alt="" />
                </div>
                <div className={styles.channelContent}>
                    <h4>{item.channelTitle}</h4>
                    <div className={styles.subscribers}>
                        <span>{item.customUrl}</span>
                        <span>{formatNumbers(item.subscriberCount)} subscribers</span>
                    </div>
                    <span>{item.description}</span>
                </div>
            </li>
        </>
    )
}
export default SearchResultChannel