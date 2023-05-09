document.getElementById("app");
document.getElementById("tab1").className = "highlight";

document.getElementById("tab1").addEventListener("click", highlight1);
document.getElementById("tab2").addEventListener("click", highlight2);


function highlight1() { 
 document.getElementById("app").style.display=""; document.getElementById("submit").style.display="none";
document.getElementById("tab1").className = "highlight"; document.getElementById("tab2").className = "none";
}
function highlight2() { 
document.getElementById("tab2").className = "highlight"; document.getElementById("tab1").className="none"; document.getElementById("app").style.display="none";
document.getElementById("submit").style.display="";
}
 
new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'Name',
          align: 'start',
          filterable:true,
          sortable: false,
          value: 'name',
        },
        { text: 'Score', value: 'score' },
        { text: 'Rank', value: 'rank' },
        { text: 'Problem-A', value: 'a' },
        { text: 'Problem-B', value: 'b' },
        { text: 'Problem-C', value: 'c' },
        {text :'Problem-D',value:'d'},
        {text :'Problem-E', value:'e'},
      ],
      contest: [
        {
          name: 'Bob',
          score: 159,
          rank: 6.0,
          a : 2 ,
          b : 4 ,
          c: 1,
          d:3,
          e:12,
        },
        {
          name: 'Isabella',
          score: 19,
          rank: 6,
          a : 21,
          b : 42 ,
          c: 1.0,
          d: ' -',
          e:'-',
        },
        {
          name: 'Etty',
          score: 19,
          rank: 3,
          a : 13,
          b : 4 ,
          c: 11,
          d:7,
          e:1,
        },
        {
          name: 'Chirag',
          score: 22,
          rank: 76,
          a : 20,
          b : 1,
          c: '-',
          d:'-',
          e:'-',        },
        {
          name: 'Gaberiel',
          score: 98,
          rank: 1,
          a : 23,
          b : 34 ,
          c: 1,
          d:23,
          e:12,        },
        {
          name: 'Jinal',
          score: 59,
          rank: 34,
          a : 20,
          b : 3,
          c: 98,
          d:23,
          e:1,        },
        {
          name: 'Lalita',
          score: 23,
          rank: 34,
          a : 20 ,
          b : 40,
          c: '-',
          d:'-' ,
          e:'-',
        },
      ],
    }
  }
})
  const submission= {
submissionTime: "2023-05-08 15:30:00",
	status: "Accepted",
	submittedBy: "Etty",
	problemTitle: "Scoreboard Problem",
	language: "JavaScript",
         }
document.getElementById("submission-time").textContent = submission.submissionTime;
document.getElementById("status").textContent = submission.status;
document.getElementById("submitted-by").textContent = submission.submittedBy;
document.getElementById("problem-title").textContent = submission.problemTitle;
document.getElementById("language").textContent = submission.language;

       

 