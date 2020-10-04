import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-calendar",
    templateUrl: "./calendar.html",
    styleUrls: ["./calendar.scss"]
})
export class CalendarComponent implements OnInit {

    month: string[] = ['January', 'February', 'March',
                        'April', 'May', 'June',
                        'July', 'August', 'September',
                        'October', 'November', 'December'];
    days: string[] = ["S", "M", "T", "W", "T", "F", "S"]

    userDate;

    nowDate; nowMonth; nowYear; nowMonthName;

    FDM; FDMName; FDMNum;

    LDM; LDMName; LDMNum ;

    prevMonthNums = [];
    nowMonthNums = [];
    nextMonthNums = [];

    date;

    alert(day, nowMonthName) {
        alert(`${nowMonthName} ${day}th`);
    }

    addMonth(value: number) {
        this.nowDate = new Date(this.nowDate.getFullYear(), this.nowDate.getMonth() + value);
        console.log(this.nowDate);
        this.calendarRender();
    }

    calendarRender() {

        this.nowMonth = this.nowDate.getMonth();
        this.nowYear = this.nowDate.getFullYear();

        this.nowMonthName = this.month[this.nowMonth];

        this.FDM = new Date(this.nowYear, this.nowMonth, 1);
        this.FDMName = this.FDM.getDay();
        this.FDMNum = this.FDM.getDate();
    
        this.LDM = new Date(this.nowYear, this.nowMonth+ 1, 0);
        this.LDMName = this.LDM.getDay();
        this.LDMNum = this.LDM.getDate();
        
        this.prevMonthNums = [];
        this.nowMonthNums = [];
        this.nextMonthNums = [];

        for(let i=0; i<this.FDMName; i++) {
            this.prevMonthNums[i] = new Date(this.nowYear, this.nowMonth, -this.FDMName + i + 1).getDate();
        }

        for(let i=0; i<this.LDMNum; i++) {
            if (i+1 < 10) {
                this.nowMonthNums[i] = `0${i+1}`;
            } else {
                this.nowMonthNums[i] = `${i+1}`;
            }
        }

        for(let i=0; i<6-this.LDMName; i++) {
            this.date =  new Date(this.nowYear, this.nowMonth + 1, i+1).getDate();

            if(this.date < 10) {
                this.nextMonthNums[i] = `0${this.date}`;
            } else {
                this.nextMonthNums[i] = `${this.date}`;
            }
        }

    }

    ngOnInit() {
        this.userDate = new Date();
        this.nowDate = new Date();

        this.calendarRender();
    }
}