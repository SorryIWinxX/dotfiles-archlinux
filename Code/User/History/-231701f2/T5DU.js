html = "";
        obj = {"brand": "Mercedes-Benz", 
        "models": ["100 D", "115", "124", "126", "190", 
        "190 D", "190 E", "200 - 300", "200 D", 
        "200 E", "210 Van", "210 kombi", "310 Van", 
        "310 kombi", "230 - 300 CE Coupé", "260 - 560 SE", 
        "260 - 560 SEL", "500 - 600 SEC Coupé", "Trieda A", "A", 
        "A L", "AMG GT", "Trieda B", "Trieda C", "C", 
        "C Sportcoupé", "C T", "Citan", "CL", "CL", "CLA", "CLC", "CLK Cabrio", 
        "CLK Coupé", "CLS", "Trieda E", "E", "E Cabrio", "E Coupé", "E T", "Trieda G", "G Cabrio", "GL", "GLA", "GLC", "GLE", "GLK", "Trieda M", "MB 100", "Trieda R", "Trieda S", "S", "S Coupé", "SL", "SLC", "SLK", "SLR", "Sprinter"]};
        for(var key in obj) {
            html += "<option value=" + key  + ">" +obj[key] + "</option>"
        }
        document.getElementById("datas").innerHTML = html;