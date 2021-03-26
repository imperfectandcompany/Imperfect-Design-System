    Catalog.render({
      title: 'Imperfect Design System',
	  logoSrc: '/library/img/imperfectandcompany.png',
      pages: [
        {
          path: '/',
          title: 'Introduction',
          src: 'sections/main/intro.md'
        },
		
		    {
      title: 'Components',
	  
	  
      pages: [
	  
        {
          path: 'components/overview',
          title: 'Overview',
          content: Catalog.pageLoader('sections/components/overview.md')
        },
		
        {
          path: 'components/elements/form',
          title: 'Form',
          content: Catalog.pageLoader('sections/components/elements/form.md')
        },		
		
        {
          path: 'components/elements/presence',
          title: 'Presence',
          content: Catalog.pageLoader('sections/components/elements/presence.md')
        },	
		
        {
          path: 'components/elements/createpost',
          title: 'Create Post',
          content: Catalog.pageLoader('sections/components/elements/createpost.md')
        },	
		
        {
          path: 'components/elements/avatars',
          title: 'Avatars',
          content: Catalog.pageLoader('sections/components/elements/avatars.md')
        },			
		
      ]
    }, 

		    {
      title: 'Templates',
	  
	  
      pages: [
        {
          path: 'templates/login',
          title: 'Login',
          content: Catalog.pageLoader('sections/templates/login.md')
        },
		
        {
          path: 'templates/signup',
          title: 'Sign up',
          content: Catalog.pageLoader('sections/templates/signup.md')
        },		
		
        {
          path: 'templates/forgot-password',
          title: 'Forgot Password',
          content: Catalog.pageLoader('sections/templates/forgotpassword.md')
        },

        {
          path: 'templates/reset-password',
          title: 'Reset Password',
          content: Catalog.pageLoader('sections/templates/resetpassword.md')
        },	

        {
          path: 'templates/redeem-token',
          title: 'Redeem Token',
          content: Catalog.pageLoader('sections/templates/redeemtoken.md')
        },	

        {
          path: 'templates/create-post',
          title: 'Create Post',
          content: Catalog.pageLoader('sections/templates/createpost.md')
        },

        {
          path: 'templates/contact-slider',
          title: 'Contact Slider',
          content: Catalog.pageLoader('sections/templates/contactslider.md')
        },			
		

        {
          path: 'templates/messages',
          title: 'Messages',
          content: Catalog.pageLoader('sections/templates/messages.md')
        },

		
      ]
    }, 

	
		    {
      title: 'Pages',
	  
	  
      pages: [
        {
          path: 'pages/overview',
          title: 'Overview',
          content: Catalog.pageLoader('sections/pages/overview.md')
        },
		
        {
          path: 'pages/empty',
          title: 'Empty',
          content: Catalog.pageLoader('sections/pages/empty.md')
        },		
		
        {
          path: 'pages/timeline-feed',
          title: 'Timeline',
          content: Catalog.pageLoader('sections/pages/timeline.md')
        },	

        {
          path: 'pages/settings',
          title: 'Settings',
          content: Catalog.pageLoader('sections/pages/settings.md')
        },

		
      ]
    }, 
	
	
		    {
      title: 'Media Kit',
      pages: [
	 
        {
          path: 'mediakit/overview',
          title: 'Overview',
          content: Catalog.pageLoader('sections/mediakit/overview.md')
        },
		
        {
          path: 'mediakit/postogon',
          title: 'Postogon',
          content: Catalog.pageLoader('sections/mediakit/branches/postogon.md')
        },

        {
          path: 'mediakit/imperfect-and-company',
          title: 'Imperfect and Company',
          content: Catalog.pageLoader('sections/mediakit/branches/imperfectandcompany.md')
        },	
	
        {
          path: 'mediakit/imperfect-gamers',
          title: 'Imperfect Gamers',
          content: Catalog.pageLoader('sections/mediakit/branches/imperfectgamers.md')
        },	

        {
          path: 'mediakit/imperfect-sounds',
          title: 'Imperfect Sounds',
          content: Catalog.pageLoader('sections/mediakit/branches/imperfectsounds.md')
        },		
		
      ]
    },	
		
	
	
        // Other pages...
      ]
    }, document.getElementById('catalog'));