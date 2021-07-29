
var comArr=new Array(4),//普通行李数组
    disable=new Array(),
    baby=new Array(),
    free=new Array(),
    charge=new Array();
for(var i=0;i<4;i++){
    comArr[i]=new Array();
}
var line=0;

function writeBag() {
    var text=document.getElementById("d2"),bag="已有收费行李：<br/>";
    for(var i=0;i<comArr[0].length;i++){
        bag=bag+"普通行李：    "+comArr[0][i]+"    "+comArr[1][i]+"    "+comArr[2][i]+"     "+comArr[3][0]+"<br/>";
    }
    for(var i=0;i<free.length;i++){
        bag=bag+"特殊行李1： "+free[i]+"<br/>";
    }
    for (var i=0;i<charge.length;i++){
        bag=bag+"特殊行李2： "+charge[i]+"<br/>";
    }
    text.innerHTML=bag;
}

//普通行李的增加
function addcomArr() {
    var temp=new Number(document.getElementById("length").value),
        temp2=new Number(document.getElementById("width").value),
        temp3=new Number(document.getElementById("height").value),
        temp4=new Number(document.getElementById("weight").value);
    //判断输入是否正确
    if(temp.toString()!="NaN" && temp2.toString()!="NaN" && temp3.toString()!="NaN" && temp4.toString()!="NaN") {
        var fly=document.getElementById("inout");
        if(fly[fly.selectedIndex].text=="国内航线"){
            //alert("国内航线");
            if(temp>100 || temp2>60 || temp3>40 ||(temp+temp2+temp3)<60
                ||(temp+temp2+temp3)>158 || temp4<2 || temp4>32)//未提及国内行李超尺寸的事情，故限制尺寸在158cm以下
            {
                alert("行李分包不合理，请重新分包！");
                return "sizeError";
            }
        }
        else {//国际航线
            if((temp+temp2+temp3)<60||(temp+temp2+temp3)>203||temp4<2 || temp4>32)//国际航线行李不符规矩
            {
                alert("行李分包不合理，请重新分包！");
                return "sizeError";//行李分包错误
            }
        }
        comArr[0][line] = temp;
        comArr[1][line] = temp2;
        comArr[2][line] = temp3;
        comArr[3][line] = temp4;//这一行为weight
        line++;
        writeBag();
    }
    else {
        alert("请正确输入！");
        return "typeError";
    }
    document.getElementById("length").value=" ";
    document.getElementById("width").value=" ";
    document.getElementById("height").value=" ";
    document.getElementById("weight").value=" ";
}

function addDisable(){
    if(document.getElementById("disabled").checked!=true){
        alert("非残疾、伤、病人士不可携带此类物品！");
        return "manError";//乘客类型错误
    }
    var temp=new Number(document.getElementById("length1").value),
        temp2=new Number(document.getElementById("width1").value),
        temp3=new Number(document.getElementById("height1").value),
        temp4=new Number(document.getElementById("weight1").value);
    if(temp.toString()=="NaN" || temp2.toString()=="NaN" || temp3.toString()=="NaN" || temp4.toString()=="NaN"
        ||temp<=0||temp2<=0||temp3<=0||temp4<=0) {
        alert("请正确输入！");
        return "typeError";//输入错误
    }
    else{
        if(disable.length>0) {
            alert("此类乘客只可携带一件此类物品！");
            return "numError";//件数错误
        }
        disable[disable.length]=temp4;
        document.getElementById("length1").value=" ";
        document.getElementById("width1").value=" ";
        document.getElementById("height1").value=" ";
        document.getElementById("weight1").value=" ";
    }
}

function addAsh() {
    //判断输入是否正确
    var temp=new Number(document.getElementById("length2").value),
        temp2=new Number(document.getElementById("width2").value),
        temp3=new Number(document.getElementById("height2").value),
        temp4=new Number(document.getElementById("weight2").value);
    if(temp.toString()=="NaN" || temp2.toString()=="NaN" || temp3.toString()=="NaN" || temp4.toString()=="NaN"
        ||temp<=0||temp2<=0||temp3<=0||temp4<=0) {
        alert("请正确输入！");
        return "typeError";//输入错误
    }
    document.getElementById("length2").value=" ";
    document.getElementById("width2").value=" ";
    document.getElementById("height2").value=" ";
    document.getElementById("weight2").value=" ";
}

