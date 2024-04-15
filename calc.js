function calc() {
  var formater = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
  var total = 0
  var resp = document.getElementById('resp')
  var name = document.getElementById('iname')
  var phone = document.getElementById('iphone')
  var mail = document.getElementById('imail')
  resp.innerHTML = ''
  if (name.value.length == 0 || phone.value.length == 0 || mail.value.length == 0){
    alert('Por favor,digite seus dados')
  } else {
  resp.innerHTML += `<p>Caro <strong>${name.value}</strong></p><p>Segue os dados do seu pedido</p><p>O seu pedido é:</p>`
  var dishes = document.getElementsByName('quantity')
  for (var input of dishes) {
    var prato = input.id
    var price = input.getAttribute('data-price')
    var quant = input.value
    if (quant != 0) {
      resp.innerHTML += `<li>Prato: ${prato}, Preço unitário: ${formater.format(price)} - Quantidade ${quant} - Total ${formater.format(Number(price) * Number(quant))} <br>`
      total += Number(price) * Number(quant)
    }
  }
  resp.innerHTML += `<p><strong>Preço final: ${formater.format(total)}</strong></p>`
  }
}