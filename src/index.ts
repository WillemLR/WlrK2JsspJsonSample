import '@k2oss/k2-broker-core';

metadata = {
    "systemName": "JSONPlaceholder",
    "displayName": "JSONPlaceholder Broker",
    "description": "Sample broker for JSONPlaceholder",
    "configuration": {
        "ServiceURL": {
            displayName: "JSONPlaceholder Service URL",
            type: "string",
            value: "https://jsonplaceholder.typicode.com/"
        }
    }
};

ondescribe = async function ({configuration}): Promise<void> {
    postSchema({
        objects: {
            "posts": {
                displayName: "Posts",
                description: "Manages Posts",
                properties: {
                    "id": {
                        displayName: "ID",
                        type: "number"
                    },
                    "userId": {
                        displayName: "User ID",
                        type: "number"
                    },
                    "title": {
                        displayName: "Title",
                        type: "string"
                    },
                    "body": {
                        displayName: "Body",
                        type: "string"
                    }
                },
                methods: {
                    "getList": {
                        displayName: "Get Posts List",
                        type: "list",
                        outputs: ["id", "userId", "title", "body"]
                    },
                    "getById": {
                        displayName: "Get Post By ID",
                        type: "read",
                        inputs: ["id"],
                        requiredInputs: ["id"],
                        outputs: ["id", "userId", "title", "body"]
                    },
                    "getByUserId": {
                        displayName: "Get Posts By User ID",
                        type: "list",
                        inputs: ["userId"],
                        requiredInputs: ["userId"],
                        outputs: ["id", "userId", "title", "body"]
                    },
                    "create": {
                        displayName: "Create Post",
                        type: "create",
                        inputs: ["userId", "title", "body"],
                        outputs: ["id", "userId", "title", "body"]
                    },
                    "update": {
                        displayName: "Update Post",
                        type: "update",
                        inputs: ["id", "userId", "title", "body"],
                        requiredInputs: ["id"],
                        outputs: ["id", "userId", "title", "body"]
                    },
                    "delete": {
                        displayName: "Delete Post",
                        type: "delete",
                        inputs: ["id"],
                        requiredInputs: ["id"]
                    }
                }
            },
            "comments": {
                displayName: "Comments",
                description: "Manages Comments",
                properties: {
                    "id": {
                        displayName: "ID",
                        type: "number"
                    },
                    "postId": {
                        displayName: "Post ID",
                        type: "number"
                    },
                    "name": {
                        displayName: "Name",
                        type: "string"
                    },
                    "email": {
                        displayName: "Email",
                        type: "string"
                    },
                    "body": {
                        displayName: "Body",
                        type: "string"
                    }
                },
                methods: {
                    "getList": {
                        displayName: "Get Comments List",
                        type: "list",
                        outputs: ["id", "postId", "name", "email", "body"]
                    },
                    "getById": {
                        displayName: "Get Comment By ID",
                        type: "read",
                        inputs: ["id"],
                        requiredInputs: ["id"],
                        outputs: ["id", "postId", "name", "email", "body"]
                    },
                    "getByPostId": {
                        displayName: "Get Comments By Post ID",
                        type: "list",
                        inputs: ["postId"],
                        requiredInputs: ["postId"],
                        outputs: ["id", "postId", "name", "email", "body"]
                    }
                }
            },
            "todos": {
                displayName: "To Do",
                description: "Manages To Dos",
                properties: {
                    "id": {
                        displayName: "ID",
                        type: "number"
                    },
                    "userId": {
                        displayName: "User ID",
                        type: "number"
                    },
                    "title": {
                        displayName: "Title",
                        type: "string"
                    },
                    "completed": {
                        displayName: "Completed",
                        type: "boolean"
                    }
                },
                methods: {
                    "getList": {
                        displayName: "Get To Dos List",
                        type: "list",
                        outputs: ["id", "userId", "title", "completed"]
                    },
                    "getById": {
                        displayName: "Get To Do By ID",
                        type: "read",
                        inputs: ["id"],
                        requiredInputs: ["id"],
                        outputs: ["id", "userId", "title", "completed"]
                    }
                }
            },
            "users": {
                displayName: "Users",
                description: "Manages Users",
                properties: {
                    "id": {
                        displayName: "ID",
                        type: "number"
                    },
                    "name": {
                        displayName: "Name",
                        type: "string"
                    },
                    "username": {
                        displayName: "User Name",
                        type: "string"
                    },
                    "email": {
                        displayName: "Email",
                        type: "string"
                    },
                    "addressStreet": {
                        displayName: "Address.Street",
                        type: "string"
                    },
                    "addressSuite": {
                        displayName: "Address.Suite",
                        type: "string"
                    },
                    "addressCity": {
                        displayName: "Address.City",
                        type: "string"
                    },
                    "addressGeoLat": {
                        displayName: "Address.Geo.Latitude",
                        type: "string"
                    },
                    "addressGeoLng": {
                        displayName: "Address.Get.Longitude",
                        type: "string"
                    },
                    "phone": {
                        displayName: "Phone",
                        type: "string"
                    },
                    "website": {
                        displayName: "Website",
                        type: "string"
                    },
                    "companyName": {
                        displayName: "Company.Name",
                        type: "string"
                    },
                    "companyCatchPhrase": {
                        displayName: "Company.CatchPhrase",
                        type: "string"
                    },
                    "companyBs": {
                        displayName: "Company.BS",
                        type: "string"
                    }
                },
                methods: {
                    "getList": {
                        displayName: "Get Users List",
                        type: "list",
                        outputs: ["id",
                            "name",
                            "username",
                            "email",
                            "addressStreet",
                            "addressSuite",
                            "addressCity",
                            "addressGeoLat",
                            "addressGeoLng",
                            "phone",
                            "website",
                            "companyName",
                            "companyCatchPhrase",
                            "companyBs"]
                    },
                    "getById": {
                        displayName: "Get Users By ID",
                        type: "read",
                        inputs: ["id"],
                        requiredInputs: ["id"],
                        outputs: ["id",
                            "name",
                            "username",
                            "email",
                            "addressStreet",
                            "addressSuite",
                            "addressCity",
                            "addressGeoLat",
                            "addressGeoLng",
                            "phone",
                            "website",
                            "companyName",
                            "companyCatchPhrase",
                            "companyBs"]
                    }
                }
            }
        }
    }
    )
};

