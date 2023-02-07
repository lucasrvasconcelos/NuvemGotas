let input1 = document.querySelector('#pass1')
let input2 = document.querySelector('#pass2')
let c = input1.value

input1.addEventListener('keyup', () => {
    c = input1.value
    c = c.replace(/g/ig, '_-0')
    c = c.replace(/o/ig, '_-1')
    c = c.replace(/t/ig, '_-2')
    c = c.replace(/a/ig, '_-3')
    c = c.replace(/s/ig, '_-4')
    c = c.replace(/n/ig, '_-5')
    c = c.replace(/u/ig, '_-6')
    c = c.replace(/v/ig, '_-7')
    c = c.replace(/e/ig, '_-8')
    c = c.replace(/m/ig, '_-9')

    
    c = c.replace(/_-0/ig, 'n')
    c = c.replace(/_-1/ig, 'u')
    c = c.replace(/_-2/ig, 'v')
    c = c.replace(/_-3/ig, 'e')
    c = c.replace(/_-4/ig, 'm')
    c = c.replace(/_-5/ig, 'g')
    c = c.replace(/_-6/ig, 'o')
    c = c.replace(/_-7/ig, 't')
    c = c.replace(/_-8/ig, 'a')
    c = c.replace(/_-9/ig, 's')

    input2.value = c
})