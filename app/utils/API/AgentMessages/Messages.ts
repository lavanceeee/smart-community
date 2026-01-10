import { $agentApi } from '~/utils/API/agent'

export const MessagesApi = {
    /**
     * 创建新会话
     * @param payload 包含标题等信息
     */
    createSession: (payload: { content: string, title?: string }) => {
        return $agentApi('/create_new_session', {
            method: 'POST',
            body: payload
        })
    }
}
