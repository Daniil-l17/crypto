const Accordion = document.querySelectorAll('.cart0ofvdbf')


Accordion.forEach(el=>{
  el.addEventListener('click', (e)=>{
    const self = e.currentTarget
    const content = self.querySelector('.cart-active')
    self.classList.toggle('open')
    if(self.classList.contains('open')){
      content.style.maxHeight = content.scrollHeight + 'px'
    }
    else{
      content.style.maxHeight = null
    }
  })
})


  const openS = document.querySelectorAll('.asasasa')




  const ModalOpen = document.querySelector('.modalOpenmenu')
  const Modalopens = document.querySelector('.modal')
  const Modalxclose = document.querySelector('.modalClose')
  const btnBox = document.querySelector('.modal-box')

  ModalOpen.onclick = function(){
    Modalopens.classList.toggle('open')
  }
  
  Modalxclose.onclick = function(){
    Modalopens.classList.remove('open')
  }



  window.addEventListener('keydown', (e)=>{
    if(e.key === "Escape"){
      Modalopens.classList.remove('open')
    }
  })
  
  Modalopens,btnBox.addEventListener('click', event =>{
    event._isClickWithInModalopens = true
  })
  
  
  Modalopens.addEventListener('click', event=>{
    if(event._isClickWithInModalopens) return
    event.currentTarget.classList.remove('open')
  })