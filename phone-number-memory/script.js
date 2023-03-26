//let numbers = ['9659489271', '9659433946', '9870970561']
let numbers = ['9177724582', '9373044429', '9280071807', '3478252748', '3478251466', '9177787773', '9373532246', '9373687244', '9276363619', '9279513829', '9373290237', '9659227994', '3478273071', '9270348544', '9509309001', '9876108738', '9625360222', '9373690100', '9504891564', '9373686162', '9297538719', '9963887391', '9659297231', '9297538711', '9373105503', '9050030585', '9870970561', '9870948420', '9374712634', '9875827298', '9152183338', '9279461908', '9659489271', '9373157983', '9272372424', '9264776316', '9373471114', '9872298712', '9173528716', '9373387716', '9270820251', '9279403219', '9174929447', '9374712677', '9279273434', '9690243303', '9277893406', '9378593917', '9173523443', '9373518969', '9372950613', '9279275322', '9375996517', '9241632924', '9297543286', '9273169999', '9173644010', '9656477272', '9272340461', '9373023898', '9378381086', '9174144889', '9659236979', '9272367862', '9279640226', '9999635555', '9649622859', '9371541717', '9374814222', '9173882102', '9629824271', '9279423856', '9775857113', '9242066836', '9613609727', '9279299870', '9279621999', '9177556723', '9273171414', '9273338405', '9625388727', '9371645090', '9992577046', '9129126334', '9373337675', '9603885882', '9174283446', '9279660407', '9177890753', '9875803084', '9378411787', '9371634039', '9378388368', '9961010757', '9625400245', '9625373812', '9276364658', '9279588453', '9656603278', '9374709990', '9053197224', '9273072345', '9373508212', '9272334603', '9373411182', '9297577987', '9279410550', '9053087705', '9297543287', '9279554252', '9504690107', '9373023360', '9374852442', '9378405707', '9134613119', '9196187070', '9272362280', '9373339634', '9273555992', '9209624997', '9872421070', '9625353745', '9273440340', '9273152416', '9270808197', '9872496218', '9279593745', '9279283727', '9270822654', '9373613282', '9185377081', '9279295898', '9174792028', '9177840541', '9374889052', '9629155239', '9279603855', '9373434095', '9273146672', '9825974474', '9177890753', '9373686162', '9374778784', '9273120999', '9273480357', '9173894006', '9625659783', '9279350412', '9870371482', '9174047780', '9872423123', '9373570358', '9874846769', '9273410605', '9373504077', '9632353218', '9373331418', '3478252455', '9870194677', '9273065306', '9270879232', '9870535322', '9279415120', '9867005175', '9961027717', '9659433946', '9273246969', '9177715433', '9374794730', '9872456089', '9279364134', '9061073578', '9677320422', '9603917419', '9374893106', '9613640366', '9174008996', '3478272503', '9279321357', '3478279914', '9177977788', '9177452459', '9178031897', '9196167903', '9279373923', '9297582651', '9093475415', '9371582308', '9273219217', '9196071882', '9656537888', '9174836879', '9378388609', '9610382763', '9872644213', '9177412313', '9173542262', '9273021726', '9373531027', '9279428944', '9273397972', '9173490500', '9996772957', '9656514623', '9174126914', '9625355468', '9270852837', '9965799442', '9639090028', '9610519745', '9174556760', '9373223175', '9273009555', '9690243305', '9221278606', '9374915208', '9876040010', '9373085923', '9174593395', '9173639298', '9373684939', '9279351067', '9656447323', '9173721326', '9273521912', '9179032705', '9177865862', '9373616108', '9378587999']

let numberLength = numbers.length
let i = 0
let delay = 3000

let testText = document.querySelector('#testText');
/* for(number in numbers) {
    document.write(numbers[number]+'\n');
} */
/* document.querySelector('.test__btn').addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e)
    testForm()
}) */

let btns = document.querySelectorAll('.test__btn')

btns.forEach(element => {
    element.addEventListener('click', e => {
        e.preventDefault()
        console.log(e.target.id)
        switch(e.target.id) {
            case 'testBtnB':
                backspaceLast()
            break;
            case 'testBtnE':
                testForm()
            break;
            case 'testBtn0':
                keybTyping(0)
            break;
            case 'testBtn1':
                keybTyping(1)
            break;
            case 'testBtn2':
                keybTyping(2)
            break;
            case 'testBtn3':
                keybTyping(3)
            break;
            case 'testBtn4':
                keybTyping(4)
            break;
            case 'testBtn5':
                keybTyping(5)
            break;
            case 'testBtn6':
                keybTyping(6)
            break;
            case 'testBtn7':
                keybTyping(7)
            break;
            case 'testBtn8':
                keybTyping(8)
            break;
            case 'testBtn9':
                keybTyping(9)
            break;
            default: ;
        }
    })
})


window.addEventListener('keydown', (e) => {
    e.preventDefault()
    console.log(e.key)
    switch(e.key) {
        case 'Enter':
            testForm()
        break;
        case 'Backspace':
            backspaceLast()
        break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            keybTyping(e.key)
        break;
        default: ;
    }
})

const backspaceLast = () => {
    testText.value = testText.value.slice(0, -1)
}

const keybTyping = num => {
    if(testText.value.length < 10) {
        testText.value += num;
    } else {
        alert('10 цифр должно быть')
    }
}

const setText = () => {
    document.querySelector('#seeText').innerText = numbers[i]
    document.querySelector('#testText').value = ''
    document.querySelector('#see').style.display = 'block'
    document.querySelector('#test').style.display = 'none'
    setTimeout(function() {
        clearText()
    }, delay)
    i++
}

const clearText = () => {
    document.querySelector('#see').style.display = 'none'
    document.querySelector('#test').style.display = 'block'
    document.querySelector('#testText').focus()
    document.querySelector('.bad').style.display = 'none'
    document.querySelector('.good').style.display = 'none'
}

const testForm = () => {
    let seeText = document.querySelector('#seeText').innerText.trim();
    let testText = document.querySelector('#testText').value.trim();
    if(seeText == testText) {
        delay -= 10
        document.querySelector('.good').style.display = 'block'
        document.querySelector('.bad').style.display = 'none'
    } else {
        delay += 10
        document.querySelector('.good').style.display = 'none'
        document.querySelector('.bad').style.display = 'block'
    }
    if(i <= numberLength) {
        setText()
    } else {
        alert('Numbers Ends')
    }
}

setText()
