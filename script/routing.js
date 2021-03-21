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
          path: 'templates/overview',
          title: 'Overview',
          content: Catalog.pageLoader('sections/templates/overview.md')
        },
		
        {
          path: 'templates/pages/empty',
          title: 'Empty Page',
          content: Catalog.pageLoader('sections/templates/pages/empty.md')
        },		
		
        {
          path: 'templates/pages/timeline-feed',
          title: 'Timeline Feed Page',
          content: Catalog.pageLoader('sections/templates/pages/timelinefeed.md')
        },	

        {
          path: 'templates/pages/settings',
          title: 'Settings Page',
          content: Catalog.pageLoader('sections/templates/pages/settings.md')
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
          title: 'Imperfect Gamers',
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