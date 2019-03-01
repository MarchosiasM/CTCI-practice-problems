const deleteMiddleNode = (node) => {
    const nextNode = node['next'];
    let nextNextNode = null;
    if (nextNode !== null) {
        nextNextNode = nextNode['next'];
    }

    node['value'] = nextNode['value'];
    node['next'] = nextNextNode;
}

module.exports = deleteMiddleNode;