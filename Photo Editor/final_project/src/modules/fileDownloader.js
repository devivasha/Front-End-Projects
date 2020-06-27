import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import url from 'url';

export default async function fileDownloader(project_id) {
    let resObject;
    console.log('download started from project', project_id);

    try {
        let zip = new JSZip();
        await fetcher('POST', 'editor/project', true, { project_id }).then(async data => {
            if (data.status !== 200) throw new Error({ message: data.message });
            let imgArr = data.message.project.photos.last;

            for (let index = 0; index < imgArr.length; index++) {
                const link = imgArr[index].url;

                let b64 = await imageToBase64(link);

                zip.file(getImgName(link) + getImgExt(b64), b64.split(',')[1], { base64: true });
            }

        });
        await zip.generateAsync({ type: "blob" }).then((content) => {
            saveAs(content, "images.zip");
        });
        resObject = true
    } catch (e) {
        console.error(e);
        resObject = e.message;
    } finally {
        return resObject
    }
}


function fetcher(method, dir, useToken, content) {
    let headers = { "Content-Type": "application/json" };
    if (useToken) {
        headers = {
            ...headers,
            ...{ "Authorization": localStorage.getItem('Authorization') }
        }
    }

    return fetch(`https://cropman-server.ew.r.appspot.com/${dir}`, {
        method,
        headers,
        body: JSON.stringify(content),
    }).then((response) => response.json())
}


function getImgExt(bas64Url) {
    let i = ((bas64Url.split(',')[0]).split('/')[1]).split(';')[0]
    return '.' + i
}

function getImgName(objectUrl) {
    let i = (url.parse(objectUrl).pathname).split('/')
    return i[i.length - 1].split('.')[0]
}

async function imageToBase64(link) {
    return await fetch(link, {
        method: 'GET'
    }).then(response => response.blob()).then(async blob => {
        return await convertBlobToBase64(blob)
    });
}

const convertBlobToBase64 = blob => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
});
