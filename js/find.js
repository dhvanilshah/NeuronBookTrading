Parse.initialize("IiLH73bMedzAQDrSPQ9MMYIut8AnuDAzp14FQZsT", "WIQ1jk87XOqQKuQxwWBeWI08W3I7K3LC05e8VhW3");

			$(document).ready(function(){
				$(".pagetitle").hide();
				$("#result_0").hide();
				});

// This is for search by Title
			$("#Titleform").submit(function(event){

				event.preventDefault();

				var AddBook = Parse.Object.extend("AddBook");

					var title = $("#title").val().toLowerCase();
					var titleInput = $("#title").val();
					var author = $("#author").val().toLowerCase();
					var authorInput = $("#author").val()
					var isbn = $("#isbn").val();

				$('#resultFor').text(titleInput);
				$('.pagetitle').show();

				var titleQuery = new Parse.Query(AddBook);

				titleQuery.startsWith("searchTitle", title);
				titleQuery.include("owner");

				titleQuery.find({
  					success: function(results) {
	    				console.log("Successfully retrieved " + results.length + " books");
	    				$(".theForms").remove();

	    				

						
						 // Do something with the returned Parse.Object values
					    for (var i = 0; i < results.length; i++) { 
					      var object = results[i];

					      var Title = object.get('title');
					      var Author = object.get('author');
					      var Condition = object.get('condition');
					      var Edition = object.get('edition'); 
					      var owner = object.get('owner');
					      var ownerId = owner.id;
					      var school = owner.get('school')

					      // var userId = owner.get('objectId');

					      console.log(ownerId);
					      console.log(school);
					      console.log(Author);
					      console.log(Condition);
					      console.log(Title);
					      console.log(titleInput);




					      // This is the magical code which creates a new entry everytime a result comes up!!
					      var result = $("#sample-result").clone();
					      result.appendTo(".search-results");

					      var link = 'offer.html#' + 'book_title=' + encodeURIComponent(Title) + '&' + 'edition=' + encodeURIComponent(Edition) + '&' + 'owner=' + encodeURIComponent(ownerId) ;	
					  	  $("#connect").attr('href', link);

					      $('#bookName').text(Title + " (Edition No. "+ Edition + ")");
					      $('#author').text("By: " + Author);
					      $('#condition').text("Condition: " + Condition);
					      $('#owner').text("Owned by " + ownerId + " at " + school);
					      result.show();	
					    }

					    // location.href="findResults.html";
    				
    				}, //this closes success

				  error: function(error) {
				  	console.log("Error: " + error.code + " " + error.message);
					  	}
			});
		});
// // This is for Search by Author

// 			$("#Authorform").submit(function(event){

// 				event.preventDefault();

// 				var AddBook = Parse.Object.extend("AddBook");

// 					var title = $("#title").val().toLowerCase();
// 					var author = $("#author").val().toLowerCase();
// 					var isbn = $("#isbn").val();

// 				var authorQuery = new Parse.Query(AddBook);


// 				authorQuery.startsWith("searchAuthor", author);
// 				authorQuery.include("owner");

// 				authorQuery.find({
//   					success: function(results) {
// 	    				console.log("Successfully retrieved " + results.length + " books");
// 	    				$(".theForms").remove();
						
// 						 // Do something with the returned Parse.Object values
// 					    for (var i = 0; i < results.length; i++) { 
// 					      var object = results[i];

// 					      var Title = object.get('title');
// 					      var Author = object.get('author');
// 					      var Condition = object.get('condition');
// 					      var Edition = object.get('edition');

// 					      var owner = object.get('owner'); 

					      
// 					      console.log(owner.get('username'));
// 					      console.log(Author);
// 					      console.log(Condition);
// 					      console.log(Title);

// 					      // This is the magical code which creates a new entry everytime a result comes up!!
// 					      $("#result_0").clone().appendTo("body");
// 					      $("#result_0").show();
// 					      $('#bookName').text(Title + "(Edition No. "+ Edition + ")");
// 					      $('#author').text("By: " + Author);
// 					      $('#condition').text("Condition: " + Condition);			

// 					    }
    				
//     				}, //this closes success

// 				  error: function(error) {
// 				  	console.log("Error: " + error.code + " " + error.message);
// 				  }
// 			});	
// 		});			
// // tis is for search by isbn
// 			$("#Isbnform").submit(function(event){

// 				event.preventDefault();

// 				var AddBook = Parse.Object.extend("AddBook");

// 					var title = $("#title").val().toLowerCase();
// 					var author = $("#author").val().toLowerCase();
// 					var isbn = $("#isbn").val();

// 				var isbnQuery = new Parse.Query(AddBook);

// 				isbnQuery.startsWith("isbn", isbn);
// 				isbnQuery.include("owner");

// 				isbnQuery.find({
//   					success: function(results) {
// 	    				console.log("Successfully retrieved " + results.length + " books");
// 	    				$(".theForms").remove();
						
// 						 // Do something with the returned Parse.Object values
// 					    for (var i = 0; i < results.length; i++) { 
// 					      var object = results[i];

// 					      var Title = object.get('title');
// 					      var Author = object.get('author');
// 					      var Condition = object.get('condition');
// 					      var Edition = object.get('edition'); 
// 					      var owner = object.get('owner');
						  
// 						  console.log(owner.get('username'));
// 					      console.log(object.get('owner'));
// 					      console.log(Author);
// 					      console.log(Condition);
// 					      console.log(Title);

// 					      // This is the magical code which creates a new entry everytime a result comes up!!
// 					      $("#result_0").clone().appendTo("body");
// 					      $("#result_0").show();
// 					      $('#bookName').text(Title + "(Edition No. "+ Edition + ")");
// 					      $('#author').text("By: " + Author);
// 					      $('#condition').text("Condition: " + Condition);			

// 					    }
    				
//     				}, //this closes success

// 				  error: function(error) {
// 				  	console.log("Error: " + error.code + " " + error.message);
// 				  }
// 			});
// 		});