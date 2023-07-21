import { api } from "../api";

interface InfoData {
    content: string
}
export default {

    async UserNotes(token: string) {
        try {
            const response = await api.get('/private/notes/userNotes', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return response
        } catch (error) { return console.log('error') }
    },
    async getNote(token: string, id: number) {
        try {
            const response = await api.get(`/private/notes/show/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return response
        } catch (error) { return console.log('error') }
    },
    async deleteNote(token: string, id: number) {
        try {
            const response = await api.get(`/private/notes/delete/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return response
        } catch (error) { return console.log('error') }
    },
    async updateNotes(token: string, id: number, data: InfoData) {
        try {
            const response = api.put(`/private/notes/${id}`, data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return response
        }
        catch (e) {
            console.log(e)
        }
    }
}
