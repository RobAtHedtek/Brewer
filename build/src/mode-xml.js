define("ace/mode/xml",["require","exports","module","pilot/oop","ace/mode/text","ace/tokenizer","ace/mode/xml_highlight_rules"],function(a,b,c){var d=a("pilot/oop"),e=a("ace/mode/text").Mode,f=a("ace/tokenizer").Tokenizer,g=a("ace/mode/xml_highlight_rules").XmlHighlightRules,h=function(){this.$tokenizer=new f((new g).getRules())};d.inherits(h,e),function(){this.getNextLineIndent=function(a,b,c){return this.$getIndent(b)}}.call(h.prototype),b.Mode=h}),define("ace/mode/xml_highlight_rules",["require","exports","module","pilot/oop","ace/mode/text_highlight_rules"],function(a,b,c){var d=a("pilot/oop"),e=a("ace/mode/text_highlight_rules").TextHighlightRules,f=function(){this.$rules={start:[{token:"text",regex:"<\\!\\[CDATA\\[",next:"cdata"},{token:"xml_pe",regex:"<\\?.*?\\?>"},{token:"comment",regex:"<\\!--",next:"comment"},{token:"text",regex:"<\\/?",next:"tag"},{token:"text",regex:"\\s+"},{token:"text",regex:"[^<]+"}],tag:[{token:"text",regex:">",next:"start"},{token:"keyword",regex:"[-_a-zA-Z0-9:]+"},{token:"text",regex:"\\s+"},{token:"string",regex:'".*?"'},{token:"string",regex:'["].*$',next:"qqstring"},{token:"string",regex:"'.*?'"},{token:"string",regex:"['].*$",next:"qstring"}],qstring:[{token:"string",regex:".*'",next:"tag"},{token:"string",regex:".+"}],qqstring:[{token:"string",regex:'.*"',next:"tag"},{token:"string",regex:".+"}],cdata:[{token:"text",regex:"\\]\\]>",next:"start"},{token:"text",regex:"\\s+"},{token:"text",regex:"(?:[^\\]]|\\](?!\\]>))+"}],comment:[{token:"comment",regex:".*?-->",next:"start"},{token:"comment",regex:".+"}]}};d.inherits(f,e),b.XmlHighlightRules=f})