function addBaby() {
    var passager = document.getElementById("ticketType");
    passager = passager[passager.selectedIndex].text;
    if (passager != "婴儿") {
        alert("非婴儿乘客不可携带此类物品！");
        return "manError";
    }
    else {
        var temp=new Number(document.getElementById("length3").value),
            temp2=new Number(document.getElementById("width3").value),
            temp3=new Number(document.getElementById("height3").value),
            temp4=new Number(document.getElementById("weight3").value);
        if(temp.toString()=="NaN" || temp2.toString()=="NaN" || temp3.toString()=="NaN" || temp4.toString()=="NaN"
            ||temp<=0||temp2<=0||temp3<=0||temp4<=0) {
            alert("请正确输入！");
            return "typeError";//输入错误
        }
        else {
            if (baby.length > 0) {
                alert("此类乘客只可携带一件此类物品！");
                return "numError";
            }
            baby[baby.length]=temp;
            document.getElementById("length3").value=" ";
            document.getElementById("width3").value=" ";
            document.getElementById("height3").value=" ";
            document.getElementById("weight3").value=" ";
        }

    }
}

function inFree() {
    var temp=new Number(document.getElementById("length4").value),
        temp2=new Number(document.getElementById("width4").value),
        temp3=new Number(document.getElementById("height4").value),
        temp4=new Number(document.getElementById("weight4").value);
    if(temp.toString()=="NaN" || temp2.toString()=="NaN" || temp3.toString()=="NaN" || temp4.toString()=="NaN"
        ||temp<=0||temp2<=0||temp3<=0||temp4<2||temp4>32) {
        alert("请正确输入！");
        return "typeError";//输入错误
    }
    else{
        free[free.length]=temp4;
        document.getElementById("length4").value=" ";
        document.getElementById("width4").value=" ";
        document.getElementById("height4").value=" ";
        document.getElementById("weight4").value=" ";
        writeBag();
    }
}

function outFree() {//统一3000运费一件

    var temp=new Number(document.getElementById("length5").value),
        temp2=new Number(document.getElementById("width5").value),
        temp3=new Number(document.getElementById("height5").value),
        temp4=new Number(document.getElementById("weight5").value);
    if(temp.toString()=="NaN" || temp2.toString()=="NaN" || temp3.toString()=="NaN" || temp4.toString()=="NaN"
        ||temp<=0||temp2<=0||temp3<=0||temp4<2||temp4>32) {
        alert("请正确输入！");
        return "typeError";//输入错误
    }
    else{
        charge[charge.length]=temp4;
        document.getElementById("length5").value=" ";
        document.getElementById("width5").value=" ";
        document.getElementById("height5").value=" ";
        document.getElementById("weight5").value=" ";
        writeBag();
    }
}

function down(a,b) {//降序
    return b-a;
}