onexecute = async function ({objectName, methodName, parameters, properties, configuration}): Promise<void> {
    switch (objectName) {
        case "posts": await onexecutePosts(methodName, parameters, properties, configuration); break;
        case "comments": await onexecuteComments(methodName, parameters, properties, configuration); break;
        case "todos": await onexecuteToDos(methodName, parameters, properties, configuration); break;
        case "users": await onexecuteUsers(methodName, parameters, properties, configuration); break;
        default: throw new Error("The object " + objectName + " is not supported.");
    }
}

async function onexecutePosts(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    switch (methodName) {
        case "getList": await onexecutePostsGetList(parameters, properties, configuration); break;
        case "getById": await onexecutePostsGetById(parameters, properties, configuration); break;
        case "getByUserId": await onexecutePostsGetByUserId(parameters, properties, configuration); break;
        case "create": await onexecutePostsCreate(parameters, properties, configuration); break;
        case "update": await onexecutePostsUpdate(parameters, properties, configuration); break;
        case "delete": await onexecutePostsDelete(parameters, properties, configuration); break;
        default: throw new Error("The method " + methodName + " is not supported.");
    }
}

async function onexecuteComments(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    switch (methodName) {
        case "getList": await onexecuteCommentsGetList(parameters, properties, configuration); break;
        case "getById": await onexecuteCommentsGetById(parameters, properties, configuration); break;
        case "getByPostId": await onexecuteCommentsGetByPostId(parameters, properties, configuration); break;
        default: throw new Error("The method " + methodName + " is not supported.");
    }
}

async function onexecuteToDos(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    switch (methodName) {
        case "getList": await onexecuteToDosGetList(parameters, properties, configuration); break;
        case "getById": await onexecuteToDosGetById(parameters, properties, configuration); break;
        default: throw new Error("The method " + methodName + " is not supported.");
    }
}

async function onexecuteUsers(methodName: string, parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    switch (methodName) {
        case "getList": await onexecuteUsersGetList(parameters, properties, configuration); break;
        case "getById": await onexecuteUsersGetById(parameters, properties, configuration); break;
        default: throw new Error("The method " + methodName + " is not supported.");
    }
}

