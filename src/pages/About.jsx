import React from 'react'

function About() {
  return (
    <div>
        <h1 className="text-6xl mb-4">Github finder</h1>
        <p className="mb-4 text-2xl font-light">
            A react app to search Github projects.
        </p>
        <p className="text-lg text-grey-400">
            Built by <span className="text-white">Cosmin Hutanu</span>
        </p>
        <p className="text-lg text-grey-400">
           Version <span className="text-white">1.0.0</span>
        </p>
    </div>
  )
}

export default About