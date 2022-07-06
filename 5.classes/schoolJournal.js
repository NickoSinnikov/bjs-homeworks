class Student {
	constructor (name){
	this.name = name;
	}

	addMark(mark, subject){
		if(	mark > 0 && mark < 6){
			if (this.marks === undefined){
			this.marks = [{subject:subject, mark:mark}];
			} else {
				this.marks.push({subject:subject, mark:mark})	;
			}
			
			
		} else {
			return alert('Ошибка, оценка должна быть числом от 1 до 5');
		}
	
	}

	getAverageBySubject(subjectStudent){
		let markForSubj = 0;
		let count = 0;
		for (let i = 0; i<this.marks.length; i++){
			let subj = this.marks[i];
			for( let prop in subj){
				if  (subj[prop] === subjectStudent){
			 		markForSubj += subj.mark;
			 		count++;
					console.log(subj[prop] === subjectStudent)
				}
			}
		
		}
		
		if (count == 0){
			alert(`${subjectStudent} отсутствует в списке`)
		} else {
			let avg = markForSubj/count;
			return console.log(avg);
		}
	}

	getAverage(){
		let markForSubj = 0;
		let count = 0;
		for (let i = 0; i<this.marks.length; i++){
			let subj = this.marks[i];
			for( let prop in subj){
			 		markForSubj += subj.mark;
			 		count++;				
			}		
		}
		
		let avg = markForSubj/count;
		return console.log(avg.toFixed(2));
		
	}

}

const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(2, "algebra");
student.addMark(5, "algebra");
student.addMark(3, "algebra");
student.addMark(3, "geometry");
student.addMark(4, "geometry");
student.getAverageBySubject("geometry");
//student.getAverageBySubject("bioo");
student.getAverage();
console.log(student);