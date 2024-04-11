export default async function getData() {
    return await chrome.storage.sync.get('data')
        .then(res => {
            return res.data
        })
}