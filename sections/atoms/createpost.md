Elements used:
[Avatar](/library/#/components/elements/avatars)
[Button](/components/form?a=buttons)
[Input](/components/form?a=field)

```html
responsive: true
lang:html
---
<!--  Reference tailwindcss stylesheet and alpinejs script -->
  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
	 <div class="px-4 py-4 transition bg-white border-b">
         <div class="flex flex-col">
		 <form>
            <div class="flex">
               <div class="my-auto">
<!-- BEGIN AVATAR MEDIUM -->
   <div class="w-10 h-10 font-bold text-center transition text-white bg-gray-700 bg-center m-1 mr-2 border-4 border-gray-500 rounded-full cursor-pointer select-none hover:opacity-80">
      <div class="my-1">?</div>
   </div>
<!-- END AVATAR MEDIUM -->
               </div>
               <textarea id="text" name="post" class="w-full text-lg h-6 transition p-2 bg-white resize-none focus:outline-none char-limiter" maxlength="280" placeholder="What's Poppin'." rows="3" spellcheck="true" style="height:44px;overflow-y:hidden;"></textarea>
            </div>

            <div class="flex m-2 text-gray-500 icons ml-14">  
		   
<div class="ml-auto">ddd</div> 
				   
               <div class="ml-auto text-xs font-semibold text-gray-400 count">0 / 280</div>
            </div>
            <div class="flex flex-row-reverse">
               <button class="p-1 px-4 font-semibold text-white transition bg-red-500 rounded-md select-none focus:outline-none">Post</button>   
			</div>
			</form>
         </div>
	</div>
```