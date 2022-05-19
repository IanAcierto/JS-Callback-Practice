function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(){
        function moveWithArrowKeys(left, bottom, callback) {
            let direction = null
            let x = left
            let y = bottom
        
            function moveCharacter(){
              if (direction === 'west'){
                x = x-1
              }
              if (direction === 'east'){
                x = x+1
              }
              if (direction === 'north'){
                y = y+1
              }
              if (direction === 'south'){
                y = y-1
              }
              element.style.left = x + 'px'
              element.style.bottom = y + 'px'
          }
        setInterval(moveCharacter, 1)
        }
        //set keys to direction
        document.addEventListener('keydown', function(e){
          if (e.repeat)return;
          if(e.key ='arrowleft'){
            direction = 'west'
          }
          if (e.key ='arrowright'){
            direction = 'east'
          }
          if (e.key ='arrowup'){
            direction = 'north'
          }
          if (e.key ='arrowdown'){
            direction = 'south'
          }
          callback(direction)
        })
        //no direction when no key is pressed
        document.addEventListener('keyup', function(e){
          direction = null
          callback(direction)
        })
        
        setInterval(moveCharacter, 1)
    }
    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}