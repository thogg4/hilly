class Api
  def self.all
    puts self.name

    connection = Faraday.new("https://api.github.com/orgs/thogg4/projects",
      headers: {
        "Authorization" => "token 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",
      }
    )
    response = connection.get

    puts response.inspect

    []
  end
end
