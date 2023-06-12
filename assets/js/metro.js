export function comprimento(conversor, convertido, valor){
    let conta=0
    if (conversor== 31){
        if(convertido==32){
            conta=valor*10
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de Kg para hg é ${conta}`
        } else if(convertido==33){
            conta=valor*100
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de Kg para dag é ${conta}`
        } else if (convertido==34) {
            conta=valor*1000
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de Kg para grama é ${conta}`
        }else if (convertido==35) {
            conta=valor*10000
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de Kg para dg é ${conta}`
        } else if (convertido==36) {
            conta=valor*100000
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de Kg para cg é ${conta}`
        } else if (convertido==37) {
            conta=valor*1000000
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de Kg para mg é ${conta}`
        }else{
            resultado.innerHTML= `Selecione um tipo compativel para realizar a conversão`
        }
    } else if (conversor==32){
        if(convertido==31){
            conta=valor/10
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de hg para kg é ${conta}`
        } else if(convertido==33){
            conta=valor*10
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de hg para dag é ${conta}`
        } else if (convertido==34) {
            conta=valor*100
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de hg para grama é ${conta}`
        }else if (convertido==35) {
            conta=valor*1000
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de hg para dg é ${conta}`
        } else if (convertido==36) {
            conta=valor*10000
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de hg para cg é ${conta}`
        } else if (convertido==37) {
            conta=valor*100000
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de hg para mg é ${conta}`
        }else{
            resultado.innerHTML= `Selecione um tipo compativel para realizar a conversão`
        }
    }else if (conversor==33){
        if(convertido==31){
            conta=valor/100
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de dag para kg é ${conta}`
        } else if(convertido==32){
            conta=valor/10
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de dag para hg é ${conta}`
        } else if (convertido==34) {
            conta=valor*10
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de dag para grama é ${conta}`
        }else if (convertido==35) {
            conta=valor*100
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de dag para dg é ${conta}`
        } else if (convertido==36) {
            conta=valor*1000
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de dag para cg é ${conta}`
        } else if (convertido==37) {
            conta=valor*10000
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de dag para mg é ${conta}`
        } else{
            resultado.innerHTML= `Selecione um tipo compativel para realizar a conversão`
        }
    } else if (conversor==34){
        if(convertido==31){
            conta=valor/1000
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de m para kg é ${conta}`
        } else if(convertido==32){
            conta=valor/100
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de m para hg é ${conta}`
        } else if (convertido==33) {
            conta=valor/10
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de m para dag é ${conta}`
        }else if (convertido==35) {
            conta=valor*10
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de m para dg é ${conta}`
        } else if (convertido==36) {
            conta=valor*100
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de m para cg é ${conta}`
        } else if (convertido==37) {
            conta=valor*1000
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de m para mg é ${conta}`
        } else{
            resultado.innerHTML= `Selecione um tipo compativel para realizar a conversão`
        }
    } else if (conversor==35){
        if(convertido==31){
            conta=valor/10000
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de dg para kg é ${conta}`
        } else if(convertido==32){
            conta=valor/1000
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de dg para hg é ${conta}`
        } else if (convertido==33) {
            conta=valor/100
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de dg para dag é ${conta}`
        }else if (convertido==34) {
            conta=valor/10
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de dg para m é ${conta}`
        } else if (convertido==36) {
            conta=valor*10
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de dg para cg é ${conta}`
        } else if (convertido==37) {
            conta=valor*100
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de dg para mg é ${conta}`
        } else{
            resultado.innerHTML= `Selecione um tipo compativel para realizar a conversão`
        }
    } else if (conversor==36){
        if(convertido==31){
            conta=valor/100000
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de cg para kg é ${conta}`
        } else if(convertido==32){
            conta=valor/10000
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de cg para hg é ${conta}`
        } else if (convertido==33) {
            conta=valor/1000
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de cg para dag é ${conta}`
        }else if (convertido==34) {
            conta=valor/100
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de cg para m é ${conta}`
        } else if (convertido==35) {
            conta=valor/10
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de cg para dg é ${conta}`
        } else if (convertido==37) {
            conta=valor*10
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de cg para mg é ${conta}`
        }else{
            resultado.innerHTML= `Selecione um tipo compativel para realizar a conversão`
        }
    } else if (conversor==37){
        if(convertido==31){
            conta=valor/1000000
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de mg para kg é ${conta}`
        } else if(convertido==32){
            conta=valor/100000
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de mg para hg é ${conta}`
        } else if (convertido==33) {
            conta=valor/10000
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de mg para dag é ${conta}`
        }else if (convertido==34) {
            conta=valor/1000
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de mg para l é ${conta}`
        } else if (convertido==35) {
            conta=valor/100
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de mg para dg é ${conta}`
        } else if (convertido==36) {
            conta=valor/10
            conta=conta.toFixed(2)
            resultado.innerHTML= `O resultado da conversão de mg para cg é ${conta}`
        } else{
            resultado.innerHTML= `Selecione um tipo compativel para realizar a conversão`
          }
    }
}
