function getGalleryImages(files) {
    var images = [];
    for(var i=0; i<files.length; i++) {
        var path = files[i].path;
        if (path.startsWith('/assets/thumbs/') && path.endsWith('.JPG')) {
            var path = files[i].path;
            var filename = path.split('/').pop();
            images.push({
                src: '/assets/images/' + filename,
                srct: path,
            });
        }
    }
    return images;
}
