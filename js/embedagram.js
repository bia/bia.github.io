(function(){

		Embedagram = {

			access_token: '15998.b921385.4ecc223547c746d2bd2cdc7e7b3ea2c5',

			jquery: function(){
				document.write("<scr" + "ipt type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js\"></scr" + "ipt>");
				Embedagram.check(200);
			},

			check: function(wait) {
				// Continually polls to see if jQuery is loaded.
				if (typeof jQuery == "undefined") { 								// if jQuery isn't loaded yet...
					if (wait <= 5000) { 											// and we havn't given up trying...
						setTimeout("Embedagram.check(" + (wait + 200) + ")", 200); 	// set a timer to check again in 200 ms.
					} else {
						alert("Timed out while loading jQuery.")
					}
				} else {

					var user = $('#embedagram').data('user');
					var username = $('#embedagram').data('username');
					var tag = $('#embedagram').data('tag');
					var popular = $('#embedagram').data('popular');

					if( user ){
						Embedagram.users_recent(user);
					}

					if( username ){
						Embedagram.users_search(username);
					}

					if( tag ){
						Embedagram.tags_recent(tag);	
					}

					if( popular ){
						Embedagram.popular();
					}
				}
			},

			users_search: function(username){
				// Instagram API does not allow us to get users photos just by their username
				// so we need to make this extra call to grab the user.id
				$.ajax({
					url: 'https://api.instagram.com/v1/users/search/?callback=?',
					dataType: "json",
					data: {
						q: username || 'self',
						access_token: Embedagram.access_token
					},
					success:function(r){
						Embedagram.users_recent(r.data[0].id);
					}
				});
			},

			users_recent: function(id){
				$.ajax({
					url: 'https://api.instagram.com/v1/users/'+ id +'/media/recent?callback=?',
					dataType: "json",
					data: {
						count: $('#embedagram').data('count') || 5,
						access_token: Embedagram.access_token
					},
					success: Embedagram.insert
				});
			},

			tags_recent: function(tag){
				$.ajax({
					url: 'https://api.instagram.com/v1/tags/'+ tag +'/media/recent?callback=?',
					dataType: "json",
					data: {
						count: $('#embedagram').data('count') || 5,
						access_token: Embedagram.access_token
					},
					success: Embedagram.insert
				});
			},

			popular: function(){
				$.ajax({
					url: 'https://api.instagram.com/v1/media/popular?callback=?',
					dataType: "json",
					data: {
						count: $('#embedagram').data('count') || 5,
						access_token: Embedagram.access_token
					},
					success: Embedagram.insert
				});
			},

			insert: function(r){
				var photos = $('<div id="embedagram-photos"/>');
				
				$(r.data).each(function(i, photo){
					$('<div>', {
						'data-instagram-id': photo.id,
						'class': 'gram',
					}).html(
						$('<a/>', {
							href: photo.link,
							target: '_blank'
						}).html(
							$('<img/>', {
								src: photo.images.thumbnail.url,
								border: 0
							})
						)
					).appendTo(photos);
				});
				$('#embedagram').after(photos)
			}

		}

		typeof jQuery != "undefined" ? Embedagram.embed() : Embedagram.jquery();

	})()