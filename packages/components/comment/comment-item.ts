import { withInstall } from '~/util'
import CommentItem from './src/tools/comment-item.vue'

export type CommentItemInstance = InstanceType<typeof CommentItem>
export const UCommentItem = withInstall(CommentItem)
export default UCommentItem
