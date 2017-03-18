function repeatStringNumTimes(str, num) {
  var repeat = "";
  
  if (num === 0) 
  {
    return str;
  }
  else 
  {
    for (i = 0; i < num; i++) 
    {
      repeat += str;
    }
  }
  return repeat;
}

repeatStringNumTimes("abc", 0);