function inCountry(){
    var passager=document.getElementById("ticketType");
    passager=passager[passager.selectedIndex].text;
    var ticket=new Number(document.getElementById("price").value);
    if(ticket.toString()=="NaN"||ticket<=0){
        alert("请正确输入票价！");
        if(ticket.toString()=="NaN")
            return "typeError";
        else
            return "sizeError";
    }
    var sumWeight=0;
    if(passager=="成人"||passager=="儿童")
    {
        //国内航线特殊行李重量全都可以算入免费托运额度里
        if(comArr.length>0){//如果有普通行李，判断是否是VIP
            var ifVip=document.getElementById("vip");
            ifVip=ifVip[ifVip.selectedIndex].text;
            //alert(ifVip);
            if(ifVip=="白金卡"||ifVip=="凤凰知音终身白金卡"){
                comArr[3].sort(down);//降序排列
                for(var i=0;i<comArr[3].length;i++){//寻找第一件小于30kg的行李
                    if(comArr[3][i]<=30) {
                        var c1 = comArr[3].splice(0, i), c2 = comArr[3].splice(i + 1);
                        comArr[3] = c1.concat(c2);
                        break;
                    }
                }
            }
            else if(ifVip=="银卡"||ifVip=="星空联盟金卡"||ifVip=="凤凰知音金卡"){
                comArr[3].sort(down);//降序排列
                for(var i=0;i<comArr[3].length;i++){//寻找第一件小于20kg的行李
                    if(comArr[3][i]<=20) {
                        var c1 = comArr[3].splice(0, i), c2 = comArr[3].splice(i + 1);
                        comArr[3] = c1.concat(c2);
                        break;
                    }
                }
            }
        }
        var allWeight=comArr[3].concat(free,charge);
        for(var i=0;i<allWeight.length;i++){
            sumWeight=sumWeight+allWeight[i];
        }
        var chair=document.getElementById("chair");
        chair=chair[chair.selectedIndex].text;
        //alert(chair);
        if(chair=="头等舱"||chair=="豪华头等舱") {
            if (sumWeight > 40)
                sumWeight = sumWeight - 40;
            else
                sumWeight = 0;
        }
        else if(chair=="公务舱")
        {
            if (sumWeight > 30)
                sumWeight = sumWeight - 30;
            else
                sumWeight = 0;
        }
        else{
            if (sumWeight > 20)
                sumWeight = sumWeight - 20;
            else
                sumWeight = 0;
        }
    }
    else{//乘客为婴儿时
        var allWeight=comArr[3].concat(free,charge);
        for(var i=0;i<allWeight.length;i++){
            sumWeight=sumWeight+allWeight[i];
        }
        if(sumWeight>10)
            sumWeight=sumWeight-10;
        else
            sumWeight=0;
    }
    return Math.round(sumWeight*ticket*0.015);
}

