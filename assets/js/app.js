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
        "Сагын": {
            "Омурзак": {
                "Кайык":{
                    "Кыдыраалы": {"Аскар":null, "Жениш":null, "Марат":null, "Эльмира": null},
                },
                "Садыбакас":{
                    "Болот":{
                        "Азамат": node(["Арсен", "Дамир"]),
                        "Темир": null,
                    },
                    "Кубат":{
                        "Бермет": node(["Ильгиз", "Ислам", "Алим", "Аман", "Лейла"]),
                        "Азиз": {"Эмин": null}
                    },
                    "Мурат":{
                        "Асель": node(["Тимур", "Данил", "Армен"]),
                        "Нуриля": node(["Алихан", "Салим"]),
                    },
                },
            },
            "Жанызак": {
                "Шайын": {
                    "Суранаалы": node([
                        "Замирбек",
                        "Жолдошбек",
                        "Черик",
                        "Венера",
                        "Улан",
                        "Усан"
                    ])
                }
            },
        }
    };

    var tree = getTreeNode(data);
    return tree[0];
}

function node(names) {
    var node = {};
    names.forEach(function(v) {
        node[v] = null;
    });
    return node;
}

function getTreeNode(node) {
    var children = [];
    for(var p in node) {
        var options = {};
        if (node[p] == null) {
            var leaf = {innerHTML: p};
            children.push(leaf);
        } else if (typeof node[p] == "object") {
            children.push({
                text: {name: p},
                HTMLclass: p,
                stackChildren: true,
                children: getTreeNode(node[p])
            });
        }
    }

    return children;
}
