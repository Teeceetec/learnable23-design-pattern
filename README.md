# learnable23-design-pattern
In this implementation:

1.The Observer class has an update() method that is called by the Telephone class to notify the observers.

2.The Telephone class maintains a list of phone numbers (phoneNumbers) and a list of observers (observers). It has methods to add, remove, and dial phone numbers, as well as to add, remove, and notify observers.

3.Two observers are created: observer1 prints the phone number when notified, and observer2 prints a message stating that the phone number is being dialed.

4.Observers are added to the Telephone instance using the addObserver() method.

5.Phone numbers are added using the addPhoneNumber() method, removed using the removePhoneNumber() method, and dialed using the dialPhoneNumber() method. When a phone number is dialed, the observers are notified using the notifyObservers() method.
