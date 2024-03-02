// The Oberver class created!!..
class Observer {
    update(phoneNumber) {
      console.log(`Now Dialing ${phoneNumber}`)
    }
}

// Telephone class created!!..
  class Telephone {
   
     constructor() {
      this.telephoneNumbers = new Set();
      this.observers = [];
  }

   //Method created to add an observer!!..
      addObserver(observer){
       this.observers.push(observer);
    }

    //Method created to remove an observer from the list!!..
      removeObserver(observer) {
         this.observers = this.observers.filter((obs)=> obs !== observer);
      }

      //Method created to notify observers!!..
       notifyObserver(phoneNumber) {
          this.observers.forEach((observ) => observ.update(phoneNumber));
       }

       //Method created to add phoneNumbera!!.
        addPhoneNumber(phoneNumber) {
           this.telephoneNumbers.add(phoneNumber);
        }

        //Method ceated to remove phoneNumbers
          deletePhoneNumber(phoneNumber) {
            this.telephoneNumbers.delete(phoneNumber);
          }

        //Method created to dial phoneNumbers!!..
         dialPhoneNumber(phoneNumber) {
             if(this.telephoneNumbers.has(phoneNumber)) {
              console.log(`You're Dialing ${phoneNumber}`);
              this.notifyObserver(phoneNumber);
             } else {
              console.log(`Phone number ${phoneNumber} not found.`);
             }
         }
}

    //instance of telePhone 
      const telephone = new Telephone();

      // create Observers
        const observer1 = new Observer();
        const observer2 =  {
           update: function(phoneNumber) {
             console.log(phoneNumber);
           }
        };
        const observer3 = new Observer();
        const observer4 = new Observer();
        const observer5 = new Observer();

  //ADD observers to telephone!!..
         telephone.addObserver(observer1);
         telephone.addObserver(observer2);
         telephone.addObserver(observer3);

 //REMOVE an observer!!..
          telephone.removeObserver(observer3); 
          
  //ADD phoneNumbers!!..
          telephone.addPhoneNumber('2347023232'); 
          telephone.addPhoneNumber('2349055634'); 
          telephone.addPhoneNumber('2349065636454');        

//REMOVE phoneNumber
          telephone.deletePhoneNumber('2349055634545');
          telephone.deletePhoneNumber('2349055634');

//Dial phoneUmber 
          telephone.dialPhoneNumber('2347023232');          
          




