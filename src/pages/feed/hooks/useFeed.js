import { useContext } from "react"
import { FeedContext } from '../provider/FeedContext'
import db from '../../../firebase'

const useFeed = () => {
    const [state, immerSetState] = useContext(FeedContext);

    const _getFeeds = () => {
        db.collection("posts").onSnapshot(snapshot => (
            immerSetState(draft => {
                draft.posts = snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }))
            })
        ))
    }

    return {
        state,
        _getFeeds
    };
}

export default useFeed
