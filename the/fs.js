console.log("FS assigning")
webofs.FS = {
  storage: window.localStorage,

  readfile: function (filepath) {
    return this.storage.getItem(filepath);
  },

  listfiles: function (dirpath) {
    const fileList = [];
    const regex = new RegExp(`^${dirpath}\\/[^\\/]*$`);

    for (let i = 0; i < this.storage.length; i++) {
      const key = this.storage.key(i);

      if (regex.test(key)) {
        fileList.push(key.replace(`${dirpath}/`, ''));
      }
    }

    return fileList;
  },

  createfile: function (filepath, contents) {
    this.storage.setItem(filepath, contents);
  },

  createdir: function (dirpath) {
    this.storage.setItem(`${dirpath}/`, '');
  },

  rmdir: function (dirpath) {
    const regex = new RegExp(`^${dirpath}\\/[^\\/]*$`);

    for (let i = 0; i < this.storage.length; i++) {
      const key = this.storage.key(i);

      if (key === dirpath || regex.test(key)) {
        this.storage.removeItem(key);
      }
    }
  },

  rm: function (filepath) {
    this.storage.removeItem(filepath);
  }
};