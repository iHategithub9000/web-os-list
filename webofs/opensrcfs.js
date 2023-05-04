let setup_fs = async function(){let webofs={};await fetch("https://ihategithub9000.github.io/web-os-centre/webofs/fs.js").then(res=>res.text()).then(eval);FS=webofs.FS;webofs=null};setup_fs()
