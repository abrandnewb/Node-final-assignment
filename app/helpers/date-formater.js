import Ember from 'ember';

export function dateFormater(params,namedArgs/*, hash*/) {
       //params = new Date(params);
       /* let month = (params.getMonth())+1;//month starts from 0
        let dd = params.getDate();
        let year = params.getFullYear();
        //add 0 before a siingle date or month
        month = month<10?'0'+month:month;
        dd = dd<10?'0'+dd:dd;
        
        
        return `${dd-month-year}`;
        */
       return params;
 }

export default Ember.Helper.helper(dateFormater);

/* 

dateFormated:Ember.computed('date',function(){
        let month = this.get('date').getMonth()+1;//month starts from 0
        month = month<10?'0'+month:month;
        let dd = this.get('date').getDate();
        dd = dd<10?'0'+dd:dd;
            return `${dd}-${month}-${this.get('date').getFullYear()}`;
    }),

*/