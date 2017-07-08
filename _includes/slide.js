Reveal.addEventListener( 'ready', function(){
    head.test(head.desktop&&/print-pdf/gi.test(location.search),
        [
          '{{ site.reveal.cdn }}css/theme/white.min.css',
          '{{ site.reveal.cdn }}css/print/pdf.min.css'
        ],
        [],
        function(){window.print(); setTimeout("history.go(-1)",1500)}
    )
} );
Reveal.initialize({
{% if page.height %} height: {{ page.height }}, {% endif %}
{% if page.width %} width: {{ page.width }}, {% endif %}
loop: {{ page.loop | default: "false" }},
controls: true,
progress: true,
history: true,
center: true,
touch: true,
slideNumber: 'c/t',
transition: '{{ page.transition | default: "slide" }}', 
dependencies: [
    { src: '{{ "lib/js/classList.js" | prepend: site.reveal.cdn }}', condition: function() { return !document.body.classList; } },
    { 
    src: '{{ "/assets/js/notes.plugin.min.js" | prepend: site.baseurl }}',
    condition: function() { return head.desktop}
    }
    {% for plugin in page.plugins %}
    ,{
        src: '{{ plugin.src}}',
        {% if plugin.callback %}
        callback: {{ plugin.callback }},
        {% endif %}   
        {% if plugin.async %}
        async: true
        {% endif %}
    }
    {% endfor %}
]
});
