pragma solidity ^0.5.1;

contract helloWorld {


 function renderHelloWorld () public pure returns (string memory) {

   return 'helloWorld';

 }

 function IsMultibale(uint n, uint m) public view returns (bool) {
     bool x;
     if (n % m == 0) {
         x = true;
     } else {
         x = false;
     }
     return x;
 }
 
 function Max(uint n, uint m) public view returns (uint) {
     uint y;
     if (n > m) {
         y = n;
     } else {
         y = m;
     }
     return y;
 }
 
 
}
