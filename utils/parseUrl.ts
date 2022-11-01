export const getDatabaseId = (url: string) => {
    try {
        const id = url.replace("https://www.notion.so/", "").split("/")[1].split("?")[0]
        return id
    } catch (error) {
        throw new Error("The url is invalid")
    }
}

export const isDBIdValid = (id: string) => {
    if (id && id.length === 32) {
        return true
    } else {
        return false
    }
}