export const getImagen = async() => {
    try {
        const apiKey = '9nh9gUaGYIGL1KI6ogB963BZJ1iWR6gS';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        return url;

    } catch (error) { 
        //return error;
        return 'no existe';
    }
}

 getImagen();



