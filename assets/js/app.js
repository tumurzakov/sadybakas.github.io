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

function getTreeData() {
    var data = {
        "Байбек": {
            "Атай": {
                "Чекебай": {"Саяк":null, "Курман":null},
            },
            "Эшбото": {
                "Сагын": {
                    "Омурзак": {
                        "Кайык":{
                            "Кыдыраалы": {"Аскар":null, "Жениш":null, "Марат":null},
                        },
                        "Садыбакас":{
                            "Болот":{
                                "Азамат": {"Арсен":null, "Дамир":null},
                                "Темир": null,
                            },
                            "Кубат":{
                                "Бермет": {"Ильгиз":null, "Ислам":null, "Алим":null, "Аман":null, "Лайла":null},
                                "Азиз": {"Эмин": null}
                            },
                            "Мурат":{ "Асель":null, "Нуриля":null },
                        },
                    },
                    "Жанызак": {
                        "Шайын": {
                            "Суранаалы": {
                                "Замирбек":null,
                                "Жолдошбек": null,
                                "Черик": null,
                                "Венера": null,
                                "Улан": null,
                                "Усан" :null,
                            }
                        }
                    },
                },
                "Аылчы": {"Абды": null},

            },
            "Муратбек": null,
        }
    };

    var tree = getTreeNode(data);
    return tree[0];
}

function getTreeNode(node) {
    var children = [];
    for(var p in node) {
        if (node[p] == null) {
            children.push({text: {name: p}});
        } else if (typeof node[p] == "object") {
            children.push({text: {name: p}, children: getTreeNode(node[p])});
        }
    }

    return children;
}
