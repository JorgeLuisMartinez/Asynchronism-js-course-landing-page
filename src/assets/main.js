const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC8AHM2ZhhusxHMhW_q1Hhcw&part=snippet%2Cid&order=date&maxResults=9';
const content = null || document.getElementById('content');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '497428cca2msh43a5cbf866676c6p1bc7edjsnfbca1f14cca8',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options)
    const data = await response.json()
    return data;
}
// Ahora vamos usar una función que se invoca a sí misma; con JavaScript podemos tener funciones anónimas que permitan llamarse automáticamente.
// Las expresiones de función ejecutadas inmediatamente (IIFE por su sigla en inglés) son funciones que se ejecutan tan pronto como se definen.
(async ()=> {
    try {
        const videos = await fetchData(API);
        // creacion de el template html que se va a adaptar para que itere cada un de los Elementos para que se muestren en el html.
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0,4).join('')}
        `;
        content.innerHTML= view;
    } catch (error) {
        console.error(error);
    }
})();