function outCountry(){
    /*设置成超重或者超尺寸要付一样的价格，统一起来
    区域一980，区域二690，区域三520，区域四1040，区域五520
    其他收费类统一定价为3000
     */
    var numMoney=3000*charge.length;
    var chair=document.getElementById("chair");
    chair=chair[chair.selectedIndex].text;
    var area=document.getElementById("area");
    area=area[area.selectedIndex].text;
    if(area=="无"){
        alert("请选择区域！");
        return "areaError";
    }
    var ticket=new Number(document.getElementById("price").value);
    if(ticket.toString()=="NaN"||ticket<=0){
        alert("请正确输入票价！");
        if(ticket.toString()=="NaN")
            return "typeError";
        else
            return "sizeError";
    }
    //alert(chair);
    if(chair=="头等舱"||chair=="豪华头等舱"||chair=="公务舱"){
        //不存在超重情况发生，所以计量超尺寸和行李超件的情况
        for(var i=0;i<comArr.length;i++){//普通行李的超尺寸的收费
            if((comArr[0][i]+comArr[1][i]+comArr[2][i])>158){
                switch (area) {
                    case "区域一":
                        numMoney=numMoney+980;
                        break;
                    case "区域二":
                        numMoney=numMoney+690;
                        break;
                    case "区域三":
                        numMoney=numMoney+520;
                        break;
                    case "区域四":
                        numMoney=numMoney+1040;
                        break;
                    case "区域五":
                        numMoney=numMoney+520;
                        break;
                }
            }
        }
        //计算超件，charge不算进超件范围
        var morelength=comArr[3].length+free.length-2;
        switch (area) {
            case "区域一":
                if(morelength==1)
                    numMoney=numMoney+1400;
                else  if(morelength==2)
                    numMoney=numMoney+3400;
                else if(morelength>2)
                    numMoney=numMoney+3400+3000*(morelength-2);
                break;
            case "区域二":
                if(morelength==1)
                    numMoney=numMoney+1100;
                else  if(morelength==2)
                    numMoney=numMoney+2200;
                else if(morelength>2)
                    numMoney=numMoney+2200+1590*(morelength-2);
                break;
            case "区域三":
                if(morelength==1)
                    numMoney=numMoney+1170;
                else  if(morelength==2)
                    numMoney=numMoney+2340;
                else if(morelength>2)
                    numMoney=numMoney+2340+1590*(morelength-2);
                break;
            case "区域四":
                if(morelength==1)
                    numMoney=numMoney+1380;
                else  if(morelength==2)
                    numMoney=numMoney+2760;
                else if(morelength>2)
                    numMoney=numMoney+2760+1590*(morelength-2);
                break;
            case "区域五":
                if(morelength==1)
                    numMoney=numMoney+830;
                else  if(morelength==2)
                    numMoney=numMoney+1930;
                else if(morelength>2)
                    numMoney=numMoney+1930+1590*(morelength-2);
                break;
        }
    }
    else//所有经济舱统一标准
    {
        for(var i=0;i<comArr.length;i++){//普通行李的超重或者超尺寸的收费
            if(comArr[3][i]>23||(comArr[0][i]+comArr[1][i]+comArr[2][i])>158){
                switch (area) {
                    case "区域一":
                        numMoney=numMoney+980;
                        break;
                    case "区域二":
                        numMoney=numMoney+690;
                        break;
                    case "区域三":
                        numMoney=numMoney+520;
                        break;
                    case "区域四":
                        numMoney=numMoney+1040;
                        break;
                    case "区域五":
                        numMoney=numMoney+520;
                        break;
                }
            }
        }
        //可以算入免费行李额的超重特殊行李
        for(var i=0;i<free.length;i++)
        {
            if(free[i]>23)
            {
                switch (area) {
                    case "区域一":
                        numMoney=numMoney+980;
                        break;
                    case "区域二":
                        numMoney=numMoney+690;
                        break;
                    case "区域三":
                        numMoney=numMoney+520;
                        break;
                    case "区域四":
                        numMoney=numMoney+1040;
                        break;
                    case "区域五":
                        numMoney=numMoney+520;
                        break;
                }
            }
        }
        //计算超件，charge不算进超件范围
        var morelength=comArr[3].length+free.length-2;
        switch (area) {
            case "区域一":
                if(morelength==1)
                    numMoney=numMoney+1400;
                else  if(morelength==2)
                    numMoney=numMoney+3400;
                else if(morelength>2)
                    numMoney=numMoney+3400+3000*(morelength-2);
                break;
            case "区域二":
                if(morelength==1)
                    numMoney=numMoney+1100;
                else  if(morelength==2)
                    numMoney=numMoney+2200;
                else if(morelength>2)
                    numMoney=numMoney+2200+1590*(morelength-2);
                break;
            case "区域三":
                if(morelength==1)
                    numMoney=numMoney+1170;
                else  if(morelength==2)
                    numMoney=numMoney+2340;
                else if(morelength>2)
                    numMoney=numMoney+2340+1590*(morelength-2);
                break;
            case "区域四":
                if(morelength==1)
                    numMoney=numMoney+1380;
                else  if(morelength==2)
                    numMoney=numMoney+2760;
                else if(morelength>2)
                    numMoney=numMoney+2760+1590*(morelength-2);
                break;
            case "区域五":
                if(morelength==1)
                    numMoney=numMoney+830;
                else  if(morelength==2)
                    numMoney=numMoney+1930;
                else if(morelength>2)
                    numMoney=numMoney+1930+1590*(morelength-2);
                break;
        }

    }
    return Math.round(numMoney);
}

function Caculate(){
    //alert("计算！");
    var temp;
    var fly=document.getElementById("inout");
    if(fly[fly.selectedIndex].text=="国内航线") {
        //alert("国内航线");
        temp=inCountry();
    }
    else{
        //alert("国外航线");
        temp=outCountry();
    }
    if(temp!="areaError"||temp!="typeError"||temp!="sizeError"){
        alert("所需费用为（人民币）："+temp);
        comArr[0].length=0;
        comArr[1].length=0;
        comArr[2].length=0;
        comArr[3].length=0;
        free.length=0;
        charge.length=0;
        baby.length=0;
        disable.length=0;
    }
}