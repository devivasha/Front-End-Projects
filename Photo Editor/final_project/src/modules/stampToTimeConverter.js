



export default function stampToTimeConverter(tsd) {
    let timeAp = new Date(tsd);
    let timestamp = timeAp.valueOf()
    let calculated;

    calculated = Math.round((Date.now() - timestamp) / 60000)

    if (calculated <= 5) {
        return `just now`
    } else if (calculated < 60) {
        return `${calculated} minutes ago`
    }

    calculated = Math.round((Date.now() - timestamp) / 3600000)

    if (calculated <= 1) {
        return `1 hour ago`
    } else if (calculated < 24) {
        return `${calculated} hours ago`
    }

    calculated = Math.round((Date.now() - timestamp) / 86400000)

    if (calculated <= 1) {
        return `1 day ago`
    } else if (calculated < 30) {
        return `${calculated} days ago`
    }

    calculated = Math.round((Date.now() - timestamp) / 2592000000)

    if (calculated <= 1) {
        return `1 month ago`
    } else if (calculated < 12) {
        return `${calculated} months ago`
    } else if (calculated <= 13) {
        return 'a year ago'
    }

    let data = new Date(tsd)
    return data.toDateString()
}