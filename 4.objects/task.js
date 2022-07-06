function Student(name, gender, age) {
      this.name = name,
      this.gender = gender,
      this.age = age
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark){
  if (this.marks === undefined){
  this.marks = [mark];
  } else {
    this.marks.push(mark); 
  }
}

Student.prototype.addMarks = function(...args){
  if (this.marks === undefined){
    this.marks = args
  } else {for (let arg in args){
    this.marks.push(arg)
   }
  }

}

Student.prototype.getAverage = function(){
  let sum = 0;
  this.marks.forEach((element) => {
    return sum += element; 
  });
  return avg = sum/this.marks.length;
}

Student.prototype.exclude = function(reason){
  delete this.subjectName;
  delete this.marks;
  this.excluded = reason;
}