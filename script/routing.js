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
      title: 'Atoms',
	  
	  
      pages: [
	  
        {
          path: 'atoms/intro',
          title: 'Intro',
          content: Catalog.pageLoader('sections/atoms/intro.md')
        },
		
        {
          path: 'atoms/buttons',
          title: 'Buttons',
          content: Catalog.pageLoader('sections/atoms/buttons.md')
        },
		
        {
          path: 'atoms/input',
          title: 'Input',
          content: Catalog.pageLoader('sections/atoms/input.md')
        },				
		
        {
          path: 'atoms/avatars',
          title: 'Avatars',
          content: Catalog.pageLoader('sections/atoms/avatars.md')
        },			
		
      ]
    },
	
		    {
      title: 'Molecules',
	  
	  
      pages: [
	  
        {
          path: 'molecules/intro',
          title: 'Intro',
          content: Catalog.pageLoader('sections/molecules/intro.md')
        },
		
        {
          path: 'molecules/login',
          title: 'Login',
          content: Catalog.pageLoader('sections/molecules/login.md')
        },		
		
        {
          path: 'molecules/searchbar',
          title: 'Search Bar',
          content: Catalog.pageLoader('sections/molecules/searchbar.md')
        },
		
	
		
      ]
    }, 	
	

		    {
      title: 'Organisms',
	  
	  
      pages: [
        {
          path: 'organisms/intro',
          title: 'Intro',
          content: Catalog.pageLoader('sections/organisms/intro.md')
        },	  
	  
        {
          path: 'organisms/login',
          title: 'Login',
          content: Catalog.pageLoader('sections/organisms/login.md')
        },
			
		
        {
          path: 'organisms/header',
          title: 'Header',
          content: Catalog.pageLoader('sections/organisms/header.md')
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