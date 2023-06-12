valor = document.getElementById("val")
resultado = document.getElementById("result")
btn = document.getElementById("btn")
medidas1 = document.getElementById("medidas1")
medidas2 = document.getElementById("medidas2")


btn.addEventListener("click", function (e) {
  e.preventDefault()

  valor = parseFloat(valor.value)
  let conversor = medidas1.value
  let convertido = medidas2.value
  let conta = 0

  if (conversor == 01 || conversor == 02 || conversor == 03) {
    if (conversor == 01) {
      if (convertido == 02) {
        conta = valor - 273.15
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de Kelvin para Graus Celsius é ${conta}`

      } else if (convertido == 03) {
        conta = 1.8 * (valor - 273.15) + 32
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de Kelvin para Fahrenheit é ${conta}`
      } else {
        resultado.innerHTML = `Selecione um tipo compativel para realizar a conversão`
      }
    } else if (conversor == 02) {
      if (convertido == 01) {
        conta = valor + 273.15
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de  Graus Celsius para Kelvin é ${conta}`

      } else if (convertido == 03) {
        conta = 1.8 * valor + 32
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de Graus Celsius para Fahrenheit é ${conta}`
      } else {
        resultado.innerHTML = `Selecione um tipo compativel para realizar a conversão`
      }
    } else if (conversor == 03) {
      if (convertido == 01) {
        conta = (valor - 32) * 1.8 + 273, 15
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de  Fahrenheit para Kelvin é ${conta}`

      } else if (convertido == 02) {
        conta = (valor - 32) * 1.8
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de Fahrenheit para Graus Celsius é ${conta}`
      } else {
        resultado.innerHTML = `Selecione um tipo compativel para realizar a conversão`
      }
    }
  } else if (conversor == 11 || conversor == 12 || conversor == 13 || conversor == 14 || conversor == 15 ||
    conversor == 16 || conversor == 17) {
    if (conversor == 11) {
      if (convertido == 12) {
        conta = valor * 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de Km para hm é ${conta}`
      } else if (convertido == 13) {
        conta = valor * 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de Km para dam é ${conta}`
      } else if (convertido == 14) {
        conta = valor * 1000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de Km para metro é ${conta}`
      } else if (convertido == 15) {
        conta = valor * 10000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de Km para dm é ${conta}`
      } else if (convertido == 16) {
        conta = valor * 100000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de Km para cm é ${conta}`
      } else if (convertido == 17) {
        conta = valor * 1000000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de Km para mm é ${conta}`
      } else {
        resultado.innerHTML = `Selecione um tipo compativel para realizar a conversão`
      }
    } else if (conversor == 12) {
      if (convertido == 11) {
        conta = valor / 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de hm para km é ${conta}`
      } else if (convertido == 13) {
        conta = valor * 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de hm para dam é ${conta}`
      } else if (convertido == 14) {
        conta = valor * 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de hm para metro é ${conta}`
      } else if (convertido == 15) {
        conta = valor * 1000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de hm para dm é ${conta}`
      } else if (convertido == 16) {
        conta = valor * 10000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de hm para cm é ${conta}`
      } else if (convertido == 17) {
        conta = valor * 100000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de hm para mm é ${conta}`
      } else {
        resultado.innerHTML = `Selecione um tipo compativel para realizar a conversão`
      }
    } else if (conversor == 13) {
      if (convertido == 11) {
        conta = valor / 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dam para km é ${conta}`
      } else if (convertido == 12) {
        conta = valor / 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dam para hm é ${conta}`
      } else if (convertido == 14) {
        conta = valor * 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dam para metro é ${conta}`
      } else if (convertido == 15) {
        conta = valor * 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dam para dm é ${conta}`
      } else if (convertido == 16) {
        conta = valor * 1000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dam para cm é ${conta}`
      } else if (convertido == 17) {
        conta = valor * 10000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dam para mm é ${conta}`
      } else {
        resultado.innerHTML = `Selecione um tipo compativel para realizar a conversão`
      }
    } else if (conversor == 14) {
      if (convertido == 11) {
        conta = valor / 1000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de m para km é ${conta}`
      } else if (convertido == 12) {
        conta = valor / 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de m para hm é ${conta}`
      } else if (convertido == 13) {
        conta = valor / 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de m para dam é ${conta}`
      } else if (convertido == 15) {
        conta = valor * 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de m para dm é ${conta}`
      } else if (convertido == 16) {
        conta = valor * 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de m para cm é ${conta}`
      } else if (convertido == 17) {
        conta = valor * 1000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de m para mm é ${conta}`
      } else {
        resultado.innerHTML = `Selecione um tipo compativel para realizar a conversão`
      }
    } else if (conversor == 15) {
      if (convertido == 11) {
        conta = valor / 10000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dm para km é ${conta}`
      } else if (convertido == 12) {
        conta = valor / 1000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dm para hm é ${conta}`
      } else if (convertido == 13) {
        conta = valor / 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dm para dam é ${conta}`
      } else if (convertido == 14) {
        conta = valor / 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dm para m é ${conta}`
      } else if (convertido == 16) {
        conta = valor * 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dm para cm é ${conta}`
      } else if (convertido == 17) {
        conta = valor * 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dm para mm é ${conta}`
      } else {
        resultado.innerHTML = `Selecione um tipo compativel para realizar a conversão`
      }
    } else if (conversor == 16) {
      if (convertido == 11) {
        conta = valor / 100000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de cm para km é ${conta}`
      } else if (convertido == 12) {
        conta = valor / 10000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de cm para hm é ${conta}`
      } else if (convertido == 13) {
        conta = valor / 1000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de cm para dam é ${conta}`
      } else if (convertido == 14) {
        conta = valor / 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de cm para m é ${conta}`
      } else if (convertido == 15) {
        conta = valor / 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de cm para dm é ${conta}`
      } else if (convertido == 17) {
        conta = valor * 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de cm para mm é ${conta}`
      } else {
        resultado.innerHTML = `Selecione um tipo compativel para realizar a conversão`
      }
    } else if (conversor == 17) {
      if (convertido == 11) {
        conta = valor / 1000000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de mm para km é ${conta}`
      } else if (convertido == 12) {
        conta = valor / 100000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de mm para hm é ${conta}`
      } else if (convertido == 13) {
        conta = valor / 10000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de mm para dam é ${conta}`
      } else if (convertido == 14) {
        conta = valor / 1000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de mm para m é ${conta}`
      } else if (convertido == 15) {
        conta = valor / 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de mm para dm é ${conta}`
      } else if (convertido == 16) {
        conta = valor / 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de mm para cm é ${conta}`
      } else {
        resultado.innerHTML = `Selecione um tipo compativel para realizar a conversão`
      }
    }
  } else if (conversor == 21 || conversor == 22 || conversor == 23 ||
    conversor == 24 || conversor == 25 || conversor == 26 || conversor == 27) {
    if (conversor == 21) {
      if (convertido == 22) {
        conta = valor * 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de Kl para hl é ${conta}`
      } else if (convertido == 23) {
        conta = valor * 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de Kl para dal é ${conta}`
      } else if (convertido == 24) {
        conta = valor * 1000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de Kl para litro é ${conta}`
      } else if (convertido == 25) {
        conta = valor * 10000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de Kl para dl é ${conta}`
      } else if (convertido == 26) {
        conta = valor * 100000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de Kl para cl é ${conta}`
      } else if (convertido == 27) {
        conta = valor * 1000000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de Kl para ml é ${conta}`
      } else {
        resultado.innerHTML = `Selecione um tipo compativel para realizar a conversão`
      }
    } else if (conversor == 22) {
      if (convertido == 21) {
        conta = valor / 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de hl para kl é ${conta}`
      } else if (convertido == 23) {
        conta = valor * 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de hl para dal é ${conta}`
      } else if (convertido == 24) {
        conta = valor * 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de hl para litro é ${conta}`
      } else if (convertido == 25) {
        conta = valor * 1000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de hl para dl é ${conta}`
      } else if (convertido == 26) {
        conta = valor * 10000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de hl para cl é ${conta}`
      } else if (convertido == 27) {
        conta = valor * 100000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de hl para ml é ${conta}`
      } else {
        resultado.innerHTML = `Selecione um tipo compativel para realizar a conversão`
      }
    } else if (conversor == 23) {
      if (convertido == 21) {
        conta = valor / 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dal para kl é ${conta}`
      } else if (convertido == 22) {
        conta = valor / 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dal para hl é ${conta}`
      } else if (convertido == 24) {
        conta = valor * 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dal para litro é ${conta}`
      } else if (convertido == 25) {
        conta = valor * 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dal para dl é ${conta}`
      } else if (convertido == 26) {
        conta = valor * 1000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dal para cl é ${conta}`
      } else if (convertido == 27) {
        conta = valor * 10000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dal para ml é ${conta}`
      } else {
        resultado.innerHTML = `Selecione um tipo compativel para realizar a conversão`
      }
    } else if (conversor == 24) {
      if (convertido == 21) {
        conta = valor / 1000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de l para kl é ${conta}`
      } else if (convertido == 22) {
        conta = valor / 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de l para hl é ${conta}`
      } else if (convertido == 23) {
        conta = valor / 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de l para dal é ${conta}`
      } else if (convertido == 25) {
        conta = valor * 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de l para dl é ${conta}`
      } else if (convertido == 26) {
        conta = valor * 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de l para cl é ${conta}`
      } else if (convertido == 27) {
        conta = valor * 1000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de l para ml é ${conta}`
      } else {
        resultado.innerHTML = `Selecione um tipo compativel para realizar a conversão`
      }
    } else if (conversor == 25) {
      if (convertido == 21) {
        conta = valor / 10000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dl para kl é ${conta}`
      } else if (convertido == 22) {
        conta = valor / 1000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dl para hl é ${conta}`
      } else if (convertido == 23) {
        conta = valor / 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dl para dal é ${conta}`
      } else if (convertido == 24) {
        conta = valor / 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dl para l é ${conta}`
      } else if (convertido == 26) {
        conta = valor * 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dl para cl é ${conta}`
      } else if (convertido == 27) {
        conta = valor * 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dl para ml é ${conta}`
      } else {
        resultado.innerHTML = `Selecione um tipo compativel para realizar a conversão`
      }
    } else if (conversor == 26) {
      if (convertido == 21) {
        conta = valor / 100000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de cl para kl é ${conta}`
      } else if (convertido == 22) {
        conta = valor / 10000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de cl para hl é ${conta}`
      } else if (convertido == 23) {
        conta = valor / 1000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de cl para dal é ${conta}`
      } else if (convertido == 24) {
        conta = valor / 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de cl para l é ${conta}`
      } else if (convertido == 25) {
        conta = valor / 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de cl para dl é ${conta}`
      } else if (convertido == 27) {
        conta = valor * 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de cl para ml é ${conta}`
      } else {
        resultado.innerHTML = `Selecione um tipo compativel para realizar a conversão`
      }
    } else if (conversor == 27) {
      if (convertido == 21) {
        conta = valor / 1000000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de ml para kl é ${conta}`
      } else if (convertido == 22) {
        conta = valor / 100000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de ml para hl é ${conta}`
      } else if (convertido == 23) {
        conta = valor / 10000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de ml para dal é ${conta}`
      } else if (convertido == 24) {
        conta = valor / 1000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de ml para l é ${conta}`
      } else if (convertido == 25) {
        conta = valor / 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de ml para dl é ${conta}`
      } else if (convertido == 26) {
        conta = valor / 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de ml para cl é ${conta}`
      } else {
        resultado.innerHTML = `Selecione um tipo compativel para realizar a conversão`
      }
    }
  } else if (conversor == 31 || conversor == 32 || conversor == 33 ||
    conversor == 34 || conversor == 35 || conversor == 36 || conversor == 37) {
    if (conversor == 31) {
      if (convertido == 32) {
        conta = valor * 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de Kg para hg é ${conta}`
      } else if (convertido == 33) {
        conta = valor * 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de Kg para dag é ${conta}`
      } else if (convertido == 34) {
        conta = valor * 1000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de Kg para grama é ${conta}`
      } else if (convertido == 35) {
        conta = valor * 10000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de Kg para dg é ${conta}`
      } else if (convertido == 36) {
        conta = valor * 100000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de Kg para cg é ${conta}`
      } else if (convertido == 37) {
        conta = valor * 1000000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de Kg para mg é ${conta}`
      } else {
        resultado.innerHTML = `Selecione um tipo compativel para realizar a conversão`
      }
    } else if (conversor == 32) {
      if (convertido == 31) {
        conta = valor / 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de hg para kg é ${conta}`
      } else if (convertido == 33) {
        conta = valor * 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de hg para dag é ${conta}`
      } else if (convertido == 34) {
        conta = valor * 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de hg para grama é ${conta}`
      } else if (convertido == 35) {
        conta = valor * 1000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de hg para dg é ${conta}`
      } else if (convertido == 36) {
        conta = valor * 10000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de hg para cg é ${conta}`
      } else if (convertido == 37) {
        conta = valor * 100000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de hg para mg é ${conta}`
      } else {
        resultado.innerHTML = `Selecione um tipo compativel para realizar a conversão`
      }
    } else if (conversor == 33) {
      if (convertido == 31) {
        conta = valor / 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dag para kg é ${conta}`
      } else if (convertido == 32) {
        conta = valor / 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dag para hg é ${conta}`
      } else if (convertido == 34) {
        conta = valor * 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dag para grama é ${conta}`
      } else if (convertido == 35) {
        conta = valor * 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dag para dg é ${conta}`
      } else if (convertido == 36) {
        conta = valor * 1000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dag para cg é ${conta}`
      } else if (convertido == 37) {
        conta = valor * 10000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dag para mg é ${conta}`
      } else {
        resultado.innerHTML = `Selecione um tipo compativel para realizar a conversão`
      }
    } else if (conversor == 34) {
      if (convertido == 31) {
        conta = valor / 1000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de g para kg é ${conta}`
      } else if (convertido == 32) {
        conta = valor / 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de g para hg é ${conta}`
      } else if (convertido == 33) {
        conta = valor / 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de g para dag é ${conta}`
      } else if (convertido == 35) {
        conta = valor * 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de g para dg é ${conta}`
      } else if (convertido == 36) {
        conta = valor * 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de g para cg é ${conta}`
      } else if (convertido == 37) {
        conta = valor * 1000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de g para mg é ${conta}`
      } else {
        resultado.innerHTML = `Selecione um tipo compativel para realizar a conversão`
      }
    } else if (conversor == 35) {
      if (convertido == 31) {
        conta = valor / 10000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dg para kg é ${conta}`
      } else if (convertido == 32) {
        conta = valor / 1000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dg para hg é ${conta}`
      } else if (convertido == 33) {
        conta = valor / 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dg para dag é ${conta}`
      } else if (convertido == 34) {
        conta = valor / 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dg para g é ${conta}`
      } else if (convertido == 36) {
        conta = valor * 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dg para cg é ${conta}`
      } else if (convertido == 37) {
        conta = valor * 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de dg para mg é ${conta}`
      } else {
        resultado.innerHTML = `Selecione um tipo compativel para realizar a conversão`
      }
    } else if (conversor == 36) {
      if (convertido == 31) {
        conta = valor / 100000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de cg para kg é ${conta}`
      } else if (convertido == 32) {
        conta = valor / 10000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de cg para hg é ${conta}`
      } else if (convertido == 33) {
        conta = valor / 1000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de cg para dag é ${conta}`
      } else if (convertido == 34) {
        conta = valor / 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de cg para g é ${conta}`
      } else if (convertido == 35) {
        conta = valor / 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de cg para dg é ${conta}`
      } else if (convertido == 37) {
        conta = valor * 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de cg para mg é ${conta}`
      } else {
        resultado.innerHTML = `Selecione um tipo compativel para realizar a conversão`
      }
    } else if (conversor == 37) {
      if (convertido == 31) {
        conta = valor / 1000000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de mg para kg é ${conta}`
      } else if (convertido == 32) {
        conta = valor / 100000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de mg para hg é ${conta}`
      } else if (convertido == 33) {
        conta = valor / 10000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de mg para dag é ${conta}`
      } else if (convertido == 34) {
        conta = valor / 1000
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de mg para g é ${conta}`
      } else if (convertido == 35) {
        conta = valor / 100
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de mg para dg é ${conta}`
      } else if (convertido == 36) {
        conta = valor / 10
        conta = conta.toFixed(2)
        resultado.innerHTML = `O resultado da conversão de mg para cg é ${conta}`
      } else {
        resultado.innerHTML = `Selecione um tipo compativel para realizar a conversão`
      }
    }
  }




})