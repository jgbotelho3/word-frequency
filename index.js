const Translate = {
  button: document.querySelector('.btn'),
  textarea: document.querySelector('.textarea'),
  count: {},
  keys: [],

  getText () {
    const text = Translate.textarea.value.toLowerCase().replace(/[^\w\s]/g, '')
    const words = text.split(' ').sort()

    for (let i = 0; i < words.length; i++) {
      let word = words[i]
      if (Translate.count[word] === undefined) {
        Translate.count[word] = 1
        Translate.keys.push(word)
      } else {
        Translate.count[word] = Translate.count[word] + 1
      }
    }

    Translate.keys.sort(Translate.compare)

    for (let i = 0; i < Translate.keys.length; i++) {
      let key = Translate.keys[i]
      Translate.setupElements(key, Translate.count[key])
    }
  },

  //Organize the keys DESC
  compare (value1, value2) {
    let countA = Translate.count[value1]
    let countB = Translate.count[value2]
    return countB - countA
  },

  setupElements (key, count) {
    const tbody = document.querySelector('tbody')

    const tr = document.createElement('tr')
    const th = document.createElement('th')
    const td = document.createElement('td')

    compactResult = []
    for (let i=0; i < 5; i++){
      compactResult.push(Translate.keys[i])
    }

    for (let i = 0; i < compactResult.length; i++) {
      th.setAttribute('scope', 'row')
      th.innerHTML = key
      td.innerHTML = count
      tr.appendChild(th)
      tr.appendChild(td)
      tbody.appendChild(tr)
    }
  }
}
