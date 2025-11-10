export default function Community() {
  return (
    <section className="text-white text-center mt-12 w-full max-w-4xl px-4">
      <h2 className="text-4xl font-bold mb-8 text-gta-pink" style={{ textShadow: '2px 2px 4px #000' }}>
        Community
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <blockquote
          className="reddit-embed-bq"
          style={{ height: '500px' }}
          data-embed-height="739"
        >
          <a href="https://www.reddit.com/r/GTAIV/comments/1osk2tm/bro_said_one_last_puff/">
            Bro said “one last puff”
          </a>
          <br /> by
          <a href="https://www.reddit.com/user/FireVoid_1899/">u/FireVoid_1899</a> in
          <a href="https://www.reddit.com/r/GTAIV/">GTAIV</a>
        </blockquote>
      </div>
    </section>
  )
}