function onexecutePostsGetList(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        var urlValue = configuration["ServiceURL"] + 'posts/';
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

                //console.log(xhr.responseText);
                var obj = JSON.parse(xhr.responseText);
                postResult(obj.map(x => {
                    return {
                        "id": x.id,
                        "userId": x.userId,
                        "title": x.title,
                        "body": x.body
                    }
                }));
                resolve();
            } catch (e) {
                reject(e);
            }
        }

        xhr.open("GET", urlValue);
        xhr.send();
    });

}

function onexecutePostsGetById(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        var urlValue = configuration["ServiceURL"] + 'posts/';
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

                var obj = JSON.parse(xhr.responseText);
                postResult({
                    "id": obj.id,
                    "userId": obj.userId,
                    "title": obj.title,
                    "body": obj.body
                });
                resolve();
            } catch (e) {
                reject(e);
            }
        }

        if(typeof properties["id"] !== "number") throw new Error("properties[\"id\"] is not of type number");

        xhr.open("GET", urlValue + encodeURIComponent(properties["id"]));
        xhr.send();
    });
}

function onexecutePostsGetByUserId(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        var urlValue = configuration["ServiceURL"] + 'posts?userId=';
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

                var obj = JSON.parse(xhr.responseText);
                postResult(obj.map(x => {
                    return {
                        "id": x.id,
                        "userId": x.userId,
                        "title": x.title,
                        "body": x.body
                    }
                }));
                resolve();
            } catch (e) {
                reject(e);
            }

        }

        if(typeof properties["userId"] !== "number") throw new Error("properties[\"userId\"] is not of type number");
        xhr.open("GET", urlValue + encodeURIComponent(properties["userId"]));
        xhr.send();
    });
}


function onexecutePostsCreate(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        var urlValue = configuration["ServiceURL"] + 'posts/';
        var data = JSON.stringify({
            "userId": properties["userId"],
            "title": properties["title"],
            "body": properties["body"]
        });

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            try {
                if (xhr.readyState !== 4) return;
                // look for 'created' code
                if (xhr.status !== 201) throw new Error("Failed with status " + xhr.status);

                var obj = JSON.parse(xhr.responseText);
                postResult({
                    "id": obj.id,
                    "userId": obj.userId,
                    "title": obj.title,
                    "body": obj.body
                });
                resolve();
            } catch (e) {
                reject(e);
            }
        }
        xhr.open("POST", urlValue);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
    });
}

function onexecutePostsUpdate(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        var urlValue = configuration["ServiceURL"] + 'posts/';
        var data = JSON.stringify({
            "userId": properties["userId"],
            "title": properties["title"],
            "body": properties["body"]
        });

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

                var obj = JSON.parse(xhr.responseText);
                postResult({
                    "id": obj.id,
                    "userId": obj.userId,
                    "title": obj.title,
                    "body": obj.body
                });
                resolve();
            } catch (e) {
                reject(e);
            }
        }

        if(typeof properties["id"] !== "number") throw new Error("properties[\"id\"] is not of type number");
        xhr.open("PUT", urlValue + encodeURIComponent(properties["id"]));
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
    });
}

function onexecutePostsDelete(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        var urlValue = configuration["ServiceURL"];
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
                resolve();
            } catch (e) {
                reject(e);
            }
        }

        if(typeof properties["id"] !== "number") throw new Error("properties[\"id\"] is not of type number");
        xhr.open("DELETE", urlValue + 'posts/' + encodeURIComponent(properties["id"]));
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send();
    });
}

function onexecuteCommentsGetList(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        var urlValue = configuration["ServiceURL"] + 'comments';
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);
                var obj = JSON.parse(xhr.responseText);
                postResult(obj.map(x => {
                    return {
                        "id": x.id,
                        "postId": x.postId,
                        "name": x.name,
                        "email": x.email,
                        "body": x.body
                    }
                }));
                resolve();
            } catch (error) {
                reject(error);
            }
        }
        xhr.open("GET", urlValue);
        xhr.send();
    });
}

