require 'net/http'
require 'uri'

module Jekyll

  class RemoteInclude < Liquid::Tag

    def initialize(tag_name, markup, tokens)
      super
      @markup = markup
    end

    def open(url)
      puts url
      Net::HTTP.get(URI.parse(url.strip)).force_encoding 'utf-8'
    end

    def render(context)
      # Render any liquid variables in tag arguments and unescape template code
      render_markup = Liquid::Template.parse(@markup).render(context).gsub(/\\\{\\\{|\\\{\\%/, '\{\{' => '{{', '\{\%' => '{%')
      open(render_markup)
    end

  end
end

Liquid::Template.register_tag('remote_include', Jekyll::RemoteInclude)