function onexecuteCommentsGetById(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        var urlValue = configuration["ServiceURL"];
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

                var obj = JSON.parse(xhr.responseText);
                postResult({
                    "id": obj.id,
                    "postId": obj.postId,
                    "name": obj.name,
                    "email": obj.email,
                    "body": obj.body
                });
                resolve();
            } catch (error) {
                reject(error);
            }
        }

        if(typeof properties["id"] !== "number") throw new Error("properties[\"id\"] is not of type number");
        xhr.open("GET", urlValue + 'comments/' + encodeURIComponent(properties["id"]));
        xhr.send();
    });
}

function onexecuteCommentsGetByPostId(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        var urlValue = configuration["ServiceURL"];
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

                var obj = JSON.parse(xhr.responseText);
                postResult(obj.map(x => {
                    return {
                        "id": x.id,
                        "postId": x.postId,
                        "name": x.name,
                        "email": x.email,
                        "body": x.body
                    }
                }));
                resolve();
            } catch (error) {
                reject(error);
            }

        }

        if(typeof properties["postId"] !== "number") throw new Error("properties[\"postId\"] is not of type number");
        xhr.open("GET", urlValue + 'comments?postId=' + encodeURIComponent(properties["postId"]));
        xhr.send();
    });
}

function onexecuteToDosGetList(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        var urlValue = configuration["ServiceURL"];
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

                var obj = JSON.parse(xhr.responseText);
                postResult(obj.map(x => {
                    return {
                        "id": x.id,
                        "userId": x.userId,
                        "title": x.title,
                        "completed": x.completed
                    }
                }));
                resolve();
            } catch (error) {
                reject(error);
            }

        }
        xhr.open("GET", urlValue + 'todos/');
        xhr.send();
    });
}

function onexecuteToDosGetById(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        var urlValue = configuration["ServiceURL"];
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

                var obj = JSON.parse(xhr.responseText);
                postResult({
                    "id": obj.id,
                    "userId": obj.userId,
                    "title": obj.title,
                    "completed": obj.completed
                });
                resolve();
            } catch (error) {
                reject(error);
            }

        }

        if(typeof properties["id"] !== "number") throw new Error("properties[\"id\"] is not of type number");
        xhr.open("GET", urlValue + 'todos/' + encodeURIComponent(properties["id"]));
        xhr.send();
    });
}

function onexecuteUsersGetList(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        var urlValue = configuration["ServiceURL"];
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

                var obj = JSON.parse(xhr.responseText);
                postResult(obj.map(x => {
                    return {
                        "id": x.id,
                        "name": x.name,
                        "username": x.username,
                        "email": x.email,
                        "addressStreet": x.address.street,
                        "addressSuite": x.address.suite,
                        "addressCity": x.address.city,
                        "addressGeoLat": x.address.geo.lat,
                        "addressGeoLng": x.address.geo.lng,
                        "phone": x.phone,
                        "website": x.website,
                        "companyName": x.company.name,
                        "companyCatchPhrase": x.company.catchPhrase,
                        "companyBs": x.company.bs
                    }
                }));
                resolve();
            } catch (error) {
                reject(error);
            }

        }
        xhr.open("GET", urlValue + 'users/');
        xhr.send();
    });
}

function onexecuteUsersGetById(parameters: SingleRecord, properties: SingleRecord, configuration: SingleRecord): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        var urlValue = configuration["ServiceURL"];
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            try {
                if (xhr.readyState !== 4) return;
                if (xhr.status !== 200) throw new Error("Failed with status " + xhr.status);

                var obj = JSON.parse(xhr.responseText);
                postResult({
                    "id": obj.id,
                    "name": obj.name,
                    "username": obj.username,
                    "email": obj.email,
                    "addressStreet": obj.address.street,
                    "addressSuite": obj.address.suite,
                    "addressCity": obj.address.city,
                    "addressGeoLat": obj.address.geo.lat,
                    "addressGeoLng": obj.address.geo.lng,
                    "phone": obj.phone,
                    "website": obj.website,
                    "companyName": obj.company.name,
                    "companyCatchPhrase": obj.company.catchPhrase,
                    "companyBs": obj.company.bs
                });
                resolve();
            } catch (error) {
                reject(error);
            }
        }

        if(typeof properties["id"] !== "number") throw new Error("properties[\"id\"] is not of type number");
        xhr.open("GET", urlValue + 'users/' + encodeURIComponent(properties["id"]));
        xhr.send();
    });
}